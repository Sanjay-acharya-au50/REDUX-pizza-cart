import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [state,setState] = useState([])
useEffect(() => {
    const fun = async () => {
      const res = await axios("https://sanjay-data-api.onrender.com");
      console.log("rse:", res);
      setState(res.data);

    };
    fun();
  }, []);


  return (
    <div>DataFetch</div>
  )
}

export default DataFetch