<template>
  <v-container fluid>
    <v-layout text-xs-center wrap>
      <v-flex xs12 my-3>
        <v-img
          :src="require('../assets/images/logo.png')"
          class="my-3"
          contain
          height="120"
        ></v-img>
      </v-flex>

      <v-flex mb-2>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome
        </h1>
        <h3 class="subheading font-weight-regular">
          Get started by selecting a flight.
        </h3>
      </v-flex>
      <v-flex my-2 xs12>
        <v-btn @click="skyScannerApiRequest()">Test Request Data</v-btn>
        <div
          v-for="place in places"
        >
          {{ place.PlaceName }}
        </div>
      </v-flex>
      <v-flex xs12>
        <v-layout justify-center>
          <v-flex md12>
            <FormFlightSearch/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormFlightSearch from './FormFlightSearch.vue'
import {SKY_API} from '../plugins/apis';

export default {
  components: {
    FormFlightSearch
  },
  data: () => ({
    places: []
  }),
  methods: {
    skyScannerApiRequest () {
      var api_url = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/CA/USD/en-USD/'
      var query_vars = 'Vancouver'

      SKY_API.get(api_url, {
        params: {
          query: query_vars
        }
      })
      .then(response => {
        this.places = response.data.Places
        console.log(this.data)
      })
      .catch(error => console.log(error))
    },
    skyScannerApiFlightSearch () {
      var unirest = require('unirest');

      unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0")
      .header("X-RapidAPI-Key", "ae26af5873msh2e66fec7b4b2261p18cd99jsn807ccf554efe")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .send("inboundDate=2020-01-10")
      .send("cabinClass=business")
      .send("children=0")
      .send("infants=0")
      .send("country=US")
      .send("currency=USD")
      .send("locale=en-US")
      .send("originPlace=SFO-sky")
      .send("destinationPlace=LHR-sky")
      .send("outboundDate=2020-01-01")
      .send("adults=1")
      .end(function (result) {
        console.log(result.status, result.headers, result.body);
      });
    }
  },
}
</script>

<style>

</style>
