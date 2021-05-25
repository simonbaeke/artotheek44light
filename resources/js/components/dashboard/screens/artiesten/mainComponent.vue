<template>

    <app-content title="Artiesten" :toolbar="toolbar">
        <template slot="text">
            <artiesten/>
        </template>
    </app-content>
</template>


<script>
    import {mapActions, mapGetter} from 'vuex'
    import artiesten from './lijst'
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
                fetch: 'artiesten/fetch',
            })
        },
        mounted() {
            this.fetch()
        }
        ,
        components: {
            artiesten,
            appContent
        }
    }
</script>

<style scoped>

</style>
