function myFunction() {
         var x;
      x = document.getElementById("house").value;
      var y = ((x - 32) * 5/9).toFixed(4) + " °C";
      var out = document.getElementById("result").innerHTML= y
      
}


