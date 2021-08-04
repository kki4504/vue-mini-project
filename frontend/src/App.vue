<template>
  <v-container>
    <v-app>
      <v-app-bar app color="primary" dark>
        <router-link to="/"><v-icon>mdi-book</v-icon></router-link>
        <span style="font-size: x-large;" class="mr-2">Books</span>
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </v-container>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
