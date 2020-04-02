import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:5000/api'
})

const sleep = (ms) => (response) => new Promise((resolve) => setTimeout(() => resolve(response), ms))

const responseBody = (response) => response.data

const request = {
  get: (url) =>
    http
      .get(url)
      .then(sleep(2000))
      .then(responseBody)
}

export default request
