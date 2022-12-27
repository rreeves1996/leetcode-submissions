/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0;

    accounts.forEach((account) => {
        let total = 0;

        for(let i = 0; i < account.length; i++) {
            total += account[i];
        }

        if(res < total) {
            res = total;
        }
    })

    return res;
};