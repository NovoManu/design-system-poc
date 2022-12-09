<template>
  <div>
    <label :tabIndex="0">Click</label>
    <ul :tabIndex="0">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dropdown",
};
</script>
