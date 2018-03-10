var a = prompt("podaj wartość a");
		b = prompt("podaj wartosc b");

 			value = (a * a) - (2 * a * b) - (b * b);

    if (value > 0) {
        console.log("Wyniki dodatni");
    }
    else if (value < 0) {
        console.log("Wynik ujemny");
    }

    else {
        console.log("Wynik równy zero");
    }
