const lists = document.querySelectorAll(".slider > ul");


lists.forEach(list => {
    const items = list.querySelectorAll("li");
    for(const item of items){
        const element = item.cloneNode(true);
        element.setAttribute('aria-hidden', true);
        list.appendChild(element);
    }
})