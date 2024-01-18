import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Message from '@/components/Message'
import Tab1 from '@/components/Tab1'
import Tab2 from '@/components/Tab2'
import Tab3 from '@/components/Tab3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/message',
      // name: 'Message',
      component: Message,
      redirect: '/message/tab1',
      children: [
        {
          path: 'tab1',
          name: 'Tab1',
          component: Tab1
        },
        {
          path: 'tab2',
          name: 'Tab2',
          component: Tab2
        },
        {
          path: 'tab3',
          name: 'Tab3',
          component: Tab3
        }
      ]
    }
  ]
})
