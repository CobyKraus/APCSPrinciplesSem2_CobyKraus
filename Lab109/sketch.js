//MY SORT (also bubble sort but that is the one that I knew how to do)
var x = 9;
var y = 12;
swap(x,y);
swap(a,b){
  for(var i = swap.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (swap[i]<swap[j]){
        var temp = swap[i];
        swap[i] = swap[j];
        swap[j] = temp
    }
  }
  }
}
//Selection Sort
var x = 9;
var y = 12;
swap(x,y);
swap(a,b){
      var test;
      for(var i=0; i<swap.length; i++){
          var temp = i;
          for(var j = i + 1; j<swap.length; j++) {
              if(swap[j] < swap[temp])
                  temp = j;
          }

          test = array[i];
          array[i] = array[temp];
          array[temp] = test;
      }
  }
}
//Bubble Sort
var x = 9;
var y = 12;
swap(x,y);
swap(a,b){
  for(var i = swap.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (swap[i]<swap[j]){
        var temp = swap[i];
        swap[i] = swap[j];
        swap[j] = temp
    }
  }
  }
}
