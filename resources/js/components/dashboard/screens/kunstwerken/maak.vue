<template>
    <v-card flat>
        <v-card-text>
            <v-form>
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 md3>
                            <v-text-field
                                    v-model="artwork.name"
                                    :error="artwork.hasError('name')"
                                    :error-messages="artwork.error('name','Titel')"
                                    v-on:focus="artwork.clearError('name')"
                                    label="Titel"
                            />
                        </v-flex>
                        <v-flex xs12 md3>
                            <v-checkbox v-model="notitle" label="Zonder titel"></v-checkbox>
                        </v-flex>
                        <v-flex xs12 md5 offset-md1>
                            <v-layout row>
                                <v-flex xs4>
                                    <v-text-field
                                            readonly
                                            v-model="precode"
                                            label="code"/>
                                </v-flex>

                                <v-flex xs2>
                                    <v-text-field
                                            readonly

                                            value="-"/>
                                </v-flex>
                                <v-flex xs4>
                                    <v-text-field
                                            v-model="code"
                                            :error="artwork.hasError('code')"
                                            :error-messages="artwork.error('code')"
                                            v-on:focus="artwork.clearError('code')"
                                            :append-icon="artist_id!=null&&type_id!=null?'refresh':''"
                                            v-on:click:append="getCode"
                                            type="number"
                                    />
                                </v-flex>

                            </v-layout>

                        </v-flex>
                    </v-layout>


                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>

                                <v-flex xs4 class="pr-2">
                                    <v-text-field

                                            label="breedte in millimeter"
                                            v-model="artwork.width"
                                            :error="artwork.hasError('width')"
                                            :error-messages="artwork.error('width','Breedte')"
                                            v-on:focus="artwork.clearError('width')"
                                    />
                                </v-flex>
                                <v-flex xs4>
                                    <v-text-field

                                            label="hoogte in millimeter"
                                            v-model="artwork.height"
                                            :error="artwork.hasError('height')"
                                            :error-messages="artwork.error('height','Hoogte')"
                                            v-on:focus="artwork.clearError('height')"
                                    />
                                </v-flex>
                                <v-flex xs4 class="pr-2">
                                    <v-text-field

                                            label="diepte in millimeter"
                                            :error="artwork.hasError('length')"
                                            :error-messages="artwork.error('length','Lengte')"
                                            v-on:focus="artwork.clearError('length')"
                                            v-model="artwork.length"
                                    />
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs4>
                                    <v-checkbox
                                            v-model="artwork.forsale"
                                            label="te koop"></v-checkbox>
                                </v-flex>
                                <v-flex xs8>
                                    <v-text-field
                                            v-model="artwork.price"
                                            label="Prijs"
                                            :error="artwork.hasError('price')"
                                            :error-messages="artwork.error('price','Prijs')"
                                            v-on:focus="artwork.clearError('price')"
                                    />
                                </v-flex>
                            </v-layout>


                            <v-flex xs12>
                                <v-autocomplete
                                        :items="types"
                                        item-text="name"
                                        item-value="id"
                                        label="Type"
                                        v-model="type_id"
                                        :error="artwork.hasError('type_id')"
                                        :error-messages="artwork.error('type_id','Type')"
                                ></v-autocomplete>
                            </v-flex>


                            <v-flex xs12>
                                <v-autocomplete
                                        :items="artists"
                                        item-text="fullname"
                                        item-value="id"
                                        label="Artiest"
                                        v-model="artist_id"
                                        :error="artwork.hasError('artist_id')"
                                        :error-messages="artwork.error('artist_id','Artiest')"

                                ></v-autocomplete>
                            </v-flex>

                            <v-flex d-flex xs6 sm6 class="mt-3">
                                <input type="file" id="Afbeelding"
                                       @change="processFile($event)">
                            </v-flex>

                        </v-flex>

                        <v-flex xs12 sm6>
                            <div v-if="item.image">
                                <v-img :src="item.image" alt="no image selected" height="300px" contain></v-img>

                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>

        </v-card-text>
        <v-card-actions>
            <v-btn outlined @click="save">Opslaan</v-btn>
        </v-card-actions>
    </v-card>


