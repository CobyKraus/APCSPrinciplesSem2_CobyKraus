var data;
var barHeight;

function preload(){
    loadJSON("population.json", gotData);
}


function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(20);
  barHeight=20;
  BubbleSort();
}
function draw(){
  //useData();
  for(i=0;i<data.countrydata.length;i++){
    fill(255,0,0)
    rect(i,200,2,i)

}
}


function gotData(dataNew){
  data = dataNew;

}

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
  }
  console.log("BubbleSort")
  console.log(data);

  }


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
  console.log(data)
}
