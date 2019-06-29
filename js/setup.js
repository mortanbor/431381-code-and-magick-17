'use strict';

// массивы данных волшедников
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECONDWIZARD_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBERS_OF_WIZARDS = 4;
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// показываем окно выбора волшебника
var userDialog = document.querySelector('.setup');

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
  }
  return wizards;
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

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');
/* var userSubmitInput = userDialog.querySelector('.setup-submit'); */

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    userDialogClose();
  }
};

var userDialogOpen = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var userDialogClose = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  userDialogOpen();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialogOpen();
  }
});

setupClose.addEventListener('click', function () {
  userDialogClose();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialogClose();
  }
});

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

/* userSubmitInput.addEventListener('click', function () {
    userDialog.submit();
});

userSubmitInput.addEventListener('focus', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialog.submit();
  }
}); */

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var setupPlayer = document.querySelector('.setup-player');
var setupCoatColor = setupPlayer.querySelector('input[name="coat-color"]');
var setupEyesColor = setupPlayer.querySelector('input[name="eyes-color"]');
var setupFireballColor = setupPlayer.querySelector('input[name="fireball-color"]');

var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');

wizardFireball.addEventListener('click', function () {
  var colorFireball = getRandomElement(WIZARD_FIREBALL);

  wizardFireball.style.background = colorFireball;
  setupFireballColor.value = colorFireball;
});

wizardCoat.addEventListener('click', function () {
  var colorOfCoat = getRandomElement(WIZARD_COATS);

  wizardCoat.style.fill = colorOfCoat;
  setupCoatColor.value = colorOfCoat;
});

wizardEyes.addEventListener('click', function () {
  var colorOfEyes = getRandomElement(EYES_COLORS);

  wizardEyes.style.fill = colorOfEyes;
  setupEyesColor.value = colorOfEyes;
});
