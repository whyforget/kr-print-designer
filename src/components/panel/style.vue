<template>
  <div>
    <!-- 公共属性 -->
    <el-form label-width="80px" :model="activeElement" size="mini" class="kr-form">
      <el-row>
        <el-form-item label="字段名称">
          <el-input
            v-model="activeElement.title"
            @change="updateTitle($event)"
            class="full-w"
            :clearable="false"
            :minlength="1"
            :disabled="activeElement.name=='page'"
          ></el-input>
        </el-form-item>
        <!--<el-form-item label="明细字段名称">
          <el-input
            v-model="activeElement.title"
            @change="updateTitle($event)"
            class="full-w"
            :clearable="false"
            :minlength="1"
          ></el-input>
        </el-form-item>-->
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="宽度">
            <el-input-number
              v-model="activeElement.width"
              controls-position="right"
              :min="1"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="高度">
            <el-input-number
              v-model="activeElement.height"
              controls-position="right"
              :min="1"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="横坐标">
            <el-input-number
              v-model="activeElement.left"
              controls-position="right"
              :min="0"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="纵坐标">
            <el-input-number
              v-model="activeElement.top"
              controls-position="right"
              :min="0"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="字号">
            <el-input-number
              :disabled="activeElement.style.FontSize===undefined"
              v-model="activeElement.style.FontSize"
              controls-position="right"
              :min="0"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="加粗">
            <el-switch
              :disabled="activeElement.style.Bold===undefined"
              v-model="activeElement.style.Bold"
              :active-value="true"
              :inactive-value="false"
            ></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="字体颜色">
            <el-color-picker
              :disabled="activeElement.style.FontColor===undefined"
              v-model="activeElement.style.FontColor"
            ></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="边框颜色">
            <el-color-picker
              :disabled="activeElement.style.BorderColor===undefined"
              v-model="activeElement.style.BorderColor"
            ></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="条码值">
            <el-switch
              :disabled="activeElement.style.ShowBarText===undefined"
              v-model="activeElement.style.ShowBarText"
              :active-value="true"
              :inactive-value="false"
            ></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="对齐方式">
          <el-radio-group
            :disabled="activeElement.style.Alignment===undefined"
            v-model="activeElement.style.Alignment"
          >
            <el-radio :label="'left'">左对齐</el-radio>
            <el-radio :label="'center'">居中</el-radio>
            <el-radio :label="'right'">右对齐</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="条码类型">
            <el-select
              :disabled="activeElement.style.codeType===undefined"
              v-model="activeElement.style.codeType"
              class="min-input"
            >
              <el-option v-for="val in codeTypeArray" :key="val" :label="val" :value="val" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="打印类型">
            <el-select :disabled="true" v-model="activeElement.style.ItemType" class="min-input">
              <el-option
                v-for="val in itemTypeArray"
                :key="val.value"
                :label="val.label"
                :value="val.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="高度自动">
            <el-switch
              :disabled="activeElement.style.AutoHeight===undefined"
              v-model="activeElement.style.AutoHeight"
              :active-value="true"
              :inactive-value="false"
            ></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="下边距">
            <el-input-number
              :disabled="activeElement.style.BottomMargin===undefined || !activeElement.style.AutoHeight"
              v-model="activeElement.style.BottomMargin"
              controls-position="right"
              :min="0"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { getCodeTypeArray, getItemTypeArray } from '../../libs/props.js'

export default {
  data() {
    return {
      codeTypeArray: getCodeTypeArray(),
      itemTypeArray: getItemTypeArray(),
      tempOldTitle: '',
    }
  },
  computed: {
    activeElement() {
      return this.$vptd.state.activeElement
    },
    // 页面高度
    height() {
      return this.$vptd.state.page.height
    },
  },
  watch: {
    'activeElement.title': {
      handler(newName, oldName) {
        console.log('newName:' + newName + ' ' + 'oldName:' + oldName)
        this.tempOldTitle = oldName
      },
    },
  },
  methods: {
    updateTitle(value) {
      //修改加载的单据的配置项title，修改（todo远程数据库单据配置项）
      let state = this.$vptd.state
      let ele = state.activeElement
      let optItem = state.optionItems.find((p) => p.name == ele.name)
      if (optItem) {
        if (!value) {
          value = this.tempOldTitle
        }
        if (ele.name == 'title') {
          optItem.title = value
          optItem.value = value
          optItem.defaultValue = value

          ele.value = value
          ele.title = value
        } else {
          let arr = optItem.value.split('：')
          optItem.title = value
          optItem.value = value + '：' + arr[1]
          optItem.defaultValue = optItem.value

          ele.value = optItem.value
          ele.title = value
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.mini-form {
  ::v-deep.el-form-item--mini.el-form-item {
    margin-bottom: 10px;
  }
}
</style>
