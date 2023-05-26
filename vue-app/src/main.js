// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            details: ["50% cotton", "30% wool", "20% polyester"],
            image: "./src/assets/images/socks_green.jpg",
            variants: [
                {id: 2234, color: "green", image: "./src/assets/images/socks_green.jpg"},
                {id: 2235, color: "blue", image: "./src/assets/images/socks_blue.jpg"},
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})