import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    render() { 
        const {contactsPerPage, totalContacts} = this.props;
        const pageNumbers = [];

        for(let i=1; i<= Math.ceil(totalContacts/contactsPerPage); i++){
            pageNumbers.push(i);
        }

        return ( 
            <nav>
                <ul>
                   {this.props.currentPage > 1 && <li onClick={this.props.previousPage}>Previous</li>}
                    {pageNumbers.map((num,index) => (
                        <li onClick={() => this.props.paginate(num)} key={index}>{num}</li>
                    ))}
                    {this.props.currentPage < pageNumbers.length &&<li onClick={this.props.nextPage}>Next</li>}
                </ul>
            </nav>
         );
    }
}
 
export default Pagination;