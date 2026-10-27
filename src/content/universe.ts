/**
 * ============================================================
 *  OUR LITTLE UNIVERSE — EDIT EVERYTHING HERE
 * ============================================================
 *  All names, dates, captions, letter text, quiz and promises live
 *  in this single file. Nothing here is real — replace every
 *  placeholder with your own words.
 *
 *  PHOTOS:
 *   1. Drop your images in  /public/photos/  (e.g. /public/photos/01.jpg)
 *   2. Set `src: "/photos/01.jpg"` on the matching entry below.
 *   Entries with `src: ""` show a soft painted placeholder frame.
 *
 *  MUSIC:
 *   Put a track YOU OWN at /public/audio/our-song.mp3 and set
 *   `musicSrc: "/audio/our-song.mp3"`. Leave "" to hide playback.
 *   Music never autoplays — visitors press play.
 *
 *  VOICE MESSAGE:
 *   Set `voiceSrc: "/audio/voice.mp3"` or visitors can pick a local
 *   file on the page (it stays in their browser only).
 * ============================================================
 */

export const couple = {
  names: "Your Name & Their Name",
  since: "Add your date",
  dedication: "Write a short line that opens your little universe.",
  musicSrc: "",
  musicTitle: "Add the name of your song",
  voiceSrc: "",
};

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  date: string;
  memory: string;
  tilt: number;
};

export const photos: Photo[] = [
  { src: "", alt: "Photo one", caption: "Your favourite memory", date: "Add your date", memory: "Write what you remember about this moment — the weather, the laugh, the little detail only you two know.", tilt: -3 },
  { src: "", alt: "Photo two", caption: "The first adventure", date: "Add your date", memory: "Write your own memory for this photo.", tilt: 2 },
  { src: "", alt: "Photo three", caption: "A quiet evening", date: "Add your date", memory: "Write your own memory for this photo.", tilt: -1.5 },
  { src: "", alt: "Photo four", caption: "That silly day", date: "Add your date", memory: "Write your own memory for this photo.", tilt: 3 },
  { src: "", alt: "Photo five", caption: "Somewhere new", date: "Add your date", memory: "Write your own memory for this photo.", tilt: -2.5 },
  { src: "", alt: "Photo six", caption: "Just us", date: "Add your date", memory: "Write your own memory for this photo.", tilt: 1.5 },
];

export const storyBeats = [
  { kicker: "Once", title: "Two orbits crossed.", text: "Write how your story began — where, when, or simply how it felt." },
  { kicker: "Then", title: "Small moments became a map.", text: "Write about the little rituals that became yours." },
  { kicker: "Now", title: "A whole universe, made of us.", text: "Write what this keepsake means to you today." },
];

export const rooms = [
  { icon: "coffee", title: "The Morning Room", front: "Tap to open", back: "Write a favourite everyday ritual you share." },
  { icon: "music", title: "The Song Room", front: "Tap to open", back: "Write about the song that feels like you two." },
  { icon: "map", title: "The Travel Room", front: "Tap to open", back: "Write about a place you went — or want to go." },
  { icon: "moon", title: "The Night Room", front: "Tap to open", back: "Write about a late-night conversation you remember." },
] as const;

export const letter = {
  to: "To my favourite person,",
  paragraphs: [
    "Write your own message here. This is the long letter — take your time.",
    "Add as many paragraphs as you like. Each item in this list becomes its own paragraph on the page.",
    "Tell them what you noticed first, what you love now, and what you can't wait for.",
  ],
  signoff: "Always yours,",
  from: "Your Name",
};

export const quiz = [
  { q: "Where did we first meet?", options: ["Answer A", "Answer B", "Answer C"], answer: 0, right: "You remembered! ✦", wrong: "Close… but not quite." },
  { q: "What's our go-to comfort food?", options: ["Answer A", "Answer B", "Answer C"], answer: 1, right: "Exactly right.", wrong: "Hmm, think harder, love." },
  { q: "Who said 'I love you' first?", options: ["Me", "You", "We said it together"], answer: 2, right: "Of course you knew.", wrong: "Nice try!" },
];
export const quizReveal = "Write a final secret reveal — a surprise, a plan, or one more confession.";

export const promises = [
  "Write a promise you want to keep.",
  "Write a promise about the little things.",
  "Write a promise about the future.",
  "Write a promise only they would understand.",
];

export const closing = {
  title: "To be continued…",
  text: "Write a closing line for the end of the journey.",
};