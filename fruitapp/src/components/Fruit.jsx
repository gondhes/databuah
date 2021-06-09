import React from 'react'
import { useHistory } from 'react-router-dom'

function Country(props) {
  const { nama, harga, berat } = props.fruit
  const index = props.index
  let kilo = berat/1000

  const history = useHistory()

  const toEditFruit = () => {
    history.push('/add')
  }

  return (
    <>
    <tr>
      <td>{index + 1}</td>
      <td>{nama}</td>
      <td>{harga}</td>
      <td>{kilo} kg</td>
      <td>{harga/kilo}</td>
      <td>
        <button onClick={() => toEditFruit()}>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
    </>
  )
}

export default Country
