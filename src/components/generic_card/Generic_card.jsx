import React, {useEffect, useState} from 'react';
import './generic_card.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { updateId } from '../../redux/slices/rocketSlice';
import { useDispatch } from 'react-redux';

const GenericCard = () => {

    const navigate = useNavigate();

    const api = "https://api.spacex.land/rest/launches?apoapsis_km=0&block=0&cap_serial=string&capsule_reuse=string&core_flight=0&core_reuse=string&core_serial=string&customer=string&eccentricity=0&end=&epoch=&fairings_recovered=string&fairings_recovery_attempt=string&fairings_reuse=string&fairings_reused=string&fairings_ship=string&gridfins=string&id=&inclination_deg=0&land_success=string&landing_intent=string&landing_type=string&landing_vehicle=string&launch_date_local=&launch_date_utc=&launch_success=string&launch_year=string&legs=string&lifespan_years=0&longitude=0&manufacturer=string&mean_motion=0&mission_id=string&mission_name=string&nationality=string&norad_id=0&orbit=string&payload_id=string&payload_type=string&periapsis_km=0&period_min=0&raan=0&reference_system=string&regime=string&reused=string&rocket_id=string&rocket_name=string&rocket_type=string&second_stage_block=string&semi_major_axis_km=0&ship=string&side_core1_reuse=string&side_core2_reuse=string&site_id=string&site_name_long=string&site_name=string&start=&tbd=string&tentative_max_precision=string&tentative=string&limit=10"
    const [count, setCount] = useState("");

    console.log(api);

    const [rn, setRn] = useState("");
    const [ly, setLy] = useState("");
    const [id, setId] = useState("");
    const [mn, setMn] = useState("");
    const [im, setIm] = useState("");

    const [q, setQ] = useState("");

    console.log(q);

    console.log(count);

    console.log(count[0]);

    useEffect(async () => {
            if (count.length === 0) {
                const api_call = await fetch(api);
                const data = await api_call.json();
                setCount(data);
                console.log(data)
                console.log(api)

                setLy(data[0].launch_year);
                setMn(data[0].mission_name);
                setRn(data[0].rocket.rocket_name);
                setId(data[0].id);
                setIm(data[0].links.flickr_images[0]);
            }
        },[]
    );

    // useEffect(async () => {
    //             const api_call = axios.get("https://api.spacex.land/rest/launches?apoapsis_km=0&block=0&cap_serial=string&capsule_reuse=string&core_flight=0&core_reuse=string&core_serial=string&customer=string&eccentricity=0&end=&epoch=&fairings_recovered=string&fairings_recovery_attempt=string&fairings_reuse=string&fairings_reused=string&fairings_ship=string&gridfins=string&id=&inclination_deg=0&land_success=string&landing_intent=string&landing_type=string&landing_vehicle=string&launch_date_local=&launch_date_utc=&launch_success=string&launch_year=string&legs=string&lifespan_years=0&longitude=0&manufacturer=string&mean_motion=0&mission_id=string&mission_name=string&nationality=string&norad_id=0&orbit=string&payload_id=string&payload_type=string&periapsis_km=0&period_min=0&raan=0&reference_system=string&regime=string&reused=string&rocket_id=string&rocket_name=string&rocket_type=string&second_stage_block=string&semi_major_axis_km=0&ship=string&side_core1_reuse=string&side_core2_reuse=string&site_id=string&site_name_long=string&site_name=string&start=&tbd=string&tentative_max_precision=string&tentative=string&limit=10");
    //             const data = await api_call.json();
    //             setCount(data);
    //             console.log(data)
    //             console.log(api)
    //     },[]
    // );

    const callData = () => {
        count.map((c) => console.log(c.details))
    }

    // const id = useSelector((state) => state.counter)

    const dispatch = useDispatch();

    return (
        <>

<div className="search-wrapper" style={{marginTop: "20px"}}>
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only" style={{marginLeft: "20px"}}>Search rockets here</span>
                        </label>
                    </div>





        {count ? count.map((countData) => 

        ( q.length > 0 && countData.mission_name.includes(q)  || q.length === 0 ?
       
        <div className="generic-card" onClick={()=>{dispatch(updateId(countData.id)); navigate("/about")} }>
             <div className="generic-card-body">
                 <img src={countData.links.flickr_images[0] ? countData.links.flickr_images[0] : "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png" } alt="rocket image" className="card-img"/>
                 <h2 className="card-title" id={id}>{countData.mission_name ? countData.mission_name : "not found"}</h2>
                 <h4 className="card-content" id={id}>Launch Year: {countData.launch_year ? countData.launch_year : "not found"}</h4>
                 <h4 className="card-content" id={id}>Rocket Name: {countData.rocket.rocket_name ? countData.rocket.rocket_name : "not found"}</h4>
             </div>
         </div> 

         : <> </>
        )
        )
        : <p>Loading...</p>
        }
        </>
    );
};

export default GenericCard;
