import {loadPage, PAGES_LOAD_PAGE} from "../actionCreators";

describe('actionCreators', () => {
   test('should dispatch LOAD_PAGE action', () => {
       expect(loadPage({
           route: '/home',
           navTitle: 'Home'
       })).toEqual({type: PAGES_LOAD_PAGE, payload: {route: '/home', navTitle: 'Home'}});
   })
});