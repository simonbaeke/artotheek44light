<template>
    <v-app-bar dense app>
        <v-container class="py-0 fill-height">
            <v-toolbar-title>{{title}}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text>
                <router-link :to="{name:'home'}">Home</router-link>
            </v-btn>
            <v-btn text
                   v-if="!authenticated">
                <router-link :to="{name:'signin'}">Sign In</router-link>
            </v-btn>

            <v-btn text v-else>
                <a href="#" @click.prevent="signOut">Sign out</a>

            </v-btn>
            <v-btn text>
                <router-link :to="{name:'dashboard'}">dashboard</router-link>
            </v-btn>
        </v-container>


    </v-app-bar>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "navbar",
        computed: {
            ...mapGetters({
                authenticated: 'aut/authenticated',
                user: 'aut/user',
                title:'aut/title'
            })
        },

        methods: {
            ...mapActions({
                signOutAction: 'aut/signOut'
            }),

             signOut() {
                 this.signOutAction()
                     .then(()=>{
                         this.$router.replace({name: 'home'})
                     })

            }
        }
    }
</script>

<style scoped>

</style>
