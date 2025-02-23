'use strict';

const expandButton = document.querySelector('.expand-button');
const expandArrow = expandButton.querySelector('.expand-button__img');
const brandsList = document.querySelector('.brands-block__wrapper');
const expandButtonSpan = expandButton.querySelector('.expand-button__text');

expandButton.addEventListener('click', () => {
    if (brandsList.classList.contains('brands-block__wrapper--min')) {
        brandsList.classList.remove('brands-block__wrapper--min');
        expandArrow.classList.add('expand-button__img--rotate');
        expandButtonSpan.textContent = 'Скрыть';
    } else {
        brandsList.classList.add('brands-block__wrapper--min');
        expandArrow.classList.remove('expand-button__img--rotate');
        expandButtonSpan.textContent = 'Показать все';
    }
});