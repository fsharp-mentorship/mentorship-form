import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        proxy: {
            '/.netlify': 'http://localhost:9999'
        }
    }
})