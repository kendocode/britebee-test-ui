import axios from 'axios'
import * as config  from '../config'

//axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxMiwiZW1haWwiOiJ3ZWRAd2VkIiwibmFtZSI6IndlZCJ9LCJleHAiOjE1Mzk5NDI3MzF9.srVVDIb9ViLrVQ6DJ04a6jB9thGnTmovuFGsUHKov3o';
axios.defaults.headers.common['Authorization'] = localStorage.token
axios.defaults.headers.common['Authorization'] = localStorage.token

export const getProjects = () => {
    return axios.get(`${config.BASE_URL}/projects`, {
        headers: { accept: `${config.acceptHeader}` }
    })
    .then(response => response.data.projects)
    .catch(error => console.log(error))
}

export const createProject = (title) => {
    return axios.post(`${config.BASE_URL}/projects`,{
        headers: { accept: `${config.acceptHeader}` },
        data: { title: title }})
    .then(response => response.data.project)
    .catch(error => console.log(error))
}


// would use patch to update only some fields but not necessary here
export const updateProject = (project) => {
    return axios.put(`${config.BASE_URL}/projects/${project.id}`,
    // spread item attributes for FakeJSON
    // only returns 204 so update only shown on refresh
    // will need to return object from API or add find code
    // on front end
    { ...project })
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const destroyProject = (id) => {
    return axios.delete(`${config.BASE_URL}/projects/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}