<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useItemsStore } from '@/stores/itemsStore'
import { storeToRefs } from 'pinia'

const store = useItemsStore()
const { addItem, deleteItem } = store
const { items } = storeToRefs(store)

const newItem = ref('')
const dateNow = new Date().toUTCString().slice(5, 16)

function add() {
  if (newItem.value) {
    addItem(newItem.value)
    newItem.value = ''
  }
}
</script>

<template>
  <div class="relative container dark:bg-slate-700 shadow-xl rounded-lg p-6 dark:text-slate-300">
    <header class="flex justify-between pb-6">
      <div class="text-2xl">My day</div>
      <div class="">{{ dateNow }}</div>
    </header>

    <form @submit.prevent="add" class="flex pb-3">
      <input v-model="newItem" class="rounded-lg dark:text-slate-900 w-full h-8 p-3 mr-1" />
      <button class="rounded-lg bg-slate-800 w-28">Add</button>
    </form>

    <div class="flex flex-col">
      <li class="list-none py-0.5" v-for="item in items" :key="item.id">
        <input type="checkbox" id="checkbox" v-model="item.completed" />
        {{ item.item + ' ' + item.id }}
        <button @click="deleteItem(item.id)" class="rounded-lg bg-slate-800 w-8">x</button>
      </li>
    </div>
  </div>
</template>

<style scoped></style>
