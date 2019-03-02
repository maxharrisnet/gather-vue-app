<template>
  <v-container
    id="gtc-flight-search"
  >
    <v-layout justify-center wrap>
      <v-flex xs12 md4>
        <v-input
          :messages="['Messages']"
          append-icon="search"
          >
            Destination
        </v-input>
      </v-flex>
      <v-flex xs12 md4>

        <!-- <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker> -->
      </v-flex>
      <v-flex>
        <multiselect v-model="value" :options="options"></multiselect>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
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
