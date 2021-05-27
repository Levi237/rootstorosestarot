import React from 'react';
import styled from 'styled-components';

const HomePage = ({}) => {
    return(
        <HomeWrapper>
            <h1>W<small>ELCOME TO</small></h1>
            <h1>R<small>OOTS TO </small>R<small>OSES</small> T<small>AROT</small></h1>
            <HomeIntro>
                <section><img src="/deck/back.jpg"/></section>
                <section>
                    <h2>
                        Lorem ipsum dolor sit amet, 
                    </h2>
                    <p>
                        consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim 
                        id est laborum.
                    </p>
                </section>
            </HomeIntro>
        </HomeWrapper>
    );
};

const HomeWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 40px);
    overflow: scroll;
    letter-spacing: 1px;
    color: #fff;
    h1 {
        font-family: var(--decorative-font);
        font-weight: 400;
        letter-width: 1px;
        &:first-of-type {
            font-weight: 600;
            margin-top: 60px;
        }
    }
`;
const HomeIntro = styled.section`
    width: 640px;
    margin: 0 auto;
    > section {
        display: inline-block;
        &:first-of-type{
            width: 200px
            img {
                width: 200px;
            }
        }
        &:last-of-type{
            width: 400px;
        }
    }
    
`;

export default HomePage;