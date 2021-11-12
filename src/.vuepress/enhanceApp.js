/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import { checkAuth } from './login/helper'
import Login from './login/Login'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.mixin({
    mounted() {
      const doCheck = () => {
        if (!checkAuth()) {
          this.$dlg.modal(Login, {
            width: 300,
            height: 350,
            title: 'KrillUI Login',
            singletonKey: 'KrillUI Login',
            maxButton: false,
            closeButton: false,
            callback: data => {
              if (data === true) {
                // do some stuff after login
              }
            }
          })
        }
      }

      if (this.$dlg) {
        doCheck()
      } else {
        import('v-dialogs').then(resp => {
          Vue.use(resp.default)
          this.$nextTick(() => {
            doCheck()
          })
        })
      }
    }
  })
}
