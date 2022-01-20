import Home from '../pages/home';
import Login from '../pages/login';
import Registry from '../pages/login/registry'
const router:any = [
  {path:'/home',name:'用户',element:Home},
  {path:'/login',name:'登录',element:Login},
  {path:'/registry',name:'注册',element:Registry}
]

export default router;