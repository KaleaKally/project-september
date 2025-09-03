# Sprite Requirements for Flavio's Birthday Quest

## Game Style
- Game Boy Advance / Final Fantasy 1 pixel art style
- 16-bit color palette
- Clear pixel boundaries
- Canvas size: 480x320px

## Required Sprites

### Backgrounds (480x320px)
1. **portal-scene.png** - Mystical cave with glowing portal
2. **urban-spree.png** - Industrial warehouse club
3. **kater-blau.png** - Riverside wooden club  
4. **heideglueehen.png** - Forest clearing with bonfire
5. **sisyphos.png** - Abandoned factory rave
6. **crystal-room.png** - Final chamber with 4 gems

### Character Sprites
#### Hero (Flavio) - 48x64px
- ✓ hero.png (standing)
- ✓ hero-walking.png (walking animation)
- hero-attack.png (sword swing)
- hero-hurt.png (damage reaction)
- hero-victory.png (celebration pose)

#### Mermaid (Kalea) - 48x64px  
- ✓ mermaid.png (standing)
- mermaid-talking.png (animated talking)
- mermaid-casting.png (magic spell casting)

### Monster Sprites
1. **currywurst-gargoyle.png** (64x64px) - Stone creature with sausage features
2. **doener-titan.png** (64x80px) - Massive kebab warrior
3. **spaetzle-serpent.png** (80x64px) - Noodle dragon
4. **techno-basilisk.png** (64x64px) - Electronic beast with speakers

### Item Sprites (32x32px)
#### Gems
- gem-energy.png (red)
- gem-creativity.png (purple)  
- gem-connection.png (blue)
- gem-wisdom.png (green)

#### Effects
- sparkle.png (8-frame animation)
- explosion.png (6-frame animation)
- heal.png (4-frame animation)

## Animation Frame Guidelines
- Walking: 2-4 frames
- Attacking: 3-4 frames
- Idle breathing: 2 frames
- Effect animations: 4-8 frames

## Color Palette Suggestions
- Use limited colors per sprite (8-16 colors)
- Maintain consistent shading style
- Dark outlines for clarity
- Avoid pure black except for outlines

## File Format
- PNG with transparency
- Indexed color mode recommended
- Keep file sizes small for web loading

## Integration Notes
- Sprites will be loaded as single images (not sprite sheets)
- Game engine handles scaling and pixelation
- Test on both desktop and mobile devices