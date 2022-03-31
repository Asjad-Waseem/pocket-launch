import React, {useEffect, useState} from 'react';
import './card.css'

const Card = () => {

    const api = "https://api.spacex.land/rest/launches-past-result?apoapsis_km=0&block=0&cap_serial=string&capsule_reuse=string&core_flight=0&core_reuse=string&core_serial=string&customer=string&eccentricity=0&end=&epoch=&fairings_recovered=string&fairings_recovery_attempt=string&fairings_reuse=string&fairings_reused=string&fairings_ship=string&gridfins=string&id=&inclination_deg=0&land_success=string&landing_intent=string&landing_type=string&landing_vehicle=string&launch_date_local=&launch_date_utc=&launch_success=string&launch_year=string&legs=string&lifespan_years=0&longitude=0&manufacturer=string&mean_motion=0&mission_id=string&mission_name=string&nationality=string&norad_id=0&orbit=string&payload_id=string&payload_type=string&periapsis_km=0&period_min=0&raan=0&reference_system=string&regime=string&reused=string&rocket_id=string&rocket_name=string&rocket_type=string&second_stage_block=string&semi_major_axis_km=0&ship=string&side_core1_reuse=string&side_core2_reuse=string&site_id=string&site_name_long=string&site_name=string&start=&tbd=string&tentative_max_precision=string&tentative=string&limit=3"
    const [count, setCount] = useState([]);

    const [rn1, setRn1] = useState("");
    const [ly1, setLy1] = useState("");
    const [id1, setId1] = useState("");
    const [mn1, setMn1] = useState("");

    const [rn2, setRn2] = useState("");
    const [ly2, setLy2] = useState("");
    const [id2, setId2] = useState("");
    const [mn2, setMn2] = useState("");

    const [rn3, setRn3] = useState("");
    const [ly3, setLy3] = useState("");
    const [id3, setId3] = useState("");
    const [mn3, setMn3] = useState("");

    useEffect(async () => {
                if (count.length === 0) {
                    const api_call = await fetch(api);
                    const data = await api_call.json();
                    setCount(data);
                    console.log(data)

                    setLy1(data.data[0].launch_year);
                    setMn1(data.data[0].mission_name);
                    setRn1(data.data[0].rocket.rocket_name);
                    setId1(data.data[0].id);

                    setLy2(data.data[1].launch_year);
                    setMn2(data.data[1].mission_name);
                    setRn2(data.data[1].rocket.rocket_name);
                    setId2(data.data[1].id);

                    setLy3(data.data[2].launch_year);
                    setMn3(data.data[2].mission_name);
                    setRn3(data.data[2].rocket.rocket_name);
                    setId3(data.data[2].id);

                }
            },[]
    );

    return (
        <div className="card">
            <div className="card-body">
                <img src="https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png" alt="rocket image" className="card-img"/>
                <h2 className="card-title" id={id1}>{mn1? mn1: "not found"}</h2>
                <h4 className="card-content" id={id1}>Launch Year: {ly1? ly1: "not found"}</h4>
                <h4 className="card-content" id={id1}>Rocket Name: {rn1? rn1: "not found"}</h4>
            </div>
            <div className="card-body">
                <img src="https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png" alt="rocket image" className="card-img"/>
                <h2 className="card-title" id={id2}>{mn2? mn2: "not found"}</h2>
                <h4 className="card-content" id={id2}>Launch Year: {ly2? ly2: "not found"}</h4>
                <h4 className="card-content" id={id2}>Rocket Name: {rn2? rn2: "not found"}</h4>
            </div>
            <div className="card-body">
                <img src="https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png" alt="rocket image" className="card-img"/>
                <h2 className="card-title" id={id3}>{mn3? mn3: "not found"}</h2>
                <h4 className="card-content" id={id3}>Launch Year: {ly3? ly3: "not found"}</h4>
                <h4 className="card-content" id={id3}>Rocket Name: {rn3? rn3: "not found"}</h4>
            </div>
        </div>
    );
};

export default Card;
