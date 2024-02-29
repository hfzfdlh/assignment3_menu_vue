<script setup>
import {useFetch} from '../functions/fetch'
import {ref, onBeforeMount} from 'vue'
import { RouterLink } from 'vue-router'




</script>

<template>
<div class="h-100 d-flex flex-column align-items-center justify-content-center main-body">
  <div class="d-flex flex-column align-items-center justify-content-center main-container">
    <div>
      <h1>ENJOY OUR DELICIOUS MEAL</h1>
    </div>
    <div class="text-center">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus libero nec nulla blandit consequat. Aliquam consectetur mollis ligula eu iaculis. Ut interdum urna eu felis congue, in rhoncus nunc accumsan. Sed hendrerit tristique sapien, eget ornare odio malesuada sit amet. Suspendisse eget odio vel nulla volutpat fermentum. Pellentesque aliquet, mauris sit amet suscipit congue</p>
    </div>
  <div>
    <router-link to="/book" class="btn btn-warning button-big">BOOK A TABLE</router-link>
  </div>
  </div>
 
</div>
</template>

<style scoped>
p {
  text-align: center;
}

.button-big{
  font-size: large;
  font-weight: 700;
  padding:10%;
  width: 200px;
}
.main-body{
  position: relative; 
  background-image: url('../assets/bg-food.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-container{
  border: solid black 1px;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.45);
  width:75%;
  padding: 5%
}


.text-center{
  padding:0 10%;
}
</style>