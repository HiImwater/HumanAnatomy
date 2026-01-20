
// ═══════════════════════════════════════════════════════════════
// 12 PRIMARY MERIDIANS (JING-MAI) - ANATOMICAL ALIGNMENT (V-TAPER A-POSE)
// ═══════════════════════════════════════════════════════════════
// Coordinates mapped to organs and Android Male skeletal frame.
// Foot terminals updated to reach Y=2100 (distal phalanges).
// ═══════════════════════════════════════════════════════════════

export const createMeridians = () => {
    // Helper to create a meridian group with internal/external paths and labels
    const meridianGroup = (id, organ, color, externalD, internalD, description, labelOffset = "45%") => {
        const pathId = `path_${id}`;

        return `
        <g id="meridian_group_${id}" class="meridian" 
            data-name="${organ}" 
            data-medical-name="${organ} Meridian"
            data-desc="${description}"
            style="cursor: pointer;">
            
            <!-- Internal / Deep Branch (Static, Dashed) -->
            ${internalD ? `
            <path id="${pathId}_internal" d="${internalD}" 
                fill="none" stroke="${color}" stroke-width="1.8" 
                stroke-linecap="round" stroke-linejoin="round" opacity="0.35" 
                stroke-dasharray="5, 8" />` : ''}

            <!-- External Base Path (Entire external trajectory) -->
            <path id="${pathId}_base" d="${externalD}" 
                fill="none" stroke="${color}" stroke-width="3.5" 
                stroke-linecap="round" stroke-linejoin="round" opacity="0.4" 
                filter="url(#meridian-glow-static)" />
            
            <!-- Animated Flow Overlay (External primary branch) -->
            <path id="${pathId}_animated" d="${externalD}" 
                fill="none" stroke="${color}" stroke-width="5" 
                stroke-linecap="round" stroke-linejoin="round"
                stroke-dasharray="20, 40" filter="url(#meridian-glow-active)">
                <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
            </path>

            <!-- Text Labels (Along the path) -->
            <text font-size="16" fill="${color}" font-weight="900" filter="url(#label-shadow)">
                <textPath xlink:href="#${pathId}_base" startOffset="${labelOffset}">
                    ${organ}
                </textPath>
            </text>
        </g>
    `;
    };

    const acupoint = (id, name, cx, cy, desc) => `
        <circle id="point_${id}" class="acupoint marker" cx="${cx}" cy="${cy}" r="5" 
            fill="white" stroke="#000" stroke-width="1.5">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
            <title>${name}: ${desc}</title>
        </circle>
    `;

    // --- Path Data (Aligned to Organs & Bone Landmarks) ---

    // 1. LUNG (LU) - Metal - Silver/Lavender - Ends Thumb (-442,1135)
    const lungL = meridianGroup("lu_l", "Lung", "#A0A0FF",
        "M -80 350 Q -150 360, -200 400 L -250 630 L -305 810 L -360 1050 L -442 1135",
        "M 0 630 L 0 850 L 0 600 Q -40 550, -80 450 Q -40 350, 0 260 M 0 260 Q -40 300, -80 350",
        "Metal • Starts deep in solar plexus, descends to LI, winds up to lungs/throat, emerges upper chest, down inner arm to thumb.");
    const lungR = meridianGroup("lu_r", "Lung", "#A0A0FF",
        "M 80 350 Q 150 360, 200 400 L 250 630 L 305 810 L 360 1050 L 442 1135",
        "M 0 630 L 0 850 L 0 600 Q 40 550, 80 450 Q 40 350, 0 260 M 0 260 Q 40 300, 80 350",
        "Metal • Starts deep in solar plexus, descends to LI, winds up to lungs/throat, emerges upper chest, down inner arm to thumb.");

    // 2. LARGE INTESTINE (Colon) - Metal - Orange/Brown - Index Finger (-418,1180) to Nose
    const colonL = meridianGroup("li_l", "Colon", "#D2691E",
        "M -418 1180 L -350 1000 L -300 750 L -250 500 L -210 380 L -100 220 L -50 180 L 20 120",
        "M 20 120 L 0 240 L 0 350 L 0 600 L 0 800",
        "Metal • Begins at index finger, runs up top of arm, over shoulder to neck, ends at opposite side of nose.");
    const colonR = meridianGroup("li_r", "Colon", "#D2691E",
        "M 418 1180 L 350 1000 L 300 750 L 250 500 L 210 380 L 100 220 L 50 180 L -20 120",
        "M -20 120 L 0 240 L 0 350 L 0 600 L 0 800",
        "Metal • Begins at index finger, runs up top of arm, over shoulder to neck, ends at opposite side of nose.");

    // 3. STOMACH (ST) - Earth - Gold/Yellow - Face to 2nd Toe (Ends ~ -90, 2100)
    const stomachL = meridianGroup("st_l", "Stomach", "#FFD700",
        "M -25 150 Q -30 200, -50 220 L -40 100 M -40 220 L -60 400 L -75 600 L -95 1000 L -120 1350 L -110 1650 L -120 1860 L -100 2000 L -92 2100",
        "M -75 600 L -40 600",
        "Earth • Starts below eye, jaw to forehead. Returns down neck/chest/abdomen to front of leg and 2nd toe.");
    const stomachR = meridianGroup("st_r", "Stomach", "#FFD700",
        "M 25 150 Q 30 200, 50 220 L 40 100 M 40 220 L 60 400 L 75 600 L 95 1000 L 120 1350 L 110 1650 L 120 1860 L 100 2000 L 92 2100",
        "M 75 600 L 40 600",
        "Earth • Starts below eye, jaw to forehead. Returns down neck/chest/abdomen to front of leg and 2nd toe.");

    // 4. SPLEEN (SP) - Earth - Red - Big Toe (Starts ~ -80, 2090) to Chest
    const spleenL = meridianGroup("sp_l", "Spleen", "#FF0000",
        "M -80 2090 L -90 2000 L -110 1880 L -80 1730 L -90 1580 L -105 1420 L -130 1120 L -115 900",
        "M -115 900 L -105 750 L -100 600 L -40 600 M -100 600 L -120 420",
        "Earth • Begins at inner big toe, travels up inner leg, enters abdomen to spleen/stomach, ends below armpit.");
    const spleenR = meridianGroup("sp_r", "Spleen", "#FF0000",
        "M 80 2090 L 90 2000 L 110 1880 L 80 1730 L 90 1580 L 105 1420 L 130 1120 L 115 900",
        "M 115 900 L 105 750 L 100 600 L 40 600 M 100 600 L 120 420",
        "Earth • Begins at inner big toe, travels up inner leg, enters abdomen to spleen/stomach, ends below armpit.");

    // 5. HEART (HT) - Fire - Lime Green - Heart to Pinky (-338,1170)
    const heartL = meridianGroup("ht_l", "Heart", "#00FF00",
        "M -80 480 Q -120 500, -200 550 L -260 750 L -310 950 L -338 1170",
        "M 0 470 L 0 550 L 0 800",
        "Fire • Originates in heart, descends to SI. External branch emerges from armpit, down innermost arm to pinky.");
    const heartR = meridianGroup("ht_r", "Heart", "#00FF00",
        "M 80 480 Q 120 500, 200 550 L 260 750 L 310 950 L 338 1170",
        "M 0 470 L 0 550 L 0 800",
        "Fire • Originates in heart, descends to SI. External branch emerges from armpit, down innermost arm to pinky.");

    // 6. SMALL INTESTINE (SI) - Fire - Indigo - Pinky (-338,1170) to Ear
    const intestineL = meridianGroup("si_l", "Intestine", "#4B0082",
        "M -338 1170 L -315 950 L -270 750 L -210 540 L -205 408 L -160 300 Q -120 280, -100 240 L -45 100",
        "M -205 408 Q -100 450, 0 800",
        "Fire • Begins at pinky, up back of arm through scapula zig-zag to the cheek and ear.");
    const intestineR = meridianGroup("si_r", "Intestine", "#4B0082",
        "M 338 1170 L 315 950 L 270 750 L 210 540 L 205 408 L 160 300 Q 120 280, 100 240 L 45 100",
        "M 205 408 Q 100 450, 0 800",
        "Fire • Begins at pinky, up back of arm through scapula zig-zag to the cheek and ear.");

    // 7. BLADDER (BL) - Water - Black - Eye to Little Toe (Ends ~ -135, 2065)
    const urinaryBladderL = meridianGroup("bl_l", "Bladder", "#333333",
        "M -10 100 Q -10 0, -50 -20 L -70 200 L -85 600 L -70 950 L -140 1250 L -110 1550 L -120 1860 L -140 1980 L -138 2065",
        "M -70 200 L -50 600 L -40 950 L -40 1450 L -50 1700 L -60 1960",
        "Water • Longest meridian. Starts at eye, over head, splits down back and back of legs to little toe.");
    const urinaryBladderR = meridianGroup("bl_r", "Bladder", "#333333",
        "M 10 100 Q 10 0, 50 -20 L 70 200 L 85 600 L 70 950 L 140 1250 L 110 1550 L 120 1860 L 140 1980 L 138 2065",
        "M 70 200 L 50 600 L 40 950 L 40 1450 L 50 1700 L 60 1960",
        "Water • Longest meridian. Starts at eye, over head, splits down back and back of legs to little toe.");

    // 8. KIDNEY (KI) - Water - Cyan - Sole (Starts ~ -100, 1960) to Collarbone
    const kidneyL = meridianGroup("ki_l", "Kidney", "#00FFFF",
        "M -100 1960 L -120 1940 L -90 1880 L -50 1750 L -65 1450 L -80 1150 L -35 960 L -10 750 L -10 340",
        "M -10 960 L -10 650 M -10 340 L 0 250",
        "Water • Starts in hollow of sole, circles ankle, up inner leg and midline to collarbone.");
    const kidneyR = meridianGroup("ki_r", "Kidney", "#00FFFF",
        "M 100 1960 L 120 1940 L 90 1880 L 50 1750 L 65 1450 L 80 1150 L 35 960 L 10 750 L 10 340",
        "M 10 960 L 10 650 M 10 340 L 0 250",
        "Water • Starts in hollow of sole, circles ankle, up inner leg and midline to collarbone.");

    // 9. PERICARDIUM (PC) - Fire - Orange - Chest to Middle Finger (-429,1215)
    const pericardiumL = meridianGroup("pc_l", "Pericardium", "#FF8C00",
        "M -100 430 Q -150 480, -220 600 L -280 800 L -340 1050 L -429 1215",
        "M -100 430 Q -50 430, 0 450 L 0 650",
        "Fire • Starts in chest near nipple, travels down middle of inner arm to middle finger.");
    const pericardiumR = meridianGroup("pc_r", "Pericardium", "#FF8C00",
        "M 100 430 Q 150 480, 220 600 L 280 800 L 340 1050 L 429 1215",
        "M 100 430 Q 50 430, 0 450 L 0 650",
        "Fire • Starts in chest near nipple, travels down middle of inner arm to middle finger.");

    // 10. TRIPLE B. (TB) - Fire - Dark Green - Ring Finger (-398,1197) to Eyebrow
    const tripleWarmerL = meridianGroup("tb_l", "Warmer", "#006400",
        "M -398 1197 L -340 1000 L -290 800 L -210 580 L -210 408 L -160 200 Q -110 220, -100 180 Q -120 140, -100 80 Q -80 60, -60 50",
        "M -210 408 L -180 340 M -100 180 L 0 650",
        "Fire • Begins at ring finger, through shoulder and around ear to outer eyebrow.");
    const tripleWarmerR = meridianGroup("tb_r", "Warmer", "#006400",
        "M 398 1197 L 340 1000 L 290 800 L 210 580 L 210 408 L 160 200 Q 110 220, 100 180 Q 120 140, 100 80 Q 80 60, 60 50",
        "M 210 408 L 180 340 M 100 180 L 0 650",
        "Fire • Begins at ring finger, through shoulder and around ear to outer eyebrow.");

    // 11. GALLBLADDER (GB) - Wood - Brown - Eye to 4th Toe (Ends ~ -126, 2079)
    const gallBladderL = meridianGroup("gb_l", "Gall", "#8B4513",
        "M -60 80 Q -80 60, -100 80 Q -120 100, -100 120 C -80 140, -110 180, -135 320 L -140 680 L -150 1000 L -165 1380 L -145 1680 L -145 1980 L -126 2079",
        "M -140 680 L 60 635",
        "Wood • Starts at eye corner, zig-zags across head and side of neck/ribs/hips to outside of leg and 4th toe.");
    const gallBladderR = meridianGroup("gb_r", "Gall", "#8B4513",
        "M 60 80 Q 80 60, 100 80 Q 120 100, 100 120 C 80 140, 110 180, 135 320 L 140 680 L 150 1000 L 165 1380 L 145 1680 L 145 1980 L 126 2079",
        "M 140 680 L 60 635",
        "Wood • Starts at eye corner, zig-zags across head and side of neck/ribs/hips to outside of leg and 4th toe.");

    // 12. LIVER (LR) - Wood - Royal Blue - Big Toe (Starts ~ -85, 2093) to Ribs
    const liverL = meridianGroup("lr_l", "Liver", "#1E4DFF",
        "M -85 2093 L -95 2000 L -115 1880 L -85 1620 L -105 1400 L -130 1150 L -105 1050 Q -30 1100, 0 1040 M 0 1040 Q -30 980, -90 900 L -75 780 L -55 600",
        "M -55 600 L -50 560",
        "Wood • Begins at inner big toe, up inside leg, circles genitalia, ends at lower ribcage.");
    const liverR = meridianGroup("lr_r", "Liver", "#1E4DFF",
        "M 85 2093 L 95 2000 L 115 1880 L 85 1620 L 105 1400 L 130 1150 L 105 1050 Q 30 1100, 0 1040 M 0 1040 Q 30 980, 90 900 L 75 780 L 55 600",
        "M 55 600 L 50 560",
        "Wood • Begins at inner big toe, up inside leg, circles genitalia, ends at lower ribcage.");

    return `
    <defs>
        <filter id="meridians-glow-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 25 -10" result="glow" />
            <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <filter id="meridian-glow-static" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
        <filter id="label-shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="black" flood-opacity="0.9" />
        </filter>
        <style>
            .meridian:hover path {
                stroke-width: 8px !important;
                opacity: 1 !important;
                filter: brightness(1.2);
            }
            .meridian:hover text {
                font-size: 22px;
                filter: brightness(1.5);
            }
            .meridians-container {
                pointer-events: none;
            }
            .meridian {
                pointer-events: all;
            }
            text {
                user-select: none;
                pointer-events: none;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
        </style>
    </defs>
    <g class="meridians-container">
        <!-- Paired Meridians (Full trajectories reaching toes Y=2100) -->
        ${lungL} ${lungR}
        ${pericardiumL} ${pericardiumR}
        ${heartL} ${heartR}
        ${colonL} ${colonR}
        ${tripleWarmerL} ${tripleWarmerR}
        ${intestineL} ${intestineR}
        ${urinaryBladderL} ${urinaryBladderR}
        ${stomachL} ${stomachR}
        ${liverL} ${liverR}
        ${spleenL} ${spleenR}
        ${kidneyL} ${kidneyR}
        ${gallBladderL} ${gallBladderR}

        <!-- Representative Acupoints -->
        ${acupoint("SP1", "Yinbai", -80, 2090, "Hidden White - Spleen Origin")}
        ${acupoint("ST45", "Lidui", -92, 2100, "Severe Mouth - Stomach End")}
        ${acupoint("LR1", "Dadun", -85, 2093, "Great Esteem - Liver Origin")}
        ${acupoint("KI1", "Yongquan", -100, 1960, "Gushing Spring - Kidney Origin")}
        ${acupoint("BL67", "Zhiyin", -138, 2065, "Reaching Yin - Bladder End")}
        ${acupoint("GB44", "Zuqiaoyin", -126, 2079, "Foot Portal Yin - Gallbladder End")}
    </g>
    `;
};
