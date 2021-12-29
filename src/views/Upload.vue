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
          <div>
            <v-flex class="text-center">
              <v-btn @click="onPickPhoto">choose photo</v-btn>
            </v-flex>
            
            <input type="file" ref="input1"
              style="display: none"
              @change="previewImage" accept="image/*" >                
          </div>
        
          <v-flex class="text-center">
            <div v-if="imageData!=null">                     
              <img class="preview" height="268" width="356" :src="img1">
              <br>
            </div>   
          </v-flex>
          
        </div>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex class="text-center">
        <v-btn color="gray" @click="create">upload</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Upload",
  
  data () {
    return {
      img1: '',
      imageData: null
    }
  },
  methods: {
    create () {
      fetch(this.$url+"v1/image/create",{method:'POST',body:JSON.stringify({url:this.img1})
      }).then((json)=>{
        return json.json()
      }).then(() => {
        this.img1=null;
        this.imageData = null;
        alert("Success upload image")
      }).catch(error => {
        // eslint-disable-next-line no-console
        alert(error)
      });
    },
    onPickPhoto() {
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
              console.log("image name : ",this.img1)
            });
          }      
        );
    }
  }
};
</script>