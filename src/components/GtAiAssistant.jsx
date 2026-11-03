import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, X, MessageSquare, Sparkles } from 'lucide-react';

const SUGGESTIONS = [
  'What can you do?',
  'Show me pricing',
  'Book a demo',
  'Talk to a human'
];

const PRESET_ANSWERS = {
  'What can you do?':
    "I'm GT, your personal Xtreme Cardz concierge! I can help you explore premium card materials (24K Gold, Matte Black, Stainless Steel, Hybrid Metal, Bamboo), estimate pricing, explain NFC chip options, and arrange bespoke design proofs.",
  'Show me pricing':
    "Our bespoke cards range from luxury handcrafted 24K mirror gold and brushed titanium to high-tech NFC cards and executive hybrid finishes. Tap 'Request Quote' to get personalized pricing tailored to your quantity and custom specs!",
  'Book a demo':
    "We provide physical luxury sample kits delivered straight to corporate offices worldwide. You can feel the exact weight, laser etching depth, and tap the instant NFC functionality in person.",
  'Talk to a human':
    "Our senior card specialists are on standby! You can reach us instantly via WhatsApp or book a direct telephone consultation for your bespoke executive order."
};

export default function GtAiAssistant({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi, I'm GT. Ask me anything, or pick a starting point below."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = PRESET_ANSWERS[text];
      if (!reply) {
        const lower = text.toLowerCase();
        if (lower.includes('metal') || lower.includes('gold')) {
          reply = "Our metal cards are engineered from aerospace-grade 316L stainless steel available in 0.5mm, 0.8mm, and 1.0mm thickness with 24K Gold, Matte Black, or Brushed Gunmetal finish.";
        } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
          reply = "Pricing depends on your chosen material, custom cutout complexity, and quantity. Would you like to submit a quick quote request?";
        } else if (lower.includes('nfc') || lower.includes('smart') || lower.includes('chip')) {
          reply = "Every smart card includes high-frequency NTAG216 or dual-frequency RFID/NFC microchips compatible with iPhone and Android without needing any app!";
        } else if (lower.includes('time') || lower.includes('delivery') || lower.includes('ship')) {
          reply = "Turnaround is 5-7 business days from digital proof approval to dispatch, with worldwide express courier delivery.";
        } else {
          reply = "Thanks for asking! We specialize in bespoke identity and metal business cards for visionary brands. Would you like to request a tailored quote or demo kit?";
        }
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
      if (!isOpen) {
        setHasUnread(true);
      }
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Hi, I'm GT. Ask me anything, or pick a starting point below."
      }
    ]);
  };

  return (
    <>
      <style>{`
        @keyframes gtGlowPulse {
          0% {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45), 0 0 16px rgba(16, 185, 129, 0.45), inset 0 2px 3px rgba(255, 255, 255, 0.45);
          }
          50% {
            box-shadow: 0 10px 32px rgba(0, 0, 0, 0.55), 0 0 28px rgba(52, 211, 153, 0.75), inset 0 2px 3px rgba(255, 255, 255, 0.6);
          }
          100% {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45), 0 0 16px rgba(16, 185, 129, 0.45), inset 0 2px 3px rgba(255, 255, 255, 0.45);
          }
        }
        @keyframes gtShineRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gtOnlinePing {
          0% { transform: scale(0.95); opacity: 0.9; }
          50% { transform: scale(1.4); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.9; }
        }
      `}</style>

      {/* Floating Container - Anchored to bottom right corner */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pointerEvents: 'none'
        }}
      >
        {/* Chatbox Window */}
        {isOpen && (
          <div
            style={{
              pointerEvents: 'auto',
              width: 'min(390px, calc(100vw - 32px))',
              height: 'min(560px, calc(100vh - 120px))',
              marginBottom: '14px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(19, 21, 21, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              transformOrigin: 'bottom right'
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'linear-gradient(135deg, #131515 0%, #1c221f 60%, #064e3b 100%)',
                color: '#ffffff',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 30%, #34d399 0%, #10b981 35%, #064e3b 75%, #000000 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 10px rgba(16, 185, 129, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  <Bot size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.2px' }}>
                      GT Assistant
                    </span>
                    <span
                      style={{
                        position: 'relative',
                        display: 'flex',
                        width: '8px',
                        height: '8px'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          backgroundColor: '#34d399',
                          animation: 'gtOnlinePing 2s infinite'
                        }}
                      />
                      <span
                        style={{
                          position: 'relative',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#10b981'
                        }}
                      />
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)' }}>
                    AI Concierge • Online
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                  title="Reset conversation"
                >
                  <RefreshCw size={12} />
                  <span>Reset</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
                  title="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                backgroundColor: '#faf9f6'
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
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 35% 30%, #34d399 0%, #10b981 40%, #064e3b 80%, #000000 100%)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <Bot size={14} />
                    </div>
                  )}

                  <div
                    style={{
                      backgroundColor: msg.sender === 'user' ? '#131515' : '#ffffff',
                      color: msg.sender === 'user' ? '#ffffff' : '#131515',
                      padding: '11px 15px',
                      borderRadius: '16px',
                      fontSize: '13.5px',
                      lineHeight: 1.5,
                      boxShadow: msg.sender === 'bot' ? '0 2px 8px rgba(0,0,0,0.04)' : '0 4px 12px rgba(0,0,0,0.12)',
                      borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                      borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
                      border: msg.sender === 'bot' ? '1px solid rgba(19, 21, 21, 0.06)' : 'none'
                    }}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: '#e6e4df',
                        color: '#131515',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <User size={14} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#686d6d', fontSize: '12.5px', paddingLeft: '38px' }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '4px',
                      padding: '8px 12px',
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      border: '1px solid rgba(19, 21, 21, 0.06)'
                    }}
                  >
                    <span>GT is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Pills */}
            <div
              style={{
                padding: '10px 14px',
                backgroundColor: '#ffffff',
                borderTop: '1px solid rgba(19, 21, 21, 0.06)',
                display: 'flex',
                gap: '6px',
                overflowX: 'auto',
                scrollbarWidth: 'none'
              }}
            >
              {SUGGESTIONS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSend(item)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '50px',
                    backgroundColor: '#f3f2ef',
                    border: '1px solid rgba(19, 21, 21, 0.08)',
                    fontSize: '11.5px',
                    color: '#2a2e2e',
                    fontWeight: 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#131515';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#131515';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f2ef';
                    e.currentTarget.style.color = '#2a2e2e';
                    e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
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
                gap: '8px',
                padding: '12px 14px 16px 14px',
                backgroundColor: '#ffffff',
                borderTop: '1px solid rgba(19, 21, 21, 0.06)'
              }}
            >
              <input
                type="text"
                placeholder="Ask GT anything about cards, materials, or pricing..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '50px',
                  border: '1px solid rgba(19, 21, 21, 0.12)',
                  backgroundColor: '#fbfbfb',
                  fontSize: '13px',
                  outline: 'none',
                  color: '#131515'
                }}
              />
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #064e3b 100%)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                  transition: 'transform 0.15s ease, filter 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
              >
                <span>Ask</span>
                <Send size={13} />
              </button>
            </form>
          </div>
        )}

        {/* Circular Floating Trigger Button (Right Corner) */}
        <div style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {!isOpen && (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              style={{
                padding: '7px 14px',
                backgroundColor: '#ffffff',
                borderRadius: '50px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '12.5px',
                fontWeight: 600,
                color: '#131515',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#10b981';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
              }}
            >
              <Sparkles size={14} color="#10b981" />
              <span>Ask GT</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close GT Assistant' : 'Open GT Assistant'}
            style={{
              width: '62px',
              height: '62px',
              borderRadius: '50%',
              /* Shining green shade and black shade gradient */
              background: 'radial-gradient(circle at 32% 28%, #34d399 0%, #10b981 35%, #064e3b 68%, #040806 100%)',
              border: '2px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              animation: 'gtGlowPulse 3s infinite ease-in-out',
              transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Glossy shine overlay */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: '12px',
                width: '38px',
                height: '18px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Icon: changes based on isOpen */}
            {isOpen ? (
              <X size={26} strokeWidth={2.4} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
            ) : (
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={28} strokeWidth={2.2} style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }} />
                {hasUnread && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#34d399',
                      border: '2px solid #000000'
                    }}
                  />
                )}
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
