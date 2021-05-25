<template>
    <tr v-on:click="showDetails($event)">
        <td>{{ item.name }}</td>
        <td v-if="item.artist!=null">{{item.artist.fullname }}</td>
        <td>{{ item.longcode}}</td>
        <td v-if="item.available != null">{{ item.available? "beschikbaar" : "Niet beschikbaar"}}</td>
        <td v-else>/</td>
    </tr>
</template>

<script>
    export default {
        props: ['item'],
        name: "element",
        methods: {
            showDetails() {
                this.$router.push({
                    name: 'kunstwerk',
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
