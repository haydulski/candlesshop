import styled from "styled-components";
import bgImg from '../../imgs/main-page-header.jpg'

export const Container = styled.footer`
min-height:30vh;
max-height:60vh;
min-width:100vw;
background-color:${({ theme }) => theme.colors.lightGreen};

`
export const Row = styled.div`
padding:5% 8% 2%;
display:flex;
& div.logo{
    width:50%;
}
& div.links{
    width:16%;
    color:${({ theme }) => theme.colors.orange};
    font-size:1rem;
    line-height:2rem;
    & h5{
        font-weight:bold;
        color:${({ theme }) => theme.colors.main};
        font-size:1rem;
    }
}
`