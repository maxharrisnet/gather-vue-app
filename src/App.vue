<template>
  <v-app dark class="primary">
    <v-toolbar app dark color="white primary--text">
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
      bgImg: ''
    }
  },
  mounted () {
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
    var random = Math.floor(Math.random() * images.length) + 0;
    var randomFile = images[random];
    var imgPath = require('./assets/images/bg/' + randomFile);
    var imageUrl = 'url("' + imgPath + '")';
    this.bgImg = imageUrl
  }
}
</script>

<style>
  .bg-cover {
    background-position: center;
    background-size: cover;
  }
</style>
