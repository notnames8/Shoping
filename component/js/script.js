
let API = 'https://dummyjson.com/'

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

let historyclick = localStorage.getItem('historyclick') || '';
let UserComment = JSON.parse(localStorage.getItem('UserComment')) || [];
let userBuy = JSON.parse(localStorage.getItem('userBuy')) || [];

// localStorage.removeItem('userBuy');
console.log(userBuy);

// console.log(UserComment[0])
// localStorage.removeItem('UserComment');
console.log(UserComment);
// console.log(historyclick);
// localStorage.removeItem('searchHistory');
console.log(searchHistory);
// create Element functions start
function createdivElement(targetId,className,id) {
    var newDiv = document.createElement("div"); 
    newDiv.className = className;
    newDiv.id = id;  
    document.getElementById(targetId).appendChild(newDiv);
}
function createElementText(targetId, tagName,id, text) {
    var newElement = document.createElement(tagName);
    newElement.className = id;
    newElement.id = id;
    newElement.textContent = text;
    document.getElementById(targetId).appendChild(newElement);
}
function createElementTextClass(targetId, tagName, className,id, text) {
    var newElement = document.createElement(tagName);
    newElement.className = className;
    newElement.id = id;
    newElement.textContent = text;
    document.getElementById(targetId).appendChild(newElement);
}
function createElementIcon(targetId, id,format) {
    var newElement = document.createElement('i');
    newElement.className = id;
    newElement.id = id;
    newElement.setAttribute('data-feather', format);
    document.getElementById(targetId).appendChild(newElement);
}function createElementIconClass(targetId,classd,id,format) {
    var newElement = document.createElement('i');
    newElement.className = classd;
    newElement.id = id;
    newElement.setAttribute('data-feather', format);
    document.getElementById(targetId).appendChild(newElement);
}
function createElementForm(targetId, className, id) {
    var newForm = document.createElement("form");
    newForm.className = className;
    newForm.id = id;
    document.getElementById(targetId).appendChild(newForm);
}
function createElementInput(targetId, className, id, type, placeholder) {
    var newInput = document.createElement("input");
    newInput.className = className;
    newInput.id = id;
    newInput.type = type;
    newInput.placeholder = placeholder;
    newInput.autocomplete = 'off';
    document.getElementById(targetId).appendChild(newInput);
}

function createElementImage(targetId, className, id, src) {
    var newImage = document.createElement("img");
    newImage.className = className;
    newImage.id = id;
    newImage.src = src;
    document.getElementById(targetId).appendChild(newImage);
}
// create Element functions end

// create component start

const searchNotFound = (targetId) => {
    createdivElement(targetId, 'searchNotFound', 'searchNotFound');
    createElementText('searchNotFound', 'h3', 'searchNotFoundText', 'Search Not Found');
}
const GetComentarUserId = (id) => {
    return UserComment.filter((item) => item.id === id) || null;
}

const FunctionElementMenu = async(MenuId, NavbarId) => {
    let menu = document.getElementById(MenuId);
    createdivElement(NavbarId, 'menu-open', 'menu-open');

    createdivElement('menu-open', 'menu-item', 'menu-About');
    createElementText('menu-About', 'p', 'menu-AboutText', 'About');
    createdivElement('menu-open', 'menu-item', 'menu-Contact');
    createElementText('menu-Contact', 'p', 'menu-ContactText', 'Contact');
    createdivElement('menu-open', 'menu-item', 'menu-comments');
    createElementText('menu-comments', 'p', 'menu-commentsText', 'comments');
    createdivElement('menu-open', 'menu-item', 'menu-categories');
    createElementText('menu-categories', 'p', 'menu-categoriesText', 'Categories');


    let path = location.pathname;
    menu.onclick = () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.getElementById('menu-open').classList.remove('active');
        }
        else {
            menu.classList.add('active');
            document.getElementById('menu-open').classList.toggle('active');
    }
    }
    document.getElementById('menu-open').onclick = (e) => {
        if (e.target != e.target.classList.contains('menu-open')|| e.target.classList.contains(menu)) {
            document.getElementById('menu-open').classList.toggle('active');
            menu.classList.remove('active');
        }
    }
    document.getElementById('menu-About').onclick = () => {
        if (path.includes('about')) {
            location.reload();
        } else if (path.includes('keranjang') || path.includes('search1') || path.includes('details')|| path.includes('search')|| path.includes('contact')|| path.includes('comments')||path.includes('categories')|| path.includes('categories')|| path.includes('purchase')) {
            location.href = '../about/index.html';
        } else {
            location.href = 'page/about/index.html';
        }
    }
    document.getElementById('menu-Contact').onclick = () => {
        if (path.includes('contact')) {
            location.reload();
        } else if (path.includes('keranjang') || path.includes('search1') || path.includes('details')|| path.includes('search')|| path.includes('about')|| path.includes('comments')|| path.includes('categories')|| path.includes('purchase')) {
            location.href = '../contact/index.html';
        } else {
            location.href = 'page/contact/index.html';
        }
    }
    document.getElementById('menu-comments').onclick = () => {
        if (path.includes('comments')) {
            location.reload();
        } else if (path.includes('keranjang') || path.includes('search1') || path.includes('details')|| path.includes('search')|| path.includes('about')|| path.includes('contact')|| path.includes('categories')|| path.includes('purchase')) {
            location.href = '../comments/index.html';
        } else {
            location.href = 'page/comments/index.html';
        }
    }
    document.getElementById('menu-categories').onclick = () => {
        if (path.includes('categories')) {
            location.reload();
        } else if (path.includes('keranjang') || path.includes('search1') || path.includes('details')|| path.includes('search')|| path.includes('about')|| path.includes('contact')|| path.includes('comments')|| path.includes('purchase')) {
            location.href = '../categories/index.html';
        } else {
            location.href = 'page/categories/index.html';
        }
    }
}

function createLeftChevronBack(targetId) {
    createdivElement(targetId, 'commentsContainer', 'commentsContainer');
    createdivElement('commentsContainer', 'commentsContent', 'commentsContent');
    createdivElement('commentsContent', 'commentsIconBox', 'commentsIconBox');
    createdivElement('commentsIconBox', 'commentsIconBack', 'commentsIconBack');
    createElementIcon('commentsIconBack', 'commentsIconBack', 'arrow-left');
    document.getElementById('commentsIconBack').onclick = () => {
        location.href = '../../index.html';
    }
}
function createLeftChevronBack2V(targetId) {
    createdivElement(targetId, 'commentsIconBack', 'commentsIconBack');
    createElementIcon('commentsIconBack', 'commentsIconBack', 'arrow-left');
    document.getElementById('commentsIconBack').onclick = () => {
        location.href = '../../index.html';
    }
}



// create component end


