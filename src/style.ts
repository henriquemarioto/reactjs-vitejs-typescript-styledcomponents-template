import styled from "styled-components";

export const Presentation = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${p => p.theme.colors.black};

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 32px;
        font-weight: bold;
        color: ${p => p.theme.colors.white};
    }
`;