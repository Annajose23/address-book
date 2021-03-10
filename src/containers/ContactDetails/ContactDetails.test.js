import React from "react";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ContactDetails } from "./ContactDetails";
import Button from "../../components/UI/Button/Button";
import Aux from "../../hoc/Auxilary/Auxilary";

configure({ adapter: new Adapter() });

describe("<ContactDetails />", () => {
  let wrapper;

  let props = {
    selectedContact: {
      name: {
        title: "Ms",
        first: "Anna",
        last: "Jose",
      },
      cell: "0123456",
    },
  };
  
  beforeEach(() => {
    wrapper = shallow(<ContactDetails {...props} />);
  });

  it("should render <Button /> when receiving selectedContact", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should contain div tag", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });

  it("should contain h3 and h2 tag", () => {
    expect(wrapper.find("h3")).toHaveLength(1);
    expect(wrapper.find("h2")).toHaveLength(1);
  });

  it("should contain Aux", () => {
    expect(wrapper.find(Aux)).toHaveLength(1);
  });

  it("render correctly Contact Details component", () => {
    const ContactDetailsComponent = renderer
      .create(<ContactDetails {...props}/>)
      .toJSON();
    expect(ContactDetailsComponent).toMatchSnapshot();
  });
});
