<template>
    <app-content v-if="!loading" :toolbar="toolbar">
        <template slot="text">

            <v-tabs
                    v-model="tab"
            >
                <v-tab>Info</v-tab>
                <v-tab>Ontleningen</v-tab>
                <v-tab-item>
                    <v-row>
                        <v-col cols="6">
                            <v-img :src="artwork.thumbnailurl"></v-img>

                        </v-col>
                        <v-col>
                            <v-card
                                    flat
                            >
                                <v-card-title
                                        class="text-h5"
                                        v-text="artwork.artist.fullname"
                                />

                                <v-card-subtitle
                                        v-text="beschikbaar"
                                        v-bind:class="[artwork.available ? 'green--text' : 'red--text']"

                                />
                                <v-card-text>
                                    <v-list class="transparent">
                                        <v-list-item
                                                v-for="item in info"
                                                :key=item.text
                                        >
                                            <v-list-item-title>{{ item.text }}</v-list-item-title>

                                            <v-list-item-subtitle class="text-right">
                                                {{ item.value }}
                                            </v-list-item-subtitle>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn outlined @click="wijzig">Wijzig</v-btn>
                                </v-card-actions>



                            </v-card>

                        </v-col>
                    </v-row>

                </v-tab-item>
                <v-tab-item>

                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card text>
                                <v-data-table
                                        :loading="loading"
                                        text
                                        :headers="headers"
                                        :items="artwork.rents"
                                        hide-default-footer
                                        class="elevation-1"
                                        no-data-text="Nog geen ontleningen"
                                >

                                    <template v-slot:body="{ items }">
                                        <tbody>
                                        <tr v-for="(item) in items" :key="item.id">
                                            <td v-on:click="$router.push({name:'userdetail',params:{id:item.user.id}})"
                                                v-if="item.user !=null"
                                            >{{
                                                item.user.firstname }} {{item.user.lastname }}
                                            </td>
                                            <td>{{ item.started_at }}</td>
                                            <td>{{ item.expire.date}}</td>
                                            <td>{{item.returned_at}}</td>
                                        </tr>

                                        </tbody>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </v-flex>

                    </v-layout>

                </v-tab-item>
            </v-tabs>


        </template>
    </app-content>
</template>

<script>
    import appContent from '../../basis/content'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "detail",
        data() {
            return {
                toolbar: false,
                tab: null,
                headers: [
                    {
                        text: 'Ontlener',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Begindatum verhuur', value: 'calories', sortable: false},
                    {text: 'Einddatum verhuur', value: 'calories', sortable: false},
                    {text: 'Datum terugbezorging', value: 'fat', sortable: false},
                ],
            }
        },
        computed: {
            ...mapGetters({
                kunstwerken: 'kunstwerken/kunstwerken',
                loading: 'kunstwerken/loading'
            }),

            artwork() {

                if (!this.loading) {
                    return this.kunstwerken.find(k => {
                        return k.id == this.$route.params.id
                    })
                }

                return this.kunstwerken.find(k => {
                    return k.id == this.$route.params.id
                })

            },
            beschikbaar() {
                if (this.artwork != null && this.artwork.available) {
                    return 'Beschikbaar'
                }

                return 'Niet beschikbaar'
            },
            price() {
                if (this.artwork != null && this.artwork.price == null) {
                    return "niet opgegeven"
                }

                return this.artwork.price + "€"
            },
            info() {
                if (this.loading) {
                    return null
                }

                return [
                    {
                        text: 'Code',
                        value: this.artwork.code
                    },
                    {
                        text: 'Type',
                        value: this.artwork.type.name
                    },
                    {
                        text: 'Afmetingen',
                        value: this.artwork.length + ' ' + this.artwork.width + ' ' + this.artwork.height
                    },
                    {
                        text: 'Prijs',
                        value: this.price
                    }
                ]
            }
        },

        methods: {
            ...mapActions({
                setTitle: 'aut/setTitle',
                fetch: 'kunstwerken/fetchOne',
            }),
            wijzig(){
                this.$router.push({
                    name: 'wijzigKunstwerk',
                    params: {
                        id: this.$route.params.id
                    }
                })
            }
        }
        ,
        components: {},
        mounted() {
            this.fetch(this.$route.params.id).then(() => {
                this.setTitle(this.artwork.name)

            })
        },
        beforeDestroy() {
            this.setTitle('')
        },
        components: {
            appContent
        }
    }
</script>

<style scoped>

</style>
