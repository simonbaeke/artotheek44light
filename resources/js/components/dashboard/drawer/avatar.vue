<template>
    <v-sheet
            color="grey lighten-4"
            class="pa-4"
    >
        <v-avatar
                class="mb-4"
                color="grey darken-1"
                size="64"
        ></v-avatar>

        <v-list-item

        >
            <v-list-item-content>
                <v-list-item-title class="title">
                    {{user.firstname}} {{user.lastname}}
                </v-list-item-title>
                <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-sheet>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "avatar",
        computed: {
            ...mapGetters({
                user: 'aut/user'
            })
        }
    }
</script>

<style scoped>

</style>
