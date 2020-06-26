import axios from 'axios';
import Cookie from 'jscookie';

const fundsApiUri = "api/funds/";
const callsApiUri = "api/calls/";
const commitmentsApiUri = "api/commitments/";
const fundInvestmentsApiUri = "api/fundinvestments/";

const csrftoken = Cookie.get('csrftoken');
console.log("CSRFTOKEN: " + csrftoken);
const axiosConfig = {
  headers: {
    'X-CSRFTOKEN': csrftoken,
  },
};

class BackendApi {
  get_api_request = (address) => {
    return (
      axios
        .get(address, axiosConfig)
        .then(response => { return response.data})
        .catch(err => console.log(err))
    )
  }
  post_api_request = (address, content) => {
    console.log("CONTENT FOR: " + address);
    console.log(content);
    axios
      .post(address, content, axiosConfig)
      .then(response => console.log(response))
      .catch(err => console.log(err))
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