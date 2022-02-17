<!--
 * @FileDescription: 打印商品明细配置可选项
 * @Author: why
 -->
<template>
  <div class="options-box">
    <template>
      <div>
        <el-checkbox-group v-model="selectColItem">
          <el-row>
            <el-col v-for="col in detailItems.columnsAttr" :key="col.name" :span="12">
              <el-checkbox :label="col.name" @change="checked=>addCol(checked, col)">{{col.title}}</el-checkbox>
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
      selectColItem: [],
    }
  },
  created: function () {
    var details = this.$vptd.state.page.tempItems.find((p) => p.name == 'details')
    details.columns.forEach((p) => {
      if (p.name != '') {
        this.selectColItem.push(p.name)
      }
    })
  },
  computed: {
    detailItems() {
      var detail = this.$vptd.state.optionItems.find((p) => p.name == 'details')
      return detail
    },
  },
  methods: {
    addCol(checked, col) {
      let details = this.$vptd.state.page.tempItems.find((p) => p.name == 'details')
      if (checked) {
        details.columns.push(col)
        details.columns.sort((a, b) => a.order - b.order)
      } else {
        details.columns.splice(
          details.columns.findIndex((item) => item.name == col.name),
          1
        )
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
