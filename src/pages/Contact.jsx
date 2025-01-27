import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { data } from 'react-router-dom';

function Contact() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const formRef = useRef();

  const handleReset = () => {
    formRef.current.reset();
    setValidated(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  function handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
        setShow(false);
    }else{
      let dataArray = {name, email, message}
      localStorage.setItem('formValues', JSON.stringify(dataArray));
      setShow(true);
    }
    setValidated(true);
      if (validated && name !=='' && email!=='' & message !=='') {
        handleReset();
      }
  }
  return (
    <div className='form-container'>
      <Form noValidate ref={formRef}  validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <Form.Control.Feedback type="invalid">
            Please write in a name
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <Form.Control.Feedback type="invalid">
          Please write a valid email adress
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={6} value={message} required onChange={(e)=> setMessage(e.target.value)}/>
      <Form.Control.Feedback type="invalid">
          Please write in a message
        </Form.Control.Feedback>
      </Form.Group>

        <Button variant="primary" type="submit" onClick={() => setShow(true)}>
          Submit
        </Button>
    </Form>
      {show &&   
      <Alert key='success' variant='success' className='alert-space' onClose={() => setShow(false)} dismissible>
          Thank you for your message!
      </Alert>}
    </div>
  )
}

export default Contact