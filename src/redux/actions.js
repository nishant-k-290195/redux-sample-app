import { bulbState } from "./reducers"

// ACTIONS
export const lightBulb  = () => dispatch => dispatch ({
  type: 'lightBulb',
  payload: bulbState
})

export const turnOffBulb  = () => dispatch => dispatch ({
  type: 'turnOffBulb',
  payload: bulbState
})

