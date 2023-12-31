export default function print({
  parent,
  type,
  id,
  classes,
  content,
  attributes,
}) {
  const parentNode = document.querySelector(parent);
  const childNode = document.createElement(type);

  if (id) childNode.id = id;

  if (classes) childNode.className = classes;

  if (content) childNode.innerHTML = content;

  if (attributes) {
    attributes.forEach((attribute) => {
      childNode.setAttribute(attribute.name, attribute.value);
    });
  }

  parentNode.appendChild(childNode);
}
