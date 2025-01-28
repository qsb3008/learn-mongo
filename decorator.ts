function doc1(prototype: any, key: string, descriptor: PropertyDescriptor) {
  let originMethod = descriptor.value;
  descriptor.value = function () {
    console.log("doc1 start");
    let res = originMethod.apply(this, arguments);
    console.log("doc1 end");
    return res;
  };
}

function doc2(prototype: any, key: string, descriptor: PropertyDescriptor) {
  console.log("doc2");
}

function docFactory(brand: string) {
  return function (
    prototype: any,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(brand, " this is doc 2 in factory");
  };
}

class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  @docFactory("benz")
  run() {
    console.log(this.brand + " running");
  }
}

const car = new Car("BMW");
car.run();
