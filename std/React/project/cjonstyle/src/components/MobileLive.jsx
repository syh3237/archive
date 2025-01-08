import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import TitleWrap from './TitleWrap'

export default function MobileLive() {
  return (
    <Container>
        <BrowserRouter>
            <MoblieTitleWrap title='모바일 라이브쇼'>
                <Link className='btn_schedule'>편성표</Link>
            </MoblieTitleWrap>
            <CustomSwiper slidesPerView='auto'>
                <SwiperSlide>
                    <Link>
                        <span className="img_wrap"><img src="https://thumb.cjonstyle.net/unsafe/368x552/mlc-image.cjonstyle.net/upload/image/etc/2025-01-02/fa12a6f2-431d-491d-ad09-9ce440dddb6f.png" alt="" /></span>
                        <span className="live_wrap">
                            <span className="tit_live">음식의 명가 부산 특집!</span>
                            <span className="sub_tit">겨울 식품 특집! 뜨끈한 어묵부터 추어탕까지~</span>
                            <span className="txt_live"><span className="txt">라이브 참여하기</span></span>
                        </span>
                    </Link>
                    <Link>
                        <span className="thumb_wrap"><img src="https://thumb.cjonstyle.net/unsafe/fit-in/160x160/image.cjonstyle.net/goods_images/20/737/2006385737L.jpg?timestamp=20241030160319" alt="" /></span>
                        <span className="info_wrap">
                            <span className="tit_prd">부산깡통시장 꼬치어묵 40개 10개입x4봉 + 소스4봉</span>
                            <span className="price"><strong>15,900</strong>원</span>
                        </span>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <span className="img_wrap"><img src="https://thumb.cjonstyle.net/unsafe/368x552/mlc-image.cjonstyle.net/upload/image/etc/2025-01-02/fa12a6f2-431d-491d-ad09-9ce440dddb6f.png" alt="" /></span>
                        <span className="live_wrap">
                            <span className="tit_live">음식의 명가 부산 특집!</span>
                            <span className="sub_tit">겨울 식품 특집! 뜨끈한 어묵부터 추어탕까지~</span>
                            <span className="txt_live"><span className="txt">라이브 참여하기</span></span>
                        </span>
                    </Link>
                    <Link>
                        <span className="thumb_wrap"><img src="https://thumb.cjonstyle.net/unsafe/fit-in/160x160/image.cjonstyle.net/goods_images/20/737/2006385737L.jpg?timestamp=20241030160319" alt="" /></span>
                        <span className="info_wrap">
                            <span className="tit_prd">부산깡통시장 꼬치어묵 40개 10개입x4봉 + 소스4봉</span>
                            <span className="price"><strong>15,900</strong>원</span>
                        </span>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <span className="img_wrap"><img src="https://thumb.cjonstyle.net/unsafe/368x552/mlc-image.cjonstyle.net/upload/image/etc/2025-01-02/fa12a6f2-431d-491d-ad09-9ce440dddb6f.png" alt="" /></span>
                        <span className="live_wrap">
                            <span className="tit_live">음식의 명가 부산 특집!</span>
                            <span className="sub_tit">겨울 식품 특집! 뜨끈한 어묵부터 추어탕까지~</span>
                            <span className="txt_live"><span className="txt">라이브 참여하기</span></span>
                        </span>
                    </Link>
                    <Link>
                        <span className="thumb_wrap"><img src="https://thumb.cjonstyle.net/unsafe/fit-in/160x160/image.cjonstyle.net/goods_images/20/737/2006385737L.jpg?timestamp=20241030160319" alt="" /></span>
                        <span className="info_wrap">
                            <span className="tit_prd">부산깡통시장 꼬치어묵 40개 10개입x4봉 + 소스4봉</span>
                            <span className="price"><strong>15,900</strong>원</span>
                        </span>
                    </Link>
                </SwiperSlide>
            </CustomSwiper>
        </BrowserRouter>
    </Container>
  )
}

const MoblieTitleWrap = styled(TitleWrap)`
    .btn_schedule {
        display:flex;
        align-items:center;
        height:2.8rem;
        padding:0 1.2rem;
        background-color:#fafafa;
        border-radius:1.4rem;
        box-sizing:border-box;
        font-size:1.2rem;
        line-height:2.4rem;
        color:#111;
    }
`
const CustomSwiper = styled(Swiper)`
    padding:0 2rem;
    box-sizing:border-box;
    .swiper-slide {
        width:21rem;
        margin-left:1.2rem;
        &:first-child {
            margin-left:0;
        }
    }
    a {
        display:block;
        position:relative;
        .img_wrap {
            display:block;
            position:relative;
            padding-bottom:150%;
            img {
                position:absolute;
                top:50%;left:50%;
                transform:translate(-50%,-50%);
            }
        }
        &:last-child {
            display:flex;
            align-items:center;
            margin-top:1.6rem;
        }
        .live_wrap {
            position:absolute;
            left:0;bottom:0;
            .tit_live {
                display:block;
                margin:0 1.2rem .4rem;
                font-size:1.2rem;
                font-weight:bold;
                color:#fff;
            }
            .sub_tit {
                display:block;
                margin:0 1.2rem;
                font-size:1.6rem;
                line-height:1.9rem;
                font-weight:bold;
                color:#fff;
            }
            .txt_live {
                display:flex;
                align-items:center;
                margin-top:2rem;
                padding:0 1.2rem;
                height:4rem;
                background:#640faf;
                .txt {
                    font-size:1.5rem;
                    line-height:1.8rem;
                    font-weight:bold;
                    color:#fff;
                }
            }
        }
        .thumb_wrap {
            flex-shrink:0;
            width:4.6rem;
            height:4.6rem;
        }
        .info_wrap {
            display:flex;
            flex-direction:column;
            margin-left:.8rem;
            overflow:hidden;
            font-size:1.2rem;
            color:#111;
            .tit_prd {
                text-overflow:ellipsis;
                overflow:hidden;
                white-space:nowrap;
            }
            .price {
                margin-top:.4rem;
                font-size:1rem;
                strong {
                    font-size:1.3rem;
                    font-weight:bold;
                }
            }
        }
    }
`
const Container = styled.div`
    padding-bottom:8rem;
`