import axios from 'axios';
import Cookie from 'jscookie';

const fundsApiUri = "api/funds/";
const callsApiUri = "api/calls/";
const commitmentsApiUri = "api/commitments/";
const fundInvestmentsApiUri = "api/fundinvestments/";

const csrftoken = Cookie.get('csrftoken');
const axiosConfig = {
  headers: {
    'X-CSRFTOKEN': csrftoken,
  },
};

class BackendApi {
  async get_api_request(address) {
    let promise = axios
      .get(address, axiosConfig)
      .then(response => { return response.data})
      .catch(err => console.log(err))
    return await promise
  }
  async post_api_request(address, content) {
    let promise = axios
      .post(address, content, axiosConfig)
      .then(response => console.log(response))
      .catch(err => console.log(err))
    return await promise
  }
  getApiFunds() {
    return this.get_api_request(fundsApiUri)
  }
  getApiCalls() {
    return this.get_api_request(callsApiUri)
  }
  getApiCommitments() {
    return this.get_api_request(commitmentsApiUri)
  }
  getApiFundInvestments() {
    return this.get_api_request(fundInvestmentsApiUri)
  }
  postApiFunds(funds) {
    this.post_api_request(fundsApiUri, funds)
  }
  postApiCalls(calls) {
    this.post_api_request(callsApiUri, calls)
  }
  postApiCommitments(commitments) {
    this.post_api_request(commitmentsApiUri, commitments)
  }
  postApiFundInvestments(fundInvestments) {
    this.post_api_request(fundInvestmentsApiUri, fundInvestments)
  }
}

export default BackendApi;
