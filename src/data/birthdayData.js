// ============================================================================
// birthdayData.js
// ----------------------------------------------------------------------------
// EVERYTHING you'd want to personalize lives in this one file.
// Replace the dummy text, photo URLs, song info, and messages below —
// you should not need to touch any component to update the content.
//
// PHOTOS: swap any `photo:` URL for your own. To use local photos, drop
// files into src/assets/photos/ and import them at the top of this file,
// e.g. `import polaroid1 from "../assets/photos/beach-day.jpg"`, then use
// `photo: polaroid1` instead of a URL string.
// ============================================================================
import firstday from "../assets/photos/firstday.png";
import collegedays from "../assets/photos/incollegedresss.jpeg"
import eattingmmo from "../assets/photos/eattingmmo.jpeg"
import handheart from "../assets/photos/handheart.jpeg"
import hersingle from "../assets/photos/hersingle.jpeg"
import incolege from "../assets/photos/incolege.jpeg"
import incollegedresss from "../assets/photos/incollegedresss.jpeg"
import incollegedress from "../assets/photos/incollegedress.jpeg"
import inharison from "../assets/photos/inharison.jpeg"
import inherdouselying from "../assets/photos/inherdouselying.jpeg"
import inkutha from "../assets/photos/inkutha.jpeg"
import inresturemntherohoto from "../assets/photos/inresturemntherohoto.jpeg"
import inresturent from "../assets/photos/inresturent.jpeg"
import inresturentt from "../assets/photos/inresturentt.jpeg"
import lyingdownincollege from "../assets/photos/lyingdownincollege.jpeg"
import shrlyingtome from "../assets/photos/shrlyingtome.jpeg"
import fundays from "../assets/photos/fundays.jpeg"
import temple from "../assets/photos/temple.jpeg"
import icecreamdays from "../assets/photos/icecreamdays.jpeg"
import calllogs from "../assets/photos/calllogs.png"


import dilnu from "../assets/audios/dil nu.mp3"
import palpal from "../assets/audios/Afusic - Pal Pal (Official Music Video) Prod. @AliSoomroMusic.mp3"
import soniyo from "../assets/audios/Soniyo.mp3"
import espresso from "../assets/audios/Espresso - Sabrina Carpenter.mp3"

export const site = {
  friendName: "Meenakshi",
  yourName: "Aastha",
  tagline: "best viewed with headphones ♫",
};

// ---------------------------------------------------------------------------
// 1. SECRET LANDING PAGE
// ---------------------------------------------------------------------------
export const landing = {
  greeting: "hey, birthday girl ♡",
  subline: "I made something for you.",
  buttonLabel: "DO NOT CLICK",
  footnote: "just joking click it",
};

// ---------------------------------------------------------------------------
// 2. OUR STORY — vertical timeline
// ---------------------------------------------------------------------------
export const timeline = [
  {
    year: "2021",
    title: "the year we met",
    text: "2021. The year I met you and had absolutely no idea that you would become such an important part of my life.",
    photo: firstday,
  },

  {
    year: "2022",
    title: "our college era",
    text: "College gave us a lot of ordinary days, but having you around somehow made them so much better.",
    photo: incollegedress,
  },

  {
    year: "2022",
    title: "the days in between",
    text: "Classes, assignments, random conversations, food breaks and all the little moments that slowly became memories.",
    photo: collegedays,
  },

  {
    year: "2023",
    title: "more memories, more nonsense",
    text: "By this point, we had collected enough random memories and inside jokes to make absolutely no sense to anyone else.",
    photo: handheart,
  },

  {
    year: "2023",
    title: "another one for the memory box",
    text: "One more day, one more photo, and somehow another memory that I know I'll look back on later and smile about.",
    photo: inresturentt,
  },

  {
    year: "2024",
    title: "growing up together",
    text: "Life kept changing, and so did we. But somehow, through all the different phases, our friendship stayed.",
    photo: inherdouselying,
  },

  {
    year: "2025",
    title: "another year of us",
    text: "More conversations, more random plans, more food, more pictures, and somehow even more memories to add to the collection.",
    photo: incolege,
  },

  {
    year: "2026",
    title: "and we're still here",
    text: "Another year, another chapter. And honestly, I can't wait to see how many more memories we're going to make.",
    photo: calllogs,
  },
];
// ---------------------------------------------------------------------------
// 3. MEMORY WALL — scrapbook gallery
// ---------------------------------------------------------------------------
export const memories = [
  {
    id: "m1",
    title: "just us being us",
    caption: "one of those random moments I'll always remember.",
    description:
      "Nothing particularly special was happening. It was just one of those ordinary moments that somehow became a memory because I was with you.",
    photo: inherdouselying,
    rotation: -6,
  },

  {
    id: "m2",
    title: "a day with Harison",
    caption: "another day, another memory.",
    description:
      "One of those days that was simple, fun, and worth remembering. I'm glad I have this little piece of it captured.",
    photo: inharison,
    rotation: 4,
  },

  {
    id: "m3",
    title: "one of our good days",
    caption: "good food, good mood, good company.",
    description:
      "I don't think every memory needs a big story behind it. Sometimes a good day with your favorite person is enough.",
    photo: handheart,
    rotation: -3,
  },

  {
    id: "m4",
    title: "our college days",
    caption: "the days we probably should have been paying attention.",
    description:
      "College gave us a lot of ordinary days that I didn't realize I'd miss later. I'm glad we have these little moments to look back on.",
    photo: shrlyingtome,
    rotation: 7,
  },

  {
    id: "m5",
    title: "momo, obviously.",
    caption: "because somehow we can never say no to momo.",
    description:
      "At this point, momo isn't even just food anymore. It's basically one of our friendship traditions.",
    photo: eattingmmo,
    rotation: -5,
  },

  {
    id: "m6",
    title: "one of our craziest days",
    caption: "we really know how to make a normal day memorable.",
    description:
      "This was one of those days where everything felt a little more fun than usual. Definitely one I want to remember.",
    photo: fundays,
    rotation: 3,
  },

  {
    id: "m7",
    title: "a peaceful little day",
    caption: "one for the memory box.",
    description:
      "A quieter memory, but still one of my favorites. Sometimes the simple days stay with you the longest.",
    photo: temple,
    rotation: -4,
  },

  {
    id: "m8",
    title: "the ice cream craving",
    caption: "because apparently we needed it.",
    description:
      "We had the craving, so obviously we had to get it. Some decisions simply don't require discussion.",
    photo: icecreamdays,
    rotation: 5,
  },
];

