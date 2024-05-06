import { toLinkIcon, toLinkCategory } from './func.js'

fetch('data/social.json')
  .then((res) => res.json())
  .then(async (data) => {
    const container = document.querySelector('.nav-center')
    if (!container) throw new Error('No container found for social links')

    const promises = []
    for (let i = 0; i < data.length; i++) {
      promises.push(toLinkIcon(data[i]))
    }

    const elArr = await Promise.all(promises)
    for (let i = 0; i < elArr.length; i++) {
      container.appendChild(elArr[i])
    }
  })
  .catch(console.error)

fetch('data/links.json')
  .then((res) => res.json())
  .then(async (data) => {
    const container = document.querySelector('main')
    if (!container) throw new Error('No container found for button links')

    const promises = []
    for (let i = 0; i < data.length; i++) {
      promises.push(toLinkCategory(data[i]))
    }

    const elArr = await Promise.all(promises)
    for (let i = 0; i < elArr.length; i++) {
      container.appendChild(elArr[i])
    }
  })
  .catch(console.error)
