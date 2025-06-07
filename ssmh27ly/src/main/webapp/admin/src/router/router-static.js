import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import nongchanpin from '@/views/modules/nongchanpin/list'
    import news from '@/views/modules/news/list'
    import discussnongchanpin from '@/views/modules/discussnongchanpin/list'
    import nonghu from '@/views/modules/nonghu/list'
    import chanpinfenlei from '@/views/modules/chanpinfenlei/list'
    import zixunxinxi from '@/views/modules/zixunxinxi/list'
    import zixunhuifu from '@/views/modules/zixunhuifu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import orders from '@/views/modules/orders/list'
    import storeup from '@/views/modules/storeup/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/nongchanpin',
        name: '农产品',
        component: nongchanpin
      }
      ,{
	path: '/news',
        name: '农产品资讯',
        component: news
      }
      ,{
	path: '/discussnongchanpin',
        name: '农产品评论',
        component: discussnongchanpin
      }
      ,{
	path: '/nonghu',
        name: '农户',
        component: nonghu
      }
      ,{
	path: '/chanpinfenlei',
        name: '产品分类',
        component: chanpinfenlei
      }
      ,{
	path: '/zixunxinxi',
        name: '咨询信息',
        component: zixunxinxi
      }
      ,{
	path: '/zixunhuifu',
        name: '咨询回复',
        component: zixunhuifu
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
