        document.addEventListener('DOMContentLoaded', () => {
            const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
            const cartCountElement = document.getElementById('cart-count');
            let cartCount = 0;

            addToCartButtons.forEach(button => {
                button.addEventListener('click', () => {
                    cartCount++;
                    cartCountElement.textContent = cartCount;
                    // In a real application, you'd add the item to a cart object and handle state.
                    console.log('Item added to a simulated cart!');
                });
            });
        });