import axios from 'axios'

export const baseDomain = 'https://64760318e607ba4797dd231c.mockapi.io/api/v1/';

const client = axios.create({
    baseURL: baseDomain,
    headers: {'X-Custom-Header': 'foobar'}
})

export default client
