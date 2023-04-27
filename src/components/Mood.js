import React from "react";
import styled from "styled-components";
import gif from "./MoodGif.gif";


const Mood = () => {
    return (
        <>
        <Div0>
        <Div3>
            <img src={gif} alt={"Image_of_Mood_Tracking_App"} />
            </Div3>
            <Div1>
                <Headline>Mood Tracking App</Headline>
                <Div2>
                    <Paragraph>
                        This project is my attempt to make an app that tracks your mood.
                        It has clickable buttons that allow you to select your mood for the day.
                        This project was created using JavaScript,
                        and it is my first attempt at crating a project with react and react router.

                    </Paragraph>
                </Div2>
            </Div1>
        </Div0>
        </>
    )

}

export default Mood

const Headline = styled.h2`
    color: #d400ff;
    background-color: #000000;
    margin: auto;
    text-align: center;
    margin-bottom: 3%;
    padding-top: 3%;
    font-family: 'DynaPuff', cursive;
`

const Paragraph = styled.p`
color: #d400ff;
font-family: 'DynaPuff', cursive;
padding: 5px;
`
const Div0 = styled.div`
display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    gap: 50px;
    flex-shrink: 0;
`
const Div1 = styled.div`
align-text: center;
width: 300px;
margin-right: 10%;
border-color: #d400ff;
`

const Div2 = styled.div`
border-width: 20px;
border-style: outset;
border-color: #d400ff;
`
const Div3 = styled.div`
align-text: right;
margin-right: 10%;
border-color: #d400ff;
border-width: 20px;
border-style: outset;
border-color: #d400ff;
`

