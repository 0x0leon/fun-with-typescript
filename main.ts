


interface TestObject {
    name: string,
    id: number,
    status: boolean
}

const obj: TestObject = {
    name: "test",
    id: 2,
    status: true
}

class TestObjectX {
    name: string;
    id: number;
    status: boolean;


    constructor(name: string, id: number, status: boolean){
        this.name = name;
        this.id = id;
        this.status = status
    }
}


const hybridObj: TestObject = new TestObjectX("test2", 3, false)

