import React from 'react';
import Loadable from 'react-loadable'

//通用的过场组件
const urlImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577792264045&di=69ee7cd72ec1ba238d66132841a431ce&imgtype=0&src=http%3A%2F%2Fwww.4399dmw.com%2Fimages%2Fwap%2Fwapdonghua%2Fv1%2Floading.gif'
const loadings = () => <div className="router-loadable-img"><img src={urlImg} alt='' /></div>

export default (loader, loading = loadings) => {
    return Loadable({
        loader,
        loading
    })
}