// create component Inputan1 start
function createSearchInputan1(targetId,value) {
    createdivElement(targetId, 'searchBoxComponen1', 'searchBoxComponent1');
    let searchBoxComponent1 = document.getElementById('searchBoxComponent1');

    createdivElement('searchBoxComponent1', 'searchIconBack', 'searchIconBack1');
    createElementIcon('searchIconBack1', 'searchIconBack1', 'arrow-left');

    createElementForm('searchBoxComponent1', 'searchForm1', 'searchForm1');
    let searchForm1 = document.getElementById('searchForm1');

    let Input = document.createElement('input');
    Input.className = 'searchInputan1';
    Input.id = 'searchInputan1';
    Input.value = `${value}`;
    Input.type = 'text';
    Input.autocomplete = 'off';
    Input.placeholder = 'Search';
    searchForm1.appendChild(Input);

    createdivElement('searchForm1', 'searchIconButton1', 'searchIconButton1');
    createElementIconClass('searchIconButton1', 'searchIcon1', 'searchIcon1', 'search');

    document.getElementById('searchIconBack1').onclick = () => {
        // history.back();
        location.href = '../../index.html';
    }

}
function systemInputan1(){
    let search = document.getElementById('searchInputan1');
    let form = document.getElementById('searchForm1');

    search.oninput = (e) => {
        localStorage.setItem('historyclick', e.target.value);
    }
    form.onsubmit = (e) => {
        e.preventDefault();
        let searchValue = search.value.trim();
        console.log(searchValue);
        if(!searchValue || searchValue.trim() === '') {return;}
        else{
            console.log(searchValue);
            if(searchHistory.includes(searchValue)) {
                // location.reload()
                let ShiftItem = searchHistory.splice(searchHistory.indexOf(searchValue), 1);
                searchHistory.unshift(ShiftItem[0]);
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
                location.href = `../search/index.html?q=${encodeURIComponent(searchValue)}`;
                        }
            else {
                for (let i = 0; i < searchHistory.length; i++) {
                    if (searchHistory[i] === searchValue) {
                        searchHistory.splice(i, 1);
                        break;
                    }
                }

                // searchHistory.push(searchValue);
                searchHistory.unshift(searchValue);
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
                // location.reload()
                location.href = `../search/index.html?q=${encodeURIComponent(searchValue)}`;
            }
        }
    }

}

function showSearchHistory1(targetId) {
    createdivElement(targetId, 'searchHistoryBox', 'searchHistoryBox');
    if (searchHistory.length === 0) {}
    else {
        searchHistory.forEach((item, index) => {
        createdivElement('searchHistoryBox', 'searchHistoryItem', `searchHistoryItem-${index}`);
        createElementText(`searchHistoryItem-${index}`, 'p', `searchHistoryText-${index}`, item);
        createdivElement(`searchHistoryItem-${index}`, 'searchHistoryRemove', `searchHistoryRemove-${index}`);
        createElementIconClass(`searchHistoryRemove-${index}`, 'removeIcon', `removeIcon-${index}`, 'x');

        document.getElementById(`searchHistoryItem-${index}`).onclick = () => {
            // document.getElementById('searchInputan1').value = item;
            let ShiftItem = searchHistory.splice(index, 1);
            searchHistory.unshift(ShiftItem[0]);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            location.href = `../search/index.html?q=${encodeURIComponent(item)}`;
        }

        document.getElementById(`searchHistoryRemove-${index}`).onclick = (e) => {
        e.stopPropagation();
        searchHistory.splice(index, 1);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        document.getElementById(`searchHistoryItem-${index}`).remove();
        location.reload();
        }
    });
    }
}
//create component Inputan1 end
// navbar component start
const module1 = async() => {
    createdivElement('navbar', 'navbarBox', 'navbarBox');
    createElementText('navbarBox', 'h3', 'navbarTitle', 'Shopping');

    // navbar list icon 1 start
    createdivElement('navbarBox', 'navbarListIcon', 'navbarListIcon');

    createdivElement('navbarListIcon', 'navbarIcon', 'searchOptions1');
    createElementIconClass('searchOptions1','','', 'search');

    createdivElement('navbarListIcon', 'navbarIcon', 'shoppingCartOptions');
    createElementIconClass('shoppingCartOptions', '','', 'shopping-cart');

    createdivElement('navbarListIcon', 'navbarIcon', 'menuoptions');
    createElementIconClass('menuoptions', '','', 'menu');

    // navbar list icon 1 end
    FunctionElementMenu('menuoptions','navbar');
}
try{module1()}catch{}

const module2 = async() => {
    const path = location.pathname;

    document.getElementById('navbarTitle').onclick = () => {
        if (path.includes('keranjang')|| path.includes('search1')|| path.includes('details')|| path.includes('about')|| path.includes('contact')|| path.includes('comments')|| path.includes('categories')||path.includes('purchase')) {
            location.href = '../../index.html';
        }
    }
    document.getElementById('searchOptions1').onclick = () => {
        if (path.includes('search')){
            location.reload();
        }else if (path.includes('keranjang') || path.includes('details')|| path.includes('about')|| path.includes('contact')|| path.includes('comments')|| path.includes('categories')|| path.includes('purchase')) {
            location.href = '../search1/index.html';
            localStorage.removeItem('historyclick');
    }
        else {
            location.href = 'page/search1/index.html';
            localStorage.removeItem('historyclick');

        }
    }
    document.getElementById('shoppingCartOptions').onclick = () => {
        if (path.includes('keranjang')) {
            location.reload();
        } else if (path.includes('search1')|| path.includes('details')|| path.includes('about')|| path.includes('contact')|| path.includes('comments')|| path.includes('categories')|| path.includes('purchase')) {
            location.href = '../keranjang/index.html';
        } else {
            location.href = 'page/keranjang/index.html';
        }
    }

}
try{module2()}catch{}
// navbar component end

// navbar 1a start
const navbar1a = async(targetId,value) => {
    createdivElement(targetId, 'navbarBox', 'navbar1aBox');

    createdivElement('navbar1aBox', 'navbar1aIcon', 'navbar1aIconBack');
    createElementIconClass('navbar1aIconBack', 'navbar1aIcon', 'navbar1aIcon', 'chevron-left');

    createElementForm('navbar1aBox', 'searchForm1A', 'navbar1aForm');
    let navbar1aForm = document.getElementById('navbar1aForm');

    let navbar1aInput = document.createElement('input');
    navbar1aInput.className = 'searchInputan1A';
    navbar1aInput.id = 'searchInputan1A';
    navbar1aInput.type = 'text';
    navbar1aInput.value = `${value}`;
    navbar1aInput.autocomplete = 'off';
    navbar1aInput.placeholder = 'Search...';
    navbar1aForm.appendChild(navbar1aInput);

    createdivElement('navbar1aForm', 'searchIconButton1', 'searchIconButton1');
    createElementIconClass('searchIconButton1', 'searchIcon1', 'searchIcon1', 'search');

    createdivElement('navbar1aBox', 'navbar1aIcon2', 'navbar1aIcon2');
    
    createdivElement('navbar1aIcon2', 'navbarIcon', 'shoppingCartOptions1A');
    createElementIconClass('shoppingCartOptions1A', 'navbar1aIcon','', 'shopping-cart');
    
    createdivElement('navbar1aIcon2', 'navbarIcon', 'menuoptions');
    createElementIconClass('menuoptions', '','', 'menu');

    document.getElementById('navbar1aIconBack').onclick = () => {
        location.href = '../../index.html';
    }
    document.getElementById('shoppingCartOptions1A').onclick = () => {
        location.href = '../keranjang/index.html';
    }
    document.getElementById('searchInputan1A').onclick = () => {
        // location.href = `../search1/index.html?q=${encodeURIComponent(navbar1aInput.value)}`;
        historyclick = navbar1aInput.value;
        localStorage.setItem('historyclick',historyclick);
        
        location.href = `../search1/index.html`;
    }
    FunctionElementMenu('menuoptions','navbar1a');
}
// navbar 1a end


// fetch data from API start
const DatalibsInner = async(query) => {
    const res = await fetch(`${API}${query}`);
    const data = await res.json();
    return data
}

const getProduct = async(targetId,query) => {
    createdivElement(targetId, 'productContainer', 'productContainer');
    const data = await DatalibsInner(query);
    const products = data.products;
    console.log(products);
    products.forEach((item, index) => {
        createdivElement('productContainer', 'productItem', `productItem-${index}`);
        let productItem = document.getElementById(`productItem-${index}`);

        let productImage = document.createElement('img');
        productImage.className = 'productImage';
        productImage.src = item.images[0];
        productItem.appendChild(productImage);


        createElementText(`productItem-${index}`, 'h3', `productTitle`, item.title);
        createElementText(`productItem-${index}`, 'p', `productPrice`, `$${item.price}`);

        document.getElementById(`productItem-${index}`).onclick = () => {
            let path = location.pathname;
            if (path.includes('search')){
                location.href = `../details/index.html?id=${item.id}`;
            }
            else{
                location.href = `page/details/index.html?id=${item.id}`;
            }
        }
        });

    
    
}

