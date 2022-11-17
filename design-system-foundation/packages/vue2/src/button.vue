<template>
  <button class="dsf-button shadow-md rounded w-full px-4 py-2" v-if="!loading">
    {{ name }}
  </button>
</template>

<script>
import "./button.css";

export default {
  name: "button",

  props: ["name"],

  data: () => ({ loading: true }),

  mounted() {
    this.loading = false;
  },
};
</script>
