<!--
 * @FileDescription: 组件样式
 * @Author: why
 -->
<template>
  <div class="kr-collapse">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <span>样式</span>
        </template>
        <appearance class="pd-l-10" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import style from './style.vue'

export default {
  components: {
    appearance: style,
  },
  data() {
    return {
      activeNames: ['1'],
    }
  },
}
</script>
