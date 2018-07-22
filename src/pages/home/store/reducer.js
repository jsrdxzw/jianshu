import {fromJS} from 'immutable' //List用来转化普通的数组
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList:[],
    articlePage:1,
    showScroll:false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList)
            })
        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                articleList:state.get('articleList').concat(fromJS(action.list)),
                articlePage:action.nextPage
            })
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.flag)
        default:
            return state
    }
}