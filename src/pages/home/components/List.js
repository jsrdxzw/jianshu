import React from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends React.PureComponent {

    render() {
        const {list, getMoreList, page} = this.props
        return (
            <div>
                {list.map((item, index) => (
                    <Link  key={index} to={'/detail/'+item.get('id')}>
                        <ListItem>
                            <img
                                src={item.get('imgUrl')}
                                alt="" className={'pic'}/>
                            <ListInfo>
                                <h3>{item.get('title')}</h3>
                                <p>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))}
                <LoadMore onClick={() => getMoreList(page)}>
                    更多内容
                </LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List)