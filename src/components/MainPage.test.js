import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage'; 

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searcField: '',
        isPending: false,
        error: ''
    };
    wrapper = shallow(<MainPage { ...mockProps } />);
});

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'John',
        isPending: false,
        error: ''
    };
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false,
        error: ''
    };
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage { ...mockProps3 } />);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it('render correctly when app is pending', () => {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: '',
        isPending: true,
        error: ''
    };
    const wrapper3 = shallow(<MainPage { ...mockProps4 } />);
    expect(wrapper3).toMatchSnapshot();
});