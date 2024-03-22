'use strict';

import Shape from './Shape.js';

const gridBox = document.querySelector('#grid-box');
const addButton = document.querySelector('button');
const shapeInput = document.querySelector('#shape');
const colorInput = document.querySelector('#color');
const bottomOutput = document.querySelector('p');

let shapesArray = [];
function createShape() {
  const shape = shapeInput.value;
  const color = colorInput.value;
  bottomOutput.innerText = ''; //clear output

  if (shape === '0' || color === '0') { //no shape or color selected -> do nothing
    bottomOutput.innerText = 'Please, select shape and color';
    return;
  }
  if (shapesArray.length > 23) {//too many figures -> reset
    enableReset();
    return;
  }
  const shapeObj = new Shape(shape, color);
  shapesArray.push(shapeObj);

  const newDiv = document.createElement('div');
  newDiv.classList.add('figure');
  newDiv.classList.add(`${shape}`);
  newDiv.style.backgroundColor = getColorByName(color);
  gridBox.appendChild(newDiv);
  
  createListener(newDiv, shapeObj);
}

function createListener(item, shapeObj) {
  item.addEventListener('click', () => {
    bottomOutput.innerText = 
      `Unit ${shapesArray.lastIndexOf(shapeObj) + 1}: ${shapeObj.getInfo()}`;
  });
}

function getColorByName(colorName) {
  let hexColor;
  switch (colorName.toLowerCase()) {
      case 'blue':
          hexColor = '#09f';
          break;
      case 'green':
          hexColor = '#9f0';
          break;
      case 'orange':
          hexColor = '#f90';
          break;
      case 'pink':
          hexColor = '#f09';
          break;
      case 'purple':
          hexColor = '#90f';
          break;
      default:
          hexColor = '#000'; //just in case
  }
  return hexColor;
}

function enableReset() {
  addButton.innerText = 'Reset';
  addButton.style.backgroundColor = '#f00';
  addButton.removeEventListener('click', createShape);
  addButton.addEventListener('click', () => {
    location.reload();
  })
}

addButton.addEventListener('click', createShape);