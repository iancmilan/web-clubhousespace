import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import isURL from 'validator/lib/isURL';

import { Container, Card, Form, WhyUseIt, Why } from '../styles/pages/Home';

const Home: React.FC = () => {
  const [clubhouseLink, setClubhouseLink] = useState('');

  function handleChange(event: { target: HTMLInputElement }) {
    setClubhouseLink(event.target.value);
    console.log(clubhouseLink);
  }

  function handlePaste(event: React.ClipboardEvent) {
    const pastedValue = event.clipboardData.getData("text")
    if(isURL(pastedValue)){
      console.log('é uma url');
    }
  }

  function handleSubmit() {}

  return (
    <>
      <Head>
        <title>Cubhouse Space</title>

        <meta name="title" content="CubhouseSpace" />
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
      <Container>
        <Card>
          <Form onSubmit={handleSubmit}>
            <strong>Insert the link of your Clubhouse event to generate our link to share on social media.</strong>
            <input onChange={handleChange} onPaste={handlePaste} value={clubhouseLink} type="text" name="eventLink" id="eventLink" placeholder="https://www.joinclubhouse.com/event/..." />
            <button type="submit">Generate</button>
          </Form>
        </Card>
        <WhyUseIt>
          <Why>
            <header>
              <span>Without our link</span>
              <img src="/withoutOurLink.png" alt="Without Our Link" />
            </header>
            <div>
              <img src="/withoutOurLinkImg.png" alt="With our link image" />
            </div>
          </Why>
          <Why>
            <header>
              <span>With our link</span>
              <img src="/withOurLink.png" alt="With Our Link"/>
            </header>
            <div>
              <img src="/withOurLinkImg.png" alt="Without our link image"/>
            </div>
          </Why>
        </WhyUseIt>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
