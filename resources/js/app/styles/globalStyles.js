import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
${normalize}
*{
    margin:0;
    padding:0;
}
body{
    background:white;
    font-size:16px;
    overflow-x:hidden;
    box-sizing:border-box;
}
a{
    text-decoration:none;
    color:inherit;
}
h1,h2{
    font-family:'Josefin Sans', sans-serif;
}
h4,h5,h6,p,span,div{
    font-family: 'Jost', sans-serif;
}
h1{
    font-size:4rem;
    @media(max-width:${({ theme }) => theme.rwd.md}){
        font-size:2rem;
        padding-top:3rem;
    }
}
.btn{
    padding:.5rem 1rem;
    color:white;
    background-color:#F0303D;
    font-weight:bold;
    border:none;
    cursor:pointer;
&:hover{
    background-color:#F24E1E;
}
}

`