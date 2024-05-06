/** @typedef {import('./types.js').LinkIcon} LinkIcon */
/** @typedef {import('./types.js').LinkCategory} LinkCategory */
/** @typedef {import('./types.js').LinkButton} LinkButton */

/**
 * @param {LinkIcon} data
 * @returns {Promise<HTMLAnchorElement>}
 */
export async function toLinkIcon({ name, url, icon, colour }) {
  const a = document.createElement('a')
  a.className = 'brand'
  a.href = url
  a.target = '_blank'
  a.setAttribute('aria-label', name)

  const span = document.createElement('span')
  span.className = 'iconify-inline'

  if (colour) span.style.color = colour
  else {
    const res = await fetch('../data/default.json')
    const { colour } = await res.json()
    span.style.color = colour
  }

  span.setAttribute('data-icon', icon)
  a.appendChild(span)

  return a
}

/**
 * @param {LinkCategory|LinkButton} data
 * @returns {Promise<HTMLElement>}
 */
export async function toLinkCategory(data) {
  // @ts-ignore
  const { category, items } = data
  if (!category) {
    // @ts-ignore
    return await toLinkButton(data)
  }

  const section = document.createElement('section')
  const details = document.createElement('details')
  const summary = document.createElement('summary')
  summary.className = 'text-center'
  summary.textContent = category

  details.appendChild(summary)
  section.appendChild(details)

  for (let j = 0; j < items.length; j++) {
    const data = items[j]
    let el

    if (isCategory(data)) {
      // @ts-ignore
      el = await toLinkCategory(data)
      details.appendChild(el)
      continue
    } else {
      // @ts-ignore
      el = await toLinkButton(data)
      details.appendChild(el)
    }
    details.appendChild(el)
  }

  return section
}

/**
 * @param {LinkButton} data
 * @returns {Promise<HTMLDivElement>}
 */
// @ts-ignore
export async function toLinkButton({ name, url, text, icon, tag }) {
  const div = document.createElement('div')
  div.className = 'row'

  const col = document.createElement('div')
  col.className = `col ${tag ? 'link ' : ''}is-center`
  if (url) {
    const a = document.createElement('a')
    a.className = 'button outline secondary'
    a.href = url
    a.target = '_blank'

    if (icon) {
      const span = document.createElement('span')
      span.className = 'iconify-inline'
      span.setAttribute('data-icon', icon)

      a.appendChild(span)
    }

    const textNode = document.createTextNode(name)
    a.appendChild(textNode)

    if (tag) {
      const tagSpan = document.createElement('span')
      tagSpan.className = 'tag is-small bd-success text-success'
      tagSpan.textContent = tag

      a.appendChild(tagSpan)
    }

    col.appendChild(a)
  } else if (text) {
    const b = document.createElement('button')
    b.className = 'button outline secondary'
    b.addEventListener('click', () => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert(`تم النسخ إلى الحافظة "${text}"`)
        })
        .catch(console.error)
    })

    if (icon) {
      const span = document.createElement('span')
      span.className = 'iconify-inline'
      span.setAttribute('data-icon', icon)

      b.appendChild(span)
    }

    const textNode = document.createTextNode(name)
    b.appendChild(textNode)

    if (tag) {
      const tagSpan = document.createElement('span')
      tagSpan.className = 'tag is-small bd-success text-success'
      tagSpan.textContent = tag

      b.appendChild(tagSpan)
    }

    col.appendChild(b)
  }

  div.appendChild(col)

  return div
}

/**
 * @param {LinkCategory | LinkButton} data
 * @returns {boolean}
 */
export function isCategory(data) {
  return data.hasOwnProperty('category')
}
