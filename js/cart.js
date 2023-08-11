
let cartContainer = document.getElementById('cart-container');


let subTotal = document.getElementById('subtotal');
let total = document.getElementById('total');
function cartOutput(){

    cartContainer.innerHTML="";
    var subTotalValue =0;
  
    if( Object.keys(localStorage).length<1){
        subTotal.innerText=0;
   total.innerText=0;
    }
    
  for(const key of Object.keys(localStorage)){
    
    let selectedItem= JSON.parse(localStorage.getItem(key));
    subTotalValue += selectedItem.totalPrice;
    let itemHTML=`
    <td class="align-middle"><div class="row"><img src="${selectedItem.img}" alt="" style="width: 100px;"> ${selectedItem.name}</div></td>
    <td class="align-middle">R${selectedItem.price}</td>
    <td class="align-middle">
        <div class="input-group quantity mx-auto" style="width: 100px;">
            <div class="input-group-btn">
                <button class="btn btn-sm btn-primary btn-minus" onclick="subtract(this)"   id=${selectedItem.id}>
               -
                </button>
            </div>
            <div id=quantity-${selectedItem.id}>&emsp;${selectedItem.quantity}&emsp;</div>
            <div class="input-group-btn">
                <button class="btn btn-sm btn-primary btn-plus" onclick="add(this)" id=${selectedItem.id}>
                    +
                </button>
            </div>
        </div>
    </td>
    <td class="align-middle">R${selectedItem.totalPrice}</td>
    <td class="align-middle"><button class="btn btn-sm btn-primary" onclick="remove(this)"  id=${selectedItem.id}>x</button></td>
</tr>
    `
    cartContainer.innerHTML+=itemHTML;
   subTotal.innerText=subTotalValue;
   total.innerText=subTotalValue+50;
}
}

function subtract(i){
    console.log(i.id)
    var selectedItem= JSON.parse(localStorage.getItem(i.id));
    if (selectedItem.quantity>1) {
        selectedItem.quantity-=1;
    }
    selectedItem.totalPrice =selectedItem.price*selectedItem.quantity;   
    localStorage.setItem(selectedItem.id, JSON.stringify(selectedItem));  
    cartOutput();
}

function add(i){
    
    var selectedItem= JSON.parse(localStorage.getItem(i.id));
   
    selectedItem.quantity+=1;
    selectedItem.totalPrice =selectedItem.price*selectedItem.quantity;      
    localStorage.setItem(selectedItem.id, JSON.stringify(selectedItem));  
   cartOutput();

}

function remove(i){
  localStorage.removeItem(i.id);
  cartOutput();
}

function clearCart(){
    localStorage.clear();
    cartOutput();
}

cartOutput();