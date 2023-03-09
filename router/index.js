import { createRouter , createWebHashHistory} from 'vue-router'
import Aboutview from "../views/Aboutview"
import fenge from "../views/fenge"
import fenlei from "../views/fenlei"
import GPU from "../views/GPU"
import index from "../views/index"
import jiance from "../views/jiance"
import liaojie from "../views/liaojie"
import ModelManage_dataset from "../views/ModelManage_dataset"
import ModelManage_info from "../views/ModelManage_info"
import ModelManage_weight from "../views/ModelManage_weight"
import ModelTrain from "../views/ModelTrain"
import register from "../views/register"
import UserManage from "../views/UserManage"
import login from "../views/login";
import Home from "../views/Home";

const routes = [
    {
        path:"/",
        component: UserManage,
        redirect:'/fenge',
        children:[
            {
                path:'fenlei',
                meta:{title: '图像分类'},
                component:fenlei
            },
            {
                path:"ModelTrain",
                meta:{title:'模型训练'},
                component: ModelTrain
            },
            {
                path: 'test',
                meta:{title:'系统管理'},
                component: ()=>import('@/views/Test')
            },
            {
                path: 'GPU',
                meta: {title: 'GPU'},
                component: ()=>import('@/views/GPU')
            },
            {
                path: 'fenge',
                meta: {title: '图像分割'},
                component: ()=>import('@/views/fenge')
            },
            {
                path: 'jiance',
                meta: {title: '图像检测'},
                component: ()=>import('@/views/jiance')
            },
        ]
    },
    {
        path:"/index",
        component:index,
    },
    {
        path:"/Home",
        component: Home,
    },
    {
        path:"/login",
        component:login,
    },
    {
        path:"/about",
        component: Aboutview
    },
    {
        path:"/fenlei",
        component: fenlei
    },
    {
        path:"/jiance",
        component: jiance
    },
    {
        path:"/liaojie",
        component: liaojie
    },
    {
        path:"/ModelManage_dataset",
        component: ModelManage_dataset
    },
    {
        path:"/ModelManage_info",
        component: ModelManage_info
    },
    {
        path:"/ModelManage_weight",
        component: ModelManage_weight
    },
    {
        path:"/register",
        component: register
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;