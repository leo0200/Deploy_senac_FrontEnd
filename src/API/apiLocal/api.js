import axios from 'axios'

const apiLocal = axios.create({
    baseURL: 'https://node-deploy-senac-p0we.onrender.com'
})

export default apiLocal