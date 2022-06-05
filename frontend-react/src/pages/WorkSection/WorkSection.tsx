import React, { useEffect, useState } from "react";
import { client } from "../../client";
const WorkSection = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';
    
        client.fetch(query).then((data) => {
          setWorks(data);
        });
      }, []);

    return(<div></div>);
};

export default WorkSection;
