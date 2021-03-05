import { useRouter } from 'next/router';

const Event: React.FC = () => {
    const router = useRouter();
    return <h1>Event id: {router.query.eventId} </h1>
}

export default Event;