import { useState, useEffect } from 'react';
import Notification from '../ui/notification';
import classes from './ContactForm.module.css';

async function sendContactData(contactDetails){
  const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if(!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
}

function ContactForm() {
  const [enteredData, setEnteredData] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();
    
    setRequestStatus('pending');

    try{
      await sendContactData(enteredData);
      setRequestStatus('success');
      setEnteredData({
        email: '',
        name: '',
        message: ''
      });
    }catch(error){
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!'
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!'
    }
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError
    }
  }

  return (
    <section className={classes.contact}>
    <h1>Como puedo ayudarte?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Tu Email</label>
            <input 
              type='email' 
              id='email' 
              required 
              value={enteredData.email} 
              onChange={event => setEnteredData({
                ...enteredData,
                email: event.target.value
              })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Tu Nombre</label>
            <input 
              type='text' 
              id='name' 
              required 
              value={enteredData.name}
              onChange={event => setEnteredData({
                ...enteredData,
                name: event.target.value
              })}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Tu Mensaje</label>
          <textarea 
            id='message' 
            rows='5'
            required
            value={enteredData.message}
            onChange={event => setEnteredData({
              ...enteredData,
              message: event.target.value
            })}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Enviar</button>
        </div>
      </form>
      {notification && 
        <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
    </section>
  )
}

export default ContactForm