const getProductCardCategories = async(targetId, query,indexo) => {
    let data = await DatalibsInner(query);
    // console.log(data.products);
    createdivElement(targetId, 'categoriesBoxContent', `categoriesBoxContent${indexo}`);
    data.products.forEach((item, index) => {
        createdivElement(`categoriesBoxContent${indexo}`, 'productItem2', `categoriesItem-${index}${indexo}`);
        let categoriesItem = document.getElementById(`categoriesItem-${index}${indexo}`);

        let categoriesImage = document.createElement('img');
        categoriesImage.className = 'productImage2';
        categoriesImage.src = item.images[0];
        categoriesImage.loading = 'lazy';
        categoriesItem.appendChild(categoriesImage);

        createElementText(`categoriesItem-${index}${indexo}`, 'h3', `categoriesTitle`, item.title);
        createElementText(`categoriesItem-${index}${indexo}`, 'p', `categoriesPrice`, `$${item.price}`);

        document.getElementById(`categoriesItem-${index}${indexo}`).onclick = () => {
            location.href = `../details/index.html?id=${item.id}`;
        }
    });
}

const getDetailProduct = async(targetId) => {
    createdivElement(targetId, 'detailProductContainer', 'detailProductContainer');
    createdivElement('detailProductContainer', 'navigationDetails', 'navigationDetails');
    createdivElement('navigationDetails', 'navbar1aIcon', 'navigationDetailsIconBack');
    createElementIcon('navigationDetailsIconBack', '', 'arrow-left');
    
    document.getElementById('navigationDetailsIconBack').onclick = () => {
        // location.href = '../../index.html';
        history.back();
    }

    let query = location.search;
    let urlParams = new URLSearchParams(query);
    let id = urlParams.get('id');
    const data = await DatalibsInner(`products/${id}`);
    let = index = 0;
    console.log(data);

    createdivElement('detailProductContainer', 'detailProductBox', 'detailProductBox');
    if(data.images.length == 1){
        createdivElement('detailProductBox', 'sliderContainerDetails', 'sliderContainerDetails');
        createdivElement('sliderContainerDetails', 'sliderBoxDetails', 'sliderBoxDetails');
        createElementImage('sliderBoxDetails', 'sliderImage', 'sliderImage', data.images[0]);
    }else{
        createdivElement('detailProductBox', 'sliderContainerButton', 'sliderContainerLeft');
        createElementText('sliderContainerLeft', 'p', '', '<');

        createdivElement('detailProductBox', 'sliderContainerDetails', 'sliderContainerDetails');
        createdivElement('sliderContainerDetails', 'sliderBoxDetails', 'sliderBoxDetails');
        data.images.forEach((item, index) => {
            createElementImage('sliderBoxDetails', 'sliderImage', `sliderImage-${index}`, item);
        })

        createdivElement('detailProductBox', 'sliderContainerButton', 'sliderContainerRight');
        createElementText('sliderContainerRight', 'p', '', '>');
    }

    createdivElement('detailProductContainer', 'detailProductInfo', 'detailProductInfo');
    createElementText('detailProductInfo', 'h3', 'detailProductTitle', data.title);
    createElementText('detailProductInfo', 'p', 'detailProductPrice', `$${data.price}`);
    // createElementText('detailProductInfo', 'p', 'detailProductDescription', data.description);
    
    createdivElement('detailProductContainer', 'detailProductButton', 'detailProductButton');
    createdivElement('detailProductButton', 'detailProductButtonBuy', 'detailProductButtonBuy');
    createElementText('detailProductButtonBuy', 'p', 'detailProductButtonBuyText', 'Buy Now');

    createdivElement('detailProductContainer', 'detailProductList', 'detailProductList');
    createElementText('detailProductList', 'h4', 'detailProductListTitle', 'Product Details');
    createElementText('detailProductList', 'p', 'detailProductListDescription', data.description);

    createdivElement('detailProductContainer', 'detailProductListAll', 'detailProductListAll');

    createdivElement('detailProductListAll', 'detailProductListItem', 'detailProductListItem1');
    createElementText('detailProductListItem1', 'h5', 'detailProductListItem1Title', 'Category');
    createElementText('detailProductListItem1', 'p', 'detailProductListItem1Description', data.category);

    if(data.brand){
    createdivElement('detailProductListAll', 'detailProductListItem', 'detailProductListItem2');
    createElementText('detailProductListItem2', 'h5', 'detailProductListItem2Title', 'Brand');
    createElementText('detailProductListItem2', 'p', 'detailProductListItem2Description', data.brand);
    }

    createdivElement('detailProductListAll', 'detailProductListItem', 'detailProductListItem3');
    createElementText('detailProductListItem3', 'h5', 'detailProductListItem3Title', 'Availability');
    createElementText('detailProductListItem3', 'p', 'detailProductListItem3Description', data.stock ? data.stock : 'Out of Stock');

    createdivElement('detailProductListAll', 'detailProductListItem', 'detailProductListItem4');
    createElementText('detailProductListItem4', 'h5', 'detailProductListItem4Title', 'warranty');
    createElementText('detailProductListItem4', 'p', 'detailProductListItem4Description', data.warrantyInformation);

    createdivElement('detailProductListAll', 'detailProductListItem', 'detailProductListItem5');
    createElementText('detailProductListItem5', 'h5', 'detailProductListItem5Title', 'Shipping');
    createElementText('detailProductListItem5', 'p', 'detailProductListItem5Description', data.shippingInformation);



    // comentar
    createdivElement('detailProductContainer', 'detailProductBoxComment', 'detailProductBoxComment');
    console.log(data.reviews);
    data.reviews.forEach((item, index) => {
        createdivElement('detailProductBoxComment', 'UserCommentItem', `UserCommentItem-${index}`);

        createdivElement(`UserCommentItem-${index}`, 'UserCommentItemImage', `UserCommentItemImage-${index}`);
        createElementImage(`UserCommentItemImage-${index}`, '', ``, '../../component/img/Anonymous_User.jpg');

        createdivElement(`UserCommentItem-${index}`, 'UserCommentItemText', `UserCommentItemText-${index}`);

        createdivElement(`UserCommentItemText-${index}`, 'UserCommentItemName', `UserCommentItemName-${index}`);
        createElementText(`UserCommentItemName-${index}`, 'h5', ``, item.reviewerName);
        createdivElement(`UserCommentItemName-${index}`, 'ratingD', `UserCommentItemCommentRating-${index}`);
        for(let i = 0; i < 5; i++){
            if(i>item.rating - 1) {
            createElementText(`UserCommentItemCommentRating-${index}`, 'p', ``, '☆');
            }
            else{
                createElementText(`UserCommentItemCommentRating-${index}`, 'p', ``, '★');
            }
        }
        createdivElement(`UserCommentItemText-${index}`, 'UserCommentItemComment', `UserCommentItemComment-${index}`);
        createElementText(`UserCommentItemComment-${index}`, 'p', ``, item.comment);
        // createElementText(`UserCommentItemCommentRating-${index}`, 'p', ``, '★'.repeat(item.rating));
        // console.log(item);
    })//☆☆☆☆☆☆

    if(GetComentarUserId(data.id).length != 0){
        for(let i = 0; i < GetComentarUserId(data.id).length; i++){
            createdivElement('detailProductBoxComment', 'UserCommentItem', `UserCommentItem-${i + data.reviews.length}`);
            createdivElement(`UserCommentItem-${i + data.reviews.length}`, 'UserCommentItemImage', `UserCommentItemImage-${i + data.reviews.length}`);
            createElementImage(`UserCommentItemImage-${i + data.reviews.length}`, '', ``, '../../component/img/Anonymous_User.jpg');

            createdivElement(`UserCommentItem-${i + data.reviews.length}`, 'UserCommentItemText', `UserCommentItemText-${i + data.reviews.length}`);

            createdivElement(`UserCommentItemText-${i + data.reviews.length}`, 'UserCommentItemName', `UserCommentItemName-${i + data.reviews.length}`);
            createElementText(`UserCommentItemName-${i + data.reviews.length}`, 'h5', ``, GetComentarUserId(data.id)[i].reviewerName);
            createdivElement(`UserCommentItemName-${i + data.reviews.length}`, 'ratingD', `UserCommentItemCommentRating-${i + data.reviews.length}`);
            for(let j = 0; j < 5; j++){
                if(j > GetComentarUserId(data.id)[i].rating - 1) {
                    createElementText(`UserCommentItemCommentRating-${i + data.reviews.length}`, 'p', ``, '☆');
                }
                else{
                    createElementText(`UserCommentItemCommentRating-${i + data.reviews.length}`, 'p', ``, '★');
                }
            }
            createdivElement(`UserCommentItemText-${i + data.reviews.length}`, 'UserCommentItemComment', `UserCommentItemComment-${i + data.reviews.length}`);
            createElementText(`UserCommentItemComment-${i + data.reviews.length}`, 'p', ``, GetComentarUserId(data.id)[i].comment);
        }
    }

    createdivElement('detailProductBoxComment', 'UserInputComment', 'UserInputComment');

    createdivElement('UserInputComment', 'UserInputCommentTitle', 'UserInputCommentTitle');
    createElementText('UserInputCommentTitle', 'p', 'UserInputCommentName', 'Name : Guest12@');
    // createElementInput('UserInputCommentTitle', 'UserInputCommentName', 'UserInputCommentName', 'text', 'Name : guest12@');
    
    let rating = 0;
    createdivElement('UserInputCommentTitle', 'UserInputCommentRating', 'UserInputCommentRating');
    for(let i = 0; i < 5; i++){
        createdivElement('UserInputCommentRating', 'UserInputCommentRatingItem', `UserInputCommentRatingItem-${i}`);
        createElementTextClass(`UserInputCommentRatingItem-${i}`, 'p', ``,`UserStar-${i}`, '☆');

    document.getElementById(`UserStar-${i}`).onclick = (e) => {
        let usr = document.getElementById(`UserStar-${i}`).innerHTML;
        if(i === 4 && usr === '★' || e.target.innerHTML === '★' && document.getElementById(`UserStar-${i+1}`).innerHTML === '☆'){
            for(let j = 0; j < 5; j++){
                document.getElementById(`UserStar-${j}`).innerHTML = '☆';
            }
            rating = 0;
        }
        // console.log(usr);
        else {
        for(let j = 0; j < 5; j++){
            if(j <= i){
                document.getElementById(`UserStar-${j}`).innerHTML = '★';
                rating = i + 1;
            }else{
                document.getElementById(`UserStar-${j}`).innerHTML = '☆';
            }
        }}
        // console.log(rating);
    }
    }

    createElementInput('UserInputComment', 'UserInputCommentText', 'UserInputCommentText', 'text', '');
    createdivElement('UserInputComment', 'UserInputCommentButton', 'UserInputCommentButton');
    createdivElement('UserInputCommentButton', 'UserInputCommentButtonSubmit', 'UserInputCommentButtonSubmit');
    createElementText('UserInputCommentButtonSubmit', 'p', 'UserInputCommentButtonSubmitText', 'Submit');



    // system

    document.getElementById('UserInputCommentButtonSubmit').onclick = () => {
        if(rating !== 0){
            let comment = document.getElementById('UserInputCommentText').value.trim();
            if(!comment || comment.trim() === '') {return;}
            else{
                if(comment.length > 3){
                    let data_comment = {
                        rating: rating,
                        comment: comment,
                        reviewerName: 'Guest12@',
                        id : data.id,
                    }
                    UserComment.push(data_comment);
                    localStorage.setItem('UserComment', JSON.stringify(UserComment));
                    location.reload();
                }
            }
        }
    }

    document.getElementById('detailProductButtonBuy').onclick = () => {
        location.href = '../purchase/index.html?id=' + data.id;
    }


    function updateSlider(){
    let slider = document.getElementById('sliderBoxDetails');
    const lebarGambar = 300;
    slider.style.transform = `translatex(-${index * lebarGambar}px)`;
}
document.getElementById('sliderContainerRight').onclick = () => {
    index++;
    if(index >= data.images.length){
        index = 0;
    }
    updateSlider();
}
document.getElementById('sliderContainerLeft').onclick = () => {
    index--;
    if(index < 0){
        index = data.images.length - 1;
    }
    updateSlider();
}


}

