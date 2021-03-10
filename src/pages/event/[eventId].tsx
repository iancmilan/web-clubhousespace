import { useRouter } from 'next/router';
import useSWR from 'swr';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

import { Container, Card, CardHeader, Guests, Infos, Button } from '../../styles/pages/event';

interface EventData {
    eventClub: string;
    eventDescription: string;
    eventGuestsImg: string[];
    eventGuestsNames: string;
    eventMonthDay: string;
    eventName: string;
    eventWeekDay: string;
}

const Event: React.FC = () => {
    const router = useRouter();

    const { data, error } = useSWR<EventData>(`/event/${router.query.eventId}`, async url => {
        const response = await api.get(url);
        return response.data;
    });

    function handleLinkToClubhouse(){
        window.location.href = `https://www.joinclubhouse.com/event/${router.query.eventId}`;
    }

    if (error) return (
        <Container>
            <h1 style={{ color: 'red', }}>Failed to load data</h1>
        </Container>
    );

    if (!data) return (
        <Container>
            <Header />
            <SkeletonTheme color="#e6e4d8" highlightColor="#F1EFE4">
                <Skeleton height='18rem' width="39rem"/>
            </SkeletonTheme>
            <Footer />
        </Container>
    )

    return (
        <Container>
            <Header />
            <Card onClick={handleLinkToClubhouse}>
                <CardHeader>
                    <p>{data.eventWeekDay.toUpperCase()} {data.eventMonthDay}</p>
                    <strong>{data.eventName}</strong>
                    {data.eventClub && (
                        <div>
                            <span>FROM {data.eventClub}</span>
                            <img src="/icon_house.svg"/>
                        </div>
                    )}
                </CardHeader>
                <Guests>
                    {data.eventGuestsImg.map(img => (
                        <img 
                            key={img}
                            src={img}
                            style={data.eventGuestsImg.length == 1 ? {width: '4.8rem', height: '4.8rem', } : data.eventGuestsImg.length <= 3 ? {width:'3.8rem', height:'3.8rem',} : {width:'3.4rem', height:'3.4rem',}}
                        />
                    ))}
                    { data.eventGuestsNames.split(", ").length - data.eventGuestsImg.length > 0 && <strong> +{ data.eventGuestsNames.split(", ").length - data.eventGuestsImg.length} </strong> }
                </Guests>
                <Infos>
                    <p>{data.eventGuestsNames}</p>
                    <span>{data.eventDescription.replace('                                          —                 ', '')}</span>
                </Infos>
            </Card>
            <Button onClick={handleLinkToClubhouse}>
                Open event in Clubhouse
            </Button>
            <Footer />
        </Container>
    );
}

export default Event;