import loadable from './loadable' //路由懒加载

const Login = loadable(() => import('@/pages/login'))   //登陆页面
const Home = loadable(() => import('@/pages/home'))   //首页
const HomeCount = loadable(() => import('@/pages/home/count'))   //首页内容
const Search = loadable(() => import('@/pages/search'))   //搜索页面
const Order = loadable(() => import('@/pages/order'))   //订单页面
const User = loadable(() => import('@/pages/user'))   //用户页面

export {
    Login,
    Home,
    Search,
    Order,
    User,
    HomeCount,
}