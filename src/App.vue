<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-title class="headline text-uppercase">
        <span>Gather The Crew</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Hamburger  Menu -->
    </v-toolbar>

    <v-content>
      <GatherApp/>
    </v-content>
  </v-app>
</template>

<script>
import GatherApp from './components/GatherApp'

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
