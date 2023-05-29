
let popularProducts = document.getElementById("popular-pr0ducts");

let basket = JSON.parse(localStorage.getItem("cartItems")) || [];







let row2_Shop = () => {
    return (popularProducts.innerHTML = storeItems[0].map((x) => {
        let {id, name, price, img, prevprice} = x
        return  `
       

        <div class="col-lg-4 col-md-6 col-sm-12 pb-1" id = product-id-${id}>
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent p-0">
                        <img class="img-fluid w-100" src=${img} alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">${name}</h6>
                        <div class="d-flex justify-content-center">
                            <h6>R${price}</h6><h6 class="text-muted ml-2"><del>R${prevprice}</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex jjustify-content-center bg-light text-center">
                        <a  class="btn btn-sm text-dark p-0 justify-content-center" onclick = "addToCart(${id})" id = "${id}" ><i class="justify-content-center fas fa-shopping-cart text-primary mr-1 text-center"></i>Add To Cart</a>
                    </div>
                </div>
            </div>

        `
    }).join(""))
}





row2_Shop();




let addToCart = (id) => {
    selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
            msg:"In cart"
        });
        let msgParent = document.getElementById(selectedItem.id);
        let msg = document.createElement('div');
        msgParent.append(msg);
        msg.innerHTML = '<h4 class = "in-cart">In cart</h4>';
        msgParent.style.pointerEvents = 'none';
    }     
    else if(ifExists) {
        let msgParent = document.getElementById(selectedItem.id);
        let msg = document.createElement('div');
        msgParent.append(msg);
        msg.innerHTML = '<h4 class = "in-cart">In cart</h4>';
        msgParent.style.pointerEvents = 'none';

    }

    updateCartQuantity()
    localStorage.setItem("cartItems", JSON.stringify(basket));
}


let updateCartQuantity = () => {
    let noOfItemsInCart = document.getElementById('cart-items-no');
    noOfItemsInCart.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x + y, 0)
}
updateCartQuantity();


