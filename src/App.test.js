import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import React from 'react';
import AddressBook from './containers/AddressBook';
configure({ adapter: new Adapter() });

describe('App', ()=>{
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('Should contain a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('Should contain div with class name - app', () => {
        expect(wrapper.find('div').hasClass('app')).toEqual(true);
    });

    it("should render the Address Book Component", () => {
        expect(wrapper.containsMatchingElement(<AddressBook />)).toEqual(true)
      });
    
})
