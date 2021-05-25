<template>
    <v-main my-5>

        <v-container flex fluid>
            <v-row justify="center">
                <v-col             cols="12"
                                   sm="4">
                    <v-card flat  color="grey lighten-5">
                        <v-card-title class="headline">
                            Login
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                                label="Email*"
                                                required
                                                v-model="form.email"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                                label="Password*"
                                                type="password"
                                                v-model="form.password"
                                                required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-checkbox
                                                v-model="form.remember"
                                                label="Remember me"
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>
                            </v-container>

                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    small
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                            >
                                Register
                            </v-btn>
                            <v-btn
                                    text
                                    @click=submit
                            >
                                Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-col>

            </v-row>

        </v-container>
    </v-main>
</template>

<script>
    import axios from 'axios'
    import { mapActions } from 'vuex'

    export default {
        name: 'SignIn',

        data () {
            return {
                form: {
                    email: 'simon@example.com',
                    password: 'secret',
                    remember:false
                }
            }
        },

        methods: {
            ...mapActions({
                signIn: 'aut/signIn'
            }),

             submit () {
                 this.signIn(this.form).then(()=>{
                     console.log('push')
                 })


            }
        }
    }
</script>

<style scoped>

</style>
