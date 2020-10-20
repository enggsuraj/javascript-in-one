//FACTORY FUNCTION
function getBio(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

//CONSTRUCTOR FUNCTION  
function Circle(radius){
  this.radius = radius;
  this.draw = fucntion(){
    console.log('draw');
  }
}

const another = new Circle(1);