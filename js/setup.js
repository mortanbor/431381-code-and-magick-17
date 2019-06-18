'use strict';

// массивы данных волшедников
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECONDWIZARD_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// показываем окно выбора волшебника
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// находим шаблон для копирования
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomIndex = function (arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    var rand = Math.floor(Math.random() * arr.length);
    return rand;
  }
};

var wizards = [
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + SECONDWIZARD_NAMES[getRandomIndex(SECONDWIZARD_NAMES)],
    coatColor: WIZARD_COATS[getRandomIndex(WIZARD_COATS)],
    eyes: eyesColor[getRandomIndex(eyesColor)]
  },
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + SECONDWIZARD_NAMES[getRandomIndex(SECONDWIZARD_NAMES)],
    coatColor: WIZARD_COATS[getRandomIndex(WIZARD_COATS)],
    eyes: eyesColor[getRandomIndex(eyesColor)]
  },
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + SECONDWIZARD_NAMES[getRandomIndex(SECONDWIZARD_NAMES)],
    coatColor: WIZARD_COATS[getRandomIndex(WIZARD_COATS)],
    eyes: eyesColor[getRandomIndex(eyesColor)]
  },
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + SECONDWIZARD_NAMES[getRandomIndex(SECONDWIZARD_NAMES)],
    coatColor: WIZARD_COATS[getRandomIndex(WIZARD_COATS)],
    eyes: eyesColor[getRandomIndex(eyesColor)]
  }
];

var renderWizard = function (wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyes;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
