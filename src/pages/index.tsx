import Head from "next/head";
import { useState, FormEvent, ChangeEvent } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from 'next/image';
import Link from 'next/link';
import { HiDownload } from "react-icons/hi";
import isURL from 'validator/lib/isURL';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { saveAs } from 'file-saver';

import { Container, Card, Form, WhyUseIt, Why, ImageWrapper, LinkField } from '../styles/pages/Home';

const Home: React.FC = () => {
  const [clubhouseLink, setClubhouseLink] = useState('');
  const [showPreviewImage, setShowPreviewImage] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [eventId, setEventId] = useState('');
  const [validUrl, setValidUrl] = useState(false);

  // function handleChange(event: { target: HTMLInputElement }) {
  //   setClubhouseLink(event.target.value);
  //   console.log(clubhouseLink);
  // }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setEventId(clubhouseLink.split('/event/')[1]);
    setShowPreviewImage(true);
  }

  function handleLoadImage() {
    setImageLoaded(false);
    // console.log("teste");
  }

  function handleDownloadImg() {
    saveAs(`https://api-clubhousespace.herokuapp.com/preview/${eventId}.png`, `${eventId}.png`);
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const urlRegex = /^(https:\/\/www.joinclubhouse\.|https:\/\/www.clubhouse\.)com\/event\/[a-zA-z0-9]{8}$/;

    if(e.target.value.match(urlRegex)) {
      setValidUrl(true);
      setClubhouseLink(e.target.value);
    }else {
      setValidUrl(false);
      setClubhouseLink(e.target.value);
    }
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
            <strong>Insert your Clubhouse event link to generate a cool image to share on social media.</strong>
            <input onChange={event => handleOnChange(event)} value={clubhouseLink} type="text" name="eventLink" id="eventLink" placeholder="https://www.joinclubhouse.com/event/..." />
            <button type="submit" disabled={!validUrl} >Generate</button>
          </Form>
        </Card>
        { showPreviewImage ? (
          <>
            {
              imageLoaded ? (
                <span style={{ fontWeight: 600, opacity: '50%', marginTop: '1rem' }}>Generating...</span>
              ) : (
                <span style={{ fontWeight: 600, opacity: '50%', marginTop: '1rem' }}>Here's your image <strong style={{ fontSize: '1.4rem' }}>👇</strong> </span>
              )
            }
            <ImageWrapper>
              <Link href={`/event/${eventId}`}>
                <a>
                {
                  imageLoaded && (
                    <SkeletonTheme color="#F1EFE4" highlightColor="#faf4eb">
                      <Skeleton width='35rem'/>
                    </SkeletonTheme>
                  )
                }
                  <Image
                      src={`https://api-clubhousespace.herokuapp.com/preview/${eventId}.png`}
                      alt="Preview image"
                      width={1200}
                      height={628}
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src.indexOf('data:image/gif;base64') < 0 && handleLoadImage();
                      }}
                  />
                </a>
              </Link>
            </ImageWrapper>
            {
              !imageLoaded && (
                <LinkField>
                  <span style={{ fontWeight: 600, opacity: '50%', marginTop: '1rem', marginRight: '1rem'}}>Download </span>
                  <button type="button" onClick={handleDownloadImg}>
                    <HiDownload size={'1.3rem'} style={{ verticalAlign: 'middle' }}/>
                  </button>

                    {/* <input type="text" id="linkField" value={`https://www.joinclubhouse.space/event/${eventId}`}/> */}
                    {/* <button type="button" onClick={() => {navigator.clipboard.writeText(`https://www.joinclubhouse.space/event/${eventId}`)}}><HiClipboardCopy size={'1.3rem'} style={{ verticalAlign: 'middle' }}/></button> */}
                </LinkField>
              )
            }
          </>
        ) : (
          <WhyUseIt>
            <Why>
              <header>
                <span>Without an image</span>
                <img src="/withoutOurLink.png" alt="Without an image" />
              </header>
              <div>
                <img src="/withoutOurLinkImg.png" alt="Without an image" />
              </div>
            </Why>
            <Why>
              <header>
                <span>With an image</span>
                <img src="/withOurLink.png" alt="With an image"/>
              </header>
              <div>
                <img src="/withOurLinkImg.png" alt="With an image"/>
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
