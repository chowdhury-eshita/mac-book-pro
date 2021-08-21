
function getTotalPrice() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseFloat(document.getElementById('extra-cost-memory').innerText);
    const extraStorageCost = parseFloat(document.getElementById('extra-cost-storage').innerText);
    const deliveryCharge = parseFloat(document.getElementById('delivery-cost').innerText);


    const total = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    console.log(total);
    document.getElementById('total-price').innerText = total;
    document.getElementById('sub-total-price').innerText = total;

};

//extra cost calculation for parts
function extraMemory(input) {
    const extraPartField = document.getElementById('extra-cost-memory');
    if (input == 'memory-8') {
        extraPartField.innerText = 0;
    }
    else if (input == 'memory-16') {
        extraPartField.innerText = 180;
    }

    getTotalPrice();
};
//extra memory cost 8GB event handler
document.getElementById('memory-8').addEventListener('click', function () {
    extraMemory('memory-8');
});
//extra memory cost 16GB event handler
document.getElementById('memory-16').addEventListener('click', function () {
    extraMemory('memory-16');
});
function extraStorage(input) {
    const extraPartField = document.getElementById('extra-cost-storage');
    if (input == 'storage-256') {
        extraPartField.innerText = 0;
    }
    else if (input == 'storage-512') {
        extraPartField.innerText = 100;
    }
    else if (input == 'storage-1tb') {
        extraPartField.innerText = 180;
    }

    getTotalPrice();
};

//extra storage 256 event handler
document.getElementById('storage-256').addEventListener('click', function () {
    extraStorage('storage-256');
});
//extra storage 512 event handler
document.getElementById('storage-512').addEventListener('click', function () {
    extraStorage('storage-512');
});
//extra storage 1tb event handler
document.getElementById('storage-1tb').addEventListener('click', function () {
    extraStorage('storage-1tb');
});


//delivery cost calculation
function deliveryCharge(isArgent) {
    const deliveryCost = document.getElementById('delivery-cost');
    if (isArgent == true) {
        deliveryCost.innerText = 20;
    }
    else {
        deliveryCost.innerText = 0;
    }
    getTotalPrice();
};

//free delivery event handler
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCharge(false);
});
//premium delivery event handler
document.getElementById('premium-delivery').addEventListener('click', function () {
    deliveryCharge(true);
});

function getDiscountPrice() {
    const promoCode = document.getElementById('promo-code-input');
    const promoCodeInput = promoCode.innerText;
    if (promoCodeInput == 'stevekaku') {
        const subTotal = document.getElementById('sub-total-price');
        const subTotalPrice = parseFloat(subTotal.innerText);
        const discountPrice = subTotalPrice / 20;
        promoCode.innerText = discountPrice;
    }
    getTotalPrice();
}
document.getElementsById('promo-code-submit').addEventListener('click', function () {

});