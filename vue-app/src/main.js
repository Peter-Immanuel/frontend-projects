// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            image: "./src/assets/images/socks_green.jpg",
            details: ["50% cotton, '30% wool, '20% polyester"],
            variant: [
                {id: 2234, color: "green"},
                {id: 2235, color: "blue"},
            ]
        }
    }
})