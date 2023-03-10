//每次调用$.git()或$.post()或$.ajax()的时候
//会先调用ajaxPrefilter()这个函数
//在ajaxPrefilter这个函数中可以拿到我们给ajax的配置对象
$.ajaxPrefilter(function (options) {
    //在发起真正的ajax请求之前，统一拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url

    //统一为有权限的接口设置headers请求头
   if(options.url.indexOf('/my/') !== -1) {
    options.headers = {
        Authorization: localStorage.getItem('token') || ''
    }
   }

   //全局统一挂载complete 回调函数
   options.complete = function (res) {
     //在complete回调函数中，可以使用res.responseJSON拿到服务器相应回来的数据
        if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
             //1.清空token
             localStorage.removeItem('token')
              //2.跳转到登录页面
             location.href = '/login.html'
          }
   }

})