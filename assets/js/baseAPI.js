//每次调用$.git()或$.post()或$.ajax()的时候
//会先调用ajaxPrefilter()这个函数
//在ajaxPrefilter这个函数中可以拿到我们给ajax的配置对象
$.ajaxPrefilter(function (options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url)
})