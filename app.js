import{
    Ball
} from './ball.js';

import{
    Block
} from './block.js';

class app{
    constructor(){
        this.canvas = document.createElement('canvas');
        //document.createElement : 지정한 tagName의 HTML 요소를 만들어 반환함
        // canvas 태그 생성
        this.ctx = this.canvas.getContext('2d');
        //canvas에 2D 랜더링 컨텍스트를 지정
        document.body.appendChild(this.canvas);
        //body에 this.canvas(content) 추가
        window.addEventListener('resize', this.resize.bind(this), false);
        // document view의 크기를 변경할 때 발생, 
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 5);
        this.block = new Block(700, 30, 300, 450);


        window.requestAnimationFrame(this.animate.bind(this));
    }


    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2);
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    }

}

window.onload = () => {
    new app();
};