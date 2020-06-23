import React from 'react'
import './styles.less'
import { renderRoutes } from 'react-router-config'
import TaBbar from '@@/TabBar'

export default function useHome(props) {
<<<<<<< HEAD
=======

>>>>>>> 3ffc77e110668c0330208d8d8ae5c756d1e8551a
    return (
        <div className="pages-home">
            {renderRoutes(props.route.routes)}
            <TaBbar />
        </div>
    )
}