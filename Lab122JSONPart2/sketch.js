var data;
var barHeight;

function preload(){
  //loading the json data
    loadJSON("population.json", gotData);
}


function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(20);
  barHeight=20;
  textFont();
  fill(0,255,0);
  textAlign(CENTER);
  textSize(15);
  text("Pink = females(down arrow).  Blue = males(up arrow)",200,400)

}
function draw(){
  //useData();
  //calling functions
  sortingMales();
  sortingFemales();
}



function gotData(dataNew){
  data = dataNew;

}
//sorts the number of males from each country
function BubbleSort(){
  var length = data.countrydata.length;
  for(var i = length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (data.countrydata[i].males < data.countrydata[j].males){
        var temp = data.countrydata[i];
        data.countrydata[i] = data.countrydata[j];
        data.countrydata[j] = temp
    }
  }
  console.log("BubbleSort")
  console.log(data);  //logs the new sorted array
}
  }

//sorts the number of females from each country
function insertionSort(){
  for(var i = 1; i<data.countrydata.length;i++){
    for(var j = i; j>0;j--){
      if(data.countrydata[j].females<data.countrydata[j-1].females){
        var temp = data.countrydata[j];
        data.countrydata[j]=data.countrydata[j-1];
        data.countrydata[j-1]=temp;
      }
    }

  }
  console.log("InsertionSort")
  console.log(data) //logs the new sorted array
}
//visual representation
//creates rectangles for each country based on their number of females
function sortingFemales(){
  if(keyCode===DOWN_ARROW){
    insertionSort();
    for(i=0;i<data.countrydata.length;i++){
      fill(255,0,0)
      stroke(0,0,255)
      strokeWeight(0.5);
      rect(i,0,2,data.countrydata[i].females/80000)
    }
  }
}
//visual representation
//creates rectangles for each country based on their number of males
function sortingMales(){
  if(keyCode===UP_ARROW){
    BubbleSort();
    for(i=0;i<data.countrydata.length;i++){
      fill(255,0,0)
      stroke(0,0,255)
      strokeWeight(6);
      rect(i,0,2,data.countrydata[i].males/80000)
    }
}
}
