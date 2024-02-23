
function chatBot(userInput) {

    switch (userInput.toLowerCase().trim()) {
      case 'hi':
      case 'hello':
        return "Hello there! How can I help you?";
      case 'how are you?':
        return "I'm just a bot, but thanks for asking!";
      case 'bye':
        return "Goodbye! Have a great day!";
      default:
        return "I'm sorry, I didn't quite get that. Can you try asking another way?";
    }
  }
  
  // Function to simulate conversation with the bot in the console
  function startChat() {
    console.log("Bot: Hello! Type 'bye' to exit the chat.");
    let userInput = '';
    
    // Continuously prompt user for input until they type 'bye'
    while (userInput.toLowerCase().trim() !== 'bye') {
      userInput = prompt('You: ');
      const botResponse = chatBot(userInput);
      console.log(`Bot: ${botResponse}`);
    }
  }
  
  // Start the conversation
  startChat();
  