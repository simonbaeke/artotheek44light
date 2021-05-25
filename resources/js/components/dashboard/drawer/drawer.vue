<template>
    <v-navigation-drawer
            v-model="drawer"
            app
    >
        <avatar/>

        <v-divider></v-divider>

        <v-list>
            <v-list-item
                    v-for="[name, text] in links"
                    :key="name"
                    link
            >

                <v-list-item-content>
                    <v-list-item-title>
                        <router-link :to="{name:name}">{{text}}</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

</template>

<script>
    import avatar from './avatar'

    export default {
        name: "drawer",
        data: () => ({
            cards: ['Today', 'Yesterday'],
            drawer: null,
            links: [
                ['kunstwerkenlijst', 'Kunstwerken'],
                ['artiestenlijst', 'Artiesten'],
                ['lidkaartenlijst', 'Lidkaarten'],
                ['ontleningenlijst', 'Ontleningen'],
                ['gebruikerslijst', 'Gebruikers']


            ],
        }),
        components: {
            avatar
        }
    }
</script>

<style scoped>

</style>
