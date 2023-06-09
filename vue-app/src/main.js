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
            onSale: true,
            details: ["50% cotton", "30% wool", "20% polyester"],
            image: "./src/assets/images/socks_green.jpg",
            selectedVariant: 0,
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
        updateVariant(index) {
            this.selectedVariant = index
        },
        
    },
    computed: {
        title() {
            return this.brand+ " " +this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock () {
            return this.variants[this.selectedVariant].quantity
        },
        productOnSale() {
            if (this.onSale) {
                return this.brand + " " + this.product + " is on sale"
            }
        }
    }

})