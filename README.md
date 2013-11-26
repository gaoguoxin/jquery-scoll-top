jquery-scoll-top
================

该插件主要是用于显示页面过长时，在页面底部加上回到顶部的链接，当点击该链接时，回到页面顶部用，因为我在代码里写了该回到顶部链接的样式，并且样式是取自a链接的data属性的，所以，你必须在a链接中添加例如 data-position='fixed'  data-left='20px'  data-right='20px'等，另外，因为position:fixed在IE6里不支持，所以，该插件对于a链接的样式是不支持的。

使用方法:
================

  $('.top').scollTop({
    scrollDuration:1000, //指定回到顶部所用时间 1 秒
    scrollTop:200 // 指定浏览器滚动条滚动大于200px的时候，显示回到顶部链接
  })
