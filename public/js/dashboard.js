function logout() {
   localStorage.clear();
   goto("/users/logout");
}
function alerT() {
    
}
const placeName = () => {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    document.getElementById("name").innerHTML = data.name;
}
if (localStorage.getItem("user")) {
    placeName();
} else {
    const p = new Pop();
    p.body = "Please login...";
    p.show();
    setTimeout(() => {
        window.location.href = "/users/logout";
    }, 3000);
}
