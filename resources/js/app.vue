<template>

    <v-app>
        <navbar/>

        <router-view></router-view>

    </v-app>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "App",
        components: {
            navbar: () => import('./components/navbar.vue')
        },
        methods: {
            ...mapActions({
                me: 'aut/me'
            }),
        },
        mounted() {
            this.me()
        }
    }
</script>

<style scoped>


</style>
