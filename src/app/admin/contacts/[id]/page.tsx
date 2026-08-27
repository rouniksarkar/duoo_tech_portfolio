'use client'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
const contactInfo = () => {

    const {id} = useParams()

    const [formData, setFormData] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await axios.get(`/api/conatct/${id}`);
            setFormData(res.data);
        }
        fetchData()
    },[id])
  return (
    <div>
        
    </div>
  )
}

export default contactInfo