import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    title:'',
    url:'',
    content:''
})


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                url:action.url,
                content:action.content
            })
        default:
            return state
    }
}