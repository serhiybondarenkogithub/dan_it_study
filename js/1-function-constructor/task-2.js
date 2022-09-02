/**
 * Наявний уже функціонал для одного складу (kyivWarehouse)
 * Але з розвитком компанії з'явилося ще 2 склади (lvivWarehouse та kharkivWarehouse)
 * відповідно з місткістю 50 та 40 та поки що без продуктів
 * 
 * Відповідно потрібно зберегти логіку, але додати можливість також
 * масштабувати її
 * Для цього необхідно переробити об'єкт в функцію-конструктор з методами
 * та створити відповідно 3 склади
 * 
 
 * - додати на склад Львову 7 телефонів, 10 планшетів
 * - додати на склад Харькова 10 телефонів та 6 ноутбуків
 * - вивести загальну кількість товарів по кожному складу в консоль
 * - вивести всі товари кожного складу в консоль
 * - дізнатися, якого товару найбільше у Львові
 * 
 ADVANCED:
 - створити окремо функцію getTotalQuantity, якій можна передати назву товару
 та отримати загальну кількість товарів по всіх складах
 - додати можливість переміщення товарів між складами
 для цього додати метод moveProduct(name, quantity, targetWarehouse)
 - перемістити 4 ноутбуки з Києва у Львів
 * 
 */

//  const warehouse = {
//     maxCapacity: 30,
//     products: {
//         phones: 2,
//         headphones: 4,
//         notebooks: 10,
//         tablets: 7,
//     },
//     getTotalQuantity: function () {
//         let sum = 0;
//         for (const product in this.products) {
//             sum += this.products[product];
//         }
//         return sum;
//     },
//     getProductQuantity: function (productName) {
//         let quantity = this.products[productName];
//         if (typeof quantity === 'undefined') {
//             return "Product not found";
//         } else {
//             return quantity;
//         }
//     },
//     getMaxQuantity: function () {
//         let max = 0;
//         let maxProductName;

//         for (const product in this.products) {

//             if (this.products[product] > max) {
//                 max = this.products[product];
//                 maxProductName = product;
//             }
//         }
//         return maxProductName;
//     },
//     changeProductQuantity: function (productName, quantity) {
//         if (quantity < 0) {
//             console.log("Error");
//             return;
//         }

//         let possibleNewTotalQuantity = this.getTotalQuantity() - this.products[productName] + quantity;
//         if (possibleNewTotalQuantity <= this.maxCapacity) {
//             this.products[productName] = quantity;
//         } else {
//             console.log("Error Max Capacity");
//         }
//     }
// }

function Warehouse(maxCapacity, products) {
    this.maxCapacity = maxCapacity;
    this.products = products;
}

Warehouse.prototype.getTotalQuantity = function() {
    let sum = 0;
    for (const product in this.products) {
        sum += this.products[product];
    }
    return sum;
};

Warehouse.prototype.getProductQuantity = function(productName) {
    let quantity = this.products[productName];
    if (typeof quantity === 'undefined') {
        return "Product not found";
    } else {
        return quantity;
    }
};

Warehouse.prototype.getMaxQuantity = function () {
    let max = 0;
    let maxProductName;

    for (const product in this.products) {

        if (this.products[product] > max) {
            max = this.products[product];
            maxProductName = product;
        }
    }
    return maxProductName;
};

Warehouse.prototype.changeProductQuantity = function (productName, quantity) {
    if (quantity < 0) {
        console.log("Error");
        return;
    }

    let possibleNewTotalQuantity = this.getTotalQuantity() - (this.products[productName] ?? 0) + quantity;
    if (possibleNewTotalQuantity <= this.maxCapacity) {
        this.products[productName] = quantity;
    } else {
        console.log("Error Max Capacity");
    }
};

Warehouse.prototype.printAllStock = function() {
    for(const [key, value] of Object.entries(this.products)) {
        console.log(key + ": " + value);
    }
}

const kyivWarehouse = new Warehouse(30, {
    phones: 2,
    headphones: 4,
    notebooks: 10,
    tablets: 7,
});

const lvivWarehouse = new Warehouse(50, {});

const kharkivWarehouse = new Warehouse(40, {});

lvivWarehouse.changeProductQuantity("phones", 7);
lvivWarehouse.changeProductQuantity("tablets", 10);

kharkivWarehouse.changeProductQuantity("phones", 10);
kharkivWarehouse.changeProductQuantity("tablets", 6);

console.log(`Загальна кількість товарів - Київ: ${kyivWarehouse.getTotalQuantity()}`);
console.log(`Загальна кількість товарів - Львів: ${lvivWarehouse.getTotalQuantity()}`);
console.log(`Загальна кількість товарів - Харків: ${kharkivWarehouse.getTotalQuantity()}`);

function printAllStock(warehouse) {
    for(const [key, value] of Object.entries(warehouse.products)) {
        console.log(key + ": " + value);
    }
}

console.log("Київ:");
kyivWarehouse.printAllStock();

console.log("Львів:");
lvivWarehouse.printAllStock();

console.log("Харків:");
kharkivWarehouse.printAllStock();

console.log("Львів - максимальний залишок: " + lvivWarehouse.getMaxQuantity() + " - " + lvivWarehouse.products[lvivWarehouse.getMaxQuantity()]);

//ADVANCED:

function getTotalQuantity(productName, warehousesArr) {
    return warehousesArr.reduce(function(sum, curr) {
        return sum += +curr.getProductQuantity(productName) || 0;
    }, 0);
}

console.log("Всі: phones - " + getTotalQuantity("phones", [kyivWarehouse, lvivWarehouse, kharkivWarehouse]));

Warehouse.prototype.moveProduct = function(name, quantity, targetWarehouse) {
    console.log("quantity", quantity);
    if(!this.getProductQuantity(name) || this.getProductQuantity(name) < quantity || quantity < 0) {
        return false;
    }
    if(!targetWarehouse.products[name]) targetWarehouse.products[name] = 0;
    
    this.products[name] -= quantity;
    targetWarehouse.products[name] += quantity;

    return true;
}

console.log("Переміщення 4 ноутів з Києва на Львів...");
kyivWarehouse.moveProduct("notebooks", 4, lvivWarehouse);

console.log("Київ:");
kyivWarehouse.printAllStock();

console.log("Львів:");
lvivWarehouse.printAllStock();