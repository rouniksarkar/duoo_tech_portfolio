'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState<any[]>([]);
    const [totalContact, setTotalContact] = useState<number>(0);
    const [pendingContact, setPendingContact] = useState<number>(0);
    const [acceptedContact, setAcceptedContact] = useState<number>(0);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/contact");
                console.log("RAW BACKEND RESPONSE:", res.data);
                setFormData(res.data.contact || []);
                setTotalContact(res.data.totalContact);
                setPendingContact(res.data.pendingContact);
                setAcceptedContact(res.data.acceptedContact);
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
            <p>Total query: {totalContact}</p>
            <p>pending query: {pendingContact}</p>
            <p>accepted query: {acceptedContact}</p>
            <div>
                {formData?.map((e) => (
                    <div key={e._id || e.id}>
                        <p>{e.name}</p>
                        <p>{e.email}</p>
                        <p>{e.phoneNo}</p>
                        <p>{e.projectName}</p>
                        <p>{e.message}</p>
                        <p>{e.status}</p>
                        <p>Created on: {new Date(e.createdAt).toLocaleString()}</p>
                    </div>
                ))}

                {formData.length === 0 && <p>No contacts found.</p>}
            </div>
        </div>
    );
};

export default Contact;
