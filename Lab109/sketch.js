var numbers = []
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
  for(var i = numbers.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (numbers[i]<numbers[j]){
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
    }
  }
  }
  console.log(numbers)
}
//Selection Sort
var x = 9;
var y = 12;
//swap(x,y);
function selectionSort(numbers){
      for(var i=0; i<numbers.length-1; i++){
          var temp = i;
          for(var j = i + 1; j<numbers.length; j++) {
              if(numbers[j] < numbers[temp])
                  temp = j;
          }

          var smallerNumber = numbers[temp];
          numbers[temp] = numbers[i];
          numbers[i] = smallerNumber;
      }
      console.log(numbers)
  }

//Bubble Sort

function bubbleSort(numbers){
  for(var i = numbers.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (numbers[i]<numbers[j]){
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
      }
    }
  }
  console.log(numbers)
}
//Insertion Sort
function insertionSort(numbers){
  for(var i = 1; i<numbers.length;i++){
    for(var j = i; j>0;j--){
      if(numbers[j]<numbers[j-1]){
        var temp = numbers[j];
        numbers[j]=numbers[j-1];
        numbers[j-1]=temp;
      }
    }
  }
  console.log(numbers)
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
