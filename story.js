// Berlin Techno Quest - Story and Dialogue System

const gameStory = {
    // Game state
    rocks: {
        visionaere: false,  // Rock of Creative Chaos (Club der Visionaere) - 1/4
        katerBlau: false,   // Rock of Sunrise Magic (Kater Blau) - 2/4
        heideglühen: false, // Rock of Sacred Fire (Heideglühen) - 3/4
        sisyphos: false     // Rock of Eternal Dance (Sisyphos) - 4/4 FINAL ROCK
    },
    
    // Track which clubs have been visited (for superboss logic)
    clubsVisited: {
        visionaere: false,
        katerBlau: false,
        heideglühen: false,
        sisyphos: false
    },
    
    currentLocation: 'intro',
    currentDialogue: 0,
    
    // Story scenes and dialogues
    scenes: {
        intro: {
            background: 'berlin_skyline',
            dialogues: [
                {
                    speaker: 'Kalea',
                    text: "Flavio! Listen carefully - Berlin's mystical energy has been corrupted! You're the only one who can save it!",
                    animation: 'mermaid_appear'
                },
                {
                    speaker: 'Kalea',
                    text: "Four Sacred Rocks have been stolen by the nightlife guardians. Without them, Berlin's party spirit will disappear forever!",
                },
                {
                    speaker: 'Kalea',
                    text: "Your mission: Retrieve the rocks from Berlin's legendary clubs. The fate of the city's soul depends on you!",
                },
                {
                    speaker: 'Flavio',
                    text: "Four boss battles across some of my favorite clubs? I was planning an epic club crawl anyway - might as well save Berlin while I'm at it."
                },
                {
                    speaker: 'Kalea',
                    text: "Be careful, my raven hero! The guardians won't go easy on you. Good luck. Now go! 💙",
                    nextScene: 'visionaere_entrance'
                }
            ]
        },
        
        sisyphos_entrance: {
            background: 'sisyphos',
            dialogues: [
                {
                    speaker: 'Narrator',
                    text: "Sisyphos. The final temple. Your home away from home for the past decade."
                },
                {
                    speaker: 'The Bouncer',
                    text: "FLAVIO! I know you... Happy birthday, mate! But even regulars must prove themselves for the final gem!",
                    character: 'monster'
                },
                {
                    speaker: 'Flavio',
                    text: "Bouncer! After all these years, you still make me nervous! But I'm ready for the final test!"
                },
                {
                    speaker: 'The Bouncer',
                    text: "It's Monday 6 AM at Sisyphos. You've been here since Saturday. What's going through your head?",
                    choices: [
                        {
                            text: "I should probably check my phone... nah, bad idea",
                            response: "Smart choice! Reality can wait. The void between Saturday and Tuesday is sacred!"
                        },
                        {
                            text: "Is this heaven or am I just really dehydrated?",
                            response: "Both! Dehydrated enlightenment is the Sisyphos state of being!"
                        },
                        {
                            text: "One more song and I'll leave... I've said that 200 times",
                            response: "The eternal Sisyphos lie! We've all been trapped by 'one more song' for decades!"
                        }
                    ]
                },
                {
                    speaker: 'The Bouncer',
                    text: "Final question - after all these years in Berlin's underground, tell me - what's the TRUE spirit of Sisyphos?",
                    choices: [
                        {
                            text: "Berghain for people who smile",
                            response: "Did you just... compare us to... I'm too tired for this. No gem for you!",
                            givesRock: false
                        },
                        {
                            text: "Monday is optional, reality isn't",
                            response: "YES! You get it! Time is fake, jobs are temporary, but the party is eternal! Take the gem!",
                            givesRock: 'sisyphos'
                        },
                        {
                            text: "Home for lost souls",
                            response: "Dark but accurate! We're all beautifully broken here. The gem is yours, you glorious mess!",
                            givesRock: 'sisyphos'
                        }
                    ]
                },
                {
                    speaker: 'The Bouncer',
                    text: "You've earned the Gem of Eternal Dance! Now get in there... but seriously, go home after this. You smell like four days of bad decisions.",
                    nextScene: 'dynamic'
                }
            ]
        },
        
        visionaere_entrance: {
            background: 'visionaere',
            dialogues: [
                {
                    speaker: 'Narrator',
                    text: "Club der Visionaere. A wooden raft of dreams on the canal. Here, the river flows slow, the bass is a gentle hum, and time simply melts away."
                },
                {
                    speaker: 'Red Ampelmannchen',
                    text: "Halt, Flavio! You cannot pass! I am the gatekeeper of smooth vibes and relaxed evenings. I am the one true ruler of the East Side, and my gaze is fixed on you!",
                    character: 'monster'
                },
                {
                    speaker: 'Flavio',
                    text: "You're just a traffic light! I've jaywalked past you a thousand times. A little red man with a hat isn't going to stop me."
                },
                {
                    speaker: 'Red Ampelmannchen',
                    text: "Alright, Flavio. A simple test. You've just arrived at CDV on a warm afternoon. What's the first thing you do to blend in?",
                    choices: [
                        {
                            text: "Find a nice spot on the deck, sip a Fritz Cola, and pretend the world doesn't exist.",
                            response: "YES! A master of the chill zone! That's the true CDV way—where every minute is a mini-vacation!"
                        },
                        {
                            text: "Grab a beer and find a stranger to talk about everything with.",
                            response: "The magic of CDV! Where friendships are born over beer and good conversation!"
                        },
                        {
                            text: "Head straight under the speakers to feel the music properly.",
                            response: "A true connoisseur! You know the music sounds better here than in the middle of the crowd!"
                        }
                    ]
                },
                {
                    speaker: 'Red Ampelmannchen',
                    text: "Final test, Flavio! The sun has set and the fairy lights are twinkling. What's the secret sign that you've truly understood this place?",
                    choices: [
                        {
                            text: "You kept your phone in your pocket without needing stickers",
                            response: "YES! You respect the unspoken rule of this club! The memory is in your soul, not on your camera roll. The rock is yours!",
                            givesRock: 'visionaere'
                        },
                        {
                            text: "You've completely lost track of time and the toilet queue got long",
                            response: "Haha, a true Berliner! You know why those bathroom lines take forever - and I'm not talking about the queue. The rock is yours, you seasoned veteran!",
                            givesRock: 'visionaere'
                        },
                        {
                            text: "You push your way to the front, ready to sweat",
                            response: "Are you fucking kidding me?! This isn't Berghain, you sweaty tourist! CDV is about chill vibes, not aggressive pushing! Go back to whatever hell-hole techno bunker you crawled out of!",
                            givesRock: false
                        }
                    ]
                },
                {
                    speaker: 'Narrator',
                    text: "The Red Ampelmannchen flickers and turns green, stepping aside. The Rock of Creative Chaos appears! ✨",
                    nextScene: 'kater_blau_entrance'
                }
            ]
        },
        
        kater_blau_entrance: {
            background: 'katerblau',
            dialogues: [
                {
                    speaker: 'Narrator',
                    text: "Kater Blau. A theatrical wonderland on the Spree. The music is a pulse, the confetti is a promise, and every step is a new adventure."
                },
                {
                    speaker: 'Currywurst',
                    text: "FLAVIO! Stop right there! You cannot enter the Kater's domain! I am the patron saint of late-night regrets and the demon of your 4 AM cravings. I am the reason your wallet is empty every Monday morning!",
                    character: 'monster'
                },
                {
                    speaker: 'Flavio',
                    text: "You're just a demon made of sausage and ketchup! I've conquered far bigger monsters than you. I'm here for the rock, not your greasy nonsense."
                },
                {
                    speaker: 'Currywurst',
                    text: "Before you face the final test, I want to know... what is the most important rule of the Kater?",
                    choices: [
                        {
                            text: "Always remember where the chill-out areas are, because you're going to need them.",
                            response: "A wise choice! The marathon dancer knows to pace themselves. You understand how this game is played!"
                        },
                        {
                            text: "You've got to dance like nobody's watching, no matter what.",
                            response: "The ultimate freedom! That's the Kater spirit of uninhibited joy! Now get out there and shine!"
                        },
                        {
                            text: "Never use your phone for photos, only for finding your lost friends.",
                            response: "Excellent. You respect the sacred 'no photos' rule. The memory is in your soul, not on your camera roll!"
                        }
                    ]
                },
                {
                    speaker: 'Currywurst',
                    text: "Alright, Flavio. You survived the Kater Blau birthday party, a celebration so strange and beautiful. What is a sign that you truly mastered the pickle party?",
                    choices: [
                        {
                            text: "You found the secret restaurant and then devoured a delicious plate of mushrooms and salmon.",
                            response: "HAHA! Yes! You found the one meal that made sense in a world of nonsense! That kind of wisdom is priceless. Take the rock!",
                            givesRock: 'katerBlau'
                        },
                        {
                            text: "You managed to hitch a ride on the Gurken-Mobile, and it took you on a magical tour of the club.",
                            response: "Unbelievable! You rode the Gurken-Mobile! That's a sign of true favor from the spirit of the Kater. Take the rock!",
                            givesRock: 'katerBlau'
                        },
                        {
                            text: "You saw a giant pickle, got scared and ran away like a cat.",
                            response: "You ran from a pickle? A pickle! No, no, no. You clearly didn't understand the spirit of the party. Come back when you're ready to face your fears. The rock is not for you!",
                            givesRock: false
                        }
                    ]
                },
                {
                    speaker: 'Narrator',
                    text: "The Currywurst demon dissolves into a cloud of paprika-scented smoke! The Rock of Surreal Joy appears! ✨",
                    nextScene: 'heideglühen_entrance'
                }
            ]
        },
        
        heideglühen_entrance: {
            background: 'heideglühen',
            dialogues: [
                {
                    speaker: 'Narrator',
                    text: "Heideglühen. Hidden in Wedding, you discover Berlin's most enchanting secret - where industrial art meets human connection."
                },
                {
                    speaker: 'Mirrorball',
                    text: "Welcome to our spinning sanctuary! Here, house music flows while souls circle together on magical carousels!",
                    character: 'mirrorball'
                },
                {
                    speaker: 'Flavio',
                    text: "These industrial carousels are incredible! I've never seen anything like this - it's like a steampunk dream where the furniture dances with you."
                },
                {
                    speaker: 'Mirrorball',
                    text: "Before you can earn my trust, tell me - you've just discovered our rotating platforms for the first time. What's your instinct?",
                    choices: [
                        {
                            text: "Find a quiet carousel in the corner and enjoy the gentle spinning motion alone",
                            response: "Perfect! Sometimes the carousels offer solitude and reflection. You understand that connection comes in many forms."
                        },
                        {
                            text: "Sit down carefully and let the carousel bring me into conversation with strangers",
                            response: "YES! You understand the sacred ritual! These carousels are matchmakers for lost souls seeking connection."
                        },
                        {
                            text: "Stand and watch first to understand the rhythm before joining",
                            response: "Wise! You respect the delicate dance of social rotation. The carousels reward those who observe before they engage."
                        }
                    ]
                },
                {
                    speaker: 'Mirrorball',
                    text: "Final test, Flavio! What makes Heideglühen truly special?",
                    choices: [
                        {
                            text: "It's intimate and hidden - only locals know this secret, keeping tourists away",
                            response: "YES! Our secrecy protects the magic! True Berlin gems stay hidden from the masses! Take the Rock of Spinning Souls!",
                            givesRock: 'heideglühen'
                        },
                        {
                            text: "It's basically just Berghain with better furniture",
                            response: "Blasphemy! We're the opposite of aggressive techno culture! This is about connection, not confrontation!",
                            givesRock: false
                        },
                        {
                            text: "It's the only place where strangers become friends while gently spinning together",
                            response: "PERFECT! You understand our beautiful magic - human connection in motion! Take the rock!",
                            givesRock: 'heideglühen'
                        }
                    ]
                },
                {
                    speaker: 'Narrator',
                    text: "The Mirrorball begins to rotate faster and faster, reflecting light across the spinning carousels until it explodes into stardust! The Rock of Spinning Souls appears, still gently rotating! ✨",
                    nextScene: 'sisyphos_entrance'
                }
            ]
        },
        
        superboss_redemption: {
            background: 'berlin_skyline',
            dialogues: [
                {
                    speaker: 'Narrator',
                    text: "You're missing some rocks but the sun is just starting to rise, and your feet are screaming. You call a Bolt, and the car that pulls up feels like the final boss of the night."
                },
                {
                    speaker: 'Bolt Driver',
                    text: "Get in. I know that look. You think you've seen everything, but you haven't faced me. I am the final gatekeeper of the Berlin night.",
                    character: 'superboss'
                },
                {
                    speaker: 'Flavio',
                    text: "You're not a final boss. You're just my sweet, sweet ride to a bed and save me from the Berlin walk of shame."
                },
                {
                    speaker: 'Bolt Driver',
                    text: "I've picked up thousands of people just like you. I know the look in their eyes and the song in their hearts. What is the one thing that proves to me you've had a perfect night?",
                    choices: [
                        {
                            text: "You're still in the middle of a profound conversation with your friend that you started on the dance floor.",
                            response: "The night's best moments happen in the car ride home. You've earned your wisdom and your friendships. The remaining sacred rocks are yours!",
                            givesRock: 'redemption'
                        },
                        {
                            text: "You're already planning where to get a kebab or pizza.",
                            response: "HAHA! The mark of a true veteran. The ritual of the night is complete only when the final meal is consumed. The remaining sacred rocks are yours!",
                            givesRock: 'redemption'
                        },
                        {
                            text: "You've completely lost track of time, but you know you're on the way home.",
                            response: "When time ceases to exist, you know you've been in the right place. That's the real magic. The remaining sacred rocks are yours!",
                            givesRock: 'redemption'
                        }
                    ]
                },
                {
                    speaker: 'Bolt Driver',
                    text: "Now you have everything you need! Remember - in Berlin, it's not about being perfect, it's about showing up and trying. Good luck at the finale!",
                    nextScene: 'finale'
                }
            ]
        },
        
        finale: {
            background: 'berlin_skyline',
            dialogues: [
                {
                    speaker: 'Kalea',
                    text: "FLAVIO! My raven hero! You did it! You defeated all of Berlin's nightlife guardians and collected all four rocks!",
                    animation: 'rocks_combine'
                },
                {
                    speaker: 'Flavio',
                    text: "Well, that was intense! All those nights exploring Berlin finally paid off in the most unexpected way!"
                },
                {
                    speaker: 'Kalea',
                    text: "You've grown so much, my love. Life shaped you, but you shaped it right back with your choices and courage."
                },
                {
                    speaker: 'Kalea',
                    text: "HAPPY 35th BIRTHDAY, my darling Flavio! 🎉 You're perfect just the way you are!",
                    animation: 'celebration'
                }
            ]
        }
    },
    
    // Helper functions
    checkAllRocks() {
        return this.rocks.visionaere && this.rocks.katerBlau && 
               this.rocks.heideglühen && this.rocks.sisyphos;
    },
    
    getNextLocation() {
        // This method only executes at decision points (after completing all clubs)
        // All clubs completed - check if we need superboss redemption
        if (!this.checkAllRocks()) {
            return 'superboss_redemption';
        }
        
        return 'finale';
    },
    
    // Mark a club as visited
    markClubVisited(location) {
        console.log('=== CLUB VISIT DEBUG: markClubVisited called with location:', location);
        console.log('Before marking - clubsVisited:', this.clubsVisited);
        
        if (location.includes('visionaere')) {
            console.log('✓ Marking visionaere as visited');
            this.clubsVisited.visionaere = true;
        }
        if (location.includes('kater')) {
            console.log('✓ Marking katerBlau as visited');
            this.clubsVisited.katerBlau = true;
        }
        if (location.includes('heideglühen')) {
            console.log('✓ Marking heideglühen as visited');
            this.clubsVisited.heideglühen = true;
        }
        if (location.includes('sisyphos')) {
            console.log('✓ Marking sisyphos as visited');
            this.clubsVisited.sisyphos = true;
        }
        
        console.log('After marking - clubsVisited:', this.clubsVisited);
        console.log('allClubsVisited() result:', this.allClubsVisited());
    },
    
    // Check if all clubs have been visited
    allClubsVisited() {
        return this.clubsVisited.visionaere && this.clubsVisited.katerBlau && 
               this.clubsVisited.heideglühen && this.clubsVisited.sisyphos;
    }
};

