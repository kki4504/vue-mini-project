<template>
    <div>
        <div>
            <v-container>
                <v-row>
                    <v-col cols="1" md="4" v-for="book in books" :key="book.bookId">   
                        <v-card outlined tile elevation="4">
                            <v-img :src="book.cover" max-height="200" contain></v-img>
                            <v-card-title>
                                <router-link :to="'/books/'+book.bookId" style="text-decoration: none;">{{  book.title  }}</router-link>
                            </v-card-title>
                            <v-card-text>
                                <p>{{ book.author }} </p>
                            </v-card-text>
                        </v-card>
                    </v-col>  
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'Home',

        data() {
            return {
                books: [],        
                id: '',
            }
        },

        mounted() {
            axios.get('/api/books')
            .then(res => {
                console.log(res)
                this.books = res.data
            })
            .catch( err => {
                console.log(err)
            })
        },
        methods: {
            setId() {
                
            }
        },

    }
</script>

<style>

</style>