import React from 'react'
import {TopicWrapper, TopicItem} from '../style'
import {connect} from 'react-redux'

class Topic extends React.PureComponent {

    render() {
        const {list} = this.props
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt="" className={'topic-pic'}/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps)(Topic)