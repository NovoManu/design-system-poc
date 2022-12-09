import { useStore, For, Show } from '@builder.io/mitosis'

type DropdownProps = {
  items: string[],
  onSelect(event: any): string
}
export default function Dropdown(props: DropdownProps) {
  const state = useStore({
    isOpen: false,
    handleSelect(item) {
      props.onSelect(item)
      this.isOpen = false
    }
  })
  return (
    <div>
      <label tabIndex={0} onClick={() => state.isOpen = !state.isOpen}>Click</label>
      <Show when={state.isOpen}>
        <ul tabIndex={0}>
          <For each={props.items}>
            {
              item => <li onClick={() => state.handleSelect(item)}><a>{item}</a></li>
            }
          </For>
        </ul>
      </Show>
    </div>
  )
}
