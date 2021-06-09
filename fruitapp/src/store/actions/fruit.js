export function setFruit(payload) {
  return { type: 'fruit/setFruit', payload }
}

export function setFruitAsync(url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setFruit(data))
      })
      .catch(err => console.log(err))
  }
}