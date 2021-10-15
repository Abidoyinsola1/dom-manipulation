// Hidden element onload;
// - submit button
// - table
document.querySelector('#submit-button').style.display = "none"
document.querySelector('table').style.display = "none"

// Full name onclick
// - table appears
document.querySelectorAll('input')[0].addEventListener('click', () => {
    document.querySelector('table').style.display = "table"
})

// input.onkeyup
// - populate correspoding field  on the table
const numberOfInputs = document.querySelectorAll("input")
for (i = 0; i < numberOfInputs.length; i++) {

    numberOfInputs[i].addEventListener("keyup", function () {

        const inputID = this.getAttribute("id")

        switch (inputID) {
            case "fullname":
                document.getElementById("fullnameValue").textContent = this.value
                document.getElementById("fullnameValue").style.borderRight = '.4em solid green';
                document.getElementById("fullnameValue").style.transition = 'border-right .6s ease-in'

                break;
            case "daysOnTrip":
                document.getElementById("daysOnTripValue").textContent = this.value
                document.getElementById("daysOnTripValue").style.borderRight = '.4em solid green';
                document.getElementById("daysOnTripValue").style.transition = 'border-right .6s ease-in'

                break;
            case "amountOnMeal":
                document.getElementById("amountOnMealValue").textContent = `${this.value}`
                document.getElementById("amountOnMealValue").style.borderRight = '.4em solid green';
                document.getElementById("amountOnMealValue").style.transition = 'border-right .6s ease-in'

                break;
            case "flightTicket":
                document.getElementById("flightTicketValue").textContent = `${this.value}`
                document.getElementById("flightTicketValue").style.borderRight = '.4em solid green';
                document.getElementById("flightTicketValue").style.transition = 'border-right .6s ease-in'

                break;
            case "uberCharges":
                document.getElementById("uberChargesValue").textContent = `${this.value}`
                document.getElementById("uberChargesValue").style.borderRight = '.4em solid green';
                document.getElementById("uberChargesValue").style.transition = 'border-right .6s ease-in'

                break;
            case "numOfKmDriven":
                document.getElementById("numOfKmDrivenValue").textContent = this.value
                document.getElementById("numOfKmDrivenValue").style.borderRight = '.4em solid green';
                document.getElementById("numOfKmDrivenValue").style.transition = 'border-right .6s ease-in'

                break;
            case "parkingCharges":
                document.getElementById("parkingChargesValue").textContent = `${this.value}`
                document.getElementById("parkingChargesValue").style.borderRight = '.4em solid green';
                document.getElementById("parkingChargesValue").style.transition = 'border-right .6s ease-in'

                break;
            case "registrationFee":
                document.getElementById("registrationFeeValue").textContent = `${this.value}`
                document.getElementById("registrationFeeValue").style.borderRight = '.4em solid green';
                document.getElementById("registrationFeeValue").style.transition = 'border-right .6s ease-in'

                break;
            case "hotelAcc":
                document.getElementById("hotelAccValue").textContent = `${this.value}`
                document.getElementById("hotelAccValue").style.borderRight = '.4em solid green';
                document.getElementById("hotelAccValue").style.transition = 'border-right .6s ease-in'

                break;
            case "internetSub":
                document.getElementById("internetSubValue").textContent = `${this.value}`
                document.getElementById("internetSubValue").style.borderRight = '.4em solid green';
                document.getElementById("internetSubValue").style.transition = 'border-right .6s ease-in'

                break
            default:
                break;
        }
    })
}

// Internet Sub onclick
// - submit appears
document.getElementById("internetSub").addEventListener('keypress', function () {
    document.querySelector('#submit-button').style.display = "block"
})

// when submit button is clicked:
// - compute and display total expenses and reimbursement

document.getElementById("submit-button").addEventListener('click', function () {
    const numOfDaysOnTrip = document.getElementById("daysOnTripValue").textContent
    const amountSpentOnMeals = document.getElementById("amountOnMealValue").textContent
    const flightTicketCost = document.getElementById("flightTicketValue").textContent
    const amountSpentOnTaxi = document.getElementById("uberChargesValue").textContent
    const numberOfKmDriven = document.getElementById("numOfKmDrivenValue").textContent
    const parkingChargesCost = document.getElementById("parkingChargesValue").textContent
    const registrationFee = document.getElementById("registrationFeeValue").textContent
    const hotelAcc = document.getElementById("hotelAccValue").textContent
    const internetSub = document.getElementById("internetSubValue").textContent

    calcMeals = (daysOnTrip, mealBill) => {
        mealAverage = mealBill / daysOnTrip
        if (mealAverage > 5000) {
            return daysOnTrip * 5000
        } else {
            return mealBill
        }
    }

    calcKm = (kmdriven) => {
        if (kmdriven == 0) {
            return 0
        } else {
            drivingAllowance = kmdriven * 200
            return drivingAllowance
        }
    }

    calcParking = (parkingBill) => {
        if (parkingBill > 6000) {
            return 6000
        } else {
            return parkingBill
        }
    }

    calcHotel = (daysOnTrip, hotelBill) => {
        averageHotelBill = hotelBill / daysOnTrip
        if (averageHotelBill > 15000) {
            return 15000
        } else {
            return hotelBill
        }
    }

    calcUber = (uberCharges) => {
        if (uberCharges > 20000) {
            return 20000
        } else {
            return uberCharges
        }
    }

    calcInternet = (internetBill) => {
        if (internetBill > 10000) {
            return 10000
        } else {
            return internetBill
        }
    }

    calcTotalExpenses = () => {
        return parseInt(amountSpentOnMeals) + parseInt(flightTicketCost) + parseInt(amountSpentOnTaxi) + parseInt((numberOfKmDriven * 200)) + parseInt(parkingChargesCost) + parseInt(registrationFee) + parseInt(hotelAcc) + parseInt(internetSub)
    }

    calcTotalReimbursement = () => {
        return parseInt(calcMeals(numOfDaysOnTrip, amountSpentOnMeals)) + parseInt(calcKm(numberOfKmDriven)) + parseInt(calcParking(parkingChargesCost)) + parseInt(calcHotel(numOfDaysOnTrip, hotelAcc)) + parseInt(calcUber(amountSpentOnTaxi)) + parseInt(calcInternet(internetSub)) + parseInt(flightTicketCost)
    }

    document.getElementById("totalExpensesValue").textContent = `N${calcTotalExpenses()}`
    document.getElementById("reimbursementValue").textContent = `N${calcTotalReimbursement()}`
})