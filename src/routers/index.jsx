import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";  //引用react-router-config路由插件
import {
    Login,
    Home,
    Search,
    Order,
    User,
    HomeCount,
} from './routes'  //引用配置好的路由组件

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/search',
                component: Search
            },
            {
                path: '/order',
                component: Order
            },
            {
                path: '/user',
                component: User
            },
            {
                path: '/home',
                component: HomeCount,
            },
            {
                path: '/',
                component: HomeCount,
            },
        ]
    },
]

export default function Router() {

    return (
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    )
}
