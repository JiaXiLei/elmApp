import React from 'react'
import './styles.less'
import Header from '@@/Header'

export default function useUser(props) {

    const hisBack = () => {
        console.log(props)
        props.history.go(-1)
    }

    return (
        <div className="pages-user">
            <Header hisBack={hisBack} title='我的' />
        </div>
    )
}