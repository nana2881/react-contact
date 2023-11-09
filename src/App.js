import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function App() {
  const [contacts, setContacts] = useState([
    { id: uuid(), contact: "Aaron Debrah", phoneNumber: "0541452398" },
    { id: uuid(), contact: "Akosua Simon", phoneNumber: "0243526214" },
    { id: uuid(), contact: "Akua Owusuwaa", phoneNumber: "0246252606" },
    { id: uuid(), contact: "Nathaniel Mensah", phoneNumber: "054260244" },
    { id: uuid(), contact: "Kwame Asiedu", phoneNumber: "0243302069" },
  ]);

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ContactForm addContact={addNewContact} />
        </Col>

        <Col>
          <ContactList contacts={contacts} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
