// const fullName = prompt("Please enter your full name");
// const numOfDaysOnTrip = prompt("How many days did you spend on the trip?");
// const amountSpentOnMeals = prompt("How much did you spend on meals?");
// const flightTicketCost = prompt("How much did you spend on ticket?");
// const amountSpentOnTaxi = prompt("How much did you spend on taxi?");
// const numberOfKmDriven = prompt("How many kilometres did you drive on the trip?");
// const parkingCharges = prompt("How much did you spend on parking?");
// const registrationFee = prompt("How much did you spend on registration?");
// const hotelAcc = prompt("How much did you spend on hotel accomodation?");
// const internetSub = prompt("How much did you spend on internet subscription?");

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

calcHotel = (hotelBill) => {
    if (hotelBill > 15000) {
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

calcInternet = (internetSub) => {
    if (internetSub > 10000) {
        return 10000
    } else {
        return internetSub
    }
}

calcTotalExpenses = () => {

}
// console.log(calcMeals(numOfDaysOnTrip, amountSpentOnMeals))
// console.log(`Hello ${fullName}, here is a summary of your trip\nYou spent ${numOfDaysOnTrip} days on your last trip\nAmount on meal: N${amountSpentOnMeals}\nFlight Ticket: N${flightTicketCost}\nAmount spent on UBER: N${amountSpentOnTaxi}\nNumber of kilometres driven: ${numberOfKmDriven}\nParking Charges: N${parkingCharges}\nRegistration fee: N${registrationFee}\nHotel Accomodation: N${hotelAcc}\nInternet Subscription: N${internetSub}\nYour total expenses for the trip is: N${calcTotalExpenses()}\nYour total travel allowance is: N${calcTotalReimbursement()}`)

// The person's company uses the following policy to reimburse travel expenses.
// a) Maximum of N5,000 per day for meals
// b) Maximum of N6,000 for parking fees
// c) Maximum of N20,000 for UBER rides
// d) Maximum of N15,000 per night for hotel accommodation.
// e) if a private vehicle was used, N200 per km driven.
// f) Maximum of N10,000 for internet subscription.

// Your program should calculate/display the following;
// The person’s full name
// Display all the details inputted by the user(Full name, num of days, ticket cost…). 
// Ensure each one is on a new line.
// The total expenses incurred on the trip.
// The amount that will be reimbursed to the business person by the company.

// Create the following functions to help you calculate the expenses
// calcMeals - calculates and returns the amount to be reimbursed to the person for meals. If the average exceeds the max allowed per day, return *max allowed x number of days*.
// calcKm - Calculates and returns the amount to be reimbursed for km’s driven if a private vehicle was used. If the user inputted 0, just return 0 from the function, no need to calculate.
// calcParking - Calculates and returns the amount to be reimbursed for parking fees. If it exceeds the max allowed return max allowed.
// calcHotel - calculates and returns the amount to be reimbursed for hotel cost. If the average exceeds the max allowed per day, max allowed x number of days*.
// calcUber - Calculates and returns the amount to be reimbursed for UBER rides. If it exceeds the max allowed return max allowed.
// calcInternet - Calculates and returns the amount to be reimbursed for an Internet subscription. If it exceeds the max allowed return max allowed
// calcTotalExpenses - Calculates and returns the total amount the person spent on the trip
// calcTotalReimbursement - Calculates and returns the total amount to be reimbursed to the person.

// Notes:
// Do not accept negative numbers. Do not accept a number less than one for the number of days on the trip(Print a message saying “Days on trip cannot be less than one”)
