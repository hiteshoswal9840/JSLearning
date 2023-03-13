function Bank (bankName,location,ifsc,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifsc = ifsc;
    this.branchCode = branchCode;

    this.show = function(){
        console.log(`* Bank Details:"${bankName}","${location}","${ifsc}","${branchCode}"`);
    }
}
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
 
const yesBank = new Bank("YesBank", "Pune", "YESB1234567", "1234");
yesBank.show();

const sbiBank = new Bank("SBI Bank","Pune", "SBIN1234567", "1234");
sbiBank.show();

const mahBank = new Bank("MAH Bank", "Pune","MAHB1234567", "1234");
mahBank.show();

const axisBank = new Bank("Axis Bank", "Pune", "AXIS1234567", "1234");
axisBank.show();

console.log(`----------------------1.SBI BANK---------------------`);
console.log(`Open time of *SBI Bank* is : ${sbiBank.openTime}`);
console.log(`close time of *SBI Bank* is : ${sbiBank.closeTime}`);

console.log(`--------------------2.AXIS BANK-----------------------`);
console.log(`Name of Bank is :${axisBank.bankName}`);
console.log(`close time of *Axis Bank* is : ${axisBank.closeTime}`);

console.log(`---------------------3.YES BANK------------------------`);
console.log(`Name of Bank is : ${yesBank.bankName}`);
console.log(`Branch code of *Yes Bank* is : ${yesBank.branchCode}`);
console.log(`Open time of *Yes Bank* is : ${yesBank.openTime}`);
 