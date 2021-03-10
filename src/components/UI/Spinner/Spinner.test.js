import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'; 

import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('Spinner', ()=>{
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Spinner/>);
    });

    it('Should contain a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('Should contain class name - loader', () => {
        expect(wrapper.find('div').hasClass('Loader')).toEqual(true);
    });

    it('render correctly - Spinner component', () => {  
        const SpinnerComponent = renderer.create(<Spinner/>).toJSON();
        expect(SpinnerComponent).toMatchSnapshot();
    });
})