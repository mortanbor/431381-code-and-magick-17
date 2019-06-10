'use strict';

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // начальные координаты облака x
var CLOUD_Y = 10; // начальные координаты облака y
var GAP = 10; // отступ между облаком и тенью
var FONT_GAP = 16; // размер шрифта
var BAR_WIDTH = 40; // ширина колонки гистограммы
var BAR_GAP = 50; // расстояние между колонками
var BAR_MAXHEIGHT = 150; // максимальная высота колонки
var MY_NAME = 'Вы';

// рисуем облако
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// максимальное время в массиве
var getMaxTime = function (times) {
  var maxTime = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

// получение цвета для колонки игрока, кроме MY_NAME
function randomColor() {
  return 'rgba(0, 0, 255, ' + (Math.random() + 0.2) + ')';
}

// ctx  - контекст канваса из файла game.js
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, CLOUD_Y + FONT_GAP + GAP * 2);

  for (var i = 0; i < names.length; i++) {
    var barX = CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i; // координаты колонки гистограммы X
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], barX, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3));
    ctx.fillText(Math.round(times[i]), barX, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP * 4 - BAR_MAXHEIGHT);
    ctx.fillStyle = (names[i] === MY_NAME) ? 'rgba(255, 0, 0, 1)' : randomColor();
    ctx.fillRect(barX, CLOUD_Y + CLOUD_HEIGHT - (GAP * 4), BAR_WIDTH, -(BAR_MAXHEIGHT * times[i]) / getMaxTime(times));
  }
};
