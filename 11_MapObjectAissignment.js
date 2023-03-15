console.log(`------------------------Map Assignment 0A--------------------------`);
class Bank{
    constructor(bankName, location, accountNo, ifsc, interestRate)
    {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}

const axis_bank = new Bank("Axis Bank", "Pune", "1234567890", "AXIS0123456", 6.5);
const sbi_bank = new Bank("SBI Bank", "Mumbai", "0124578945", "SBIN1457985", 7.2);
const icici_bank = new Bank("ICICI Bank", "Satara", "9875414596", "ICIC7849516", 7.5);
const kotak_bank = new Bank("Kotak Bank", "Goa", "7894561548", "KKBK0001774", 6.0);
const punjab_bank = new Bank("Punjab Bank", "Delhi", "9873214569", "PNBJ0124578", 7.3);

const mapOfObject = new Map();
mapOfObject.set("1234567890", axis_bank);
mapOfObject.set("0124578945", sbi_bank);
mapOfObject.set("9875414596", icici_bank);
mapOfObject.set("7894561548", kotak_bank);
mapOfObject.set("9873214569", punjab_bank);


const valuesOfMap = mapOfObject.values();


for (const key of valuesOfMap) {
    console.log(`BankName = ${key.bankName},Account no = ${key.accountNo}, InterestRate = ${key.interestRate}`);
}