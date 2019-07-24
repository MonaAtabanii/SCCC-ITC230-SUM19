'use strict'
const expect = require("chai").expect;
const country = require("../lib/module-items");

describe("Country",  ()=> {
    //1. getItem() - Success
    it("returns requested country", () => {
        const result = country.getItem("Sudan");
        expect(result).to.deep.equal({name: "Sudan", language:"Arabic", population:"41,592,539"});
    });

    //2. getItem() - Fail
    it("fails to return an invalid country", () => {
        const result =country.getItem("Canada");
        expect(result).to.be.undefined;
    });
});

    describe("Delete",  ()=> {
    //3. deleteItem() - Success
    it("delete an existing country", () => {
        const result = country.deleteItem("USA");
        expect(result).to.be.true;
    });

    //4. deleteItem() - Fail
    it("fails to delete an invalid country", () => {
        const result = country.deleteItem("Canada");
        expect(result).to.be.false;
    }); 
});


        describe("Add",  ()=> {
    //5. addItem() - Success
    it("adds a new country", () => {
        let result = country.addItem({name: "Canada", language:"English - French", population:"80,592,539"});
        expect(result).to.be.true;
    });

    //6. addItem() - Fail
    it("fails to add an existing country", () => {
        let result = country.addItem({name: "Sudan", language:"Arabic", population:"41,592,539"});
        expect(result).to.be.false;
    });

});