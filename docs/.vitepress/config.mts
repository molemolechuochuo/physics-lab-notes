import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Lab Notes",
  description: "Physics Experiments",
  markdown: {
    math: true
  },

  themeConfig: {
    // 把下面的 username 和 repo 换成你自己的
    editLink: {
      pattern: 'https://github.com/molemolechuochuo/physics-lab-notes/edit/main/docs/:path',
      text: '点我编辑 (Edit this page)'
    }
  }
})