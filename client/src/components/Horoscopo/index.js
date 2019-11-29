import React from 'react';
import axios from 'axios';
import { ShowSigns, CarouselWrapper, SignsWrapper, SignsIcon, SignsName, Name, SignsText, Text } from '../ShowSigns/style';
import Carousel from 're-carousel';
import Icons from '../../assets/icons';
import Arrows from '../Carousel/arrows';

export default class Horoscopo extends React.Component {
    state = {
        Signos: []
    }

    componentDidMount() {
        axios.get('https://horoscope.suaradionanet.net/api/horoscope', {params:{}, headers: {'x-api-key' : 'OiU(!kh4Fj8!dZP(u)9Fr' }})
            .then(res => {
            const Signos = res.data;
            this.setState({ Signos });
        })
    }

    render() {
        return (
            <CarouselWrapper> 
                <Carousel loop widgets={[Arrows]}>
                    { this.state.Signos.map((Signos, id) => 
                        <ShowSigns key = {id}>
                            <SignsWrapper>
                                <SignsIcon Icon={Icons[Signos.slug]}/>
                                <SignsName>
                                    <Name>
                                        {Signos.description}
                                    </Name>
                                </SignsName>
                            </SignsWrapper>
                            <SignsText>
                                <Text>
                                    {Signos.predictions[0].description}
                                </Text>
                            </SignsText>
                        </ShowSigns>
                    )}
                </Carousel> 
            </CarouselWrapper>
        )
    }
}