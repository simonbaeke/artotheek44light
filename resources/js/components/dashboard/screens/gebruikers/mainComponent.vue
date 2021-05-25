<template>

    <app-content title="Gebruikers" :toolbar="toolbar">
        <template slot="text">
            <gebruikers/>
        </template>
    </app-content>
</template>


<script>
    import {mapActions, mapGetter} from 'vuex'
    import gebruikers from './lijst'
    import appContent from '../../basis/content'

    export default {
        name: "mainComponent",
        data() {
            return {
                toolbar:false
            }
        },

        methods: {
            ...mapActions({
                fetch: 'gebruikers/fetch',
            })
        },
        mounted() {
            this.fetch()
        }
        ,
        components: {
            gebruikers,
            appContent
        }
    }
</script>

<style scoped>

</style>
