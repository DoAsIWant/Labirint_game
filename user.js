export class User {
    constructor(startX, startY,mass){
        this.x = startX;
        this.y = startY;
        this.mass = mass;

    }
    right(){
        if((this.x > this.mass[this.y].length - 1) || (this.mass[this.x][this.y+1] === 3)){
            return;
        }
        this.y++;

    }
    left(){
        if((this.x > this.mass[this.y].length - 1) || (this.mass[this.x][this.y-1] === 3)){
            return;
        }
        this.y--;
    }

    up(){
        
        if(( this.x-1<0) && (this.y > this.mass.length - 1) || (this.mass[this.x-1][this.y] === 3)){
            return;
        }
        this.x--;
    }

    down(){
        if(( this.x+1<0) && (this.y > this.mass.length - 1) || (this.mass[this.x+1][this.y] === 3)){
            return;
        }
        this.x++;
    }


}
