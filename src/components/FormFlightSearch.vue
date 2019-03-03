<template>
  <v-container id="gtc-flight-search">
    <v-layout justify-center wrap>
      <v-flex xs md6>
        <multiselect v-model="value" :options="options"></multiselect>
      </v-flex>
      <v-flex xs12 md6>
        <DatePicker/>
        <DatePicker/>
      </v-flex>
      <v-flex>
        <v-btn @click="doFlightSearch()">Search Flights</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Multiselect from 'vue-multiselect'
import DatePicker from './DatePicker.vue'

export default {
  components: { Multiselect, DatePicker },
  methods: {
    doFlightSearch () {

    }
  },
  data: () => ({
    // Multiselect
    value: null,
    options: ['list', 'of', 'options'],
    label: 'OKOK',
    // Validation
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>
