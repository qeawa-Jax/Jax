
const routes = [
    {path:"/",component:() => import("../views/homePage.vue")},
    {path:"/a",component:() => import('../views/newProjectStep1.vue')},
    {path:"/b",component:() => import('../components/b.vue')}
]


export default routes