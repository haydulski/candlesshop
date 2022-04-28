import styled from 'styled-components'

export const Container = styled.section`
min-height:30vh;
min-width:100%;
display:flex;
justify-contant:center;
padding-top:10vh;

`
export const Column = styled.div`
width:50%;
margin:3rem;
background:lightgray;
border-radius:6px;
min-height:30%;
padding:2rem;
h3{
    font-size:2rem;
}
&.second{
    padding-top:4rem;
    ul{
        list-style:none;
        margin-top:3rem;
        li{
            line-height:2rem;
        }
    }
}
p {
    margin:1rem 0;
}
`