import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`

export const Artboard = styled.div`
    display: flex;
    width: 216.5px;
    height: 264.5px;
    border: 1px #000 solid;
    flex-flow: column;
    padding: 18px;
`

export const ShowSigns = styled.div`
    width: 100%;
    height: 100%;
`

export const CarouselWrapper = styled.div`
    width: 217px;
    height: 222px;
    border-radius: 4px;
    border: 2px solid #F69F01;
    background-color: #FDEBCC;
`

export const Signos = styled.div`
    width: 56px;
    height: 21px;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #41c96a;
    display: flex;
    flex-flow: nowrap;
    justify-content: space-around;
`

export const Line = styled.hr`
    width: 216.5px;
`

export const SignsWrapper = styled.div`
    width: 100%;
    height: 17.5px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SignsIcon = styled.div`
    width: 28.5px;
    height: 26px;
    margin-right: 10px;
    background-image: url(${props => props.Icon});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    justify-content: space-around;
`

export const SignsName = styled.div`
    height: 17.5px;
    display: flex;
    align-items: center;
`

export const Name = styled.span`
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #f17f01;
    text-transform: uppercase;
`

export const SignsText = styled.div`
    width: 163.5px;
    padding: 17px 27px 27px;
    text-align: justify;
`

export const Text = styled.span`
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
`