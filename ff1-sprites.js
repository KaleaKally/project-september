// Final Fantasy 1 Authentic Sprite Functions

function drawFF1Hero(ctx, x, y, scale) {
    const s = scale || 1;
    
    // FF1 Fighter/Warrior sprite - tall and dynamic
    const sprite = [
        // Row 0-3: Hair/Head
        "    ####    ",
        "   ######   ",
        "  ########  ",
        "  ###**###  ",
        // Row 4-7: Face
        "  ##****##  ",
        "  ##*##*##  ",
        "  ##****##  ",
        "   ##**##   ",
        // Row 8-11: Upper body/Cape
        "  ####RR##  ",
        " ##RRRRRR## ",
        "##RRRRRRR###",
        "#RRRWWWRRR##",
        // Row 12-15: Mid body
        "#RRWWWWWRR##",
        "##RWWWWWR###",
        " ##RRRRR##  ",
        "  ##RRRR##  ",
        // Row 16-19: Belt/Lower
        "  ##GGGG##  ",
        "  ##bbbb##  ",
        "  ##bbbb##  ",
        "  ##b##b##  ",
        // Row 20-23: Legs
        "  ##b##b##  ",
        "  ##b##b##  ",
        " ###b##b### ",
        " ##BB##BB## ",
        // Row 24-27: Boots
        " ##BB##BB## ",
        " ##BB##BB## ",
        "###BB##BB###",
        "####    ####"
    ];
    
    const colors = {
        '#': '#000000', // Black outline
        '*': '#FDBCB4', // Skin
        'R': '#DC143C', // Red armor
        'r': '#8B0000', // Dark red
        'W': '#FFFFFF', // White design
        'G': '#FFD700', // Gold belt
        'b': '#4169E1', // Blue pants
        'B': '#8B4513'  // Brown boots
    };
    
    sprite.forEach((row, rowIndex) => {
        [...row].forEach((pixel, colIndex) => {
            if (pixel !== ' ' && colors[pixel]) {
                ctx.fillStyle = colors[pixel];
                ctx.fillRect(
                    (x + colIndex) * s * 3,
                    (y + rowIndex) * s * 3,
                    s * 3,
                    s * 3
                );
            }
        });
    });
}

function drawFF1Mermaid(ctx, x, y, scale) {
    const s = scale || 1;
    
    // FF1 style mermaid - tall with flowing hair
    const sprite = [
        // Row 0-3: Blue hair
        "   ######   ",
        "  ########  ",
        " ##########",
        " ###****###",
        // Row 4-7: Face
        " ##******##",
        " ##**##**##",
        " ##******##",
        "  ##****## ",
        // Row 8-11: Hair flow + upper body
        " ####PP### ",
        "###PPPPPP##",
        "##PPPPPPPP#",
        "#PPPPPPPP##",
        // Row 12-15: Body
        "#PPPPPPPP##",
        "##PPPPPP## ",
        " ##PPPP##  ",
        "  ##TT##   ",
        // Row 16-19: Tail start
        "  ##TTT##  ",
        " ##TTTTT## ",
        " ##TTTTT## ",
        "##TTTTTTT##",
        // Row 20-23: Tail middle
        "##TTTTTTT##",
        "#TTTTTTTT##",
        "#TTTTTTTT##",
        "##TTTTTT## ",
        // Row 24-27: Tail fin
        "###TTTT### ",
        "####TT#### ",
        "#####T#####",
        "###  ##  ###"
    ];
    
    const colors = {
        '#': '#4A90E2', // Blue hair
        '*': '#FDBCB4', // Skin
        'P': '#9B59B6', // Purple top
        'T': '#4ECDC4', // Teal tail
        ' ': null
    };
    
    sprite.forEach((row, rowIndex) => {
        [...row].forEach((pixel, colIndex) => {
            if (pixel !== ' ' && colors[pixel]) {
                ctx.fillStyle = colors[pixel];
                ctx.fillRect(
                    (x + colIndex) * s * 3,
                    (y + rowIndex) * s * 3,
                    s * 3,
                    s * 3
                );
            }
        });
    });
}