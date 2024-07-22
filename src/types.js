export {}

/**
 * @typedef {object} LinkIcon
 * @property {string} name
 * @property {string} url
 * @property {string} icon
 * @property {string} [color]
 */

/**
 * @typedef {object} LinkCategory
 * @property {string} category
 * @property {(LinkButton|LinkCategory)[]} items
 */

/**
 * @typedef {LinkButton1|LinkButton2} LinkButton
 */

/**
 * @typedef {object} LinkButton1
 * @property {string} name
 * @property {string} url
 * @property {string} [icon]
 * @property {string} [tag]
 */

/**
 * @typedef {object} LinkButton2
 * @property {string} name
 * @property {string} text
 * @property {string} [icon]
 * @property {string} [tag]
 */
