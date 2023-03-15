export type State = {
  theme?: 'light' | 'dark' | 'cyberpunk'
  web?: 1 | 2 | 3
  loading: boolean
}
const initialState: State = {
  theme: 'dark',
  web: 2,
  loading: true
}
interface Action {
  type: string
  payload: State
}
export const theme = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload.theme
      }
    case 'CHANGE_WEB':
      return {
        ...state,
        web: action.payload.web,
        loading: action.payload.loading
      }
    case 'CHANGE_LOADING':
      return {
        ...state,
        loading: action.payload.loading
      }
    default:
      return state
  }
}
