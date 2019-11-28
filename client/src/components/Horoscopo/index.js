import React from 'react';
import axios from 'axios';
import { ShowSigns, CarouselWrapper } from '../ShowSigns/style';
import Carousel from 're-carousel';

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
                <Carousel>
                    { this.state.Signos.map((Signos, id) => 
                        <ShowSigns key = {id}>
                            {Signos.description}
                            {Signos.predictions[0].description}
                            {Signos.slug}
                        </ShowSigns>
                    )}
                </Carousel> 
            </CarouselWrapper>
        )
    }
}