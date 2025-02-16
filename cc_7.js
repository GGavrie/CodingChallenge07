//  Task 1 Function Declaraition 
function calculateInvoice(subtotal, taxRate, discount) {
    // Calculate tax amount
    const taxAmount = subtotal * taxRate;
    
    // Calculate total before discount
    const totalBeforeDiscount = subtotal + taxAmount;
    
    // Calculate final total after discount
    const finalTotal = totalBeforeDiscount - discount;
    
    // Format the output to 2 decimal places
    return `Total Invoice: $${finalTotal.toFixed(2)}`;
}

// Test cases
console.log(calculateInvoice(100, 0.08, 5));  // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20));  // Expected output: "Total Invoice: $530.00"


//Task 2 Employee Hourly Wage Calculation

// Function expression to calculate hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    // Calculate hourly wage
    const hourlyWage = salary / (hoursPerWeek * 52);
    
    // Format the output to 2 decimal places
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Test Data:
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

//Task 3 - Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = 0;

    if (years >= 5) {
        discountRate = 0.15; // 15% discount 
    } else if (years >= 3) {
        discountRate = 0.10; // 10% discount 
    } else {
        discountRate = 0.05; // 5% discount 
    }

    const discountAmount = amount * discountRate;
    const discountedPrice = amount - discountAmount;

    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test Data:
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"


// Task 4 Product Shipping Cost Calculation


function calculateShippingCost(weight, location, expedited = false) {
    let shippingCost = 0;

    if (location === "USA") {
        shippingCost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        shippingCost = 10 + (0.7 * weight);
    } else {
        return "Unsupported location"; // Or handle the error as needed
    }

    if (expedited) {
        shippingCost += 10;
    }

    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
}

// Test Data:
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"



// Test 5  Returning Values

function calculateLoanInterest(principal, rate, years) {
    const interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Data:
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"




// Task 6: Higher-Order Functions 

// Array of transaction amounts
let transactions = [500, 1200, 3000, 800, 2200];

// Higher-order function to filter transactions based on a provided filter function
function filterHighValueTransactions(transactions, filterFunction) {
    // Use the filter method to filter the transactions array
    return transactions.filter(filterFunction);
}

// Test data to verify the filterHighValueTransactions function
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
// Expected output: [1200, 3000, 2200]






// Task 7: Closures - Budget Tracker

function createBudgetTracker() {
    let balance = 0; // Initialize the balance to 0

    // Return a function that updates the balance and returns the current balance
    return function(expense) {
        balance -= expense; // Subtract the expense from the balance
        return `Current Balance: $${balance}`; // Return the current balance
    };
}

// Test Data:
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"





//Task 8 Recursive Function

// Function to calculate projected revenue growth over a specified number of years
function calculateGrowth(years, revenue) {
    // Base case: if years is 0, return the current revenue
    if (years === 0) {
        return revenue;
    }

    // If years is greater than 10, return the current revenue
    if (years > 10) {
        return revenue;
    }

    // Define the growth rate (5% per year)
    const growthRate = 0.05;
    // Calculate the new revenue after applying the growth rate
    const newRevenue = revenue * (1 + growthRate);

    // Recursively call the calculateGrowth function with one less year and the new revenue
    return calculateGrowth(years - 1, newRevenue);
}

// Test Data:
console.log(calculateGrowth(8, 1000)); // Expected output: 1477.4554437500005
console.log(calculateGrowth(5, 5000)); // Expected output: 6381.406249999999