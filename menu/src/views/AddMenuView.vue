<script setup>
import { useMenuStore } from '@/stores/menuData';
import {ref} from 'vue'
const store = useMenuStore()

const formMenu = ref({
    time:null,
    image:null,
    name:null,
    description:null,
    price:0,
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
            <h1>Add New Menu</h1>
            <form @submit.prevent="store.postNewMenu(formMenu)" class="m-4">
                <div class="row">
                    <div class="form-group ">
                        <label>Menu Time to Add</label>
                        <select class="form-control" v-model="formMenu.time">
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                        </select>
                    </div>
                </div>
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
                <button type="submit" class="btn btn-lg btn-warning w-100 mt-3 mx-0">Add</button>
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