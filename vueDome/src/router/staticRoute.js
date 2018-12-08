const Layout =()=> import ('../pages/layout/index.vue');

const staticRoute=[
    {
        path:'/',
        redirect:'/login'
    },{
        path:'/login',
        component:()=> import('../pages/login')
    },{
        path:'/home',
        component:Layout,
        children:[{
            path:'',
            component:()=>import('../pages/home')
        }]
    },{
        path:'/example',
        component:Layout,
        children:[{
            path:'charts',
            component:()=>import('../pages/example/charts')
        },
        {
            path:'newMap',
            component:()=>import('../pages/example/newMap')
        },
        {
            path:'BMap',
            component:()=>import('../pages/example/Bmap')
        },
        {
            path:'expTable',
            component:()=>import('../pages/example/table')
        }]
    },{
        path:'/assist',
        component:Layout,
        children:[{
            path:'plane2D',
            component:()=>import('../pages/sysComponents/assist/plane2D')
        },{
            path:'rate3D',
            component:()=>import('../pages/sysComponents/assist/rate3D')
        },{
            path:'particleWave',
            component:()=>import('../pages/sysComponents/assist/particleWave')
        },{
            path:'echartsLine',
            component:()=>import('../pages/sysComponents/assist/echartsLine')
        },{
            path:'echartsPie',
            component:()=>import('../pages/sysComponents/assist/echartsPie')
        },{
            path:'echartsBar',
            component:()=>import('../pages/sysComponents/assist/echartsBar')
        },{
            path:'earth3D',
            component:()=>import('../pages/sysComponents/assist/earth')
        }]
    },{
        path:'/functionalitys',
        component:Layout,
        children:[{
            path:'pageSearch',
            component:()=>import('../pages/sysComponents/functionalitys/pageSearch')
        },{
            path:'pageNotes',
            component:()=>import('../pages/sysComponents/functionalitys/pageNotes')
        },{
            path:'pageTinymce',
            component:()=>import('../pages/sysComponents/functionalitys/pageTinymce')
        }]
    },{
        path:'/layouts', 
        component:Layout,
        children:[{
            path:'progras',
            component:()=>import('../pages/sysComponents/layouts/progras')
        },{
            path:'select',
            component:()=>import('../pages/sysComponents/layouts/select')
        },{
            path:'title',
            component:()=>import('../pages/sysComponents/layouts/title')
        },{
            path:'other',
            component:()=>import('../pages/sysComponents/layouts/other')
        }]
    }

]

export default staticRoute