/**
 * 
 * @param {String} parent 
 * @param  {...Object} children 
 */

export default function (parent, ...children) {
  const parentNode = document.querySelector(parent);

  children.forEach(child => {
    const childNode = document.createElement(child.type);

    if (child.id) childNode.id = child.id;

    if (child.classes) childNode.classList.add(...child.classes);

    if (child.text) childNode.textContent = child.text;

    if (child.attributes) {
      child.attributes.forEach(attribute => {
        childNode.setAttribute(attribute.name, attribute.value);
      });
    }

    parentNode.appendChild(childNode);
  });
}