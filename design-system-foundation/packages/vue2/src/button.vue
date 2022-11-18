<template>
  <button
    v-if="!loading"
    :style="componentStyles"
    :class="_classStringToObject(componentClasses)"
  >
    {{ text }}
  </button>
</template>

<script>
import "./button.css";
import { colors, darkColors, xmasColors, spacing } from "../../../foundations";

export default {
  name: "button",

  props: ["theme", "size", "type", "text"],

  data: () => ({ loading: true }),

  mounted() {
    this.loading = false;
  },

  computed: {
    componentClasses() {
      return `dsf-button flex flex-row justify-center items-center px-4 py-2 w-6 h-4 rounded`;
    },
    componentStyles() {
      const themeColors = {
        default: colors,
        dark: darkColors,
        xmas: xmasColors,
      };
      const themeColor = themeColors[this.theme] || themeColors.default;
      const types = {
        Primary: themeColor["color-primary"]["200"],
        Secondary: themeColor["color-secondary"]["200"],
      };
      const defaultType = types["Primary"];
      const sizes = {
        Small: {
          paddingTopBottom: spacing["1"],
          paddingLeftRight: spacing["2"],
        },
        Medium: {
          paddingTopBottom: spacing["2"],
          paddingLeftRight: spacing["3"],
        },
        Large: {
          paddingTopBottom: spacing["3"],
          paddingLeftRight: spacing["4"],
        },
      };
      const defaultSize = sizes["Medium"];
      const padding = `${
        sizes[this.size].paddingTopBottom || defaultSize.paddingTopBottom
      } ${sizes[this.size].paddingLeftRight || defaultSize.paddingLeftRight}`;
      return {
        backgroundColor: types[this.type] || defaultType,
        padding,
      };
    },
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
