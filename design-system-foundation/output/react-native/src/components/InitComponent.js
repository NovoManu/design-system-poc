import * as React from "react";
import { View, Text } from "react-native";
import { useState } from "react";
function MyBasicComponent(props) {
  const [name, setName] = useState(() => "Foo");
  return /* @__PURE__ */ React.createElement(View, null, /* @__PURE__ */ React.createElement(Text, null, props.message || "Hello"), /* @__PURE__ */ React.createElement(Text, null, name), /* @__PURE__ */ React.createElement(Text, null, "! I can run in React, Vue, Solid or Svelte!"));
}
export {
  MyBasicComponent as default
};
