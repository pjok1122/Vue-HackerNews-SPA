import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        //path : url 주소, component : 페이지에 보여질 컴포넌트
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name : 'news',
            // component: NewsView,
            component: createListView('NewsView'),
        },
        {
            path: '/jobs',
            name : 'jobs',
            // component: JobsView,
            component: createListView('JobsView'),
        },
        {
            path: '/ask',
            name : 'ask',
            // component: AskView ,
            component: createListView('AskView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
});