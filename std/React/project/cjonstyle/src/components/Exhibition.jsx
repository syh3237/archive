import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import TitleWrap from './TitleWrap'

export default function Exhibition() {
  return (
    <Container>
        <TitleWrap title='지금 주목해야할 혜택'></TitleWrap>
        <CustomSwiper 
            slidesPerView='auto' 
            loop={true}
            pagination={{
                el: '.swiper-pagination',
                type: 'progressbar', // Progress Bar 설정
            }}
        >
            <SwiperSlide>
                <span className="img_wrap">
                    <img src="https://thumb.cjonstyle.net/unsafe/560x700/image.cjonstyle.net/public/confirm/assets/module/MBNR05C/2025/1/3/c4cdbf10426bcd0969df0db4850369c424c2b46e.jpg" alt="" />
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="img_wrap">
                    <img src="https://thumb.cjonstyle.net/unsafe/560x700/image.cjonstyle.net/public/confirm/assets/module/MBNR05C/2025/1/3/13b304c66e8e8ca10d164a02c61dd9bce59cd5ad.jpg" alt="" />
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="img_wrap">
                    <img src="https://thumb.cjonstyle.net/unsafe/560x700/image.cjonstyle.net/public/confirm/assets/module/MBNR05C/2025/1/3/d654805a8ef8d287194075e5dcab800024d70590.jpg" alt="" />
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <span className="img_wrap">
                    <img src="https://thumb.cjonstyle.net/unsafe/560x700/image.cjonstyle.net/public/confirm/assets/module/MBNR05C/2025/1/3/c4cdbf10426bcd0969df0db4850369c424c2b46e.jpg" alt="" />
                </span>
            </SwiperSlide>
        </CustomSwiper>
        <div className="swiper-pagination-progressbar">
            <span className="swiper-pagination-progressbar-fill"></span>
        </div>
        <div className="swiper-pagination-dots"></div>
    </Container>
  )
}

const CustomSwiper = styled(Swiper)`
    padding-left:.8rem;
    .swiper-slide {
        width:28rem;
        margin-left:1.2rem;
    }
    .swiper-slide-prev {
        opacity:0;
        transition:1s;
    }
`
const Container = styled.div`
    padding-bottom:8rem;
`