// ---------------------------------------------------------------------------
// 4. THINGS I LOVE ABOUT YOU — envelope / card reveals
// ---------------------------------------------------------------------------
export const loveNotes = [
  {
    label: "OPEN ME ♡",
    message: "You somehow make even the most boring days feel like something worth remembering.",
  },
  {
    label: "ONE MORE",
    message: "You always know when something is wrong, even when I insist that I'm fine.",
  },
  {
    label: "THIS ONE IS IMPORTANT",
    message: "You are one of the very few people I can completely be myself around. No pretending, no filtering, just me being me.",
  },
  {
    label: "YOU NEED TO KNOW THIS",
    message: "Some of my favorite memories are not even the big moments. They're the random conversations, stupid jokes, and completely pointless things we did together.",
  },
  {
    label: "READ THIS",
    message: "Thank you for knowing versions of me that not everyone gets to see and loving me through all of them.",
  },
  {
    label: "OKAY LAST ONE",
    message: "You have this annoying ability to make me laugh when I'm trying very hard not to.",
  },
  {
    label: "ACTUALLY, ONE MORE",
    message: "I hope you know that you never have to have everything figured out. I'll be here while you figure it out.",
  },
  {
    label: "OKAY NOW LAST ONE",
    message: "I'm genuinely so lucky that somewhere along the way, you became one of my people.",
  },

  // NEW ONES
  {
    label: "FOR YOUR BAD DAYS",
    message: "On the days when you don't feel like yourself, I hope you remember that you are still loved, still important, and still one of my favorite humans.",
  },
  {
    label: "A LITTLE REMINDER",
    message: "You don't have to be useful, productive, successful, or happy all the time. You can simply exist and I'll still be proud to call you my best friend.",
  },
  {
    label: "REMEMBER THIS",
    message: "No matter how much life changes, I hope we always find our way back to the same stupid conversations and uncontrollable laughter.",
  },
  {
    label: "YOU DESERVE THIS",
    message: "I hope this year brings you the kind of happiness you don't have to force, the kind that just quietly finds you and stays.",
  },
  {
    label: "IF YOU EVER FORGET",
    message: "You are so much more loved than you probably realize. And yes, unfortunately for you, I'm going to keep reminding you.",
  },
  {
    label: "A SECRET",
    message: "I don't think you realize how many random moments have become core memories for me just because you were there.",
  },
  {
    label: "THIS IS YOUR SIGN",
    message: "You are allowed to outgrow people, change your mind, start over, take your time, and become someone completely new. I'll still be cheering for you.",
  },
  {
    label: "FOR THE FUTURE",
    message: "I hope we get to look back one day and realize that these were the good old days we didn't know we were living.",
  },
  {
    label: "NO MATTER WHAT",
    message: "Whatever happens next , new places, new people, new chapters, all of it you'll always have a little corner of my life reserved for you.",
  },
  {
    label: "THE REAL ONE",
    message: "Thank you for being my person through the good days, terrible days, confusing days, and the days where neither of us had any idea what we were doing.",
  },
  {
    label: "DON'T OVERTHINK THIS",
    message:
      "You're one of my favorite people. That's it. That's the message. Now stop reading into it and go enjoy your birthday.",
  },
  {
    label: "FINE, I'LL SAY IT",
    message: "I love you, idiot. And I'm really, really glad life gave me you.",
  },
];

