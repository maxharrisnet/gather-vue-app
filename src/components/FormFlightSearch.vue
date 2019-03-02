<template>
  <v-container
    id="gtc-flight-search"
  >
    <v-layout justify-center wrap>
      <v-flex xs12>
        <v-input
          :messages="['Messages']"
          append-icon="search"
          >
            Default Slot
        </v-input>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
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

<style>

</style>
