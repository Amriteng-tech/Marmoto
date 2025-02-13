function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;

    

    let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let index = 0;

    function changeImage(imageSrc) {
        document.getElementById('main-image').src = imageSrc;
    }

    function autoChangeImage() {
        changeImage(images[index]);
        index = (index + 1) % images.length; 
    }

    setInterval(autoChangeImage, 3000); 
}

function selectColor(element) {
    document.querySelectorAll('.color').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

function selectSize(element) {
    document.querySelectorAll('.size').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

function changeQuantity(amount) {
    let quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity + amount > 0) {
        quantityElement.textContent = quantity + amount;
    }
}
