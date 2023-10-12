function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

/*  ------------------ SEND MAIL ------------------ */

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xjvqpqkk", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

/*  ------------------ RESPONSIVE MENU ------------------ */

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*  ------------------ RECIPEPAGE LOAD INGREDIENTS  ------------------ */

function loadRecipeBigMac() {
  let recipeAmount = [
    2.4, 0.4, 0.4, 2.4, 200, 200, 0, 0.2, 0.2, 2.4, 3.2, 0.8, 2.4, 0.8, 0.8,
    0.4, 0.8,
  ];
  let recipeIngredients = [
    "Hamburgerbrötchen mit Sesam",
    "kleiner	Eisbergsalat",
    "Pck	Schmelkäsescheibe(n) (Chester)",
    "Gewürzgurke(n)",
    "g Hackfleisch gemischt",
    "g Rinderhackfleisch",
    "Salz und Pfeffer",
    "Glas	Salatcreme (Miracel Whip)",
    "Tube(n)	Mayonnaise",
    "EL	French Dressing mit wenig Dill",
    "EL	Gewürgurke(n), fein gewürfelt",
    "TL	Zucker",
    "EL	Zwiebel(n), getrocknete, fein gewürfelt",
    "TL	Essig",
    "TL	Tomatenketchup",
    "TL	Salz",
    "EL	Gurkenrelish, süs-sauer",
  ];

  let amount = document.getElementById("recipepage-amount").value;

  if (amount >= 1 && amount <= 12) {
    document.getElementById("recipepage-load-ingredients-salad").innerHTML = "";
    document.getElementById("recipepage-load-ingredients-sauce").innerHTML = "";

    for (let count = 0; count < recipeAmount.length; count++) {
      let recipeAmountNew = (recipeAmount[count] / 4) * amount;
      let recipeAmountDecimal = divideDecimal(recipeAmountNew);

      if (count < 7) {
        document.getElementById(
          "recipepage-load-ingredients-salad"
        ).innerHTML += `
        <tr>
          <td>${recipeAmountDecimal} ${recipeIngredients[count]}</td>
        </tr>`;
      } else {
        document.getElementById(
          "recipepage-load-ingredients-sauce"
        ).innerHTML += `
      <tr>
        <td>${recipeAmountDecimal} ${recipeIngredients[count]}  ${recipeAmountNew}</td>
      </tr>`;
      }
    }
    let element = document.getElementById("recipepage-amount");
    element.style.backgroundColor = "var(--white)";
    element.style.borderColor = "var(--green)";
  } else {
    let element = document.getElementById("recipepage-amount");
    element.style.backgroundColor = "var(--red)";
    element.style.borderColor = "var(--red)";
    alert("Bitte eine Zahl zwischen 1 und 12 eingeben.");
  }
}

function loadDailyRecipe() {
  let recipeAmount = [1, 6, 1, 1, 3, 1, 1, 2, 5, 1, 2, 2];
  let recipeIngredients = [
    "Kopfsalat(e)",
    "kleine Tomaten(n)",
    "kleine Paprikaschote(n), rote",
    "Dose Mais",
    "EL Weißweinessig",
    "EL Balsamico",
    "TL	Senf, mittelscharfer",
    "TL	Zucker",
    "TL	Salz",
    "Prise(n)	Pfeffer",
    "EL	Olivenöl",
    "EL	Wasser, kaltes",
  ];

  let amount = document.getElementById("recipepage-amount").value;

  if (amount >= 1 && amount <= 12) {
    document.getElementById("recipepage-load-ingredients").innerHTML = "";

    for (let count = 0; count < recipeAmount.length; count++) {
      let recipeAmountNew = (recipeAmount[count] / 4) * amount;
      let recipeAmountDecimal = divideDecimal(recipeAmountNew);

      document.getElementById("recipepage-load-ingredients").innerHTML += `
      <tr>
        <td>${recipeAmountDecimal} ${recipeIngredients[count]}</td>
      </tr>`;
    }
    let element = document.getElementById("recipepage-amount");
    element.style.backgroundColor = "var(--white)";
    element.style.borderColor = "var(--green)";
  } else {
    let element = document.getElementById("recipepage-amount");
    element.style.backgroundColor = "var(--red)";
    element.style.borderColor = "var(--red)";
    alert("Bitte eine Zahl zwischen 1 und 12 eingeben.");
  }
}

//------------- Umrechnung auf den Bruch und diesen Anzeigen lassen -------------
function divideDecimal(decimal) {
  // Schritt 1: Ermitteln der ganzen Zahlkomponente
  const wholeNumber = Math.floor(decimal);

  // Schritt 2: Ermitteln der Nachkommastellenkomponente
  const fractionalPart = decimal - wholeNumber;

  // Schritt 3: Initialisieren der Fraktionszeichenkette
  let fraction = "";

  // Schritt 4: Überprüfen, ob die Dezimalzahl Nachkommastellen hat
  if (decimal % 1 !== 0) {
    // Schritt 5: Bestimmen der Fraktionskomponente basierend auf fractionalPart
    const fractionValue = Math.round(fractionalPart * 4);
    if (fractionValue === 1) {
      fraction = "&#xbc;"; // "&#xbc;" entspricht dem Bruch "¼"
    } else if (fractionValue === 2) {
      fraction = "&#xBD;"; // "&#xBD;" entspricht dem Bruch "½"
    } else if (fractionValue === 3) {
      fraction = "&#xbe;"; // "&#xbe;" entspricht dem Bruch "¾"
    }
  }

  // Schritt 6: Überprüfen, ob es keine ganze Zahl gibt
  if (wholeNumber === 0) {
    // In diesem Fall wird nur die Fraktion zurückgegeben
    return fraction;
  }

  // Schritt 7: Überprüfen, ob es sowohl eine ganze Zahl als auch eine Fraktion gibt
  else if (fraction) {
    // In diesem Fall werden ganze Zahl und Fraktion kombiniert
    // und als Zeichenkette zurückgegeben, getrennt durch ein Leerzeichen
    return `${wholeNumber} ${fraction}`;
  }

  // Schritt 8: Wenn weder ganze Zahl noch Fraktion vorhanden sind
  else {
    // Die ganze Zahl wird in eine Zeichenkette umgewandelt und zurückgegeben
    return wholeNumber.toString();
  }
}
