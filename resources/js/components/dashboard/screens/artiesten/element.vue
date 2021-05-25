<template>
    <tr v-on:click="showDetails($event)">
        <td>{{ item.firstname }}</td>
        <td>{{ item.lastname }}</td>
        <td>{{ item.short}}</td>
    </tr>
</template>

<script>
    export default {
        props: ['item'],
        name: "element",
        methods: {
            showDetails() {
                this.$router.push({
                    name: 'artiest',
                    params: {
                        id: this.item.id
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
