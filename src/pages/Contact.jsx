import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    validated: false,
    show: false,
  });

  const formRef = useRef();

  const handleReset = () => {
    formRef.current.reset();
    setFormData({
      name: '',
      email: '',
      message: '',
      validated: false,
      show: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setFormData((prevData) => ({
        ...prevData,
        show: false,
      }));
    } else {
      const { name, email, message } = formData;
      localStorage.setItem('formValues', JSON.stringify({ name, email, message }));
      setFormData((prevData) => ({
        ...prevData,
        show: true,
      }));
    }
    setFormData((prevData) => ({
      ...prevData,
      validated: true,
    }));
    if (formData.validated && formData.name !== '' && formData.email !== '' && formData.message !== '') {
      handleReset();
    }
  };

  return (
    <div className='form-container'>
      <Form noValidate ref={formRef} validated={formData.validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please write in a name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please write a valid email address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="message"
            placeholder="Please type message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please insert necessary message....
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {formData.show &&
        <Alert key='success' variant='success' className='alert-space' onClose={() => setFormData((prevData) => ({ ...prevData, show: false }))} dismissible>
          Message sent! Thank You very much!
        </Alert>}
    </div>
  );
}

export default Contact;