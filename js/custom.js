$(document).on('click','.inc',function(){
    let productId =$(this).clossest('.qtyBox').find('.productId').val();
    console.log(productId);
    let productQty =$(this).clossest('.qtyBox').find('.num-product');
    let productQtyInt = parseInt(productQty.val());
    console.log(productQtyInt);
});
$(document).on('click','.dec',function(){
    let productId =$(this).clossest('.qtyBox').find('.productId').val();
    console.log(productId);
    let productQty =$(this).clossest('.qtyBox').find('.num-product');
    let productQtyInt = parseInt(productQty.val());
    console.log(productQtyInt);
});