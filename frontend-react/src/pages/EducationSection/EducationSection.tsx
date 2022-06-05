import React, { useEffect, useState } from "react";
import { client } from "../../client";
const EducationSection = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const query = '*[_type == "education"]';
    
        client.fetch(query).then((data) => {
            setEducation(data);
        });
      }, []);
    return(<div></div>);
};

export default EducationSection;
