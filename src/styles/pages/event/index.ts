import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    max-width: 720px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    width: 39rem;

    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 2.5rem 2rem;
`;

export const Header = styled.header`
    strong {
        display: block;
        font-size: 1.3rem;
    }

    p {
        font-size: 0.9rem;
        opacity: 50%;
        font-weight: 600;
    }

    div {
        span {
            font-size: 0.8rem;
            font-weight: 600;
            margin-right: 0.3rem;
        }

        display: flex;
        align-items: center;
    }
`;

export const Guests = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        border-radius: 40%;
        margin-top: 1rem;
    }

    img + img {
        margin-left: 0.5rem;
    }

    strong {
        font-weight: 600;
        margin-left: 1rem;
        margin-top: 0.9rem;
    }
`;

export const Infos = styled.div`
    p {
        line-height: 1rem;
        font-weight: 300;
        margin-top: 0.3rem;
        margin-bottom: 1rem;
    }
    span {
        font-weight: 300;
    }
`;