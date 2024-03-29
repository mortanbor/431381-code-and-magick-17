'use strict';

// массивы данных волшедников
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECONDWIZARD_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// показываем окно выбора волшебника
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// находим шаблон для копирования
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomIndex = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return rand;
};

var getRandomElement = function (arr) {
  return arr[getRandomIndex(0, arr.length)];
};

var NUMBEROFWIZARDS = 4;

var getWizardsDescription = function () {
  var wizards = [];

  for (var i = 0; i < NUMBEROFWIZARDS; i++) {
    wizards.push({
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(SECONDWIZARD_NAMES),
      coatColor: getRandomElement(WIZARD_COATS),
      eyes: EgetRandomElement(EYES_COLORS)
    });
   return wizards;
 };

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
};

var collectFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

collectFragment(getWizardsDescription());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
