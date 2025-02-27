// Function to start a new discussion
function startDiscussion() {
    let topic = prompt("Enter the topic for discussion:");
    if (topic) {
        let discussionContainer = document.querySelector(".forum-container");

        let newDiscussion = document.createElement("div");
        newDiscussion.classList.add("discussion");

        newDiscussion.innerHTML = `
            <h3>📝 ${topic}</h3>
            <p>New discussion started by you.</p>
            <div class="discussion-info">
                <span>👤 You</span> | <span>📅 Just now</span>
                <button onclick="likePost(this)">👍 Like <span>0</span></button>
            </div>
        `;

        discussionContainer.prepend(newDiscussion);
    }
}

// Function to like a post
function likePost(button) {
    let count = button.querySelector("span");
    count.textContent = parseInt(count.textContent) + 1;
}
