<script setup>
import { useBookStore } from '@/stores/postBook';
import {ref} from 'vue'
const store = useBookStore()

const formBook = ref({
    name:'',
    email:'',
    date:'',
    num:null,
    req:null,
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
            <h3>Reservation</h3>
            <h1>Book Table Online</h1>
            <form @submit.prevent="store.postData(formBook)" class="m-4">
                <div class="row">
                    <div class="form-group col-md-6">
                        <input type="text" v-model="formBook.name" class="form-control center" placeholder="Your Name">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="email" v-model="formBook.email" class="form-control center" placeholder="Your Email">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Date & Time</label>
                        <input type="date" v-model="formBook.date" class="form-control" placeholder="Your Name">
                    </div>
                    <div class="form-group col-md-6">
                        <label>No. Of People</label>
                        <select class="form-control" v-model="formBook.num">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group ">
                        <label>Typical Request</label>
                        <textarea  class="form-control" v-model="formBook.req"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-lg btn-warning w-100 mt-3 mx-0">Masuk</button>
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