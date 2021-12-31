<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col v-for="(item,index) in items" :key="item[index]" class="d-flex child-flex" cols="6" sm="4">
          <v-card flat tile class="d-flex">
            <v-img :src="item.url" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items:[]
    };
  },methods: {
    getList() {
      this.axios.get(this.$url+"v1/image.php").then((response) => {
        this.items = response.data.data;
        // eslint-disable-next-line no-console
        console.log(this.items)
      }).catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      });
    }
  },
  mounted(){
    this.getList()
  }
};
</script>