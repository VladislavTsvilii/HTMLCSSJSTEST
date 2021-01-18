class Shopingcart {
    handleClear() { 
        ROOT_SHOPINGCART.innerHTML = '';

    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} UA</td>
                    </tr>
                `;
                sumCatalog+=price; 
            }
        });
        
        const html =`
        <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
            <table>
               ${htmlCatalog} 

               <tr>
                        <td class="shopping-element__name">До сплати:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} UA</td>
                    </tr>
            </table>
        </div>
        
        `;

        ROOT_SHOPINGCART.innerHTML = html;
    }
}

const shoppingPage = new Shopingcart();