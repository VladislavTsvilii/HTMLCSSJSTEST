class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();

    }

    render(count) {
        const html = `
        
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
            🍽 ${count}
            </div>
            <a href="Main.html"><img class="tomain">
            </a>
            </div>
        
        
        ` ;
        
        ROOT_NAVMENU.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);