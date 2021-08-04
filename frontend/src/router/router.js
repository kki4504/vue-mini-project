import  Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Books from '@/components/Books.vue'


Vue.use(VueRouter)

export default new VueRouter ({
    mode:'history',
    routes: [
        { path : '/', component:Home },
        { path : '/books/:bookId', component:Books, props:true},
    ]
});