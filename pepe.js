var CurrentLT, Exceso, Morbius;

CurrentLT = Number(window.prompt("ingrese litros"));
while (isNaN(CurrentLT)) {
    window.alert("ERROR ")
    CurrentLT = Number(window.prompt("ingrese litros"));
}


Morbius = Number(window.prompt("Select 1 to MORB or Select 2 to be MORBED"));

switch (Morbius) {
    case 1:
        while (CurrentLT < 10) {
            CurrentLT += 1
            window.prompt("Litros actuales : " + String(CurrentLT));
        }

        if (CurrentLT > 10) {
            Exceso = CurrentLT - 10;
            CurrentLT = CurrentLT - Exceso;
            window.alert("Exceso eliminado: " + String(Exceso) + "Litros actuales: " + String(CurrentLT));
        }
        break;

    case 2:
        while (CurrentLT < 10 & CurrentLT > 0) {
            CurrentLT -= 1
            window.prompt("Litros actuales : " + String(CurrentLT));
        }

        if (CurrentLT < 0) {
            Exceso = 0 - CurrentLT;
            CurrentLT = CurrentLT + Exceso;
            window.alert("Exceso eliminado: " + String(Exceso) + "Litros actuales: " + String(CurrentLT));
        }
        break;


}






