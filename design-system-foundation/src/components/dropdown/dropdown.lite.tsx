import { useStore, For, Show, Slot } from '@builder.io/mitosis'

type DropdownProps<T> = {
  items: T[],
  onSelect(item: string): void
}
export default function Dropdown(props: any) {
  const state = useStore({
    isOpen: false,
    handleSelect(item) {
      props.onSelect(item)
      this.isOpen = false
    }
  })
  return (
    <div class={'dropdown relative border w-1/5 rounded p-0.5'}>
      <label class={'block w-full cursor-pointer'} tabIndex={0}
             onClick={() => state.isOpen = !state.isOpen}>Click</label>
      <Show when={state.isOpen}>
        <select tabIndex={0} class={'dropdown-menu absolute bg-white py-1.5 border w-full left-0 top-8'}>
          <For each={props.items}>
            {
              item => <option
                class={'p-1 cursor-pointer hover:bg-color-secondary-100 transition'}
                onClick={() => state.handleSelect(item)}
              >
               <Slot item={item} />
              </option>
            }
          </For>
        </select>
      </Show>
    </div>
  )
}
