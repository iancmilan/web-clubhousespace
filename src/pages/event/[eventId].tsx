import { useRouter } from 'next/router';
import useSWR from 'swr';
import api from '../../services/api';

import { Container, Card, Header, Guests, Infos} from '../../styles/pages/event';

const Event: React.FC = () => {
    // const router = useRouter();

    // const { data, error } = useSWR(`/event/${router.query.eventId}`, async url => {
    //     const response = await api.get(url);
    //     console.log(response.data);
    //     return response.data;
    // });

    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>

    return (
        <Container>
            <Card>
                <Header>
                    <div>
                        <p>SUN, Jan 31, 10 PM (PST)</p>
                        <strong>⏰ Elon Musk on Good Time</strong>
                        <span>From GOOD TIME</span>
                    </div>
                </Header>
                <Guests>
                    <img src="https://clubhouseprod.s3.amazonaws.com/616_3bc1048a-806b-4d1b-aba7-c604bd522e56_thumbnail_250x250" alt="Guest1"/>
                    <img src="https://clubhouseprod.s3.amazonaws.com/977_4887016f-d774-472d-9f40-091b134a89aa_thumbnail_250x250" alt="Guest2"/>
                    <img src="https://clubhouseprod.s3.amazonaws.com/2769_d1384f6b-3737-4d43-881a-fc682632799d_thumbnail_250x250" alt="Guest3"/>
                    <img src="https://clubhouseprod.s3.amazonaws.com/4493_cc85f9fb-1ee7-4cc8-bb43-ec28734abbdb_thumbnail_250x250" alt="Guest4"/>
                    <img src="https://clubhouseprod.s3.amazonaws.com/4602198_753c7ae2-952b-405e-97d2-964c9633eabc_thumbnail_250x250" alt="Guest5"/>
                    <img src="https://clubhouseprod.s3.amazonaws.com/311_1b52ac11-13b4-42d0-a892-e9b8701b5543_thumbnail_250x250" alt="Guest6"/>
                </Guests>
                <Infos>
                    <p>w/ Sriram Krishnan, Marc Andreessen, Steven Sinofsky, Aarthi Ramamurthy, Elon Musk, Garry Tan 🍔</p>
                    <span>Special episode of Good Time with Elon Musk.</span>
                </Infos>
            </Card>
        </Container>
    );
}

export default Event;