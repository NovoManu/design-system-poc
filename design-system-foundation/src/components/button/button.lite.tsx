import { useStore, onMount, Show } from '@builder.io/mitosis'
import './button.css'

export default function Button(props) {
  const state = useStore({
    loading: true
  })

  onMount(() => {
    state.loading = false
  })

  return (
    <Show when={!state.loading}>
      <button class="dsf-button shadow-md rounded w-full px-4 py-2">{props.name}</button>
    </Show>
  )
}
