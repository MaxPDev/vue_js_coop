import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Conversations',
        component: () =>
            import ('../views/Conversations.vue')
    },
    {
        path: '/signin',
        name: 'SingnIn',
        component: () =>
            import ('../views/SignIn.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/LogIn.vue')
    },
    {
        path: '/createconversation',
        name: '/createConversation',
        component: () =>
            import ('../views/createConversation.vue')
    },
    {
        path: '/conversation/:id',
        name: 'Conversation',
        component: () =>
            import ('../views/Conversation.vue')
    },
    {
        path: '/deleteconversation/:id',
        name: 'deleteConversation',
        component: () =>
            import ('../views/deleteConversation.vue')
    },
    {
        path: '/logout',
        name: '/logOut',
        component: () =>
            import ('../views/logOut.vue')
    },
    {
        path: '/members',
        name: 'Members',
        component: () =>
            import ('../views/Members')
    },
]

const router = new VueRouter({
    routes
})

export default router