<template>
    <v-card flat>
        <v-toolbar flat v-if="toolbar">
            <slot name="toolbar"></slot>
        </v-toolbar>
        <v-card-text>
            <v-container>
                <v-card flat>
                    <slot name="text"></slot>
                </v-card>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        props: {
            title: {
                type: String,
                default: ""

            },
            toolbar:{
                type:Boolean,
                default:true
            }

        },
        name: "content",
        methods:{
            ...mapActions({
                setTitle:'aut/setTitle'
            })
        },
        mounted() {
            this.setTitle(this.title)
        },
        beforeDestroy() {
            this.setTitle('')
        },
    }
</script>

<style scoped>


</style>
