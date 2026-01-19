
// ═══════════════════════════════════════════════════════════════
// CHAKRA SYSTEM - PROCEDURAL ROSE CURVES (Rhodonea)
// ═══════════════════════════════════════════════════════════════
// Generated using Polar Equation: r = a * cos(k * theta)
//
// "The petals emerge from a single mathematical vibration."
// ═══════════════════════════════════════════════════════════════

// --- Helper Functions ---

/**
 * Generates a Rose Curve path string.
 * @param {number} cx - Center X
 * @param {number} cy - Center Y
 * @param {number} radius - Max radius (amplitude 'a')
 * @param {number} k - Angular frequency (determines petal count)
 * @param {number} rotationOffset - Rotation in radians (default 0)
 * @param {number} resolution - Steps per full circle (default 360)
 * @returns {string} SVG Path D attribute
 */
function getRosePath(cx, cy, radius, k, rotationOffset = 0, resolution = 360) {
    let d = "";
    // Rose curves are closed. Range 0 to 2PI is usually enough, 
    // but for odd k, period is PI (0 to PI creates the shape, PI to 2PI repeats it).
    // For even k, period is 2PI.
    // We'll iterate 0 to 2PI to be safe for all k.

    // Optimization: If k is odd, k petals. If k is even, 2k petals.
    // To ensure full closure and correct shape for all inputs:
    const steps = resolution;
    const period = (k % 2 === 0) ? 2 * Math.PI : Math.PI;
    // Actually, drawing 0 to 2PI covers everything safely (reduces to double draw for odd k).

    for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * 2 * Math.PI;
        const r = radius * Math.cos(k * theta);

        // Convert Polar to Cartesian
        // Arg: theta + rotationOffset
        const x = cx + r * Math.cos(theta + rotationOffset);
        const y = cy + r * Math.sin(theta + rotationOffset);

        if (i === 0) d += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
        else d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    d += " Z";
    return d;
}

/**
 * Generates a Lemniscate (Infinity Symbol) for Ajna
 * r^2 = a^2 * cos(2*theta)
 */
function getLemniscatePath(cx, cy, radius, resolution = 180) {
    let d = "";
    // Lemniscate exists only where cos(2*theta) >= 0
    // roughly -45 to 45 deg, and 135 to 225 deg.

    // We can iterate theta 0 to 2PI and check if r is real.
    let first = true;
    for (let i = 0; i <= resolution; i++) {
        const theta = (i / resolution) * 2 * Math.PI;
        const val = Math.cos(2 * theta);
        if (val >= 0) {
            const r = radius * Math.sqrt(val);
            const x = cx + r * Math.cos(theta);
            const y = cy + r * Math.sin(theta); // Vertical lemniscate? No, cos(2theta) is horizontal.

            if (first) {
                d += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
                first = false;
            } else {
                d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
            }
        } else {
            // Skip checks or close loop logic would be needed for disjoint parts? 
            // Standard loop handles disjointness by drawing lines across? 
            // Actually, Lemniscate passes through 0. 
            // Better to separate into two loops or just handle the jump to 0.
            // Functionally, if we walk smoothly, we pass through 0.
            if (!first) {
                d += ` L ${cx} ${cy}`;
                first = true; // reset for next lobe
            }
        }
    }
    return d;
}

// ═══════════════════════════════════════════════════════════════
// CHAKRA DEFINITIONS
// ═══════════════════════════════════════════════════════════════

// 1. MULADHARA (Root) - 4 Petals
// k=2 (Even) -> 2k = 4 petals.
const muladhara = `
    <!-- MULADHARA (Root) - Red - 4 Petals -->
    <path class="chakra" id="chakra_root" data-name="Root Chakra" data-medical-name="Muladhara"
        data-desc="Location: Perineum • Element: Earth • Focus: Survival, Grounding"
        d="${getRosePath(0, 980, 50, 2, Math.PI / 4)}" 
        fill="url(#grad-root)" stroke="#ff0000" stroke-width="1" style="opacity: 0.9; mix-blend-mode: screen;"
        filter="url(#glow-root)" />
    <!-- Center Point -->
    <circle cx="0" cy="980" r="4" fill="#ff0000" class="chakra-node" />
`;

