import React, { useState } from 'react';
import { Send, Bot, Sparkles, User, RefreshCw } from 'lucide-react';

const SUGGESTIONS = [
  'What can you do?',
  'Show me pricing',
  'Book a demo',
  'Talk to a human'
];

const PRESET_ANSWERS = {
  'What can you do?':
    "I'm GT, the Xtreme cards concierge! I can help you select the ideal card material (24K Gold, Matte Black, Stainless Steel, Bamboo, PVC), provide estimated pricing, calculate production lead times, and set up custom design proofs.",
  'Show me pricing':
    "Our card solutions start from refined executive PVC batches to luxury handcrafted 24K gold and titanium metal cards. Would you like a personalized quote based on your quantity and required finishes?",
  'Book a demo':
    "We offer physical sample demonstration kits delivered directly to corporate offices in 50+ countries. You can experience the weight, laser etching, and NFC functionality in person.",
  'Talk to a human':
    "Our senior card consultant is available right now via WhatsApp or direct phone consultation. Click 'Make enquiries' or message us on WhatsApp to speak directly with our team!"
};

export default function GtAiAssistant({ onOpenQuote }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi, I'm GT. Ask me anything, or pick a starting point below."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = PRESET_ANSWERS[text];
      if (!reply) {
        if (text.toLowerCase().includes('metal') || text.toLowerCase().includes('gold')) {
          reply = "Our metal cards are crafted from aerospace-grade 316L stainless steel available in 0.5mm, 0.8mm, and 1.0mm thickness with 24K Gold, Matte Black, or Brushed Gunmetal finish.";
        } else if (text.toLowerCase().includes('nfc') || text.toLowerCase().includes('smart')) {
          reply = "All our smart cards feature high-performance NTAG216 or dual-frequency RFID/NFC chips compatible with iPhone and Android without needing any app!";
        } else if (text.toLowerCase().includes('time') || text.toLowerCase().includes('delivery')) {
          reply = "Standard turnaround is 5-7 business days from digital proof approval to dispatch, with worldwide express courier delivery.";
        } else {
          reply = "Thanks for asking! We specialize in premium custom-engineered identity and access cards. Would you like to request a bespoke quotation or sample kit for your organization?";
        }
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '28px',
        border: '1px solid rgba(19, 21, 21, 0.08)',
        boxShadow: 'var(--shadow-card)',
        maxWidth: '760px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(19, 21, 21, 0.06)',
          paddingBottom: '16px',
          marginBottom: '18px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #131515 0%, #313636 100%)',
              color: '#cfa34b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(160, 92, 255, 0.25)'
            }}
          >
            <Bot size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#131515' }}>GT Assistant</span>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#12a70a' }}></span>
            </div>
            <span style={{ fontSize: '12px', color: '#686d6d' }}>AI Concierge • Online</span>
          </div>
        </div>

        <button
          onClick={() => {
            setMessages([{ sender: 'bot', text: "Hi, I'm GT. Ask me anything, or pick a starting point below." }]);
          }}
          style={{
            fontSize: '12px',
            color: '#686d6d',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            borderRadius: '6px'
          }}
          title="Reset chat"
        >
          <RefreshCw size={13} />
          <span>Reset</span>
        </button>
      </div>

      {/* Chat Messages Log */}
      <div
        style={{
          minHeight: '140px',
          maxHeight: '260px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '18px',
          paddingRight: '6px'
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: '10px',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%'
            }}
          >
            {msg.sender === 'bot' && (
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#131515',
                  color: '#cfa34b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Bot size={13} />
              </div>
            )}
            <div
              style={{
                backgroundColor: msg.sender === 'user' ? '#131515' : '#f3f2ef',
                color: msg.sender === 'user' ? '#ffffff' : '#131515',
                padding: '11px 16px',
                borderRadius: '16px',
                fontSize: '14px',
                lineHeight: 1.5,
                borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px'
              }}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#eae8e4',
                  color: '#131515',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <User size={13} />
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div style={{ display: 'flex', gap: '6px', padding: '8px 12px', color: '#686d6d', fontSize: '13px' }}>
            <span style={{ fontStyle: 'italic' }}>GT is typing...</span>
          </div>
        )}
      </div>

      {/* Suggested Quick Question Pills */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '14px'
        }}
      >
        {SUGGESTIONS.map((item) => (
          <button
            key={item}
            onClick={() => handleSend(item)}
            style={{
              padding: '6px 14px',
              borderRadius: '50px',
              backgroundColor: '#f6f5f2',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              fontSize: '12.5px',
              color: '#494d4d',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#131515';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f6f5f2';
              e.currentTarget.style.color = '#494d4d';
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Message Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{
          display: 'flex',
          gap: '8px'
        }}
      >
        <input
          type="text"
          placeholder="Ask GT anything about cards, materials, or pricing..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            flex: 1,
            padding: '11px 16px',
            borderRadius: '50px',
            border: '1px solid rgba(19, 21, 21, 0.12)',
            backgroundColor: '#fbfbfb',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{
            padding: '11px 20px',
            borderRadius: '50px',
            fontSize: '13.5px'
          }}
        >
          <span>Ask</span>
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}
