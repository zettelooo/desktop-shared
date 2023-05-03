export type MessageBoxVariant = 'info' | 'warning' | 'error' | 'success'
export type MessageBoxStyle = Record<string, string>
export type MessageBoxPosition =
  | 'center'
  | 'top center'
  | 'bottom center'
  | 'top left'
  | 'center left'
  | 'bottom left'
  | 'top right'
  | 'center right'
  | 'bottom right'
  | { top: number; left: number }
  | { x: number; y: number }
