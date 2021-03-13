import axios from 'axios';
import {put} from 'redux-saga/effects';
import * as actions from '../actions/actions';

export function* fetchPersonsSaga(action) {
    yield put(actions.fetchPersonsStart())
    try{
        const response = yield axios.get("https://randomuser.me/api/?results=50");
        yield put(actions.fetchPersonsSuccess(response.data.results));
    }catch(error){
        yield put(actions.fetchPersonsFailed());
    }
}