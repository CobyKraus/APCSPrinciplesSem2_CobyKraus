var numbers = []
var swap = 0;

function randomArray(){
  var a = random(0,20);
  var b = random(0,20);
  var c = random(0,20);
  var d = random(0,20);
  var e = random(0,20);
  var f = random(0,20);
  var g = random(0,20);
  var h = random(0,20);
  numbers = [a,b,c,d,e,f,g,h]
}
//MY SORT (also bubble sort but that is the one that I knew how to do)
function mySort(numbers){
  var millisecond = millis();
  for(var i = numbers.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (numbers[i]<numbers[j]){
        swap++
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
    }
  }
  }
  console.log(numbers);
  console.log(millisecond);
  console.log(swap);
}
//Selection Sort
var x = 9;
var y = 12;
//swap(x,y);
function selectionSort(numbers){
  swap = 0;
  var millisecond = millis();
      for(var i=0; i<numbers.length-1; i++){
          var temp = i;
          for(var j = i + 1; j<numbers.length; j++) {
              if(numbers[j] < numbers[temp])
                  temp = j;
          }
          swap++;
          var smallerNumber = numbers[temp];
          numbers[temp] = numbers[i];
          numbers[i] = smallerNumber;
      }
      console.log(numbers)
      console.log(millisecond);
      console.log(swap);
  }

//Bubble Sort

function bubbleSort(numbers){
  swap=0;
  var millisecond = millis();
  for(var i = numbers.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (numbers[i]<numbers[j]){
        swap++;
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
      }
    }
  }
  console.log(numbers)
  console.log(millisecond);
  console.log(swap);
}
//Insertion Sort
function insertionSort(numbers){
  swap=0;
  var millisecond = millis();
  for(var i = 1; i<numbers.length;i++){
    for(var j = i; j>0;j--){
      if(numbers[j]<numbers[j-1]){
        swap++;
        var temp = numbers[j];
        numbers[j]=numbers[j-1];
        numbers[j-1]=temp;
      }
    }
  }
  console.log(numbers)
  console.log(millisecond);
  console.log(swap);
}
function setup(){
  randomArray();
  mySort(numbers);
  randomArray();
  selectionSort(numbers);
  randomArray();
  bubbleSort(numbers);
  randomArray();
  insertionSort(numbers);
}
