import Head from "next/head";
import { useState, FormEvent } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from 'next/image';
import Link from 'next/link';
import { HiClipboardCopy } from "react-icons/hi";
import isURL from 'validator/lib/isURL';

import { Container, Card, Form, WhyUseIt, Why, ImageWrapper, LinkField } from '../styles/pages/Home';

const Home: React.FC = () => {
  const [clubhouseLink, setClubhouseLink] = useState('');
  const [showPreviewImage, setShowPreviewImage] = useState(false);
  const [eventId, setEventId] = useState('');

  // function handleChange(event: { target: HTMLInputElement }) {
  //   setClubhouseLink(event.target.value);
  //   console.log(clubhouseLink);
  // }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setEventId(clubhouseLink.split('/event/')[1]);
    setShowPreviewImage(true);
  }

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
            <input onChange={event => setClubhouseLink(event.target.value)} value={clubhouseLink} type="text" name="eventLink" id="eventLink" placeholder="https://www.joinclubhouse.com/event/..." />
            <button type="submit">Generate</button>
          </Form>
        </Card>
        { showPreviewImage ? (
          <>
            <span style={{ fontWeight: 600, opacity: '50%', marginTop: '1rem' }}>Your preview image will look like this <strong style={{ fontSize: '1.4rem' }}>👇</strong> </span>
            <ImageWrapper>
              <Link href={`/event/${eventId}`}>
                <a>
                  <Image
                      src={`https://api-clubhousespace.herokuapp.com/preview/${eventId}.png`}
                      alt="Preview image"
                      width={1200}
                      height={628}
                  />
                </a>
              </Link>
            </ImageWrapper>
            <span style={{ fontWeight: 600, opacity: '50%', marginTop: '1rem' }}>Copy the link to share on social media!</span>
            <LinkField>
              <input type="text" id="linkField" value={`https://www.joinclubhouse.space/event/${eventId}`}/>
              <button type="button" onClick={() => {navigator.clipboard.writeText(`https://www.joinclubhouse.space/event/${eventId}`)}}><HiClipboardCopy size={'1.3rem'} style={{ verticalAlign: 'middle' }}/></button>
            </LinkField>
          </>
        ) : (
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
        ) }
      </Container>
      <Footer />
    </>
  );
}

export default Home;
