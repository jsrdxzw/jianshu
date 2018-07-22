import React from 'react'
import {DetailWrapper,Header,Content} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'

class Detail extends React.PureComponent {


    componentDidMount() {
        const {id} = this.props.match.params
        console.log(id)
        this.props.getDetail(id)
    }


    render() {
        const {title,url,content} = this.props
        return (
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content>
                    {url? <img src={url} alt=""/>:null}
                    <p>{content}</p>
                </Content>
            </DetailWrapper>
        )
    }
}

const mapState = (state)=>({
    title:state.getIn(['detail','title']),
    url:state.getIn(['detail','url']),
    content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState,mapDispatch)(withRouter(Detail))