"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "@/public/exports";

// --- TYPES & INTERFACES ---
export type TabType = "home" | "messages" | "help";

export type ViewType =
  | "main"
  | "ai_chat"
  | "live_chat"
  | "article_detail"
  | "raise_ticket"
  | "schedule_call"
  | "email_support";

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface MessageItem {
  id: string;
  sender: "user" | "ai" | "agent";
  text: string;
  time: string;
  avatar?: string;
  attachmentUrl?: string;
  attachmentType?: "image" | "file" | "voice" | "gif";
  attachmentName?: string;
}

export interface TeamAvatar {
  name: string;
  src: any;
}

// --- CONSTANTS ---
const TEAM_AVATARS: TeamAvatar[] = [
  { name: "Sarah - Support Lead", src: Images.Dummy },
  { name: "Alex - Distribution Specialist", src: Images.Dummy2 },
  { name: "Priya - Royalties & Content ID", src: Images.Dummy3 },
];

const TRENDING_GIFS = [
  { id: "1", title: "Music Vibes", url: "https://media.giphy.com/media/l3vRlT2k2L35Cbo5y/giphy.gif" },
  { id: "2", title: "On Fire", url: "https://media.giphy.com/media/26n6R50821F4yfiHE/giphy.gif" },
  { id: "3", title: "Party Time", url: "https://media.giphy.com/media/l2JIdnF6aJXA6Bf1S/giphy.gif" },
  { id: "4", title: "Applause", url: "https://media.giphy.com/media/3o7qDEq2bMbcbPRQ2c/giphy.gif" },
  { id: "5", title: "Headbanging", url: "https://media.giphy.com/media/10vXSmTzTVj55u/giphy.gif" },
  { id: "6", title: "Approved 100", url: "https://media.giphy.com/media/l41lFw05vJaJXv3y0/giphy.gif" },
];

const EMOJI_CATEGORIES = {
  smileys: ["😊", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥹", "☺️", "😌", "😍", "🥰", "😘", "😋", "😜", "🤪", "🤑", "🤗", "🤭", "🤫", "🤔", "🫡", "🤨", "😐", "😎", "🤩", "🥳", "✨"],
  gestures: ["👋", "🤚", "🖐️", "✋", "🖖", "🫱", "🫲", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "🫵", "👍", "👎", "✊", "👊", "👏", "🙌", "🫶", "👐", "🤲", "🤝", "🙏", "💪"],
  hearts: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "🔥", "✨", "🌟", "⭐", "💫"],
  music: ["🎵", "🎶", "🎼", "🎹", "🥁", "🎷", "🎺", "🎸", "🪕", "🎻", "🎤", "🎧", "🎙️", "📻", "🎛️", "🎚️", "🎬", "🔊", "⚡", "🔥"],
  objects: ["🚀", "💯", "🎉", "🎊", "⚡", "💡", "🎯", "🏆", "🥇", "👑", "💎", "💰", "💵", "📄", "📁", "💻", "📱", "🌐", "💬", "🎁"],
};

