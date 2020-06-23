import React from 'react'
import './styles.less'
import Header from '@@/Header'

export default function useOrder(props) {

    const hisBack = () => {
        props.history.go(-1)
    }

    return (
        <div className="pages-order">
            <Header hisBack={hisBack} title='搜索' />
        </div>
    )
}