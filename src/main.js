import vue from 'vue';
import Test from 'src/client/component/Test.vue';

const chessboard = document.getElementById('chessboard');
const ctx = chessboard.getContext('2d');

// 设置棋盘大小
ctx.canvas.width = 500;
ctx.canvas.height = 500;

// 绘制棋盘
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if ((i + j) % 2 === 0) {
      ctx.fillStyle = '#008000';
    } else {
      ctx.fillStyle = '#ffffff';
    }
    ctx.fillRect(i * 50, j * 50, 50, 50);
  }
}

new Vue(Test);
