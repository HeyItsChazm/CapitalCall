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
    return await axios
      .get(address, axiosConfig)
      .then(response => { return response.data})
      .catch(err => console.log(err));
  }
  async post_api_request(address, content) {
    return await axios
      .post(address, content, axiosConfig)
      .then(response => { return response.data})
      .catch(err => console.log(err));
  }
  async getApiFunds() {
    return await this.get_api_request(fundsApiUri)
  }
  async getApiCalls() {
    return await this.get_api_request(callsApiUri)
  }
  async getApiCommitments() {
    return await this.get_api_request(commitmentsApiUri)
  }
  async getApiFundInvestments() {
    return await this.get_api_request(fundInvestmentsApiUri)
  }
  async postApiFunds(funds) {
    return await this.post_api_request(fundsApiUri, funds)
  }
  async postApiCalls(calls) {
    return await this.post_api_request(callsApiUri, calls)
  }
  async postApiCommitments(commitments) {
    return await this.post_api_request(commitmentsApiUri, commitments)
  }
  async postApiFundInvestments(fundInvestments) {
    return await this.post_api_request(fundInvestmentsApiUri, fundInvestments)
  }
}

export default BackendApi;
