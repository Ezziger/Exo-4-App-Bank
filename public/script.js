let btnAddCredit = document.getElementById("btnAddCredit")
let btnAddDebit = document.getElementById("btnAddDebit")

let addCreditText = document.getElementById("addCreditText")
let addCreditAmount = document.getElementById("addCreditAmount")

let addDebitText = document.getElementById("addDebitText")
let addDebitAmount = document.getElementById("addDebitAmount")


// BOUTON LAST AND FIRST NAME
let btnAddName = document.getElementById("btnAddName")

btnAddName.addEventListener("click", function () {
    displayName();
    let nameList;
    let nameText = localStorage.getItem("Name");
    if (nameText == null) {
        nameList = []
    } else {
        nameList = JSON.parse(nameText)
    }

    let addLastName = document.getElementById("addLastName")
    let addFirstName = document.getElementById("addFirstName")

    if (addLastName.value !== "", addFirstName.value !== "") {
        let dataLocalStorage = {
            lastName: addLastName.value,
            firstName: addFirstName.value
        }
        nameList.push(dataLocalStorage);
        localStorage.setItem("Name", JSON.stringify(nameList))
    }
    displayName();
})

// AFFICHER LAST AND FIRST NAME
displayName = () => {
    let nameList;
    let nameText = localStorage.getItem("Name");
    if (nameText == null) {
        nameList = []
    } else {
        nameList = JSON.parse(nameText)
    }
    let html = "";
    nameList.forEach((element) => {
        html += `<div class="row">
                    <div class="col-lg-2 offset-lg-5 col-md-4 offset-md-2 col-6 text-center">
                        <h5>${element.lastName}</h5>
                        <h5>${element.firstName}</h5>
                        <a href="/newcustomer" class="detailsBtn"><button class="btn btn-primary">Voir la fiche client</button></a>
                    </div>
                </div>`
    })

    let displayNewCustomerId = document.getElementById("displayNewCustomerId")
    if (nameList.length != 0) {
        displayNewCustomerId.innerHTML = html;
    } else {
        displayNewCustomerId.innerHTML = `<div class="row">
                                            <div class="col-lg-2 offset-lg-5 col-md-4 offset-md-2 col-6 text-center">
                                                <p><em>Pas de client</em></p>
                                            </div>
                                        </div>`
    }
}

displayName();


// BOUTON LAST AND FIRST NAME
let customerDetails = document.getElementById("customerDetails")

customerDetails.addEventListener("click", function () {
    displayName();
    let nameList;
    let nameText = localStorage.getItem("Name");
    if (nameText == null) {
        nameList = []
    } else {
        nameList = JSON.parse(nameText)
    }

    let addLastName = document.getElementById("addLastName")
    let addFirstName = document.getElementById("addFirstName")

    if (addLastName.value !== "", addFirstName.value !== "") {
        let dataLocalStorage = {
            lastName: addLastName,
            firstName: addFirstName
        }
        nameList.push(dataLocalStorage);
        localStorage.setItem("Name", JSON.stringify(nameList))
    }
    displayName();
})

const customersList = [
    {
        lastName: "SPECIMEN",
        firstName: "Christophe",
        credit: "Salaire 1200€",
        debit: ["Facture EDF 150€", "Facture Eau 50€"],
        accountBalance: 1000,
    },
    {
        lastName: "DUPONT",
        firstName: "Francoise",
        credit: "Prime 1300€",
        debit: ["Assurance Voiture 100€", "Facture Gaz 50€"],
        accountBalance: 1150,
    }
]

localStorage.setItem('client', JSON.stringify(customersList))




// BOUTON CREDIT
// AFFICHER CREDIT


// BOUTON DEBIT
// AFFICHER DEBIT
