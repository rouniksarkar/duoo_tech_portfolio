'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const ContactInfo = () => {
    const { id } = useParams();

    const [contact, setContact] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!id) return; 

        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/contact/${id}`);
                setContact(res.data.contact || res.data.data);
            } catch (error) {
                console.error("Error fetching contact details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!contact) return <div>Contact not found.</div>;

    return (
        <div>
            <h1>Contact Details</h1>
            <div>
                {/* 4. No .map() needed for a single object */}
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phoneNo}</p>
                <p><strong>Project:</strong> {contact.projectName}</p>
                <p><strong>Message:</strong> {contact.message}</p>
                <p>Created on: {new Date(contact.createdAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default ContactInfo;
