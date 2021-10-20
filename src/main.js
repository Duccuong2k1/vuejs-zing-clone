import Vue from 'vue'
import VueRouter from 'vue-router' // import vue-router trong package.json
import routes from './routes' // import routes cua file routes.js vao
import App from './App.vue'

// Setup the new Howl.
// const sound = new Howl({
//     src: ['sound.mp3']
// });

// // Play the sound. 
// sound.play();

// Change global volume.
// Howler.volume(0.5);

// khai bao de dung router
Vue.use(VueRouter)
const router = new VueRouter({
    routes
})
new Vue({
    el: '#app',
    router: router, // chuyen vao de dua gia tri duong dan ra
    render: h => h(App)
})