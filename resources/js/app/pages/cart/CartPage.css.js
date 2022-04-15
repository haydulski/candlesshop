import styled from 'styled-components'

export const Container = styled.section`
min-height:100vh;
min-width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1{
    color:${({ theme }) => theme.colors.orange};
    font-size:6rem;
}
`
export const Row = styled.div`
background:#1DF2BA;
padding:2rem;
width:70%;
display:flex;
justify-content:space-around;

`
export const Col = styled.div`
padding:1rem;
width:100%;
background-color: #fdfdfd;
table{
    width:100%;
    border-collapse: separate;
    border-radius: 5px;
    display:table;
    thead{
        padding:1rem;
        margin-bottom:1rem;
    }
    th{
        text-align:left;
        line-height:4rem;
        box-shadow:0px 4px 3px -2px rgba(0,0,0,.04);
        font-size:1.2rem;
        color:gray;
    }
    td{
        border-bottom: 1px solid #fdfdfd;
        line-height:2rem;
        font-size:1.2rem;
        img{
            width:100px;
            height:100px;
            object-fit:cover;
        }
    }
    button{
        background:red;
        padding:.5rem 1rem;
        color:white;
        font-weight:700;
        font-size:1.2rem;
        cursor:pointer;
        border:none;
        &:hover{
            background:${({ theme }) => theme.colors.orange};
        }
    }
}
`