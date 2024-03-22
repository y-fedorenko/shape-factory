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
  const colorName = colorInput.options[colorInput.selectedIndex].text;
  bottomOutput.innerText = ''; //clear output

  if (shape === '0' || color === '0') { //no shape or color selected -> do nothing
    bottomOutput.innerText = 'Please, select shape and color';
    return;
  }
  if (shapesArray.length > 23) {//too many figures -> reset
    enableReset();
    return;
  }
  const shapeObj = new Shape(shape, colorName);
  shapesArray.push(shapeObj);

  const newDiv = document.createElement('div');
  newDiv.classList.add('figure');
  newDiv.classList.add(`${shape}`);
  newDiv.style.backgroundColor = color;
  gridBox.appendChild(newDiv);
  
  createListener(newDiv, shapeObj);
}

function createListener(item, shapeObj) {
  item.addEventListener('click', () => {
    bottomOutput.innerText = 
      `Unit ${shapesArray.lastIndexOf(shapeObj) + 1}: ${shapeObj.getInfo()}`;
  });
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