import{
    Ball
} from './ball.js';

import{
    Block
} from './block.js';

class app{
    constructor(){
        this.canvas = document.createElement('canvas');
        // document.createElement : 지정한 tagName의 HTML 요소를 만들어 반환함
        // canvas 태그 생성
        this.ctx = this.canvas.getContext('2d');
        // canvas에 2D 랜더링 컨텍스트를 지정
        document.body.appendChild(this.canvas);
        // body에 this.canvas(content) 추가
        window.addEventListener('resize', this.resize.bind(this), false);
        // document view의 크기를 변경할 때 발생, 
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 5);
        this.ball2 = new Ball(this.stageWidth, this.stageHeight, 30, 5);
        // ball 생성
        this.block = new Block(700, 30, 300, 450);
        // this.block2 = new Block(300, 30, 500, 150);
        // block 생성

        window.requestAnimationFrame(this.animate.bind(this));
        // 새로고침 정도로 이해하면 됨
        // 브라우저에게 수행하기를 원하는 애니메이션을 알리고 
        // 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출함.
        // 이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받음
        // window.requestAnimationFrame(callback);
    }


    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2);
        //scale 변경 scale(x, y) x 2배, y 2배
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));
        // 화면 새로고침
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        //지우개 역할
        // clearRect()메서드는 직사각형 영역의 픽셀을 투명 검정( rgba(0,0,0,0))으로 설정해서 지움 
        //clearRect(x, y, width, height)
        //사각형의 왼쪽 위 모서리(x, y)기준


        this.block.draw(this.ctx);
        // this.block2.draw(this.ctx)
        // Block의 draw 함수를 이용해 block을 그림
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        // this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block2);
        // this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight, this.block2);
        // Ball의 draw 함수를 이용해 ball을 그림
    }

}

window.onload = () => {
    new app();
};


// clone test
// clone test
