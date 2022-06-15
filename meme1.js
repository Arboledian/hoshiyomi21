// JavaScript source code
 function capturar(){
        console.log("capturado");
          function Movie(name, genre, year) {
              this.name = name;
              this.genre = genre;
              this.year = year;
        }
        var capturename=document.getElementById("name").value;
        console.log(capturename);
        var capturegenre=document.getElementById("genre").value;
        console.log(capturegenre);
        var captureyear = document.getElementById("year").value;
        console.log(captureyear);
        //var suejeto= new Persona("Kurt", 27); //captura estatica
        // varialble local var sujeto= new Persona(capturarnombre, capturaredad);
        sujeto= new Movie(capturename, capturegenre, captureyear);//variable global
        //console.log(sujeto);
        agregar();
      }
      var basedatos=[];
      function agregar(){
        basedatos.push(sujeto)
        console.log(basedatos);
        document.getElementById("tabla").innerHTML += '<tbody><td>' + sujeto.name + '</td><td>' + sujeto.genre + '</td><td>' + sujeto.year + '</td></tbody>';
      };