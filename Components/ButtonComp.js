import React, { useState } from "react";


const colours = ['red', 'green', 'blue', 'orange', 'yellow'];

export default function Button(props) {
    const [selectedColourIndex, setColourIndex] = useState(0);

    const nextColour = () => {
        const newColourIndex = selectedColourIndex + 1;
        if (colours[newColourIndex]) 
            setColourIndex(newColourIndex);
        else
            setColourIndex(0);
    }

    return (<button type="button" style={{backgroundColor: colours[selectedColourIndex]}}
            onClick={nextColour}>Change color</button>);
}
