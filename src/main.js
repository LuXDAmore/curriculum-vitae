import Vue from 'vue';
import VueCssDoodle from '@luxdamore/vue-css-doodle';
import App from './App';
import router from './router';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '@luxdamore/vue-css-doodle/dist/VueCssDoodle.css';

Vue.config.productionTip = false;

Vue.use(
    VueCssDoodle
);

const vm = new Vue(
    {
        router,
        components: {
            App,
        },
        template: '<App/>',
    },
);

vm.$mount(
    '#app'
);
