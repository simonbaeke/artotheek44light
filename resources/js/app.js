/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window.axios = require('axios');

require('./bootstrap');


import Vue from 'vue'

import VueRouter from 'vue-router'

import router from './router/index'
import store from './store/index'
import vuetify from './plugin/vuetify'

import App from './app.vue'

Vue.use(VueRouter)


const app= new Vue({
    el:'#app',
    router,
    store,
    vuetify,
    components:{
        App
    }
})
