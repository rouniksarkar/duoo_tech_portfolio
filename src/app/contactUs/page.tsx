import axios from 'axios';
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';

const contactUs = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phoneNo:"",
        projectName:"",
        message:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        try {
            const res = await axios.post("/api/contact",formData);
            console.log(res.data);
            router.push("/")
        } catch (error) {
            console.log("Error on creating contact",error);
        }
        
    }
  return (
    <div>

    </div>
  )
}

export default contactUs