<!--
 * @FileDescription: 隐藏默认的 样式 组件 已加组件 
 * @Author: why
 -->
<template>
  <div class="kr-collapse">
    <el-collapse v-model="activeNames">
      <el-collapse-item title name="1">
        <template slot="title">
          <span>页面设置</span>
        </template>
        <page />
      </el-collapse-item>
      <el-collapse-item v-show="false" name="2">
        <template slot="title">
          <span>样式</span>
        </template>
        <appearance class="pd-l-10" />
      </el-collapse-item>
      <el-collapse-item v-show="false" name="3">
        <template slot="title">
          <span>组件</span>
        </template>
        <options />
      </el-collapse-item>
      <el-collapse-item v-show="false" name="4">
        <template slot="title">
          <span>已加组件</span>
        </template>
        <layers />
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <span>表体字段</span>
        </template>
        <bodyitem />
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <span>明细字段</span>
        </template>
        <detail />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import page from './page.vue'
import style from './style.vue'
import options from './options/index.vue'
import layers from './layers.vue'
import detail from './options/detail.vue'
import bodyitem from './options/body.vue'

export default {
  components: {
    page,
    appearance: style,
    options,
    layers,
    detail,
    bodyitem,
  },

  data() {
    return {
      activeNames: ['1', '2', '3', '4', '5', '6'],
    }
  },
}
</script>
