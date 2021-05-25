<template>

    <app-content title="Kunstwerken" :toolbar="toolbar">
        <template slot="text">
            <kunstwerken/>
        </template>
    </app-content>
</template>


<script>
    import {mapActions, mapGetter} from 'vuex'
    import kunstwerken from './lijst'
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
                fetch: 'kunstwerken/fetch',
            })
        },
        mounted() {
            this.fetch()
        }
        ,
        components: {
            kunstwerken,
            appContent
        }
    }
</script>

<style scoped>

</style>
