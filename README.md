# E-commerce-<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>E-commerce Chatbot</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background: #f5f5f5;
    }
    #chatbot {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 300px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        border-radius: 10px;
        overflow: hidden;
        background: white;
    }
    #chatbot-header {
        background: #007bff;
        color: white;
        padding: 10px;
        cursor: pointer;
        text-align: center;
    }
    #chatbot-messages {
        height: 300px;
        overflow-y: auto;
        padding: 10px;
        background: #f9f9f9;
    }
    .message {
        margin: 5px 0;
        padding: 8px 12px;
        border-radius: 10px;
        max-width: 80%;
    }
    .user {
        background: #007bff;
        color: white;
        margin-left: auto;
    }
    .bot {
        background: #e0e0e0;
        color: black;
        margin-right: auto;
    }
    #chatbot-input {
        display: flex;
        border-top: 1px solid #ddd;
    }
    #chatbot-input input {
        flex: 1;
        padding: 10px;
        border: none;
    }
    #chatbot-input button {
        padding: 10px;
        background: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
</head>
<body>

<div id="chatbot">
    <div id="chatbot-header">E-commerce Bot</div>
    <div id="chatbot-messages"></div>
    <div id="chatbot-input">
        <input type="text" id="userInput" placeholder="Ask about products...">
        <button onclick="sendMessage()">Send</button>
    </div>
</div>

<script>
const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('userInput');

const botResponses = {
    "hi": "Hello! Welcome to our store. How can I help you?",
    "hello": "Hi there! Looking for something special?",
    "products": "We have laptops, smartphones, and accessories. What are you interested in?",
    "laptop": "Our laptops start from $500. Do you want me to show the top deals?",
    "smartphone": "We have smartphones from $200. Would you like to see the best offers?",
    "thank you": "You're welcome! Feel free to ask anything else.",
    "bye": "Goodbye! Have a great day shopping with us!"
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // Show user message
    const userMsg = document.createElement('div');
    userMsg.classList.add('message', 'user');
    userMsg.textContent = message;
    chatbotMessages.appendChild(userMsg);

    // Show bot response
    const botMsg = document.createElement('div');
    botMsg.classList.add('message', 'bot');
    const response = getBotResponse(message.toLowerCase());
    botMsg.textContent = response;
    chatbotMessages.appendChild(botMsg);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    userInput.value = "";
}

function getBotResponse(input) {
    for (const key in botResponses) {
        if (input.includes(key)) return botResponses[key];
    }
    return "Sorry, I didn't understand that. Can you ask about our products?";
}

// Toggle chatbot
document.getElementById('chatbot-header').addEventListener('click', () => {
    const bot = document.getElementById('chatbot');
    if (bot.style.height === "50px") {
        bot.style.height = "auto";
        document.getElementById('chatbot-messages').style.display = "block";
        document.getElementById('chatbot-input').style.display = "flex";
    } else {
        bot.style.height = "50px";
        document.getElementById('chatbot-messages').style.display = "none";
        document.getElementById('chatbot-input').style.display = "none";
    }
});
</script>

</body>
</html>
