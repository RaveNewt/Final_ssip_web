<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img13.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>We are From President University. We creating web for our final Server Side Programming.</p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
            <v-card flat tile class="mx-auto">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/team2.jpeg"),
          name: 'Lexi Anugrah',
          title: 'Team Leader'
        },
        {
          id: 2,
          src: require("../assets/images/team3.jpg"),
          name: 'Ihsanulisra Maulana',
          title: 'Front-end'
        },
        {
          id: 3,
          src: require("../assets/images/team1.jpeg"),
          name: 'Muhammad Ari Sasmoko',
          title: 'Front End'
        }
      ]
    };
  }
};
</script>