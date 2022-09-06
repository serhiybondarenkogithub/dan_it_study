class Device {
    constructor(manufacturer, model, price) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.extra = 0.2;
    }

    getName() {
        return `${this.manufacturer} ${this.model}`;
    }

    getTotalPrice() {
        return +this.price + +this.price * this.extra;
    }
}

class Laptop extends Device {
    constructor(manufacturer, model, price) {
        super(manufacturer, model, price);
    }

    getDeliveryPrice() {
        if(+this.price > 30_000) return 0;
        return 200;
    }
}

class Tablet extends Device {
    constructor(manufacturer, model, price) {
        super(manufacturer, model, price);
    }

    getDeliveryPrice() {
        if(+this.price > 20_000) return 0;
        return this.getTotalPrice() * 0.01;
    }
}

class Phone extends Device {
    constructor(manufacturer, model, price) {
        super(manufacturer, model, price);
    }

    getDeliveryPrice() {
        if(+this.price > 20_000) return this.getTotalPrice() * 0.01;
        return this.getTotalPrice() * 0.03;
    }
}

class PremiumPhone extends Phone {
    constructor(manufacturer, model, price) {
        super(manufacturer, model, price);
        this.extra = 0.35;
    }
}

const inspiron = new Laptop("Dell", "Inspiron", 15_000);
const macbook = new Laptop("Apple", "Macbook", 90_000);

const pixel = new Phone("Google", "Pixel", 30_000);
const zenphone = new Phone("Asus", "Zenphone", 10_000);
const iphone = new PremiumPhone("Apple", "iPhone", 40_000);

const ipad = new Tablet("Apple", "iPad", 70_000);

console.log(inspiron.getName());
console.log("Total price:", inspiron.getTotalPrice());
console.log("Delivery price", inspiron.getDeliveryPrice());

console.log(macbook.getName());
console.log("Total price:", macbook.getTotalPrice());
console.log("Delivery price", macbook .getDeliveryPrice());

console.log(pixel.getName());
console.log("Total price:", pixel.getTotalPrice());
console.log("Delivery price", pixel.getDeliveryPrice());

console.log(zenphone.getName());
console.log("Total price:", zenphone.getTotalPrice());
console.log("Delivery price", zenphone.getDeliveryPrice());

console.log(iphone.getName());
console.log("Total price:", iphone.getTotalPrice());
console.log("Delivery price", iphone.getDeliveryPrice());

console.log(ipad.getName());
console.log("Total price:", ipad.getTotalPrice());
console.log("Delivery price", ipad.getDeliveryPrice());