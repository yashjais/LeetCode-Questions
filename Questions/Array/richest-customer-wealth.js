/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richestCustomerMoney = 0;
    accounts.forEach((customer) => {
        let totalMoney = 0;
        customer.forEach((money) => {
            totalMoney += money;
        });

        if (totalMoney > richestCustomerMoney) {
            richestCustomerMoney = totalMoney;
        }
    })

    return richestCustomerMoney;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))
