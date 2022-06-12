import React, { useEffect, useState } from "react";
import { client } from "../../client";
const ExperianceSection = () => {
    const [experiances, setExperiance] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiance"]';
    
        client.fetch(query).then((data) => {
            setExperiance(data);
        });
      }, []);
    return(<div>
        {experiances.map((experiance,index) => (
        <div></div>
      ))}
    </div>);
};

export default ExperianceSection;
