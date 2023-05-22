import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 1200px;
    background-color: aliceblue;
    @media screen and (max-width: 1200px) {
        background-color: #ccc;
        width: 100%;
        padding: 0 20px;
    }
`