import styled from "styled-components";

export const Container = styled.section`
padding:10% 8%;
text-align:center;
h1{
    color:${({ theme }) => theme.colors.main};
    text-transform: capitalize;
}
`