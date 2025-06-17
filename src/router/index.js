import Resume from '@/pages/resume';
import Home from '@/pages/home';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(
    Router,
);

export default new Router(
    {
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/resume/:resumeid',
                name: 'resume',
                component: Resume,
            },
        ],
    },
);
