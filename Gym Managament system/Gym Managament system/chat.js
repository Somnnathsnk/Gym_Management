const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");

// Function to send a message
function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  // Create message element
  const message = document.createElement("div");
  message.classList.add("message", "sent");
  message.textContent = text;

  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
  messageInput.value = "";

  // Simulate reply after 1.5 sec
  setTimeout(() => {
    receiveMessage("Got it! 👍");
  }, 1500);
}

// Function to simulate receiving a message
function receiveMessage(text) {
  const message = document.createElement("div");
  message.classList.add("message", "received");
  message.textContent = text;

  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}
