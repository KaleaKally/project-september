// Game Boy Color Style Adventure Game
document.addEventListener('DOMContentLoaded', () => {
    const titleScreen = document.getElementById('titleScreen');
    const gameScreen = document.getElementById('gameScreen');
    const startBtn = document.getElementById('startBtn');
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const speakerName = document.getElementById('speakerName');
    const dialogueText = document.getElementById('dialogueText');
    
    // Enable pixel-perfect rendering
    ctx.imageSmoothingEnabled = false;
    
    // Load character sprites
    const heroStanding = new Image();
    heroStanding.src = "public/image/hero.png";
    
    const heroWalking = new Image();
    heroWalking.src = "public/image/hero-walking.png";
    
    const heroFighting = new Image();
    heroFighting.src = "public/image/hero-fighting.png";
    
    const mermaid = new Image();
    mermaid.src = "public/image/mermaid.png";
    
    const ravenStatic = new Image();
    ravenStatic.src = "public/image/raven.png";
    
    const ravenFlying = new Image();
    ravenFlying.src = "public/image/raven-flying.png";
    
    const currywurstBoss = new Image();
    currywurstBoss.src = "public/image/currywurst.png";
    
    const currywurstFight = new Image();
    currywurstFight.src = "public/image/currywurst-fight1.png";
    
    const currywurstDefeated = new Image();
    currywurstDefeated.src = "public/image/currywurst-defeated.png";
    
    // Ampelmannchen sprites for CDV boss
    const ampelmannchen1 = new Image();
    ampelmannchen1.src = "public/image/ampelmannchen-red-1.png";
    
    const ampelmannchen2 = new Image();
    ampelmannchen2.src = "public/image/ampelmannchen-red-2.png";
    
    const ampelmannchen3 = new Image();
    ampelmannchen3.src = "public/image/ampelmannchen-red-3.png";
    
    const ampelmannDefeated1 = new Image();
    ampelmannDefeated1.src = "public/image/ampelmannchen-defeated.png";
    
    const ampelmannDefeated2 = new Image();
    ampelmannDefeated2.src = "public/image/ampelmannchen-defeated2.png";
    
    // Bouncer sprites for Sisyphos boss
    const bouncer = new Image();
    bouncer.src = "public/image/bouncer.png";
    
    const bouncer2 = new Image();
    bouncer2.src = "public/image/bouncer-2.png";
    
    const bouncer3 = new Image();
    bouncer3.src = "public/image/bouncer-3.png";
    
    const bouncerDefeated = new Image();
    bouncerDefeated.src = "public/image/bouncer-defeated.png";
    
    // Mirrorball sprites for Heideglühen boss
    const mirrorball = new Image();
    mirrorball.src = "public/image/mirrorball.png";
    
    const mirrorballFighting = new Image();
    mirrorballFighting.src = "public/image/mirrorball-fighting.png";
    
    // Superboss sprites for redemption scene
    const prius = new Image();
    prius.src = "public/image/prius.png";
    
    const priusDriver = new Image();
    priusDriver.src = "public/image/prius-driver.png";
    
    const priusExit = new Image();
    priusExit.src = "public/image/prius-exit.png";
    
    const berlinBackground = new Image();
    berlinBackground.src = "public/image/berlin-background.png";
    
    const bonusBackground = new Image();
    bonusBackground.src = "public/image/bonus-background.png";
    
    const cdvBackground = new Image();
    cdvBackground.src = "public/image/cdv-background.png";
    
    const cdvBackground2 = new Image();
    cdvBackground2.src = "public/image/cdv-background2.png";
    
    const cloudCxl = new Image();
    cloudCxl.src = "public/image/cloud-cxl.png";
    
    const cloudCxr = new Image();
    cloudCxr.src = "public/image/cloud-cxr.png";
    
    const katerBackground = new Image();
    katerBackground.src = "public/image/kater-background.png";
    
    const heidegluhenBackground = new Image();
    heidegluhenBackground.src = "public/image/heidegluhen-background.png";
    
    // Sisyphos background progression - load all 7 images
    const sisyphosBackgrounds = [];
    for (let i = 1; i <= 7; i++) {
        const bg = new Image();
        bg.src = `public/image/sisyphos-background${i}.png`;
        sisyphosBackgrounds.push(bg);
    }
    
    // Background music setup
    const backgroundMusic = new Audio('public/audio/Pixelated Love.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.6; // 60% volume
    backgroundMusic.playbackRate = 0.7; // Play at 70% speed (slower)
    let musicPlaying = false;

    // Track loading
    let imagesLoaded = 0;
    const totalImages = 38;  // Actual count: 31 individual images + 7 sisyphos backgrounds
    
    function checkAllLoaded() {
        imagesLoaded++;
        console.log(`Loaded ${imagesLoaded}/${totalImages} images`);
        if (imagesLoaded === totalImages) {
            console.log("All images loaded - game ready");
            // Initialize CDV backgrounds array
            cdvBackgrounds.push(cdvBackground, cdvBackground2);
        }
    }
    
    heroStanding.onload = checkAllLoaded;
    heroWalking.onload = checkAllLoaded;
    heroFighting.onload = checkAllLoaded;
    mermaid.onload = checkAllLoaded;
    ravenStatic.onload = checkAllLoaded;
    ravenFlying.onload = checkAllLoaded;
    currywurstBoss.onload = checkAllLoaded;
    currywurstFight.onload = checkAllLoaded;
    currywurstDefeated.onload = checkAllLoaded;
    ampelmannchen1.onload = checkAllLoaded;
    ampelmannchen2.onload = checkAllLoaded;
    ampelmannchen3.onload = checkAllLoaded;
    ampelmannDefeated1.onload = checkAllLoaded;
    ampelmannDefeated2.onload = checkAllLoaded;
    bouncer.onload = checkAllLoaded;
    bouncer2.onload = checkAllLoaded;
    bouncer3.onload = checkAllLoaded;
    bouncerDefeated.onload = checkAllLoaded;
    mirrorball.onload = checkAllLoaded;
    mirrorballFighting.onload = checkAllLoaded;
    prius.onload = checkAllLoaded;
    priusDriver.onload = checkAllLoaded;
    priusExit.onload = checkAllLoaded;
    berlinBackground.onload = checkAllLoaded;
    bonusBackground.onload = checkAllLoaded;
    // Sisyphos backgrounds onload handlers
    sisyphosBackgrounds.forEach(bg => bg.onload = checkAllLoaded);
    cdvBackground.onload = checkAllLoaded;
    cdvBackground2.onload = checkAllLoaded;
    cloudCxl.onload = checkAllLoaded;
    cloudCxr.onload = checkAllLoaded;
    katerBackground.onload = checkAllLoaded;
    heidegluhenBackground.onload = checkAllLoaded;
    
    // Character positions and animation
    let heroX = 40, heroY = 160;  // Start from left side, adjusted for bigger sprite
    let mermaidX = 280, mermaidY = 160;  // Adjusted for bigger sprite
    
    let heroFrame = 0;
    let mermaidFrame = 0;
    let frameCount = 0;
    let heroMoving = false;
    let heroFightingState = false;  // Track if hero is in fighting stance
    let heroFightingTimer = 0;  // Timer for fighting animation
    let lastHeroX = 40, lastHeroY = 176;
    
    // Raven variables - simple and clean
    let ravenX = 0;
    let ravenY = 0;
    let ravenDirection = 1; // 1 = right, -1 = left
    let ravenFlightTime = 0; // For natural flight pattern
    let ravenInitialized = false; // Track if raven has been positioned
    
    // Confetti animation variables
    let confettiParticles = [];
    let confettiActive = false;
    
    // Boss variables (legacy - will be replaced by BossLifecycle)
    let bossX = 0;
    let bossY = 0;
    let bossAnimTime = 0;
    let bossActive = false;
    let bossEntrance = 0;  // For entrance animation
    let bossState = 'idle';  // 'idle', 'fighting', 'defeated'
    let bossFrameToggle = 0;  // For alternating between sprites
    
    // Boss Lifecycle State Machine - Industry standard approach
    const BossLifecycle = {
        state: 'INACTIVE', // INACTIVE, WAITING, ENTERING, IDLE, FIGHTING, DEFEATED, SPINNING, EXITING, GONE
        timer: 0,
        position: { x: 400, y: 176 },
        animTime: 0,
        frameToggle: 0,
        spinRotation: 0,
        entranceProgress: 0,
        
        reset() {
            this.state = 'INACTIVE';
            this.timer = 0;
            // Set Y position based on location
            const location = gameStory.currentLocation;
            let yPos;
            if (location && location.includes('kater')) {
                yPos = 200; // Kater Blau lower ground
            } else if (location && location.includes('sisyphos')) {
                yPos = 176; // Sisyphos same level as hero
            } else {
                yPos = 176; // Standard level
            }
            this.position = { x: 400, y: yPos };
            this.animTime = 0;
            this.frameToggle = 0;
            this.spinRotation = 0;
            this.entranceProgress = 0;
        },
        
        spawn() {
            if (this.state === 'INACTIVE') {
                const location = gameStory.currentLocation;
                
                // Special case: superboss goes directly to ENTERING (no waiting for transitions)
                if (location === 'superboss_redemption') {
                    this.state = 'ENTERING';
                } else {
                    this.state = 'WAITING';
                }
                
                this.timer = 0;
                // Set Y position based on location
                let yPos;
                if (location && location.includes('kater')) {
                    yPos = 200; // Kater Blau lower ground
                } else if (location && location.includes('sisyphos')) {
                    yPos = 176; // Sisyphos same level as hero
                } else {
                    yPos = 176; // Standard level
                }
                this.position = { x: 400, y: yPos };
            }
        },
        
        startFighting() {
            if (this.state === 'IDLE') {
                this.state = 'FIGHTING';
            }
        },
        
        defeat() {
            if (this.state === 'FIGHTING' || this.state === 'IDLE') {
                const location = gameStory.currentLocation;
                // CDV boss spins before exiting
                if (location && location.includes('visionaere')) {
                    this.state = 'SPINNING';
                    this.spinRotation = 0;
                } else {
                    this.state = 'EXITING';
                }
                this.timer = 0;
            }
        },
        
        update() {
            this.timer++;
            this.animTime += 0.02;
            
            switch(this.state) {
                case 'WAITING':
                    // Wait for transition to completely finish (gem stops glowing)
                    if (!transitionActive) {
                        this.state = 'ENTERING';
                        this.timer = 0;
                    }
                    break;
                    
                case 'ENTERING': {
                    const location = gameStory.currentLocation;
                    const isSuperboss = location === 'superboss_redemption';
                    
                    if (isSuperboss) {
                        // Prius drives in from top-right like a car arriving from the street
                        const startX = 450;
                        const startY = 100;
                        const targetX = 280;
                        const targetY = 190;
                        
                        // Car-like curved trajectory from top-right to center
                        const progress = this.entranceProgress;
                        this.position.x = startX - (progress * (startX - targetX));
                        this.position.y = startY + (progress * (targetY - startY)) + Math.sin(progress * Math.PI) * 20; // Slight arc
                        
                        this.entranceProgress = Math.min(1, this.entranceProgress + 0.015); // Slightly slower for car
                        
                        if (this.entranceProgress >= 1) {
                            this.position.x = targetX;
                            this.position.y = targetY;
                            this.state = 'IDLE';
                            this.timer = 0;
                        }
                    } else {
                        // Standard boss entrance (walking from right)
                        this.position.x -= 2;
                        this.frameToggle += 0.08; // Walking animation
                        this.entranceProgress = Math.min(1, this.entranceProgress + 0.02);
                        
                        if (this.position.x <= 280) {
                            this.position.x = 280;
                            this.state = 'IDLE';
                            this.timer = 0;
                            this.entranceProgress = 1;
                        }
                    }
                    break;
                }
                    
                case 'IDLE': {
                    // Boss is idle, waiting for dialogue
                    // Special handling for superboss: trigger driver exit after brief pause
                    const location = gameStory.currentLocation;
                    if (location === 'superboss_redemption' && this.timer > 60) { // 1 second pause
                        this.state = 'DRIVER_EXITING';
                        this.timer = 0;
                    }
                    break;
                }
                    
                case 'DRIVER_EXITING':
                    // Superboss only: Driver getting out of car effect
                    if (this.timer > 30) { // 0.5 second effect
                        this.state = 'FIGHTING'; // Ready for dialogue
                        this.timer = 0;
                    }
                    break;
                    
                case 'FIGHTING':
                    // Boss is in combat/dialogue state
                    break;
                    
                case 'SPINNING':
                    // CDV boss special spinning animation
                    this.spinRotation += 0.15;
                    
                    if (this.spinRotation >= Math.PI * 4) { // 2 full rotations
                        this.state = 'EXITING';
                        this.timer = 0;
                        this.spinRotation = 0;
                    }
                    break;
                    
                case 'EXITING':
                    // Boss walks away to the right
                    this.position.x += 3;
                    this.frameToggle += 0.1; // Walking animation
                    
                    if (this.position.x > canvas.width + 100) {
                        this.state = 'GONE';
                        this.timer = 0;
                    }
                    break;
                    
                case 'GONE':
                    // Boss has completely left, safe for scene transition
                    break;
            }
        },
        
        isActive() {
            return this.state !== 'INACTIVE' && this.state !== 'GONE';
        },
        
        canTransitionScene() {
            return this.state === 'GONE' || this.state === 'INACTIVE';
        },
        
        isDefeated() {
            return this.state === 'DEFEATED' || this.state === 'SPINNING' || 
                   this.state === 'EXITING' || this.state === 'GONE';
        },
        
        getSprite() {
            const location = gameStory.currentLocation;
            const isAtCDV = location && location.includes('visionaere');
            const isAtKaterBlau = location && location.includes('kater');
            const isAtSisyphos = location && location.includes('sisyphos');
            const isAtHeide = location && location.includes('heide');
            const isAtSuperboss = location === 'superboss_redemption';
            
            let sprite = null;
            
            if (isAtCDV) {
                // Ampelmannchen sprites
                if (this.state === 'SPINNING') {
                    // During spin, transition from red to green
                    sprite = this.spinRotation > Math.PI * 2 ? ampelmannDefeated1 : ampelmannchen1;
                } else if (this.state === 'EXITING') {
                    // Walking away with green defeated sprites
                    sprite = Math.floor(this.frameToggle) % 2 === 0 ? ampelmannDefeated1 : ampelmannDefeated2;
                } else if (this.state === 'FIGHTING') {
                    sprite = ampelmannchen2; // Fighting pose
                } else if (this.state === 'ENTERING') {
                    // Walking in animation
                    sprite = Math.floor(this.frameToggle) % 2 === 0 ? ampelmannchen1 : ampelmannchen2;
                } else {
                    sprite = ampelmannchen1; // Default idle
                }
            } else if (isAtKaterBlau) {
                // Currywurst sprites
                if (this.state === 'EXITING') {
                    sprite = Math.floor(this.frameToggle) % 2 === 0 ? currywurstBoss : currywurstDefeated;
                } else if (this.state === 'FIGHTING') {
                    sprite = currywurstFight;
                } else if (this.state === 'ENTERING') {
                    sprite = Math.floor(this.frameToggle) % 2 === 0 ? currywurstBoss : currywurstFight;
                } else {
                    sprite = currywurstBoss;
                }
            } else if (isAtSisyphos) {
                // Bouncer sprites for Sisyphos
                if (this.state === 'EXITING') {
                    sprite = bouncerDefeated;
                } else if (this.state === 'FIGHTING') {
                    sprite = bouncer3; // Aggressive bouncer pose
                } else if (this.state === 'ENTERING') {
                    // Walking in animation with alternating sprites
                    sprite = Math.floor(this.frameToggle) % 2 === 0 ? bouncer : bouncer2;
                } else {
                    sprite = bouncer; // Default idle bouncer
                }
            } else if (isAtHeide) {
                // Mirrorball sprites for Heideglühen
                if (this.state === 'EXITING') {
                    sprite = mirrorball;  // Mirrorball doesn't have defeated sprite, just spins away
                } else if (this.state === 'FIGHTING') {
                    sprite = mirrorballFighting;
                } else if (this.state === 'ENTERING') {
                    // Mirrorball doesn't walk, it descends/floats
                    sprite = mirrorball;
                } else {
                    sprite = mirrorball;
                }
            } else if (isAtSuperboss) {
                // Superboss sprite transition: Prius → Prius with Driver → Prius Exit
                if (this.state === 'ENTERING' || this.state === 'IDLE' || this.state === 'DRIVER_EXITING') {
                    sprite = prius; // Empty car during entrance, parking, and driver exit
                } else if (this.state === 'EXITING' || this.state === 'GONE') {
                    sprite = priusExit; // Special exit sprite when leaving the scene
                } else {
                    sprite = priusDriver; // Car with driver visible during dialogue
                }
            } else {
                // Default fallback
                sprite = bouncer;
            }
            
            return sprite;
        }
    };
    
    // Hero Lifecycle - similar to BossLifecycle for proper entrance timing
    const HeroLifecycle = {
        state: 'INACTIVE', // INACTIVE, WAITING, ENTERING, ACTIVE
        timer: 0,
        position: { x: 40, y: 160 },
        targetX: 140,
        entranceProgress: 0,
        
        reset(location) {
            this.state = 'INACTIVE';
            this.timer = 0;
            this.entranceProgress = 0;
            
            // Set starting position based on location
            if (location && location.includes('kater')) {
                this.position = { x: 40, y: 184 }; // Lower ground for Kater Blau
            } else if (location && location.includes('sisyphos')) {
                this.position = { x: 40, y: 176 }; // Sisyphos ground level - same as bouncer (176 - 16 offset = 160 final)
            } else {
                this.position = { x: 40, y: 160 }; // Standard ground level
            }
            
            this.targetX = 140; // Standard walking target
        },
        
        startEntrance() {
            if (this.state === 'INACTIVE') {
                this.state = 'WAITING';
                this.timer = 0;
            }
        },
        
        update() {
            this.timer++;
            
            switch(this.state) {
                case 'WAITING':
                    // Wait for transition to completely finish (gem stops glowing)
                    if (!transitionActive) {
                        this.state = 'ENTERING';
                        this.timer = 0;
                    }
                    break;
                    
                case 'ENTERING':
                    // Walk from left to target position
                    if (this.position.x < this.targetX) {
                        this.position.x += 2; // Walk speed
                        this.entranceProgress = Math.min(1, (this.position.x - 40) / (this.targetX - 40));
                    } else {
                        this.state = 'ACTIVE';
                        this.entranceProgress = 1;
                    }
                    break;
                    
                case 'ACTIVE':
                    // Hero is in position, normal behavior
                    break;
            }
        },
        
        isMoving() {
            return this.state === 'ENTERING';
        },
        
        isActive() {
            return this.state !== 'INACTIVE';
        },
        
        getPosition() {
            return { x: this.position.x, y: this.position.y };
        }
    };
    
    // Background animation variables for CDV
    let cdvBackgroundIndex = 0;
    let cdvBackgroundTimer = 0;
    const cdvBackgrounds = [];
    
    // Sisyphos background progression variables
    let sisyphosBackgroundIndex = 0;
    let sisyphosBackgroundTimer = 0;
    
    // Transition animation variables
    let transitionActive = false;
    let transitionPhase = 0; // 0: spinning, 1: walking away, 2: rock appears, 3: glow transition, 4: scene transition
    let transitionTimer = 0;
    let bossWalkAwayX = 0;
    let rockOpacity = 0;
    let glowRadius = 0;
    let spinRotation = 0;
    let sceneTransitionProgress = 0;
    let rippleRadius = 0;
    
    // GBC Color Palette (15-bit RGB converted to hex)
    const palette = {
        // Blues/Purples (water)
        oceanDark: '#0F3857',
        oceanMid: '#2874A6',
        oceanLight: '#5DADE2',
        bubble: '#AED6F1',
        
        // Character colors
        skin: '#FDBCB4',
        skinShadow: '#E89F71',
        skinDark: '#CD9575',
        brownHair: '#654321',
        brownHairDark: '#3D2314',
        blueHair: '#4A90E2',
        blueHairDark: '#2E5C8A',
        
        // Eyes
        brownEyes: '#8B4513',
        eyeWhite: '#FFFFFF',
        
        // Clothing
        heroRed: '#DC143C',
        heroDarkRed: '#8B0000',
        heroBlue: '#1E3A8A',
        heroGold: '#FFD700',
        mermaidPurple: '#9B59B6',
        mermaidTeal: '#4ECDC4',
        mermaidTealDark: '#2B7A78',
        
        // Raven
        ravenBlack: '#1A1A1A',
        ravenGray: '#4A4A4A',
        ravenBeak: '#FFA500',
        
        // Environment
        sand: '#F4E4C1',
        seaweed: '#2B7A0B',
        rock: '#5C5C5C'
    };
    
    // Pixel scaling (3x for visibility)
    const PIXEL_SCALE = 3;
    const SPRITE_SIZE = 32; // Base sprite size in "GBC pixels"
    
    // Draw a scaled pixel
    function drawPixel(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * PIXEL_SCALE, y * PIXEL_SCALE, PIXEL_SCALE, PIXEL_SCALE);
    }
    
    // Draw hero sprite with walking and fighting animations
    function drawHero(x, y) {
        // Choose sprite based on hero state
        let heroImage;
        if (heroFightingState) {
            // Use fighting sprite when in combat
            heroImage = heroFighting;
        } else if (heroMoving) {
            // Switch between sprites every 15 frames for walking animation
            const walkFrame = Math.floor(frameCount / 15) % 2;
            heroImage = walkFrame === 0 ? heroStanding : heroWalking;
        } else {
            heroImage = heroStanding;
        }
        
        if (heroImage.complete && heroImage.naturalHeight !== 0) {
            // Draw stronger glow outline
            ctx.save();
            ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            // Scale down the large image to fit game size (increased size)
            // Make fighting hero bigger to compensate for sword taking up extra space in PNG
            const heroWidth = heroFightingState ? 75 : 60;  // Much bigger to compensate for sword space
            const heroHeight = heroFightingState ? 95 : 80;
            const heroY = heroFightingState ? y - 10 : y;  // Move fighting hero up to prevent going too low
            ctx.drawImage(
                heroImage,
                0, 0, heroImage.naturalWidth, heroImage.naturalHeight,   // source: entire image
                x, heroY, heroWidth, heroHeight                          // destination: bigger sprite
            );
            ctx.restore();
        }
    }
    
    // Draw mermaid sprite from PNG (single image, scaled down)
    function drawMermaid(x, y) {
        if (mermaid.complete && mermaid.naturalHeight !== 0) {
            // Draw stronger glow outline
            ctx.save();
            ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            // Scale down the large image to fit game size (increased size)
            ctx.drawImage(
                mermaid,
                0, 0, mermaid.naturalWidth, mermaid.naturalHeight,   // source: entire image
                x, y, 60, 80                                          // destination: bigger sprite
            );
            ctx.restore();
        }
    }
    
    // Draw raven sprite with horizontal flipping
    function drawRaven() {
        // Choose sprite based on wing flap animation
        const flapFrame = Math.floor(ravenFlightTime * 10) % 20;
        const useFlying = flapFrame < 10;
        const ravenImage = useFlying ? ravenFlying : ravenStatic;
        
        // Only draw if image is loaded
        if (!ravenImage.complete || ravenImage.naturalHeight === 0) return;
        
        // Save context for flipping
        ctx.save();
        
        // Flip horizontally if flying left
        if (ravenDirection === -1) {
            ctx.scale(-1, 1);
            ctx.drawImage(
                ravenImage,
                0, 0, ravenImage.naturalWidth, ravenImage.naturalHeight,
                -ravenX - 30, ravenY, 30, 30  // Flip and offset
            );
        } else {
            ctx.drawImage(
                ravenImage,
                0, 0, ravenImage.naturalWidth, ravenImage.naturalHeight,
                ravenX, ravenY, 30, 30
            );
        }
        
        ctx.restore();
    }
    
    // Update raven position with natural flight pattern
    function updateRaven() {
        if (!ravenInitialized) {
            // Initialize raven position relative to hero
            ravenX = heroX - 40;
            ravenY = heroY - 45;  // Higher above hero now that he's lower
            ravenInitialized = true;
        }
        
        // Update flight time for animations
        ravenFlightTime += 0.02;
        
        // Horizontal movement
        const speed = 0.4;
        ravenX += speed * ravenDirection;
        
        // Define flight boundaries (relative to hero)
        const leftBound = heroX - 40;
        const rightBound = heroX + 50;
        
        // Turn around at boundaries
        if (ravenX <= leftBound && ravenDirection === -1) {
            ravenDirection = 1;
            ravenX = leftBound;
        } else if (ravenX >= rightBound && ravenDirection === 1) {
            ravenDirection = -1;
            ravenX = rightBound;
        }
        
        // Natural vertical bobbing
        const baseY = heroY - 45;  // Higher above hero at ground level
        const bob1 = Math.sin(ravenFlightTime * 2) * 4;  // Main bobbing
        const bob2 = Math.sin(ravenFlightTime * 5) * 2;  // Secondary motion
        ravenY = baseY + bob1 + bob2;
        
        // Add slight arc to flight path
        const progress = (ravenX - leftBound) / (rightBound - leftBound);
        const arc = Math.sin(progress * Math.PI) * 3;
        ravenY -= arc;
    }
    
    // Draw boss using the new BossLifecycle state machine
    function drawBoss() {
        if (!BossLifecycle.isActive()) return;
        
        const location = gameStory.currentLocation;
        const isAtCDV = location && location.includes('visionaere');
        const isAtKaterBlau = location && location.includes('kater');
        const isAtSisyphos = location && location.includes('sisyphos');
        const isAtHeide = location && location.includes('heide');
        const isAtSuperboss = location === 'superboss_redemption';
        
        // Get sprite from BossLifecycle
        const bossImage = BossLifecycle.getSprite();
        if (!bossImage || !bossImage.complete || bossImage.naturalHeight === 0) return;
        
        // Get position from BossLifecycle
        const bossX = BossLifecycle.position.x;
        const bossY = BossLifecycle.position.y;
        
        // No floating animation - keep boss grounded at same level as hero
        const floatY = 0;
        
        // Entrance animation - boss rises from ground
        // Adjust Y position for bigger sprites (80px) to keep feet at ground level
        // At Kater Blau, ground is already lower (200 instead of 176)
        // Special handling for superboss (Prius) to be at hero level
        let actualY;
        if (isAtSuperboss) {
            actualY = bossY - 40; // Prius at hero level (hero is at 160, prius should be around 136)
        } else if (isAtSisyphos) {
            actualY = bossY - 6; // Lower position for Sisyphos bouncer
        } else {
            actualY = isAtKaterBlau ? bossY - 8 : bossY - 16;  // Simple working logic for other bosses
        }
        if (BossLifecycle.state === 'ENTERING' && BossLifecycle.entranceProgress < 1) {
            actualY = actualY + (1 - BossLifecycle.entranceProgress) * 50;
            
            // Add smoke/dust effect during entrance
            if (BossLifecycle.entranceProgress < 0.5) {
                ctx.fillStyle = `rgba(139, 69, 19, ${0.3 * (1 - BossLifecycle.entranceProgress * 2)})`;
                ctx.fillRect(bossX - 10, bossY + 50, 84, 20);
            }
        }
        
        // Keep boss at same ground level even when defeated
        
        // Draw boss with stronger glow effect
        ctx.save();
        
        // Special mirrorball sparkle effects for Heideglühen
        if (isAtHeide) {
            // Draw rotating light beams emanating from mirrorball
            ctx.save();
            const centerX = bossX + 40;
            const centerY = actualY + 40;
            
            // Create multiple light beams
            for (let i = 0; i < 8; i++) {
                const angle = (BossLifecycle.animTime * 2 + i * Math.PI / 4);
                const beamLength = 150;
                
                // Create gradient for light beam
                const gradient = ctx.createLinearGradient(
                    centerX, centerY,
                    centerX + Math.cos(angle) * beamLength,
                    centerY + Math.sin(angle) * beamLength
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                gradient.addColorStop(0.5, 'rgba(255, 255, 100, 0.1)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                
                // Draw light beam
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 20;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(
                    centerX + Math.cos(angle) * beamLength,
                    centerY + Math.sin(angle) * beamLength
                );
                ctx.stroke();
            }
            ctx.restore();
            
            // Add sparkles around the mirrorball
            for (let i = 0; i < 12; i++) {
                const sparkleAngle = BossLifecycle.animTime * 3 + i * Math.PI / 6;
                const sparkleRadius = 50 + Math.sin(BossLifecycle.animTime * 4 + i) * 10;
                const sparkleX = bossX + 40 + Math.cos(sparkleAngle) * sparkleRadius;
                const sparkleY = actualY + 40 + Math.sin(sparkleAngle) * sparkleRadius;
                const sparkleSize = 2 + Math.sin(BossLifecycle.animTime * 5 + i * 2) * 2;
                
                ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.sin(BossLifecycle.animTime * 6 + i * 3) * 0.5})`;
                ctx.fillRect(sparkleX - sparkleSize/2, sparkleY - sparkleSize/2, sparkleSize, sparkleSize);
            }
        }
        
        // Apply spinning effect for CDV boss
        const bossSize = isAtSisyphos ? 100 : 80;  // Bouncer is bigger (100x100), others 80x80
        const halfSize = bossSize / 2;
        
        if (BossLifecycle.state === 'SPINNING' && isAtCDV) {
            // Translate to center of sprite for rotation
            ctx.translate(bossX + halfSize, actualY + halfSize);
            ctx.rotate(BossLifecycle.spinRotation);
            ctx.translate(-halfSize, -halfSize);
        } else if (isAtHeide) {
            // Mirrorball has slight oscillating movement, no full rotation
            const oscillationStrength = BossLifecycle.state === 'FIGHTING' ? 0.1 : 0.15;  // Slight movement
            const oscillation = Math.sin(BossLifecycle.animTime * 0.5) * oscillationStrength; // Gentle back-and-forth
            ctx.translate(bossX + halfSize, actualY + halfSize);
            ctx.rotate(oscillation);  // Oscillates between -0.15 and +0.15 radians (~8 degrees)
            ctx.translate(-halfSize, -halfSize);
        } else {
            ctx.translate(bossX, actualY);
        }
        
        if (BossLifecycle.state === 'GONE') {
            ctx.globalAlpha = 0; // Fully transparent when gone
        } else if (BossLifecycle.isDefeated()) {
            ctx.globalAlpha = 0.7; // Slightly transparent when defeated
        }
        
        // Red traffic light glow for Ampelmannchen at CDV, mystical glow for Currywurst at Kater Blau
        if (isAtCDV) {
            let glowColor;
            if (BossLifecycle.state === 'SPINNING') {
                // Transitioning from red to green during spin
                const greenAmount = Math.min(BossLifecycle.spinRotation / (Math.PI * 2), 1);
                glowColor = `rgba(${Math.floor(255 - greenAmount * 155)}, ${Math.floor(50 + greenAmount * 205)}, 50, 0.9)`;
            } else if (BossLifecycle.state === 'EXITING') {
                // Keep green glow while walking away
                glowColor = 'rgba(100, 255, 50, 0.9)';
            } else {
                // Normal red glow for fighting/idle
                glowColor = BossLifecycle.state === 'FIGHTING' ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 50, 50, 0.9)';
            }
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = BossLifecycle.state === 'FIGHTING' ? 15 : 8;
        } else if (isAtKaterBlau) {
            ctx.shadowColor = BossLifecycle.state === 'FIGHTING' ? 'rgba(255, 100, 100, 1)' : 'rgba(255, 255, 255, 0.9)';
            ctx.shadowBlur = BossLifecycle.state === 'FIGHTING' ? 12 : 10;
        } else if (isAtHeide) {
            // Disco mirrorball glow - rainbow/prismatic effect
            const hue = (BossLifecycle.animTime * 60) % 360;  // Rotating hue
            ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.9)`;
            ctx.shadowBlur = 20;  // Strong disco glow
        } else if (isAtSuperboss) {
            // Superboss glow - bright white car lights
            ctx.shadowColor = BossLifecycle.state === 'FIGHTING' ? 'rgba(255, 255, 100, 1)' : 'rgba(255, 255, 255, 0.8)';
            ctx.shadowBlur = BossLifecycle.state === 'FIGHTING' ? 15 : 10;
        } else {
            ctx.shadowColor = 'rgba(200, 200, 200, 0.7)';
            ctx.shadowBlur = 5;
        }
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Draw boss sprite (larger than other characters)
        // Keep proper aspect ratio, especially for mirrorball and Prius
        let drawWidth = bossSize;
        let drawHeight = bossSize;
        
        // Make Prius extra large since it's a car
        if (isAtSuperboss) {
            drawWidth = bossSize * 2.0; // Bigger than original 1.4 but smaller than 2.8
            drawHeight = bossSize * 1.7; // Bigger than original 1.2 but smaller than 2.4
        }
        
        // For mirrorball, maintain natural aspect ratio to prevent stretching
        if (isAtHeide && bossImage.complete && bossImage.naturalWidth > 0) {
            const aspectRatio = bossImage.naturalWidth / bossImage.naturalHeight;
            if (aspectRatio !== 1) {
                // Adjust dimensions to maintain aspect ratio
                if (aspectRatio > 1) {
                    // Wider than tall
                    drawHeight = bossSize / aspectRatio;
                } else {
                    // Taller than wide  
                    drawWidth = bossSize * aspectRatio;
                }
            }
        }
        
        if (BossLifecycle.state === 'SPINNING' && isAtCDV) {
            // Draw centered for rotation
            ctx.drawImage(
                bossImage,
                0, 0, bossImage.naturalWidth, bossImage.naturalHeight,
                0, 0, drawWidth, drawHeight
            );
        } else {
            ctx.drawImage(
                bossImage,
                0, 0, bossImage.naturalWidth, bossImage.naturalHeight,
                0, floatY, drawWidth, drawHeight
            );
        }
        
        // Note: Superboss driver is now handled via combined PNG sprite (prius-driver.png)
        
        ctx.restore();
        
        // Driver exit visual effect removed - clean sprite transition only
        
        // Add menacing aura (only when fighting)
        if (BossLifecycle.entranceProgress >= 1 && BossLifecycle.state === 'FIGHTING') {
            if (isAtCDV) {
                // Red traffic light pulse effect for Ampelmannchen
                ctx.strokeStyle = `rgba(255, 0, 0, ${0.5 + Math.sin(BossLifecycle.animTime * 3) * 0.3})`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                // Create a "throwing" effect - lines emanating from the fist
                const throwAngle = Math.sin(BossLifecycle.animTime * 4) * 0.2;
                ctx.moveTo(bossX + 48, actualY + 32);
                ctx.lineTo(bossX + 64 + Math.sin(BossLifecycle.animTime * 5) * 5, actualY + 32 + throwAngle * 10);
                ctx.moveTo(bossX + 48, actualY + 28);
                ctx.lineTo(bossX + 64 + Math.sin(BossLifecycle.animTime * 5 + 1) * 5, actualY + 28 + throwAngle * 10);
                ctx.moveTo(bossX + 48, actualY + 36);
                ctx.lineTo(bossX + 64 + Math.sin(BossLifecycle.animTime * 5 + 2) * 5, actualY + 36 + throwAngle * 10);
                ctx.stroke();
            } else {
                // Original aura for Currywurst
                ctx.strokeStyle = `rgba(220, 20, 60, ${0.3 + Math.sin(bossAnimTime * 3) * 0.2})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(bossX + 32, actualY + 32, 40 + Math.sin(bossAnimTime * 2) * 5, 0, Math.PI * 2);
                ctx.stroke();
            }
        }
    }
    
    // Transition animation function
    function updateTransition() {
        if (!transitionActive) return;
        
        const location = gameStory.currentLocation;
        
        transitionTimer++;
        
        // New approach: Let BossLifecycle handle its own animation
        // Transition waits for boss to be gone before proceeding
        
        if (transitionPhase === 1) {
            // Phase 1: Wait for boss to exit, then show rock
            
            // Rock starts appearing when boss is exiting
            if (BossLifecycle.state === 'EXITING' || BossLifecycle.state === 'GONE') {
                rockOpacity = Math.min(1, transitionTimer / 60); // Fade in over 1 second
            }
            
            // When boss is completely gone and rock is fully visible
            if (BossLifecycle.state === 'GONE' && rockOpacity >= 1) {
                // Move to next phase
                transitionPhase = 2;
                transitionTimer = 0;
            }
        } else if (transitionPhase === 2) {
            // Phase 2: Gem pulses - wait for user click to continue
            // Just keep pulsing, no auto-advance
            // User click will advance to phase 3
        } else if (transitionPhase === 3) {
            // Phase 3: Screen glow transition
            glowRadius = Math.min(500, transitionTimer * 5);  // Slower glow expansion
            
            if (transitionTimer > 100) {  // 1.67 seconds instead of 0.83
                // Move to scene transition
                transitionPhase = 4;
                transitionTimer = 0;
            }
        } else if (transitionPhase === 4) {
            // Phase 4: Scene transition with ripple effect
            sceneTransitionProgress = Math.min(1, transitionTimer / 120); // 2 second transition
            rippleRadius = sceneTransitionProgress * canvas.width * 1.5;
            
            // Change scene halfway through the transition
            if (transitionTimer === 60) {  // Changed from 30 to 60 frames
                let nextLocation;
                
                // Check if this is intro → CDV transition
                if (window.targetScene) {
                    nextLocation = window.targetScene;
                    console.log('Intro → CDV transition - Target scene:', nextLocation);
                    window.targetScene = null; // Clear the stored target
                } else {
                    // Regular rock transition - use the scene's nextScene property
                    const finalDialogue = currentScene.dialogues[currentScene.dialogues.length - 1];
                    if (finalDialogue.nextScene === 'dynamic') {
                        nextLocation = gameStory.getNextLocation();
                        console.log('Dynamic routing - getNextLocation() returned:', nextLocation);
                    } else {
                        nextLocation = finalDialogue.nextScene;
                        console.log('Static routing - nextScene:', nextLocation);
                    }
                }
                
                console.log('Current location before change:', gameStory.currentLocation);
                gameStory.currentLocation = nextLocation;
                currentScene = gameStory.scenes[gameStory.currentLocation];
                currentDialogueIndex = 0;
                console.log('Location changed to:', gameStory.currentLocation, 'Scene exists:', !!currentScene);
                // HeroLifecycle will handle hero positioning
                // Reset BossLifecycle for next scene
                BossLifecycle.reset();
                // Legacy variable reset (will be removed later)
                bossActive = false;
                bossState = 'idle';
                bossX = 400;
            }
            
            if (transitionTimer > 120) {  // 2 seconds instead of 1
                // End transition
                console.log('Rock transition completed - moving to next scene automatically');
                transitionActive = false;
                transitionPhase = 0;
                rockOpacity = 0;
                glowRadius = 0;
                spinRotation = 0;
                sceneTransitionProgress = 0;
                rippleRadius = 0;
                
                // Automatically show next scene dialogue
                showDialogue();
                console.log('Next scene dialogue started automatically');
            }
        } else if (transitionPhase === 5) {
            // Phase 5: Dark failure transition - wait for user click to continue
            // Dark glow spreads from boss position
            const darkGlow = Math.min(1, transitionTimer / 120); // Build up glow over 2 seconds
            glowRadius = darkGlow * 300; // Smaller than success glow
            
            // Once glow is fully built, wait for user click (no auto-advance)
            // User click will advance to phase 6
        } else if (transitionPhase === 6) {
            // Phase 6: Dark scene transition
            sceneTransitionProgress = Math.min(1, transitionTimer / 120); // Same duration as light
            rippleRadius = sceneTransitionProgress * canvas.width;
            
            // Change scene halfway through
            if (transitionTimer === 60) {
                // Use the scene's nextScene property (same logic as success transition)
                const finalDialogue = currentScene.dialogues[currentScene.dialogues.length - 1];
                let nextLocation;
                if (finalDialogue.nextScene === 'dynamic') {
                    nextLocation = gameStory.getNextLocation();
                    console.log('Dark transition - Dynamic routing:', nextLocation);
                } else {
                    nextLocation = finalDialogue.nextScene;
                    console.log('Dark transition - Static routing:', nextLocation);
                }
                
                gameStory.currentLocation = nextLocation;
                currentScene = gameStory.scenes[gameStory.currentLocation];
                currentDialogueIndex = 0;
                
                // Reset BossLifecycle for next scene
                BossLifecycle.reset();
            }
            
            if (transitionTimer > 120) {
                // End dark transition
                console.log('Dark transition completed - showing next scene');
                transitionActive = false;
                transitionPhase = 0;
                rockOpacity = 0;
                glowRadius = 0;
                spinRotation = 0;
                sceneTransitionProgress = 0;
                rippleRadius = 0;
                
                showDialogue();
            }
        }
    }
    
    // Draw transition effects
    function drawTransition() {
        if (!transitionActive) return;
        
        const location = gameStory.currentLocation;
        
        // Transition effects work for all entrance locations, intro → CDV transition, and superboss
        if ((location && location.includes('_entrance')) || location === 'intro' || location === 'superboss_redemption') {
            // Draw rock appearing (for entrance scenes and superboss, not intro)
            if (transitionPhase >= 1 && rockOpacity > 0 && (location.includes('_entrance') || location === 'superboss_redemption')) {
                ctx.save();
                ctx.globalAlpha = rockOpacity;
                
                // Draw glowing rock in center
                const rockX = canvas.width / 2;
                const rockY = canvas.height / 2;
                
                // Rock glow - much brighter golden glow
                ctx.shadowColor = 'rgba(255, 215, 0, 1)';
                ctx.shadowBlur = 30 + Math.sin(transitionTimer * 0.1) * 15;
                
                // Draw rock (irregular rock shape)
                ctx.fillStyle = '#D4A574'; // Much brighter tan rock color
                ctx.beginPath();
                // Irregular rock shape - more organic than diamond
                ctx.moveTo(rockX - 12, rockY - 15);
                ctx.lineTo(rockX + 8, rockY - 18);
                ctx.lineTo(rockX + 18, rockY - 8);
                ctx.lineTo(rockX + 15, rockY + 10);
                ctx.lineTo(rockX + 5, rockY + 20);
                ctx.lineTo(rockX - 8, rockY + 18);
                ctx.lineTo(rockX - 18, rockY + 8);
                ctx.lineTo(rockX - 16, rockY - 5);
                ctx.closePath();
                ctx.fill();
                
                // Add rock texture/highlights - much brighter
                ctx.fillStyle = '#F4C794'; // Very bright cream highlights
                ctx.fillRect(rockX - 8, rockY - 10, 6, 4);
                ctx.fillRect(rockX + 2, rockY - 5, 4, 3);
                ctx.fillRect(rockX - 5, rockY + 5, 5, 3);
                
                // Add extra bright center glow for visibility
                ctx.fillStyle = '#FFE4B5'; // Almost white cream center
                ctx.fillRect(rockX - 2, rockY - 3, 4, 6);
                
                ctx.restore();
            }
            
            // Draw screen glow (bright for success)
            if (transitionPhase === 3 && glowRadius > 0) {
                ctx.save();
                const gradient = ctx.createRadialGradient(
                    canvas.width / 2, canvas.height / 2, 0,
                    canvas.width / 2, canvas.height / 2, glowRadius
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
            }
            
            // Draw dark glow (for failure)
            if (transitionPhase === 5 && glowRadius > 0) {
                ctx.save();
                const gradient = ctx.createRadialGradient(
                    canvas.width / 2, canvas.height / 2, 0,
                    canvas.width / 2, canvas.height / 2, glowRadius
                );
                gradient.addColorStop(0, 'rgba(50, 0, 0, 0.8)'); // Dark red center
                gradient.addColorStop(0.5, 'rgba(20, 0, 20, 0.6)'); // Dark purple middle
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)'); // Black edge
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
            }
            
            // Draw scene transition effect (bright success)
            if (transitionPhase === 4) {
                ctx.save();
                
                // Create ripple/vortex effect from rock center
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                
                // Draw expanding ripples
                for (let i = 0; i < 3; i++) {
                    const radius = (rippleRadius - i * 30) % (canvas.width * 1.5);
                    if (radius > 0) {
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                        ctx.strokeStyle = `rgba(255, 215, 0, ${0.5 - sceneTransitionProgress * 0.4})`;
                        ctx.lineWidth = 3;
                        ctx.stroke();
                    }
                }
                
                // Vortex distortion effect - draw scene with rotation
                if (sceneTransitionProgress > 0.3) {
                    ctx.globalAlpha = (sceneTransitionProgress - 0.3) / 0.7;
                    ctx.translate(centerX, centerY);
                    ctx.rotate(sceneTransitionProgress * Math.PI);
                    ctx.scale(1 + sceneTransitionProgress * 0.5, 1 + sceneTransitionProgress * 0.5);
                    ctx.translate(-centerX, -centerY);
                    
                    // Fade to white during transition
                    ctx.fillStyle = `rgba(255, 255, 255, ${sceneTransitionProgress * 0.8})`;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
                
                ctx.restore();
            }
            
            // Draw dark scene transition effect (failure)
            if (transitionPhase === 6) {
                ctx.save();
                
                // Create dark ripples from center
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                
                // Draw contracting dark ripples (opposite of success)
                for (let i = 0; i < 4; i++) {
                    const radius = Math.max(0, (canvas.width * 0.8) - (rippleRadius + i * 40));
                    if (radius > 10) {
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                        ctx.strokeStyle = `rgba(100, 0, 50, ${0.6 - sceneTransitionProgress * 0.3})`;
                        ctx.lineWidth = 2;
                        ctx.stroke();
                    }
                }
                
                // Dark vortex effect - counterclockwise rotation
                if (sceneTransitionProgress > 0.2) {
                    ctx.globalAlpha = (sceneTransitionProgress - 0.2) / 0.8;
                    ctx.translate(centerX, centerY);
                    ctx.rotate(-sceneTransitionProgress * Math.PI * 0.5); // Counterclockwise, slower
                    ctx.scale(1 - sceneTransitionProgress * 0.2, 1 - sceneTransitionProgress * 0.2);
                    ctx.translate(-centerX, -centerY);
                    
                    // Fade to dark during transition
                    ctx.fillStyle = `rgba(20, 0, 20, ${sceneTransitionProgress * 0.7})`;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
                
                ctx.restore();
            }
        }
    }
    
    // Update boss based on current scene using BossLifecycle
    function updateBoss() {
        const location = gameStory.currentLocation;
        
        // Show boss at any entrance location or superboss scene
        if (location.includes('_entrance') || location === 'superboss_redemption') {
            // Spawn boss if not active
            if (BossLifecycle.state === 'INACTIVE') {
                BossLifecycle.spawn();
            }
            
            // Update boss state based on dialogue progress
            if (currentDialogueIndex >= 1 && currentDialogueIndex <= 3) {
                BossLifecycle.startFighting();
            }
            
            // Update the BossLifecycle state machine
            BossLifecycle.update();
            
            // Sync legacy variables for compatibility (will be removed later)
            bossActive = BossLifecycle.isActive();
            bossX = BossLifecycle.position.x;
            bossY = BossLifecycle.position.y;
            bossAnimTime = BossLifecycle.animTime;
            bossEntrance = BossLifecycle.entranceProgress;
            bossFrameToggle = BossLifecycle.frameToggle;
            
            // Map BossLifecycle states to legacy bossState
            if (BossLifecycle.state === 'FIGHTING') {
                bossState = 'fighting';
            } else if (BossLifecycle.isDefeated()) {
                bossState = 'defeated';
            } else {
                bossState = 'idle';
            }
        } else {
            // Reset boss when not in entrance location
            if (BossLifecycle.state !== 'INACTIVE') {
                BossLifecycle.reset();
                bossActive = false;
                bossState = 'idle';
            }
        }
    }
    
    // Draw background based on current scene
    function drawBackground() {
        const location = gameStory.currentLocation;
        
        if (location === 'intro' || location === 'finale') {
            // Use berlin-background.png
            if (berlinBackground.complete && berlinBackground.naturalHeight !== 0) {
                ctx.drawImage(
                    berlinBackground,
                    0, 0, berlinBackground.naturalWidth, berlinBackground.naturalHeight,
                    0, 0, canvas.width, canvas.height
                );
                
                // Add animated cloud overlays
                const time = Date.now() / 1000;
                
                // Left cloud
                if (cloudCxl.complete && cloudCxl.naturalHeight !== 0) {
                    ctx.save();
                    // Gentle floating animation
                    const floatX = 140 + Math.sin(time * 0.3) * 8;  // Center-left with horizontal drift
                    const floatY = 50 + Math.cos(time * 0.4) * 5;  // Upper-middle area with vertical bob
                    
                    // Full opacity (no transparency)
                    ctx.globalAlpha = 1;
                    
                    // Draw the cloud smaller
                    ctx.drawImage(
                        cloudCxl,
                        0, 0, cloudCxl.naturalWidth, cloudCxl.naturalHeight,
                        floatX, floatY, 60, 40  // Smaller size
                    );
                    ctx.restore();
                }
                
                // Right cloud
                if (cloudCxr.complete && cloudCxr.naturalHeight !== 0) {
                    ctx.save();
                    // Gentle floating animation (opposite phase for variety)
                    const floatX = 320 + Math.sin(time * 0.3 + Math.PI) * 8;  // Right side with opposite drift
                    const floatY = 30 + Math.cos(time * 0.4 + Math.PI) * 5;  // Higher up with opposite bob
                    
                    // Full opacity (no transparency)
                    ctx.globalAlpha = 1;
                    
                    // Draw the cloud smaller
                    ctx.drawImage(
                        cloudCxr,
                        0, 0, cloudCxr.naturalWidth, cloudCxr.naturalHeight,
                        floatX, floatY, 60, 40  // Same size as left cloud
                    );
                    ctx.restore();
                }
            } else {
                // Fallback gradient if image not loaded
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, '#1a1a3e');
                gradient.addColorStop(1, '#4a4a8e');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
        else if (location.includes('visionaere')) {
            // Smooth fade between CDV backgrounds
            if (cdvBackgrounds.length === 2) {
                // Update background timer
                cdvBackgroundTimer++;
                
                // Full cycle: 180 frames (3 seconds at 60fps - 1.5s fade in, 1.5s fade out)
                const cycleDuration = 180;
                if (cdvBackgroundTimer >= cycleDuration) {
                    cdvBackgroundTimer = 0;
                }
                
                // Calculate smooth fade using sine wave
                // This creates smooth transitions: 0->1->0
                const fadeProgress = (Math.sin(cdvBackgroundTimer * Math.PI / 90) + 1) / 2;
                
                // Always draw first background
                if (cdvBackground.complete && cdvBackground.naturalHeight !== 0) {
                    ctx.drawImage(
                        cdvBackground,
                        0, 0, 1536, 1024,
                        0, 0, canvas.width, canvas.height
                    );
                }
                
                // Fade in/out second background
                if (cdvBackground2.complete && cdvBackground2.naturalHeight !== 0) {
                    ctx.save();
                    ctx.globalAlpha = fadeProgress;
                    ctx.drawImage(
                        cdvBackground2,
                        0, 0, 1536, 1024,
                        0, 0, canvas.width, canvas.height
                    );
                    ctx.restore();
                }
            } else if (cdvBackground.complete && cdvBackground.naturalHeight !== 0) {
                // Fallback to first background if array not initialized
                ctx.drawImage(
                    cdvBackground,
                    0, 0, cdvBackground.naturalWidth, cdvBackground.naturalHeight,
                    0, 0, canvas.width, canvas.height
                );
            } else {
                // Fallback - canal scene
                ctx.fillStyle = '#2C4E7E'; // Water blue
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#8B7355'; // Wooden deck
                ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
            }
        }
        else if (location.includes('kater')) {
            // Kater Blau - use kater-background.png
            if (katerBackground.complete && katerBackground.naturalHeight !== 0) {
                ctx.drawImage(
                    katerBackground,
                    0, 0, katerBackground.naturalWidth, katerBackground.naturalHeight,
                    0, 0, canvas.width, canvas.height
                );
            } else {
                // Fallback gradient if image not loaded
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, '#FF6B6B'); // Sunrise pink
                gradient.addColorStop(0.3, '#FFD93D'); // Golden
                gradient.addColorStop(0.6, '#6BCF7F'); // Turquoise
                gradient.addColorStop(1, '#4A90E2'); // River blue
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Wooden deck
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(0, canvas.height - 60, canvas.width, 60);
            }
        }
        else if (location.includes('heide')) {
            // Heideglühen - use heidegluhen-background.png
            if (heidegluhenBackground.complete && heidegluhenBackground.naturalHeight !== 0) {
                ctx.drawImage(
                    heidegluhenBackground,
                    0, 0, heidegluhenBackground.naturalWidth, heidegluhenBackground.naturalHeight,
                    0, 0, canvas.width, canvas.height
                );
            } else {
                // Fallback gradient if image not loaded
                ctx.fillStyle = '#0A0E27'; // Night sky
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Fire glow in center
                const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height - 40, 10, canvas.width/2, canvas.height - 40, 100);
                gradient.addColorStop(0, '#FFFF00');
                gradient.addColorStop(0.5, '#FF8C00');
                gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(canvas.width/2 - 100, canvas.height - 140, 200, 140);
            }
        }
        else if (location.includes('sisyphos')) {
            // Sisyphos - progressive background system with smooth transitions
            sisyphosBackgroundTimer++;
            
            // Change background every 4 seconds (240 frames at 60fps)
            // Stop at the last background (background7) instead of looping
            if (sisyphosBackgroundTimer >= 240 && sisyphosBackgroundIndex < sisyphosBackgrounds.length - 1) {
                sisyphosBackgroundIndex++;
                sisyphosBackgroundTimer = 0;
            }
            
            // Get current and next backgrounds for smooth transition
            const currentBg = sisyphosBackgrounds[sisyphosBackgroundIndex];
            const nextIndex = sisyphosBackgroundIndex + 1;
            const nextBg = nextIndex < sisyphosBackgrounds.length ? sisyphosBackgrounds[nextIndex] : null;
            
            // Draw current background
            if (currentBg.complete && currentBg.naturalHeight !== 0) {
                ctx.drawImage(
                    currentBg,
                    0, 0, currentBg.naturalWidth, currentBg.naturalHeight,
                    0, 0, canvas.width, canvas.height
                );
                
                // Cross-fade to next background in the last 60 frames (1 second) - only if not at last background
                if (sisyphosBackgroundTimer >= 180 && nextBg && nextBg.complete && nextBg.naturalHeight !== 0) {
                    const fadeProgress = (sisyphosBackgroundTimer - 180) / 60; // 0 to 1 over 1 second
                    ctx.globalAlpha = fadeProgress;
                    ctx.drawImage(
                        nextBg,
                        0, 0, nextBg.naturalWidth, nextBg.naturalHeight,
                        0, 0, canvas.width, canvas.height
                    );
                    ctx.globalAlpha = 1;
                }
            } else {
                // Fallback psychedelic background if images not loaded
                const time = Date.now() * 0.001;
                const pulse = Math.sin(time) * 0.5 + 0.5;
                ctx.fillStyle = `rgb(${Math.floor(75 * pulse)}, 0, ${Math.floor(100 * pulse)})`;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
        // Superboss/bonus level - use bonus background
        else if (location === 'superboss_redemption') {
            if (bonusBackground.complete && bonusBackground.naturalHeight !== 0) {
                ctx.drawImage(
                    bonusBackground,
                    0, 0, bonusBackground.naturalWidth, bonusBackground.naturalHeight,
                    0, 0, canvas.width, canvas.height
                );
            }
        }
    }
    
    // Main render function
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        
        // Update automatic movement for story
        updateSceneMovement();
        
        // Check if hero is moving (for animation switching)
        heroMoving = (heroX !== lastHeroX || heroY !== lastHeroY);
        
        // Draw characters based on scene
        const location = gameStory.currentLocation;
        
        // Always draw hero (but make transparent during transitions)
        ctx.save();
        if (transitionActive) {
            ctx.globalAlpha = 0; // Hide hero during transitions
        }
        
        // Disable floating animation in finale
        if (location === 'finale') {
            drawHero(heroX, heroY); // No floating in finale
        } else {
            drawHero(heroX, heroY); // Normal drawing for other scenes
        }
        ctx.restore();
        
        // Update and draw raven after animation is complete
        if (animationCompleted) {
            updateRaven();
            
            // Draw raven (but make transparent during transitions)
            ctx.save();
            if (transitionActive) {
                ctx.globalAlpha = 0; // Hide raven during transitions
            }
            drawRaven();
            ctx.restore();
        }
        
        // Draw mermaid only in intro and finale
        if (location === 'intro' || location === 'finale') {
            drawMermaid(mermaidX, mermaidY);
        }
        
        // Update and draw boss
        updateBoss();
        updateTransition();
        
        // Draw boss (but make transparent during transitions)
        ctx.save();
        if (transitionActive) {
            ctx.globalAlpha = 0; // Hide boss during transitions
        }
        drawBoss();
        ctx.restore();
        
        drawTransition();
        
        // Old placeholder boss drawings removed - now using PNG sprites with BossLifecycle
        
        // Draw rocks HUD
        drawRocksHUD();
        
        // Draw club name HUD
        drawClubNameHUD();
        
        // Update last position
        lastHeroX = heroX;
        lastHeroY = heroY;
        
        // Update confetti animation
        updateConfetti();
        
        // Draw confetti on top of everything
        drawConfetti();
        
        // Update frame counter for raven animation
        frameCount++;
        
        // Update hero fighting timer
        if (heroFightingTimer > 0) {
            heroFightingTimer--;
            if (heroFightingTimer === 0) {
                heroFightingState = false;  // Return to normal stance
            }
        }
    }
    
    // Animation loop
    function animate() {
        if (gameScreen.style.display === 'flex' && !animationActive) {
            render();
        }
        requestAnimationFrame(animate);
    }
    
    // Story dialogue system
    let currentDialogueIndex = 0;
    let currentScene = gameStory.scenes[gameStory.currentLocation];
    let waitingForChoice = false;
    const choiceButtons = document.getElementById('choiceButtons');
    const continueIndicator = document.getElementById('continueIndicator');
    const choice1Btn = document.getElementById('choice1');
    const choice2Btn = document.getElementById('choice2');
    const choice3Btn = document.getElementById('choice3');
    
    // Typewriter effect variables
    let typewriterInterval = null;
    let typewriterText = '';
    let typewriterIndex = 0;
    let lastTypewriterDialogueIndex = -1; // Track which dialogue has been typewritten
    let typewriterTimeoutId = null; // Track setTimeout to prevent duplicates
    
    function typewriterEffect(text, callback) {
        // Clear any existing typewriter
        if (typewriterInterval) {
            clearInterval(typewriterInterval);
        }
        
        typewriterText = text;
        typewriterIndex = 0;
        dialogueText.textContent = '';
        dialogueText.style.minHeight = '40px'; // Ensure space for text
        
        typewriterInterval = setInterval(() => {
            if (typewriterIndex < typewriterText.length) {
                dialogueText.textContent = typewriterText.substring(0, typewriterIndex + 1);
                typewriterIndex++;
            } else {
                clearInterval(typewriterInterval);
                typewriterInterval = null;
                if (callback) callback();
            }
        }, 60); // Slower for better visibility (60ms per character)
    }
    
    function showDialogue() {
        console.log('showDialogue() called - Location:', gameStory.currentLocation, 'DialogueIndex:', currentDialogueIndex, 'Stack:', new Error().stack.split('\n')[2].trim());
        if (!currentScene || !currentScene.dialogues) return;
        
        const dialogue = currentScene.dialogues[currentDialogueIndex];
        if (!dialogue) return;
        
        speakerName.textContent = dialogue.speaker;
        
        
        if (dialogue.choices) {
            // Show choices with buttons
            waitingForChoice = true;
            dialogueText.textContent = dialogue.text;
            
            // Show choice buttons
            choiceButtons.style.display = 'flex';
            continueIndicator.style.display = 'none';
            
            // Set button texts
            const setButtonContent = (btn, choice) => {
                if (!choice) {
                    btn.textContent = '';
                    return;
                }
                
                // Just use the main text
                btn.textContent = choice.text.replace(/\s*\[.*?\]\s*$/, '');
            };
            
            setButtonContent(choice1Btn, dialogue.choices[0]);
            setButtonContent(choice2Btn, dialogue.choices[1]);
            setButtonContent(choice3Btn, dialogue.choices[2]);
            
            // Show/hide buttons based on available choices
            choice1Btn.style.display = dialogue.choices[0] ? 'block' : 'none';
            choice2Btn.style.display = dialogue.choices[1] ? 'block' : 'none';
            choice3Btn.style.display = dialogue.choices[2] ? 'block' : 'none';
        } else {
            // Regular dialogue - use typewriter effect for all dialogues
            waitingForChoice = false;
            choiceButtons.style.display = 'none';
            
            // Check if this dialogue has already been typewritten
            const dialogueKey = `${gameStory.currentLocation}_${currentDialogueIndex}`;
            console.log('Typewriter check - DialogueKey:', dialogueKey, 'LastKey:', lastTypewriterDialogueIndex, 'CurrentText:', dialogueText.textContent, 'TargetText:', dialogue.text, 'ContinueVisible:', continueIndicator.style.display);
            
            // If dialogue is already fully displayed, do nothing to avoid blinking
            if (lastTypewriterDialogueIndex === dialogueKey && 
                dialogueText.textContent === dialogue.text &&
                continueIndicator.style.display === 'block') {
                console.log('Dialogue already fully displayed, skipping');
                return; // Exit early, dialogue is already shown
            }
            
            // If typewriter is currently active for this same dialogue, don't restart it
            if (typewriterInterval && lastTypewriterDialogueIndex === dialogueKey) {
                console.log('Typewriter already active for this dialogue, skipping');
                return;
            }
            
            // Only apply typewriter if we haven't typed this specific dialogue yet
            if (lastTypewriterDialogueIndex !== dialogueKey) {
                console.log('Starting typewriter for new dialogue:', dialogueKey);
                // Clear any existing timeout to prevent duplicates
                if (typewriterTimeoutId) {
                    clearTimeout(typewriterTimeoutId);
                }
                
                // Mark this dialogue as being typed
                lastTypewriterDialogueIndex = dialogueKey;
                
                // Clear text and hide continue indicator
                continueIndicator.style.display = 'none';
                
                // Start typewriter immediately (no complex color switching)
                typewriterEffect(dialogue.text, () => {
                    continueIndicator.style.display = 'block'; // Show when done
                    typewriterTimeoutId = null; // Clear the timeout ID
                });
            } else {
                console.log('Dialogue already typed, ensuring it remains displayed correctly');
                // Dialogue was already typed, only update if text is different
                if (dialogueText.textContent !== dialogue.text) {
                    console.log('Text content differs, updating without typewriter');
                    dialogueText.textContent = dialogue.text;
                }
                // Always ensure indicator is visible
                if (continueIndicator.style.display !== 'block') {
                    console.log('Making continue indicator visible');
                    continueIndicator.style.display = 'block';
                }
            }
        }
        
        // Handle animations if specified
        if (dialogue.animation) {
            handleAnimation(dialogue.animation);
        }
    }
    
    function handleChoice(choiceIndex) {
        const dialogue = currentScene.dialogues[currentDialogueIndex];
        if (!dialogue || !dialogue.choices) return;
        
        const choice = dialogue.choices[choiceIndex];
        if (!choice) return;
        
        // Trigger hero and boss fighting animations when making a choice
        if (BossLifecycle.isActive() && BossLifecycle.state !== 'GONE') {
            heroFightingState = true;
            heroFightingTimer = 60;  // Fight pose for 1 second (was 2 seconds)
            BossLifecycle.startFighting();  // Boss enters fighting state too
        }
        
        // Hide choice buttons immediately
        choiceButtons.style.display = 'none';
        continueIndicator.style.display = 'block';
        waitingForChoice = false;
        
        // Show response
        speakerName.textContent = currentScene.dialogues[currentDialogueIndex].speaker || 'Response';
        dialogueText.textContent = choice.response;
        
        // Give rock if earned
        if (choice.givesRock) {
            // Special handling for superboss redemption - gives all missing rocks
            if (choice.givesRock === 'redemption') {
                console.log('Superboss redemption - granting all missing rocks');
                if (!gameStory.rocks.visionaere) {
                    gameStory.rocks.visionaere = true;
                    console.log('Granted missing rock: visionaere');
                }
                if (!gameStory.rocks.katerBlau) {
                    gameStory.rocks.katerBlau = true;
                    console.log('Granted missing rock: katerBlau');
                }
                if (!gameStory.rocks.heideglühen) {
                    gameStory.rocks.heideglühen = true;
                    console.log('Granted missing rock: heideglühen');
                }
                if (!gameStory.rocks.sisyphos) {
                    gameStory.rocks.sisyphos = true;
                    console.log('Granted missing rock: sisyphos');
                }
            } else {
                // Normal rock earning
                gameStory.rocks[choice.givesRock] = true;
                console.log(`Rock earned: ${choice.givesRock} at location: ${gameStory.currentLocation}`);
            }
            
            // Trigger boss defeat using BossLifecycle
            if (gameStory.currentLocation.includes('_entrance') || gameStory.currentLocation === 'superboss_redemption') {
                console.log('Starting rock transition for:', gameStory.currentLocation);
                BossLifecycle.defeat();
                // Start rock transition after boss starts exiting
                transitionActive = true;
                transitionPhase = 1;  // Rock appears while boss exits
                transitionTimer = 0;
                bossWalkAwayX = bossX;  // Legacy compatibility
                bossState = 'defeated';  // Legacy compatibility
                
                // Hide continue indicator during automatic transition
                continueIndicator.style.display = 'none';
                console.log('Rock transition started - user input blocked until completion');
            }
            
            setTimeout(() => {
                dialogueText.textContent += '\n\n✨ You received a Sacred Rock! ✨';
            }, 2000);  // 2 seconds to read the boss response before rock text appears
        }
        
        // Check if this is the final question by looking at the next dialogue
        const nextDialogue = currentScene.dialogues[currentDialogueIndex + 1];
        const isFinalQuestion = nextDialogue && nextDialogue.nextScene; // Has nextScene means it's the outro
        
        console.log('Choice analysis:', {
            currentDialogueIndex,
            isFinalQuestion,
            nextDialogue: nextDialogue ? 'exists' : 'none',
            hasNextScene: nextDialogue?.nextScene,
            givesRock: choice.givesRock,
            location: gameStory.currentLocation
        });
        
        // Only trigger transitions and club completion on the FINAL question
        if (isFinalQuestion && gameStory.currentLocation.includes('_entrance')) {
            // Mark club as visited when completing the final boss choice
            gameStory.markClubVisited(gameStory.currentLocation);
            console.log('Club marked as visited on final question:', gameStory.currentLocation, 'All clubs visited:', gameStory.allClubsVisited());
            
            // Handle failed rock attempts with dark transition (only on final question)
            if (!choice.givesRock) {
                console.log('Starting dark failure sequence for final question:', gameStory.currentLocation);
                
                // Hide choice buttons and show continue indicator for reading the response
                choiceButtons.style.display = 'none';
                continueIndicator.style.display = 'block';
                waitingForChoice = false;
                
                // Set a flag to indicate we're waiting to start dark transition
                // The click handler will check for this flag
                window.pendingDarkTransition = true;
                
                console.log('Dark failure response shown - waiting for user click to start transition');
            }
        }
        
        // For non-final questions, just advance to next dialogue
        if (!isFinalQuestion && !choice.givesRock && gameStory.currentLocation.includes('_entrance')) {
            console.log('Non-final question - advancing to next dialogue');
            // Don't trigger any transitions, just wait for user to continue normally
        }
        
        // Scene change now happens in the transition animation phase 4 (success) or 6 (failure)
        if (!choice.givesRock && !gameStory.currentLocation.includes('_entrance')) {
            // Don't auto-advance - wait for user click to continue
            // User must click to go to the next dialogue (which might be another question)
        }
    }
    
    // Draw rocks HUD (only rocks, no stats)
    function drawRocksHUD() {
        // Skip HUD in intro
        if (gameStory.currentLocation === 'intro') return;
        
        // Draw rock indicators
        const rocks = gameStory.rocks;
        const startX = 10;
        const startY = 10;
        const backgroundX = canvas.width - 135;
        const backgroundWidth = 125;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(backgroundX, startY - 5, backgroundWidth, 30);
        
        // Calculate total width of all elements (text + gap + 4 rocks)
        ctx.fillStyle = '#D4A574'; // Set font before measuring
        ctx.font = '10px Arial';
        const textWidth = ctx.measureText('ROCKS:').width;
        const rocksWidth = 4 * 14 + 3 * 3; // 4 rocks * 14px + 3 gaps * 3px  
        const gapAfterText = 8; // Small gap between text and first rock
        const totalWidth = textWidth + gapAfterText + rocksWidth;
        
        // Center the entire block in the background
        const rocksStartX = backgroundX + (backgroundWidth - totalWidth) / 2;
        
        // Draw text
        ctx.fillStyle = '#D4A574'; // Much brighter tan/beige
        ctx.fillText('ROCKS:', rocksStartX, startY + 10);
        
        // Start rocks after text + gap
        let rockX = rocksStartX + textWidth + gapAfterText;
        for (let rock in rocks) {
            if (rocks[rock]) {
                // Draw rock-like shape when collected - larger and more visible
                ctx.fillStyle = '#D4A574'; // Bright tan for main body
                // Main rock body - aligned with text
                ctx.fillRect(rockX, startY, 14, 12);
                
                // Rock texture - more prominent darker spots
                ctx.fillStyle = '#A0845A'; // Medium brown for contrast
                ctx.fillRect(rockX + 2, startY + 2, 3, 2);
                ctx.fillRect(rockX + 8, startY + 3, 3, 2);
                ctx.fillRect(rockX + 4, startY + 7, 4, 3);
                
                // Add lighter highlights for more definition
                ctx.fillStyle = '#F4C794'; // Very bright cream highlights
                ctx.fillRect(rockX + 1, startY + 1, 2, 1);
                ctx.fillRect(rockX + 10, startY + 2, 2, 1);
                ctx.fillRect(rockX + 6, startY + 9, 3, 1);
            } else {
                // Empty slot - aligned with text
                ctx.fillStyle = '#333333';
                ctx.fillRect(rockX, startY, 14, 12);
            }
            rockX += 17; // Move to next rock position
        }
    }
    
    // Draw club name HUD in upper left corner
    function drawClubNameHUD() {
        const location = gameStory.currentLocation;
        
        // Skip in intro and finale
        if (location === 'intro' || location === 'finale') return;
        
        let clubName = '';
        
        // Determine club name based on location
        if (location.includes('visionaere')) {
            clubName = 'CLUB DER VISIONAERE';
        } else if (location.includes('kater')) {
            clubName = 'KATER BLAU';
        } else if (location.includes('heideglühen')) {
            clubName = 'HEIDEGLÜHEN';
        } else if (location.includes('sisyphos')) {
            clubName = 'SISYPHOS';
        } else if (location === 'superboss_redemption') {
            clubName = 'REDEMPTION RIDE';
        }
        
        if (!clubName) return;
        
        const startX = 10;
        const startY = 10;
        
        // Measure text to size background properly
        ctx.font = '12px Arial';
        const textWidth = ctx.measureText(clubName).width;
        const backgroundWidth = textWidth + 20;
        const backgroundHeight = 25;
        
        // Semi-transparent background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(startX - 5, startY - 5, backgroundWidth, backgroundHeight);
        
        // Club name text
        ctx.fillStyle = '#FFD700'; // Gold color like the game's accent
        ctx.font = '12px Arial';
        ctx.fillText(clubName, startX + 5, startY + 12);
    }
    
    // Confetti system
    function createConfetti() {
        confettiParticles = [];
        const colors = ['#FFD700', '#FF69B4', '#00CED1', '#98FB98', '#FFA500', '#DA70D6'];
        
        for (let i = 0; i < 50; i++) {
            confettiParticles.push({
                x: Math.random() * canvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 2 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.2
            });
        }
        confettiActive = true;
    }
    
    function updateConfetti() {
        if (!confettiActive) return;
        
        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const particle = confettiParticles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.rotation += particle.rotationSpeed;
            particle.vy += 0.1; // gravity
            
            // Remove particles that fall off screen
            if (particle.y > canvas.height + 20) {
                confettiParticles.splice(i, 1);
            }
        }
        
        // Stop confetti when all particles are gone
        if (confettiParticles.length === 0) {
            confettiActive = false;
        }
    }
    
    function drawConfetti() {
        if (!confettiActive) return;
        
        ctx.save();
        for (const particle of confettiParticles) {
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
            ctx.restore();
        }
        ctx.restore();
    }

    function handleAnimation(animationType) {
        switch(animationType) {
            case 'mermaid_appear':
                mermaidX = 280;
                mermaidY = 120;
                break;
            case 'hero_curious':
                // Could add a head tilt or question mark
                break;
            case 'gems_combine':
                // Show gems floating together
                break;
            case 'celebration':
                createConfetti();
                break;
        }
    }
    
    // Start animation sequence
    let startAnimationPhase = 0;
    let startAnimationTimer = 0;
    let animationActive = false;
    let animationCompleted = false; // Track if initial animation has finished
    let dialogueStarted = false; // Track if dialogue has already started
    
    function runStartAnimation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        startAnimationTimer++;
        
        if (startAnimationPhase === 0) {
            // Phase 0: Fade in underwater scene (no characters yet)
            ctx.globalAlpha = Math.min(startAnimationTimer / 40, 1);
            drawBackground();
            
            if (startAnimationTimer > 40) {
                ctx.globalAlpha = 1;
                startAnimationPhase = 1;
                startAnimationTimer = 0;
            }
        }
        else if (startAnimationPhase === 1) {
            // Phase 1: Magical portal opens
            drawBackground();
            
            // Draw swirling portal effect
            const portalSize = Math.min(startAnimationTimer * 3, 80);
            const gradient = ctx.createRadialGradient(heroX + 24, heroY + 30, 0, heroX + 24, heroY + 30, portalSize);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(0.5, 'rgba(100, 200, 255, 0.5)');
            gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(heroX + 24, heroY + 30, portalSize, 0, Math.PI * 2);
            ctx.fill();
            
            // Spinning light particles
            for (let i = 0; i < 8; i++) {
                const angle = (startAnimationTimer * 0.1) + (i * Math.PI / 4);
                const x = heroX + 24 + Math.cos(angle) * portalSize * 0.8;
                const y = heroY + 30 + Math.sin(angle) * portalSize * 0.8;
                ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
                ctx.fillRect(x - 2, y - 2, 4, 4);
            }
            
            if (startAnimationTimer > 40) {
                startAnimationPhase = 2;
                startAnimationTimer = 0;
            }
        }
        else if (startAnimationPhase === 2) {
            // Phase 2: Hero materializes from portal
            drawBackground();
            
            // Hero and raven fade in together
            ctx.globalAlpha = Math.min(startAnimationTimer / 30, 1);
            drawHero(heroX, heroY);
            
            // Initialize and draw raven with hero
            if (!ravenInitialized) {
                ravenX = heroX - 20;
                ravenY = heroY - 45;  // Higher above hero at ground level
                ravenInitialized = true;
            }
            drawRaven();
            
            ctx.globalAlpha = 1;
            
            // Fading portal
            const portalAlpha = Math.max(0, 1 - startAnimationTimer / 30);
            ctx.fillStyle = `rgba(100, 200, 255, ${portalAlpha * 0.3})`;
            ctx.beginPath();
            ctx.arc(heroX + 24, heroY + 30, 80, 0, Math.PI * 2);
            ctx.fill();
            
            if (startAnimationTimer > 40) {
                startAnimationPhase = 3;
                startAnimationTimer = 0;
            }
        }
        else if (startAnimationPhase === 3) {
            // Phase 3: Water splash and mermaid emerges
            drawBackground();
            drawHero(heroX, heroY);
            
            // Continue drawing raven
            updateRaven();
            drawRaven();
            
            // Water splash effect at mermaid position
            const splashHeight = 40 - Math.min(startAnimationTimer, 40);
            if (splashHeight > 0) {
                // Draw water droplets
                for (let i = 0; i < 12; i++) {
                    const angle = (i * Math.PI * 2) / 12;
                    const distance = splashHeight;
                    const x = mermaidX + 24 + Math.cos(angle) * distance;
                    const y = mermaidY + 40 + Math.sin(angle - startAnimationTimer * 0.1) * distance;
                    
                    ctx.fillStyle = 'rgba(100, 200, 255, 0.6)';
                    ctx.beginPath();
                    ctx.arc(x, y, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Mermaid rises from water
            if (startAnimationTimer > 20) {
                const riseAmount = Math.min((startAnimationTimer - 20) * 2, 40);
                const currentY = mermaidY + 40 - riseAmount;
                
                // Sparkles around mermaid
                for (let i = 0; i < 6; i++) {
                    const sparkleAngle = (startAnimationTimer * 0.15) + (i * Math.PI / 3);
                    const x = mermaidX + 24 + Math.cos(sparkleAngle) * 35;
                    const y = currentY + 30 + Math.sin(sparkleAngle) * 35;
                    const sparkleSize = 2 + Math.sin(startAnimationTimer * 0.3 + i) * 2;
                    
                    ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
                    ctx.fillRect(x - sparkleSize/2, y - sparkleSize/2, sparkleSize, sparkleSize);
                }
                
                ctx.globalAlpha = Math.min((startAnimationTimer - 20) / 20, 1);
                drawMermaid(mermaidX, currentY);
                ctx.globalAlpha = 1;
            }
            
            if (startAnimationTimer > 60) {
                startAnimationPhase = -1; // Animation complete
                animationActive = false;
                animationCompleted = true; // Mark animation as completed
                // Only show dialogue once
                if (!dialogueStarted) {
                    dialogueStarted = true;
                    console.log('=== STARTING FIRST DIALOGUE ===');
                    console.log('currentDialogueIndex:', currentDialogueIndex);
                    console.log('currentScene.dialogues[0]:', currentScene.dialogues[0]);
                    showDialogue(); // Start dialogue
                }
            }
        }
        
        frameCount++;
        
        if (startAnimationPhase >= 0) {
            requestAnimationFrame(runStartAnimation);
        }
        // No need to call animate() here - it's already running
    }
    
    // Music control functionality
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');
    
    function startMusic() {
        backgroundMusic.play().catch(e => {
            console.log('Music autoplay prevented by browser:', e);
        });
        musicPlaying = true;
        musicIcon.textContent = '🔊';
    }
    
    function toggleMusic() {
        if (musicPlaying) {
            backgroundMusic.pause();
            musicPlaying = false;
            musicIcon.textContent = '🔇';
        } else {
            backgroundMusic.play().catch(e => {
                console.log('Music play failed:', e);
            });
            musicPlaying = true;
            musicIcon.textContent = '🔊';
        }
    }
    
    musicControl.addEventListener('click', toggleMusic);

    // Start game - begin story with animation
    startBtn.addEventListener('click', () => {
        console.log('Start button clicked!'); // Debug log
        titleScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
        animationActive = true; // Prevent normal rendering during animation
        runStartAnimation(); // Start with animation
        animate(); // Start the animation loop
        
        // Start background music
        startMusic();
    });
    
    // Progress dialogue on click or keypress
    document.addEventListener('click', (e) => {
        if (gameScreen.style.display !== 'flex') return;
        
        // Block all clicks during start animation
        if (animationActive && !animationCompleted) {
            console.log('Start animation in progress, ignoring click');
            return;
        }
        
        // Block clicks during most transition phases, but allow clicking during gem pulse (phase 2) and dark glow (phase 5)
        if (transitionActive && transitionPhase !== 2 && transitionPhase !== 5) {
            console.log('Rock transition in progress, ignoring click');
            return;
        }
        
        // Handle click during gem pulse phase (phase 2) - light success transition
        if (transitionActive && transitionPhase === 2) {
            console.log('User clicked during gem pulse - advancing to glow transition');
            transitionPhase = 3;
            transitionTimer = 0;
            return;
        }
        
        // Handle click during dark glow phase (phase 5) - dark failure transition
        if (transitionActive && transitionPhase === 5) {
            console.log('User clicked during dark glow - advancing to dark scene transition');
            transitionPhase = 6;
            transitionTimer = 0;
            return;
        }
        
        // Check for pending dark transition (failure response)
        if (window.pendingDarkTransition) {
            console.log('User clicked after dark failure response - starting dark transition');
            // Start the dark transition now
            transitionActive = true;
            transitionPhase = 5;
            transitionTimer = 0;
            continueIndicator.style.display = 'none';
            window.pendingDarkTransition = false; // Clear the flag
            return;
        }
        
        // Don't advance if clicking on buttons or if waiting for choice
        if (waitingForChoice || e.target.classList.contains('choice-btn')) {
            return;
        }
        
        // If typewriter is active, complete it immediately
        if (typewriterInterval) {
            clearInterval(typewriterInterval);
            typewriterInterval = null;
            dialogueText.textContent = typewriterText;
            continueIndicator.style.display = 'block';
            return; // Don't advance dialogue, just complete the typing
        }
        
        // Advance dialogue
        console.log('=== ADVANCING DIALOGUE ===');
        console.log('Before increment:', currentDialogueIndex);
        currentDialogueIndex++;
        console.log('After increment:', currentDialogueIndex);
        if (currentDialogueIndex >= currentScene.dialogues.length) {
            // Check if we should move to next scene
            const lastDialogue = currentScene.dialogues[currentScene.dialogues.length - 1];
            if (lastDialogue.nextScene) {
                console.log(`Scene transition: ${gameStory.currentLocation} -> ${lastDialogue.nextScene}`);
                
                // Special transition animation from intro to CDV
                if (gameStory.currentLocation === 'intro' && lastDialogue.nextScene === 'visionaere_entrance') {
                    console.log('Starting intro → CDV transition animation');
                    // Start transition animation similar to rock transitions but without rock
                    transitionActive = true;
                    transitionPhase = 3; // Skip rock phases, go straight to glow transition
                    transitionTimer = 0;
                    glowRadius = 0;
                    sceneTransitionProgress = 0;
                    rippleRadius = 0;
                    
                    // Hide continue indicator during transition
                    continueIndicator.style.display = 'none';
                    
                    // Store the target scene for the transition
                    window.targetScene = lastDialogue.nextScene;
                    return; // Don't change scene immediately, let transition handle it
                }
                
                // Handle dynamic scene routing
                let nextLocation;
                if (lastDialogue.nextScene === 'dynamic') {
                    nextLocation = gameStory.getNextLocation();
                    console.log('Dynamic scene routing:');
                    console.log('  - Current clubs visited:', gameStory.clubsVisited);
                    console.log('  - Current rocks collected:', gameStory.rocks);
                    console.log('  - All clubs visited?', gameStory.allClubsVisited());
                    console.log('  - All rocks collected?', gameStory.checkAllRocks());
                    console.log('  - getNextLocation() returned:', nextLocation);
                } else {
                    nextLocation = lastDialogue.nextScene;
                }
                
                // Regular instant scene change for other transitions
                gameStory.currentLocation = nextLocation;
                currentScene = gameStory.scenes[gameStory.currentLocation];
                currentDialogueIndex = 0;
                console.log(`New scene: ${gameStory.currentLocation}, dialogues: ${currentScene ? currentScene.dialogues?.length : 'undefined'}`);
                
                // Special logging for superboss
                if (nextLocation === 'superboss_redemption') {
                    console.log('🎯 SUPERBOSS SCENE LOADED SUCCESSFULLY! Scene details:', {
                        location: gameStory.currentLocation,
                        sceneExists: !!currentScene,
                        background: currentScene?.background,
                        dialogueCount: currentScene?.dialogues?.length,
                        firstDialogue: currentScene?.dialogues?.[0]?.text?.substring(0, 50) + '...'
                    });
                }
            }
        }
        showDialogue();
    });
    
    // Handle choice button clicks
    choice1Btn.addEventListener('click', () => {
        if (waitingForChoice) handleChoice(0);
    });
    
    choice2Btn.addEventListener('click', () => {
        if (waitingForChoice) handleChoice(1);
    });
    
    choice3Btn.addEventListener('click', () => {
        if (waitingForChoice) handleChoice(2);
    });
    
    // Also handle number keys for choices
    document.addEventListener('keydown', (e) => {
        // Block keyboard input during rock transitions
        if (transitionActive) {
            console.log('Rock transition in progress, ignoring keypress');
            return;
        }
        
        if (!waitingForChoice) return;
        
        const key = parseInt(e.key);
        if (key >= 1 && key <= 3) {
            handleChoice(key - 1);
        }
    });
    
    // Animation loop will be started when game begins
    
    // Automatic movement for story scenes
    let sceneTimer = 0;
    let locationJustChanged = false;
    let lastLocation = '';
    
    // Define movement based on current story location
    function updateSceneMovement() {
        sceneTimer++;
        
        // Check if location changed
        if (gameStory.currentLocation !== lastLocation) {
            console.log(`Location changed: ${lastLocation} -> ${gameStory.currentLocation}`);
            locationJustChanged = true;
            lastLocation = gameStory.currentLocation;
            sceneTimer = 0;  // Reset timer for new scene
            
            // Initialize hero lifecycle for new location
            if (gameStory.currentLocation !== 'intro') {
                console.log('Initializing HeroLifecycle for:', gameStory.currentLocation);
                HeroLifecycle.reset(gameStory.currentLocation);
                HeroLifecycle.startEntrance();
                console.log('HeroLifecycle state:', HeroLifecycle.state, 'position:', HeroLifecycle.position);
            }
        }
        
        // Update hero lifecycle
        if (gameStory.currentLocation !== 'intro') {
            HeroLifecycle.update();
            
            // Use HeroLifecycle position instead of manual positioning
            if (HeroLifecycle.isActive()) {
                const heroPos = HeroLifecycle.getPosition();
                heroX = heroPos.x;
                heroY = heroPos.y;
                heroMoving = HeroLifecycle.isMoving();
            }
        }
        
        // Intro scene - hero walks toward mermaid
        if (gameStory.currentLocation === 'intro') {
            if (heroX < 140) {  // Stop well before center
                heroX += 1; // Move hero right slowly
                heroMoving = true;
            } else {
                heroMoving = false;
            }
            
            // Mermaid floating animation with smooth start
            const fadeIn = Math.min(sceneTimer / 60, 1); // Gradually increase over 1 second
            const swimPattern = Math.sin(sceneTimer * 0.03) * fadeIn; // Slower and fades in
            mermaidY = 160 + swimPattern * 8; // Smaller movement range from adjusted ground level
        }
        
        // Club scenes - let HeroLifecycle handle positioning, only override if not using lifecycle
        // (The HeroLifecycle now handles all entrance positioning and timing)
        
        // Finale - celebration movements
        else if (gameStory.currentLocation === 'finale') {
            // Keep hero still, only mermaid dances
            heroY = 160; // Keep hero at ground level
            const dancePattern = Math.sin(sceneTimer * 0.1);
            mermaidY = 160 - dancePattern * 5; // Only mermaid dances
        }
        
        // Sisyphos - lower ground level for both hero and boss
        else if (gameStory.currentLocation.includes('sisyphos')) {
            heroY = 176; // Hero at same level as bouncer at Sisyphos
        }
    }
});