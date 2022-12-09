import { useStore, onMount, Show } from '@builder.io/mitosis'

export default function Dropdown(props: any) {
  const state = useStore({})
  return (
    <div>
      <label tabIndex={0}>Click</label>
      <ul tabIndex={0}>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  )
}
