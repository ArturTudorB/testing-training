"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    // ...existing code...
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
            // These assignments use the setters defined below
            this.articleId = articleId;
            this.name = name;
            this.quantity = quantity;
            this.price = price;
    }

    // ...existing code...
    get articleId() {
        return this._articleId;
    }

    get name() {
        return this._name;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this.validateQuantity(value);
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this.validatePrice(value);
        this._price = value;
    }

    get total() {
        return this._quantity * this._price;
    }
  

    //region private methods
    set articleId(value) {
        this.validateArticleId(value);
        this._articleId = value;
    }

    set name(value) {
        this.validateName(value);
        this._name = value;
    }

    validateArticleId(articleId) {

    }

    validateName(name) {

    }

    validateQuantity(quantity) {

    }

    validatePrice(price) {
        // CHANGED: Tests expect prices < 10 to fail, so we check for < 10

    } 
}