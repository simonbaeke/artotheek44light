<template>
    <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="newDate"
            persistent
            width="290px"
    >
        <template v-slot:activator="{ on, attrs }">
          <v-text-area
                    v-model="newDate"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    solo
            >{{newDate}}</v-text-area>

        </template>
        <v-date-picker
                v-model="newDate"
                scrollable
        >
            <v-spacer></v-spacer>
            <v-btn
                    text
                    color="primary"
                    @click="modal = false"
            >
                Cancel
            </v-btn>
            <v-btn
                    text
                    color="primary"
                    @click="confirm"
            >
                OK
            </v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script>
    import dateOutput from './dateInput'
    export default {
        name: "datepicker",
        props: ['date','id'],
        data() {
            return {
                modal:false,
                newDate: new Date(Date.parse(this.date)).toISOString().substr(0, 10)
            }
        },
    methods:{
            confirm(){
                this.$refs.dialog.save(this.newDate)
                this.$emit('confirm', this.newDate)
            }
    },
        components:{
            dateOutput
        }
    }

</script>

<style scoped>

</style>
