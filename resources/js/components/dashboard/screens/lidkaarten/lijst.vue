<template>

    <v-data-table

            :headers="headers"
            :items="lidkaarten"
            :loading="loading"
            :search="search"
            class="elevation-0"

            no-results-text="Niks gevonden"
    >
        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
        <template

                v-slot:top
        >
            <v-toolbar flat>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
                <v-spacer/>
                <v-btn outlined @click="showMake">nieuw</v-btn>
            </v-toolbar>


        </template>
        <template v-slot:body="{items}">
            <tbody>
            <listElement v-for="(item,index) in items" :key="item.id" :item="item"/>
            </tbody>

        </template>
    </v-data-table>


</template>

<script>
    import {mapGetters} from 'vuex'
    import listElement from './element'

    export default {

        name: "lijst",
        data() {
            return {
                search: "",
                headers: [
                    {
                        text: 'Lidkaartnummer',
                        value: 'number'
                    },
                    {
                        text: 'Gebruiker',
                        value: 'user.fullname'
                    },
                    {
                        text: 'Geldig tot',
                        value: 'expire.date'
                    },
                    {
                        text: "Verwijderen",
                        sortable: false
                    }
                ],
                rowsPerPage: [10],
                search: ""
            }
        },
        computed: {
            ...mapGetters({
                loading: 'lidkaarten/loading',
                lidkaarten: 'lidkaarten/lidkaarten',
            })
        },
        methods: {
            showMake() {
                this.$router.push({
                    name: 'maakLidkaart'
                })
            }
        },
        components: {
            listElement
        }
    }
</script>

<style scoped>

</style>
