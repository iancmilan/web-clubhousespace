import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
    bottom: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;

    font-size: 0.9rem;
    opacity: 50%;
    font-weight: 600;

    a {
        color: #5eb863;
        margin-left: 0.2rem;

        transition: color 0.2s;
    }

    a:hover {
        color: ${shade(0.2, '#5eb863')};
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 1rem;
        height: 1rem;
        margin-left: 0.2rem;
    }
    
`;