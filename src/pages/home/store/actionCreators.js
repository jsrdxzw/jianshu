import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (data) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList
})
const addHomeList = (data, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: data,
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data
            dispatch(addHomeList(result, page + 1))
        })
    }
}

export const toggleTopShow = (flag) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    flag
})