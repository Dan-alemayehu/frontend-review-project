import React from "react";
import styled from "styled-components";

const Anime = () => {

    return (
        <>
            <Div1>
                <Heading>Anime Quote Generator</Heading>
                <Div2>
                    <Paragraph>
                        This project is the very first major coding project that I worked on.
                        It is a website for a mock restaurant.
                        The original prompt for the project was to make a restaurant menu, and from there I expanded.
                        It is a display of my abilities in HTML, CSS, and the Bootstrap library;
                        no Javascript was used in making this project.
                    </Paragraph>
                </Div2>
            </Div1>
        </>
    )

}

export default Anime

const Heading = styled.h2`
    color: #55ff00;
    margin: auto;
    text-align: center;
    margin-bottom: 3%;
    padding-top: 3%;
    font-family: 'Sedgwick Ave Display', cursive;
`
const Paragraph = styled.p`
color: #55ff00;
font-family: 'Sedgwick Ave Display', cursive;
padding: 10px;
`
const Div1 = styled.div`
width: 300px;
margin-left: 10%;
border-color: #55ff00;
float: left;
`

const Div2 = styled.div`
border-width: 20px;
border-style: dashed;
border-color: #55ff00;
`