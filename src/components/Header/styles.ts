import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.5rem;
    background: #fff;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

    img {
        width: 3rem;
        height: 3rem;
    }
`;