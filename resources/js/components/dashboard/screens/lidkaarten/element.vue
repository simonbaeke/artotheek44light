<template>
    <tr v-on:click="showDetails($event)">
        <td>{{ item.number }}</td>
        <td>{{ item.user.fullname }}</td>
        <td>{{ item.expire.date}}</td>
        <td>
            <v-icon
                small
                @click="$emit('deleteItem',item.id)"
        >
            mdi-delete
        </v-icon></td>
    </tr>
</template>

<script>
    export default {
        props: ['item'],
        name: "element",
        methods: {
            showDetails() {
                this.$router.push({
                    name: 'lidkaart',
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
