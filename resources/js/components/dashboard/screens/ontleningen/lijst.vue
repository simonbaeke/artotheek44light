<template>
    <v-data-table

            :headers="headers"
            :items="ontleningen"
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
                <v-btn outlined @click="goToMake">nieuw</v-btn>
            </v-toolbar>
            <v-dialog v-model="deleteDialog" max-width="500px">
                <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn :loading="deleteing" color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:body="{items}">
            <tbody>
            <listElement
                    v-for="(item,index) in items"
                    :key="item.id"
                    :rent="item"
                    v-on:deleteItem="deleteItem"
            />
            </tbody>
        </template>


    </v-data-table>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import listElement from './element'

    export default {
        name: "lijst",
        data() {
            return {
                headers:
                    [
                        {
                            text: 'Kunstwerk',
                            align: 'left',
                            sortable: true,
                            value: 'artwork.name'
                        }, {
                        text: 'Code',
                        align: 'left',
                        sortable: 'true',
                        value: 'artwork.code'
                    },
                        {text: 'Gebruiker', sortable: true, value: 'user.firstname'},
                        {text: 'Lidkaartnummer', sortable: false, value: 'subscriptionnumber'},
                        {text: 'Start huur', sortable: true, value: 'started_at'},
                        {text: 'Tot', value: 'expire.date'},
                        {text: 'Teruggebracht', value: 'returned'},
                        {text: 'Actions', value: 'actions', sortable: false},
                    ],
                search: "",
                deleteDialog: false,
                deleteId: null,
                search: ""

            }
        },
        computed: {
            ...mapGetters({
                ontleningen: 'ontleningen/ontleningen',
                loading: 'ontleningen/loading',
                deleteing: 'ontleningen/deleteing'
            })
        }, methods: {
            ...mapActions({
                delete: 'ontleningen/delete'
            }),
            deleteItem(id) {
                this.deleteDialog = true
                this.deleteId = id
            },
            deleteItemConfirm() {
                this.delete(this.deleteId).then(() => {
                    this.deleteDialog = false
                    this.deleteId = null
                })
            },
            closeDelete() {
                this.deleteDialog = false
                this.deleteId = null
            },
            goToMake() {

                this.$router.push({
                    name: 'maakontlening'
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
