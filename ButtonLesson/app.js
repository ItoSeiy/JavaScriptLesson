const list_button = document.getElementById("list-button")
list_button.addEventListener("click", func = () => {
    const list = document.getElementsByClassName("list")[0]
    list.classList.add("list")
    list.classList.toggle("js-list-selected")
});

const image_button = document.getElementById("image-button")
image_button.addEventListener("click", func = () => {

});