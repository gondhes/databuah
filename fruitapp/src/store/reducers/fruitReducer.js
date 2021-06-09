const initialState = {
  data: []
}

function fruitReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'fruit/setFruit') {
      return { ...state, data: payload }
  } 
  return state
}

export default fruitReducer
