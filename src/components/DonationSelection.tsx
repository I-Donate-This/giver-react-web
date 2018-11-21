import * as React from 'react';
import Button from "@material-ui/core/Button/Button";


const buttonContainerStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 30};
const DonationSelection = () =>
    <div>
        <div style={buttonContainerStyle}>
            <Button size="large" variant="outlined">Time</Button>
        </div>
        <div style={buttonContainerStyle}>
            <Button size="large" variant="outlined">Money</Button>
        </div>
        <div style={buttonContainerStyle}>
            <Button size="large" variant="outlined">Item</Button>
        </div>
    </div>;

export default DonationSelection;
