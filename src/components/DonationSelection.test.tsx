import * as React from 'react';
import * as enzyme from 'enzyme';
import DonationSelection from "./DonationSelection";

it('renders donate time button', () => {
    const donationSelection = enzyme.shallow(<DonationSelection/>);

    expect(donationSelection.findWhere(
        element => element.text() === 'Time'))
        .toHaveLength(1);
});

it('renders donate money button', () => {
    const donationSelection = enzyme.shallow(<DonationSelection/>);

    expect(donationSelection.findWhere(
        element => element.text() === 'Money'))
        .toHaveLength(1);
});

it('renders donate item button', () => {
    const donationSelection = enzyme.shallow(<DonationSelection/>);

    expect(donationSelection.findWhere(
        element => element.text() === 'Item'))
        .toHaveLength(1);
});
