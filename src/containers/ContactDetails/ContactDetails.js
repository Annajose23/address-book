import React from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Auxilary/Auxilary";
import Button from '../../components/UI/Button/Button';
import "./ContactDetails.css";

export const ContactDetails = (props) => {
   
  const clickedHandler = () => {
    props.history.replace('/');
  };

  return (
    props.selectedContact && (
      <Aux>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <h2>
            {props.selectedContact.name.title}.{" "}
            {props.selectedContact.name.first} {props.selectedContact.name.last}
          </h2>
          <p>Phone number: {props.selectedContact.cell}</p>
        </div>
        <div >
          <Button clicked={clickedHandler}>Home</Button>
        </div>
      </Aux>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    selectedContact: state.selectedContact,
  };
};

export default connect(mapStateToProps)(ContactDetails);
