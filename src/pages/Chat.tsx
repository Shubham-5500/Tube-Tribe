
import { useState, useEffect, FormEvent } from "react";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Search, Send, MoreVertical, Phone, Video, Info, Paperclip, Image, Smile } from "lucide-react";

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  isGroup?: boolean;
}

interface Message {
  id: number;
  text: string;
  time: string;
  sender: "me" | "them";
}

// Initial dummy data for conversations
const initialConversations: Conversation[] = [
  {
    id: 1,
    name: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "I'd love to collaborate on your next project!",
    time: "10:30 AM",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Tech Insights",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Can you review my latest script?",
    time: "Yesterday",
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: "Video Editing Group",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Marcus: The new template is ready for review",
    time: "Yesterday",
    unread: 0,
    online: false,
    isGroup: true
  },
  {
    id: 4,
    name: "David Chen",
    avatar: "https://i.pravatar.cc/150?img=7",
    lastMessage: "Thanks for the feedback on my channel!",
    time: "Monday",
    unread: 0,
    online: true
  },
  {
    id: 5,
    name: "Studio Secrets",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "We launched our new lighting tutorial",
    time: "Sunday",
    unread: 0,
    online: false
  }
];

// Initial messages for the first conversation
const initialMessages: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      text: "Hey there! I saw your latest video on camera setups and it was amazing!",
      time: "10:15 AM",
      sender: "them"
    },
    {
      id: 2,
      text: "Thanks so much! I spent a lot of time optimizing the tutorial flow.",
      time: "10:17 AM",
      sender: "me"
    },
    {
      id: 3,
      text: "It definitely showed. The lighting section was particularly helpful.",
      time: "10:18 AM",
      sender: "them"
    },
    {
      id: 4,
      text: "I'm working on a similar project and would love to collaborate. Would you be interested?",
      time: "10:20 AM",
      sender: "them"
    },
    {
      id: 5,
      text: "Absolutely! I've been looking for collaboration opportunities. What's your project about?",
      time: "10:25 AM",
      sender: "me"
    },
    {
      id: 6,
      text: "I'm creating a series on budget filmmaking for beginners. Your expertise would be perfect for the equipment selection episode.",
      time: "10:28 AM",
      sender: "them"
    },
    {
      id: 7,
      text: "I'd love to collaborate on your next project!",
      time: "10:30 AM",
      sender: "them"
    }
  ],
  2: [
    {
      id: 1,
      text: "Can you review my latest script?",
      time: "Yesterday",
      sender: "them"
    }
  ],
  3: [
    {
      id: 1,
      text: "Welcome to the Video Editing Group!",
      time: "Last week",
      sender: "them"
    },
    {
      id: 2,
      text: "Marcus: The new template is ready for review",
      time: "Yesterday",
      sender: "them"
    }
  ],
  4: [
    {
      id: 1,
      text: "I really enjoyed your last video!",
      time: "Monday",
      sender: "them"
    },
    {
      id: 2,
      text: "Thanks for the feedback on my channel!",
      time: "Monday",
      sender: "them"
    }
  ],
  5: [
    {
      id: 1,
      text: "We launched our new lighting tutorial",
      time: "Sunday",
      sender: "them"
    }
  ]
};

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  
  // Initialize data from localStorage or use initial data
  useEffect(() => {
    const storedConversations = localStorage.getItem("conversations");
    const storedMessages = localStorage.getItem("messages");
    
    if (storedConversations) {
      setConversations(JSON.parse(storedConversations));
    } else {
      setConversations(initialConversations);
    }
    
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages(initialMessages);
    }
  }, []);

  // Set selected conversation on initial load
  useEffect(() => {
    if (conversations.length > 0 && !selectedConversation) {
      setSelectedConversation(conversations[0]);
    }
  }, [conversations, selectedConversation]);

  // Update localStorage when data changes
  useEffect(() => {
    if (conversations.length > 0) {
      localStorage.setItem("conversations", JSON.stringify(conversations));
    }
    if (Object.keys(messages).length > 0) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [conversations, messages]);

  const filteredConversations = conversations.filter(conv => 
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (messageInput.trim() && selectedConversation) {
      const convId = selectedConversation.id;
      const now = new Date();
      const timeString = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0') + " " + (now.getHours() >= 12 ? "PM" : "AM");
      
      // Create new message
      const newMessage: Message = {
        id: (messages[convId]?.length || 0) + 1,
        text: messageInput,
        time: timeString,
        sender: "me"
      };
      
      // Update messages
      const updatedMessages = { ...messages };
      if (!updatedMessages[convId]) {
        updatedMessages[convId] = [];
      }
      updatedMessages[convId] = [...updatedMessages[convId], newMessage];
      setMessages(updatedMessages);
      
      // Update conversation last message
      const updatedConversations = conversations.map(conv => {
        if (conv.id === selectedConversation.id) {
          return {
            ...conv,
            lastMessage: messageInput,
            time: "Just now"
          };
        }
        return conv;
      });
      setConversations(updatedConversations);
      
      setMessageInput("");
      
      // Simulate response after 1-3 seconds
      if (selectedConversation.id !== 3) { // Don't auto-reply in group chat
        setTimeout(() => {
          const responseTexts = [
            "That's interesting! Tell me more.",
            "Great point! I agree.",
            "I'll think about that and get back to you.",
            "Thanks for sharing that information.",
            "Let's discuss this further next time we meet."
          ];
          const randomResponse = responseTexts[Math.floor(Math.random() * responseTexts.length)];
          const responseTime = new Date();
          const responseTimeString = responseTime.getHours() + ":" + responseTime.getMinutes().toString().padStart(2, '0') + " " + (responseTime.getHours() >= 12 ? "PM" : "AM");
          
          const responseMessage: Message = {
            id: updatedMessages[convId].length + 1,
            text: randomResponse,
            time: responseTimeString,
            sender: "them"
          };
          
          const newUpdatedMessages = { ...updatedMessages };
          newUpdatedMessages[convId] = [...newUpdatedMessages[convId], responseMessage];
          setMessages(newUpdatedMessages);
          
          // Update conversation last message
          const newConversations = updatedConversations.map(conv => {
            if (conv.id === selectedConversation.id) {
              return {
                ...conv,
                lastMessage: randomResponse,
                time: "Just now"
              };
            }
            return conv;
          });
          setConversations(newConversations);
        }, Math.random() * 2000 + 1000); // Random delay between 1-3 seconds
      }
    }
  };

  const handleConversationClick = (conversation: Conversation) => {
    // Mark as read when clicking
    const updatedConversations = conversations.map(conv => {
      if (conv.id === conversation.id) {
        return {
          ...conv,
          unread: 0
        };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setSelectedConversation(conversation);
  };

  return (
    <AuthLayout>
      <div className="max-w-7xl mx-auto h-[calc(100vh-80px)]">
        <div className="h-full flex flex-col md:flex-row">
          {/* Sidebar - Conversation List */}
          <div className="w-full md:w-80 border-r border-border flex flex-col">
            <div className="p-4 border-b border-border">
              <h1 className="text-2xl font-bold mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
                <Input 
                  placeholder="Search conversations" 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <ScrollArea className="flex-grow">
              {filteredConversations.length > 0 ? (
                <div className="py-2">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`px-4 py-3 hover:bg-secondary/50 cursor-pointer ${selectedConversation?.id === conversation.id ? 'bg-secondary' : ''}`}
                      onClick={() => handleConversationClick(conversation)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <img src={conversation.avatar} alt={conversation.name} className="h-full w-full object-cover" />
                          </Avatar>
                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{conversation.name}</p>
                            <span className="text-xs text-foreground/60 whitespace-nowrap">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-foreground/70 truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <span className="h-5 w-5 rounded-full bg-tribe-purple text-white text-xs flex items-center justify-center">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-foreground/60">
                  No conversations found
                </div>
              )}
            </ScrollArea>
          </div>
          
          {/* Main Chat Area */}
          {selectedConversation ? (
            <div className="flex-grow flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <img src={selectedConversation.avatar} alt={selectedConversation.name} className="h-full w-full object-cover" />
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedConversation.name}</p>
                    {selectedConversation.online && <p className="text-xs text-green-500">Online</p>}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Info className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <ScrollArea className="flex-grow p-4 h-full">
                <div className="space-y-4">
                  {messages[selectedConversation.id]?.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-lg ${
                          message.sender === 'me'
                            ? 'bg-tribe-purple text-white rounded-br-none'
                            : 'bg-secondary rounded-bl-none'
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-white/70' : 'text-foreground/60'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <Button type="button" size="icon" variant="ghost">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button type="button" size="icon" variant="ghost">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="button" size="icon" variant="ghost">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button type="submit" size="icon" className="gradient-bg hover:opacity-90">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-foreground/60">Select a conversation to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Chat;