// 2. SVADHISHSTHANA (Sacral) - 6 Petals
// k=3 (Odd) -> 3 petals. 
// Need 6? Stack two k=3 rosettes, rotated 60 deg (PI/3).
const svadhishthana = `
    <!-- SVADHISHSTHANA (Sacral) - Orange - 6 Petals -->
    <g class="chakra" id="chakra_sacral" style="opacity: 0.9; mix-blend-mode: screen;" 
        data-name="Sacral Chakra" data-medical-name="Svadhishthana"
        data-desc="Location: Pelvis • Element: Water • Focus: Creativity, Emotion">
        <!-- Pass 1 -->
        <path d="${getRosePath(0, 880, 45, 3, 0)}" 
            fill="url(#grad-sacral)" stroke="#ff7f00" stroke-width="0.8" />
        <!-- Pass 2 (Rotated 60deg) -->
        <path d="${getRosePath(0, 880, 45, 3, Math.PI / 3)}" 
            fill="url(#grad-sacral)" stroke="#ff7f00" stroke-width="0.8" />
    </g>
    <circle cx="0" cy="880" r="4" fill="#ff7f00" class="chakra-node" />
`;

// 3. MANIPURA (Solar Plexus) - 10 Petals
// k=5 (Odd) -> 5 petals.
// Need 10? Stack two k=5 rosettes, rotated 36 deg (PI/5).
const manipura = `
    <!-- MANIPURA (Solar Plexus) - Yellow - 10 Petals -->
    <g class="chakra" id="chakra_solar" style="opacity: 0.9; mix-blend-mode: screen;" 
        data-name="Solar Plexus Chakra" data-medical-name="Manipura"
        data-desc="Location: Solar Plexus • Element: Fire • Focus: Willpower, Transformation">
        <path d="${getRosePath(0, 660, 40, 5, 0)}" 
            fill="url(#grad-solar)" stroke="#ffff00" stroke-width="0.8" />
        <path d="${getRosePath(0, 660, 40, 5, Math.PI / 5)}" 
            fill="url(#grad-solar)" stroke="#ffff00" stroke-width="0.8" />
    </g>
    <circle cx="0" cy="660" r="4" fill="#ffff00" class="chakra-node" />
`;

// 4. ANAHATA (Heart) - 12 Petals
// k=6 (Even) -> 2k = 12 petals.
const anahata = `
    <!-- ANAHATA (Heart) - Green - 12 Petals -->
    <g id="anahata-animation-wrapper">
        <animateTransform attributeName="transform" type="scale"
            values="1 1; 1.02 1.02; 1 1"
            dur="0.8s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
            
        <path class="chakra" id="chakra_heart" data-name="Heart Chakra" data-medical-name="Anahata" 
            data-desc="Location: Chest • Element: Air • Focus: Love, Compassion" 
            d="${getRosePath(0, 480, 55, 6, 0)}" 
            fill="url(#grad-heart)" stroke="#00ff00" stroke-width="0.6" style="opacity: 0.9; mix-blend-mode: screen;" />
        <!-- Hexagram Geometry Insert (Star of David) -->
        <path d="M 0 450 L 26 495 L -26 495 Z M 0 510 L -26 465 L 26 465 Z" 
            stroke="#ccffcc" fill="none" class="chakra-geometry" stroke-width="0.5" transform="translate(0, 480)" />
        <circle cx="0" cy="480" r="4" fill="#00ff00" class="chakra-node" />
    </g>
`;

// 5. VISHUDDHA (Throat) - 16 Petals
// k=8 (Even) -> 2k = 16 petals.
const vishuddha = `
    <!-- VISHUDDHA (Throat) - Blue - 16 Petals -->
    <path class="chakra" id="chakra_throat" data-name="Throat Chakra" data-medical-name="Vishuddha" 
        data-desc="Location: Throat • Element: Ether/Sound • Focus: Communication, Truth" 
        d="${getRosePath(0, 260, 35, 8, 0)}" 
        fill="url(#grad-throat)" stroke="#0000ff" stroke-width="0.5" style="opacity: 0.9; mix-blend-mode: screen;" />
    <circle cx="0" cy="260" r="3" fill="#0000ff" class="chakra-node" />
`;

