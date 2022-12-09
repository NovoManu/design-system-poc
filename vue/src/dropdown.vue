<template>
  <div class="dropdown relative border w-1/5 rounded p-0.5">
    <label class="block w-full cursor-pointer" :tabIndex="0" @click="isOpen = !isOpen">Click</label>

    <template v-if="isOpen">
      <ul :tabIndex="0" class="dropdown-menu absolute bg-white py-1.5 border w-full left-0 top-8">
        <li
          v-for="(item, index) in items"
          @click="handleSelect(item)"
          :key="index"
          class="p-1 cursor-pointer hover:bg-color-secondary-100 transition"
        >
          <a>{{ item }}</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: "dropdown",

  props: ["onSelect", "items"],

  data: () => ({ isOpen: false }),

  methods: {
    handleSelect(item) {
      this.onSelect(item);
      this.isOpen = false;
    },
  },
};
</script>
