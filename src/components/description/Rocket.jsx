import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {

    const apiId = useSelector((state) => state.id);
    console.log(apiId);
    // const apiId = 103;
    const api =`https://api.spacex.land/rest/launch/${apiId}`
    const [count, setCount] = useState("");

    const [md, setMd] = useState("");
    const [mn, setMn] = useState("");
    const [ld, setLd] = useState("");
    const [ls, setLs] = useState("");
    const [rn, setRn] = useState("");
    const [rt, setRt] = useState("");
    const [al, setAl] = useState("");
    const [im, setIm] = useState("");

    useEffect(async () => {
            if (count.length === 0) {
                const api_call = await fetch(api);
                const data = await api_call.json();
                setCount(data);
                console.log(data);
                setMn(data.mission_name);
                setMd(data.details);
                setLd(data.launch_date_utc);
                setLs(data.launch_site.site_name_long);
                setRn(data.rocket.rocket_name);
                setRt(data.rocket.rocket_type);
                setAl(data.links.wikipedia);
                setIm(data.links.flickr_images[0]);

            }
        },[]
    );

    return (
        <div className="Rocket">
            <div className="rocket-title">
                <h1>{mn? mn:"not found"}</h1>
            </div>
            <section className="rocket-media">
                <div className="rocket-img">
                    <img src={im? im:"https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"} alt="rocket image"/>
                </div>
                <div className="FL-icon">
                    <img src="" alt=""/>
                </div>
            </section>
            <aside>
                <div className="rocket-article">
                    <p className="article-description">{md? md:"not found"}</p>
                    <p>Launch Date UTC: {ld? ld:"not found"}</p>
                    <p>Launch Site: {ls? ls:"not found"}</p>
                    <p>Rocket Name: {rn? rn:"not found"}</p>
                    <p>Rocket Type: {rt? rt:"not found"}</p>
                    <p>Article Link : <a href={al? al: "not found"}>Wikipedia</a></p>
                </div>

            </aside>
        </div>
    );
};

export default Rocket;
