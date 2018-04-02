import RequestService from './RequestService';

const API_ENDPOINT= `http://localhost:3000/api`;

export const retrieveList = async () => {
  return RequestService.doRequest(`${API_ENDPOINT}/list.json`);
};

export const getSurveyById = async (id) => {
  return RequestService.doRequest(`${API_ENDPOINT}/${id}.json`);
};
