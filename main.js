"use strict";
const obj = {
    name: "test",
    id: 2,
    status: true
};
class TestObjectX {
    constructor(name, id, status) {
        this.name = name;
        this.id = id;
        this.status = status;
    }
}
const hybridObj = new TestObjectX("test2", 3, false);
