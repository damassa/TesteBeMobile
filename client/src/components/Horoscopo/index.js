import React from 'react';
import axios from 'axios';
import ShowSigns from '../ShowSigns';

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
            <>
                { this.state.Signos.map(Signos => <ShowSigns key = {Signos.id} description={Signos.description} slug={Signos.slug}></ShowSigns>) }
            </>
        )
    }
}