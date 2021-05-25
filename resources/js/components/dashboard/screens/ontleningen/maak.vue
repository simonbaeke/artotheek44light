<template>

</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "maak",
        methods:{
            ...mapActions({
                setTitle:'aut/setTitle'
            })
        },
        mounted(){
            this.setTitle('Nieuwe ontlening')

        },
        beforeDestroy() {
            this.setTitle('')
        }
    }
</script>

<style scoped>

</style>
