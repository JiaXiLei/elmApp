import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';
import './styles.less'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1776913_pg3ody88wp.js'
})


export default function Header(props) {

    const hisBack = () => {
        props.hisBack()
    }
    const { title } = props
    return (
        <header>
            <p><IconFont onClick={hisBack} type="iconfanhui1" className="icon" /></p>
            {title}
        </header>
    )
}