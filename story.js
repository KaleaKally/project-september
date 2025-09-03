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
                    text: "Flavio! Listen carefully - Berlin's mystical dimension has been corrupted! On your 35th birthday, you're the only one who can save it!",
                    animation: 'mermaid_appear'
                },
                {
                    speaker: 'Kalea',
                    text: "Four Sacred Gems have been stolen by the nightlife guardians. Without them, Berlin's party spirit will disappear forever!",
                },
                {
                    speaker: 'Kalea',
                    text: "Your mission: Retrieve the gems from Berlin's legendary clubs. The fate of the city's soul depends on you!",
                },
                {
                    speaker: 'Flavio',
                    text: "Four boss battles across my favorite clubs? On my birthday? This is the best gift ever! I accept the quest!"
                },
                {
                    speaker: 'Kalea',
                    text: "Be careful, my hero! The food monsters won't go easy on you. I'll guide you when I can. Now go! ❤️",
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
                    text: "Club der Visionaere. The floating clubhouse on the canal. Your journey begins where Berlin's underground was born."
                },
                {
                    speaker: 'Red Ampelmannchen',
                    text: "HALT! FLAVIO! No crossing into the sacred realm of CDV without permission!",
                    character: 'monster'
                },
                {
                    speaker: 'Flavio',
                    text: "You're just a traffic light! I've jaywalked past you a thousand times. You can't stop me!"
                },
                {
                    speaker: 'Red Ampelmannchen',
                    text: "It's Sunday afternoon at CDV. The canal is sparkling. What's the perfect vibe?",
                    choices: [
                        {
                            text: "Mate in hand, sunglasses on, pretending Monday doesn't exist",
                            response: "YES! You understand the sacred Sunday ritual! Time stops at CDV!"
                        },
                        {
                            text: "Dancing barefoot on the wooden deck like nobody's watching",
                            response: "Beautiful! That's the CDV spirit - freedom and joy by the water!"
                        },
                        {
                            text: "Sharing a Späti beer with strangers who become best friends",
                            response: "The magic of CDV! Where friendships are born over cheap beer and good music!"
                        }
                    ]
                },
                {
                    speaker: 'Red Ampelmannchen',
                    text: "Final test! You're leaving CDV just after sunset. What proves you're a true regular?",
                    choices: [
                        {
                            text: "You know which U-Bahn stairs to avoid because they smell like piss",
                            response: "HAHAHA! Only a true veteran knows the Schlesisches Tor survival guide! The rock is yours!",
                            givesRock: 'visionaere'
                        },
                        {
                            text: "The boat party crew waves at you from the canal",
                            response: "You're part of the CDV family! When the boats know you, you've made it! Take the rock!",
                            givesRock: 'visionaere'
                        },
                        {
                            text: "The DJ plays your request without you even asking anymore",
                            response: "Nice try, but any tourist can make requests! You need to prove you're REALLY part of the family!",
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
                    text: "Kater Blau, your Sunday home. The wooden deck creaks with memories of countless sunrises."
                },
                {
                    speaker: 'Currywurst',
                    text: "FLAVIO! We meet again! Every Sunday morning you devour my brothers at Curry36!",
                    character: 'monster'
                },
                {
                    speaker: 'Flavio',
                    text: "Currywurst demon! You've haunted my 4 AM cravings for too long. This ends now!"
                },
                {
                    speaker: 'Currywurst',
                    text: "Answer me this, party warrior: It's hour 30 of dancing. What keeps a true Berliner going?",
                    choices: [
                        {
                            text: "Bass is my spine now",
                            response: "Becoming one with the subwoofer? Respect. Your chiropractor won't, but I do!"
                        },
                        {
                            text: "Friends won't let me leave",
                            response: "Ah yes, the 'just one more song' cult. Stockholm syndrome never sounded so good!"
                        },
                        {
                            text: "Kenshiro is by my side",
                            response: "Ah yes, legendary energy! You could dance for another 30 hours with that power!"
                        }
                    ]
                },
                {
                    speaker: 'Currywurst',
                    text: "Final test at Kater Blau! The DJ is reading the crowd. What journey should the music take?",
                    choices: [
                        {
                            text: "Deeper and darker, into the void",
                            response: "Too dark, too soon! The crowd needs to breathe before diving that deep!",
                            givesRock: false
                        },
                        {
                            text: "Higher and lighter, toward transcendence",
                            response: "Lift the spirits! The sunrise deserves celebration!",
                            givesRock: 'katerBlau'
                        },
                        {
                            text: "Waves of emotion, peaks and valleys",
                            response: "The natural flow! Like the river itself!",
                            givesRock: 'katerBlau'
                        }
                    ]
                },
                {
                    speaker: 'Narrator',
                    text: "The Currywurst explodes into curry-scented smoke! The Rock of Sunrise Magic appears! ✨",
                    nextScene: 'heideglühen_entrance'
                }
            ]
        },
        
        heideglühen_entrance: {
            background: 'heideglühen',
            dialogues: [
                {
                    speaker: 'Narrator',
                    text: "Hidden in Wedding behind wooden fences, you find Heideglühen - Berlin's cozy forest rave cabin..."
                },
                {
                    speaker: 'Mirrorball',
                    text: "Welcome to our family's house party! Under the glass roof, we dance from Saturday afternoon BBQ until Sunday evening!",
                    character: 'mirrorball'
                },
                {
                    speaker: 'Flavio',
                    text: "This wooden cabin feels so different from the concrete techno temples. It's like a secret forest hideaway!"
                },
                {
                    speaker: 'Mirrorball',
                    text: "You've found our secret garden party! But first, tell me - it's Saturday afternoon BBQ time. What's your move?",
                    choices: [
                        {
                            text: "Grab a beer and help with the grill like family",
                            response: "Yes! That's the Heideglühen spirit - we're all family here under the trees!"
                        },
                        {
                            text: "Find the perfect hammock spot and vibe to the ambient sounds",
                            response: "You understand our forest magic! Sometimes the best dancing happens in stillness."
                        },
                        {
                            text: "Start a spontaneous dance circle in the garden",
                            response: "Beautiful! You bring the party energy that makes our garden come alive!"
                        }
                    ]
                },
                {
                    speaker: 'Mirrorball',
                    text: "Now for the real test - what makes Heideglühen different from Berlin's other clubs?",
                    choices: [
                        {
                            text: "It's just another tourist trap after Berghain",
                            response: "WRONG! Tourists can't even find us - we keep our location secret from those rejected at Berghain!",
                            givesRock: false
                        },
                        {
                            text: "House music, BBQ in the garden, and family vibes that last all weekend",
                            response: "YES! You understand our cozy forest magic! Take the Rock of Sacred Fire!",
                            givesRock: 'heideglühen'
                        },
                        {
                            text: "Expensive bottle service and VIP tables",
                            response: "Never! We're about community, not commerce. This is a family gathering, not a business!",
                            givesRock: false
                        }
                    ]
                },
                {
                    speaker: 'Narrator',
                    text: "The Mirrorball shatters into a thousand sparkling fragments! The third rock, the Rock of Sacred Fire, appears! ✨",
                    nextScene: 'sisyphos_entrance'
                }
            ]
        },
        
        superboss_redemption: {
            background: 'berlin_skyline',
            dialogues: [
                {
                    speaker: 'Narrator',
                    text: "As you stumble out of the clubs, a white Prius pulls up with Bolt on the side. The window rolls down..."
                },
                {
                    speaker: 'Bolt Driver',
                    text: "Get in! I know where you're going - but first, we need to talk about your Berlin education!",
                    character: 'superboss'
                },
                {
                    speaker: 'Flavio',
                    text: "A Bolt driver? Are you going to judge my nightlife choices too?"
                },
                {
                    speaker: 'Bolt Driver', 
                    text: "Listen kid, I've driven every party tourist, club legend, and burnt-out raver in this city. I can see you're missing some rocks from your Berlin education. Let me help you complete the collection!",
                    choices: [
                        {
                            text: "I'm still learning Berlin's ways",
                            response: "Humility! That's rare in tourists. Here, take what you need - persistence counts for something!",
                            givesRock: 'redemption'
                        },
                        {
                            text: "Every wrong answer taught me something",
                            response: "Ah, a philosopher! Mistakes are Berlin's greatest teachers. Here are your missing rocks!",
                            givesRock: 'redemption'
                        },
                        {
                            text: "Berlin is harder than I expected",
                            response: "Finally! Someone who admits it! Honesty deserves rewards. Take these rocks, you've earned them!",
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
                    text: "FLAVIO! My hero! You did it! You defeated all of Berlin's nightlife guardians and collected all four rocks!",
                    animation: 'rocks_combine'
                },
                {
                    speaker: 'Flavio',
                    text: "I did it for us, amore! And maybe also because those monsters know all my drunk food orders..."
                },
                {
                    speaker: 'Kalea',
                    text: "Let me see how Berlin has shaped you through your choices... *the gems glow, revealing your party spirit*"
                },
                {
                    speaker: 'Kalea',
                    text: "My love, you've conquered Berlin's nightlife! Now make your birthday wish - what does your heart desire?",
                    choices: [
                        {
                            text: "A functioning sleep schedule (BORING but practical)",
                            response: "The gems laugh at you. Sleep schedule? In BERLIN? Happy birthday anyway, you optimistic fool! 🎂"
                        },
                        {
                            text: "The ability to find Berghain's actual entrance",
                            response: "The gems reveal the secret! Plot twist: There IS no entrance, it's all a collective hallucination! Mind = blown!"
                        },
                        {
                            text: "To remember what happened last weekend",
                            response: "The gems restore your memory! Oh no... OH NO! Some things were better forgotten! Quick, take it back!"
                        }
                    ]
                },
                {
                    speaker: 'Kalea',
                    text: "HAPPY 35th BIRTHDAY, my darling Flavio! 🎉 You're perfect just the way you are!",
                    animation: 'celebration'
                },
                {
                    speaker: 'Kalea',
                    text: "Now come back to reality - I made your favorite breakfast and have SO many birthday surprises planned! Ti amo! ♥"
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