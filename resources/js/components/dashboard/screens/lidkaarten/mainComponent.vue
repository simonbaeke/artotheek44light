<template>

    <app-content title="Lidkaarten" :toolbar="toolbar">
        <template slot="text">
            <lidkaarten/>
        </template>
    </app-content>
</template>


<script>
    import {mapActions, mapGetter} from 'vuex'
    import lidkaarten from './lijst'
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
                fetch: 'lidkaarten/fetch',
            })
        },
        mounted() {
            this.fetch()
        }
        ,
        components: {
            lidkaarten,
            appContent
        }
    }
</script>

<style scoped>

</style>
