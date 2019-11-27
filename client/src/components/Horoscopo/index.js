import React from 'react';
import axios from 'axios';
import ShowSigns from '../ShowSigns';

export default class Livros extends React.Component {
    state = {
        Signos: []
    }

    componentDidMount() {
        axios.get(`https://horoscope.suaradionanet.net/api/horoscope`)
            .then(res => {
            const Signos = res.data;
            this.setState({ Signos });
        })
    }

    render() {
        return (
            <>
                { this.state.Signos.map(Signos => <ShowSigns id = {Signos.id} description={Signos.description}></ShowSigns>) }
            </>
        )
    }
}