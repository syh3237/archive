import React from 'react'
import styled from 'styled-components'

export default function TitleWrap({title, className, children}) {
  return (
    <Container className={className}>
        <h3 className="title">{title}</h3>
        {children}
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 2rem 1.7rem;
    .title {
        font-size:2.2rem;
        font-weight:bold;
        line-height:2.6rem;
        color:#111;
    }
    .btn_schedule {
        padding:0 1.2rem;
        border:1px solid #fff;
        border-radius:1.4rem;
        font-size:1.2rem;
        line-height:2.4rem;
        color:#fff;
    }
`
