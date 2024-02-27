import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const dispatch = useDispatch()

  const addContact = (e) => {
    e.preventDefault();
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}})
  }
  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      addContact(e)
    }
  }
  console.log(name);
  return (
    <Form onSubmit={(e) => addContact(e)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event) => setPhoneNumber(event.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onKeyDown={handleKeyPress}>
        등록
      </Button>
    </Form>
  )
}

export default ContactForm