const getAboutHtml = async(targetId) => {
    createdivElement(targetId, 'aboutContainer', 'aboutContainer');
    createdivElement('aboutContainer', 'aboutContent', 'aboutContent');
    
    createdivElement('aboutContent', 'aboutIconBox', 'aboutIconBox');
    createdivElement('aboutIconBox', 'aboutIcon', 'aboutIconBack');
    createElementIcon('aboutIconBack', 'aboutIconBack', 'arrow-left');

    createdivElement('aboutContent', 'aboutTextBox1', 'aboutTextBox1');
    createElementText('aboutTextBox1', 'h3', 'aboutTextTitle', 'About Us');
    createElementText('aboutTextBox1', 'p', 'aboutTextContent', 'Welcome to our shopping website! We are dedicated to providing you with the best online shopping experience. Our mission is to offer a wide range of products at competitive prices, ensuring quality and customer satisfaction. Thank you for choosing us for your shopping needs.');
    
    createdivElement('aboutContent', 'aboutTextBox2', 'aboutTextBox2');
    // createElementText('aboutTextBox2', 'h3', 'aboutTextTitle2', 'Contact Us');
    createElementText('aboutTextBox2', 'p', 'aboutTextContent2', 'this website just fake Store For making A good Project, this website is not real, just for learning purposes. If you have any questions or need assistance, please feel free to contact us. You can reach us via email at');
    // createElementText('aboutTextBox2', 'p', 'aboutTextContent2', 'If you have any questions or need assistance, please feel free to contact us. You can reach us via email at support@example.com.');
    document.getElementById('aboutIconBack').onclick = () => {
        location.href = '../../index.html';
    }
    }

const getContactHtml = async(targetId) => {
    createdivElement(targetId, 'contactContainer', 'contactContainer');
    createdivElement('contactContainer', 'contactContent', 'contactContent');
    createdivElement('contactContent', 'contactIconBox', 'contactIconBox');
    createdivElement('contactIconBox', 'contactIconBack', 'contactIconBack');
    createElementIcon('contactIconBack', 'contactIconBack', 'arrow-left');

    createdivElement('contactContent', 'contactBBox', 'contactBBox');
    createdivElement('contactBBox', 'contactGround', 'contactGround');

    createdivElement('contactGround', 'contactTextBox1', 'contactTextBox1');
    createdivElement('contactTextBox1', 'contactDevImage', 'contactDevImage');
    createElementImage('contactDevImage', 'contactDevImage', 'contactDevImage', '../../component/img/DevProfile.jpeg');

    createdivElement('contactGround', 'contactBoxContent', 'contactBoxContent');
    createdivElement('contactBoxContent', 'contactDevName', 'contactDevName');
    createElementText('contactDevName', 'p', 'contactDevNameText', 'Fardan');
    createElementIconClass('contactDevName', 'contactDevIcon', 'contactDevIcon', 'user');
    createdivElement('contactBoxContent', 'contactDevEmail', 'contactDevEmail');
    createElementText('contactDevEmail', 'p', 'contactDevEmailText', 'mrfardan11@gmail.com');  
    createElementIconClass('contactDevEmail', 'contactDevIcon', 'contactDevIcon', 'mail');
    createdivElement('contactBoxContent', 'contactDevPhone', 'contactDevPhone');
    createElementText('contactDevPhone', 'p', 'contactDevPhoneText', '+62 858-1075-1139');
    createElementIconClass('contactDevPhone', 'contactDevIcon', 'contactDevIcon', 'phone');
    document.getElementById('contactIconBack').onclick = () => {
        location.href = '../../index.html';
    }
}

