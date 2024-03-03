<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="../assets/logo-ristorante.png"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto gap-2 me-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page" >HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/menu">MENU</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/add-menu">ADD MENU</router-link>
        </li>
        <li class="nav-item">
            <router-link class="btn btn-warning" to="/book">BOOK A TABLE</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
li > a{
    font-weight: 600;
}




</style>