const HELP_ARTICLES: ArticleItem[] = [
  {
    id: "art-1",
    title: "How Music Distribution Works on Amozart",
    category: "Distribution",
    readTime: "3 min read",
    excerpt: "Learn how your tracks are delivered to Spotify, Apple Music, YouTube Music, and 150+ global stores within 24-48 hours.",
    content: [
      "Amozart delivers your music directly to over 150 digital service providers (DSPs) worldwide including Spotify, Apple Music, Amazon Music, Tidal, and Instagram Reels.",
      "Once you submit a release, our automated quality check team verifies cover art dimensions (min 3000x3000px, RGB), audio file format (16-bit 44.1kHz WAV), and metadata compliance.",
      "After approval, standard delivery takes 24 to 48 hours for major streaming platforms. Pre-order setups and scheduled release dates are recommended 10 days in advance.",
    ],
  },
  {
    id: "art-2",
    title: "Royalty Payout Schedule & Payment Methods",
    category: "Royalties",
    readTime: "4 min read",
    excerpt: "Understand monthly payout timelines, threshold requirements, and supported payment methods like Bank Transfer, UPI, and PayPal.",
    content: [
      "Amozart processes streaming and store royalty payments on a monthly basis. Most DSPs report earnings 45-60 days after the close of the sales month.",
      "You can withdraw earnings anytime once your balance exceeds the $10 / ₹500 minimum payout threshold.",
      "Supported payout methods include Direct Local Bank Transfer (NEFT/RTGS/IMPS), UPI (India), PayPal, and International Wire Transfer.",
    ],
  },
  {
    id: "art-3",
    title: "YouTube Content ID & Official Artist Channel (OAC)",
    category: "Copyright & Content ID",
    readTime: "3 min read",
    excerpt: "Monetize unauthorized re-uploads of your sound recordings on YouTube and merge your topic channel into an Official Artist Channel.",
    content: [
      "YouTube Content ID creates digital audio fingerprints of your master tracks and scans every uploaded video on YouTube.",
      "When a match is found, YouTube places ads on that video and redirects ad revenues directly to your Amozart royalty balance.",
      "To request an Official Artist Channel (music note badge on YouTube), ensure you have at least 3 official releases delivered to YouTube Music through Amozart.",
    ],
  },
  {
    id: "art-4",
    title: "Cover Art Requirements & Image Guidelines",
    category: "Release Guidelines",
    readTime: "2 min read",
    excerpt: "Avoid release rejections by ensuring your album artwork meets DSP strict visual standards.",
    content: [
      "Cover art must be a perfect square: Minimum 3000 x 3000 pixels (JPEG/PNG format, RGB color space).",
      "Do NOT include website URLs, social handles (@username), pricing, store logos, or copyrighted images without permissions.",
      "Text on artwork must exactly match your track title and artist name specified in release metadata.",
    ],
  },
  {
    id: "art-5",
    title: "Claiming Spotify for Artists & Apple Music for Artists",
    category: "Artist Verification",
    readTime: "3 min read",
    excerpt: "Get instant blue checkmark verification and edit your bio, artist avatar, and playlist pitches.",
    content: [
      "Once your first track is approved, you gain instant access to claim your Spotify for Artists profile.",
      "Verified profiles let you submit unreleased tracks to Spotify editorial playlist curators, upload Canvas videos, and view live stream analytics.",
      "Reach out to Amozart support with your artist URI if you encounter any instant-claim access issues.",
    ],
  },
  {
    id: "art-6",
    title: "Managing Collaborators & Royalty Splits",
    category: "Royalties & Splits",
    readTime: "2 min read",
    excerpt: "Automatically split earnings with producers, featured artists, and song writers with zero manual hassle.",
    content: [
      "Amozart allows automatic percentage splits for any release.",
      "Invite your team members via email. Once accepted, earnings are automatically distributed into each collaborator's individual account wallet every month.",
      "Splits can be modified anytime before payouts are locked for the current reporting cycle.",
    ],
  },
  {
    id: "art-7",
    title: "Social Media Monetization: Instagram, TikTok & Facebook",
    category: "Social Audio",
    readTime: "3 min read",
    excerpt: "Make your music available in Instagram Reels audio library and TikTok sound search catalog.",
    content: [
      "All Amozart distributions automatically deliver sound clips to Instagram Reels, Facebook Stories, and TikTok audio libraries.",
      "Every time users create videos using your sound, you earn social performance micro-royalties.",
      "Ensure your tracks do not contain non-exclusive royalty-free sample loops that violate store exclusivity policies.",
    ],
  },
  {
    id: "art-8",
    title: "Takedowns, Metadata Edits & Release Cancellations",
    category: "Catalog Management",
    readTime: "2 min read",
    excerpt: "How to edit track names, update artist credits, or issue full platform takedowns.",
    content: [
      "Need to edit metadata after release? Submit a modification request from your release dashboard. Critical metadata edits take 3-5 business days across stores.",
      "To issue a complete platform takedown, request takedown from catalog settings. Tracks will be removed from DSPs within 48 to 72 hours.",
    ],
  },
];

// --- POPOVER SUBCOMPONENTS ---
interface GifPickerPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGif: (url: string, title: string) => void;
}

