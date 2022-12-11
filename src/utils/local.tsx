import { isObject } from 'lodash'

const JWT_TOKEN = 'jwtToken'
const USER = 'user'

const local = {
  getS(key: string) {
    const data: any = sessionStorage.getItem(key)
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  },
  setL(key: string, val: any) {
    if (isObject(val)) val = JSON.stringify(val)
    localStorage.setItem(key, val)
  },
  clearL() {
    sessionStorage.clear()
  },

  getL(key: string) {
    const data: any = localStorage.getItem(key)
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  },
  setS(key: string, val: any) {
    if (isObject(val)) val = JSON.stringify(val)
    sessionStorage.setItem(key, val)
  },
  clearS() {
    localStorage.clear()
  },

  clear() {
    this.clearL()
    this.clearS()
  },

  getJwtToken() {
    return this.getL(JWT_TOKEN)
  },
  setJwtToken(val: any) {
    this.setL(JWT_TOKEN, val)
  },

  getUser() {
    return this.getL(USER)
  },
  setUser(val: any) {
    this.setL(USER, val)
  },
}

export default local
