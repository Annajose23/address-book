import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

import Persons from "./Persons/Persons";
import ContactDetails from "./ContactDetails/ContactDetails";

class AddressBook extends Component {
  render() {
    return (
      <div>  
          <Route path="/contact-details" exact component={ContactDetails} />
          <Route path="/" exact component={Persons} />
          <Redirect to="/"/>
      </div>
    );
  }
}

export default AddressBook;
