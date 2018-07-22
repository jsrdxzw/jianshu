import React from 'react'
import {RecommendWrapper,RecommendItem} from '../style'
import banner1 from '../../../imgs/banner1.png'
import banner2 from '../../../imgs/banner2.png'
import banner3 from '../../../imgs/banner3.png'
import banner4 from '../../../imgs/banner4.png'
import banner5 from '../../../imgs/banner5.png'

class Recommend extends React.PureComponent {

    render() {
        return (
            <RecommendWrapper>
                <RecommendItem url={banner1}/>
                <RecommendItem url={banner2}/>
                <RecommendItem url={banner3}/>
                <RecommendItem url={banner4}/>
                <RecommendItem url={banner5}/>
            </RecommendWrapper>
        )
    }
}

export default Recommend