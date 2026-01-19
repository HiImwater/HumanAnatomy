export const sushumnaSVG = `
    <defs>
        <!-- Sushumna Gradients -->
        
        <!-- Outer Sheath - Fire/Agni (NOW GOLDEN/SOLAR as requested) -->
        <linearGradient id="grad-sushumna-outer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#B8860B" stop-opacity="0.4" /> <!-- Dark Goldenrod -->
            <stop offset="30%" stop-color="#FFD700" stop-opacity="0.8" /> <!-- Gold -->
            <stop offset="50%" stop-color="#FFFFE0" stop-opacity="0.9" /> <!-- Light Yellow -->
            <stop offset="70%" stop-color="#FFD700" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#B8860B" stop-opacity="0.4" />
        </linearGradient>

        <!-- Vajra Nadi - Sun/Surya (Golden/Lustrous) -->
        <linearGradient id="grad-sushumna-vajra" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#DAA520" stop-opacity="0.5" />
            <stop offset="50%" stop-color="#FFD700" stop-opacity="1" /> <!-- Gold -->
            <stop offset="100%" stop-color="#DAA520" stop-opacity="0.5" />
        </linearGradient>

        <!-- Chitrini Nadi - Moon/Chandra (Pale White/Nectar) -->
        <linearGradient id="grad-sushumna-chitrini" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#E0FFFF" stop-opacity="0.6" />
            <stop offset="50%" stop-color="#FFFFFF" stop-opacity="1" /> <!-- White -->
            <stop offset="100%" stop-color="#E0FFFF" stop-opacity="0.6" />
        </linearGradient>

        <!-- Flow Texture Pattern -->
         <pattern id="pat-prana-flow" x="0" y="0" width="20" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="50" r="1" fill="#FFFFFF" opacity="0.5">
                <animate attributeName="cy" values="100;0" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.8;0" dur="1s" repeatCount="indefinite" />
            </circle>
        </pattern>
        
        <!-- Glow Filter -->
        <filter id="filter-sushumna-glow" x="-50%" y="-20%" width="200%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <!-- Divine Flower Gradients -->
        <linearGradient id="grad-flower-rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff0000" />
            <stop offset="20%" stop-color="#ff7f00" />
            <stop offset="40%" stop-color="#ffff00" />
            <stop offset="60%" stop-color="#00ff00" />
            <stop offset="80%" stop-color="#0000ff" />
            <stop offset="100%" stop-color="#8b00ff" />
        </linearGradient>
        <radialGradient id="grad-flower-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="60%" stop-color="#ffd700" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#ff8c00" stop-opacity="0" />
        </radialGradient>
    </defs>

    <g id="sushumna-channel" filter="url(#filter-sushumna-glow)">
        <!-- 
            Sushumna Nadi Path
            Extends from Muladhara (Base of Spine/Perineum) to Sahasrara (Crown).
            Approx coordinates: Base Y=1000, Crown Y=0.
        -->

        <!-- 1. Outer Layer: Sushumna (Fire) -->
        <line x1="0" y1="1000" x2="0" y2="-50" stroke="url(#grad-sushumna-outer)" stroke-width="24" stroke-linecap="round">
            <!-- Pulsating Width/Glow -->
            <animate attributeName="stroke-opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
        </line>

        <!-- 2. Middle Layer: Vajra Nadi (Sun/Action) -->
        <line x1="0" y1="1000" x2="0" y2="-50" stroke="url(#grad-sushumna-vajra)" stroke-width="14" stroke-linecap="round">
             <animate attributeName="stroke-width" values="14;16;14" dur="3s" repeatCount="indefinite" />
        </line>

        <!-- 3. Inner Layer: Chitrini Nadi (Moon/Consciousness) -->
        <line x1="0" y1="1000" x2="0" y2="-50" stroke="url(#grad-sushumna-chitrini)" stroke-width="6" stroke-linecap="round">
        </line>

        <!-- 4. Innermost: Brahma Nadi (The Hollow Path/Gateway to Absoute) -->
        <!-- Represented as a thin line of pure light/emptiness -->
        <line x1="0" y1="1000" x2="0" y2="-50" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="1000 0">
            <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="0.5s" repeatCount="indefinite" />
        </line>
        
        <!-- Prana Flow Animation (Upward Current) -->
        <rect x="-8" y="-50" width="16" height="1050" fill="url(#pat-prana-flow)" opacity="0.6" style="pointer-events: none;" />

        <!-- DIVINE FLOWER (Sahasrara/Crown Lotus) -->
        <!-- Poised at the top of the Sushumna (Y = -50) -->
        <g id="sushumna-flower" transform="translate(0, -60)">
             <!-- Gentle Rotation -->
            <animateTransform attributeName="transform" type="rotate" values="0 0 0; 360 0 0" dur="60s" repeatCount="indefinite" additive="sum" />
            
            <!-- Blooming/Breathing Scale -->
            <animateTransform attributeName="transform" type="scale" values="1 1; 1.1 1.1; 1 1" dur="8s" repeatCount="indefinite" additive="sum" />

            <!-- Outer Petals (Rainbow/Prismatic) -->
            <g opacity="0.9">
                <!-- 12 Petals -->
                <g stroke="url(#grad-flower-rainbow)" stroke-width="2" fill="none">
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(0)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(30)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(60)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(90)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(120)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(150)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(180)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(210)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(240)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(270)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(300)" />
                     <path d="M0,0 Q15,-40 0,-80 Q-15,-40 0,0" transform="rotate(330)" />
                </g>
            </g>

            <!-- Inner Petals (Golden) -->
            <g opacity="0.8">
                 <g stroke="#FFD700" stroke-width="1.5" fill="rgba(255,215,0, 0.2)">
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(15)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(45)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(75)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(105)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(135)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(165)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(195)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(225)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(255)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(285)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(315)" />
                     <path d="M0,0 Q10,-25 0,-50 Q-10,-25 0,0" transform="rotate(345)" />
                 </g>
            </g>

            <!-- Core Radiance -->
            <circle r="15" fill="url(#grad-flower-core)">
                 <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
                 <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
        </g>
    </g>
`;
