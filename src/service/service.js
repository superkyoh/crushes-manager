import axios from 'axios'

export const getCrushs = () => axios.get(`https://crush-management.herokuapp.com/api/crushs`)

export const newCrush = crush => axios.post(`https://crush-management.herokuapp.com/api/crushs`, {crush})