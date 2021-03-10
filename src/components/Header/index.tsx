import { useRouter } from 'next/router';
import { Container } from './styles';

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      <div onClick={() => router.push('/')}>
        <img src="/wave_hand.svg" alt="Wave hand" />
      </div>
    </Container>
    );
  }
  
  export default Header;