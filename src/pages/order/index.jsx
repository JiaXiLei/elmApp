import React from 'react'
import './styles.less'
import Header from '@@/Header'

export default function useSearch(props) {

    const hisBack = () => {
        props.history.go(-1)
    }

    return (
        <div className="pages-search">
            <Header hisBack={hisBack} title='订单' />
        </div>
    )
}