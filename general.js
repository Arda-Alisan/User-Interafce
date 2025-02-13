function showAlert(id, type, message) {
    const header = document.getElementById(id);
    const div = document.createElement("div");
    div.className = `alert alert-${type}`; // literal template
    div.textContent = message;
    div.style.fontFamily = "cursive"
    div.style.fontSize = "18px";
    div.style.position = "fixed";
    div.style.top = "30px";
    div.style.right = "40%";
    div.style.opacity = 1;
    header.appendChild(div);

    function transparent() {
        if (div.style.opacity > 0)
            div.style.opacity -= 0.05;

    }
    setTimeout(() => {
        id = setInterval(transparent, 50);
    }, 1000);

}

function addComment() {
    // Created function that takes name and comment
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;


    if (name.trim() === "" || comment.trim() === "") {
        alert("Lütfen adınızı ve yorumunuzu girin.");
        return;
    }


    var sendComment = document.getElementById("btn-sendComment");
    var commentsDiv = document.getElementById("comments");
    var newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("border", "p-3", "mb-3");
    var commentContent = "<strong>" + name + ":</strong> " + comment;
    newCommentDiv.innerHTML = commentContent;
    sendComment.insertAdjacentElement('afterend', newCommentDiv)

    // Clear comment fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}


