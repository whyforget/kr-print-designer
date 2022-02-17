<!--
 * @FileDescription: 打印表体（表头、表尾）配置可选项
 * @Author: why
 -->
<template>
  <div class="options-box">
    <template>
      <div>
        <el-checkbox-group v-model="selectBodyItem ">
          <el-row>
            <el-col v-for="item in bodyItems" :key="item.name" :span="12">
              <el-checkbox
                v-if="item.name!='details'"
                :label="item.name"
                @change="checked=>addItem(checked, item)"
              >{{item.title}}</el-checkbox>
            </el-col>
          </el-row>
        </el-checkbox-group>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectBodyItem: [],
    }
  },
  created: function () {
    this.$vptd.state.page.tempItems.forEach((p) => {
      if (p.name != 'details' && p.name != '') {
        this.selectBodyItem.push(p.name)
      }
    })
  },
  computed: {
    bodyItems() {
      let state = this.$vptd.state
      let ops = state.optionItems.filter((p) => p.name != 'title') //移除标题勾选配置，不可取消
      //用模板的自定义名称覆盖配置项默认名称，todo表格明细字段名称
      ops.forEach((m) => {
        if (m.name != 'details') {
          let pitem = state.page.tempItems.find((p) => p.name == m.name)
          if (pitem && pitem.title != m.title) {
            m.title = pitem.title
            let arr = m.value.split('：')
            m.value = pitem.title + '：' + arr[1]
          }
        }
      })
      return ops
    },
  },
  methods: {
    addItem(checked, item) {
      let statePage = this.$vptd.state.page
      if (checked) {
        let allitems = statePage.tempItems
        var index = allitems.findIndex((p) => p.name == item.name)
        if (index < 0) {
          if (item.name == 'page') {
            //当添加分页对象时，控制位置为右下角
            let _left = statePage.width - item.width
            let _top = statePage.height - item.height
            item.left = _left
            item.top = _top
          }
          this.$vptd.dispatch('addTempItem', item)
        }
      } else {
        let delItem = statePage.tempItems.find((p) => p.name == item.name)
        this.$vptd.commit('select', {
          uuid: delItem.uuid,
        })
        this.$vptd.commit('delete', delItem.uuid)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.options-box {
  .el-button {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 0;
  }
}
</style>
