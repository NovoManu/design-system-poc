import { openBlock, createElementBlock, toDisplayString, createCommentVNode } from 'vue';

var colors$1 = {
  'color-primary': {
    50: '#FFF8F2',
    100: '#FFF04C',
    200: '#FFAF69',
    300: '#EC7000',
    400: '#C45B00',
    500: '#883F00',
    600: '#4D2400'
  }
};

var spacing$1 = {
  '1': '8px',
  '2': '12px',
  '3': '16px',
  '4': '24px',
  '5': '32px',
  '6': '48px'
};

var screens$1 = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
};

var colors = colors$1;
var spacing = spacing$1;
var screens = screens$1;
var foundations = {
  colors: colors,
  spacing: spacing,
  screens: screens
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

var css_248z = ".dsf-button{\n    cursor:pointer;\n}\n";
styleInject(css_248z);

var script$1 = {
  name: "button",

  props: ["name"],

  data: () => ({ loading: true }),

  mounted() {
    this.loading = false;
  },
};

const _hoisted_1$1 = {
  key: 0,
  class: "dsf-button shadow-md rounded w-full px-4 py-2"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (!_ctx.loading)
    ? (openBlock(), createElementBlock("button", _hoisted_1$1, toDisplayString($props.name), 1 /* TEXT */))
    : createCommentVNode("v-if", true)
}

script$1.render = render$1;
script$1.__file = "src/button.vue";

var script = {
  name: "input",
};

const _hoisted_1 = {
  type: "text",
  class: "dsf-input"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1))
}

script.render = render;
script.__file = "src/input.vue";

var colors$2 = foundations.colors;
var screens$2 = foundations.screens;
var spacing$2 = foundations.spacing;
export { script$1 as Button, script as Input, colors$2 as colors, screens$2 as screens, spacing$2 as spacing };
//# sourceMappingURL=dsf-vue.es.js.map
