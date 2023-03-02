import { observable, action, computed, makeObservable } from "mobx";


export class ShoppingCart  {
  
   items = [];
  constructor(){
    makeObservable(this, {
      items: observable,
      totalPrice: computed,
      add: action
    })
  }
  
  
  
   get totalPrice() {
    return this.items.reduce( (acc, cur) => acc + cur.price, 0 );
  }

  
   add(item){
    item.id = this.items.length === 0
        ? 1
        : Math.max(...this.items.map(i => i.id)) + 1;
    this.items.push(item);
    console.log("Item added:", item);
}

}