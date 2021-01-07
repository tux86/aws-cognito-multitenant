import Vue from 'vue'
import App from '@/App.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Amplify from "aws-amplify";
import awsConfig from "@/aws-config";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Amplify.configure(awsConfig.Auth);

new Vue({
    render: h => h(App),
}).$mount('#app')
