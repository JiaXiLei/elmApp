import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import './style.less'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
})


export default function useHomeCount() {

    return (
        <div className="home-count">
            
            homecount
        </div>
    )
}