import React, { Component } from "react";
import Person from "../../components/Person/Person";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/actions";
import Aux from "./../../hoc/Auxilary/Auxilary";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Persons.css";

export class Persons extends Component {
  
  componentDidMount() {
    this.props.onFetchPersons();
  }

  contactSelectHandler = (person) => {
    this.props.onContactSelection(person);
    this.props.history.replace("/contact-details");
  };

  render() {
    let persons = this.props.personsList.map((person, index) => (
      <Person
        key={index}
        name={person.name}
        clicked={() => this.contactSelectHandler(person)}
      />
    ));

    if (this.props.loading) {
      persons = <Spinner />;
    }

    if (this.props.hasError) {
      persons = <p>Something went wrong!!</p>;
    }

    return (
      <Aux>
        <div>
          <h3>Address Book</h3>
        </div>
        <div className="address_book">{persons}</div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personsList: state.persons,
    loading: state.loading,
    hasError: state.hasError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPersons: () => dispatch(actionCreators.fetchPersons()),
    onContactSelection: (person) =>
      dispatch(actionCreators.selectPersonSuccess(person)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
