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
}

`