//get json off github
function load(url, type) {
    let promise = new Promise(function(resolve, reject) {
        console.log("1");
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = type;

        request.onload = function() {
            resolve(request.response);
        };

        request.send();
    });

    return promise;
}

// Use json file to make a html page
load('https://derek312.github.io/Module4ProjectJS/products.json', 'json').then(function(jsonObj) {
    let products = jsonObj.strangeProducts;
    console.log("2");
    for(let i = 0; i < products.length; i++) {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let ul = document.createElement('ul');
        let body = document.querySelector('body');
        console.log("3");
        //fill h2 text with the name from json file
        h2.textContent = products[i].name;
        //set image using the image names from the json and the github pages link
        img.setAttribute('src', 'https://derek312.github.io/Module4ProjectJS/images/' + products[i].image);
        img.setAttribute('alt', products[i].image);
        //set to price from the json
        p.textContent = "Price: $" + products[i].price;
        console.log("4");
        //create list elements using the json file details list
        for(let h = 0; j < products[i].details.length; h++) {
            let list = document.createElement('li');
            list.textContent = products[i].details[h];
            ul.appendChild(list);
            console.log("5");
        }
        // Add the elements to the html page
        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(ul);
        body.appendChild(div);
        console.log("6");
    }
});