import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 35rem;

    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 2.5rem;

    display: flex;
    align-items: flex-start;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 40rem;

    strong {
        font-weight: 600;
        opacity: 50%;
        margin-bottom: 1rem;
    }

    input {
        height: 3rem;
        padding: 5px;
        border-radius: 10px;
        color: rgba(0,0,0,0.5);
        border: 1px solid #F1EFE4;
        outline: 0;

        &:focus {
            box-shadow: 0 0 0 1px ${shade(0.2, '#F1EFE4')};
        }

        &::placeholder {
            opacity: 50%;
        }
    }
`;