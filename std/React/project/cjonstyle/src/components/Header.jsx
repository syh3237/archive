import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import HomeTab from './HomeTab';

export default function Header() {
  return (
    <BrowserRouter>
        <HeaderWrap>
            <Inner>
                <Logo>
                    <Link to='/'><img src="https://image.cjonstyle.net/public/confirm/static/deploy/webjars/ec-markup-common/dist/common-cjmall-mobile/others/17caba719f2a72a1f84f3c12fe52aa78/img/common/cjmall/m/hometab/ic_bi_w.svg" alt="로고" /></Link>
                </Logo>
                <SearchWrap>
                    <Link><span className="blind">검색 페이지</span></Link>
                </SearchWrap>
                <CartWrap>
                    <Link><span className="blind">장바구니</span></Link>
                </CartWrap>
            </Inner>
            <HomeTab />
        </HeaderWrap>
    </BrowserRouter>
  )
}

const HeaderWrap = styled.header`
    position: fixed;
    top:0;left:0;
    width:100%;
    z-index:10;
`
const Inner = styled.header`
    display:flex;
    height:4.3rem;
`
const Logo = styled.h1`
    height:5rem;
    margin-left:1.8rem;
`
const SearchWrap = styled.div`
    width:33.333%;
    height:3.2rem;
    margin-left:auto;
    margin-top:1rem;
    border-radius:4rem;
    background:rgba(102,102,102,.4) url(https://image.cjonstyle.net/public/confirm/static/deploy/webjars/ec-markup-common/dist/common-cjmall-mobile/others/17caba719f2a72a1f84f3c12fe52aa78/img/common/cjmall/m/hometab/ic_new_search_w.svg) right 7px center no-repeat;
    a {
        display:block;
        width:100%;
        height:100%;
    }
`
const CartWrap = styled.div`
    width: 3.2rem;
    height:3.2rem;
    margin-top:1rem;
    a {
        display: block;
        width:100%;
        height:100%;
        &:before {
            display: block;
            width:100%;
            height:100%;
            background:url(https://image.cjonstyle.net/public/confirm/static/deploy/webjars/ec-markup-common/dist/common-cjmall-mobile/others/17caba719f2a72a1f84f3c12fe52aa78/img/common/cjmall/m/hometab/ic_new_cart_w@3x.png);
            background-size:100%;
            content:'';
        }
    }
`