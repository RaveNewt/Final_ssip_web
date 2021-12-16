/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import firebase from 'firebase';

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import Upload from './views/Upload';
Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound },
    { path: '/upload', component: Upload }
  ],
  mode: 'hash'
})

new Vue({
  router,
  vuetify,
  render: h => h(App),

  created () {
    const firebaseConfig = {
      apiKey: "AIzaSyBd2tzZ439S8HRBh-INA3qELHDAvVj_z60",
      authDomain: "create-image-dd1cd.firebaseapp.com",
      projectId: "create-image-dd1cd",
      storageBucket: "create-image-dd1cd.appspot.com",
      messagingSenderId: "392469520989",
      appId: "1:392469520989:web:6f873d15bd4f107b2623b4",
      measurementId: "G-TJ3B0XYMTT"
    };
  
    // Initialize Firebase
    // eslint-disable-next-line no-undef
    firebase.initializeApp(firebaseConfig);
    firebase.analytics;
    
    Vue.prototype.$firebase = firebase
  }
}).$mount('#app')
