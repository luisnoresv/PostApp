import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:5000/api'
})

const responseBody = (response) => response.data

const request = {
  get: (url) => http.get(url).then(responseBody)
}

export default request
