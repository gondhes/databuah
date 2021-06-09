const initialState = {
  data: []
}

function fruitsReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'fruits/setFruits') {
      return { ...state, data: payload }
  } 
  return state
}

export default fruitsReducer