// Monster draw functions - DEPRECATED - Now using PNG sprites with BossLifecycle
// Keeping for reference only - these rectangular placeholders are no longer used
/*
function drawCurrywurstGargoyle(ctx, x, y) {
    // Currywurst-shaped monster
    ctx.fillStyle = '#8B4513'; // Brown sausage
    ctx.fillRect(x, y + 20, 60, 30);
    ctx.fillStyle = '#FFD700'; // Curry sauce
    ctx.fillRect(x + 5, y + 15, 50, 20);
    ctx.fillStyle = '#FF0000'; // Evil eyes
    ctx.fillRect(x + 15, y + 25, 5, 5);
    ctx.fillRect(x + 40, y + 25, 5, 5);
}

function drawDonerTitan(ctx, x, y) {
    // Giant döner kebab monster
    ctx.fillStyle = '#D2691E'; // Bread
    ctx.fillRect(x, y, 50, 70);
    ctx.fillStyle = '#8B4513'; // Meat
    ctx.fillRect(x + 10, y + 10, 30, 40);
    ctx.fillStyle = '#90EE90'; // Lettuce
    ctx.fillRect(x + 5, y + 15, 40, 10);
    ctx.fillStyle = '#FF0000'; // Angry mouth
    ctx.fillRect(x + 15, y + 35, 20, 5);
}

function drawTechnoBasilisk(ctx, x, y) {
    // Snake-like techno creature
    ctx.fillStyle = '#000000'; // Black body
    ctx.fillRect(x, y + 30, 70, 30);
    ctx.fillStyle = '#00FF00'; // Neon green accents
    ctx.fillRect(x + 10, y + 35, 5, 20);
    ctx.fillRect(x + 25, y + 35, 5, 20);
    ctx.fillRect(x + 40, y + 35, 5, 20);
    ctx.fillStyle = '#FF00FF'; // Hypnotic eyes
    ctx.fillRect(x + 50, y + 40, 10, 10);
}

// Old guardian functions for compatibility
function drawDoorkeeper(ctx, x, y) { drawTechnoBasilisk(ctx, x, y); }
function drawArtist(ctx, x, y) { drawCurrywurstGargoyle(ctx, x, y); }
function drawSpirit(ctx, x, y) { drawDonerTitan(ctx, x, y); }
function drawFirekeeper(ctx, x, y) { drawTechnoBasilisk(ctx, x, y); }
*/

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameStory;
}