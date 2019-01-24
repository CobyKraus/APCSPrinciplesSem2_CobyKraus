var data;
var barHeight;
function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(20);
  barHeight=20;



}
function draw(){
  //useData();
  fill(0,255,0);
  insertionSort();


}
function preload(){
    loadJSON("population.json", gotData);
}

function gotData(dataNew){
  data = dataNew;
}

function BubbleSort(){
  var length = data.countrydata.length;
  for(var i = length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (data.countrydata[i].males < data.countrydata[j].males){
        var temp = data.countrydata[i].males;
        data.countrydata[i].males = data.countrydata[j].males;
        data.countrydata[j].males = temp
      }
    }
  }
  console.log(data.countrydata.males);
}

function insertionSort(dataNew){
  for(var i = 1; i<data.countrydata.length;i++){
    for(var j = i; j>0;j--){
      if(data.countrydata[j].females<data.countrydata[j-1].females){
        var temp = data.countrydata[j].males;
        data.countrydata[j].males=data.countrydata[j-1].males;
        data.countrydata[j-1].males=temp;
      }
    }

  }
  console.log(data.countrydata.males);
}
