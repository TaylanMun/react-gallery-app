import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <li className="not-found">
            {/* added react-spinners */}
            <ClipLoader color='#438bbd'/>
            <h3>Loading...</h3>
        </li>
    );
};

export default Loading;
