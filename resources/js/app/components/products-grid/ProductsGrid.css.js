import styled from 'styled-components'

export const Container = styled.div`
display:flex;
justify-content:space-between;
width:100%;
flex-wrap:wrap;
`
export const Product = styled.div`
width:${({ width }) => width};
text-align:left;
margin-top:2rem;
& img{
    width: 90%;
height: 400px;
object-fit: cover;
}
& p.title{
    font-size:1.75rem;
    font-weight:bold;
    color:${({ color, theme }) => color = "green" ? theme.colors.green : theme.colors.orange}
}
& p.price{
    font-size:1.75rem;
    font-weight:medium;
    color:${({ color, theme }) => color = "green" ? theme.colors.green : theme.colors.orange}
}
@media(max-width:${({ theme }) => theme.rwd.xl}){
    width:50%;
}
@media(max-width:${({ theme }) => theme.rwd.md}){
    width:100%;
}
`