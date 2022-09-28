<template>
    <div class="main">
    <h3>Bitte gib einen Benutzernamen ein:</h3>
    <input placeholder="Hier eingeben" v-model="user.value"/>
    </div>
</template>
<script setup>
import { useUserStore } from '../stores/User'

const user = useUserStore()

</script>
<style scoped>
    .main{
        margin-top: 10%;
        margin-left: 10%;
    }
</style>
