import * as React from "react";
import { useLocalObservable } from "mobx-react-lite";
type DropdownProps<T> = {
  items: T[];
  onSelect(item: string): void;
};

export default function Dropdown(props: any) {
  const state = useLocalObservable(() => ({
    isOpen: false,
    handleSelect(item) {
      props.onSelect(item);
      this.isOpen = false;
    },
  }));

  return (
    <div className="dropdown relative border w-1/5 rounded p-0.5">
      <label
        className="block w-full cursor-pointer"
        tabIndex={0}
        onClick={(event) => (state.isOpen = !state.isOpen)}
      >
        Click
      </label>

      {state.isOpen ? (
        <>
          <select
            className="dropdown-menu absolute bg-white py-1.5 border w-full left-0 top-8"
            tabIndex={0}
          >
            {props.items?.map((item) => (
              <option
                className="p-1 cursor-pointer hover:bg-color-secondary-100 transition"
                onClick={(event) => state.handleSelect(item)}
                slotItem={item}
              ></option>
            ))}
          </select>
        </>
      ) : null}
    </div>
  );
}
