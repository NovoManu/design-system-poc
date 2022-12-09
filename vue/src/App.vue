<template>
  <div class="h-screen w-full flex items-center">
    <div class="block border rounded-2xl shadow mx-auto p-6">
      <div class="text-5xl font-bold text-color-primary-400 pb-1.5">Hello World (Primary)</div>
      <div class="text-3xl font-bold text-color-secondary-400">Hello World (Secondary)</div>
      <div class="flex items-center my-6">
        <app-button class="mr-3" text="Button" type="Primary" size="Large" :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Secondary" size="Large"  :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Primary" size="Medium"  :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Secondary" size="Medium"  :theme="theme"/>
        <app-button class="mr-3" text="Button" type="Primary" size="Small"  :theme="theme"/>
        <app-button text="Button" type="Secondary" size="Small"  :theme="theme"/>
      </div>
      <a href="#" class="p-4 text-color-primary-200" @click="setTheme('default')">Default theme</a>
      <a href="#" class="p-4 text-color-secondary-300" @click="setTheme('dark')">Dark theme</a>
      <a href="#" class="p-4 text-color-primary-500" @click="setTheme('xmas')">Xmas theme</a>
      <app-dropdown />
    </div>
  </div>
</template>

<script setup>
import { Button as AppButton, Dropdown as AppDropdown } from 'coral'
import { ref } from 'vue'

const theme = ref('')

function setTheme(t) {
  document.body.className = document.body.className = ''
  document.body.classList.add(t)
  theme.value = t
}
</script>
