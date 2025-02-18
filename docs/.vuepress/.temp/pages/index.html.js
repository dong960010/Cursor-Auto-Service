import comp from "C:/Users/dong_960010/Desktop/cursor_auto_service/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/duck.svg\",\"actions\":[{\"text\":\"Download\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"Contract Us\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"🚀 Auto\",\"details\":\"自动注册账号，自动重置本地 Cursor\"},{\"title\":\"⚠️ Importance\",\"details\":\"推荐使用 v0.45.11 版本, 确保安装 Chrome 浏览器，使用稳定的国外节点（非全局代理）\"},{\"title\":\"🖐Contact\",\"details\":\"合作 | 商务 | 购买, 联系客服邮箱：icarus@dongbucheng.fun\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
