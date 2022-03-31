import React, {useState} from 'react';
import './home.css'
import NextCard from "../../../components/next_card/Next_card";
import Card from "../../../components/card/card";

const Home = () => {
    return (
        <div className="home">
            <div className="home-cards">
                <div className="home-next-card">
                    {<NextCard />}
                </div>
                <div className="home-card">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Home;

