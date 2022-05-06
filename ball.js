export class Ball{
    constructor(stageWidth, stageHeight, radius, speed){
        this.radius = radius;
        //공의 반지름
        this.vx = speed;
        // x축 가속도
        this.vy = speed;
        // y축 가속도

        const diameter = this.radius * 2;
        // 지름 = 반지름 * 2
        this.x = diameter + (Math.random() * stageWidth - diameter);
        // random()을 이용한 x 좌표 설정
        this.y = diameter + (Math.random() * stageHeight - diameter);
        // random()을 이용한 y 좌표 설정
    }

    draw(ctx, stageWidth, stageHeight, block){
        this.x += this.vx;
        // x 좌표에 가속도를 더한 값 (공이 이동하기 위한 다음 x좌표)
        this.y += this.vy;
        // y 좌표에 가속도를 더한 값(공이 이동하기 위한 다음 y좌표)

        this.bounceWindow(stageWidth, stageHeight);

        this.bounceBlock(block);

        // 공그리기
        ctx.fillStyle = '#fdd700';
        //공 색 설정
        ctx.beginPath();
        // 도형 그리기 시작
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        // 호 그리기
        // context.arc(x, y, radius, startAngle, endAngle, couterClockwise);
        // x, y, 반지름 startAngle, endAngle, 반전
        // 0 ~ 2PI 각은 원을 의미함

        ctx.fill();
        // 도형 색 채우기 + closePath()
    }

    bounceWindow(stageWidth, stageHeight){
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius; 

        if(this.x <= minX || this.x >= maxX){
            console.log("hi");
            this.vx *= -1;
            this.x += this.vx;
            
        }else if(this.y <= minY || this.y >= maxY){
            console.log("hello");
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    bounceBlock(block){
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        if(this.x > minX && this.x < maxX && this.y > minY && this.y < maxY){
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);
            const min1 = Math.min(x1, x2);
            const min2 = Math.min(y1, y2);
            const min = Math.min(min1, min2);

            if(min == min1){
                this.vx *= -1;
                this.x += this.vx;
            } else if(min == min2){
                this.vy *= -1;
                this.y += this.vy;

            }
        }
    }
}