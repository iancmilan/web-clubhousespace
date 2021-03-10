import { Container } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <p>joinclubhouse.space is not affiliated with Clubhouse</p>
            <div>
                <span>Made by </span>
                <a href="https://www.linkedin.com/in/iancmilan/" target="_blank">Ian</a>
                <img src="/wave_hand.svg" alt="Wave hand" />
            </div>
        </Container>
    );
}

export default Footer;