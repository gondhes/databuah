import React from 'react';
import '../App.css'
import { Button } from 'react-bootstrap';

function EditFruit() {

  return (
    <>
    <div className="App">
      <h3>Form Daftar Harga Buah</h3>
    </div>
    <form className="Card">
      <div className="card col-8 overflow-hidden flex-row mt-4">
        <div className="col-8 text-left d-flex flex-column m-3">
          <label className="my-2">Nama: </label>
          <label className="my-2">Harga Total:</label>
          <label className="my-2">Berat Total (dalam gram):</label>
        </div>
        <div className="col-4 text-left flex-column m-3">
          <input className="my-1"></input>
          <input className="my-1"></input>
          <input className="my-1"></input><br/>
          <input className="ml-1 mt-2" type="submit" value="Submit"/>   
        </div>
      </div>
    </form>
    </>
  );
}

export default EditFruit
