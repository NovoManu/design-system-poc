<template>
  <div class="h-screen w-full flex items-center">
    <div class="block border rounded-2xl shadow mx-auto p-6">
      <div class="text-5xl font-bold text-color-primary-400 pb-1.5">Hello World (Primary)</div>
      <div class="text-3xl font-bold text-color-secondary-400">Hello World (Secondary)</div>
      <div class="flex items-center my-6">
        <app-button class="mr-3" text="Button" type="Primary" size="Large" :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Secondary" size="Large" :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Primary" size="Medium" :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Secondary" size="Medium" :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Primary" size="Small" :theme="theme"/>
        <app-button text="Button" type="Secondary" size="Small" :theme="theme"/>
      </div>
      <div class="mb-3">
        <div class="opacity-50">Selected item is: <span class="font-bold">{{ selectedItem }}</span></div>
        <app-dropdown :items="items" v-slot="slotProps" :onSelect="onSelect"><test-comp :item="slotProps.item" /></app-dropdown>
      </div>
      <a href="#" class="p-4 text-color-primary-200" @click="setTheme('default')">Default theme</a>
      <a href="#" class="p-4 text-color-secondary-300" @click="setTheme('dark')">Dark theme</a>
      <a href="#" class="p-4 text-color-primary-500" @click="setTheme('xmas')">Xmas theme</a>
    </div>
  </div>
</template>

<script setup>
import { Button as AppButton, Dropdown as AppDropdown } from 'coral'
import TestComp from './TestComp.vue'
import { ref } from 'vue'

const theme = ref('')
const items = ref([
  {
    first: 'Axel',
    last: 'Nilsson'
  },
  {
    first: 'Manu',
    last: 'Ustenko'
  },
  {
    first: 'Marta',
    last: 'Joka'
  }
])
const selectedItem = ref(items[0])

function setTheme (t) {
  document.body.className = document.body.className = ''
  document.body.classList.add(t)
  theme.value = t
}

function onSelect (item) {
  selectedItem.value = item
}
</script>
