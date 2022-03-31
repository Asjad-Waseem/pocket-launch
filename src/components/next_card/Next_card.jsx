import React, {useEffect, useState} from 'react';
import './next_card.css'

const NextCard = () => {

    const api = "https://api.spacex.land/rest/launch-next"
    const [count, setCount] = useState([]);
    const [rc, setRc] = useState("");
    const [rn, setRn] = useState("");

    useEffect(() => {
            async function getLastLaunch(){
                if (count.length === 0) {
                    const api_call = await fetch(api);
                    const data = await api_call.json();
                    setCount(data);
                    setRn(data.rocket.rocket_name);
                    setRc(data.rocket.first_stage.cores[0].core.reuse_count);
                }
            } getLastLaunch();

        },[]
    );


    return (
        <div className="next-card">
            <div className="next-card__body">
                <img src={count.flickr_images? count.id: "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"} alt="rocket image" className="next-card__img"/>
                <h1 className="next-card__title" id={count.id}>{count.mission_name? count.mission_name: "not found"}</h1>
                <h4 className="next-card__content" id={count.id}>Launch Year: {count.launch_year? count.launch_year: "not found"}</h4>
                <h4 className="next-card__content" id={count.id}>Rocket Name: {rn? rn: "not found"}</h4>
                <h4 className="next-card__content" id={count.id}>First_Stage Reuse Count: {rc? rc: "not found"}</h4>
            </div>
        </div>
    );
}
export default NextCard;
