import { takeEvery } from "redux-saga/effects";
import * as types from '../actions/actionTypes';
import {fetchPersonsSaga} from './persons';

export function* watchPersons(){
    yield takeEvery(types.FETCH_PERSONS, fetchPersonsSaga);
}