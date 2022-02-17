<template>
  <div class="kr-designer">
    <!-- <div class="header">dd</div> -->
    <div class="kr-designer-tool">
      <el-scrollbar class="kr-designer-tool_con">
        <panel class="control-panel" />
      </el-scrollbar>
      <div class="kr-designer-tool_bar">
        <el-button size="mini" type="success" @click="saveTemp">保存</el-button>
        <el-button size="mini" type="primary" @click="previewTemp">预览</el-button>
        <el-button size="mini" type="primary" @click="texport">导出</el-button>
        <!-- <el-button size="mini" type="primary" @click="timport">导入</el-button> -->
        <el-upload
          :drag="false"
          :limit="1"
          action="https://jsonplaceholder.typicode.com/posts/"
          ref="upload"
          accept=".json"
          :file-list="fileList"
          :on-success="onImportSuccess"
          :on-remove="onImportRemove"
          :show-file-list="false"
        >
          <el-button size="mini" type="primary">导入</el-button>
        </el-upload>
      </div>
    </div>
    <viewport class="kr-designer-view" />
    <div class="kr-designer-tool">
      <el-scrollbar class="kr-designer-tool_con">
        <PanelStyle class="control-panel" />
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import Viewport from './components/viewport/index.vue'
import Panel from './components/panel/index.vue'
import PanelStyle from './components/panel/index-style.vue'
import cloneDeep from 'lodash/cloneDeep'
import FileSaver from 'file-saver'
import ElementUI from 'element-ui'
import Message from 'element-ui'

export default {
  name: 'kr-print-designer',
  components: { Viewport, Panel, PanelStyle },
  props: {
    widgetOptions: {
      type: Array,
      default: () => [],
    },
    tempValue: {
      type: Object,
      default: () => ({ title: 'demo', width: 750, height: 550, pageWidth: 750, pageHeight: 550, tempItems: [] }),
    },
  },
  data() {
    return {
      fileList: [],
      uploadData: [],
    }
  },
  created() {
    this.initTemp(this.tempValue, this.widgetOptions)
  },
  methods: {
    // 保存模板
    saveTemp() {
      let page = this.$vptd.state.page
      this.$emit('save', cloneDeep(page))
    },
    // 预览模板
    previewTemp() {
      let page = { ...this.$vptd.state.page }
      this.$lodop.previewTemp(cloneDeep(page))
    },
    texport() {
      let state = this.$vptd.state
      const data = JSON.stringify(state.page)
      const blob = new Blob([data], { type: '' })
      FileSaver.saveAs(blob, '打印模板--【' + state.page.title + '】' + Date.parse(new Date()) + '.json')
    },
    onImportSuccess(res, file, fileList) {
      let reader = new FileReader()
      reader.readAsText(file.raw)
      reader.onload = (e) => {
        this.uploadData = []
        this.uploadData = JSON.parse(e.target.result)
        if (this.tempValue.billType != this.uploadData.billType) {
          Message.Message({
            message: '导入的模板单据类型和当前模板单据类型不匹配，请检查！',
            type: 'warning',
          })
        } else {
          this.initTemp(this.uploadData, this.widgetOptions)
        }
      }
    },
    onImportRemove() {
      this.fileList = []
    },
    // 初始化设计器
    initTemp(tempValue, widgetOptions) {
      this.$vptd.dispatch('designerInit', {
        tempValue: cloneDeep(tempValue),
        options: cloneDeep(widgetOptions),
      })
    },
  },
}
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
}
.kr-designer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  .kr-designer-view {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  // .header {
  //   width: 100%;
  //   height: 100px;
  //   display: flex;
  //   flex-direction: row;
  // }
  .kr-designer-tool {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-scrollbar__wrap {
      overflow: auto;
    }
    &_con {
      flex: 1;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    &_bar {
      padding: 10px;
      text-align: center;
    }
  }
}

.kr-form {
  .el-form-item--mini.el-form-item {
    margin-bottom: 10px;
  }
  .min-input {
    width: 100px;
  }
  .unit-text {
    font-size: 12px;
    color: #999999;
    margin-left: 5px;
  }
}

.kr-collapse {
  color: #555555;
  width: 400px;

  .el-collapse-item__header {
    box-sizing: border-box;
    padding-left: 10px;
  }

  .el-collapse-item__content {
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
