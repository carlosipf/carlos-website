import React, { useState } from "react";
import "./Contact.css";
import axios from 'axios';
import Layout from "../components/Layout";

const Contact: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("")
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("fill in all fields to proceed!")
      return;
    }
    try {
      const response = await axios.post('http://localhost:5001/api/contact', { name, subject, email, number, message, honeypot });
      if (response.status === 200) {
        setStatus("message sent successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setSubject("");
        setMessage("");
        setHoneypot("");
      }
    } catch (error) {
      console.error("error:", error);
      setStatus("failed to send message. contact me instead at 224-532-7996");
    }
  };

  return (

    <Layout>
      <div className="page-container">
        <h2>reach out!</h2>
        <p>want to connect? send me a message below!</p>
        <form onSubmit={handleSubmit} className="contact-form">

          <label>
            name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <div className="field-row">
            <label>
              email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              number:
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
          </div>
          <label>
            subject:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <label>
            message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <div style={{ display: 'none' }}>
            <label>
              honeypot:
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">send</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </Layout >

  );
};

export default Contact;
