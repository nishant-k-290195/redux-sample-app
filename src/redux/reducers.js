// REDUCER 
export const bulbState = (state = 'OFF', action) => {
  switch (action.type){
    case 'lightBulb':
      return 'ON'
    case 'turnOffBulb':
      return 'OFF'
    default:
      return state
  }
}

