<script setup>
import { useMenuStore } from '@/stores/menuData';
import {computed, onBeforeMount, onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';


const store = useMenuStore()
const route = useRoute()


const formMenu = ref({
    time:null,
    image:null,
    name:null,
    description:null,
    price:0,
})


 const fetchData = async()=>{
    await store.fetchSingleMenu(route.params.time,route.params.id)
    formMenu.value.time = route.params.time
    formMenu.value.image = store.datum[0].image
    formMenu.value.name = store.datum[0].name
    formMenu.value.description = store.datum[0].description
    formMenu.value.price = store.datum[0].price
    
 }
onBeforeMount(()=>{
    console.log("BEFORE MOUNTED1>>", formMenu)
    fetchData()
    console.log("BEFORE MOUNTED2>>", formMenu)
    
    
})

onMounted(()=>{
    console.log("MOUNTED>>",formMenu)
})
  


</script>

<template>
<div class="h-100 container-fluid p-0">
    <div class="row align-items-center">
        <div class="col-md-6">
            <img 
                src="https://www.southernliving.com/thmb/XgZwnFHAhZhSlZ_uA_tMGdB4iD8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MamaRicottas11-99fbee5bd7504985822f672fff48de9d.jpg"
                />
        </div>
        <div class="col-md-6">
            <h1>Edit Menu</h1>
            <form @submit.prevent="store.postEditMenu(route.params.time,route.params.id,formMenu)" class="m-4">
                <div class="row">
                    <div class="form-group ">
                        <label>New Menu Name</label>
                        <input type='text' class="form-control" v-model="formMenu.name"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group ">
                        <label>New Menu Price</label>
                        <input type="number" class="form-control" v-model="formMenu.price"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group ">
                        <label>Add Image Link</label>
                        <input type='text' class="form-control" v-model="formMenu.image"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group ">
                        <label>Description</label>
                        <textarea  class="form-control" v-model="formMenu.description"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-lg btn-warning w-100 mt-3 mx-0">Edit</button>
            </form>
        </div>
    </div> 
  </div>


</template>

<style scoped>
body{
    background-color: rgb(0, 31, 209);
}

.form-control{
    border: 0;
    margin:0;
}
.form-group{
    border: solid black 1px;
    background-color: white;
    min-height:80px;
    vertical-align: middle;
}

input{
    height:50%
}

.center{
    height:100%
}

img{
    object-fit: cover;
    width:100%;
    height:100vh;
    object-position: left; 
}

label{
    margin-top:5px;
}

</style>