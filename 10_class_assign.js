console.log(`***********************Vehicle Info**************************`);
class vehicle {
    constructor(brand,vehicleName,model,color,price){
        this.brand = brand;
        this.vehicleName = vehicleName;
        this.model = model;
        this.color = color;
        this.price = price;
    }
}

const maruti = new vehicle("Maruti","Ertiga","ZX+","White","13.5lacs");
const hyundai = new vehicle("Hyundai","Verna","ZT+","Black","18.50lacs");
const toyota = new vehicle("Toyota","Fortuner","Legender","White","52.50lacs");
const kia = new vehicle("Kia","Seltos","GT Line","Grey","17.90lacs");
const tata = new vehicle("Tata","Nexon","SX","white","14.70lacs");

const arrayOfVehicle = [maruti, hyundai, toyota, kia, tata];
for (const element of arrayOfVehicle) {
    console.log(`Details of ${element.brand} car : ${element.brand},${element.vehicleName},${element.model},${element.color},${element.price}`);
}


console.log(`***********************College Info**************************`);

class college {
    constructor(collegename, type, estd, location,pincode){
        this.collegename = collegename;
        this.type = type;
        this.estd = estd;
        this.location = location;
        this.pincode = pincode;
    }
}
const rjspm = new college("RJSPM","ACS","1990","Bhosari","411039");
const aissms = new college("AISSMS","Engineering","1950","Pune","411025");
const siu = new college("SIU","Graduation","2005","110325");
const pcp = new  college("PCP","medical","1999","PCMC","411015")

function traverseObject(obj){
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key}:${element}`);
        }
    }
}

traverseObject(rjspm);
console.log(`-------------------------`);
traverseObject(aissms);
console.log(`-------------------------`);
traverseObject(siu);
console.log(`-------------------------`);
traverseObject(pcp);

console.log(`**************************Prime Number Check*************************`);

let num = 11;
for (let index = 2; index < num; index++) {
    if (num % index == 0 ) {
        var result = `This ${num} is not a prime number`;
        break;
    } else {
        var result = `This ${num} is a prime number`;
    }
}
console.log(result);