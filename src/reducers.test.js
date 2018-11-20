import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from './reducers';

 describe('searchRobots', () => {
     const initialStateSerch = {
         searchField: ''
     };
     it('should return initil state', () => {
         expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
     });
     it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSerch, { 
            type: CHANGE_SEARCH_FIELD, 
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    });
 });
 describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    };
    it('should return initil state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });
    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, { 
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            error: "",
            isPending: true
        })
    });
    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, { 
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            error: "",
            isPending: false
        })
    });
    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, { 
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error'
        })).toEqual({
            robots: [],
            error: "error",
            isPending: false
        })
    });
})