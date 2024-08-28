import styled from "@emotion/styled";

const Navbar = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 6px 4px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    text-transform: capitalize;
    border-bottom: 1px solid ${({ theme }) => theme.colors.strokeSoft};
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        button {
            display: none;
        }
    }
`

export { Navbar }