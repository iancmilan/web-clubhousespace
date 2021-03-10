import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Cubhouse Space</title>

        <meta name="title" content="Cubhouse Space" />
        <meta name="description" content="Generate a link with a cool preview image to share your Clubhouse events on social media!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joinclubhouse.space/" />
        <meta property="og:title" content="Clubhouse Space" />
        <meta property="og:description" content="Generate a link with a cool preview image to share your Clubhouse events on social media!" />
        <meta property="og:image" content="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://joinclubhouse.space/" />
        <meta property="twitter:title" content="Cubhouse Space" />
        <meta property="twitter:description" content="Generate a link with a cool preview image to share your Clubhouse events on social media!" />
        <meta property="twitter:image" content="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
      </Head>
      <Header />
      <h1>Hello world</h1>
      <Footer />
    </Container>
  );
}

export default Home;
