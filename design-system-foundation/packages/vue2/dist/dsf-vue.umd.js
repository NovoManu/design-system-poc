'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var colors = {
  'color-primary': {
    50: '#FFF8F2',
    100: '#FFF04C',
    200: '#FFAF69',
    300: '#EC7000',
    400: '#C45B00',
    500: '#883F00',
    600: '#4D2400'
  },
  'color-secondary': {
    50: '#F2F9FF',
    100: '#C9E6FF',
    200: '#78C2FF',
    300: '#1890FF',
    400: '#0366C4',
    500: '#004588',
    600: '#00264D'
  }
};

var darkColors = {
  'color-primary': {
    50: '#FFFFFF',
    100: '#F7FBFF',
    200: '#D0D8DF',
    300: '#ACB6BF',
    400: '#8C969F',
    500: '#6E7780',
    600: '#525960'
  },
  'color-secondary': {
    50: '#F7FFF8',
    100: '#CCF0CE',
    200: '#84D288',
    300: '#3EA644',
    400: '#26882B',
    500: '#186A1C',
    600: '#0F4D12'
  }
};

var xmasColors = {
  'color-primary': {
    50: '#FFF8F7',
    100: '#FBC9C5',
    200: '#F23568',
    300: '#DB1C0A',
    400: '#AC180A',
    500: '#7C180E',
    600: '#4D140F'
  },
  'color-secondary': {
    50: '#FFFFFF',
    100: '#F7FBFF',
    200: '#D0D8DF',
    300: '#ACB6BF',
    400: '#8C969F',
    500: '#6E7780',
    600: '#525960'
  }
};

var spacing = {
  '0': '0px',
  'px': '1px',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem'
};

var screens = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".dsf-button{\n    cursor:pointer;\n}\n.dsf-button--primary{\n    background-color:#FFAF69;\n}\n.dsf-button--secondary{\n    background-color:#78C2FF;\n}\n.dsf-button--small{\n    width:68px;\n    height:32px;\n}\n.dsf-button--medium{\n    width:76px;\n    height:40px;\n}\n";
styleInject(css_248z);

var script$2 = {
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

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (!_ctx.loading)
    ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 0,
        style: vue.normalizeStyle($options.componentStyles),
        class: vue.normalizeClass($options._classStringToObject($options.componentClasses))
      }, vue.toDisplayString($props.text), 7 /* TEXT, CLASS, STYLE */))
    : vue.createCommentVNode("v-if", true)
}

script$2.render = render$2;
script$2.__file = "src/button.vue";

var script$1 = {
  name: "input",
};

const _hoisted_1$1 = {
  type: "text",
  class: "dsf-input"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/input.vue";

var script = {
  name: "dropdown",
};

const _hoisted_1 = /*#__PURE__*/vue.createElementVNode("label", { tabIndex: 0 }, "Click", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("ul", { tabIndex: 0 }, [
  /*#__PURE__*/vue.createElementVNode("li", null, [
    /*#__PURE__*/vue.createElementVNode("a", null, "Item 1")
  ]),
  /*#__PURE__*/vue.createElementVNode("li", null, [
    /*#__PURE__*/vue.createElementVNode("a", null, "Item 2")
  ])
], -1 /* HOISTED */);
const _hoisted_3 = [
  _hoisted_1,
  _hoisted_2
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, _hoisted_3))
}

script.render = render;
script.__file = "src/dropdown.vue";

exports.Button = script$2;
exports.Dropdown = script;
exports.Input = script$1;
exports.colors = colors;
exports.darkColors = darkColors;
exports.screens = screens;
exports.spacing = spacing;
exports.xmasColors = xmasColors;
//# sourceMappingURL=dsf-vue.umd.js.map
