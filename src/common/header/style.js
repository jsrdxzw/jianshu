import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

const HEAD_HEIGHT = 56

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: ${HEAD_HEIGHT}px;
  display: inline-block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
`

export const NavItem = styled.div`
  line-height: ${HEAD_HEIGHT}px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  width: 160px;
  height:38px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border-radius: 19px;
  font-size: 14px;
  background: #eee;
  margin-left: 20px;
  color: #777;
  &.slide-enter{
    width: 160px;
    transition: all .3s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .3s ease-out;
  }
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 240px;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top:0;
  height: ${HEAD_HEIGHT}px;
`

export const Button = styled.div`
  float: right;
  height:38px;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg{
    color: #ec6149;
  }
  &.writing{
    color: #fff;
    background: #ec6149;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .fade-enter{
    transition: all .3s ease;
  }
  .fade-enter-active{
    background: #777;
    color: white;
  }
  .fade-exit{
    transition: all .3s ease;
  }
  .zoom{
    position: absolute;
    right:5px;
    bottom:4px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    font-size: 22px;
    text-align: center;
    &.focused{
      background: #777;
      color: white;
    }
  }
`


export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top:56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: white;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px ;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  cursor: pointer;
  float: right;
  font-size: 13px;
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 2px;
  padding: 0 5px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 15px;
`
