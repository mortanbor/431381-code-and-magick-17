'use strict';

// массивы данных волшедников
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECONDWIZARD_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBERS_OF_WIZARDS = 4;

// показываем окно выбора волшебника
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// находим шаблон для копирования
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomIndex = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};

var getRandomElement = function (array) {
  return array[getRandomIndex(0, array.length)];
};

var getWizardsDescription = function () {
  var wizards = [];

  for (var i = 0; i < NUMBERS_OF_WIZARDS; i++) {
    wizards.push({
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(SECONDWIZARD_NAMES),
      coatColor: getRandomElement(WIZARD_COATS),
      eyes: getRandomElement(EYES_COLORS)
    });
   return wizards;
 };
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;

  return wizardElement;
};

var collectFragment = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

collectFragment(getWizardsDescription());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
