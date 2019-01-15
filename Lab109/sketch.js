var numbers = []
var swap = 0;
var compare = 0;
function randomArray(length){
  for(var i=0;i<length;i++){
    newNumbers=Math.floor(random(1,n))
    array.push(numbers);
  }
  numbers = []
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
  console.log(numbers);
  console.log(millisecond);
  console.log(swap);
  console.log(compare);
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

      console.log(numbers)
      console.log(newMillisecond);
      console.log(swap);
      console.log(compare);
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
  }

  console.log(numbers)
  console.log(newerMillisecond);
  console.log(swap);
  console.log(compare);
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
  console.log(numbers)
  console.log(newestMillisecond);
  console.log(swap);
  console.log(compare);
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
