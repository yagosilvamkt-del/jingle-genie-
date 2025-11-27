import { defineConfig } from 'vite' // Removido 'loadEnv'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // A Vercel cuida da variável de ambiente para a pasta /api automaticamente.
  // Não precisamos carregar ou injetar variáveis aqui para o frontend.
  return {
    plugins: [react()],
    // Removido o objeto 'define' que causava o erro ao tentar injetar 'process.env.API_KEY' no frontend.
  }
})
