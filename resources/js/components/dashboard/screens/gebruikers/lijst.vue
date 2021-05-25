<template>

    <v-data-table

            :headers="headers"
            :items="gebruikers"
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
                        text: 'Voornaam',
                        align: 'left',
                        sortable: true,
                        value: 'firstname'
                    },
                    {text: 'Familienaam', sortable: true, value: 'lastname'},
                ],
                rowsPerPage: [10],
            }
        },
        computed: {
            ...mapGetters({
                loading: 'gebruikers/loading',
                gebruikers: 'gebruikers/gebruikers',
            })
        },
        methods: {
            showDetails(event) {
                console.log()
            },
            showMake() {
                this.$router.push({
                    name: 'maakGebruiker'
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
