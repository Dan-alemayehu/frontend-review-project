import React from "react";
import styled from "styled-components";

const Mood = () => {
    return (
        <>
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
const Div1 = styled.div`
align-text: right;
width: 300px;
margin-right: 10%;
border-color: #d400ff;
float: right;
`

const Div2 = styled.div`
border-width: 20px;
border-style: outset;
border-color: #d400ff;
`

