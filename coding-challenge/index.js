// function salary(ratePerHour, hoursWorked) {
//     if (workersHoursWorked <= 40) {
//         pay = workersHourlyRate * workersHoursWorked
//     }
//     else {
//         extraTime = workersHoursWorked - 40
//         extraPay = extraTime * workersHourlyRate/2
//         pay = workersHourlyRate * workersHoursWorked + extraPay

//     }
//     console.log(pay)
// }

// const workersHourlyRate = prompt('Please enter your rate per hour');
// const workersHoursWorked = prompt('Please enter the number of hours you\'ve worked');
// salary(workersHourlyRate, workersHoursWorked)


// Task # 

// Write a javascript program to calculate the weekly wages of employees of a company. 

// The company pays the normal rate for the first 40 hours worked and then pays the normal rate + 50% extra for every additional hour worked after the 40 hours mark has been reached. 

// e.g if the normal rate is N1000 per hour, for every additional hour worked over the normal 40 hours, the worker gets paid N1500 for each of those hours. 

// Meaning if an employee works for 43 hours, the extra 3 hours will be calculated at N1500 per hour instead of N1000. 

// Your program should accept from the user the hourly rate and the number of hours worked then calculate the salary for that employee


// Write a javascript program that uses a for loop to display the sum of integers in the interval 11- 29
// let numbers = [11, 12, 13, 14, 15]
// for (item in numbers) {
//     console.log(numbers[item])
// }

// Write a javascript program that uses a for loop to display the sum of integers in the interval 11- 29

// let numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];

// }
// alert(sum)

// PSEUDOCODE:
// waterBill = 0
// electricityBill = 0
// totalBill = 0
// if gallonsOfWaterUsed <= 1000
//     waterBill = gallonsOfWaterUsed * 50 
// else 
//     waterBill = gallonsOfWaterUsed * 70

// if electricityUsed <= 300 
//     electricityBill = electricityUsed * 150
// else if electricityUsed >= 301 and electricityUsed <= 600
//     electricityBill = electricityUsed * 200
// else 
//     electricityBill = electricityUsed * 400

// totalBill = electricityBill + waterBill
// return totalBill

bill = (gallonsOfWaterUsed, electricityUsed) => {
    let waterBill = 0;
    let electricityBill = 0;
    let totalBill = 0;
    if (gallonsOfWaterUsed <= 1000) {
        waterBill = gallonsOfWaterUsed * 50;
    } else {
        waterBill = gallonsOfWaterUsed * 70;
    }
    if (electricityUsed <= 300) {
        electricityBill = electricityUsed * 150;
    } else if (electricityUsed >= 301 && electricityUsed <= 600) {
        electricityBill = electricityUsed * 200;
    } else {
        electricityBill = electricityUsed * 400
    }
    totalBill = electricityBill + waterBill
    return totalBill
}

let i = 0;
while (i < 9) {
    const waterUsed = prompt("How many gallons of water did you use?")
    const powerUsed = prompt("How many kwa of power did you use?")
    console.log(`Total bill for customer ${i+1} is ${bill(waterUsed, powerUsed)}`)
    i++
}

