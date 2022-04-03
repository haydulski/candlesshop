import styled from 'styled-components'

export const NavContainer = styled.div`
position:absolute;
width:100vw;
max-width:100vw;
background:white;
top:0;
left:0;
padding:6px 0;
`
export const Nav = styled.nav`
display:flex;
padding:0 8%;
`
export const Column = styled.div`
width:33%;
align-items:center;
display:flex;
justify-content:${(props) => props.align};
& svg{
    margin-right:2rem;
    cursor:pointer;
    &:hover path{
        fill:${({ theme }) => theme.colors.green};
    }
}
& img{
    width:80px;
    height:auto;
}
`