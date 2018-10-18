import axios from 'axios'
import { BASE_URL} from '../config'

//axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxMiwiZW1haWwiOiJ3ZWRAd2VkIiwibmFtZSI6IndlZCJ9LCJleHAiOjE1Mzk5NDI3MzF9.srVVDIb9ViLrVQ6DJ04a6jB9thGnTmovuFGsUHKov3o';
axios.defaults.headers.common['Authorization'] = localStorage.token

export const getItems = () => {
    return axios.get(`${BASE_URL}/projects//items`)
    .then(response => response.data.items)
    .catch(error => console.log(error))
}

export const createItem = (description) => {
    return axios.post(`${BASE_URL}/projects/263/items`,
    { description: description, iscomplete: false})
    .then(response => response.data)
    .catch(error => console.log(error))
}


// would use patch to update only some fields but not necessary here
export const updateItem = (item) => {
    return axios.put(`${BASE_URL}/projects/263/items/${item.id}`,
    // spread item attributes for FakeJSON
    // only returns 204 so update only shown on refresh
    // will need to return object from API or add find code
    // on front end
    { ...item })
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const destroyItem = (id) => {
    return axios.delete(`${BASE_URL}/projects/263/items/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}