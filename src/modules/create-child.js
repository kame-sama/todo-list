/**
 * 
 * @param {String} type 
 * @param {String} id 
 * @param {Array} classes 
 * @param {String} text 
 * @param {Array} attributes 
 * @returns 
 */

export default function (type, id = '', classes = '', text = '', attributes = '') {
  return {
    type,
    id,
    classes,
    text,
    attributes
  };
}