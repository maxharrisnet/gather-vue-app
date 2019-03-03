<template>
  <v-container id="flight-search-form" pa-3>
    <v-layout justify-center row wrap mt-2>
      <v-flex xs12 md4 px-4 py-2>
        <multiselect v-model="value" :options="options"></multiselect>
      </v-flex>
      <v-flex xs12 md3 px-4>
        <DatePicker/>
      </v-flex>
      <v-flex xs12 md3 px-4>
        <DatePicker/>
      </v-flex>
      <v-flex xs12 md1>
        <v-btn large icon raised color="primary" @click="doFlightSearch()">
          <v-icon>search</v-icon>
        </v-btn>
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
