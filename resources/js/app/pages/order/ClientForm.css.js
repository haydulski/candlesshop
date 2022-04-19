import styled from 'styled-components'

export const Form = styled.div`
width:100%;
padding:0rem;
textarea{
    width:98%;
    min-height:50px;
    padding:.5rem 1%;
}
`
export const Input = styled.input`
font-size:1rem;
padding: .5rem 1%;
width:98%;
margin:1rem auto;
&.half-width{
    width:46%;
    &.mr-1{
        margin-right:1%;
    }
}


`