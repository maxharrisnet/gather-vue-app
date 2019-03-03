<template>
  <v-container fluid v-bind:style="{ backgroundImage: 'url(' + bgImg + ')' }">
    <v-layout text-xs-center wrap>
      <v-flex xs12>
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

export default {
  components: {
    FormFlightSearch
  },
  methods: {
    skyScannerApiRequest () {
      var unirest = require('unirest');
      // var locale = 'en-US'
      // var q = 'Vancouver'
      unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/CA/USD/en-USD/?query=Vancouver")
      .header("X-RapidAPI-Key", "ae26af5873msh2e66fec7b4b2261p18cd99jsn807ccf554efe")
      .end(function (body) {
        // console.log(result.status, result.body);
        console.log(body.json);
      });
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
  data: () => ({
    bgImg: '',
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
  }),
  created: {
    function () {
      var random = Math.floor(Math.random() * 3) + 0;
      var imageUrl = "url('../assets/images/bg/')";
      var images = [
        "edgar-chaparro-143297-unsplash.jpg",
        "ashley-gerlach-435502-unsplash.jpg",
        "clarke-sanders-249798-unsplash.jpg",
        "dazzle_jam-nappy-.jpeg",
        "deanna-ritchie-227649-unsplash.jpg",
        "erwan-hesry-166245-unsplash.jpg",
        "francesca-tirico-450426-unsplash.jpg",
        "jottaneto-nappy-.jpeg",
        "jovaughn-stephens-559076-unsplash.jpg",
        "louis-magnotti-27204-unsplash.jpg",
        "luke-porter-1052359-unsplash.jpg",
        "mauroyange-nappy-.jpeg",
        "max-van-den-oetelaar-1328723-unsplash.jpg",
        "maxime-bhm-110039-unsplash.jpg",
        "paul-gilmore-325220-unsplash.jpg",
        "rawpixel-658254-unsplash.jpg",
        "rawpixel-661919-unsplash.jpg",
        "rawpixel-1137680-unsplash.jpg",
        "rawpixel-1187642-unsplash.jpg",
        "rawpixel-1187643-unsplash.jpg",
        "rohiim-ariful-1200791-unsplash.jpg",
        "sk-1018163-unsplash.jpg",
        "taylorckt1-nappy-.jpeg",
        "tolu-bamwo-2-nappy-.jpeg",
        "yrod-art-nappy-.jpeg"
      ];
      var randomFile = images[random];
      var imageUrl = imageUrl + randomFile;
      console.log(imageUrl)
      // this.bgImg = imageUrl
    }
  }
}
</script>

<style>

</style>
