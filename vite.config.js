import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                app: './project/index.html',
            },
        },
    },
    server: {
        open: './project/index.html',
    },
})