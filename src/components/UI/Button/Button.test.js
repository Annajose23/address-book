import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button clicked={jest.fn()} />);
  });

  it("should render button component with props", () => {
    expect(wrapper).not.toBeNull();
  });

  it("should contain button tag", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should contain button tag with classname button", () => {
    expect(wrapper.find("button").hasClass("button")).toEqual(true);
  });

  it("render correctly button component", () => {
    const ButtonComponent = renderer
      .create(<Button clicked={jest.fn()} />)
      .toJSON();
    expect(ButtonComponent).toMatchSnapshot();
  });
});
