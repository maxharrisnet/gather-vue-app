<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Gather The Crew</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
      <!-- Hamburger  Menu -->
      </v-btn>
    </v-toolbar>

    <v-content>
      <GatherApp/>
    </v-content>
  </v-app>
</template>

<script>
import GatherApp from './components/GatherApp'
// import FormFlightSearch from './components/FormFlightSearch'

export default {
  name: 'App',
  components: {
    GatherApp
  },
  data () {
    return {
      //
    }
  }
}
</script>