// 6. AJNA (Third Eye) - 2 Petals (Wings)
// User wants "2 large wing petals".
// Lemniscate is perfect (Infinity symbol).
const ajna = `
    <!-- AJNA (Third Eye) - Indigo - 2 Petals -->
    <g class="chakra" id="chakra_third_eye" style="opacity: 0.9; mix-blend-mode: screen;" 
        data-name="Third Eye Chakra" data-medical-name="Ajna"
        data-desc="Location: Brow • Element: Light • Focus: Intuition, Perception">
       <path d="${getLemniscatePath(0, 80, 50)}" 
           fill="url(#grad-ajna)" stroke="#4b0082" stroke-width="1" />
       <!-- Central Node -->
       <circle cx="0" cy="80" r="5" fill="#4b0082" stroke="#fff" stroke-width="0.5"/>
    </g>
`;

// 7. SAHASRARA (Crown) - 1000 Petals (Simulated)
// "3-4 concentric rings of highly dense, repeating geometric patterns"
// We'll use multiple Rose curves with very high k (e.g. 50, 40, 30)
const sahasrara = `
    <!-- SAHASRARA (Crown) - Violet/White -->
    <g class="chakra" id="chakra_crown" style="opacity: 0.8; mix-blend-mode: screen;" 
        data-name="Crown Chakra" data-medical-name="Sahasrara"
        data-desc="Location: Crown • Element: Thought • Focus: Unity, Consciousness">
       <!-- Outer Ring -->
       <path d="${getRosePath(0, -60, 90, 40, 0, 720)}" 
           fill="none" stroke="#e0b0ff" stroke-width="0.3" opacity="0.5" />
       <!-- Middle Ring -->
       <path d="${getRosePath(0, -60, 70, 30, 0, 720)}" 
           fill="none" stroke="#d8bfd8" stroke-width="0.4" opacity="0.6" />
       <!-- Inner Ring -->
       <path d="${getRosePath(0, -60, 50, 20, 0, 720)}" 
           fill="url(#grad-crown)" stroke="#fff" stroke-width="0.5" opacity="0.8" />
       <!-- Core -->
       <circle cx="0" cy="-60" r="10" fill="#fff" />
    </g>
`;


// --- Gradients ---
const defs = `
    <defs>
        <!-- Gradients for "Glowing" Effect (Radial with transparency) -->
        <radialGradient id="grad-root" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:#ff0000;stop-opacity:0.6" />
            <stop offset="100%" style="stop-color:#ff0000;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad-sacral" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:#ff7f00;stop-opacity:0.6" />
            <stop offset="100%" style="stop-color:#ff7f00;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad-solar" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:#ffff00;stop-opacity:0.6" />
            <stop offset="100%" style="stop-color:#ffff00;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad-heart" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:#00ff00;stop-opacity:0.5" />
            <stop offset="100%" style="stop-color:#00ff00;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad-throat" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:#0000ff;stop-opacity:0.5" />
            <stop offset="100%" style="stop-color:#0000ff;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad-ajna" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#4b0082;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#4b0082;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="grad-crown" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#8f00ff;stop-opacity:0" />
        </radialGradient>
        
        <!-- Glow Filters -->
        <filter id="glow-root" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="
                1 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 18 -7" result="glow" />
            <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <!-- (Using standard SVG stroke/fill opacity is usually enough for performance, avoiding too many filters) -->
        <filter id="chakra-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="5" stdDeviation="3" flood-color="#000" flood-opacity="0.5" />
        </filter>
    </defs>
`;

export const chakrasSVG = `
    ${defs}
    <g id="chakra-system-container" filter="url(#chakra-shadow)">
        ${muladhara}
        ${svadhishthana}
        ${manipura}
        ${anahata}
        ${vishuddha}
        ${ajna}
        ${sahasrara}
    </g>
`;
