<template>
    <tr v-on:click="showDetails($event)">
        <td>{{ item.firstname }}</td>
        <td>{{ item.lastname }}</td>
    </tr>
</template>

<script>
    export default {
        props: ['item'],
        name: "element",
        methods: {
            showDetails() {
                this.$router.push({
                    name: 'gebruiker',
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
