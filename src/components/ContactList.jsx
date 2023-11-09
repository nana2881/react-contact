import React from "react";
import ContactDetails from "./ContactDetails";

function ContactList(props) {
  return (
    <div>
      <h1>Contact List components</h1>

      {props.contacts.map((contact) => {
        return <ContactDetails details={contact} />;
      })}
    </div>
  );
}

export default ContactList;
