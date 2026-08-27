'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const contact = () => {

    const [formData, setFormData] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await axios.get("/api/conatct");
            setFormData(res.data);
        }
        fetchData()
    },[])


  return (
    <div>
        <h1>All contact quaries</h1>
        <div>

        </div>
    </div>
  )
}

export default contact