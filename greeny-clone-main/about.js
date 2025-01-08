// backto top
const backtop = document.querySelector('.backtop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    backtop.style.display = 'block';
  } else {
    backtop.style.display = 'none';
  }
});

backtop.addEventListener('click', () => {
  window.scrollTo({ top: 0});
});


// Header
const mobileSearchCheckbox = document.getElementById('mobile-search');
const searchInput = document.getElementById('search-input2');

if (searchInput) {
    searchInput.style.display = 'none';
}

if (mobileSearchCheckbox && searchInput) {
    mobileSearchCheckbox.addEventListener('change', function() {
      if (mobileSearchCheckbox.checked) {
        searchInput.style.display = 'block';
      } else {
        searchInput.style.display = 'none';
      }
    });
};

// SECONDNAV MOBILE ACCOUNT SIDENAV
document.getElementById('account').addEventListener('change', function() {
  const overlay = document.querySelector('.overlay');
  const Side = document.querySelector('.sidenav');

  if (this.checked) {
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible'; 
      Side.style.left = '0'; 
  } else {
      overlay.style.opacity = '0'; 
      overlay.style.visibility = 'hidden';
      Side.style.left = '-300px'; 
  }
});

document.getElementById('closenav').addEventListener('click', function() {
  const accountCheckbox = document.getElementById('account');
  accountCheckbox.checked = false; 
  
  
  const overlay = document.querySelector('.overlay');
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden'; 
  
  const Side = document.querySelector('.sidenav');
  Side.style.left = '-1000px';
});

// CART
document.getElementById('cartButton').addEventListener('click', function() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
});

document.getElementById('cartButton2').addEventListener('click', function() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
});

document.getElementById('closeSidebar').addEventListener('click', function() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
});

document.getElementById('couponText').addEventListener('click', function() {
  this.style.display = 'none';
  document.getElementById('couponForm').style.display = 'flex';
});


// FOURTHNAV CATEGORY-SIDENAV
const categorySide = document.querySelector('.category-side');
categorySide.addEventListener('change', function(event) {
  if (event.target.type === 'checkbox') {
    const categoryCheckboxes = categorySide.querySelectorAll('input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
      if (checkbox !== event.target) {
        checkbox.checked = false;
      }
    });
  }
});


document.getElementById('category').addEventListener('change', function() {
  const overlay = document.querySelector('.overlay');
  const categorySide = document.querySelector('.category-side');

  if (this.checked) {
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible'; 
      categorySide.style.left = '0'; 
  } else {
      overlay.style.opacity = '0'; 
      overlay.style.visibility = 'hidden';
      categorySide.style.left = '-300px'; 
  }
});

document.getElementById('closenav2').addEventListener('click', function() {
  const categoryCheckbox = document.getElementById('category');
  categoryCheckbox.checked = false; 


  const overlay = document.querySelector('.overlay');
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden'; 

  const categorySide = document.querySelector('.category-side');
  categorySide.style.left = '-300px';
});





// SECONDNAV


const secondnav = document.querySelector('.secondnav');
var inputText = document.querySelector('#search-input');

window.addEventListener('scroll', () => {
  if (window.scrollY > 70) {
    secondnav.classList.add('fixed');
    inputText.style.border = '2px solid #119744';
  } else {
    secondnav.classList.remove('fixed');
    inputText.style.border = '';
  }
});


// WISHLIST
const heartIcons = document.querySelectorAll('.heart-icon i');
const wishCountElement = document.querySelector('.wish-count'); 
let wishCount = 0;
heartIcons.forEach((heart) => {
  heart.addEventListener('click', function() {
    const heartIcon = this.parentElement;
    heartIcon.classList.toggle('checked');
    
    if (heartIcon.classList.contains('checked')) {
      this.classList.remove('far'); 
      this.classList.add('fas');
      wishCount++;
    } else {
      this.classList.remove('fas'); 
      this.classList.add('far'); 
      wishCount--;
    }
    wishCountElement.innerHTML = wishCount;
  });
});


