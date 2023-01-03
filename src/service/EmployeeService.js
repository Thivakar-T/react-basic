import axios from "axios";

const ApiUrl = "http://localhost:8080/api/get"
const ApiUrl1 = "http://localhost:8080/api/create"
const ApiUrl2 = "http://localhost:8080/api/get"
const ApiUrl3 = "http://localhost:8080/api/update"
const ApiUrl4 = "http://localhost:8080/api/delete"
class EmployeeService {

    getEmployee() {
        return axios.get(ApiUrl)
    }
    createEmployee(data) {
        return axios.post(ApiUrl1, data)
    }
    getId(id) {
        return axios.get(ApiUrl+"/"+id)
    }
    updateEmployee(id,data) {
        return axios.put(ApiUrl3+"/"+id, data)
    }
    delete(id) {
        return axios.delete(ApiUrl4+"/"+id)
    }
}

export default new EmployeeService()