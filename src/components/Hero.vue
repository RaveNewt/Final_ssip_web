<template>
  <div class="heroBlock">
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      items: [
        {
          src: require("../assets/images/card1.jpg"),
          title: "Gallery"
        },
        {
          src: require("../assets/images/card2.jpg"),
          title: "Team Work"
        },
        {
          src: require("../assets/images/card3.jpg"),
          title: "Design Quality"
        }
      ]
    };
  }
};
</script>