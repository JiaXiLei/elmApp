import React from 'react'
import { NavLink } from 'react-router-dom'
import { createFromIconfontCN } from '@ant-design/icons';
import './styles.less'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1776913_pg3ody88wp.js'
})

export default function Tabbar() {

    return (
        <footer>
            <NavLink exact to='/home'>
                <span><IconFont type="iconwaimai1" className="icon" /></span>
                <span>外卖</span>
            </NavLink>
            <NavLink exact to='/search'>
                <span><IconFont type="iconzhinanzhen" className="icon" /></span>
                <span>搜索</span>
            </NavLink>
            <NavLink exact to='/order'>
                <span><IconFont type="icondingdan-" className="icon" /></span>
                <span>订单</span>
            </NavLink>
            <NavLink exact to='/user'>
                <span><IconFont type="iconwode" className="icon" /></span>
                <span>我的</span>
            </NavLink>
        </footer>
    )
}