
// ═══════════════════════════════════════════════════════════════
// 12 PRIMARY MERIDIANS (JING-MAI) - DETAILED INTERNAL & EXTERNAL PATHS
// ═══════════════════════════════════════════════════════════════

export const createMeridians = () => {
    // Helper to create a meridian group with internal/external paths and labels
    const meridianGroup = (id, name, organ, color, externalD, internalD, description, labelPos = "middle") => {
        const pathId = `path_${id}`;

        return `
        <g id="meridian_group_${id}" class="meridian" 
            data-name="${name}" 
            data-medical-name="${organ} Meridian"
            data-desc="${description}"
            style="cursor: pointer;">
            
            <!-- Internal / Deep Branch (Static, Lower Opacity) -->
            ${internalD ? `
            <path id="${pathId}_internal" d="${internalD}" 
                fill="none" stroke="${color}" stroke-width="1.5" 
                stroke-linecap="round" stroke-linejoin="round" opacity="0.3" 
                stroke-dasharray="4, 4" />` : ''}

            <!-- External Base Path (Entire external trajectory) -->
            <path id="${pathId}_base" d="${externalD}" 
                fill="none" stroke="${color}" stroke-width="3" 
                stroke-linecap="round" stroke-linejoin="round" opacity="0.4" 
                filter="url(#meridian-glow-static)" />
            
            <!-- Animated Flow Overlay (External primary branch) -->
            <path id="${pathId}_animated" d="${externalD}" 
                fill="none" stroke="${color}" stroke-width="4.5" 
                stroke-linecap="round" stroke-linejoin="round"
                stroke-dasharray="15, 30" filter="url(#meridian-glow-active)">
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
            </path>

            <!-- Text Labels (Along the path) -->
            <text font-size="14" fill="${color}" font-weight="900" filter="url(#label-shadow)">
                <textPath xlink:href="#${pathId}_base" startOffset="${labelPos === 'start' ? '10%' : labelPos === 'end' ? '80%' : '50%'}">
                    ${organ}
                </textPath>
            </text>
        </g>
    `;
    };

    const acupoint = (id, name, cx, cy, desc) => `
        <circle id="point_${id}" class="acupoint marker" cx="${cx}" cy="${cy}" r="4" 
            fill="white" stroke="#222" stroke-width="1">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            <title>${name}: ${desc}</title>
        </circle>
    `;

    // --- Path Data (A-Pose 15-degree Adjusted) ---

    // 1. LUNG (LU) - Metal - Silver/Light Blueish
    // Ext: Upper chest (-80,350) -> Inner arm -> Thumb (-380,1230)
    const lungL = meridianGroup("lu_l", "Lung Meridian (L)", "Lung", "#A0A0FF",
        "M -80 350 Q -150 360, -200 400 L -250 630 L -305 810 L -360 1050 L -442 1135",
        "M 0 660 L 0 850 L 0 700 L 0 550 L 0 450 L 0 260 M 0 260 Q -40 300, -80 350",
        "Metal • Starts deep in solar plexus, ascends through lungs/throat to upper chest, then down inner arm to thumb.", "middle");
    const lungR = meridianGroup("lu_r", "Lung Meridian (R)", "Lung", "#A0A0FF",
        "M 80 350 Q 150 360, 200 400 L 250 630 L 305 810 L 360 1050 L 442 1135",
        "M 0 660 L 0 850 L 0 700 L 0 550 L 0 450 L 0 260 M 0 260 Q 40 300, 80 350",
        "Metal • Starts deep in solar plexus, ascends through lungs/throat to upper chest, then down inner arm to thumb.", "middle");

    // 2. LARGE INTESTINE (LI) - Metal - Orange/Brown
    const colonL = meridianGroup("li_l", "Colon Meridian (L)", "Colon", "#D2691E",
        "M -418 1180 L -350 1000 L -300 750 L -250 500 L -210 380 L -100 220 L -50 180 L 20 120",
        null,
        "Metal • Begins at index finger, runs up top of arm, over shoulder to neck, ends at opposite side of nose.", "end");
    const colonR = meridianGroup("li_r", "Colon Meridian (R)", "Colon", "#D2691E",
        "M 418 1180 L 350 1000 L 300 750 L 250 500 L 210 380 L 100 220 L 50 180 L -20 120",
        null,
        "Metal • Begins at index finger, runs up top of arm, over shoulder to neck, ends at opposite side of nose.", "end");

    // 3. STOMACH (ST) - Earth - Gold/Yellow
    const stomachL = meridianGroup("st_l", "Stomach Meridian (L)", "Stomach", "#FFD700",
        "M -25 150 Q -30 200, -50 220 L -40 100 M -40 220 L -60 400 L -75 700 L -95 1000 L -120 1350 L -110 1650 L -75 1730",
        null,
        "Earth • Starts below eye, circles jaw, ascends forehead. Branch descends through chest/abdomen to 2nd toe.", "middle");
    const stomachR = meridianGroup("st_r", "Stomach Meridian (R)", "Stomach", "#FFD700",
        "M 25 150 Q 30 200, 50 220 L 40 100 M 40 220 L 60 400 L 75 700 L 95 1000 L 120 1350 L 110 1650 L 75 1730",
        null,
        "Earth • Starts below eye, circles jaw, ascends forehead. Branch descends through chest/abdomen to 2nd toe.", "middle");

    // 4. SPLEEN (SP) - Earth - Red
    const spleenL = meridianGroup("sp_l", "Spleen Meridian (L)", "Spleen", "#FF0000",
        "M -55 1730 L -68 1580 L -82 1420 L -105 1120 L -90 900",
        "M -90 900 Q -50 850, 0 750 L 0 650 M 0 650 Q -40 450, -75 420",
        "Earth • Begins at big toe, travels up inner leg, through spleen/stomach, ends at side of chest.", "start");
    const spleenR = meridianGroup("sp_r", "Spleen (R)", "Spleen", "#FF0000",
        "M 55 1730 L 68 1580 L 82 1420 L 105 1120 L 90 900",
        "M 90 900 Q 50 850, 0 750 L 0 650 M 0 650 Q 40 450, 75 420",
        "Earth • Begins at big toe, travels up inner leg, through spleen/stomach, ends at side of chest.", "start");

    // 5. HEART (HT) - Fire - Lime Green
    const heartL = meridianGroup("ht_l", "Heart Meridian (L)", "Heart", "#00FF00",
        "M -80 480 Q -120 500, -200 550 L -260 750 L -310 950 L -338 1170",
        "M 0 450 L 0 550 L 0 850",
        "Fire • Originates in heart, descends to SI. External branch emerges from armpit to thumb-side of pinky.", "end");
    const heartR = meridianGroup("ht_r", "Heart Meridian (R)", "Heart", "#00FF00",
        "M 80 480 Q 120 500, 200 550 L 260 750 L 310 950 L 338 1170",
        "M 0 450 L 0 550 L 0 850",
        "Fire • Originates in heart, descends to SI. External branch emerges from armpit to thumb-side of pinky.", "end");

    // 6. SMALL INTESTINE (SI) - Fire - Indigo
    const intestineL = meridianGroup("si_l", "Intestine Meridian (L)", "Intestine", "#4B0082",
        "M -338 1170 L -315 950 L -270 750 L -210 540 L -205 408 L -160 300 Q -120 280, -100 240 L -45 100",
        null,
        "Fire • Begins at pinky, travels up back of arm, zig-zags scapula, ascends neck/cheek to ear.", "start");
    const intestineR = meridianGroup("si_r", "Intestine Meridian (R)", "Intestine", "#4B0082",
        "M 338 1170 L 315 950 L 270 750 L 210 540 L 205 408 L 160 300 Q 120 280, 100 240 L 45 100",
        null,
        "Fire • Begins at pinky, travels up back of arm, zig-zags scapula, ascends neck/cheek to ear.", "start");

    // 7. BLADDER (BL)
    const urinaryBladderL = meridianGroup("bl_l", "Urinary Bladder (L)", "Urinary Bladder", "#333333",
        "M -10 100 Q -10 0, -50 -20 L -70 200 L -85 600 L -70 950 L -140 1250 L -110 1550 L -85 1820 L -70 1860 L -65 1740",
        "M -70 200 L -60 600 L -50 900 L -60 1200",
        "Water • Longest meridian. Starts at eye, over head, splits into two branches down the entire back and legs to little toe.", "start");
    const urinaryBladderR = meridianGroup("bl_r", "Urinary Bladder (R)", "Urinary Bladder", "#333333",
        "M 10 100 Q 10 0, 50 -20 L 70 200 L 85 600 L 70 950 L 140 1250 L 110 1550 L 85 1820 L 70 1860 L 65 1740",
        "M 70 200 L 60 600 L 50 900 L 60 1200",
        "Water • Longest meridian. Starts at eye, over head, splits into two branches down the entire back and legs to little toe.", "start");

    // 8. KIDNEY (KI)
    const kidneyL = meridianGroup("ki_l", "Kidney Meridian (L)", "Kidney", "#00FFFF",
        "M -40 1720 L -15 1680 L -35 1450 L -55 1150 L -25 960 L -15 750 L -10 480",
        null,
        "Water • Starts on sole of foot, circles inner ankle, ascends innermost leg, travels up center to collarbone.", "start");
    const kidneyR = meridianGroup("ki_r", "Kidney Meridian (R)", "Kidney", "#00FFFF",
        "M 40 1720 L 15 1680 L 35 1450 L 55 1150 L 25 960 L 15 750 L 10 480",
        null,
        "Water • Starts on sole of foot, circles inner ankle, ascends innermost leg, travels up center to collarbone.", "start");

    // 9. PERICARDIUM (PC) - Fire - Orange
    const pericardiumL = meridianGroup("pc_l", "Pericardium Meridian (L)", "Pericardium", "#FF8C00",
        "M -50 480 Q -150 510, -220 600 L -280 800 L -340 1050 L -404 1200",
        null,
        "Fire • Starts in chest near nipple, travels down middle of inner arm to middle finger.", "middle");
    const pericardiumR = meridianGroup("pc_r", "Pericardium Meridian (R)", "Pericardium", "#FF8C00",
        "M 50 480 Q 150 510, 220 600 L 280 800 L 340 1050 L 404 1200",
        null,
        "Fire • Starts in chest near nipple, travels down middle of inner arm to middle finger.", "middle");

    // 10. TRIPLE BURNER (TB/Warmer) - Fire - Dark Green
    const tripleWarmerL = meridianGroup("tb_l", "Triple Warmer (L)", "Triple Warmer", "#006400",
        "M -373 1182 L -340 1000 L -290 800 L -210 580 L -210 408 L -160 200 Q -110 220, -100 180 Q -120 140, -100 80 Q -80 60, -40 50",
        null,
        "Fire • Begins at ring finger, travels up back of arm, over shoulder, circles the ear, ends at eyebrow.", "middle");
    const tripleWarmerR = meridianGroup("tb_r", "Triple Warmer (R)", "Triple Warmer", "#006400",
        "M 373 1182 L 340 1000 L 290 800 L 210 580 L 210 408 L 160 200 Q 110 220, 100 180 Q 120 140, 100 80 Q 80 60, 40 50",
        null,
        "Fire • Begins at ring finger, travels up back of arm, over shoulder, circles the ear, ends at eyebrow.", "middle");

    // 11. GALL BLADDER (GB)
    const gallBladderL = meridianGroup("gb_l", "Gall Bladder (L)", "Gall Bladder", "#8B4513",
        "M -60 80 Q -80 60, -100 80 Q -120 100, -100 120 C -80 140, -110 180, -135 320 L -140 680 L -150 1000 L -165 1380 L -120 1680 L -65 1735",
        null,
        "Wood • Starts at outer eye, zig-zags across head, side of neck, ribs, and hips, ends at 4th toe.", "middle");
    const gallBladderR = meridianGroup("gb_r", "Gall Bladder (R)", "Gall Bladder", "#8B4513",
        "M 60 80 Q 80 60, 100 80 Q 120 100, 100 120 C 80 140, 110 180, 135 320 L 140 680 L 150 1000 L 165 1380 L 120 1680 L 65 1735",
        null,
        "Wood • Starts at outer eye, zig-zags across head, side of neck, ribs, and hips, ends at 4th toe.", "middle");

    // 12. LIVER (LR)
    const liverL = meridianGroup("lr_l", "Liver Meridian (L)", "Liver", "#1E4DFF",
        "M -58 1730 L -65 1620 L -85 1400 L -115 1150 L -80 1050 Q -50 1050, 0 980 M 0 980 Q -50 950, -80 900 L -60 780 L -55 600",
        null,
        "Wood • Begins at big toe, runs up inside leg, circles genitalia, ascends lower abdomen to ribcage.", "start");
    const liverR = meridianGroup("lr_r", "Liver Meridian (R)", "Liver", "#1E4DFF",
        "M 58 1730 L 65 1620 L 85 1400 L 115 1150 L 80 1050 Q 50 1050, 0 980 M 0 980 Q 50 950, 80 900 L 60 780 L 55 600",
        null,
        "Wood • Begins at big toe, runs up inside leg, circles genitalia, ascends lower abdomen to ribcage.", "start");

    return `
    <defs>
        <filter id="meridians-glow-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
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
        <filter id="meridian-glow-static" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
        <filter id="label-shadow">
            <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.5" flood-color="black" />
        </filter>
        <style>
            .meridian:hover path {
                stroke-width: 6px !important;
                opacity: 1 !important;
            }
            .meridian:hover text {
                font-size: 18px;
                filter: brightness(1.3);
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
                letter-spacing: 1px;
            }
        </style>
    </defs>
    <g class="meridians-container">
        <!-- Paired Meridians (Full trajectories with internal segments) -->
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

        <!-- Key Acupoints -->
        ${acupoint("LU1", "Zhongfu", -80, 350, "Mu point of Lung")}
        ${acupoint("LI4", "Hegu", -360, 1100, "Command point of face")}
        ${acupoint("ST36", "Zusanli", -110, 1350, "Command point of digestive abdomen")}
    </g>
    `;
};
