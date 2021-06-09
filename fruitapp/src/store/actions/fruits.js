export function setFruits(payload) {
  return { type: 'fruits/setFruits', payload }
}

export function setFruitsAsync(url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setFruits(data))
      })
      .catch(err => console.log(err))
  }
}