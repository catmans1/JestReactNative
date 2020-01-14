import 'react-native';
import Api from '../api';

import 'isomorphic-fetch';
it('Api test case', async function () {
    const response = await Api.all();
    console.warn(response.movies[2].title)
    expect(response.movies[2].title).toEqual('The Matrix')

})