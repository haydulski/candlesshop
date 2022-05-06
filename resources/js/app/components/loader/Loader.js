import React from 'react';
import { MutatingDots } from 'react-loader-spinner'

function Loader() {
    return (<div style={{ width: "100wv", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <MutatingDots color="#F24E1E" secondaryColor="#F0303D" height="100" width="110" />

    </div>);
}

export default Loader;