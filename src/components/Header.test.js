import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'; 

it('expect to render Header component', () => {

    expect(shallow(<Header />)).toMatchSnapshot();
});

it('expect to not update Header state', () => {
    const shouldUpdate = shallow(<Header />).instance().shouldComponentUpdate();
    expect(shouldUpdate).toBe(false);
});
