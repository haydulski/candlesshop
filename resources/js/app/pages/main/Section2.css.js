import styled from "styled-components"
import bgImg from '../../imgs/section2-bg-img.jpg'
import bgImgBanner from '../../imgs/section2-banner.jpg'

export const Container = styled.section`
min-height:100vh;
background-image:url(${bgImg});
background-size:cover;
background-position:center;
display:flex;
align-items:center;
`
export const Row = styled.div`
padding:0 8%;
min-height:50vh;
background-image:url(${bgImgBanner});
background-size:cover;
background-position:center;
width:100%;
& h2{
    padding-top:5vh;
    margin-bottom:5%;
    font-size: 3rem;
    color:white;
}
`