const getCommentsHtml = async(targetId) => {
    
    let choice = 0;
    let choiceComment = [];

    createdivElement(targetId, 'commentsContainer', 'commentsContainer');
    createdivElement('commentsContainer', 'commentsContent', 'commentsContent');
    createdivElement('commentsContent', 'commentsIconBox', 'commentsIconBox');
    createdivElement('commentsIconBox', 'commentsIconBack', 'commentsIconBack');
    createElementIcon('commentsIconBack', 'commentsIconBack', 'arrow-left');

    createdivElement('commentsIconBox', 'commentsIconBoxContent', 'commentsIconBoxContent');
    createdivElement('commentsIconBoxContent','commentsTrash', 'commentsTrash');
    createdivElement('commentsTrash', 'commentsTrashIcon', 'commentsTrashIcon');
    createElementIcon('commentsTrashIcon', '', 'trash-2');

    createdivElement('commentsContent', 'commentsBox', 'commentsBox');
    createdivElement('commentsBox', 'commentsBoxTitle', 'commentsBoxTitle');
    createElementText('commentsBoxTitle', 'h3', 'commentsTitle', 'User Comments');

    createdivElement('commentsBox', 'commentsBoxContent', 'commentsBoxContent');
    UserComment.forEach(async (item, index) => {
    let DataSource = await DatalibsInner(`products/${item.id}`);
    
        createdivElement('commentsBoxContent', 'UserCommentItem', `UserCommentItem-${index}`);
        createdivElement(`UserCommentItem-${index}`, 'UserCommentItemImage', `UserCommentItemImage-${index}`);
        createElementImage(`UserCommentItemImage-${index}`, '', ``, '../../component/img/Anonymous_User.jpg');

        createdivElement(`UserCommentItem-${index}`, 'UserCommentItemText', `UserCommentItemText-${index}`);

        createdivElement(`UserCommentItemText-${index}`, 'UserCommentItemName', `UserCommentItemName-${index}`);
        createElementText(`UserCommentItemName-${index}`, 'h5', ``, item.reviewerName);

        createdivElement(`UserCommentItemName-${index}`, 'SourceComment', `SourceComment-${index}`);
        createElementText(`SourceComment-${index}`, 'p', `SourceCommentText-${index}`, `${DataSource.title}`);

        createdivElement(`UserCommentItemName-${index}`, 'ratingD', `UserCommentItemCommentRating-${index}`);
        for(let i = 0; i < 5; i++){
            if(i>item.rating - 1) {
            createElementText(`UserCommentItemCommentRating-${index}`, 'p', ``, '☆');
            }
            else{
                createElementText(`UserCommentItemCommentRating-${index}`, 'p', ``, '★');
            }
        }
        createdivElement(`UserCommentItemText-${index}`, 'UserCommentItemComment', `UserCommentItemComment-${index}`);
        createElementText(`UserCommentItemComment-${index}`, 'p', ``, item.comment);

        document.getElementById(`UserCommentItem-${index}`).onclick = () => {
            if (choice === 1) {
                document.getElementById(`UserCommentItem-${index}`).classList.toggle('Active');
                let isi = UserComment.filter(item => item.Number === item.Number)[index];
                if (document.getElementById(`UserCommentItem-${index}`).classList.contains('Active')) {
                    choiceComment.push(UserComment[index])
                    console.log(choiceComment)
                } else {
                    choiceComment.splice(choiceComment.indexOf(), 1);
                    console.log(choiceComment);
                }
            }
            else {
            location.href = `../details/index.html?id=${item.id}`;
            }
        }

    });

    document.getElementById('commentsIconBack').onclick = () => {
        location.href = '../../index.html';
    }
    document.getElementById('commentsTrash').onclick = () => {
        choice = 1;
        document.getElementById('commentsTrash').style.display = 'none';
        createdivElement('commentsIconBoxContent', 'TextRemove', 'TextRemove');
        createElementText('TextRemove', 'p', '', 'Delete');

        createdivElement('commentsIconBoxContent', 'commentsRemoveCancel', 'commentsRemoveCancel');
        createElementText('commentsRemoveCancel', 'p', '', 'Cancel');


        document.getElementById('TextRemove').onclick = () => {
            if (choiceComment.length == 0) {
                return;
            } else {
                for (let i = 0; i < choiceComment.length; i++) {
                    UserComment.splice(UserComment.indexOf(choiceComment[i]), 1);
                    localStorage.setItem('UserComment', JSON.stringify(UserComment));
                    location.reload();
                }
            }
        }

        
        document.getElementById('commentsRemoveCancel').onclick = () => {
            location.reload();
        }
    }
}

const getCategoriesHtml = async(targetId) => {
    createdivElement(targetId, 'categoriesContainer', 'categoriesContainer');
    createdivElement('categoriesContainer', 'categoriesContent', 'categoriesContent');

    createdivElement('categoriesContent', 'categoriesIconBox', 'categoriesIconBox');
    createLeftChevronBack2V('categoriesIconBox');
    createdivElement('categoriesIconBox','categoriesTitleBoxIcon', 'categoriesTitleBoxIcon');
    createElementText('categoriesTitleBoxIcon', 'h4', 'categoriesTitle', 'Categories');

    createdivElement('categoriesContent', 'categoriesBox', 'categoriesBox');

    window.addEventListener('DOMContentLoaded', async() => {

    createdivElement('categoriesBox', 'categoriesBoxContent1', 'categoriesBoxContent1');
    createdivElement('categoriesBoxContent1', 'categoriesBoxContentTitle', 'categoriesBoxContentTitle');
    createElementText('categoriesBoxContentTitle', 'h4', 'categoriesBoxContentTitleText', 'Groceries');
    getProductCardCategories('categoriesBoxContent1', 'products/category/groceries','A');

    createdivElement('categoriesBox', 'categoriesBoxContent1', 'categoriesBoxContent2');
    createdivElement('categoriesBoxContent2', 'categoriesBoxContentTitle', 'categoriesBoxContentTitle2');
    createElementText('categoriesBoxContentTitle2', 'h4', 'categoriesBoxContentTitleText2', 'Furniture');
    getProductCardCategories('categoriesBoxContent2', 'products/category/furniture','B');
    // console.log(await DatalibsInner('products/categories'));

    createdivElement('categoriesBox', 'categoriesBoxContent1', 'categoriesBoxContent3');
    createdivElement('categoriesBoxContent3', 'categoriesBoxContentTitle', 'categoriesBoxContentTitle3');
    createElementText('categoriesBoxContentTitle3', 'h4', 'categoriesBoxContentTitleText3', 'Home Decoration');
    getProductCardCategories('categoriesBoxContent3', 'products/category/home-decoration','C');


    createdivElement('categoriesBox', 'categoriesBoxContent1', 'categoriesBoxContent4');
    createdivElement('categoriesBoxContent4', 'categoriesBoxContentTitle', 'categoriesBoxContentTitle4');
    createElementText('categoriesBoxContentTitle4', 'h4', 'categoriesBoxContentTitleText4', 'Fragrances');
    getProductCardCategories('categoriesBoxContent4', 'products/category/fragrances','D');

    createdivElement('categoriesBox', 'categoriesBoxContent1', 'categoriesBoxContent5');
    createdivElement('categoriesBoxContent5', 'categoriesBoxContentTitle', 'categoriesBoxContentTitle5');
    createElementText('categoriesBoxContentTitle5', 'h4', 'categoriesBoxContentTitleText5', 'Skincare');
    getProductCardCategories('categoriesBoxContent5', 'products/category/skin-care','E');

    createdivElement('categoriesBox', 'categoriesBoxContent1', 'categoriesBoxContent6');
    createdivElement('categoriesBoxContent6', 'categoriesBoxContentTitle', 'categoriesBoxContentTitle6');
    createElementText('categoriesBoxContentTitle6', 'h4', 'categoriesBoxContentTitleText6', 'Smartphones');
    getProductCardCategories('categoriesBoxContent6', 'products/category/smartphones','F');

    createdivElement('categoriesBox', 'categoriesBoxContent1', 'categoriesBoxContent7');
    createdivElement('categoriesBoxContent7', 'categoriesBoxContentTitle', 'categoriesBoxContentTitle7');
    createElementText('categoriesBoxContentTitle7', 'h4', 'categoriesBoxContentTitleText7', 'Laptops');
    getProductCardCategories('categoriesBoxContent7', 'products/category/laptops','G');

    });
}

