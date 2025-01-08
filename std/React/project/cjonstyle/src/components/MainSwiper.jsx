import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BrowserRouter, Link } from 'react-router-dom'
import { Controller } from 'swiper/modules'

export default function MainSwiper() {
    let [exhibition] = useState(['패션/명품','뷰티','유아동','리빙','숏츠','인기방송','아울렛']);
    const topSwiperRef = useRef(null);
    const bottomSwiperRef = useRef(null);
    useEffect(() => {
        if (topSwiperRef.current && bottomSwiperRef.current) {
        topSwiperRef.current.controller.control = bottomSwiperRef.current;
        bottomSwiperRef.current.controller.control = topSwiperRef.current;
        }
    }, []);

  return (
    <BrowserRouter>
        <Container>
            <CustomSwiper 
                modules={[Controller]}
                onSwiper={(swiper) => (topSwiperRef.current = swiper)} 
                controller={{control: bottomSwiperRef.current}}
                slidesPerView='auto'
            >
                {exhibition.map((el, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Link>
                                <span className="img_wrap">
                                    <img src="https://shorts.cjonstyle.net/public/confirm/contents/106d3127-16eb-45ac-863b-e0b893db92e3/HLS1/FullImage_000000001.jpg" alt="" />
                                </span>
                                <span className="title">{el}</span>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </CustomSwiper>
            <CustomSwiper
                modules={[Controller]}
                onSwiper={(swiper) => (bottomSwiperRef.current = swiper)}
                controller={{control: topSwiperRef.current}}
                slidesPerView='auto'
            >
                {exhibition.map((el, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Link>
                                <span className="img_wrap">
                                    <img src="https://shorts.cjonstyle.net/public/confirm/contents/106d3127-16eb-45ac-863b-e0b893db92e3/HLS1/FullImage_000000001.jpg" alt="" />
                                </span>
                                <span className="title">{el}</span>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </CustomSwiper>
        </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
    padding-bottom:8rem;
`
const CustomSwiper = styled(Swiper)`
    padding:0 1.4rem;
    margin-top:1.2rem;
    box-sizing:border-box;
    &:first-child {
        margin-top:0;
    }
    .swiper-slide {
        width:6.4rem;
        margin:0 .6rem;
        a {
            display:flex;
            flex-direction:column;
            gap:.9rem;
            text-align:center;
            .title {
                font-size:1.3rem;
                font-weight:400;
                color:#111;
            }
        }
    }
`