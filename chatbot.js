document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Event Listeners
    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        let userMessage = userInput.value.trim();
        if (userMessage === "") return; // Prevent empty messages

        // Display user message
        let userMsgElement = document.createElement("p");
        userMsgElement.classList.add("user-message");
        userMsgElement.innerText = userMessage;
        chatBox.appendChild(userMsgElement);

        // Get bot response
        let botResponse = getBotResponse(userMessage.toLowerCase());

        // Display bot message
        let botMsgElement = document.createElement("p");
        botMsgElement.classList.add("bot-message");
        botMsgElement.innerText = botResponse;
        chatBox.appendChild(botMsgElement);

        // Clear input and auto-scroll
        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(input) {
        const responses = {
            "hello": "👋 Hi there! How can I assist you?",
            "hi": "Hello! Ask me anything about farming.",
            "what is the best crop for my region?": "🌾 It depends on your soil and climate. Let me know your location!",
            "how can i prevent pest attacks?": "🐞 Use organic pesticides or rotate crops regularly.",
            "best time to plant wheat?": "🌱 Wheat is best planted between October and December in India.",
            "how to test soil quality?": "🧪 Use a soil testing kit or contact your local agricultural office.",
            "how often should i water my crops?": "🚰 It depends on the crop! Most require water every 2-3 days.",
            "best fertilizer for tomatoes?": "🍅 Use a nitrogen-rich fertilizer with organic compost.",
            "how to improve soil fertility?": "🌿 Add compost, organic manure, and rotate crops.",
            "best way to store harvested crops?": "🏠 Store in a cool, dry place with proper ventilation.",
            "how to control weeds naturally?": "🌱 Mulching and manual removal work best!",
            "where to buy quality seeds?": "🌾 Check government-certified seed suppliers or reliable online platforms.",
            "how to increase yield?": "🌟 Use high-quality seeds, proper irrigation, and pest control.",
            "best irrigation method?": "💧 Drip irrigation is efficient and saves water.",
            "how to start organic farming?": "🍀 Use natural fertilizers, avoid chemicals, and rotate crops.",
            "how to sell crops online?": "📱 Use platforms like BigHaat, Krishify, or government e-marketplaces.",
            "which pesticide is safe?": "🐝 Organic neem-based pesticides are safe and effective.",
            "how to detect plant disease?": "🔬 Check for color changes, wilting, or unusual spots on leaves.",
            "best way to store grains?": "🌾 Keep them in airtight containers to avoid moisture and pests.",
            "thank you": "😊 You're welcome! Happy farming!",
        };

        return responses[input] || "🤖 Sorry, I don't understand. Try asking about farming!";
    }
});