const getPurchaseRegisterBOX = async(targetId) => {
    createdivElement(targetId, 'purchaseRegister', 'purchaseRegister');
    createdivElement('purchaseRegister', 'purchaseBoxRegister', 'purchaseBoxRegister');
    createdivElement('purchaseBoxRegister', 'purchaseBoxIcon2', 'purchaseBoxIcon2');
    createdivElement('purchaseBoxIcon2', 'purchaseBoxClose', 'purchaseBoxClose');
    createElementIcon('purchaseBoxClose', 'purchaseBoxCloseIcon', 'x');

    createdivElement('purchaseBoxRegister', 'purchaseBoxTitle', 'purchaseBoxTitle');
    createElementText('purchaseBoxTitle', 'h3', 'purchaseBoxTitleText', 'Register');
    createdivElement('purchaseBoxRegister', 'purchaseBoxForm', 'purchaseBoxForm');
    createdivElement('purchaseBoxForm', 'purchaseBoxFormName', 'purchaseBoxFormName');
    createElementInput('purchaseBoxFormName', 'purchaseBoxFormInput', 'purchaseBoxFormNameInput', 'text', 'Name');
    createdivElement('purchaseBoxForm', 'purchaseBoxFormEmail', 'purchaseBoxFormEmail');
    createElementInput('purchaseBoxFormEmail', 'purchaseBoxFormInput', 'purchaseBoxFormEmailInput', 'email', 'Email');
    createdivElement('purchaseBoxForm', 'purchaseBoxFormPhone', 'purchaseBoxFormPhone');
    createElementInput('purchaseBoxFormPhone', 'purchaseBoxFormInput', 'purchaseBoxFormPhoneInput', 'tel', 'Phone Number');
    createdivElement('purchaseBoxForm', 'purchaseBoxFormAddress', 'purchaseBoxFormAddress');
    createElementInput('purchaseBoxFormAddress', 'purchaseBoxFormInput', 'purchaseBoxFormAddressInput', 'text', 'Address');
    createdivElement('purchaseBoxForm', 'purchaseBoxFormButton', 'purchaseBoxFormButton');
    createElementText('purchaseBoxFormButton', 'p', 'purchaseBoxFormButtonText', 'Submit');

    document.getElementById('purchaseBoxFormButton').onclick = () => {
        let name = document.getElementById('purchaseBoxFormNameInput').value.trim();
        let email = document.getElementById('purchaseBoxFormEmailInput').value.trim();
        let phone = document.getElementById('purchaseBoxFormPhoneInput').value.trim();
        let address = document.getElementById('purchaseBoxFormAddressInput').value.trim();
        // Validate the inputs
        if (!name || !email || !phone || !address) {
            console.log('Please fill in all fields');
            alert('Please fill in all fields');
            return;
        }
        else if(!/^[a-zA-Z\s]+$/.test(name)) {
            console.log('Name must contain only letters and spaces');
            alert('Name must contain only letters and spaces');
            return;
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            console.log('Invalid email format');
            alert('Invalid email format');
            return;
        }
        else if(!/^\+?[0-9]{10,15}$/.test(phone)) {
            console.log('Invalid phone number format');
            alert('Invalid phone number format');
            return;
        }
        else if(!address) {
            console.log('Address is required');
            alert('Address is required');
            return;
        }

        if (name && email && phone && address) {
            // Process the registration
            console.log('Registration successful');
            document.getElementById('purchaseRegister').style.display = 'none';
            document.getElementById('paymentStart').style.display = 'flex';
        } else {
            alert('Please fill in all fields');
            console.log('Please fill in all fields');
        }
    }

    document.getElementById('purchaseBoxClose').onclick = () => {
        document.getElementById('purchaseRegister').style.display = 'none';
    }
}

const getPaymentBox = async(targetId) => {
    createdivElement(targetId, 'paymentStart' , 'paymentStart');
    createdivElement('paymentStart', 'paymentBox', 'paymentBox');
    createdivElement('paymentBox', 'PaymentBoxIcon2', 'PaymentBoxIcon2');
    createdivElement('PaymentBoxIcon2', 'paymentBoxClose', 'paymentBoxClose');
    createElementIcon('paymentBoxClose', 'paymentBoxCloseIcon', 'x');

    createdivElement('paymentBox', 'paymentBoxTitle', 'paymentBoxTitle');
    createElementText('paymentBoxTitle', 'h3', 'paymentBoxTitleText', 'Payment Method');
    createdivElement('paymentBox', 'paymentBoxContent', 'paymentBoxContent');
    createdivElement('paymentBoxContent', 'paymentBoxItem', 'paymentBoxItem1');
    createdivElement('paymentBoxItem1', 'paymentBoxItemImage', 'paymentBoxItemImage1');
    createElementImage('paymentBoxItemImage1', 'paymentBoxItemImage1', 'paymentBoxItemImage1', '../../component/img/paypalLogo.jpg');
    
    createdivElement('paymentBoxItem1', 'paymentBoxItemText', 'paymentBoxItemText1');
    createdivElement('paymentBoxItemText1', 'paymentBoxItemText1Text', 'paymentBoxItemText1Text');
    createElementText('paymentBoxItemText1Text', 'p', 'paymentBoxItemText1Text', 'PayPal');

    createdivElement('paymentBoxItemText1', 'paymentBoxItemTextprice', 'PriceText1');
    createElementText('PriceText1', 'p', 'paymentBoxItemText2', `$ 0.00`);

    document.getElementById('paymentBoxClose').onclick = () => {
        document.getElementById('paymentStart').style.display = 'none';
    }
    document.getElementById('paymentBoxItem1').onclick = async () => {
        let deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + Math.floor(Math.random() * 7) + 1);


        document.getElementById('paymentStart').style.display = 'none';
        document.getElementById('RegisterStart').style.display = 'flex';

        let data = await DatalibsInner(`products/${location.search.split('=')[1]}`);
        console.log(data);
        let uniqueID = crypto.randomUUID().split('-')[0];

        userBuy.push({
            name: document.getElementById('purchaseBoxFormNameInput').value,
            email: document.getElementById('purchaseBoxFormEmailInput').value,
            phone: document.getElementById('purchaseBoxFormPhoneInput').value,
            address: document.getElementById('purchaseBoxFormAddressInput').value,
            product: data.title,
            price: data.price,
            quantity: parseInt(document.getElementById('QtyNumber').value),
            ID: data.id,
            image: data.images[0],
            uniqueID: uniqueID,
            deliveryDate: deliveryDate,
            Date: new Date().toLocaleDateString()

        });
        localStorage.setItem('userBuy', JSON.stringify(userBuy));
        setTimeout(() => {
            document.getElementById('RegisterStart').style.display = 'none';
            location.href = '../keranjang/index.html'
        }, 2000);
    }
}
const getRegistSuccess = async(targetId) => {
    createdivElement(targetId, 'RegisterStart', 'RegisterStart');
    createdivElement('RegisterStart', 'TitleRegisterS', 'TitleRegisterS');
    createElementText('TitleRegisterS', 'h3', '', 'Register Successful');

}

