// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')



const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            image: "./src/assets/images/socks_green.jpg",
            onSale: false,
            productLink : "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        }
    }
})