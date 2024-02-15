import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    server:{
        
        port:"3000",
        // proxy:{
        //     '/api':'http://localhost:8000'
        // }
    },
    plugins:[react()]
    
})