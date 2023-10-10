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

function loadRecipe() {
  let recipeAmount = [1, 6, 1, 70, 3, 1, 1, 2, 5, 1, 2, 2];
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
  document.getElementById("recipepage-load-ingredients").innerHTML = "";

  for (let count = 0; count < recipeAmount.length; count++) {
    let recipeAmountNew = (recipeAmount[count] / 4) * amount;
    let recipeAmountDecimal = divideDecimal(recipeAmountNew);

    document.getElementById("recipepage-load-ingredients").innerHTML += `
      <tr>
        <td>${recipeAmountDecimal} ${recipeIngredients[count]}</td>
      </tr>`;
  }

  // Umrechnung auf den Bruch
  // ½ = &#xBD;
  // ¼ = &#xbc;
  // ¾ = &#xbe;

  function divideDecimal(decimal) {
    const wholeNumber = Math.floor(decimal);
    const fractionalPart = decimal - wholeNumber;
    let fraction = "";
    if (decimal % 1 !== 0) {
      if (fractionalPart <= 0.25) {
        fraction = "&#xbc;";
      } else if (fractionalPart <= 0.5) {
        fraction = "&#xBD;";
      } else if (fractionalPart <= 0.75) {
        fraction = "&#xbe;";
      }
    }

    if (wholeNumber === 0) {
      return fraction;
    } else if (fraction) {
      return `${wholeNumber} ${fraction}`;
    } else {
      return wholeNumber.toString();
    }
  }
}
