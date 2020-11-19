export class User {
    constructor(startX, startY,mass){
        this.x = startX;
        this.y = startY;
        this.mass = mass;

    }
    right(){
        if((this.x > this.mass[this.y].length - 1)&&(mass[startX][startY] === 0)){
            return;
        }
        this.y++;

    }
    left(){
        if((this.x > this.mass[this.y].length - 1) &&(mass[startX][startY] === 0)){
            return;
        }
        this.y--;
    }

    up(){
        if((this.y > this.mass.length - 1) &&(mass[startX][startY] === 0)){
            return;
        }
        this.x++;
    }

    down(){
        if((this.y > this.mass.length - 1) &&(mass[startX][startY] === 0)){
            return;
        }
        this.x--;
    }


}
