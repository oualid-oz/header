var item = document.querySelectorAll(".item");
for (let i = 0; i < item.length; i++) {
    item[i].querySelector("a").addEventListener("click", function() {
        for (let j = 0; j < item.length; j++) {
            item[j].classList.remove("active");
        }
        item[i].classList.add("active");
    })
    
}