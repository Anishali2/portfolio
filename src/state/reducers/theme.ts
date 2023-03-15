export type State = {
  theme?: 'light' | 'dark' | 'cyberpunk'
  web?: 1 | 2 | 3
}
const initialState: State = {
  theme: 'dark',
  web: 2
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
        web: action.payload.web
      }
    default:
      return state
  }
}
