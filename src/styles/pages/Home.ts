import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    max-width: 720px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow: scroll;
`;

export const Card = styled.div`
    width: 35rem;

    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 2.5rem;

    display: flex;
    align-items: flex-start;

    @media(max-width: 720px) {
        max-width: 22rem;
    }
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

export const WhyUseIt = styled.div`
    width: 35rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    @media(max-width: 720px) {
        max-width: 22rem;
        flex-direction: column;
    }
`;

export const Why = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        margin-bottom: 0.3rem;

        span {
            margin-right: 0.2rem;
        }
    }
    
    span {
        font-weight: 600;
        opacity: 50%;
    }

    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 10%;
    }

    div img {
        width: 15rem;
        height: 15rem;
        border-radius: 5%;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    }
`;