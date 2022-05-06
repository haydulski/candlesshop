import styled from "styled-components";
import bgImg from '../../imgs/main-page-header.jpg'

export const Container = styled.section`
min-height:100vh;
min-width:100vw;
background-image:url(${bgImg});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
position:realtive;

`
export const Heading = styled.h1`
font-size:10rem;
color:${({ theme }) => theme.colors.main};
text-transform:uppercase;
font-weight:500;
position:absolute;
top:40%;
left:8%;
transform:translateY(-50%);
@media(max-width:${({ theme }) => theme.rwd.xl}){
    font-size:5rem;
}
@media(max-width:${({ theme }) => theme.rwd.md}){
    font-size:3rem;
}
`
export const Slider = styled.div`
position:relative;
min-height:100vh;
@media(max-width:${({ theme }) => theme.rwd.xl}){
    position:initial;
}
& section.slide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    @media(max-width:${({ theme }) => theme.rwd.xl}){
        position:initial;
        padding:5rem 0;
    }
}
`