class InventoryPage {

    addItemToCart(productName) {
        cy.contains('.inventory_item', productName)
            .find('button')
            .click();
    }

    openCart() {
        cy.get('.shopping_cart_link').click();
    }

    getInventoryItems() {
        return cy.get('.inventory_item');
    }

    getItemName($item) {
        return $item.find('.inventory_item_name').text();
    }

    getItemImageSrc($item) {
        return $item.find('img.inventory_item_img').attr('src');
    }
}

export default new InventoryPage();