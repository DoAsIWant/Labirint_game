function CreateLabirint(n,m){
    this.arr = [];

    for(let i =0 ;i<n; i++){
        this.arr[i] = [];
        for(let j =0; j<m;j++){
            this.arr[i][j] = Math.floor(getNumber());
        }
    }

    this.arr[0][0] = 1;
    this.arr[n-1][m-1] = 2;

}


function getNumber(){
    let number = Math.random();

    return number > 0.5? 3 : 4;
}

let arr = new CreateLabirint(2,3);
console.log(arr);