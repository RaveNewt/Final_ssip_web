/* eslint-disable no-console */
<template>
  <v-container>
    <v-layout row>
      <v-flex class="text-center font-weight-black">
        <h1>Upload a photo</h1>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex  md6 offset-sm3 >
       <div>
         <div >
           <v-btn @click="click1">choose photo</v-btn>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
         </div>
 
       <div v-if="imageData!=null">                     
          <img class="preview" height="268" width="356" :src="img1">
       <br>
       </div>   
      
       </div>
       </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md6 offset-sm3 class="text-center">
        <v-text-field
        solo
        v-model="caption"
        label="Caption goes here">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex class="text-center">
        <v-btn color="pink" @click="create">upload</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Upload",
  
  data () {
    return {
      caption : '',
      img1: '',
      imageData: null
    }
  },
  methods: {
    create () {
      const post = {
        photo: this.img1,
        caption: this.caption        
      }
      this.$firebase.database().ref('PhotoGallery').push(post)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    },
    click1() {
      this.$refs.input1.click() 
    },
    previewImage(event) {
      this.uploadValue=0;
      this.img1=null;
      this.imageData = event.target.files[0];
      this.onUpload()
    },
    onUpload(){
      this.img1=null;
      const storageRef=this.$firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
      this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        // eslint-disable-next-line no-console
        }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.img1 =url;
              // eslint-disable-next-line no-console
              console.log(this.img1)
            });
          }      
        );
    }
  }
};
</script>