</template>

<script>
    import appContent from '../../basis/content'
    import {mapActions, mapGetters} from 'vuex'
    import {Form} from '../../../../Form'

    export default {
        name: "maak",
        data() {
            return {
                forsale: false,
                saving: false,
                createArtist: false,
                createType: false,
                type_id: null,
                artist_id: null,
                artwork: new Form({
                    name: "test",
                    type_id: null,
                    artist_id: null,
                    thumbnailurl: "",
                    price: "",
                    length: "1",
                    width: "1",
                    height: "1",
                    code: "",
                    forsale: false
                }),
                item: {
                    image: false
                },
                precode: '',
                code: '',
                notitle: false
            }
        }, computed: {
            ...mapGetters({
                types: 'types/types',
                loading: 'types/loading',
                artists: 'artiesten/artiesten'
            })
        },
        watch: {
            type_id() {
                this.artwork.type_id = this.type_id

                if (this.type_id != null && this.artist_id != null) {
                    this.getCode()

                }
            },

            artist_id() {
                this.artwork.artist_id = this.artist_id

                if (this.type_id != null && this.artist_id != null) {
                    this.getCode()
                }
            },
            notitle() {
                if (this.notitle) {
                    this.artwork.name = ""
                }
            }
        },
        methods: {
            ...mapActions({
                setTitle: 'aut/setTitle',
                getTypes: 'types/fetch',
                getArtists: 'artiesten/fetch',
                create:'kunstwerken/create'
            }),
            createImage(item, file) {
                var image = new Image();
                var reader = new FileReader();

                reader.onload = (e) => {
                    item.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            removeImage: function (item) {
                item.image = false;
            },

            processFile(event) {
                this.artwork.thumbnailurl = event.target.files[0];
                if (!this.artwork.thumbnailurl)
                    return;
                this.createImage(this.item, this.artwork.thumbnailurl);
            },

            save() {
                console.log('saving')
                this.saving = true;
                let formData = new FormData();
                this.notitle ? formData.append('name', 'Zonder titel') : formData.append('name', this.artwork.name);
                formData.append('thumbnailurl', this.artwork.thumbnailurl);
                formData.append('type_id', this.artwork.type_id);
                formData.append('artist_id', this.artwork.artist_id);
                formData.append('price', this.artwork.price);
                formData.append('width', this.artwork.width);
                formData.append('length', this.artwork.length);
                formData.append('height', this.artwork.height);
                formData.append('code', this.code)
                formData.append('forsale', this.artwork.forsale)

                this.create(formData)




                /*                this.$store.dispatch('createArtwork', formData).then(response => {
                                    EventBus.$emit('message', {
                                        component: 'notificationSnackbar',
                                        message: 'Nieuw kunstwerk aangemaakt'
                                    })

                                    this.saving = false;
                                    this.$router.push({name:'artworklist'})
                                    // this.$router.push({name: 'artworkdetail', params: {id: response.data.data.id}})
                                }).catch(error => {
                                    console.log(error.status)

                                    this.saving = false

                                    if (error.status == 422) {
                                        this.artwork.setErrors(JSON.parse(error.response).errors)

                                    }
                                    else if(error.status == 500){

                                    }

                                    else {
                                        console.log(error)
                                        EventBus.$emit('message', {
                                            component: "notificationSnackbar",
                                            message: "Server error: " + JSON.parse(error.response).message
                                        })
                                    }


                                    this.saving = false
                                })*/
            },

            getCode() {
                axios.post('/api/artworks/code', {

                    type_id: this.type_id,
                    artist_id: this.artist_id

                }).then(response => {
                    this.code = response.data.code
                    this.precode = response.data.precode
                })
            }
        }

        ,
        components: {
            appContent
        },
        mounted() {
            this.setTitle('Nieuw Kunstwerk')
            this.getArtists()
            this.getTypes()
        },
        beforeDestroy() {
            this.setTitle('')
        }
    }
</script>

<style scoped>

</style>
