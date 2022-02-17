<template>
  <div>
    <el-form label-width="80px" :model="pageInfo" size="mini" class="kr-form">
      <el-row>
        <el-form-item label="模板名称">
          <el-input v-model="pageInfo.title" class="full-w"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="纸张">
          <el-select
            v-model="pageInfo.pageValue"
            style="width:100%"
            placeholder="请选择"
            @change="selPage"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row v-show="true">
        <el-col :span="12">
          <el-form-item label="模板宽度">
            <el-input-number
              v-model="pageInfo.width"
              controls-position="right"
              :min="0"
              class="min-input"
              :disabled="true"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模板高度">
            <el-input-number
              v-model="pageInfo.height"
              controls-position="right"
              :min="0"
              class="min-input"
              :disabled="true"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="纸张宽度">
          <el-input-number
            v-model="pageInfo.pageWidth"
            controls-position="right"
            :min="0"
            class="min-input"
            :disabled="pageInfo.pageValue!=4"
            @change="(current,old)=>cusPageWidth(current,old)"
          ></el-input-number>
          <span class="unit-text">(mm)</span>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="纸张高度">
          <el-input-number
            v-model="pageInfo.pageHeight"
            controls-position="right"
            :min="0"
            class="min-input"
            :disabled="pageInfo.pageValue!=4"
            @change="(current,old)=>cusPageHeight(current,old)"
          ></el-input-number>
          <span class="unit-text">(mm)</span>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      options: [
        {
          value: 1,
          label: 'A4',
          width: 210,
          height: 297,
        },
        {
          value: 2,
          label: 'A4二等分',
          width: 210,
          height: 140,
        },
        {
          value: 3,
          label: 'A4三等分',
          width: 210,
          height: 93,
        },
        {
          value: 4,
          label: '自定义纸张',
          width: 210,
          height: 140,
        },
      ],
      curSelPage: 1,
    }
  },
  created: function () {
    this.curSelPage = this.$vptd.state.page.pageValue
  },
  computed: {
    pageInfo() {
      return this.$vptd.state.page
    },
  },
  methods: {
    getOneMmsPx() {
      let div = document.createElement('div')
      div.id = 'mm'
      div.style.width = '1mm'
      document.querySelector('body').appendChild(div)
      let mm1 = document.getElementById('mm').getBoundingClientRect()
      console.log(mm1)
      return mm1.width
    },
    selPage(value) {
      let page = this.options.find((p) => p.value == value)
      let statPage = this.$vptd.state.page
      statPage.pageWidth = page.width
      statPage.pageHeight = page.height

      let oneMmPx = this.getOneMmsPx()
      let tempWidth = parseInt(oneMmPx * page.width)
      let tempHeight = parseInt(oneMmPx * page.height)

      statPage.width = tempWidth
      statPage.height = tempHeight
      //切换纸张后控制表格下方打印元素位置
      let pageItem = statPage.tempItems.find((p) => p.name == 'page')
      if (pageItem) {
        let _top = tempHeight - pageItem.height
        let _left = tempWidth - pageItem.width
        pageItem.top = _top
        pageItem.left = _left
      }

      let preHeight = this.getPxFromMm(this.options[this.curSelPage - 1].height)
      let diff = tempHeight - preHeight
      let detailsItem = statPage.tempItems.find((p) => p.name == 'details')
      detailsItem.height = detailsItem.height + diff

      statPage.tempItems.forEach((item) => {
        if (item.top >= detailsItem.top && item.style.ItemType == 0) {
          item.top = item.top + diff
        }
      })

      // if (value == 1 || value == 2) {
      //   //a4 , 二等分: 控制页码的位置如果有
      //   let pageItem = statPage.tempItems.find((p) => p.name == 'page')
      //   if (pageItem) {
      //     let _top = tempHeight - pageItem.height
      //     let _left = tempWidth - pageItem.width
      //     pageItem.top = _top
      //     pageItem.left = _left
      //   }

      //   // let overItem = statPage.tempItems.find((p) => p.top > tempHeight)
      //   // if (overItem || this.curSelPage == 3) {
      //   let preHeight = this.getPxFromMm(this.options[this.curSelPage - 1].heigh)
      //   let diff = tempHeight - preHeight
      //   let detailsItem = statPage.tempItems.find((p) => p.name == 'details')
      //   detailsItem.height = detailsItem.height + diff

      //   statPage.tempItems.forEach((item) => {
      //     if (item.top >= detailsItem.top && item.style.ItemType == 0) {
      //       item.top = item.top + diff
      //     }
      //   })
      //   // }
      // } else if (value == 3) {
      //   //a4-3 : 控制表格高度，表格下方元素位置。以二等分为标准，获取缩减高度。
      //   let pageItem = statPage.tempItems.find((p) => p.name == 'page')
      //   if (pageItem) {
      //     let _top = tempHeight - pageItem.height
      //     let _left = tempWidth - pageItem.width
      //     pageItem.top = _top
      //     pageItem.left = _left
      //   }

      //   let twoPartHeight = this.getPxFromMm(this.options[this.curSelPage - 1].heigh)
      //   let diff = twoPartHeight - tempHeight
      //   let detailsItem = statPage.tempItems.find((p) => p.name == 'details')
      //   detailsItem.height = detailsItem.height - diff

      //   statPage.tempItems.forEach((item) => {
      //     if (item.top >= detailsItem.top && item.style.ItemType == 0) {
      //       item.top = item.top - diff
      //     }
      //   })
      // }

      this.curSelPage = value
    },
    getPxFromMm(mm) {
      return parseInt(this.getOneMmsPx() * mm)
    },
    cusPageWidth(currentValue, oldValue) {
      let oneMmPx = this.getOneMmsPx()
      let tempWidth = parseInt(oneMmPx * currentValue)
      this.$vptd.state.page.width = tempWidth
      let statPage = this.$vptd.state.page
      // 模板宽度改变时 表格，分页项 改变对应模板的宽度，其他普通项目影藏
      let detailsItem = statPage.tempItems.find((p) => p.name == 'details')
      let pageItem = statPage.tempItems.find((p) => p.name == 'page')
      let diff = parseInt(oneMmPx * oldValue) - tempWidth
      detailsItem.width = detailsItem.width - diff
      if (pageItem) {
        pageItem.left = pageItem.left - diff
      }

      // if (diff > 0) {
      //   //只处理宽度变小的情况，将超出的元素左移，直到left<0时抛出异常
      //   try {
      //     statPage.tempItems.forEach((item) => {
      //       if (item.left + item.width > tempWidth && item.style.ItemType == 0) {
      //         let _left = item.left - diff
      //         if (_left < 0) {
      //           throw new Error('dxx')
      //         } else {
      //           item.left = _left
      //         }
      //       }
      //     })
      //   } catch (e) {
      //     // Message({
      //     //   message: '宽度对于当前页面元素太小，已取消设置',
      //     //   type: 'warning',
      //     // })
      //     // statPage.width = parseInt(oneMmPx * oldValue)
      //     // this.$vptd.state.page.pageWidth = oldValue
      //   }
      // }
    },
    cusPageHeight(currentValue, oldValue) {
      let oneMmPx = this.getOneMmsPx()
      let tempHeight = parseInt(oneMmPx * currentValue)
      this.$vptd.state.page.height = tempHeight

      let statPage = this.$vptd.state.page
      // 模板宽度改变时 表格，分页项 改变对应模板的宽度，其他普通项目影藏
      let detailsItem = statPage.tempItems.find((p) => p.name == 'details')
      let pageItem = statPage.tempItems.find((p) => p.name == 'page')
      let diff = parseInt(oneMmPx * oldValue) - tempHeight
      detailsItem.height = detailsItem.height - diff
      if (pageItem) {
        pageItem.top = pageItem.top - diff
      }
    },
  },
}
</script>

