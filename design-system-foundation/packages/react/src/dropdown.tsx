import * as React from "react";
import { useLocalObservable } from "mobx-react-lite";
type DropdownProps = {
  items: string[];
  onSelect(event: any): string;
};

export default function Dropdown(props: DropdownProps) {
  const state = useLocalObservable(() => ({
    isOpen: false,
    handleSelect(item) {
      props.onSelect(item);
      this.isOpen = false;
    },
  }));

  return (
    <div>
      <label tabIndex={0} onClick={(event) => (state.isOpen = !state.isOpen)}>
        Click
      </label>

      {state.isOpen ? (
        <>
          <ul tabIndex={0}>
            {props.items?.map((item) => (
              <li onClick={(event) => state.handleSelect(item)}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
