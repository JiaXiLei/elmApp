import React from 'react'
import './styles.less'
import { renderRoutes } from 'react-router-config'
import TaBbar from '@@/TabBar'

export default function useHome(props) {
    return (
        <div className="pages-home">
            {renderRoutes(props.route.routes)}
            <TaBbar />
        </div>
    )
}