const GifPickerPopover: React.FC<GifPickerPopoverProps> = ({ isOpen, onClose, onSelectGif }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute bottom-16 left-2 z-50 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl w-64 space-y-2">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
        <span className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary text-white font-black">GIF</span>
          Trending GIFs
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold cursor-pointer"
        >
          ✕
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
        {TRENDING_GIFS.map((gif) => (
          <button
            key={gif.id}
            type="button"
            onClick={() => onSelectGif(gif.url, gif.title)}
            className="relative rounded-xl overflow-hidden group border border-slate-100 dark:border-slate-800 hover:border-primary transition cursor-pointer h-20 bg-slate-100 dark:bg-slate-800"
          >
            <img src={gif.url} alt={gif.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-200" />
            <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] font-semibold py-0.5 px-1 truncate text-center">
              {gif.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

interface EmojiPickerPopoverProps {
  isOpen: boolean;
  activeTab: "smileys" | "gestures" | "hearts" | "music" | "objects";
  onTabChange: (tab: "smileys" | "gestures" | "hearts" | "music" | "objects") => void;
  onClose: () => void;
  onSelectEmoji: (emoji: string) => void;
}

const EmojiPickerPopover: React.FC<EmojiPickerPopoverProps> = ({
  isOpen,
  activeTab,
  onTabChange,
  onClose,
  onSelectEmoji,
}) => {
  if (!isOpen) return null;
  return (
    <div className="absolute bottom-16 left-2 z-50 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl w-64 space-y-2">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5 text-sm">
        {[
          { id: "smileys", icon: "😀" },
          { id: "gestures", icon: "👍" },
          { id: "hearts", icon: "❤️" },
          { id: "music", icon: "🎵" },
          { id: "objects", icon: "⚡" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id as any)}
            className={`p-1.5 rounded-lg transition cursor-pointer ${
              activeTab === tab.id
                ? "bg-primary/15 text-primary scale-110"
                : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {tab.icon}
          </button>
        ))}
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold pl-1 cursor-pointer"
        >
          ✕
        </button>
      </div>
      <div className="grid grid-cols-6 gap-1 max-h-40 overflow-y-auto text-base">
        {EMOJI_CATEGORIES[activeTab].map((emoji, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectEmoji(emoji)}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition cursor-pointer text-center"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- MAIN WIDGET COMPONENT ---
export default function HelpSupportWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [currentView, setCurrentView] = useState<ViewType>("main");
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Email Validation & First Time Card State
  const [userEmail, setUserEmail] = useState<string>("");
  const [isEmailSaved, setIsEmailSaved] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  // Media & Attachment State
  const [selectedFile, setSelectedFile] = useState<{
    file: File;
    name: string;
    url: string;
    type: "image" | "file";
  } | null>(null);

  // Emoji & GIF Popovers State
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [showGifPicker, setShowGifPicker] = useState<boolean>(false);
  const [activeEmojiTab, setActiveEmojiTab] = useState<"smileys" | "gestures" | "hearts" | "music" | "objects">("smileys");

  // Microphone Voice Note Recording State
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);

  // Form States for Ticket & Schedule Call
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    category: "distribution",
    description: "",
    priority: "normal",
  });
  const [ticketSubmitted, setTicketSubmitted] = useState<boolean>(false);

  const [scheduleForm, setScheduleForm] = useState({
    topic: "Catalog Onboarding",
    date: "",
    time: "11:00 AM",
    phone: "",
  });
  const [callScheduled, setCallScheduled] = useState<boolean>(false);

  // Initial Chat Messages Array
  const [chatMessages, setChatMessages] = useState<MessageItem[]>([
    {
      id: "1",
      sender: "ai",
      text: "👋 Hi! I'm Amozart AI Assistant. How can I help you with music distribution, royalties, or Content ID today?",
      time: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [aiInput, setAiInput] = useState<string>("");

  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Voice recording timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Handle File Selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isImg = file.type.startsWith("image/");
    const url = URL.createObjectURL(file);
    setSelectedFile({
      file,
      name: file.name,
      url,
      type: isImg ? "image" : "file",
    });
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
  };

  const handleSendGif = (url: string, title: string) => {
    const gifMsg: MessageItem = {
      id: Date.now().toString(),
      sender: "user",
      text: `[GIF: ${title}]`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      attachmentType: "gif",
      attachmentUrl: url,
      attachmentName: title,
    };
    setChatMessages((prev) => [...prev, gifMsg]);
    setShowGifPicker(false);
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: `Awesome GIF! 🎵 Love the vibe. How else can I assist with your release catalog?`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendVoiceNote = () => {
    setIsRecording(false);
    const secs = recordingSeconds || 4;
    const voiceMsg: MessageItem = {
      id: Date.now().toString(),
      sender: "user",
      text: `🎤 Voice message (${secs}s)`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      attachmentType: "voice",
      attachmentName: `Voice Message (${secs}s)`,
    };
    setChatMessages((prev) => [...prev, voiceMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I received your voice note! Processing audio transcript... How else can I assist you with your Amozart account?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (currentView === "ai_chat" || currentView === "live_chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isTyping, currentView]);

  // Filtered Articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return HELP_ARTICLES;
    const q = searchQuery.toLowerCase();
    return HELP_ARTICLES.filter(
      (art) =>
        art.title.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Helper for strict real email format validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  // AI Chat submission handler — Real Groq AI Integration
  const handleSendAiMessage = async (customText?: string) => {
    const textToSend = customText || aiInput;
    if (!textToSend.trim() && !selectedFile) return;

    // Strict email validation on first send
    if (!isEmailSaved) {
      const trimmedEmail = userEmail.trim();
      if (!trimmedEmail) {
        setEmailError("Please enter your email address to continue.");
        return;
      }
      if (!isValidEmail(trimmedEmail)) {
        setEmailError("Please enter a valid email address (e.g. name@gmail.com).");
        return;
      }
      setEmailError("");
      setIsEmailSaved(true);
    }

    const userMsg: MessageItem = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      attachmentUrl: selectedFile?.url,
      attachmentType: selectedFile?.type,
      attachmentName: selectedFile?.name,
    };

    setChatMessages((prev) => [...prev, userMsg]);
    if (!customText) setAiInput("");
    setSelectedFile(null);

    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatMessages,
        }),
      });

      const data = await res.json();
      const aiReply = data.reply || "Thank you for reaching out! Our team is reviewing your query.";

      const aiMsg: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I received your request! Amozart support team will send a detailed follow-up to your email shortly.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOpenArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
    setCurrentView("article_detail");
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallScheduled(true);
  };

  const renderArticleIcon = (articleId: string) => {
    switch (articleId) {
      case "art-1":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      case "art-2":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "art-3":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[999] font-sans">
      {/* FLOATING ACTION LAUNCHER BUTTON */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-primary text-white shadow-2xl shadow-purple-600/50 flex items-center justify-center cursor-pointer border-2 border-white/20 transition-all duration-300 relative group"
            aria-label="Open Amozart Help Center"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* MAIN EXPANDABLE SUPPORT WIDGET PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className={`w-[92vw] sm:w-[410px] h-[640px] max-h-[88vh] rounded-[28px] shadow-2xl border flex flex-col overflow-hidden relative backdrop-blur-xl ${
              isDarkMode
                ? "bg-slate-950/95 border-slate-800 text-white shadow-black/80"
                : "bg-white/95 border-slate-200/90 text-slate-900 shadow-purple-950/20"
            }`}
          >
            {/* SUPPORT HEADER */}
            <div className="relative bg-primary text-white p-4 sm:p-5 border-b border-white/15 shrink-0 overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {currentView === "main" ? (
                <>
                  <div className="flex items-center justify-between gap-2 relative z-10 mb-4">
                    <div className="flex items-center">
                      <Image
                        src={Images.WhiteLogo}
                        alt="Amozart Logo"
                        width={180}
                        height={50}
                        className="h-7 object-contain"
                        priority
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center -space-x-2.5 mr-1">
                        {TEAM_AVATARS.map((avatar, idx) => (
                          <div
                            key={idx}
                            className="relative w-9 h-9 rounded-full border-2 border-white/40 overflow-hidden bg-slate-800 shadow-md shrink-0 transition-transform hover:scale-110 hover:z-20"
                            title={avatar.name}
                          >
                            <Image src={avatar.src} alt={avatar.name} fill className="object-cover" />
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setIsOpen(false)}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
                        aria-label="Close Support Widget"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight flex items-center gap-2">
                      Hi there 👋
                    </h3>
                    <p className="text-base font-semibold text-slate-200 mt-0.5">How can we help?</p>
                    <p className="text-xs text-slate-400 mt-1">Our AI assistant and support team are here to help.</p>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCurrentView("main")}
                      className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div>
                      <h4 className="font-bold text-white text-base leading-tight">
                        {currentView === "ai_chat" && "AI Assistant"}
                        {currentView === "live_chat" && "Live Agent Support"}
                        {currentView === "article_detail" && (selectedArticle?.title || "Help Article")}
                        {currentView === "raise_ticket" && "Raise a Ticket"}
                        {currentView === "schedule_call" && "Schedule a Call"}
                        {currentView === "email_support" && "Email Support"}
                      </h4>
                      <p className="text-xs text-slate-300/80 mt-0.5">
                        {currentView === "ai_chat" && "Instant automated answers 24/7"}
                        {currentView === "live_chat" && "Connected with Sarah • Typically replies in 2m"}
                        {currentView === "article_detail" && "Knowledge Base Guide"}
                        {currentView === "raise_ticket" && "Get priority assistance from our team"}
                        {currentView === "schedule_call" && "Pick a convenient time for a call"}
                        {currentView === "email_support" && "Send a direct message to our inbox"}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer shrink-0"
                    aria-label="Close Support Widget"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* DARK MODE TOGGLE PIN */}
            {/* <div className="absolute top-4 right-14 z-20">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs transition cursor-pointer"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div> */}

            {/* WIDGET CONTENT BODY */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 relative [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/60 [scrollbar-width:thin] [scrollbar-color:rgba(103,57,183,0.3)_transparent]">
              {/* HOME VIEW (Main Dashboard + Articles + Tabs) */}
              {currentView === "main" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  {activeTab === "home" && (
                    <div className="space-y-3.5">
                      <div className="grid grid-cols-1 gap-2.5">
                        {/* Card 1: AI Assistant */}
                        <motion.div
                          whileHover={{ scale: 1.01, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setCurrentView("ai_chat")}
                          className={`p-3.5 rounded-[20px] border transition-all duration-300 cursor-pointer flex items-center justify-between group shadow-sm ${
                            isDarkMode
                              ? "bg-slate-900/90 border-slate-800 hover:border-primary/60 hover:bg-slate-800/80 shadow-black/40"
                              : "bg-white border-slate-200/80 hover:border-primary/50 hover:shadow-md hover:shadow-purple-900/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-indigo-500 text-white flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-110 transition duration-300">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className={`font-bold text-sm leading-snug flex items-center gap-1.5 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                                Ask AI Assistant
                                <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-primary/20 text-primary border border-primary/30">
                                  24/7
                                </span>
                              </h4>
                              <p className="text-xs text-slate-400 mt-0.5">Instant automated answers for distributions & payouts</p>
                            </div>
                          </div>
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>

                        {/* Card 2: Live Chat */}
                        {/* <motion.div
                          whileHover={{ scale: 1.01, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setCurrentView("live_chat")}
                          className={`p-3.5 rounded-[20px] border transition-all duration-300 cursor-pointer flex items-center justify-between group shadow-sm ${
                            isDarkMode
                              ? "bg-slate-900/90 border-slate-800 hover:border-emerald-500/60 hover:bg-slate-800/80 shadow-black/40"
                              : "bg-white border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md hover:shadow-emerald-900/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-110 transition duration-300">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className={`font-bold text-sm leading-snug flex items-center gap-1.5 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                                Chat with Support Team
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              </h4>
                              <p className="text-xs text-slate-400 mt-0.5">Connect directly with a human specialist</p>
                            </div>
                          </div>
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div> */}
                      </div>

                      {/* SECONDARY QUICK ACTIONS */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          onClick={() => setCurrentView("schedule_call")}
                          className={`p-3 rounded-2xl border text-left transition duration-200 cursor-pointer flex flex-col justify-between group ${
                            isDarkMode ? "bg-slate-900/60 border-slate-800 hover:border-blue-500/50" : "bg-slate-50 border-slate-200/80 hover:border-blue-500/40"
                          }`}
                        >
                          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 w-fit mb-2 group-hover:scale-110 transition">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <span className={`text-xs font-bold block ${isDarkMode ? "text-white" : "text-slate-900"}`}>Schedule Call</span>
                            <span className="text-[10px] text-slate-400 font-medium">Pick date & time slot</span>
                          </div>
                        </button>

                        <button
                          onClick={() => setCurrentView("raise_ticket")}
                          className={`p-3 rounded-2xl border text-left transition duration-200 cursor-pointer flex flex-col justify-between group ${
                            isDarkMode ? "bg-slate-900/60 border-slate-800 hover:border-amber-500/50" : "bg-slate-50 border-slate-200/80 hover:border-amber-500/40"
                          }`}
                        >
                          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 w-fit mb-2 group-hover:scale-110 transition">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                          </div>
                          <div>
                            <span className={`text-xs font-bold block ${isDarkMode ? "text-white" : "text-slate-900"}`}>Raise Ticket</span>
                            <span className="text-[10px] text-slate-400 font-medium">Detailed issue report</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ARTICLES SEARCH & LISTING */}
                  {(activeTab === "home" || activeTab === "help") && (
                    <div className="space-y-3 pt-1">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search help articles (e.g., payouts, Spotify)..."
                          className={`w-full pl-10 pr-9 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border outline-none transition duration-200 ${
                            isDarkMode
                              ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20"
                              : "bg-slate-100/90 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          }`}
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery("")}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2.5 px-1">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Help Articles</h5>
                          <span className="text-[11px] text-primary font-semibold">{filteredArticles.length} articles</span>
                        </div>

                        <div className="space-y-2">
                          {filteredArticles.length > 0 ? (
                            filteredArticles.map((article) => (
                              <motion.div
                                key={article.id}
                                whileHover={{ scale: 1.01, x: 2 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => handleOpenArticle(article)}
                                className={`p-3 rounded-[16px] border transition duration-200 cursor-pointer flex items-center justify-between gap-3 group ${
                                  isDarkMode
                                    ? "bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700"
                                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                                }`}
                              >
                                <div className="flex items-center gap-3 truncate">
                                  <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition">
                                    {renderArticleIcon(article.id)}
                                  </div>
                                  <div className="truncate">
                                    <h6 className={`font-bold text-xs sm:text-sm truncate group-hover:text-primary transition ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                                      {article.title}
                                    </h6>
                                    <span className="text-[10px] text-slate-400 font-medium">
                                      {article.category} • {article.readTime}
                                    </span>
                                  </div>
                                </div>
                                <svg className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </motion.div>
                            ))
                          ) : (
                            <div className="p-6 text-center text-slate-400 text-xs">
                              No matching help articles found. Try searching with different keywords like &quot;payout&quot;.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MESSAGES TAB LIST */}
                  {activeTab === "messages" && (
                    <div className="space-y-3 pt-1">
                      <div className="px-1 flex items-center justify-between">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Recent Conversations</h5>
                      </div>
                      <div
                        onClick={() => setCurrentView("ai_chat")}
                        className={`p-3.5 rounded-[20px] border transition duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                          isDarkMode
                            ? "bg-slate-900 border-slate-800 hover:border-primary/60"
                            : "bg-white border-slate-200/80 hover:border-primary/50 shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0">🤖</div>
                          <div>
                            <h6 className={`font-bold text-xs sm:text-sm ${isDarkMode ? "text-white" : "text-slate-900"}`}>Amozart AI Assistant</h6>
                            <p className="text-xs text-slate-400 truncate max-w-[200px]">Active session • Tap to resume chat</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-500 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">Active</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* CHAT INTERFACE VIEW */}
              {(currentView === "ai_chat" || currentView === "live_chat") && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col h-full space-y-3">
                  <div className="flex-1 space-y-3 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/60 [scrollbar-width:thin] [scrollbar-color:rgba(103,57,183,0.3)_transparent]">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        {msg.sender !== "user" && (
                          <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md border border-white/20">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                            </svg>
                          </div>
                        )}
                        <div className="flex flex-col">
                          <div
                            className={`max-w-[85%] p-3.5 rounded-[18px] text-xs sm:text-sm leading-relaxed ${
                              msg.sender === "user"
                                ? "bg-primary text-white rounded-br-none shadow-md shadow-primary/20 self-end"
                                : isDarkMode
                                ? "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none"
                                : "bg-slate-100/90 border border-slate-200/60 text-slate-800 rounded-bl-none"
                            }`}
                          >
                            {msg.text}

                            {msg.attachmentType === "image" && msg.attachmentUrl && (
                              <div className="mt-2 rounded-xl overflow-hidden border border-white/20 shadow-sm max-w-[200px]">
                                <img src={msg.attachmentUrl} alt={msg.attachmentName || "Attached Image"} className="w-full h-auto max-h-48 object-cover" />
                              </div>
                            )}

                            {msg.attachmentType === "file" && (
                              <div className="mt-2 flex items-center gap-2 p-2 rounded-xl bg-black/10 dark:bg-white/10 text-xs font-medium">
                                <span>📄</span>
                                <span className="truncate max-w-[150px]">{msg.attachmentName}</span>
                              </div>
                            )}

                            {msg.attachmentType === "gif" && msg.attachmentUrl && (
                              <div className="mt-2 rounded-xl overflow-hidden border border-white/20 shadow-md max-w-[210px]">
                                <img src={msg.attachmentUrl} alt={msg.attachmentName || "GIF"} className="w-full h-auto max-h-44 object-cover" />
                              </div>
                            )}
                          </div>
                          <span className={`text-[10px] text-slate-400 mt-1 px-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                            {msg.sender === "user" ? "You" : "Amozart Support • AI Agent"} • {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex gap-2 items-center text-slate-400 text-xs pl-2">
                        <div className="flex space-x-1">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                        <span className="text-[11px]">Assistant is typing...</span>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {currentView === "ai_chat" && (
                    <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 px-0.5">
                      {[
                        { text: "Release Music", icon: "🎵" },
                        { text: "Royalty Payouts", icon: "💰" },
                        { text: "Content ID", icon: "🛡️" },
                      ].map((item, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.04, y: -1 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => handleSendAiMessage(item.text)}
                          className={`text-[11px] font-semibold px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                            isDarkMode
                              ? "bg-slate-900/90 border-slate-800 text-slate-200 hover:border-primary hover:bg-primary/15 hover:text-white"
                              : "bg-white border-slate-200/90 text-slate-700 hover:border-primary hover:bg-primary/5 hover:text-primary shadow-sm shadow-slate-200/50"
                          }`}
                        >
                          <span className="text-xs">{item.icon}</span>
                          <span>{item.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  <div className="relative pt-1">
                    {!isEmailSaved ? (
                      <div className="flex flex-col items-center space-y-1.5 relative">
                        <input ref={fileInputRef} type="file" onChange={handleFileSelect} accept="image/*,.pdf,.doc,.docx" className="hidden" />

                        <GifPickerPopover isOpen={showGifPicker} onClose={() => setShowGifPicker(false)} onSelectGif={handleSendGif} />
                        <EmojiPickerPopover
                          isOpen={showEmojiPicker}
                          activeTab={activeEmojiTab}
                          onTabChange={setActiveEmojiTab}
                          onClose={() => setShowEmojiPicker(false)}
                          onSelectEmoji={(emoji) => {
                            setAiInput((prev) => prev + emoji);
                            setShowEmojiPicker(false);
                          }}
                        />

                        <div
                          className={`w-full rounded-[24px] border transition-all duration-300 p-3 sm:p-3.5 flex flex-col justify-between shadow-xl shadow-purple-950/5 ${
                            isDarkMode
                              ? "bg-slate-900/90 border-slate-800 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 shadow-black/40"
                              : "bg-white border-slate-200/90 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
                          }`}
                        >
                          {selectedFile && (
                            <div className="mb-1.5 p-1.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between text-xs text-primary font-medium">
                              <div className="flex items-center gap-2 truncate">
                                <span>{selectedFile.type === "image" ? "🖼️" : "📄"}</span>
                                <span className="truncate max-w-[170px]">{selectedFile.name}</span>
                              </div>
                              <button type="button" onClick={removeSelectedFile} className="text-slate-400 hover:text-rose-500 font-bold px-1 transition cursor-pointer">✕</button>
                            </div>
                          )}

                          <div className="flex items-center gap-2 pb-1">
                            <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input
                              type="email"
                              value={userEmail}
                              onChange={(e) => {
                                const val = e.target.value;
                                setUserEmail(val);
                                if (emailError && isValidEmail(val)) setEmailError("");
                              }}
                              placeholder="email@example.com"
                              className={`w-full text-xs sm:text-sm font-medium bg-transparent outline-none ${
                                isDarkMode ? "text-white placeholder-slate-500" : "text-slate-900 placeholder-slate-400"
                              }`}
                            />
                          </div>

                          <div className="py-0.5">
                            <textarea
                              value={aiInput}
                              onChange={(e) => setAiInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault();
                                  handleSendAiMessage();
                                }
                              }}
                              placeholder={isRecording ? `Recording voice note (${recordingSeconds}s)...` : "Ask a question..."}
                              rows={1}
                              className={`w-full text-xs sm:text-sm font-medium bg-transparent outline-none resize-none leading-relaxed ${
                                isDarkMode ? "text-white placeholder-slate-500" : "text-slate-900 placeholder-slate-400"
                              }`}
                            />
                          </div>

                          {emailError && (
                            <p className="text-[11px] text-rose-500 font-semibold py-0.5 flex items-center gap-1">
                              <span>⚠️</span> {emailError}
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-3 text-slate-400">
                              <button type="button" onClick={() => fileInputRef.current?.click()} className="hover:text-primary transition cursor-pointer" title="Attach Image or File">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setShowEmojiPicker((prev) => !prev);
                                  setShowGifPicker(false);
                                }}
                                className={`transition cursor-pointer ${showEmojiPicker ? "text-primary font-bold" : "hover:text-primary"}`}
                                title="Add Emoji"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setShowGifPicker((prev) => !prev);
                                  setShowEmojiPicker(false);
                                }}
                                className={`px-1 py-0.5 rounded text-[9px] font-bold border transition cursor-pointer leading-none ${
                                  showGifPicker
                                    ? "border-primary bg-primary text-white"
                                    : "border-slate-300 dark:border-slate-700 hover:border-primary hover:text-primary"
                                }`}
                                title="Insert GIF"
                              >
                                GIF
                              </button>

                              {!isRecording ? (
                                <button type="button" onClick={() => setIsRecording(true)} className="hover:text-rose-500 transition cursor-pointer" title="Record Voice Note">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                  </svg>
                                </button>
                              ) : (
                                <div className="flex items-center gap-1.5 text-xs text-rose-500 font-bold animate-pulse">
                                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                                  <span>{recordingSeconds}s</span>
                                  <button type="button" onClick={handleSendVoiceNote} className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full ml-1 font-bold cursor-pointer">Send</button>
                                </div>
                              )}
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.92 }}
                              onClick={() => handleSendAiMessage()}
                              disabled={(!aiInput.trim() && !selectedFile) || !isValidEmail(userEmail)}
                              className={`w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center shrink-0 ${
                                (aiInput.trim() || selectedFile) && isValidEmail(userEmail)
                                  ? "bg-primary text-white shadow-md shadow-purple-600/40 cursor-pointer"
                                  : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                              }`}
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                              </svg>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-1.5 relative">
                        <input ref={fileInputRef} type="file" onChange={handleFileSelect} accept="image/*,.pdf,.doc,.docx" className="hidden" />

                        <GifPickerPopover isOpen={showGifPicker} onClose={() => setShowGifPicker(false)} onSelectGif={handleSendGif} />
                        <EmojiPickerPopover
                          isOpen={showEmojiPicker}
                          activeTab={activeEmojiTab}
                          onTabChange={setActiveEmojiTab}
                          onClose={() => setShowEmojiPicker(false)}
                          onSelectEmoji={(emoji) => {
                            setAiInput((prev) => prev + emoji);
                            setShowEmojiPicker(false);
                          }}
                        />

                        <div
                          className={`w-full rounded-[24px] border transition-all duration-300 p-3 sm:p-3.5 flex flex-col justify-between ${
                            isDarkMode
                              ? "bg-slate-900/90 border-slate-800 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 shadow-lg shadow-black/40"
                              : "bg-white border-slate-200/90 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 shadow-xl shadow-purple-900/5"
                          }`}
                        >
                          {selectedFile && (
                            <div className="mb-1.5 p-1.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between text-xs text-primary font-medium">
                              <div className="flex items-center gap-2 truncate">
                                <span>{selectedFile.type === "image" ? "🖼️" : "📄"}</span>
                                <span className="truncate max-w-[170px]">{selectedFile.name}</span>
                              </div>
                              <button type="button" onClick={removeSelectedFile} className="text-slate-400 hover:text-rose-500 font-bold px-1 transition cursor-pointer">✕</button>
                            </div>
                          )}

                          <textarea
                            value={aiInput}
                            onChange={(e) => setAiInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault();
                                  handleSendAiMessage();
                              }
                            }}
                            placeholder={isRecording ? `Recording voice note (${recordingSeconds}s)...` : "Message..."}
                            rows={1}
                            className={`w-full text-xs sm:text-sm bg-transparent outline-none resize-none leading-relaxed font-medium ${
                              isDarkMode ? "text-white placeholder-slate-400" : "text-slate-900 placeholder-slate-400"
                            }`}
                          />

                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-3 text-slate-400">
                              <button type="button" onClick={() => fileInputRef.current?.click()} className="hover:text-primary transition cursor-pointer" title="Attach Image or File">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setShowEmojiPicker((prev) => !prev);
                                  setShowGifPicker(false);
                                }}
                                className={`transition cursor-pointer ${showEmojiPicker ? "text-primary font-bold" : "hover:text-primary"}`}
                                title="Add Emoji"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setShowGifPicker((prev) => !prev);
                                  setShowEmojiPicker(false);
                                }}
                                className={`px-1 py-0.5 rounded text-[9px] font-bold border transition cursor-pointer leading-none ${
                                  showGifPicker
                                    ? "border-primary bg-primary text-white"
                                    : "border-slate-300 dark:border-slate-700 hover:border-primary hover:text-primary"
                                }`}
                                title="Insert GIF"
                              >
                                GIF
                              </button>

                              {!isRecording ? (
                                <button type="button" onClick={() => setIsRecording(true)} className="hover:text-rose-500 transition cursor-pointer" title="Record Voice Note">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                  </svg>
                                </button>
                              ) : (
                                <div className="flex items-center gap-1.5 text-xs text-rose-500 font-bold animate-pulse">
                                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                                  <span>{recordingSeconds}s</span>
                                  <button type="button" onClick={handleSendVoiceNote} className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full ml-1 font-bold cursor-pointer">Send</button>
                                </div>
                              )}
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.92 }}
                              onClick={() => handleSendAiMessage()}
                              disabled={!aiInput.trim() && !selectedFile}
                              className={`w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center shrink-0 ${
                                aiInput.trim() || selectedFile
                                  ? "bg-primary text-white shadow-md shadow-purple-600/40 cursor-pointer"
                                  : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                              }`}
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                              </svg>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* ARTICLE DETAIL VIEW */}
              {currentView === "article_detail" && selectedArticle && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-xs sm:text-sm">
                  <div className={`flex items-center gap-3 p-3.5 rounded-2xl border ${isDarkMode ? "bg-primary/10 border-primary/20" : "bg-primary/5 border-primary/15"}`}>
                    {renderArticleIcon(selectedArticle.id)}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{selectedArticle.category} • {selectedArticle.readTime}</span>
                      <h4 className={`font-bold text-sm sm:text-base ${isDarkMode ? "text-white" : "text-slate-900"}`}>{selectedArticle.title}</h4>
                    </div>
                  </div>
                  <div className="space-y-2.5 leading-relaxed">
                    {selectedArticle.content.map((paragraph, idx) => (
                      <p key={idx} className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{paragraph}</p>
                    ))}
                  </div>
                  <div className={`p-4 rounded-2xl border text-center space-y-2.5 ${isDarkMode ? "bg-slate-900/80 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                    <span className="text-xs font-bold block text-slate-400">Was this article helpful?</span>
                    <div className="flex justify-center gap-3">
                      <button className="px-4 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white font-bold text-xs transition cursor-pointer">👍 Yes, thanks!</button>
                      <button onClick={() => setCurrentView("ai_chat")} className="px-4 py-1.5 rounded-xl bg-slate-500/10 text-slate-400 hover:bg-slate-500 hover:text-white font-bold text-xs transition cursor-pointer">💬 Still need help</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* RAISE TICKET FORM VIEW */}
              {currentView === "raise_ticket" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  {ticketSubmitted ? (
                    <div className="text-center space-y-3 py-6">
                      <div className="w-14 h-14 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl animate-bounce">✓</div>
                      <h4 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Ticket Submitted Successfully!</h4>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">
                        Your support ticket <span className="font-mono font-bold text-primary">#AMZ-8924</span> has been created. Our technical team will reply to <span className="font-semibold">{ticketForm.email}</span> within 2 hours.
                      </p>
                      <button onClick={() => setCurrentView("main")} className="px-5 py-2 rounded-xl bg-primary text-white font-bold text-xs transition shadow-md cursor-pointer">Back to Help Center</button>
                    </div>
                  ) : (
                    <form onSubmit={handleTicketSubmit} className="space-y-3">
                      <div>
                        <label className="text-xs font-bold block mb-1 text-slate-400">Full Name</label>
                        <input
                          required
                          type="text"
                          value={ticketForm.name}
                          onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                          placeholder="Your name"
                          className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold block mb-1 text-slate-400">Email Address</label>
                        <input
                          required
                          type="email"
                          value={ticketForm.email}
                          onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                          placeholder="you@domain.com"
                          className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs font-bold block mb-1 text-slate-400">Category</label>
                          <select
                            value={ticketForm.category}
                            onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                            className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                          >
                            <option value="distribution">Distribution</option>
                            <option value="royalties">Royalties & Payouts</option>
                            <option value="content_id">Content ID</option>
                            <option value="account">Account Access</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-bold block mb-1 text-slate-400">Priority</label>
                          <select
                            value={ticketForm.priority}
                            onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                            className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                          >
                            <option value="normal">Normal</option>
                            <option value="urgent">Urgent</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold block mb-1 text-slate-400">Description</label>
                        <textarea
                          required
                          rows={3}
                          value={ticketForm.description}
                          onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                          placeholder="Describe your issue in detail..."
                          className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium resize-none ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                        />
                      </div>
                      <button type="submit" className="w-full py-3 rounded-xl bg-primary text-white font-bold text-xs shadow-lg shadow-purple-600/30 hover:bg-primary/90 transition cursor-pointer">Submit Support Ticket</button>
                    </form>
                  )}
                </motion.div>
              )}

              {/* SCHEDULE CALL VIEW */}
              {currentView === "schedule_call" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  {callScheduled ? (
                    <div className="text-center space-y-3 py-6">
                      <div className="w-14 h-14 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mx-auto text-2xl animate-bounce">📞</div>
                      <h4 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Call Scheduled!</h4>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">
                        Our distribution expert will call you on <span className="font-bold text-blue-500">{scheduleForm.phone}</span> on <span className="font-semibold">{scheduleForm.date} at {scheduleForm.time}</span>.
                      </p>
                      <button onClick={() => setCurrentView("main")} className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs transition shadow-md cursor-pointer">Back to Home</button>
                    </div>
                  ) : (
                    <form onSubmit={handleScheduleSubmit} className="space-y-3">
                      <div>
                        <label className="text-xs font-bold block mb-1 text-slate-400">Phone Number</label>
                        <input
                          required
                          type="tel"
                          value={scheduleForm.phone}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold block mb-1 text-slate-400">Call Topic</label>
                        <select
                          value={scheduleForm.topic}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, topic: e.target.value })}
                          className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                        >
                          <option value="Catalog Onboarding">Catalog Onboarding & Migration</option>
                          <option value="Royalty Payouts">Custom Royalty Payout Setup</option>
                          <option value="Label Partnership">Label Partnership</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs font-bold block mb-1 text-slate-400">Preferred Date</label>
                          <input
                            required
                            type="date"
                            value={scheduleForm.date}
                            onChange={(e) => setScheduleForm({ ...scheduleForm, date: e.target.value })}
                            className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold block mb-1 text-slate-400">Time Slot</label>
                          <select
                            value={scheduleForm.time}
                            onChange={(e) => setScheduleForm({ ...scheduleForm, time: e.target.value })}
                            className={`w-full p-2.5 rounded-xl text-xs border outline-none font-medium ${isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`}
                          >
                            <option value="11:00 AM">11:00 AM IST</option>
                            <option value="02:30 PM">02:30 PM IST</option>
                            <option value="05:00 PM">05:00 PM IST</option>
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition cursor-pointer">Confirm Call Reservation</button>
                    </form>
                  )}
                </motion.div>
              )}
            </div>

            {/* BOTTOM TABBAR NAVIGATION */}
            {currentView === "main" && (
              <div className={`p-2 border-t shrink-0 flex items-center justify-around relative backdrop-blur-md ${isDarkMode ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-slate-200"}`}>
                {[
                  {
                    id: "home",
                    label: "Home",
                    renderIcon: (isActive: boolean) => (
                      <svg className="w-5 h-5 mb-0.5" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 0 : 2}>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                    ),
                  },
                  {
                    id: "messages",
                    label: "Messages",
                    renderIcon: (isActive: boolean) => (
                      <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ),
                  },
                  {
                    id: "help",
                    label: "Help",
                    renderIcon: (isActive: boolean) => (
                      <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2.5 : 2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex flex-col items-center justify-center py-1.5 px-6 rounded-2xl transition duration-200 cursor-pointer ${
                        isActive ? "text-primary font-bold" : "text-slate-400 hover:text-slate-600 font-medium"
                      }`}
                    >
                      {tab.renderIcon(isActive)}
                      <span className="text-[11px] tracking-tight">{tab.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 w-8 h-1 bg-primary rounded-full shadow-md shadow-primary/50"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
