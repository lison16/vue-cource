import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/menu_page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/upload.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'folder_tree',
        component: () => import('@/views/folder-tree/folder-tree.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'table',
    component: Layout,
    children: [
      {
        path: 'table',
        component: () => import('@/views/table.vue')
      }
    ]
  },
  {
    path: '/render_page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
