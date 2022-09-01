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

const warehouse = {
    maxCapacity: 30,
    products: {
        phones: 2,
        headphones: 4,
        notebooks: 10,
        tablets: 7,
    },
    getTotalQuantity: function () {
        let sum = 0;
        for (const product in this.products) {
            sum += this.products[product];
        }
        return sum;
    },
    getProductQuantity: function (productName) {
        let quantity = this.products[productName];
        if (typeof quantity === 'undefined') {
            return "Product not found";
        } else {
            return quantity;
        }
    },
    getMaxQuantity: function () {
        let max = 0;
        let maxProductName;

        for (const product in this.products) {

            if (this.products[product] > max) {
                max = this.products[product];
                maxProductName = product;
            }
        }
        return maxProductName;
    },
    changeProductQuantity: function (productName, quantity) {
        if (quantity < 0) {
            console.log("Error");
            return;
        }

        let possibleNewTotalQuantity = this.getTotalQuantity() - this.products[productName] + quantity;
        if (possibleNewTotalQuantity <= this.maxCapacity) {
            this.products[productName] = quantity;
        } else {
            console.log("Error Max Capacity");
        }
    }
}
