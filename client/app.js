import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faFileAlt from '@fortawesome/fontawesome-free-solid/faFileAlt'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
fontawesome.library.add(brands, faGithub, faLinkedin, faFileAlt, faEnvelope)

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
