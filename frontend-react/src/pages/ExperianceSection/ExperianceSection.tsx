import React, { useEffect, useState } from "react";
import { client } from "../../client";
const ExperianceSection = () => {
    const [experiance, setExperiance] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiance"]';
    
        client.fetch(query).then((data) => {
            setExperiance(data);
        });
      }, []);
    return(<div></div>);
};

export default ExperianceSection;
