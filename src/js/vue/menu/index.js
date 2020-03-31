import Vue from 'vue';
import Layout from './layout/index.vue';

export default class Menu {
    constructor(selector) {
        new Vue({
            el: selector,
            render: h => h(Layout)
        }) 
    }
}