const getPurchaseHtml = async(targetId) => {
    
    createdivElement(targetId, 'purchaseContainer', 'purchaseContainer');
    createdivElement('purchaseContainer', 'purchaseContent', 'purchaseContent');

    try{getPurchaseRegisterBOX('purchaseContent')}catch{}
    document.getElementById('purchaseRegister').style.display = 'none';

    try{getPaymentBox('purchaseContent')}catch{}
    document.getElementById('paymentStart').style.display = 'none';

    try{getRegistSuccess('purchaseContent')}catch{}
    document.getElementById('RegisterStart').style.display = 'none';


    createdivElement('purchaseContent', 'categoriesIconBox', 'purchaseIconBox');
    createdivElement('purchaseIconBox', 'purchaseIconBack', 'purchaseIconBack');
    createElementIcon('purchaseIconBack', 'purchaseIconBack', 'arrow-left');

    let query = location.search;
    let urlParams = new URLSearchParams(query);
    let id = urlParams.get('id');
    const data = await DatalibsInner(`products/${id}`);
    console.log(data);
    document.getElementById('paymentBoxItemText2').innerHTML = `$ ${data.price}`;


    createdivElement('purchaseContent', 'purchaseBox', 'purchaseBox');
    createdivElement('purchaseBox', 'purchaseBoxContent', 'purchaseBoxContent');
    createElementImage('purchaseBoxContent', 'purchaseImage', 'purchaseImage', data.images[0]);

    createdivElement('purchaseBoxContent', 'purchaseBoxInfo', 'purchaseBoxInfo');

    createdivElement('purchaseBoxInfo', 'cardPurchase', 'purchaseBoxCard');
    createElementText('purchaseBoxCard', 'p', 'purchaseText', `${data.title}`);

    createdivElement('purchaseBoxInfo', 'cardPurchase2', 'purchaseBoxQty');

    createdivElement('purchaseBoxQty', 'BTNQty', 'PrevQty');
    createElementText('PrevQty', 'p', 'PrevQtyText', '-');

    createdivElement('purchaseBoxQty', '', 'Qty');
    let Qty = document.createElement('input');
    Qty.className = 'QtyNumber';
    Qty.id = 'QtyNumber';
    Qty.type = 'Text';
    Qty.value = 1;
    Qty.setAttribute('autocomplete', 'off');
    Qty.setAttribute('inputmode', 'numeric');
    Qty.setAttribute('pattern', '[0-9]*');
    Qty.setAttribute('oninput', 'this.value = this.value.replace(/[^0-9]/g, \'\')');
    Qty.setAttribute('onchange', 'if(this.value < 1){this.value = 1;}');
    document.getElementById('purchaseBoxQty').appendChild(Qty);

    createdivElement('purchaseBoxQty', 'BTNQty', 'NextQty');
    createElementText('NextQty', 'p', 'NextQtyText', '+');

    createdivElement('purchaseBoxInfo', 'cardPurchaseBuy', 'purchaseBoxPrice');
    createElementText('purchaseBoxPrice', 'p', 'purchaseBoxPriceText', `$ ${data.price}`);


    document.getElementById('purchaseIconBack').onclick = () => {
        history.back();
    }
    document.getElementById('QtyNumber').oninput = () => {
        let qty = parseInt(document.getElementById('QtyNumber').value);
        document.getElementById('purchaseBoxPriceText').innerHTML = `$ ${data.price * qty}`;
        document.getElementById('paymentBoxItemText2').innerHTML = `$ ${data.price * qty}`;
        if(qty < 1){
            document.getElementById('QtyNumber').value = 1;
            document.getElementById('purchaseBoxPriceText').innerHTML = `$ ${data.price}`;
            document.getElementById('paymentBoxItemText2').innerHTML = `$ ${data.price}`;
        }
        else if(qty > 100){
            document.getElementById('QtyNumber').value = 100;
            document.getElementById('purchaseBoxPriceText').innerHTML = `$ ${data.price * 100}`;
            document.getElementById('paymentBoxItemText2').innerHTML = `$ ${data.price * 100}`;
        }
    }
    document.getElementById('PrevQty').onclick = () => {
        let qty = parseInt(document.getElementById('QtyNumber').value);
        if(qty > 1){
            qty--;
            document.getElementById('QtyNumber').value = qty;
            document.getElementById('purchaseBoxPriceText').innerHTML = `$ ${data.price * qty}`;
            document.getElementById('paymentBoxItemText2').innerHTML = `$ ${data.price * qty}`;
        }
    }
    document.getElementById('NextQty').onclick = () => {
        let qty = parseInt(document.getElementById('QtyNumber').value);
        if(qty < 100){
            qty++;
            document.getElementById('QtyNumber').value = qty;
            document.getElementById('purchaseBoxPriceText').innerHTML = `$ ${data.price * qty}`;
            document.getElementById('paymentBoxItemText2').innerHTML = `$ ${data.price * qty}`;
        }
    }

    document.getElementById('purchaseBoxPrice').onclick = () => {
        document.getElementById('purchaseRegister').style.display = 'flex';
    }

}

