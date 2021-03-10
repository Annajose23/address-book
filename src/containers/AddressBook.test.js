import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddressBook from './AddressBook';

configure({ adapter: new Adapter() });

describe('AddressBook', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddressBook/>);
    });

    it('Should contain two Route', () => {
        expect(wrapper.find('Route').length).toEqual(2);
    });

    it('Should contain one Redirect', () => {
        expect(wrapper.find('Redirect').length).toEqual(1);
    });

    it('Should contain a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

});