// ---------------------------------------------------------------------------
// 5. OUR SOUNDTRACK — retro player track list
// ---------------------------------------------------------------------------
export const soundtrack = [
  {
    track: "01",
    title: "That One Song",
    note: "the song we somehow played 500 times.",
    audioSrc: dilnu
  },

  {
    track: "02",
    title: "Pagal premi",

    note: "the soundtrack to fill the vibe",
    audioSrc: palpal,
  },
  {
    track: "03",
    title: "Road Trip Anthem",

    note: "windows down, questionable singing.",
    audioSrc: soniyo,
  },
  {
    track: "04",
    title: "Slow Dance in the Kitchen",

    note: "for no reason at all, just because.",
    audioSrc: espresso,
  },
];

// ---------------------------------------------------------------------------
// 6. CHAOS ARCHIVE — achievement list + friendship meter
// ---------------------------------------------------------------------------
export const achievements = [
  "made it through years of friendship without blocking each other",
  "turned random conversations into 3-hour conversations",
  "sent each other completely unnecessary updates throughout the day",
  "remembered stories the other person had completely forgotten",
  "been there for each other's good days and terrible days",
  "given advice that we sometimes didn't follow ourselves",
  "laughed at things that would make absolutely no sense to anyone else",
  "made plans and somehow ended up doing something completely different",
  "watched each other change and grow over the years",
  "had conversations that started with 'ani sunana...' and lasted forever",
  "shared things we probably wouldn't tell most people",
  "kept choosing this friendship through every new phase of life",
];
export const friendshipLevel = {
  percent: 99.9,
  label: "Friendship Level",
  footnote: "Unfortunately, there is no unsubscribe button.",
};

// ---------------------------------------------------------------------------
// 7. OPEN WHEN... — virtual envelopes
// ---------------------------------------------------------------------------
export const openWhenLetters = [
  {
    label: "Open when you're sad",
    message:
      "I know I can't always fix whatever is making you sad, but you never have to go through it alone. You don't have to explain everything or pretend you're okay with me. Just call me, sit with me, complain, cry, or say nothing at all. I'll still be here.",
  },

  {
    label: "Open when you miss me",
    message:
      "I probably miss you too, so this is your sign to call me. We don't even have to talk about anything important. Tell me something random, tell me what happened today, or just stay on the phone with me. I miss our stupid little conversations more than you know.",
  },

  {
    label: "Open when you're overthinking",
    message:
      "Please stop being so hard on yourself. I know your brain likes to create 17 different scenarios before anything has even happened, but you don't have to figure everything out tonight. Take a breath. We'll figure things out one thing at a time.",
  },

  {
    label: "Open when you doubt yourself",
    message:
      "I wish you could see yourself the way the people who love you see you. You are capable of so much more than you give yourself credit for. I have watched you grow through so many things, and I genuinely believe in you — even on the days when you don't believe in yourself.",
  },

  {
    label: "Open when you feel like you're falling behind",
    message:
      "You're not behind. Your life isn't a race and you don't need to have everything figured out right now. You're allowed to take your time, change your plans, make mistakes, and start again. I'm proud of the person you're becoming, not just the things you achieve.",
  },

  {
    label: "Open when you need motivation",
    message:
      "Remember how many things you once thought you couldn't handle that you eventually got through? This will be another one of those things. You don't need to have the whole path figured out. Just take the next step. I'll be cheering for you from wherever I am.",
  },

  {
    label: "Open when you need to laugh",
    message:
      "I would put something inspirational here, but we both know that's not what you need. Go look through our old photos and find the most embarrassing one of us. Then remember that we voluntarily made those memories together.",
  },

  {
    label: "Open when you feel alone",
    message:
      "Even when we're busy, far away, or not talking every day, please don't mistake the silence for distance. You are still one of the people I think about, care about, and want good things for. Some friendships don't need constant talking to stay real.",
  },

  {
    label: "Open when we have a fight",
    message:
      "If you're reading this because we're mad at each other, I'm probably being stubborn and you probably are too. But please remember that one bad conversation is never bigger than everything we've shared. I'd rather talk things out than lose something this important over one moment.",
  },

  {
    label: "Open when you're having a really good day",
    message:
      "YES. Finally. Something good happened and I hope you're enjoying every second of it. Tell me everything. I want to hear the whole story, including the unnecessary details that nobody else would care about.",
  },

  {
    label: "Open when you feel like nobody understands you",
    message:
      "I may not always understand exactly what you're feeling, but I'll always want to. You never have to make yourself smaller or easier to understand for me. Just be yourself. That's the person I became friends with in the first place.",
  },

  {
    label: "Open when you need a reminder of us",
    message:
      "Think about everything we've already been through together. All the random conversations, the stupid jokes, the serious talks, the little moments, the misunderstandings, and all the times we somehow ended up laughing again. There's so much history between us now, and I'm really grateful for it.",
  },

  {
    label: "Open when you need to know you're loved",
    message:
      "I hope you never question whether you matter to me. You do. A lot. I'm grateful for your existence in my life, for every version of you I've gotten to know, and for all the memories we haven't made yet.",
  },

  {
    label: "Open when you're scared of the future",
    message:
      "I don't know exactly where life is going to take either of us, and honestly that's a little scary. But I hope you know that no matter how much things change, I'll always be rooting for you. New places, new people, new chapters . I'll still want to hear about them.",
  },
];

