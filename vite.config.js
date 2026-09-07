import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // เปลี่ยน /nawaphat-portfolio/ เป็นชื่อ Repository ใน GitHub ของคุณ
  base: '/My_Portfolio/', 
})