const getKeranjangHtml = async(targetId) => {

    let option = 0;
    let choice = []

    createdivElement(targetId, 'keranjangContainer', 'keranjangContainer');
    createdivElement('keranjangContainer', 'keranjangContent', 'keranjangContent');
    createdivElement('keranjangContent', 'keranjangIconBox', 'keranjangIconBox');
    createdivElement('keranjangIconBox', 'keranjangIconBack', 'keranjangIconBack');
    createElementIcon('keranjangIconBack', 'keranjangIconBack', 'arrow-left');

    createdivElement('keranjangIconBox', 'keranjangTitle', 'keranjangTitle');
    createElementText('keranjangTitle', 'h4', '', 'Shopping Cart');


    createdivElement('keranjangIconBox', 'keranjangIconBoxContent', 'keranjangIconBoxContent');
    createdivElement('keranjangIconBoxContent','keranjangTrash', 'keranjangTrash');
    createdivElement('keranjangTrash', 'keranjangTrashIcon', 'keranjangTrashIcon');
    createElementIcon('keranjangTrashIcon', '', 'trash-2');

    createdivElement('keranjangContent', 'keranjangBox', 'keranjangBox');
    userBuy.forEach((item, index) => {
        let deliveryDate = new Date(item.deliveryDate).getDate();
        let now = new Date().getDate();
        let daysDiff = Math.floor((deliveryDate - now));
        createdivElement('keranjangBox', `keranjangItem`, `keranjangItem${index}`);
        createdivElement(`keranjangItem${index}`, 'keranjangItemImage', `keranjangItemImage${index}`);
        createElementImage(`keranjangItemImage${index}`, 'keranjangItemImage','', item.image);

        createdivElement(`keranjangItem${index}`, 'keranjangItemDetails', `keranjangItemDetails${index}`);
        createdivElement(`keranjangItemDetails${index}`, 'keranjangItemDetailsProduct', `keranjangItemDetailsProduct${index}`);
        createElementText(`keranjangItemDetailsProduct${index}`, 'p', '', item.product);

        createdivElement(`keranjangItemDetailsProduct${index}`, '', `keranjangItemDetailsPrice${index}`);
        createElementText(`keranjangItemDetailsPrice${index}`, 'p', '', `$ ${item.price * item.quantity}`);

        createdivElement(`keranjangItemDetails${index}`, 'keranjangItemDetailsQuantity', `keranjangItemDetailsQuantity${index}`);
        createElementText(`keranjangItemDetailsQuantity${index}`, 'p', '', `Quantity : ${item.quantity}`);

        createdivElement(`keranjangItemDetailsQuantity${index}`, 'keranjangItemDetailsDate', `keranjangItemDetailsDate${index}`);
        createElementText(`keranjangItemDetailsDate${index}`, 'p', '', `Est. Delivery : ${new Date(item.deliveryDate).toLocaleDateString()}` + ` (in ${daysDiff}d)`);

        createdivElement(`keranjangItemDetailsQuantity${index}`, 'keranjangItemDetailDateUploaded', `keranjangItemDetailsDateUploaded${index}`);
        createElementText(`keranjangItemDetailsDateUploaded${index}`, 'p', '', `Order Placed : ${item.Date}`);

        // createdivElement(`keranjangItemDetailsQuantity${index}`, 'keranjangItemDetailsDateRemaining', `keranjangItemDetailsDateRemaining${index}`);
        // createElementText(`keranjangItemDetailsDateRemaining${index}`, 'p', '', `Days Remaining : ${daysDiff} days`);

        createdivElement(`keranjangItemDetails${index}`, 'keranjangItemDetailsUser', `keranjangItemDetailsUser${index}`);
        createElementText(`keranjangItemDetailsUser${index}`, 'p', '', `Name : ${item.name}`);
        // createdivElement(`keranjangItemDetailsUser${index}`, '', `keranjangItemDetailsPhoneNumber${index}`);
        // createElementText(`keranjangItemDetailsPhoneNumber${index}`, 'p', '', `${item.phone}`);

        createdivElement(`keranjangItemDetails${index}`, '', `keranjangItemDetailsEmail${index}`);
        createElementText(`keranjangItemDetailsEmail${index}`, 'p', 'keranjangItemDetailsUser', `Gmail : ${item.email}`);

        createdivElement(`keranjangItemDetails${index}`, 'keranjangItemDetailsUser', `keranjangItemDetailsPhone${index}`);
        createElementText(`keranjangItemDetailsPhone${index}`, 'p', '', `Phone : ${item.phone}`);

        createdivElement(`keranjangItemDetails${index}`, 'keranjangItemDetailsAddress', `keranjangItemDetailsAddress${index}`);
        createElementText(`keranjangItemDetailsAddress${index}`, 'p', '', `Address : ${item.address}`);


        document.getElementById(`keranjangItem${index}`).onclick = () => {
            if (option === 1) {
                if (document.getElementById(`keranjangItem${index}`).classList.contains('Active')) {
                    document.getElementById(`keranjangItem${index}`).classList.remove('Active');
                    choice = choice.filter(item => item.uniqueID !== item.uniqueID);
                } else {
                    document.getElementById(`keranjangItem${index}`).classList.add('Active');
                    let isi = userBuy.filter(item => item.uniqueID === item.uniqueID)[index];
                    choice.push(isi);
                }
                console.log(choice);
            }
            else {location.href = `../details/index.html?id=${item.ID}`;}
        }
    })




    document.getElementById('keranjangTrash').onclick = () => {
        option = 1;
        document.getElementById('keranjangTrash').style.display = 'none';
        createdivElement('keranjangIconBoxContent', 'TextRemove', 'TextRemove');
        createElementText('TextRemove', 'p', '', 'Delete');

        createdivElement('keranjangIconBoxContent', 'keranjangRemoveCancel', 'keranjangRemoveCancel');
        createElementText('keranjangRemoveCancel', 'p', '', 'Cancel');

        document.getElementById('keranjangRemoveCancel').onclick = () => {
            location.reload();
        }
        document.getElementById('TextRemove').onclick = () => {
            if (choice.length === 0) {
                alert('No items selected for removal');
            } else {
                // Proceed with removal
                localStorage.setItem('userBuy', JSON.stringify(userBuy.filter(item => !choice.includes(item))));
                location.reload();
            }
        }
        }
    document.getElementById('keranjangIconBack').onclick = () => {
        location.href = '../../index.html';
    }
}

//chechk start
const checkDataSearch = async(targetId,query) => {
    let data = await DatalibsInner(query);
    if (data.products.length == 0){
        try{searchNotFound(`${targetId}`)}catch{}
    }else{
        try{getProduct(`${targetId}`,`${query}`)}catch{}
    }
}

const checkComments = async(targetId) => {
    if (UserComment.length == 0){
        try{createLeftChevronBack(`${targetId}`)}catch{}
        createdivElement(`${targetId}`, 'commentsBoxxl', 'commentsBoxxl');
        createdivElement('commentsBoxxl', 'commentsNotFound', 'commentsNotFound');
        createElementText('commentsNotFound', 'p', '', 'No comments found');
    }else{
        try{getCommentsHtml(`${targetId}`)}catch{}
    }
}
const checkKeranjang = async(targetId) => {
    if (userBuy.length == 0){
        try{createLeftChevronBack(`${targetId}`)}catch{}
        createdivElement(`${targetId}`, 'keranjangBoxxl', 'keranjangBoxxl');
        createdivElement('keranjangBoxxl', 'keranjangNotFound', 'keranjangNotFound');
        createElementText('keranjangNotFound', 'p', '', 'No items found in cart');
    }else{
        try{getKeranjangHtml(`${targetId}`)}catch{}
    }
}
// chechk end







// display ================================
let path = location.pathname
if (path.includes('search1')){   
    document.getElementById('navbarBox').style.display = 'none';
    try{createSearchInputan1('search1Options1',`${historyclick}`)}catch{}
    try{systemInputan1()}catch{}
    try{showSearchHistory1('getSearchHistory')}catch{}
    // localStorage.removeItem('historyclick');
}
else if (path.includes('search')) {
    // document.getElementById('navbarBox').style.display = 'none';
    let query = location.search;
    let urlParams = new URLSearchParams(query);
    let search = urlParams.get('q');
    console.log(search);
    navbar1a('navbar1a',`${search}`);
    // try{getProduct('getProduct',`products/search?q=${search}&limit=20&skip=5`)}catch{}

    try{checkDataSearch('getProduct',`products/search?q=${search}`)}catch{}
    // try{getProduct('getProduct',`products/search?q=${search}`)}catch{}
    localStorage.removeItem('historyclick');

}
else if (path.includes('about')) {
    try{getAboutHtml('getAboutContent')}catch{}
}
else if (path.includes('contact')) {
    try{getContactHtml('getContactContent')}catch{}
}
else if (path.includes('comments')) {
    try{checkComments('getComments')}catch{}
}
else if (path.includes('categories')) {
    try{getCategoriesHtml('getCategoriesContent')}catch{}
}
else if (path.includes('details')) {
    // document.getElementById('navbarBox').style.display = 'none';
    try{getDetailProduct('detailProduct')}catch{}
}
else if (path.includes('purchase')) {
    // document.getElementById('navbarBox').style.display = 'none';
    try{getPurchaseHtml('getPurchaseContent')}catch{}

}
else if (path.includes('keranjang')) {
    // try{getKeranjangHtml('getKeranjang')}catch{}
    try{checkKeranjang('getKeranjang')}catch{}
} else {
    try{getProduct('getProduct','products?limit=20&skip=5')}catch{}
}

// display end ============================