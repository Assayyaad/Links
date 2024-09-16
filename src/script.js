/** @import { LinkButton, LinkCategory, LinkIcon } from './types.js' */
import { toLinkIcon, toLinkCategory } from './func.js'

fetch('data/social.json')
  .then((res) => res.json())
  .then(async (/** @type {LinkIcon[]} */ linkIcons) => {
    const container = document.querySelector('.nav-center')
    if (!container) throw new Error('No container found for social links')

    const elArr = await Promise.all(linkIcons.map(toLinkIcon))
    for (let i = 0; i < elArr.length; i++) {
      container.appendChild(elArr[i])
    }
  })
  .catch(console.error)

fetch('data/links.json')
  .then((res) => res.json())
  .then(async (/** @type {(LinkCategory | LinkButton)[]} */ linkItems) => {
    const container = document.querySelector('main')
    if (!container) throw new Error('No container found for button links')

    const elArr = await Promise.all(linkItems.map(toLinkCategory))
    for (let i = 0; i < elArr.length; i++) {
      container.appendChild(elArr[i])
    }
  })
  .catch(console.error)
