import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function ContactForm(props) {
  const [contact, setContact] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newContact = {
      id: uuid(),
      contact: contact,
      phone_number: phoneNumber,
      location: location,
    };

    props.addContact(newContact);

    setContact("");
    setPhoneNumber("");
    setLocation("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact name"
            value={contact}
            onChange={handleContactChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default ContactForm;
