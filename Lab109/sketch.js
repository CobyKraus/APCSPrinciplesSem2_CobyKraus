var numbers = []
var swap = 0;
var compare = 0;
function randomArray(length){
  for(var i=0;i<length;i++){
    numbers[i] = Math.floor(random(0,100));

  }
//  numbers = []
}
//MY SORT (also bubble sort but that is the one that I knew how to do)
function mySort(numbers){
  var millisecond = millis();
  for(var i = numbers.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      compare++;
      if (numbers[i]<numbers[j]){
        swap++
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
    }
  }
  }
  console.log("+++++++++++++++++++++++++++++++  my sort");
 console.log(numbers)
 console.log("number of milliseconds = " + millisecond);
 console.log("number of swaps  = " +swap);
 console.log("number of compares  = " + compare);
}
//Selection Sort
var x = 9;
var y = 12;
//swap(x,y);
function selectionSort(numbers){
  swap = 0;
  compare=0;
  var newMillisecond = millis();
      for(var i=0; i<numbers.length-1; i++){
          var temp = i;
          for(var j = i + 1; j<numbers.length; j++) {
            compare++
              if(numbers[j] < numbers[temp])
                  temp = j;
          }
          swap++;
          var smallerNumber = numbers[temp];
          numbers[temp] = numbers[i];
          numbers[i] = smallerNumber;
      }

      console.log("+++++++++++++++++++++++++++++++  selection");
     console.log(numbers)
     console.log("number of milliseconds = " + newMillisecond);
     console.log("number of swaps  = " +swap);
     console.log("number of compares  = " + compare);
  }

//Bubble Sort

function bubbleSort(numbers){
  swap=0;
  compare=0;
  var newerMillisecond = millis();
  for(var i = numbers.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      compare++;
      if (numbers[i]<numbers[j]){
        swap++;
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
      }
    }
     //console.log(numbers);
  }
  console.log("+++++++++++++++++++++++++++++++  bubble");
  console.log(numbers)
  console.log("number of milliseconds = " + newerMillisecond);
  console.log("number of swaps  = " +swap);
  console.log("number of compares  = " + compare);
}
//Insertion Sort
function insertionSort(numbers){
  swap=0;
  compare=0;
  var newestMillisecond = millis();
  for(var i = 1; i<numbers.length;i++){
    for(var j = i; j>0;j--){
      compare++
      if(numbers[j]<numbers[j-1]){
        swap++;
        var temp = numbers[j];
        numbers[j]=numbers[j-1];
        numbers[j-1]=temp;
      }
    }

  }
  console.log("+++++++++++++++++++++++++++++++  insertion");
 console.log(numbers)
 console.log("number of milliseconds = " + newestMillisecond);
 console.log("number of swaps  = " +swap);
 console.log("number of compares  = " + compare);
}
function setup(){
  randomArray(500);
  mySort(numbers);
  randomArray(500);
  selectionSort(numbers);
  randomArray(500);
  bubbleSort(numbers);
  randomArray(500);
  insertionSort(numbers);
}
