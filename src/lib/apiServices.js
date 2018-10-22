import axios from 'axios'
import * as config  from '../config'

axios.defaults.headers.common['Authorization'] = localStorage.token
// later get token from state using getState and pass to each
// authorized request

export const getProjects = () => {
    return axios.get(`${config.BASE_URL}/projects`, {
        headers: { accept: `${config.acceptHeader}` }
    })
    .then(response => response.data.projects)
    .catch(error => console.log(error))
}

export const createProject = (title) => {
    return axios.post(`${config.BASE_URL}/projects`,{
        headers: { accept: `${config.acceptHeader}`},
        data: { title: title }})
    .then(response => response.data.project)
    .catch(error => console.log(error))
}

export const updateProject = (project_id, isComplete) => {
    return axios.patch(`${config.BASE_URL}/projects/${project_id}`,
    {isComplete: isComplete})
    .then(response => response.data.project)
    .catch(error => console.log(error))
}

export const destroyProject = (id) => {
    return axios.delete(`${config.BASE_URL}/projects/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const createItem = (description, project_id) => {
    return axios.post(`${config.BASE_URL}/projects/${project_id}/items`,
    { description: description, iscomplete: false})
    .then(response => response.data.item)
    .catch(error => console.log(error))
}

export const updateItem = (item) => {
    return axios.put(`${config.BASE_URL}/projects/${item.project_id}/items/${item.id}`,
    { ...item })
    .then(response => response.data.item)
    .catch(error => console.log(error))
}

export const destroyItem = (id, projectId) => {
    return axios.delete(`${config.BASE_URL}/projects/${projectId}/items/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}
