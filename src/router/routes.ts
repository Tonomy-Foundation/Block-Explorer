import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Network.vue') }]
  },
  {
    path: '/account',
    name: 'account',
    props: true,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Account.vue')
      }
    ]
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Transaction.vue') }]
  },
  {
    path: '/block/:block',
    name: 'block',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Block.vue') }]
  },
  {
    path: '/network',
    name: 'network',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Network.vue') }]
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Vote.vue') }]
  },
  {
    path: '/proposal',
    name: 'proposal',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Proposal.vue') }]
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Explore.vue') }]
  },
  {
    path: '/repository',
    name: 'repository',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Repository.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
