import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import api from '../../services/api';

import { Container, Card, Header, Guests, Infos} from '../../styles/pages/event';

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
    const [eventData, setEventData] = useState<EventData>({} as EventData);
    const router = useRouter();

    const { data, error } = useSWR<EventData>(`/event/${router.query.eventId}`, async url => {
        const response = await api.get(url);
        return response.data;
    });

    if (error) return <div>failed to load</div>
    if (!data) return (
        <Container>
            <SkeletonTheme color="#e6e4d8" highlightColor="#F1EFE4">
                <Skeleton height='18rem' width="39rem"/>
            </SkeletonTheme>
        </Container>
    )

    return (
        <Container>
            <Card>
                <Header>
                    <p>{data.eventWeekDay.toUpperCase()} {data.eventMonthDay}</p>
                    <strong>{data.eventName}</strong>
                    {data.eventClub && (
                        <div>
                            <span>FROM {data.eventClub}</span>
                            <img src="/icon_house.svg"/>
                        </div>
                    )}
                </Header>
                <Guests>
                    {data.eventGuestsImg.map(img => (
                        <img 
                            key={img}
                            src={img}
                            style={data.eventGuestsImg.length == 1 ? {width: '4.8rem', height: '4.8rem', } : data.eventGuestsImg.length <= 3 ? {width:'3.8rem', height:'3.8rem',} : {width:'3.4rem', height:'3.4rem',}}
                        />
                    ))}
                </Guests>
                <Infos>
                    <p>{data.eventGuestsNames}</p>
                    <span>{data.eventDescription.replace('                                          —                 ', '')}</span>
                </Infos>
            </Card>
        </Container>
    );
}

export default Event;