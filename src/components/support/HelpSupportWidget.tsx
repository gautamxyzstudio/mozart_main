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
  | "email_support";

export interface ArticleStep {
  stepTitle?: string;
  description?: string;
  image?: any;
  bullets?: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content?: string[];
  steps?: ArticleStep[];
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

export interface ChatSession {
  id: string;
  title: string;
  updatedAt: string;
  messages: MessageItem[];
}

const DEFAULT_INITIAL_SESSION: ChatSession = {
  id: "session-initial",
  title: "Amozart Support Assistant",
  updatedAt: "Just now",
  messages: [
    {
      id: "1",
      sender: "ai",
      text: "👋 Welcome to Amozart Support! How can I help you today?",
      time: "Just now",
    },
  ],
};

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
    title: "How to Upload & Distribute Your Music (Steps 1 to 5)",
    category: "Music Distribution",
    readTime: "6 min read",
    excerpt: "Complete step-by-step guide on creating a release, uploading artwork, setting metadata, choosing delivery options, and finalizing distribution.",
    steps: [
      {
        stepTitle: "Step 1: Start the Upload",
        description: "Log into your dashboard. You can start a new release using either of these two methods:",
        image: Images.Article2,
      },
      {
        stepTitle: "Option A: On the main Dashboard, click the '+ Upload' button inside the 'Upload New Release' box.",
        bullets: [
          "Locate the 'Upload New Release' box on your main Dashboard overview.",
          "Click the '+ Upload' button inside the box to start a new release."
        ],
        image: Images.Article3,
      },
      {
        stepTitle: "Option B: Click Catalogue on the left-side navigation menu, then click the Start button.",
        bullets: [
          "Click 'Catalogue' on the left-side navigation sidebar menu.",
          "Click the 'Start' button to begin creating a new music release."
        ],
        image: Images.Article4,
      },
      {
        stepTitle: "Step 2: Fill out Release Information & Cover Art",
        description: "Follow the platform's linear timeline visible at the top of your catalogue page to complete track metadata and upload artwork:",
        bullets: [
          "Release Info: Enter your song title, select if it's a 'Single', 'EP' or an 'Album', pick your primary genre, and set the primary language.",
          "Cover Art: Upload your release artwork. It must be a high-resolution, perfect square (minimum 3000 x 3000 pixels) with no ads or promotional links."
        ],
        image: Images.Article5,
      },
      {
        stepTitle: "Step 3: Configure the Track List & Guidelines",
        description: "Move to the Track List section to upload your audio file and configure streaming filters:",
        bullets: [
          "Explicit Content Check: Select whether the lyrics are appropriate for all audiences or contain explicit/offensive language.",
          "Enter ISRC Code: It is mandatory to submit an ISRC (International Standard Recording Code). You must type in your pre-existing 12-digit alphanumeric code or check the box to Request A New ISRC code from the system.",
          "ISWC (Optional): If available, you can optionally input your ISWC musical work code."
        ],
        image: Images.Article6,
      },
      {
        stepTitle: "Step 4: Choose Your Delivery Options",
        description: "Move to the Delivery Options tab to schedule when and where your music goes live:",
        bullets: [
          "Time Zone: Set your reference time zone (e.g., Asia/Calcutta).",
          "Dates & Times: Enter your Original Release Date, Digital Release Date, and precise Release Time.",
          "Select Territories & Stores: Choose your target countries (e.g., Selected world) and select your music stores (Choose Platform).",
          "Choose a Delivery Speed & Price Tier: Standard (10 Days+ included at no extra charge) vs Priority (+₹1099 INR, process within 24 hours).",
          "Price Category: Select your budget/pricing band (options include Budget, Mid, Full, or Premium)."
        ],
        image: Images.Article7,
      },
      {
        stepTitle: "Priority Release Option",
        description: "For +₹1099 INR, your music skips the queue to go out fast on any date within 24 hours, giving you more immediate deployment or extra time to pitch for playlists.",
        bullets: [
          "Select Priority Tier: Click the 'Priority' card under Delivery Speed.",
          "Custom Calendar Date: Select any release date within 24 hours from the calendar picker."
        ],
        image: Images.Article8,
      },
      {
        stepTitle: "Standard Release Option",
        description: "Your music is processed and sent to stores in 10 Days+ from the current date (Included at no extra charge).",
        bullets: [
          "Select Standard Tier: Click the 'Standard' card (Included at no extra charge).",
          "Default Release Date: Pick a release date scheduled 10 Days+ from the current date."
        ],
        image: Images.Article9,
      },
      {
        stepTitle: "Step 5: Review and Distribute",
        description: "Proceed to the final Review tab. Check all your summarized project information - including artwork, tracks, genres, copyright year, and release dates - to make sure everything is completely error-free. If everything looks right, click the Distribute button at the bottom.",
        bullets: [
          "Check summarized project information - including artwork, tracks, genres, copyright year, and release dates - to make sure everything is completely error-free.",
          "Click the 'Distribute' button at the bottom once verified."
        ],
        image: Images.Article10,
      },
      {
        stepTitle: "Confirmation Pop-up",
        description: "A confirmation pop-up window will appear titled 'Ready To Distribute Your Track?'. Review your final delivery choice, confirm payment summary (e.g., Pay ₹1099 INR if Priority was selected), and click to finalize the distribution.",
        bullets: [
          "Modal Title: A confirmation pop-up window will appear titled 'Ready To Distribute Your Track?'.",
          "Payment Summary: Review your final delivery choice, confirm payment summary (e.g., Pay ₹1099 INR if Priority was selected).",
          "Finalize: Click the 'Pay ₹1099 INR' button to proceed to payment checkout."
        ],
        image: Images.Article11,
      },
      {
        stepTitle: "Payment Checkout",
        description: "Complete your secure payment on the payment gateway checkout screen:",
        bullets: [
          "Enter your card details or use Apple Pay / supported payment methods.",
          "Click 'Pay' to complete your order transaction."
        ],
        image: Images.Article12,
      },
      {
        stepTitle: "In-Progress Track Status",
        description: "Track your release status in real-time under Catalogue > My Release:",
        bullets: [
          "In Progress: Your release will show an 'In-Progress' yellow status badge while being reviewed and delivered to stores."
        ],
        image: Images.Article13,
      },
      {
        stepTitle: "Completed Track Status",
        description: "Once your track has been reviewed and delivered to all platforms:",
        bullets: [
          "Complete: Once approved and delivered to all DSPs (Spotify, Apple Music, YouTube, etc.), your track status changes to 'Completed'."
        ],
        image: Images.Article14,
      },
    ],
  },
  {
    id: "art-2",
    title: "How to Check Your Analytics & Growth Trends",
    category: "Analytics & Growth",
    readTime: "4 min read",
    excerpt: "Track daily stream growth, monitor best performing countries and stores, and generate custom sales reports.",
    steps: [
      {
        stepTitle: "View Daily Trends",
        description: "Gain deep insights into how your tracks are performing across global platforms:",
        bullets: [
          "Track Daily Growth: This shows a visual line graph of your day-to-day streams over a selectable timeframe (7 Days, 14 Days, or 30 Days).",
          "Check Totals: View your overall streaming metric under Total Streams (e.g., 10.7K).",
          "Best Performing Countries: A map and interactive bar chart reveal exactly where your top listeners are located by country (such as IN, CA, US).",
          "Best Performing Stores: A circular pie chart breaks down your streams by platform so you can track your numbers across platforms like Spotify, YouTube Art Tracks, and Apple Music."
        ],
        image: Images.Article17,
      },
      {
        stepTitle: "View and Download Sales Reports",
        description: "Generate and download detailed financial and streaming reports:",
        bullets: [
          "Click the Sales Report tab at the top of the page.",
          "Select custom macro filters (1 Month, 3 Months, or 6 Months) to view your long-term streaming data (e.g., 4.4M Total Streams across platforms like Meta, Spotify, YouTube Music, and Apple Music).",
          "Download Reports: Scroll down to the Sales Reports section, input your desired date range using the FROM and TO dropdown calendar menus, and click the Request Report button. Once generated, click the Download button next to any past month statement to save it directly to your device."
        ],
        image: Images.Article18,
      },
    ],
  },
  {
    id: "art-3",
    title: "How to Manage Royalties & Request Bank Payouts",
    category: "Royalties & Payouts",
    readTime: "3 min read",
    excerpt: "Review your total earnings history, check withdrawable funds, and submit direct bank payout requests.",
    steps: [
      {
        stepTitle: "Review Total Monthly Earnings & Available Balance",
        description: "Track your accumulated music royalties over historical periods:",
        bullets: [
          "Earnings Chart: Main graph displays your historical monthly earnings data line (filter by 1M, 3M, or 6M timeframes).",
          "Total Earnings & Available Balance: View lifetime earnings and Available To Withdraw balance bar. Click Request Payout when ready."
        ],
        image: Images.Article15,
      },
      {
        stepTitle: "Submit Withdraw Request Pop-up",
        description: "Complete your bank payout details in the modal pop-up window:",
        bullets: [
          "Modal Title: A pop-up window titled 'Withdraw Request' will appear.",
          "Minimum Payout Threshold: Review your available balance and confirm it meets the Minimum Payout of $50.00.",
          "Select Bank Account: Select your linked Bank Account from the dropdown menu (e.g., HDFC BANK).",
          "Enter Amount: Type your desired cashout amount in the 'Amount' field.",
          "Finalize: Click the 'Submit Request' button to finalize your bank payout."
        ],
        image: Images.Article16,
      },
    ],
  },
  {
    id: "art-4",
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
    id: "art-5",
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
    id: "art-6",
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
    id: "art-7",
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
    id: "art-8",
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
    id: "art-9",
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
            className={`p-1.5 rounded-lg transition cursor-pointer ${activeTab === tab.id
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
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [currentView, setCurrentView] = useState<ViewType>("main");
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<{ src: any; title: string } | null>(null);

  // Lock background page body scroll when image lightbox modal is open
  useEffect(() => {
    if (previewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewImage]);


  // Email Validation & First Time Card State
  const [userEmail, setUserEmail] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("amozart_support_user_email") || "";
    }
    return "";
  });
  const [isEmailSaved, setIsEmailSaved] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("amozart_support_email_saved") === "true";
    }
    return false;
  });
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

  // Multiple Chat Sessions State with localStorage persistence
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("amozart_support_sessions");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch (err) {
        console.error("Failed to load saved chat sessions", err);
      }
    }
    return [DEFAULT_INITIAL_SESSION];
  });

  const [activeSessionId, setActiveSessionId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const savedId = localStorage.getItem("amozart_support_active_session");
      if (savedId) return savedId;
    }
    return "session-initial";
  });

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [aiInput, setAiInput] = useState<string>("");
  const [articleFeedback, setArticleFeedback] = useState<Record<string, boolean>>({});

  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Derived current active session & messages
  const activeSession = useMemo(() => {
    return sessions.find((s) => s.id === activeSessionId) || sessions[0] || DEFAULT_INITIAL_SESSION;
  }, [sessions, activeSessionId]);

  const chatMessages = activeSession.messages;

  // Saved sessions are ONLY those where the user has actually sent at least 1 message
  const savedSessions = useMemo(() => {
    return sessions.filter((s) => s.messages.some((m) => m.sender === "user"));
  }, [sessions]);

  // Save ONLY active sessions with user interaction to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const activeUserSessions = sessions.filter((s) => s.messages.some((m) => m.sender === "user"));
        if (activeUserSessions.length > 0) {
          localStorage.setItem("amozart_support_sessions", JSON.stringify(activeUserSessions));
        } else {
          localStorage.removeItem("amozart_support_sessions");
        }
      } catch (err) {
        console.error("Failed to save sessions", err);
      }
    }
  }, [sessions]);

  // Save activeSessionId to localStorage whenever updated
  useEffect(() => {
    if (typeof window !== "undefined" && activeSessionId) {
      try {
        localStorage.setItem("amozart_support_active_session", activeSessionId);
      } catch (err) {
        console.error("Failed to save active session ID", err);
      }
    }
  }, [activeSessionId]);

  // Helper to append a message to current active session
  const appendMessageToActiveSession = (newMsg: MessageItem) => {
    setSessions((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id === activeSessionId) {
          const updatedMsgs = [...session.messages, newMsg];
          const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          let newTitle = session.title;
          if (newMsg.sender === "user" && (session.title === "New Conversation" || session.title === "Amozart Support Assistant")) {
            newTitle = newMsg.text.length > 28 ? newMsg.text.slice(0, 28) + "..." : newMsg.text;
          }
          return {
            ...session,
            title: newTitle,
            updatedAt: timeNow,
            messages: updatedMsgs,
          };
        }
        return session;
      })
    );
  };

  // Helper to start a brand new conversation without deleting past ones
  const handleCreateNewChat = () => {
    // If there is already an existing session with NO user messages (unsaved draft), reuse it!
    const existingEmpty = sessions.find((s) => !s.messages.some((m) => m.sender === "user"));
    if (existingEmpty) {
      setActiveSessionId(existingEmpty.id);
      setCurrentView("ai_chat");
      return;
    }

    const newId = "session-" + Date.now();
    const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newSession: ChatSession = {
      id: newId,
      title: "New Conversation",
      updatedAt: timeNow,
      messages: [
        {
          id: Date.now().toString(),
          sender: "ai",
          text: "👋 Welcome to Amozart Support! How can I help you with your music distribution, royalties, or Content ID today?",
          time: timeNow,
        },
      ],
    };
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newId);
    setCurrentView("ai_chat");
  };

  // Helper to clear all sessions
  const handleClearHistory = () => {
    setSessions([DEFAULT_INITIAL_SESSION]);
    setActiveSessionId("session-initial");
    try {
      localStorage.removeItem("amozart_support_sessions");
      localStorage.removeItem("amozart_support_active_session");
    } catch (e) {
      console.error(e);
    }
  };

  // Article feedback handlers
  const handleArticleHelpful = (articleId: string) => {
    setArticleFeedback((prev) => ({ ...prev, [articleId]: true }));
    setTimeout(() => {
      setCurrentView("main");
    }, 1500);
  };

  const handleArticleNeedHelp = (articleTitle: string) => {
    const newId = "session-" + Date.now();
    const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const promptText = `I need more help regarding the article: "${articleTitle}"`;

    const userMsg: MessageItem = {
      id: Date.now().toString(),
      sender: "user",
      text: promptText,
      time: timeNow,
    };

    const newSession: ChatSession = {
      id: newId,
      title: articleTitle.length > 25 ? articleTitle.slice(0, 25) + "..." : articleTitle,
      updatedAt: timeNow,
      messages: [
        {
          id: (Date.now() - 1).toString(),
          sender: "ai",
          text: "👋 Welcome to Amozart Support! How can I help you with your music distribution, royalties, or Content ID today?",
          time: timeNow,
        },
        userMsg,
      ],
    };

    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newId);
    setCurrentView("ai_chat");
    setIsTyping(true);

    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: promptText,
        history: [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const aiReply = data.reply || data.error || "Unable to reach AI assistant at the moment.";
        const aiMsg: MessageItem = {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: aiReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setSessions((prevSessions) =>
          prevSessions.map((session) => {
            if (session.id === newId) {
              return {
                ...session,
                messages: [...session.messages, aiMsg],
              };
            }
            return session;
          })
        );
      })
      .catch((err) => {
        console.error(err);
        const fallbackMsg: MessageItem = {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "Connection issue. Unable to process AI response.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setSessions((prevSessions) =>
          prevSessions.map((session) => {
            if (session.id === newId) {
              return {
                ...session,
                messages: [...session.messages, fallbackMsg],
              };
            }
            return session;
          })
        );
      })
      .finally(() => {
        setIsTyping(false);
      });
  };

  // Persist userEmail to localStorage whenever updated
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (userEmail) localStorage.setItem("amozart_support_user_email", userEmail);
      localStorage.setItem("amozart_support_email_saved", isEmailSaved ? "true" : "false");
    }
  }, [userEmail, isEmailSaved]);

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
    appendMessageToActiveSession(gifMsg);
    setShowGifPicker(false);
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: `Awesome GIF! 🎵 Love the vibe. How else can I assist with your release catalog?`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      appendMessageToActiveSession(aiResponse);
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
    appendMessageToActiveSession(voiceMsg);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I received your voice note! Processing audio transcript... How else can I assist you with your Amozart account?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      appendMessageToActiveSession(aiMsg);
      setIsTyping(false);
    }, 1200);
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (currentView === "ai_chat" || currentView === "live_chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isTyping, currentView]);

  // Filtered Articles based on activeTab (Home shows 3 new user articles, Help shows all articles) and search query
  const filteredArticles = useMemo(() => {
    let list = HELP_ARTICLES;
    if (activeTab === "home") {
      list = HELP_ARTICLES.filter((art) => ["art-1", "art-2", "art-3"].includes(art.id));
    }
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (art) =>
        art.title.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q)
    );
  }, [searchQuery, activeTab]);

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

    appendMessageToActiveSession(userMsg);
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
      const aiReply = data.reply || data.error || "Unable to process AI response.";

      const aiMsg: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      appendMessageToActiveSession(aiMsg);
    } catch (err) {
      console.error(err);
      const fallbackMsg: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "Network error. Failed to reach AI service.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      appendMessageToActiveSession(fallbackMsg);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOpenArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
    setCurrentView("article_detail");
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
      case "art-4":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "art-5":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case "art-6":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "art-7":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        );
      case "art-8":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        );
      case "art-9":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="launcher-button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-primary text-white shadow-2xl shadow-purple-600/50 flex items-center justify-center cursor-pointer border-2 border-white/20 transition-all duration-300 relative group"
            aria-label="Open Amozart Help Center"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.button>
        ) : (
          <motion.div
            key="support-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "bottom right" }}
            className={`transition-all duration-300 rounded-[28px] shadow-2xl border flex flex-col overflow-hidden relative backdrop-blur-xl origin-bottom-right ${currentView === "article_detail"
                ? "w-[94vw] sm:w-[680px] h-[720px] max-h-[90vh]"
                : "w-[92vw] sm:w-[410px] h-[640px] max-h-[88vh]"
              } ${isDarkMode
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
                        {currentView === "email_support" && "Email Support"}
                      </h4>
                      <p className="text-xs text-slate-300/80 mt-0.5">
                        {currentView === "ai_chat" && "Instant automated answers 24/7"}
                        {currentView === "live_chat" && "Connected with Sarah • Typically replies in 2m"}
                        {currentView === "article_detail" && "Knowledge Base Guide"}
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


            {/* WIDGET CONTENT BODY */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 relative [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {/* HOME VIEW (Main Dashboard + Articles + Tabs) */}
              {currentView === "main" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {activeTab === "home" && (
                    <div className="space-y-3.5">
                      <div className="grid grid-cols-1 gap-2.5">
                        {/* Card 1: AI Assistant */}
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setCurrentView("ai_chat")}
                          className={`p-3.5 rounded-[20px] border transition-all duration-300 cursor-pointer flex items-center justify-between group shadow-sm ${isDarkMode
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
                          className={`w-full pl-10 pr-9 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border outline-none transition duration-200 ${isDarkMode
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
                                className={`p-3 rounded-[16px] border transition duration-200 cursor-pointer flex items-center justify-between gap-3 group ${isDarkMode
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
                    <div className="space-y-4 pt-1 pb-2">
                      <div className="space-y-3">
                        {savedSessions.length > 0 && (
                          <div className="px-1 flex items-center justify-between">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Recent Conversations ({savedSessions.length})
                            </h5>
                            <button
                              onClick={handleClearHistory}
                              className="text-[10px] text-rose-500 hover:text-rose-600 font-semibold cursor-pointer transition"
                            >
                              Clear All
                            </button>
                          </div>
                        )}

                        {/* Saved Conversations List OR Beautiful Hero Illustration if Empty */}
                        {savedSessions.length > 0 ? (
                          <div className="space-y-2.5 max-h-[380px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1.5 py-1">
                            {savedSessions.map((session) => {
                              const lastMsg = session.messages[session.messages.length - 1];
                              const isCurrentActive = session.id === activeSessionId;
                              return (
                                <motion.div
                                  key={session.id}
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                  onClick={() => {
                                    setActiveSessionId(session.id);
                                    setCurrentView("ai_chat");
                                  }}
                                  className={`p-3.5 rounded-[22px] border transition duration-200 cursor-pointer flex items-start justify-between gap-3 shadow-sm ${isCurrentActive
                                    ? isDarkMode
                                      ? "bg-slate-900 border-primary/70 ring-1 ring-primary/40 shadow-purple-900/20"
                                      : "bg-white border-primary/60 ring-1 ring-primary/30 shadow-md shadow-purple-900/10"
                                    : isDarkMode
                                      ? "bg-slate-900/70 border-slate-800/80 hover:border-primary/40 hover:bg-slate-900"
                                      : "bg-white border-slate-200/90 hover:border-primary/40 hover:shadow-sm"
                                    }`}
                                >
                                  <div className="flex items-start gap-3 min-w-0 flex-1">
                                    <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-primary to-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-purple-500/20">
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                      </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-2 mb-0.5">
                                        <h6 className={`font-bold text-xs sm:text-sm truncate ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                                          {session.title}
                                        </h6>
                                        <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                                          {session.updatedAt}
                                        </span>
                                      </div>
                                      <p className="text-xs text-slate-400 truncate leading-relaxed">
                                        {lastMsg?.text || "No messages yet."}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="py-8 px-4 text-center space-y-3.5 my-2">
                            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                              <div className="absolute inset-0 rounded-3xl bg-primary/15 blur-xl animate-pulse"></div>
                              <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-tr from-primary via-purple-600 to-indigo-500 text-white flex items-center justify-center shadow-xl shadow-purple-500/25">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <h6 className={`font-bold text-sm sm:text-base ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                                Start a Conversation
                              </h6>
                              <p className="text-xs text-slate-400 max-w-[240px] mx-auto leading-relaxed">
                                Our AI assistant is ready 24/7 to answer your queries on music distribution, payouts & Content ID.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 'Ask a question' pill button -> Creates NEW Chat session without deleting old ones */}
                      <div className="pt-2 flex justify-center">
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={handleCreateNewChat}
                          className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center gap-2 cursor-pointer transition"
                        >
                          <span>Ask a question</span>
                          <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] font-black">
                            ?
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* CHAT INTERFACE VIEW */}
              {(currentView === "ai_chat" || currentView === "live_chat") && (
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col h-full space-y-3">
                  <div className="flex-1 space-y-3 overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {chatMessages.length === 0 && (
                      <div className="text-center space-y-2 py-8 px-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm text-xl font-bold">
                          🤖
                        </div>
                        <h5 className={`font-bold text-sm ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                          How can I help you today?
                        </h5>
                        <p className="text-xs text-slate-400 max-w-xs mx-auto">
                          Ask me anything about music distribution, royalties, Spotify verification, or Content ID.
                        </p>
                      </div>
                    )}
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
                            className={`max-w-[85%] p-3.5 rounded-[18px] text-xs sm:text-sm leading-relaxed ${msg.sender === "user"
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
                            {msg.sender === "user" ? "You" : "Amozart Support • Smart Agent"} • {msg.time}
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
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => handleSendAiMessage(item.text)}
                          className={`text-[11px] font-semibold px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${isDarkMode
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
                          className={`w-full rounded-[24px] border transition-all duration-300 p-3 sm:p-3.5 flex flex-col justify-between shadow-xl shadow-purple-950/5 ${isDarkMode
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
                              className={`w-full text-xs sm:text-sm font-medium bg-transparent outline-none ${isDarkMode ? "text-white placeholder-slate-500" : "text-slate-900 placeholder-slate-400"
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
                              className={`w-full text-xs sm:text-sm font-medium bg-transparent outline-none resize-none leading-relaxed ${isDarkMode ? "text-white placeholder-slate-500" : "text-slate-900 placeholder-slate-400"
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
                                className={`px-1 py-0.5 rounded text-[9px] font-bold border transition cursor-pointer leading-none ${showGifPicker
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
                              className={`w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center shrink-0 ${(aiInput.trim() || selectedFile) && isValidEmail(userEmail)
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
                          className={`w-full rounded-[24px] border transition-all duration-300 p-3 sm:p-3.5 flex flex-col justify-between ${isDarkMode
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
                            className={`w-full text-xs sm:text-sm bg-transparent outline-none resize-none leading-relaxed font-medium ${isDarkMode ? "text-white placeholder-slate-400" : "text-slate-900 placeholder-slate-400"
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
                                className={`px-1 py-0.5 rounded text-[9px] font-bold border transition cursor-pointer leading-none ${showGifPicker
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
                              className={`w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center shrink-0 ${aiInput.trim() || selectedFile
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
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="space-y-4 text-xs sm:text-sm">
                  {/* Premium Header Card */}
                  <div className={`flex items-center gap-3.5 p-4 rounded-2xl border backdrop-blur-md shadow-sm transition duration-300 ${isDarkMode
                      ? "bg-gradient-to-r from-primary/20 via-indigo-950/40 to-slate-900 border-primary/30 text-white"
                      : "bg-gradient-to-r from-primary/10 via-purple-50/60 to-white border-primary/20 text-slate-900"
                    }`}>
                    <div className="p-3 rounded-xl bg-primary text-white shadow-md shadow-purple-500/30 shrink-0">
                      {renderArticleIcon(selectedArticle.id)}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-primary/15 px-2 py-0.5 rounded-md border border-primary/20 inline-block">
                        {selectedArticle.category} • {selectedArticle.readTime}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base mt-1 leading-snug">{selectedArticle.title}</h4>
                    </div>
                  </div>

                  {selectedArticle.content && selectedArticle.content.length > 0 && (
                    <div className="space-y-2.5 leading-relaxed px-1">
                      {selectedArticle.content.map((paragraph, idx) => (
                        <p key={idx} className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {selectedArticle.steps && selectedArticle.steps.length > 0 && (
                    <div className="space-y-4 pt-1">
                      {selectedArticle.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-2xl border space-y-3 transition-all duration-200 shadow-sm ${isDarkMode
                              ? "bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700"
                              : "bg-white border-slate-200/90 text-slate-800 hover:border-slate-300 hover:shadow-md"
                            }`}
                        >
                          {step.stepTitle && (
                            <h5 className={`font-bold text-xs sm:text-sm flex items-center gap-2.5 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                              {step.stepTitle.toLowerCase().startsWith("step") ? (
                                <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-extrabold shrink-0 shadow-md shadow-purple-500/30">
                                  {step.stepTitle.match(/\d+/)?.[0] || idx + 1}
                                </span>
                              ) : (
                                <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                </span>
                              )}
                              <span>{step.stepTitle}</span>
                            </h5>
                          )}

                          {step.description && (
                            <p className={`text-xs leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                              {step.description}
                            </p>
                          )}

                          {step.bullets && step.bullets.length > 0 && (
                            <ul className="space-y-1.5 pl-1 text-xs">
                              {step.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className={`flex items-start gap-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                                  <span className="text-primary font-bold text-sm leading-none mt-0.5">•</span>
                                  <span className="leading-snug">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {step.image && (
                            <div
                              onClick={() => setPreviewImage({ src: step.image, title: step.stepTitle || selectedArticle.title })}
                              className="mt-3 relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 group cursor-pointer shadow-md bg-slate-950/20 transition-all duration-300 hover:border-primary/60 hover:shadow-xl"
                            >
                              <Image
                                src={step.image}
                                alt={step.stepTitle || "Step image"}
                                className="w-full h-auto object-cover group-hover:scale-[1.015] transition duration-300 max-h-[380px]"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between p-3">
                                <span className="text-white text-xs font-semibold drop-shadow">Click to view image</span>
                                <span className="px-3 py-1.5 rounded-full bg-primary/95 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-lg border border-white/20">
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                  </svg>
                                  <span>Full View</span>
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Ultra-Premium Feedback Card */}
                  <div className={`p-5 rounded-2xl border text-center space-y-3 transition duration-300 shadow-sm relative overflow-hidden ${isDarkMode
                      ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800 text-white"
                      : "bg-gradient-to-br from-slate-50 via-white to-purple-50/40 border-slate-200/90 text-slate-800 shadow-md shadow-purple-900/5"
                    }`}>
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                    {articleFeedback[selectedArticle.id] ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-2 text-emerald-500 font-bold text-xs py-1">
                        <span>🎉 Glad this was helpful! Returning to home...</span>
                      </motion.div>
                    ) : (
                      <>
                        <div className="space-y-0.5">
                          <h5 className={`font-bold text-xs sm:text-sm tracking-tight ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                            Was this article helpful?
                          </h5>
                          <p className="text-[11px] text-slate-400">Let us know if this guide answered your questions</p>
                        </div>
                        <div className="flex justify-center gap-3 pt-1">
                          <motion.button
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleArticleHelpful(selectedArticle.id)}
                            className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition cursor-pointer flex items-center gap-2 shadow-md shadow-emerald-500/20"
                          >
                            <span>👍</span>
                            <span>Yes, thanks!</span>
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleArticleNeedHelp(selectedArticle.title)}
                            className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs transition cursor-pointer flex items-center gap-2 shadow-md shadow-purple-500/25"
                          >
                            <span>💬</span>
                            <span>Still need help</span>
                          </motion.button>
                        </div>
                      </>
                    )}
                  </div>
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
                      className={`relative flex flex-col items-center justify-center py-1.5 px-6 rounded-2xl transition duration-200 cursor-pointer ${isActive ? "text-primary font-bold" : "text-slate-400 hover:text-slate-600 font-medium"
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

      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] max-h-[94vh] bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center p-3 sm:p-4 text-white"
            >
              <div className="w-full flex items-center justify-between px-2 py-1.5 mb-2">
                <h4 className="text-xs sm:text-sm font-bold text-white truncate max-w-[80%] flex items-center gap-2">
                  <span className="truncate">{previewImage.title}</span>
                </h4>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition font-extrabold text-xs cursor-pointer flex items-center gap-1 shadow-sm"
                >
                  <span>✕</span>
                  <span>Close</span>
                </button>
              </div>
              <div className="overflow-auto max-h-[84vh] w-full flex items-center justify-center no-scrollbar">
                <Image
                  src={previewImage.src}
                  alt={previewImage.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto object-contain max-h-[80vh] rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
