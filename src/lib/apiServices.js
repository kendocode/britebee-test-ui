import axios from 'axios'
import * as config  from '../config'

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

export const updateProject = (project) => {
    return axios.put(`${config.BASE_URL}/projects/${project.id}`,
    { ...project })
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const destroyProject = (id) => {
    return axios.delete(`${config.BASE_URL}/projects/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const createItem = (description, projectId) => {
    return axios.post(`${config.BASE_URL}/projects/${projectId}/items`,
    { description: description, iscomplete: false})
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const updateItem = (item, projectId) => {
    return axios.put(`${config.BASE_URL}/projects/${projectId}/items/${item.id}`,
    { ...item })
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const destroyItem = (id, projectId) => {
    return axios.delete(`${config.BASE_URL}/projects/${projectId}/items/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}