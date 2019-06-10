class ColorConsole {

  constructor(color){
    this.color = color
  }

  log(str){
    if(this.color == "Red"){
      console.log('\x1b[31m',str);
    }
    if(this.color == "Yellow"){
       console.log('\x1b[33m',str);
    }
    if(this.color == "Green"){
       console.log('\x1b[32m',str);
    }
  }
}

var colorConsole = new ColorConsole("Green");
colorConsole.log("AttainU University");
var colorConsole = new ColorConsole("Yellow");
colorConsole.log("AttainU University");
var colorConsole = new ColorConsole("Red");
colorConsole.log("AttainU University");