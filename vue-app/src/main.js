// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            brand: "Vue Mastery",
            details: ["50% cotton", "30% wool", "20% polyester"],
            image: "./src/assets/images/socks_green.jpg",
            inStock: false,
            variants: [
                {
                    id: 2234, 
                    color: "green", 
                    image: "./src/assets/images/socks_green.jpg",
                    quantity: 50,
                },
                {
                    id: 2235, 
                    color: "blue", 
                    image: "./src/assets/images/socks_blue.jpg",
                    quantity: 0,
                },
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart(){
            if (this.cart >0) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        
    },
    computed: {
        title() {
            return this.brand+ " " +this.product
        }
    }
})