import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

    button {
        height: 3rem;
        color: #ffad30;
        font-size: 1em;
        background: transparent;
        padding: 0.25em 1em;
        border: 2px solid #ffad30;
        border-radius: 10px;
        outline: none;

        margin-top: 2rem;
        
        transition: color 0.2s, border 0.2s;

        &:hover {
            color: ${shade(0.1, '#ffad30')};
            border: 2px solid ${shade(0.1, '#ffad30')};
        }

        &:focus {
            box-shadow: 0 0 0 1px ${shade(0.1, '#ffad30')};
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
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

export const ImageWrapper = styled.div`
    margin-top: 1rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 35rem;

    img {
        border-radius: 10px;
    }
`;

export const LinkField = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: row;
    width: 35rem;

    button {
        height: 3rem;
        color: #ffad30;
        font-size: 1em;
        background: transparent;
        padding: 0.25em 1em;
        border: 2px solid #ffad30;
        border-radius: 10px;
        outline: none;

        
        transition: color 0.2s, border 0.2s;

        &:hover {
            color: ${shade(0.1, '#ffad30')};
            border: 2px solid ${shade(0.1, '#ffad30')};
        }
    }

    input {
        height: 3rem;
        padding: 5px;
        border-radius: 10px;
        color: rgba(0,0,0,0.5);
        border: 1px solid #F1EFE4;
        outline: 0;
        flex: 1;
        margin-right: 0.5rem;

        &:focus {
            box-shadow: 0 0 0 1px ${shade(0.2, '#F1EFE4')};
        }

        &::placeholder {
            opacity: 50%;
        }
    }
`;