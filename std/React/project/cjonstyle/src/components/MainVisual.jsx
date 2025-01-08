import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

export default function MainVisual() {
  return (
    <Container>
        <Wrapper>
            <CustomSwiper 
                // modules={[Autoplay]}
                // autoplay={{
                //     delay:3000,
                //     disableOnInteraction:false,
                // }}
                // loop={true}
                // loopFillGroupWithBlank={true}
            >
                <SwiperSlide>
                    <img src="https://shorts.cjonstyle.net/public/confirm/contents/39c3a393-fab0-4113-817b-249368e3a3de/HLS1/FullImage_000000001.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://shorts.cjonstyle.net/public/confirm/contents/f106a517-078d-49bc-91f7-9a70dfea33a9/HLS1/FullImage_000000001.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://shorts.cjonstyle.net/public/confirm/contents/89b2d483-1b1c-42bb-9533-01b4302c9c67/HLS1/FullImage_000000001.jpg" alt="" />
                </SwiperSlide>
            </CustomSwiper>
        </Wrapper>
        <BtnWrap>
            <BtnLink>10% 적립혜택</BtnLink>
        </BtnWrap>
    </Container>
  )
}

const CustomSwiper = styled(Swiper)`
    .swiper-slide {
        position:relative;
        &:after {
            position:fixed;
            bottom:0;left:0;
            width:100%;
            height:14rem;
            background:linear-gradient(180deg,rgba(255,255,255,0) 0,rgba(255,255,255,.6) 43.41%,#FFF 96.91%);
            content:'';
        }
    }
`
const Container = styled.div`
    position:relative;
    width:100%;
    padding-bottom:5rem;
`
const Wrapper = styled.div`
    padding-bottom:8.8rem;
`
const BtnWrap = styled.div`
    position:absolute;
    bottom:7.2rem;left:50%;transform:translateX(-50%);
`
const BtnLink = styled.button`
    padding:0 3.6rem;
    background:#111;
    border-radius:7rem;
    font-size:1.6rem;
    font-weight:600;
    line-height:4rem;
    color:#fff;
`