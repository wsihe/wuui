// import fetch from '../config/fetch'
import * as sider from './tempdata/sider'

const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

var siderList = () => setpromise(sider.siderList)

export { siderList }
