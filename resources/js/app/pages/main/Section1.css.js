import styled from "styled-components";

export const Container = styled.section`
min-height:100vh;
`
export const Row = styled.div`
padding:0 8%;
& h2{
    padding-top:10%;
    margin-bottom:5%;
    font-size: 3rem;
    color:${({ theme }) => theme.colors.green};
}
`