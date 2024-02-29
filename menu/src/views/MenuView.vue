<script setup>
import breakfastData from '../assets/menuBreakfast.json'
import lunchData from '../assets/menuLunch.json'
import dinnerData from '../assets/menuDinner.json'
import MenuItem from '../components/MenuItem.vue'
import {ref} from 'vue'
import { useMenuStore } from '@/stores/menuData'

const store =  useMenuStore()

function changeMealTime(param){
    store.menuTime= param
    store.fetchData(param)
    console.log(store.menuTime.value)
}



</script>

<template>
<div class="h-100 d-flex flex-column align-items-center main-body pt-5 ">
  <div class="d-flex flex-column align-items-center justify-content-center">
    <div>
        <h3>Food Menu</h3>
    </div>
    <div >
        <h1>MOST POPULAR ITEM</h1>
    </div>
    <div class="d-flex flex-row align-items-center justify-content-center gap-5 mt-5">
        <div class="btn btn-outline-warning" @click="changeMealTime('breakfast')">
            Breakfast
        </div>
        <div class="btn btn-outline-warning" @click="changeMealTime('lunch')">
            Lunch
        </div>
        <div class="btn btn-outline-warning" @click="changeMealTime('dinner')">
            Dinner
        </div>
    </div>
  </div>
  
  <div class="mt-5 ">
    <div v-if="store.menuTime === 'breakfast'" class="container-fluid bg-white p-4">
        <MenuItem  v-for="item in store.data" :key="item.id" :item="item" />
    </div>
    <div v-else-if="store.menuTime === 'lunch'" class="container bg-white p-4">
        <MenuItem  v-for="item in store.data" :key="item.id" :item="item" />
    </div>
    <div v-else-if="store.menuTime === 'dinner'" class="container bg-white p-4">
        <MenuItem  v-for="item in store.data" :key="item.id" :item="item" />
    </div>
  </div>


</div>
</template>

<style >
body{
    background-color: rgba(127, 249, 251, 0.25);
}

.main-body{
    height:100vh
}
</style>