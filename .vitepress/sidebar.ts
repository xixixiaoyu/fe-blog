import { getSidebar } from './utils'

export default {
  '/books': getSidebar('books'),
  '/vue': [
    {
      text: '玩转Vue3',
      collapsed: false,
      items: [
        {
          text: 'Vue3+TS企业级实战+组件库',
          link: '/vue/'
        }
      ]
    }
  ]
}
