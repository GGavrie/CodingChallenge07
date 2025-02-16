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