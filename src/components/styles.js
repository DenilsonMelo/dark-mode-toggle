import styled from 'styled-components';

export const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.gradient };
    border: 2px solid ${({ theme }) => theme.toggleBorder };
    border-radius: 1.875rem;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    height: 3rem;

    text-align: center;
    align-items: center;
    justify-content: center;
    
`;