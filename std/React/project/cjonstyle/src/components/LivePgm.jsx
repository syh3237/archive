import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import TitleWrap from './TitleWrap'

export default function LivePgm() {
  return (
    <Container>
        <BrowserRouter>
            <LiveTitleWrap title='지금 방송중'>
                <Link className='btn_schedule'>편성표</Link>
            </LiveTitleWrap>
            <PgmWrap>
                <Link>
                    <span className="thumb_area">
                        <span className="pgm_info"><span><img src="https://image.cjonstyle.net/public/confirm/static/deploy/webjars/ec-markup-common/dist/common-cjmall-mobile/others/17caba719f2a72a1f84f3c12fe52aa78/img/common/cjmall/m/flag_tvlive.gif" alt="" /></span>00:00</span>
                        <span className="thumb"><img src="https://thumb.cjonstyle.net/unsafe/640x360/cloud-image.cjonstyle.net/public/confirm/contents/design/live_bnr/202501/06/562491/2036891830/49b_94d885640270d058e5880be35ae0913da8e8f732.jpg" alt="" /></span>
                        <span className="live_info">
                            <span className="txt">50명이 찜한 상품이에요</span>
                        </span>
                    </span>
                    <span className="info_area">
                        <h4 className="tit_info">[LIVE]신한라이프 케어받는 암보험3</h4>
                        <span className="txt_info">상담신청</span>
                        <span className="tag_info">
                            <span className="tag">방송상품</span>
                            <span className="tag">무료배송</span>
                            <span className="tag">무료반품</span>
                        </span>
                    </span>
                </Link>
            </PgmWrap>
            <PgmWrap>
                <Link>
                    <span className="thumb_area">
                        <span className="pgm_info"><span><img src="https://image.cjonstyle.net/public/confirm/static/deploy/webjars/ec-markup-common/dist/common-cjmall-mobile/others/17caba719f2a72a1f84f3c12fe52aa78/img/common/cjmall/m/flag_tvlive.gif" alt="" /></span>00:00</span>
                        <span className="thumb"><img src="https://thumb.cjonstyle.net/unsafe/640x360/cloud-image.cjonstyle.net/public/confirm/contents/design/live_bnr/202501/06/562491/2036891830/49b_94d885640270d058e5880be35ae0913da8e8f732.jpg" alt="" /></span>
                        <span className="live_info">
                            <span className="txt">50명이 찜한 상품이에요</span>
                        </span>
                    </span>
                    <span className="info_area">
                        <h4 className="tit_info">[LIVE]신한라이프 케어받는 암보험3</h4>
                        <span className="txt_info">상담신청</span>
                        <span className="tag_info">
                            <span className="tag">방송상품</span>
                            <span className="tag">무료배송</span>
                            <span className="tag">무료반품</span>
                        </span>
                    </span>
                </Link>
            </PgmWrap>
            <ProductWrap>
                <h4 className="tit_wrap">함께 방송중인 상품</h4>
                <CustomSwiper slidesPerView='auto'>
                    <SwiperSlide>
                        <Link>
                            <span className="img_wrap"><img src="https://thumb.cjonstyle.net/unsafe/fit-in/160x160/image.cjonstyle.net/goods_images/20/544/2046765544L.jpg?timestamp=20241230093445" alt="" /></span>
                            <span className="info_wrap">
                                <span className="tit_prd">24K 브릴리오 목걸이 26.25g</span>
                                <span className="price"><strong>5,150,000</strong>원</span>
                            </span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <span className="img_wrap"><img src="https://thumb.cjonstyle.net/unsafe/fit-in/160x160/image.cjonstyle.net/goods_images/20/544/2046765544L.jpg?timestamp=20241230093445" alt="" /></span>
                            <span className="info_wrap">
                                <span className="tit_prd">24K 브릴리오 목걸이 26.25g</span>
                                <span className="price"><strong>5,150,000</strong>원</span>
                            </span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <span className="img_wrap"><img src="https://thumb.cjonstyle.net/unsafe/fit-in/160x160/image.cjonstyle.net/goods_images/20/544/2046765544L.jpg?timestamp=20241230093445" alt="" /></span>
                            <span className="info_wrap">
                                <span className="tit_prd">24K 브릴리오 목걸이 26.25g</span>
                                <span className="price"><strong>5,150,000</strong>원</span>
                            </span>
                        </Link>
                    </SwiperSlide>
                </CustomSwiper>
            </ProductWrap>
        </BrowserRouter>
    </Container>
  )
}