// Recent items and ADD TO CART
// const initialized = false;
document.addEventListener("DOMContentLoaded", function() {
  // if (initialized) return;
  const addCartButtons = document.querySelectorAll('.add-cart');
  const cartItemsContainer = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('total-price'); 
  const totalElement = document.getElementById('total'); 
  const cartCountElement = document.querySelector('.cart-count'); 

  let totalPrice = 0;
  let cartItemCount = 0;

  addCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemCard = this.closest('.item-card');
      const productName = itemCard.querySelector('h5').innerText;
      const productPrice = parseFloat(itemCard.querySelector('.item-price span').innerText.replace('$', ''));
      const quantityControls = itemCard.querySelector('.quantity-controls');
      this.style.display = 'none';
      quantityControls.style.display = 'flex';

      let existingCartItem = cartItemsContainer.querySelector(`.cart-item[data-name="${productName}"]`);
      let quantity = 1;

      if (existingCartItem) {
        const existingQuantityElement = existingCartItem.querySelector('.quantity');
        quantity = parseInt(existingQuantityElement.innerText) + 1;
        existingQuantityElement.innerText = quantity;
        totalPrice += productPrice;

        cartItemCount++;
        updateCartDisplay();
        return;
      }

      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.setAttribute('data-name', productName);
      cartItem.innerHTML = `
        <div class="sidewrap">
          <img src="${itemCard.querySelector('img').src}" alt="${productName}" class="cart-item-image" width="50"/>
          <div class="sidetext-wrap">
            <div class="sidetext">
              <span>${productName}</span>
              <span class="item-price"> Unit Price - $${productPrice.toFixed(2)}</span>
            </div>
            <div class="quantity-controls">
              <button class="minus-btn">-</button>
              <span class="quantity">${quantity}</span>
              <button class="plus-btn">+</button>
            </div>
          </div>
        </div>
      `;

      cartItemsContainer.appendChild(cartItem);

      totalPrice += productPrice;
      cartItemCount++;
      updateCartDisplay();

      const minusButton = cartItem.querySelector('.minus-btn');
      const plusButton = cartItem.querySelector('.plus-btn');
      const cartItemPriceElement = cartItem.querySelector('.item-price');

      const syncCartItemWithItemCard = (newQuantity) => {
        const cartItemQuantityElement = cartItem.querySelector('.quantity');
        cartItemQuantityElement.innerText = newQuantity;
        cartItemPriceElement.innerText = `Unit Price - $${(productPrice * newQuantity).toFixed(2)}`;
      };

      
      minusButton.addEventListener('click', () => {
        quantity--;
        if (quantity < 1) {
          cartItemsContainer.removeChild(cartItem);
          totalPrice -= productPrice;
          cartItemCount--; 

          itemCard.querySelector('.add-cart').style.display = 'inline-block';
          itemCard.querySelector('.quantity-controls').style.display = 'none';
      
          updateCartDisplay();
          return; 
        }
      
        cartItem.querySelector('.quantity').innerText = quantity;
        totalPrice -= productPrice;
        cartItemPriceElement.innerText = `Unit Price - $${(productPrice * quantity).toFixed(2)}`;
        updateCartDisplay();
      
        itemCard.querySelector('.quantity').innerText = quantity;
      });
      

      plusButton.addEventListener('click', () => {
        quantity++;
        cartItem.querySelector('.quantity').innerText = quantity;
        totalPrice += productPrice;
        cartItemPriceElement.innerText = `Unit Price - $${(productPrice * quantity).toFixed(2)}`;
        updateCartDisplay();

        itemCard.querySelector('.quantity').innerText = quantity;
      });

      const itemCardMinusButton = itemCard.querySelector('.minus-btn');
      const itemCardPlusButton = itemCard.querySelector('.plus-btn');

     
      
      itemCardMinusButton.addEventListener('click', () => {
        const itemQuantityElement = itemCard.querySelector('.quantity');
        let newQuantity = parseInt(itemQuantityElement.innerText) - 1;
        if (newQuantity < 1) {
          cartItemsContainer.removeChild(cartItem); 
          totalPrice -= productPrice;
          cartItemCount--; 

          itemCard.querySelector('.add-cart').style.display = 'inline-block';
          itemCard.querySelector('.quantity-controls').style.display = 'none';
      
          updateCartDisplay();
          return; 
        }
      
        itemQuantityElement.innerText = newQuantity;
        syncCartItemWithItemCard(newQuantity); 
        totalPrice -= productPrice;
        updateCartDisplay();
      });
      

      itemCardPlusButton.addEventListener('click', () => {
        const itemQuantityElement = itemCard.querySelector('.quantity');
        let newQuantity = parseInt(itemQuantityElement.innerText) + 1;
        itemQuantityElement.innerText = newQuantity;
        syncCartItemWithItemCard(newQuantity);

        totalPrice += productPrice;
        updateCartDisplay();
      });
    });
  });

  function updateCartDisplay() {
    cartCountElement.innerText = cartItemCount;

    if (totalElement) {
      totalElement.innerText = `$${totalPrice.toFixed(2)}`;
    } 

    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
  }
    
 
});



const filterButtons = document.querySelectorAll('.filter-btn');
const productGrids = document.querySelectorAll('.Item-wrap');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
     
      button.classList.add('active');

      productGrids.forEach(grid => {
          grid.classList.remove('active');
          setTimeout(() => {
              if (!grid.classList.contains('active')) { 
                  grid.style.display = 'none';
              }
          }, 300);
      });

 
      const filter = button.getAttribute('data-filter');
      const targetGrid = document.getElementById(filter);
      
      targetGrid.style.display = 'grid'; 
      setTimeout(() => {
          targetGrid.classList.add('active'); 
      }, 30);
  });
});


// SWIPER 
var swiper = new Swiper('.swiper-container6', {
  slidesPerView: 1,
  spaceBetween: 25, 
  loop: true, 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
  navigation: {
    nextEl: '.swiper-button-next6',
    prevEl: '.swiper-button-prev6',
  },
 
  breakpoints: {
   
    320: {
      slidesPerView: 1,
    },
  
    480: {
      slidesPerView: 1,
    },
  
    640: {
      slidesPerView: 1,
    },
   
    780: {
      slidesPerView: 1,
    },
   
    1024: {
      slidesPerView: 1,
    },
  },
});


// SWIPER 
var swiper = new Swiper('.swiper-container7', {
  slidesPerView: 4,
  spaceBetween: 25, 
  loop: true, 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
  navigation: {
    nextEl: '.swiper-button-next7',
    prevEl: '.swiper-button-prev7',
  },
 
  breakpoints: {
   
    320: {
      slidesPerView: 1,
    },
  
    480: {
      slidesPerView: 1,
    },
  
    500: {
      slidesPerView: 2,
    },
   
    780: {
      slidesPerView: 2,
    },
   
    1024: {
      slidesPerView: 4,
    },
  },
});