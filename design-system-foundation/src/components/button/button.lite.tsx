import { useStore, onMount, Show } from '@builder.io/mitosis'
import './button.css'
import { colors, spacing } from '../../../foundations'

type ButtonProps = {
  text: string
  type: 'Primary' | 'Secondary'
  size: 'Small' | 'Medium' | 'Large'
}
export default function Button(props: ButtonProps) {
  const state = useStore({
    loading: true,
    get componentClasses(): string {
      return `dsf-button flex flex-row justify-center items-center px-4 py-2 w-6 h-4 rounded`
    },
    get componentStyles() {
      const types = {
        Primary: colors['color-primary']['200'],
        Secondary: colors['color-secondary']['200']
      }
      const defaultType = types['Primary']
      const sizes = {
        Small: {
          paddingTopBottom: spacing['1'],
          paddingLeftRight: spacing['2'],
        },
        Medium: {
          paddingTopBottom: spacing['2'],
          paddingLeftRight: spacing['3'],
        },
        Large: {
          paddingTopBottom: spacing['3'],
          paddingLeftRight: spacing['4'],
        },
      }
      const defaultSize = sizes['Medium']
      const padding = `${sizes[props.size].paddingTopBottom || defaultSize.paddingTopBottom} ${sizes[props.size].paddingLeftRight || defaultSize.paddingLeftRight}`
      return {
        backgroundColor: types[props.type] || defaultType,
        padding
      }
    }
  })

  onMount(() => {
    state.loading = false
  })

  return (
    <Show when={!state.loading}>
      <button style={state.componentStyles} class={state.componentClasses}>{props.text}</button>
    </Show>
  )
}
