<script setup>
import { useRouter } from 'vue-router';
const item  = defineProps(['item','time'])


const router = useRouter()
function toEdit(){
    router.push(`/edit-menu/${item.time}/${item.item.id}`)
}
</script>

<template>
    <div class="row mb-3">
        <div class="col-12">
            <div class="row">
                <div class="col-3 border-end">
                    <img :src=item.item.image width="100" height="100"/>
                </div>
                <div class="col-9">
                    <div class="row">
                    <div class="col-8 ">
                        <h4>{{ item.item.name }}</h4>
                    </div>
                    <div class="col-4 text-end">
                        <h4>{{ item.item.price }}</h4>
                    </div>
                </div>
                <div class="row">
                    <p>{{ item.item.description }}</p>
                </div>
                <div class="row ms-1">
                    <button class="btn btn-warning" @click.prevent="toEdit()">Edit</button>
                </div>
                </div>
            </div>      
        </div>
    </div>
</template>
<style scoped>
button{
    width:20%
}

</style>