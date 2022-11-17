import * as React from "react";
import { useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
import "./button.css";

export default function Button(props: any) {
  const state = useLocalObservable(() => ({ loading: true }));

  useEffect(() => {
    state.loading = false;
  }, []);

  return (
    <>
      {!state.loading ? (
        <>
          <button className="dsf-button shadow-md rounded w-full px-4 py-2">
            {props.name}
          </button>
        </>
      ) : null}
    </>
  );
}
