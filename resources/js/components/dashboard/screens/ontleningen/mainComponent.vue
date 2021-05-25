<template>
    <app-content title="Ontleningen"  :toolbar="toolbar">
        <template slot="text">
            <app-lijst/>
        </template>
    </app-content>


</template>

<script>
    import appContent from '../../basis/content'
    import {mapActions} from 'vuex'
    import appLijst from './lijst'

    export default {
        name: "mainComponent",
        data(){
            return{
                toolbar:false
            }
        },
        components: {
            appContent,
            appLijst
        },
        methods: {
            ...mapActions({
                fetch: 'ontleningen/fetch'
            })
        },
        mounted() {
            this.fetch()
        }
    }
</script>

<style scoped>

</style>
