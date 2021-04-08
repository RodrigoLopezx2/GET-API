const button = document.getElementById("random");
const image = document.getElementById("imagen");
const url = "https://thatcopy.pw/catapi/rest/";
const llamarAPI = async ()=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        image.src = data.url;
    } catch (error) {
        console.log(error.message)
    }

}

button.addEventListener("click", ()=>{
    llamarAPI();
})

llamarAPI();