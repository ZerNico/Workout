<template>
  <v-app>
    <meta name="theme-color" content="#0D47A1">
    <v-card color="grey lighten-5" flat>
      <v-toolbar dark color="primary" flat extended height="64">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Workout</router-link>
        </v-toolbar-title>
      </v-toolbar>
      <main>
        <router-view></router-view>
      </main>
    </v-card>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: false,
        show: false,
        items: [
          { title: 'Photos', subtitle: 'Jan 9, 2014' },
          { title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { title: 'Work', subtitle: 'Jan 28, 2014' }
        ]
      }
    }
  }
</script>
<style lang="stylus">
  @import './stylus/main'
</style>
<style>
  .card--flex-toolbar {
  margin-top: -64px;
  }
</style>
