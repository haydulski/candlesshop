import styled from "styled-components";

export const Container = styled.section`
width:100%;
display:flex;
padding:10% 8% 5%;
.product-details{
    width:50%;
    padding:0 5%;
    h1 {
        margin:0;
        color: ${({ theme }) => theme.colors.orange}
    }
    h2{
        font-size: 3rem;
        margin-bottom:2rem;
    }
    p{
        font-size:2rem;
        margin:2rem 0;
        color: ${({ theme }) => theme.colors.green}
    }
    .btn{
        padding:.5rem 1rem;
        font-size:1.5rem;
        font-weight:700;
        background-color: ${({ theme }) => theme.colors.orange};
        color:white;
        border:none;
        &:hover{
            background-color: ${({ theme }) => theme.colors.lightGreen};
        }
    }
}
.main-img{
    width:50%;
    img {
        width:80%;
        height:auto;
        object-fit:cover;
    }
}
`
export const Description = styled.p`
font-size:1.2rem !important;
width:80%;
`