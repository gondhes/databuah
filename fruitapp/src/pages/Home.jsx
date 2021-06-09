import React, { useEffect } from 'react';
import '../App.css'
import Fruit from '../components/Fruit'
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setFruitsAsync } from '../store/actions/fruits'

function Home() {

  const url = 'http://localhost:4000/fruits'
  const fruits = useSelector(state => state.fruits.data)
  // const fruit = useSelector(state => state.fruit.data)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(setFruitsAsync(url))
  }, [dispatch])

  const toAddFruit = () => {
    history.push('/add')
  }

  return (
    <>
    <div className="App">
      <h3>Daftar Harga Buah</h3>
    </div>
    <div className="Table">
      <Table striped bordered hover size="sm" className="mt-4">
        <thead class="p-3 mb-2 bg-success text-white">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga Per Kg</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {
              fruits.map((fruit, i) => {
                return <Fruit fruit={fruit} key={i} index={i}></Fruit>
              })
            }
        </tbody>
      </Table>
    </div>
    <Button className="mt-5" onClick={() => toAddFruit()}>Tambah Data Buah</Button>
    </>
  );
}

export default Home
