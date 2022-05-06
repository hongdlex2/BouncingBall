export class Block{
    constructor(width, height, x, y){
        // 가로, 세로, x, y 좌표
        this.width = width;
        this.height = height;
        this.x = x;
        // 블럭의 시작점 x 좌표
        this.y = y;
        // 블럭의 시작점 y 좌표
        this.maxX = width + x;
        // 블럭의 끝 점 x 좌표
        this.maxY = height + y;
        // 블럭의 끝 점 Y 좌표
    }

    draw(ctx){
        const xGap = 80;
        const yGap = 80;
        // 입체적인 표현하기 위한 간격
        ctx.fillStyle = '#ff384e';
        // 색지정
        ctx.beginPath();
        // 경로그리기 시작
        ctx.rect(this.x, this.y, this.width, this.height);
        // 블럭 가로도형
        ctx.fill();
        // 경로의 내부 색 체우기
        // fill()메소드 호출시 열린 path는 자동으로 닫힘
        // 따라서 closePaht() 호출하지 않아도 됨


        //도형 아랫면
        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();


        //도형 왼쪽 측면
        ctx.fillStyle = '#9d0919';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
        ctx.fill();
    }
}