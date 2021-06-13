const user_body = document.querySelector(".user-info");

function keyEnter() {
    if (window.event.keyCode == 13) {
        const user_name = document.querySelector(".user_input").value;
        // Set back to initial state
        document.querySelector(".quotes-text").style.display = "";
        document.querySelector(".quotes-author").style.display = "";
        document.querySelector(".js-clock").style.display = "";
        document.querySelector(".greetings").style.display = "";
        document.querySelector(".weather").style.display = "";
        document.getElementById("todo-form").style.display = "";
        document.querySelector(".initial_info").style.display = "none";
        document.querySelector(".user_input").style.display = "none";

        localStorage.setItem("user_name",user_name);


    }
}

function init() {
    const user_name = localStorage.getItem('user_name') || "";
    if(user_name === "") {
        // Disable all elements if user information is null
        document.querySelector(".quotes-text").style.display = "none";
        document.querySelector(".quotes-author").style.display = "none";
        document.querySelector(".js-clock").style.display = "none";
        document.querySelector(".greetings").style.display = "none";
        document.querySelector(".weather").style.display = "none";
        document.getElementById("todo-form").style.display = "none";

        // Add input box to get user info
        let initial_info = document.createElement("p");
        initial_info.setAttribute("class","initial_info");
        initial_info.innerHTML ="Hello, what is your name?";
        user_body.appendChild(initial_info);
        let input_box = document.createElement("input");
        input_box.setAttribute("type","text");
        input_box.setAttribute("class","user_input");
        input_box.onkeyup = keyEnter;
        user_body.appendChild(input_box);
    }
    else {

    }
}

init();