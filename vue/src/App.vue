<template>
  <app-button text="Button" type="Primary" size="Large" :theme="theme"/>
  <app-button text="Button" type="Secondary" size="Large"  :theme="theme"/>
  <app-button text="Button" type="Primary" size="Medium"  :theme="theme"/>
  <app-button text="Button" type="Secondary" size="Medium"  :theme="theme"/>
  <app-button text="Button" type="Primary" size="Small"  :theme="theme"/>
  <app-button text="Button" type="Secondary" size="Small"  :theme="theme"/>
  <div class="text-color-primary-400">Hello World (Primary)</div>
  <div class="text-color-secondary-400">Hello World (Secondary)</div>
  <a href="#" class="p-4 text-color-primary-200" @click="setTheme('default')">Default theme</a>
  <a href="#" class="p-4 text-color-secondary-300" @click="setTheme('dark')">Dark theme</a>
  <a href="#" class="p-4 text-color-primary-500" @click="setTheme('xmas')">Xmas theme</a>
</template>

<script setup>
import { Button as AppButton } from 'coral'
import { ref } from 'vue'

const theme = ref('')

function setTheme(t) {
  document.body.className = document.body.className = ''
  document.body.classList.add(t)
  theme.value = t
}
</script>
