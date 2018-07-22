import React from 'react'
import {HomeWrapper, HomeLeft, HomeRight,BackTop} from './style'
import Topic from "./components/Topic"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Writer from "./components/Writer"
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends React.PureComponent {


    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvent()
    }

    handleScrollTop = ()=>{
        window.scrollTo(0,0)
    }

    render() {
        const {showScroll} = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className={'banner-img'}
                         src="//upload.jianshu.io/admin_banners/web_images/4353/ee6b0e57da4752ae7760f72e496cbc2afe8c40d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    showScroll?     <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
                }
            </HomeWrapper>
        )
    }

    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

    //一定要注意解绑事件
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

}

const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
         dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(e){ //优化，做个节流
        let timer = null
        timer = setTimeout(()=>{
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            const top = document.documentElement.scrollTop
            if(top>400){
                dispatch(actionCreators.toggleTopShow(true))
            } else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        },200)
    }
})

export default connect(mapState, mapDispatch)(Home)