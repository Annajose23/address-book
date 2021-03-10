import * as types from "./actionTypes";
import * as actions from "./actions";

describe("actions", () => {
  it("should create an action to select a person", () => {
    const person = {
      name: {
        title: "Ms",
        first: "Anna",
        last: "Jose",
      },
      cell: "0123456",
    };
    const expectedAction = {
      type: types.SELECT_PERSON_SUCCESS,
      payload: person,
    };
    expect(actions.selectPersonSuccess(person)).toEqual(expectedAction);
  });

  it("should create an action to start fetch persons", () => {
    const expectedAction = {
      type: types.FETCH_PERSONS_START,
    };
    expect(actions.fetchPersonsStart()).toEqual(expectedAction);
  });

  it("should create an action fetch persons success", () => {
    const expectedAction = {
      type: types.FETCH_PERSONS_SUCCESS,
      payload: [
        {
          name: {
            title: "Ms",
            first: "Anna",
            last: "Jose",
          },
          cell: "0123456",
        },
      ],
    };
    expect(
      actions.fetchPersonsSuccess([
        {
          name: {
            title: "Ms",
            first: "Anna",
            last: "Jose",
          },
          cell: "0123456",
        },
      ])
    ).toEqual(expectedAction);
  });

  it("should create an action when fetch persons fail", () => {
    const expectedAction = {
      type: types.FETCH_PERSONS_FAILED,
    };
    expect(actions.fetchPersonsFailed()).toEqual(expectedAction);
  });

  it("should create an action to fetch persons", () => {
    const expectedAction = {
      type: types.FETCH_PERSONS,
    };
    expect(actions.fetchPersons()).toEqual(expectedAction);
  });
});
