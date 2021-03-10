import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer'; 

import Aux from "../../hoc/Auxilary/Auxilary";
import {Persons} from './Persons';
import Person from '../../components/person/person';
import Spinner from '../../components/UI/Spinner/Spinner';

configure({ adapter: new Adapter() });

describe("<Persons />", () => {
    let wrapper;

    let props = {
        personsList: [{
            name: {
              title: "Ms",
              first: "Anna",
              last: "Jose",
            },
            cell: "0123456"}],
        loading: false,
        hasError: false,
      };
    
    beforeEach(() => {
      wrapper = shallow(<Persons {...props} onFetchPersons={()=>{}} onContactSelection={()=>{}}/>);
    });
  
    it("should render <Person />", () => {
      expect(wrapper.find(Person)).toHaveLength(1);
    });

    it("should contain <Aux />", () => {
      expect(wrapper.find(Aux)).toHaveLength(1);
    });

    it("should contain <Spinner />", () => {
      wrapper.setProps({loading:true});
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it("should throw error if fetch persons failed", () => {
      wrapper.setProps({hasError:true});
      expect(wrapper.contains(<p>Something went wrong!!</p>)).toEqual(true);
    });

    it('Should contain two div', () => {
      expect(wrapper.find('div').length).toEqual(2);
  });
  
    it("render correctly Persons component", () => {
      const PersonsComponent = renderer
        .create(<Persons {...props} onFetchPersons={()=>{}} onContactSelection={()=>{}}/>)
        .toJSON();
      expect(PersonsComponent).toMatchSnapshot();
    });
  });
  