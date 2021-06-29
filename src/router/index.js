import Vue from 'vue'
import VueRouter from 'vue-router'
const basketball =()=>import("../views/basketball/basketball")
const tennis=()=>import("../views/tennis/tennis")
const baseball=()=>import("../views/baseball/baseball")
const soccer=()=>import('../views/soccer/soccer')
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
Vue.use(VueRouter)
const routes=[{
    path:"",
    redirect:'/basketball'
},{
 path:"/basketball",
 component:basketball
},{
    path:'/tennis',
    component:tennis
},{
    path:'/baseball',
component:baseball

},{
path:'/soccer',
component:soccer
}]
const router=new VueRouter({
    mode:'history',
    routes
})
export default router