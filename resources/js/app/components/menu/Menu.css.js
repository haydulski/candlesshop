import styled from 'styled-components'
import menuBgImg from '../../imgs/menu-bg.jpg'

export const MenuContainer = styled.div`
position:fixed;
top:-101vh;
left:0;
width:100vw;
height:100vh;
background-image:url(${menuBgImg});
background-position:center;
background-size:cover;
background-repeat:no-repeat;
z-index:100;
padding-bottom: 1vh;
@media(max-width:${({ theme }) => theme.rwd.md}){
    overflow-y:scroll;
}
`

export const Row = styled.div`
padding:0 8%;
display:flex;
& .column{
    padding-top:5%;
    width:50%;
    position:relative;
}
.column:nth-child(1){
    z-index:3;
}
& ul.main-menu{
    margin-top:3%;
    font-size: 10rem;
    font-weight:400;
    color:white;
    list-style:none;
    @media(max-width:${({ theme }) => theme.rwd.xl}){
        font-size: 5rem;
    }
    &> li{
        cursor:pointer;
        width:70%;
    }
    &> li.first-level:hover{
        color:${({ theme }) => theme.colors.lightGreen};
        & > ul.submenu{
            max-height:100vh;
            transition: max-height .4s;
            width:100vw;
            z-index:300;
            & > li{
                color:white;
                transition: color .4s .4s;
                &:hover{
                    color:${({ theme }) => theme.colors.lightGreen}; 
                }
            }
        }
    }
}
& svg{
    cursor:pointer;
    &:hover path{
        fill:${({ theme }) => theme.colors.lightGreen};

    }
}
& ul.submenu{
    border-left:2px solid white;
    position:absolute;
    left:33vw;
    bottom:0;
    list-style:none;
    padding-left:1rem;
    max-height:0;
    overflow:hidden;
    width:100%;
    z-index:200;
    transition: max-height .4s;
    & li{
        font-size:4rem;
        color:transparent;
        transition: color .2s;
        &:hover{
            font-weight:bold;
        }
        @media(max-width:${({ theme }) => theme.rwd.xl}){
            font-size:2rem;   
        }
        @media(max-width:${({ theme }) => theme.rwd.md}){
            color:white;
        }
    }
    @media(max-width:${({ theme }) => theme.rwd.xl}){
        left:40vw;
    }
    @media(max-width:${({ theme }) => theme.rwd.md}){
        border-left:none;
        position:initial;
        list-style:none;
        padding-left:.1rem;
        max-height:200vh;
        width:200%;
        z-index:200;
    }
}
`