// ---------------------------------------------------------------------------
// 8. OUR CHAT — fake message thread that tells a story
// ---------------------------------------------------------------------------
export const chatThread = [
  { from: "you", time: "12:31 AM", text: "oiiii" },
  { from: "her", time: "12:31 AM", text: "hajur" },
  { from: "you", time: "12:32 AM", text: "K gardai xau" },
  { from: "her", time: "12:32 AM", text: "kai haina esai" },
  { from: "you", time: "12:33 AM", text: "esai k" },
  { from: "her", time: "12:33 AM", text: "dhalkiraxu, aba dokan janu lageko, ani tmi" },
  { from: "you", time: "12:34 AM", text: "eaea hora, mani yasai basiraxu" },
  { from: "you", time: "12:34 AM", text: "ani khana khayeu " },
  { from: "her", time: "12:35 AM", text: "ahh khaye, aja mero fav tiyo" },
  { from: "you", time: "12:36 AM", text: "wow hora" },
  { from: "her", time: "12:36 AM", text: "um, ani aja k xa plan" },
  { from: "you", time: "12:37 AM", text: "kai xaina aba chiya khancu ekcin ma" },
  { from: "her", time: "12:38 AM", text: "khau khau, chiya tw mandatory bhai halo " },
  { from: "you", time: "12:38 AM", text: "ah haha" },
];

// ---------------------------------------------------------------------------
// 9. FINAL SURPRISE
// ---------------------------------------------------------------------------
export const finalSurprise = {
  preText: ["Okay...", "One last thing."],

  buttonLabel: "UNWRAP",

  headline: `Happy Birthday, ${site.friendName} ♡`,

  letter: `I don't really know how to put our friendship into a few paragraphs, because somehow there are so many little things that make it what it is.

There are the big memories, of course. But when I think about us, I mostly think about the ordinary things ,our random conversations, the stupid things we laugh about, the food we always end up talking about, the photos we take for no reason, and all those little moments that probably didn't seem important when they happened but somehow became some of my favorite memories.

You've seen different versions of me, and I've gotten to see so many different versions of you too. We've changed, grown, gotten busy, had misunderstandings, laughed until we couldn't breathe, and somehow we're still here.

And I think that's one of the things I love most about our friendship. It doesn't have to be perfect to be real.

I hope this next year is kind to you. I hope you get the things you've been quietly wishing for. I hope you become the person you want to be, at your own pace, without feeling like you have to have everything figured out.

And wherever life takes us, I hope we keep finding our way back to these little conversations, stupid jokes, random plans, and memories that only make sense to us.

Thank you for being my best friend, for being someone I can be completely myself around, and for becoming such an important part of my life without either of us probably realizing it at first.

I'm really, really glad I met you.

Happy birthday, Meenakshi ❤️

Here's to everything we've already been through, everything we're going to experience, and all the memories we haven't made yet.

I love you. Always.`,

  photo: inkutha,

  signOff: "— Aastha ♡",
};

// ---------------------------------------------------------------------------
// 10. SECRET HIDDEN PAGE — easter egg, unlocked after N clicks on a tiny icon
// ---------------------------------------------------------------------------
export const secretPage = {
  unlockClicks: 5,
  intro: "Psst...",
  reveal: "You found the secret page.",
  message:
    "This one's just for you: thank you for being exactly who you are, no notes, no edits needed. See you for many, many more of these.",
};

// ---------------------------------------------------------------------------
// SECTION NAV — order + labels used by the floating progress / tape nav
// ---------------------------------------------------------------------------
export const sections = [
  { id: "landing", label: "start" },
  { id: "timeline", label: "our story" },
  { id: "memories", label: "memory wall" },
  { id: "love", label: "things i love" },
  { id: "soundtrack", label: "soundtrack" },
  { id: "chaos", label: "chaos archive" },
  { id: "openwhen", label: "open when..." },
  { id: "chat", label: "our chat" },
  { id: "finale", label: "surprise" },
];
