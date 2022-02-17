<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    let licenseInfo = {
      strCompanyName: '某某某公司',
      strLicense: '*****',
      strLicenseA: '',
      strLicenseB: '',
    }

    // 设置Lodop产品注册信息
    this.$lodop.setLicenses(licenseInfo)
  },

  methods: {},
}
</script>

<style>
/* html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
} */
#app {
  height: 100%;
}
</style>
