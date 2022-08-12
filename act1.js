// this is student act
var s1;
class student {
    constructor(gname, grade, state){
        this.n = gname;
        this.c = grade;
        this.s = state


    }
    show(){
        console.log(this.n)
        console.log(this.c)
        console.log(this.s)
    }

}

function setup(){
    s1 = new student('vijit', 9, 'mumbai' )
    s1.show()

}

function draw(){
   
}