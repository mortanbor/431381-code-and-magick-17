'use strict';

var CLOUD_WIDTH = 420; //ширина облака
var CLOUD_HEIGHT = 270; //высота облака
var CLOUD_X = 100; // начальные координаты x
var CLOUD_Y = 10; // начальные координаты y
var GAP = 10; // отступ между облаком и тенью
var FONT_GAP = 16; // размер шрифта
var BAR_WIDTH = 40; // ширина колонки гистограммы
var BAR_GAP = 50; // расстояние между колонками
var barHeight = 150; // высота одного столбца гистограммы временно

// рисуем облако
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

//ctx  - контекст канваса из файла game.js
window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, CLOUD_Y + FONT_GAP + GAP * 2);

//  код для отображения имени и столбца гистограммы до написания функции
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + BAR_GAP * 1 + BAR_WIDTH * 0, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3));
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP * 1 + BAR_WIDTH * 0, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3) - FONT_GAP - barHeight, BAR_WIDTH, barHeight);

  ctx.fillStyle = '#000';
  ctx.fillText('Маша', CLOUD_X + BAR_GAP * 2 + BAR_WIDTH * 1, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3));
  ctx.fillStyle = 'blue';
  ctx.fillRect(CLOUD_X + BAR_GAP * 2 + BAR_WIDTH * 1, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3) - FONT_GAP - barHeight, BAR_WIDTH, barHeight);

  ctx.fillStyle = '#000';
  ctx.fillText('Саша', CLOUD_X + BAR_GAP * 3 + BAR_WIDTH * 2, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3));
  ctx.fillStyle = 'green';
  ctx.fillRect(CLOUD_X + BAR_GAP * 3 + BAR_WIDTH * 2, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3) - FONT_GAP - barHeight, BAR_WIDTH, barHeight);

  ctx.fillStyle = '#000';
  ctx.fillText('Женя', CLOUD_X + BAR_GAP * 4 + BAR_WIDTH * 3, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3));
  ctx.fillStyle = 'pink';
  ctx.fillRect(CLOUD_X + BAR_GAP * 4 + BAR_WIDTH * 3, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3) - FONT_GAP - barHeight, BAR_WIDTH, barHeight);


  /* var players = ['Вы', 'Маша', 'Саша', 'Женя'];

  for (var i = 0; i < players.length; i++) {
      if (i === 0) {
        ctx.fillStyle = '#000';
        ctx.fillText(players[i], CLOUD_X + BAR_GAP * (i++) + BAR_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3));
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(CLOUD_X + BAR_GAP * (i++) + BAR_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3) - FONT_GAP - barHeight, BAR_WIDTH, barHeight);
      }
          ctx.fillStyle = '#000';
          ctx.fillText(players[i], CLOUD_X + BAR_GAP * (i++) + BAR_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3));
          ctx.fillStyle = 'blue';
          ctx.fillRect(CLOUD_X + BAR_GAP * (i++) + BAR_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - (GAP * 3) - FONT_GAP - barHeight, BAR_WIDTH, barHeight);
  }
    */
};
