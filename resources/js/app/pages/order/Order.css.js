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
margin-bottom:5%;
margin-top:14vh;
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
width:50%;
background-color: #fdfdfd;
table{
    width:100%;
    border-collapse: separate;
    display:table;
    
}
table.short-summary{
    font-size:1rem;
    td{
        border-bottom: 2px solid #d7d7d7;
        font-size:1rem;
        margin-bottom:.5rem;
        line-height:2rem;
    }
}
h3{
    margin:1rem 0;
}
input{
    font-size:1rem;
    margin:1rem 0;
}
label{
    margin-left:.5rem;
}
.btn{
    margin-top:10%;
}
.msg-info{
    text-align:center;
    color:${({ theme }) => theme.colors.lightGreen};
    & a{
        color:${({ theme }) => theme.colors.orange};
        &:hover{
            color:${({ theme }) => theme.colors.green}; 
        }
    }
}
`