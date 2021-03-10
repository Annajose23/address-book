import reducer from "./reducer";
import * as types from "../actions/actionTypes";

const initialState = {
  persons: [],
  loading: false,
  hasError: false,
  selectedContact: null,
};

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_PERSONS_START", () => {
    expect(reducer(initialState, { type: types.FETCH_PERSONS_START })).toEqual({
      persons: [],
      loading: true,
      hasError: false,
      selectedContact: null,
    });
  });

  it("should handle FETCH_PERSONS_SUCCESS", () => {
    expect(
      reducer(initialState, {
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
      })
    ).toEqual({
      persons: [
        {
          name: {
            title: "Ms",
            first: "Anna",
            last: "Jose",
          },
          cell: "0123456",
        },
      ],
      loading: false,
      hasError: false,
      selectedContact: null,
    });
  });
  
  it("should handle FETCH_PERSONS_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_PERSONS_FAILED,
      })
    ).toEqual({
      persons: [],
      loading: false,
      hasError: true,
      selectedContact: null,
    });
  });

  it("should handle SELECT_PERSON_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.SELECT_PERSON_SUCCESS,
        payload: {
          name: {
            title: "Ms",
            first: "Anna",
            last: "Jose",
          },
          cell: "0123456",
        },
      })
    ).toEqual({
      persons: [],
      loading: false,
      hasError: false,
      selectedContact: {
        name: {
          title: "Ms",
          first: "Anna",
          last: "Jose",
        },
        cell: "0123456",
      },
    });
  });
});
