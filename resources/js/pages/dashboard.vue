<template>
<div>
<drawer/>
    <v-main>
        <v-container
                class="py-8 px-6"
                fluid
        >

                        <router-view></router-view>

        </v-container>
    </v-main>
</div>




</template>

<script>
    import drawer from '../components/dashboard/drawer/drawer'

    export default {
        data: () => ({
            showDrawer: null,
            links: [
                ['kunstwerken', 'Kunstwerken'],
                ['artiesten', 'Artiesten'],


            ],
        }),
        components:{
            drawer
        },
        mounted:{
            //fetch data
        }
    }
</script>
