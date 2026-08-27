'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState<any[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/contact");
                setFormData(res.data.contact || []); 
            } catch (err) {
                console.error("API Error:", err);
                setError("Failed to load contacts.");
            }
        };
        fetchData();
    }, []);

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>All contact queries</h1>
            <div>
                {formData?.map((e) => (
                    <div key={e._id || e.id}>
                        <p>{e.name}</p>
                        <p>{e.email}</p>
                        <p>{e.phoneNo}</p>
                        <p>{e.projectName}</p>
                        <p>{e.message}</p>
                    </div>
                ))}
                
                {formData.length === 0 && <p>No contacts found.</p>}
            </div>
        </div>
    );
};

export default Contact;
