<script setup>
import {RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
</script>

<template>
    <Navigation/>
    <Header/>
    <div class="container-fluid bg-dark bg-gradient bg-opacity-10">
        <RouterView/>
    </div>
</template>

<style>

</style>
