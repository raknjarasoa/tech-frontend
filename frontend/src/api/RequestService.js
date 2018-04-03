import fetch from 'isomorphic-fetch';

/**
 * 
 * Service class API to handle data fetch
*/
class RequestService {

  async doRequest(url) {
    const data = await (
      await (fetch(url)
        .then(res => {
          return res.json();
        })
        .catch(err => {
          throw new Error(err);
        })
      )
    );

    return data;
  }
}

const Instance = new RequestService();

Object.freeze(Instance);

export default Instance;
