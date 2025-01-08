import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function HomeTab() {
  return (
    <Swiper slidesPerView='auto'>
        <StyledSlide><Link><span>편성표</span></Link></StyledSlide>
        <StyledSlide><Link><span>TV</span></Link></StyledSlide>
        <StyledSlide><Link><span>라이브쇼</span></Link></StyledSlide>
        <StyledSlide><Link><span>홈</span></Link></StyledSlide>
        <StyledSlide><Link><span>특가</span></Link></StyledSlide>
        <StyledSlide><Link><span>멤버스데이</span></Link></StyledSlide>
        <StyledSlide><Link><span>설레는 설</span></Link></StyledSlide>
        <StyledSlide><Link><span>선물하기</span></Link></StyledSlide>
        <StyledSlide><Link><span>숏츠</span></Link></StyledSlide>
        <StyledSlide><Link><span>신상</span></Link></StyledSlide>
    </Swiper>
  )
}

const StyledSlide = styled(SwiperSlide)`
    width:auto;
    &:first-child {
        padding-left:.9rem;
    }
    &:last-child {
        padding-right:.9rem;
    }
    a {
        display:block;
        padding:2.2rem .5rem 0;
        font-size:600;
        span {
            padding:.1rem .5rem 0;
            font-weight:600;
            color:#fff;
        }
    }
`