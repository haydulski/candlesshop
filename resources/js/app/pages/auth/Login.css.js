import styled from 'styled-components'

export const FormSection = styled.section`
min-height:100vh;
min-width:100vw;
display:flex;
align-items:center;
justify-content:center;
`
export const Form = styled.div`
width:auto;
min-height:20%;
background-color:${({ theme }) => theme.colors.lightGreen};
padding:1rem;
font-size:1rem;
border-radius:6px;
& input[type=submit]{
    cursor:pointer;
    background-color:${({ theme }) => theme.colors.orange};
    color:white;
    &:hover{
        background-color:white;
        color:gray;
    }
}
`
export const Input = styled.input`
border-radius:6px;
min-height:2rem;
font-size:1rem;
display:block;
padding:.5rem 1rem;
border:1px solid lightgray;
margin: 1rem 0;
`