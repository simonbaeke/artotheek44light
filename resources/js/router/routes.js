import store from '../store'
import router from '../router'

const routes = [
    {
        path:'',
        component :()=> import('../pages/home.vue'),
        name:'home'
    },

    {
        path:'/signin',
        component :()=> import('../pages/signin.vue'),
        name:'signin'
    },
    {
        path: '/dashboard',
        component:() => import('../pages/dashboard.vue'),
        name:'dashboard',
        beforeEnter: (to, from, next) => {
            if(store.state.aut.authenticated == false) {
                router.push('/signin')
                console.log('not authenticated')
                next(false);
            } else {
                console.log('authenticated')

                next();
            }
        },
        children:[
            {
                path:'kunstwerk',
                component:()=>import('../components/dashboard/screens/kunstwerken/view.vue'),
                name:'kunstwerken',
                children:[
                    {
                        path:'lijst',
                        component:()=>import('../components/dashboard/screens/kunstwerken/mainComponent.vue'),
                        name:'kunstwerkenlijst'
                    },
                    {
                        path:':id',
                        component:()=>import('../components/dashboard/screens/kunstwerken/detail.vue'),
                        name:'kunstwerk'

                    },
                    {
                        path:'maak',
                        component:()=>import('../components/dashboard/screens/kunstwerken/maak.vue'),
                        name:'maakKunstwerk'
                    },
                    {
                        path:'wijzig/:id',
                        component:()=>import('../components/dashboard/screens/kunstwerken/wijzig.vue'),
                        name:'wijzigKunstwerk'
                    }
                ]

            },
            {
                path:'artiesten',
                component:()=>import('../components/dashboard/screens/artiesten/view.vue'),
                name:'artiesten',
                children:[
                    {
                        path:'lijst',
                        component:()=>import('../components/dashboard/screens/artiesten/mainComponent.vue'),
                        name:'artiestenlijst'
                    },
                    {
                        path:':id',
                        component:()=>import('../components/dashboard/screens/artiesten/detail.vue'),
                        name:'artiest'

                    },
                    {
                        path:'maak',
                        component:()=>import('../components/dashboard/screens/artiesten/maak.vue'),
                        name:'maakArtiest'
                    },
                    {
                        path:'wijzig/:id',
                        component:()=>import('../components/dashboard/screens/artiesten/wijzig.vue'),
                        name:'wijzigArtiest'
                    }
                ]
            },
            {
                path:'lidkaarten',
                component:()=>import('../components/dashboard/screens/lidkaarten/mainComponent.vue'),
                name:'lidkaarten',
                children:[
                    {
                        path:'lijst',
                        component:()=>import('../components/dashboard/screens/lidkaarten/mainComponent.vue'),
                        name:'lidkaartenlijst'
                    },
                    {
                        path:':id',
                        component:()=>import('../components/dashboard/screens/lidkaarten/detail.vue'),
                        name:'lidkaart'

                    },
                    {
                        path:'maak',
                        component:()=>import('../components/dashboard/screens/lidkaarten/maak.vue'),
                        name:'maakLidkaart'
                    },
                    {
                        path:'wijzig/:id',
                        component:()=>import('../components/dashboard/screens/lidkaarten/wijzig.vue'),
                        name:'wijzigLidkaart'
                    }
                ]
            },
            {
                path:'ontlening',
                component:()=>import('../components/dashboard/screens/ontleningen/view.vue'),
                name:'ontleningen',
                children:[
                    {
                        path:'lijst',
                        component:()=>import('../components/dashboard/screens/ontleningen/mainComponent.vue'),
                        name:'ontleningenlijst'

                    },
                    {
                        path:'maak',
                        component:()=>import('../components/dashboard/screens/ontleningen/maak.vue'),
                        name:'maakontlening'
                    }
                ]
            },
            {
                path:'gebruikers',
                component:()=>import('../components/dashboard/screens/gebruikers/view.vue'),
                name:'gebruikers', children:[
                    {
                        path:'lijst',
                        component:()=>import('../components/dashboard/screens/gebruikers/mainComponent.vue'),
                        name:'gebruikerslijst'
                    },
                    {
                        path:':id',
                        component:()=>import('../components/dashboard/screens/gebruikers/detail.vue'),
                        name:'gebruiker'

                    },
                    {
                        path:'maak',
                        component:()=>import('../components/dashboard/screens/gebruikers/maak.vue'),
                        name:'maakGebruiker'
                    },
                    {
                        path:'wijzig/:id',
                        component:()=>import('../components/dashboard/screens/gebruikers/wijzig.vue'),
                        name:'wijzigGebruiker'
                    }
                ]

            }
        ]
    }
]

export default routes;
