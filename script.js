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
  let cookingsteps = 7;

  loadRecipeCookingsteps(recipeAmount, recipeIngredients, cookingsteps);
}

function loadRecipeSpagettiBolognese() {
  let recipeAmount = [1, 2, 1, 1, 1, 350, 400, 2, 2, 2, 1, 1, 370, 4];
  let recipeIngredients = [
    "Stk	Zwiebe",
    "Stk	Knoblauchzehen",
    "Stk	Karotte",
    "EL	Petersilie",
    "EL	Olivenöl für den Topf",
    "g Faschiertes (Rindfleisch)",
    "g	Tomatensauce",
    "EL	Oregano",
    "EL	Rotwein",
    "EL	Tomatenmark",
    "Prise Salz",
    "Prise	Pfeffer",
    "g	Spaghetti",
    "l Salzwasser",
  ];

  let cookingsteps = 12;

  loadRecipeCookingsteps(recipeAmount, recipeIngredients, cookingsteps);
}

function loadRecipeBananenbrot() {
  let recipeAmount = [12, 320, 440, 8, 800, 12, 4, 4, 4];
  let recipeIngredients = [
    "Reife Bananen",
    "ml	neutrales Öl (z.B. Sonnenblumenöl",
    "g	brauner Zucker",
    "Eie(r)",
    "g Weizenmehl (Type 405)",
    "TL	Backpuler",
    "Prisen	Salz",
    "Vanilleschoten",
    "Prisen	Zimt",
    "etwas Butter für die Form",
  ];

  let cookingsteps = false;

  loadRecipeCookingsteps(recipeAmount, recipeIngredients, cookingsteps);
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
  let cookingsteps = true;

  loadRecipeCookingsteps(recipeAmount, recipeIngredients, cookingsteps);
}

function loadRecipeOneCookingstep(recipeAmount, recipeIngredients) {
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

function loadRecipeCookingsteps(recipeAmount, recipeIngredients, cookingsteps) {
  let amount = document.getElementById("recipepage-amount").value;

  if (count != false) {
    console.log(count);

    if (amount >= 1 && amount <= 12) {
      document.getElementById("recipepage-load-ingredients-stepone").innerHTML =
        "";
      document.getElementById("recipepage-load-ingredients-steptwo").innerHTML =
        "";

      for (let count = 0; count < recipeAmount.length; count++) {
        let recipeAmountNew = (recipeAmount[count] / 4) * amount;
        recipeAmountNew =
          Math.round((recipeAmountNew + Number.EPSILON) * 100) / 100;

        recipeAmountNew = recipeAmountNew === 0 ? "" : recipeAmountNew;

        if (count < cookingsteps) {
          document.getElementById(
            "recipepage-load-ingredients-stepone"
          ).innerHTML += `
        <tr>
          <td>${recipeAmountNew} ${recipeIngredients[count]}</td>
        </tr>`;
        } else {
          document.getElementById(
            "recipepage-load-ingredients-steptwo"
          ).innerHTML += `
      <tr>
        <td>${recipeAmountNew} ${recipeIngredients[count]}</td>
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
}

function checkNumberOfIngredients() {}

/*  ------------------ Umrechnung auf den Bruch  ------------------ */

/*  ------------------ INCLUDE HTML ------------------ */

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
