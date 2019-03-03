<template>
  <v-container fluid>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/images/logo.png')"
          class="my-3"
          contain
          height="120"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome
        </h1>
        <h3 class="subheading font-weight-regular">
          Get started by selecting a flight.
        </h3>
        <v-btn @click="testRequest()">Test Request Data</v-btn>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <v-layout justify-center>
          <FormFlightSearch/>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormFlightSearch from './FormFlightSearch.vue'

export default {
  components: {
    FormFlightSearch
  },
  methods: {
    testRequest () {
      var unirest = require('unirest');
      var sky = unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/CA/GBP/en-GB/?query=Vancouver")
          .header("X-RapidAPI-Key", "4db6cd02cemsh00a5e165edf84e7p105a12jsndfa328027cc6")
          .end(function (result) {
            console.log(result.status, result.headers, result.body);
          });
      console.log(sky);
    }
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuetifyjs.com'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>

<style>

</style>
