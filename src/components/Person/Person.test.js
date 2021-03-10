import React from 'react';
import renderer from 'react-test-renderer'; 
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Person from './Person';

configure({ adapter: new Adapter() });

describe('person', () => {
    let wrapper;
    const props = {
        name:{
            title:'Ms',
            first:'anna',
            last:'jose'
        },
        cell:'909876543'
    }
    beforeEach(() => {
        wrapper = shallow(<Person name={props.name} clicked={()=>{}}/>);
    });

    it('should render person component with props', ()=>{
        expect(wrapper).not.toBeNull();
    });

    it('should contain article tag', ()=>{
        expect(wrapper.find('article')).toHaveLength(1);
    });

    it('render correctly Person component', () => {  
        const PersonComponent = renderer.create(<Person name={props.name} clicked={()=>{}}/>).toJSON();
        expect(PersonComponent).toMatchSnapshot();
    });

    it("should contain article tag with classname person", () => {
        expect(wrapper.find("article").hasClass("person")).toEqual(true);
      });
})