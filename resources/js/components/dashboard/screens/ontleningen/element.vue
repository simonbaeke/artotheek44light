<template>
    <tr>
        <td>{{ rent.artwork.name }}</td>
        <td>{{ rent.artwork.code }}</td>
        <td>{{ rent.user.fullname }}</td>
        <td>{{rent.subscriptionnumber}}</td>
        <td>{{rent.started_at}}</td>

        <td>
            <datePicker :date="rent.expires_at" v-on:confirm="saveExpire"/>
        </td>
        <td>
            <datePicker :date="rent.returned_at" v-on:confirm="saveExpire"/>
        </td>
        <td>
            <v-menu
                    open-on-hover>


                <template v-slot:activator="{on,attrs}">

                        <v-icon
                                small
                                class="mr-2"
                                v-bind="attrs"
                                v-on="on"
                        >
                            mdi-dots-vertical
                        </v-icon>

                </template>
                <v-list>
                    <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-icon
                    small
                    @click="$emit('deleteItem',rent.id)"
            >
                mdi-delete
            </v-icon>

        </td>
    </tr>
</template>

<script>
    import datePicker from '../../basis/datePicker'
    import {mapActions} from 'vuex'

    export default {
        name: "element",
        props: ['rent'],
        data() {
            return {
                items: [
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me 2'},
                ],
                dialogDelete:false
            }
        },
        methods: {
            ...mapActions({
                updateExpire: 'ontleningen/updateEnddate'
            }),
            showDetails() {
                this.$router.push({
                    name: 'ontlening',
                    params: {
                        id: this.item.id
                    }
                })
            },
            saveExpire(date) {
                this.updateExpire({
                    id: this.rent.expire.id,
                    date: date
                })
            },
            deleteItem (item) {
                this.dialogDelete = true
            }
        },
        components: {
            datePicker
        }
    }
</script>

<style scoped>

</style>
