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
    import peixunkecheng from '@/views/modules/peixunkecheng/list'
    import jiaolianxinxi from '@/views/modules/jiaolianxinxi/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import storeup from '@/views/modules/storeup/list'
    import kechengleixing from '@/views/modules/kechengleixing/list'
    import forum from '@/views/modules/forum/list'
    import discussjiaolianxinxi from '@/views/modules/discussjiaolianxinxi/list'
    import jianshenshipin from '@/views/modules/jianshenshipin/list'
    import orders from '@/views/modules/orders/list'
    import shipinleixing from '@/views/modules/shipinleixing/list'
    import config from '@/views/modules/config/list'
    import jiaolianyuyue from '@/views/modules/jiaolianyuyue/list'


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
	path: '/peixunkecheng',
        name: '培训课程',
        component: peixunkecheng
      }
      ,{
	path: '/jiaolianxinxi',
        name: '教练信息',
        component: jiaolianxinxi
      }
      ,{
	path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
      ,{
	path: '/xueyuan',
        name: '学员',
        component: xueyuan
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/kechengleixing',
        name: '课程类型',
        component: kechengleixing
      }
      ,{
	path: '/forum',
        name: '论坛管理',
        component: forum
      }
      ,{
	path: '/discussjiaolianxinxi',
        name: '教练信息评论',
        component: discussjiaolianxinxi
      }
      ,{
	path: '/jianshenshipin',
        name: '健身视频',
        component: jianshenshipin
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/shipinleixing',
        name: '视频类型',
        component: shipinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/jiaolianyuyue',
        name: '教练预约',
        component: jiaolianyuyue
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
