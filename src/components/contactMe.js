import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contactMe.css';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [emptyMessage, setEmptyMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Sending Email is coming soon!');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setValidEmail(!newEmail || isValidEmail(newEmail));
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setEmptyMessage(newMessage.trim() === '');
  };

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  return (
    <div>
      <h1 className='text-capitalize'>{localStorage.getItem('activeSection')} </h1>
      <hr></hr>
    
    <div className="contact-container d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded mail-form">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${(!validEmail && email) ? 'is-invalid' : ''}`}
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setValidEmail(!email || isValidEmail(email))}
          />
          {!validEmail && email && <div className="invalid-feedback">Invalid email format</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            className={`form-control ${emptyMessage ? 'is-invalid' : ''}`}
            rows="4"
            value={message}
            onChange={handleMessageChange}
            onInput={() => setEmptyMessage(message.trim() === '')}
          />
          {emptyMessage && <div className="invalid-feedback">Message cannot be empty</div>}
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
    </div>
  );
}

export default ContactMe;
