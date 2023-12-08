import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.scss'

function Details() {
  const [api, setApi] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setApi(data);
  }



  return (
    <div>
    <div className='DetailWrapper' key={api.id}>
            <p>{api.title}</p>
            <p>{api.unitPrice}</p>
      </div>
    </div>
  )
}

export default Details