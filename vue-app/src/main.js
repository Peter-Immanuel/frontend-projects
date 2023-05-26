// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            image: "./src/assets/images/socks_green.jpg",
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {id: 2234, color: "green"},
                {id: 2235, color: "blue"},
            ],
            sizes: [3, 4, 6, 8, 9],
            // sizes: []
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        }
    }
})