import React, { Component } from "react";
import Person from "../../components/Person/Person";
import { connect } from "react-redux";
import axios from 'axios';

import * as actionCreators from "../../store/actions/actions";
import Aux from "./../../hoc/Auxilary/Auxilary";
import Spinner from "../../components/UI/Spinner/Spinner";
import Search from "../../components/UI/Search/Search";
import Pagination from "./../Pagination/Pagination";
import "./Persons.css";
import withErrorHandler from './../../hoc/withErrorhandler/withErrorhandler';

export class Persons extends Component {
  state = {
    currentPage: 1,
    contactsPerPage: 10,
    keyword: ""
  };

  componentDidMount() {
    this.props.onFetchPersons();
  }

  contactSelectHandler = (person) => {
    this.props.onContactSelection(person);
    this.props.history.replace("/contact-details");
  };

  searchKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };

  prevPageClickHandler = () => this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
  nextPageClickHandler = () => this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  paginateHandler = (pageNum) => { this.setState({ currentPage: pageNum })};

  render() {
    let indexOfLastContact = this.state.currentPage * this.state.contactsPerPage;
    let indexOfFirstContact = indexOfLastContact - this.state.contactsPerPage;

    let persons = this.props.personsList
      .filter((person) => {
        return (
          person.name.first.toLowerCase().indexOf(this.state.keyword) !== -1
        );
      })
      .slice(indexOfFirstContact, indexOfLastContact)
      .map((person, index) => (
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
        <Search
          keyword={this.state.keyword}
          handleSearchKeyword={(event) => this.searchKeywordHandler(event)}
        />
        <div className="address_book">{persons}</div>
        <Pagination
          contactsPerPage={this.state.contactsPerPage}
          currentPage = {this.state.currentPage}
          totalContacts={this.props.personsList.length}
          previousPage={this.prevPageClickHandler}
          nextPage={this.nextPageClickHandler}
          paginate={this.paginateHandler}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Persons,axios));
