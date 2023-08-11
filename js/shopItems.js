//Product items stored as objects

class shopItem{
    constructor(id, name, price, prevprice, img, quantity){
        this.id= id; 
        this.name=name;
        this.price = price;
        this.prevprice= prevprice;
        this.img= img;
        this.quantity =quantity;
        this.totalPrice= price*quantity;
    }
   
}
let storeItems =  [

    
      new   shopItem(
            "lslkdjfls",
             "Black Skater T-Shirt", 
            123,   
            200,
           "img/black2.jpg",
           1
      ),
       new  shopItem(
            "wslsldkdf",
             "Pink Skateboard", 
             500, 
            800,
            "img/skate1.jpg",
            1
       ),
        new shopItem (
            "wlldfkjdf",
            "Black Sneakers", 
            400, 
            700,
           "img/sneaker1.webp",
           1
        ),
         new  shopItem(
           "lalksjdhf",
             "Beige Cap", 
            100, 
           200,
             "img/cap2.jpg",
             1
         ),
        new  shopItem(
           "owiehfjshfa",
             "Green Skateboard", 
            600, 
            900,
            "img/skate2.jpg",1

        ),  
        new  shopItem(
          "owiehfjshfb",
           "Black Hightops", 
           500, 
            700,
             "img/sneaker3.jpg",
             1
        )
]

let productContainer = document.getElementById('popular-pr0ducts');

function itemOutput(i){
    var itemHTML =
    ` <div class="col-lg-4 col-md-6 col-sm-12 pb-1" id = product-id-${storeItems[i].id}>
    <div class="card product-item border-0 mb-4">
        <div class="card-header product-img position-relative overflow-hidden bg-transparent p-0">
            <img class="img-fluid w-100" src=${storeItems[i].img} alt="">
        </div>
        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">${storeItems[i].name}</h6>
            <div class="d-flex justify-content-center">
                <h6>R${storeItems[i].price}</h6><h6 class="text-muted ml-2"><del>R${storeItems[i].prevprice}</del></h6>
            </div>
        </div>
        <div class="card-footer d-flex jjustify-content-center bg-light text-center">
            <a  class="btn btn-sm text-dark p-0 justify-content-center" onclick = "addToCart(${i})"  ><i class="justify-content-center fas fa-shopping-cart text-primary mr-1 text-center"></i>Add To Cart</a>
        </div>
    </div>
</div>`
  return itemHTML;
}
for(let i=0; i<storeItems.length; i++){
    
    let itemHTML=itemOutput(i);
    productContainer.innerHTML+=itemHTML;
}


function addToCart(item){
    
    let storedItem= storeItems[item];
     localStorage.setItem(storedItem.id, JSON.stringify(storedItem));  
     displayQuantity();
     
}


