import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    border-radius: ${({ theme }) => theme.variables[16]};

    .content {
        width: 500px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.white80};
        box-shadow: ${({ theme }) => theme.shadows.medium};
        border-radius: 0 24px 24px 0;
        padding: ${({ theme }) => theme.variables[12]};
    }
`

export { Container }