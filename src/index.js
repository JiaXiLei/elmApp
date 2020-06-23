import React from 'react';
import ReactDOM from 'react-dom';
import '@/abc/styles/index.less';  //引用公共样式
import '@/abc/js/rem'  //引用rem
import Router from '@/routers'

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
/*
  API文档: https://github.com/bailicangdu/node-elm/blob/master/API.md
  Demo地址: https://github.com/bailicangdu/vue2-manage 查看效果请戳这里
*/