const CustomSwiper = styled(Swiper)`
    .swiper-slide {
        width:21.2rem;
        margin-left:1.2rem;
        &:first-child {
            margin-left:0;
        }
    }
`
const ProductWrap = styled.div`
    padding:2.4rem 2rem 0;
    .tit_wrap {
        margin-bottom:.6rem;
        font-size: 1.2rem;
        font-weight:bold;
        color:#111;
    }
    a {
        display:flex;
        align-items:center;
        .img_wrap {
            width:4.6rem;
            height:4.6rem;
            flex-shrink:0;
        }
        .info_wrap {
            display:flex;
            flex-direction:column;
            margin:0 1.2rem;
            overflow:hidden;
            .tit_prd {
                text-overflow:ellipsis;
                white-space:nowrap;
                overflow:hidden;
                font-size:1.2rem;
                line-height:1.7rem;
            }
            .price {
                font-size:1rem;
                strong {
                    font-size:1.3rem;
                    line-height:1.6rem;
                    font-weight:bold;
                }
            }
        }
    }
`
const PgmWrap = styled.div`
    margin-top:4rem;
    &:nth-of-type(2) {
        margin-top:0;
    }
    a {
        display: block;
        margin:0 2rem;
        .thumb_area {
            position:relative;
            .pgm_info {
                display:flex;
                align-items:center;
                gap:.6rem;
                position:absolute;
                top:1rem;left:1rem;
                z-index:10;
                padding-right:1rem;
                background-color:rgba(0,0,0,.35);
                border-radius:1.3rem;
                font-size:1.3rem;
                line-height:1.5rem;
                color:#fff;
                span {
                    display:flex;
                    justify-content:center;
                    width:7.2rem;
                    height:2.2rem;
                    background:#ec0040;
                    border-radius:1.3rem;
                    img {
                        height:2.2rem;
                    }
                }
            }
            .thumb {
                display:block;
                padding-bottom:56.25%;
                img {
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                }
            }
            .live_info {
                position:absolute;
                bottom:0;left:0;
                right:0;
                height:2.8rem;
                padding-left:1.6rem;
                background-color:rgba(0,0,0,.5);
                span {
                    display:flex;
                    align-items:center;
                    height:100%;
                    font-size:1.3rem;
                    font-weight:600;
                    line-height:1.6rem;
                    color:#fff;
                }
            }
        }
        .info_area {
            display:block;
            margin-top:.8rem;
            font-size:1.5rem;
            line-height:1.8rem;
            color:#111;
            .txt_info {
                font-size: 1.3rem;
            }
            .tag_info {
                display:block;
                margin-top:.8rem;
                .tag {
                    padding-left:.8rem;
                    font-size:1.1rem;
                    color:#666;
                    &:first-child {
                        padding:0;
                        font-weight:bold;
                        color:#111;
                    }
                }
            }
        }
    }
`
const LiveTitleWrap = styled(TitleWrap)`
    position:relative;
    padding:2.2rem 2rem 7.7rem;
    margin-bottom:-6rem;
    background:linear-gradient(90deg,#FF6100 -18.33%,#EC0040 25.22%,#640FAF 90.56%);
    .title {
        padding:0;
        color:#fff;
    }
    &:after {
        display:block;
        position:absolute;
        left:0;bottom:0;
        width:100%;height:6rem;
        background:linear-gradient(180deg, rgba(255,255,255,0) 0, #fff 100%);
        content:'';
    }
`
const Container = styled.div`
    padding-bottom:8rem;
`