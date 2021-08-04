<template>
    <div>
        <v-container>
            <v-row justify="center">
                <h1>
                    <span>{{ book.title }}&nbsp;</span>
                    <span style="color: gray;">{{ book.subtitle }}</span>
                </h1>
            </v-row>
            <v-row class="pt-10">
                <v-img v-bind:src="book.cover" max-height="300" contain></v-img>
            </v-row>
            <v-row justify="center" class="pt-8">
                <b> 
                    <span>작가:{{ book.author }} , </span>
                    <span v-if="book.translator">번역: {{ book.translator }} , </span>
                    <span v-else></span>
                    <span>{{ book.publisher }} </span>
                    <span>작가:{{ book.author }} , {{ book.publisher }}</span>
                </b>
            </v-row>
            <v-row justify="center" class="pt-1">
                <span>페이지: {{ book.page }},&nbsp;</span>
                <span>가격: &#x20a9;{{ book.price }},&nbsp;</span>
                <span>ISBN: {{ book.ISBN }} </span>
            </v-row>
            <v-row justify="center" class="pt-4">
                {{ book.info }}
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'Books',
        props: ['bookId'],
        data() {
            return {
                id: this.$route.params.bookId,
                book: []
            }
        },
        mounted() {
            axios.get('/api/books/' + this.id)
            .then(res => {
                console.log(res.data)
                this.book = res.data
            })
            .catch( err => {
                console.log(err)
            })
        },
    }
</script>

<style scoped>

</style>