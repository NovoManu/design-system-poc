import * as React from "react";
import { colors, darkColors, xmasColors, spacing } from "./foundations";
import "./button.css";
import { useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
type ButtonProps = {
  text: string;
  type: "Primary" | "Secondary";
  size: "Small" | "Medium" | "Large";
  theme: "dark" | "xmas";
};

export default function Button(props: ButtonProps) {
  const state = useLocalObservable(() => ({
    loading: true,
    get componentClasses() {
      return `dsf-button flex flex-row justify-center items-center rounded`;
    },
    get componentStyles() {
      const themeColors = {
        default: colors,
        dark: darkColors,
        xmas: xmasColors,
      };
      const themeColor = themeColors[props.theme] || themeColors.default;
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
        sizes[props.size].paddingTopBottom || defaultSize.paddingTopBottom
      } ${sizes[props.size].paddingLeftRight || defaultSize.paddingLeftRight}`;
      return {
        backgroundColor: types[props.type] || defaultType,
        padding,
      };
    },
  }));

  useEffect(() => {
    state.loading = false;
  }, []);

  return (
    <>
      {(
        <>
          <button
            style={state.componentStyles}
            className={state.componentClasses}
          >
            {props.text}
          </button>
        </>
      )}
    </>
  );
}
