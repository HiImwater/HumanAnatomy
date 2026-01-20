export const egyptianLayersSVG = {
    // 4. Shuyet (The Shadow) - Underlay - Enhanced with smoky turbulence
    shuyet: `
        <defs>
            <filter id="shadow-filter" x="-100%" y="-100%" width="300%" height="300%">
                <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G"/>
                <feGaussianBlur stdDeviation="8" result="blur"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0"/>
            </filter>
            <linearGradient id="shadow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stop-color="#000" stop-opacity="0.9"/>
               <stop offset="60%" stop-color="#1a1a2e" stop-opacity="0.5"/>
               <stop offset="100%" stop-color="#000" stop-opacity="0.1"/>
            </linearGradient>
        </defs>
        <g id="egyptian-shuyet" class="egyptian-layer" style="opacity: 0.7; filter: url(#shadow-filter);" data-name="Shuyet" data-medical-name="The Shadow" data-desc="The black silhouette containing the 'essence' of the individual. It was believed to always be present, following the body.">
             <!-- Multi-layered shadow for depth -->
             <path d="M-60,1700 Q-80,900 -70,400 Q-60,100 0,50 Q60,100 70,400 Q80,900 60,1700 Z" fill="url(#shadow-gradient)" transform="skewX(-12) translate(40, 30)"/>
             <path d="M-50,1650 Q-70,850 -60,380 Q-50,120 0,80 Q50,120 60,380 Q70,850 50,1650 Z" fill="#000" fill-opacity="0.3" transform="skewX(-8) translate(25, 20)"/>
        </g>
    `,

    // 7. Ren (The Name/Identity) - Underlay - Enhanced with hieroglyphs
    ren: `
        <defs>
            <pattern id="gold-texture" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="4" height="4" fill="#D4AF37"/>
                <circle cx="2" cy="2" r="0.5" fill="#C5A028" opacity="0.5"/>
            </pattern>
            <linearGradient id="cartouche-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F4E4BA"/>
                <stop offset="50%" stop-color="#D4AF37"/>
                <stop offset="100%" stop-color="#A67C00"/>
            </linearGradient>
        </defs>
        <g id="egyptian-ren" class="egyptian-layer" data-name="Ren" data-medical-name="The True Name" data-desc="The vibration of the individual's true name. As long as the name was spoken, the person would continue to exist.">
             <!-- Cartouche Border with animated stroke -->
             <rect x="-360" y="-90" width="720" height="1980" rx="110" ry="110" 
                fill="none" stroke="url(#cartouche-gold)" stroke-width="12">
                <animate attributeName="stroke-dashoffset" from="6000" to="0" dur="8s" fill="freeze"/>
                <animate attributeName="stroke-dasharray" values="0,6000;6000,0" dur="8s" fill="freeze"/>
             </rect>
             <!-- Inner border line -->
             <rect x="-345" y="-75" width="690" height="1950" rx="100" ry="100" 
                fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="15,8"/>
             
             <!-- Hieroglyph decorations along the top -->
             <!-- Ankh Symbol -->
             <g transform="translate(0, -60)">
                 <ellipse cx="0" cy="-25" rx="15" ry="20" fill="none" stroke="#D4AF37" stroke-width="4"/>
                 <line x1="0" y1="-5" x2="0" y2="35" stroke="#D4AF37" stroke-width="4"/>
                 <line x1="-20" y1="10" x2="20" y2="10" stroke="#D4AF37" stroke-width="4"/>
             </g>
             <!-- Eye of Horus (simplified) - Left -->
             <g transform="translate(-120, -60) scale(0.6)">
                 <path d="M-30,0 Q0,-20 30,0 Q0,15 -30,0 Z" fill="none" stroke="#D4AF37" stroke-width="3"/>
                 <circle cx="0" cy="0" r="8" fill="#D4AF37"/>
                 <path d="M0,15 L-10,40 M0,15 Q15,25 20,40" stroke="#D4AF37" stroke-width="3" fill="none"/>
             </g>
             <!-- Eye of Horus - Right -->
             <g transform="translate(120, -60) scale(0.6)">
                 <path d="M-30,0 Q0,-20 30,0 Q0,15 -30,0 Z" fill="none" stroke="#D4AF37" stroke-width="3"/>
                 <circle cx="0" cy="0" r="8" fill="#D4AF37"/>
                 <path d="M0,15 L10,40 M0,15 Q-15,25 -20,40" stroke="#D4AF37" stroke-width="3" fill="none"/>
             </g>
        </g>
    `,

    // 1. Khat (Physical) - Managed by existing skeleton toggle
    khat: '',

    // 2. Ka (Vital Double) - Overlay - Uses actual body silhouette
    ka: `
        <defs>
            <filter id="ka-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="12" result="blur"/>
                <feFlood flood-color="#00ffcc" flood-opacity="0.6" result="color"/>
                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                <feMerge>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <!-- Accurate body silhouette path matching skeleton -->
            <path id="ka-body-silhouette" d="
                M 0, -55
                C 50, -55 105, -25 105, 80
                C 105, 150 85, 190 60, 210
                C 70, 250 130, 310 200, 335
                C 215, 350 220, 380 220, 420
                C 220, 480 235, 600 255, 685
                C 265, 750 290, 850 320, 915
                C 340, 950 370, 980 370, 1050
                C 375, 1080 350, 1110 310, 1120
                C 280, 1130 200, 1100 200, 1060
                C 200, 1020 220, 950 240, 900
                L 180, 685
                L 175, 480
                C 175, 520 175, 489 175, 489
                L 145, 630
                C 150, 700 180, 750 180, 835
                C 180, 900 115, 1400 120, 1485
                C 125, 1550 135, 1650 140, 1690
                L 150, 1870
                L 145, 2050
                C 145, 2080 120, 2100 80, 2100
                C 40, 2100 20, 2080 20, 2000
                L 40, 1800
                L 50, 1485
                L 30, 1000
                L -30, 1000
                L -50, 1485
                L -40, 1800
                L -20, 2000
                C -20, 2080 -40, 2100 -80, 2100
                C -120, 2100 -145, 2080 -145, 2050
                L -150, 1870
                L -140, 1690
                C -135, 1650 -125, 1550 -120, 1485
                C -115, 1400 -180, 900 -180, 835
                C -180, 750 -150, 700 -145, 630
                L -175, 489
                C -175, 489 -175, 520 -175, 480
                L -180, 685
                L -240, 900
                C -220, 950 -200, 1020 -200, 1060
                C -200, 1100 -280, 1130 -310, 1120
                C -350, 1110 -375, 1080 -370, 1050
                C -370, 980 -340, 950 -320, 915
                C -290, 850 -265, 750 -255, 685
                C -235, 600 -220, 480 -220, 420
                C -220, 380 -215, 350 -200, 335
                C -130, 310 -70, 250 -60, 210
                C -85, 190 -105, 150 -105, 80
                C -105, -25 -50, -55 0, -55
                Z
            " />
        </defs>
        <g id="egyptian-ka" class="egyptian-layer" style="filter: url(#ka-glow); opacity: 0.65;" data-name="Ka" data-medical-name="The Vital Double" data-desc="A 'ghost' duplicate that requires food and drink (offerings) to survive. Created at birth and released at death.">
            <!-- Full body silhouette offset slightly as the "double" -->
            <g transform="translate(8, 8)">
                <use href="#ka-body-silhouette" fill="none" stroke="#00ffcc" stroke-width="4"/>
            </g>
            
            <!-- Ka Symbol (Upraised Arms) floating above head -->
            <g transform="translate(0, -20)">
                <path d="M-25,0 L-25,-35 C-25,-50 -35,-65 -50,-75 M25,0 L25,-35 C25,-50 35,-65 50,-75" 
                    stroke="#00ffcc" stroke-width="4" fill="none" stroke-linecap="round"/>
                <circle cx="0" cy="5" r="10" fill="#00ffcc" fill-opacity="0.3" stroke="#00ffcc" stroke-width="2"/>
            </g>
            
            <!-- Breathing animation on the whole group -->
            <animateTransform attributeName="transform" type="scale" values="1,1;1.015,1.01;1,1" dur="4s" repeatCount="indefinite" additive="sum"/>
        </g>
    `,

    // 3. Ba (Personality/Soul Bird) - Overlay - GLORIOUS High-Fidelity
    ba: `
        <defs>
            <linearGradient id="lapis-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1c3b70"/> <!-- Lapis Lazuli -->
                <stop offset="50%" stop-color="#cfb53b"/> <!-- Gold -->
                <stop offset="100%" stop-color="#1c3b70"/>
            </linearGradient>
            <radialGradient id="sun-gold" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fffebb"/> <!-- Bright Center -->
                <stop offset="40%" stop-color="#ffcc00"/> <!-- Gold -->
                <stop offset="100%" stop-color="#b8860b"/> <!-- Dark Gold -->
            </radialGradient>
            <linearGradient id="feather-detail" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#2a9df4"/> <!-- Turquoise -->
                <stop offset="100%" stop-color="#1c3b70"/> <!-- Lapis -->
            </linearGradient>
            <filter id="ba-divine-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feFlood flood-color="#ffd700" flood-opacity="0.6" result="color"/>
                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                <feMerge>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g id="egyptian-ba" class="egyptian-layer" data-name="Ba" data-medical-name="The Personality Soul" data-desc="The glorious, free-roaming aspect of the soul. A human-headed falcon of splendor, tethered to the heart." style="filter: url(#ba-divine-glow);">
             
             <!-- Glowing Tether to Heart -->
             <path d="M-160,260 Q-80,450 0,420" fill="none" class="ba-string" stroke="#ff4444" stroke-width="2.5" stroke-dasharray="1,3" stroke-linecap="round">
                 <animate attributeName="stroke-dashoffset" values="0; -40" dur="2s" repeatCount="indefinite"/>
                 <animate attributeName="opacity" values="0.4; 1; 0.4" dur="3s" repeatCount="indefinite"/>
             </path>

             <!-- The Ba Bird (Positioned above Left Shoulder) -->
             <g transform="translate(-160, 260) scale(0.55)"> <!-- Slightly scaled up for presence -->
                 
                 <!-- Aura -->
                 <circle cx="0" cy="20" r="60" fill="url(#sun-gold)" opacity="0.15">
                    <animate attributeName="r" values="60; 65; 60" dur="4s" repeatCount="indefinite"/>
                 </circle>

                 <!-- Tail Feathers (Fan) -->
                 <path d="M-15,60 L-25,90 L0,95 L25,90 L15,60 Z" fill="url(#feather-detail)" stroke="#cfb53b" stroke-width="1"/>
                 
                 <!-- Wings (Majestic Spread) -->
                 <!-- Left Wing -->
                 <g transform="rotate(10, -20, 30)">
                    <path d="M-20,30 Q-60,10 -110,20 Q-100,50 -60,60 Q-40,55 -20,50 Z" fill="url(#lapis-gold)" stroke="#cfb53b" stroke-width="1.5"/>
                    <!-- Individual Feathers -->
                    <path d="M-20,30 Q-60,10 -110,20" fill="none" stroke="#cfb53b" stroke-width="0.5" stroke-dasharray="2,2"/>
                 </g>
                 <!-- Right Wing -->
                 <g transform="rotate(-10, 20, 30)">
                    <path d="M20,30 Q60,10 110,20 Q100,50 60,60 Q40,55 20,50 Z" fill="url(#lapis-gold)" stroke="#cfb53b" stroke-width="1.5"/>
                 </g>

                 <!-- Body (Falcon) -->
                 <ellipse cx="0" cy="40" rx="22" ry="30" fill="url(#sun-gold)" stroke="#b8860b" stroke-width="2"/>
                 <!-- Chest Plumage -->
                 <path d="M-10,30 Q0,45 10,30" fill="none" stroke="#b8860b" stroke-width="1" opacity="0.5"/>
                 <path d="M-12,38 Q0,53 12,38" fill="none" stroke="#b8860b" stroke-width="1" opacity="0.5"/>

                 <!-- Human Head -->
                 <circle cx="0" cy="5" r="16" fill="#dcbfa6" stroke="#8b4513" stroke-width="1"/>
                 
                 <!-- Nemes Headdress (Royal) -->
                 <path d="M-16,5 Q-20,-15 0,-20 Q20,-15 16,5 Q22,20 28,30 L20,35 Q15,20 12,15 L-12,15 Q-15,20 -20,35 L-28,30 Q-22,20 -16,5" 
                       fill="#1c3b70" stroke="#ffd700" stroke-width="2"/>
                 <!-- Gold stripes on Headdress -->
                 <path d="M-14,-5 L14,-5 M-15,0 L15,0 M-16,5 L16,5" stroke="#ffd700" stroke-width="1.5" fill="none"/>

                 <!-- Face Details -->
                 <path d="M-10,25 Q0,30 10,25" fill="none" stroke="#cfb53b" stroke-width="2"/> <!-- Collar -->
                 <ellipse cx="-5" cy="4" rx="2" ry="1.5" fill="#000"/> <!-- Eye -->
                 <ellipse cx="5" cy="4" rx="2" ry="1.5" fill="#000"/> <!-- Eye -->
                 <path d="M-8,2 Q-5,0 -2,2" stroke="#000" stroke-width="0.5" fill="none"/> <!-- Brow -->
                 <path d="M8,2 Q5,0 2,2" stroke="#000" stroke-width="0.5" fill="none"/> <!-- Brow -->
                 
                 <!-- Beard (Pharaonic) -->
                 <path d="M-2,20 L-1,28 L1,28 L2,20 Z" fill="#1c3b70"/>
             </g>
        </g>
    `,

    // 6. Ib (Heart) - Overlay - Small heart-sized scarab, no animation
    ib: `
        <defs>
            <radialGradient id="scarab-shell" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stop-color="#DAA520"/>
                <stop offset="60%" stop-color="#B8860B"/>
                <stop offset="100%" stop-color="#8B6914"/>
            </radialGradient>
        </defs>
        <g id="egyptian-ib" class="egyptian-layer" style="cursor: pointer;" data-name="Ib" data-medical-name="The Heart-Mind" data-desc="The seat of conscience, memory, and emotion. Formed from a single drop of blood from the mother's heart. Weighed against Ma'at's feather.">
            <!-- Heart-sized scarab beetle positioned at heart -->
            <g transform="translate(15, 420) scale(0.5)">
                <!-- Scarab body/shell -->
                <ellipse cx="0" cy="0" rx="18" ry="14" fill="url(#scarab-shell)" stroke="#8B6914" stroke-width="1.5"/>
                <!-- Shell segments -->
                <line x1="-12" y1="0" x2="12" y2="0" stroke="#8B6914" stroke-width="1"/>
                <path d="M0,-14 L0,14" stroke="#8B6914" stroke-width="1"/>
                
                <!-- Scarab head -->
                <ellipse cx="0" cy="-18" rx="8" ry="6" fill="#B8860B" stroke="#8B6914"/>
                <!-- Antennae -->
                <path d="M-5,-24 C-8,-28 -10,-30 -12,-28 M5,-24 C8,-28 10,-30 12,-28" stroke="#8B6914" stroke-width="1.5" fill="none"/>
                
                <!-- Legs (3 pairs) -->
                <path d="M-18,5 C-25,2 -30,0 -32,3" stroke="#8B6914" stroke-width="1.5" fill="none"/>
                <path d="M-18,0 C-25,-1 -30,-2 -32,0" stroke="#8B6914" stroke-width="1.5" fill="none"/>
                <path d="M-16,-6 C-22,-8 -26,-10 -28,-7" stroke="#8B6914" stroke-width="1.5" fill="none"/>
                <path d="M18,5 C25,2 30,0 32,3" stroke="#8B6914" stroke-width="1.5" fill="none"/>
                <path d="M18,0 C25,-1 30,-2 32,0" stroke="#8B6914" stroke-width="1.5" fill="none"/>
                <path d="M16,-6 C22,-8 26,-10 28,-7" stroke="#8B6914" stroke-width="1.5" fill="none"/>
            </g>
            
            <!-- Small Feather of Ma'at -->
            <g transform="translate(45, 415) scale(0.4)">
                <path d="M0,30 C0,15 3,0 0,-20 C-3,0 0,15 0,30" fill="none" stroke="#E8E6D1" stroke-width="2"/>
                <path d="M0,-20 L-5,-12 M0,-15 L-4,-8 M0,-10 L-3,-4" stroke="#E8E6D1" stroke-width="1"/>
                <path d="M0,-20 L5,-12 M0,-15 L4,-8 M0,-10 L3,-4" stroke="#E8E6D1" stroke-width="1"/>
            </g>
        </g>
    `,

    // 8. Sekhem (Power) - Overlay - Enhanced with nerve-like paths
    sekhem: `
        <defs>
            <filter id="sekhem-glow">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#00ffff"/>
                <stop offset="50%" stop-color="#ffffff"/>
                <stop offset="100%" stop-color="#00ffff"/>
            </linearGradient>
        </defs>
        <g id="egyptian-sekhem" class="egyptian-layer" style="filter: url(#sekhem-glow);" data-name="Sekhem" data-medical-name="The Vital Power" data-desc="The literal 'power' or 'might' of the soul. Associated with the ability to manifest will and life force energy.">
            <!-- Left arm energy flow -->
            <g>
                <path d="M-75,280 C-100,320 -130,380 -145,450 C-155,500 -150,560 -145,620 C-135,700 -120,780 -100,850" 
                    stroke="url(#lightning-gradient)" stroke-width="4" fill="none" stroke-linecap="round">
                    <animate attributeName="stroke-dasharray" values="0,2000;400,1600;800,1200;2000,0" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <!-- Spark branches -->
                <path d="M-130,400 L-150,385 M-145,500 L-170,490 M-140,600 L-165,610" stroke="#00ffff" stroke-width="2" fill="none">
                    <animate attributeName="opacity" values="0;1;0" dur="0.3s" repeatCount="indefinite"/>
                </path>
            </g>
            
            <!-- Right arm energy flow -->
            <g>
                <path d="M75,280 C100,320 130,380 145,450 C155,500 150,560 145,620 C135,700 120,780 100,850" 
                    stroke="url(#lightning-gradient)" stroke-width="4" fill="none" stroke-linecap="round">
                    <animate attributeName="stroke-dasharray" values="0,2000;400,1600;800,1200;2000,0" dur="1.2s" repeatCount="indefinite"/>
                </path>
                <path d="M130,400 L150,385 M145,500 L170,490 M140,600 L165,610" stroke="#00ffff" stroke-width="2" fill="none">
                    <animate attributeName="opacity" values="0;1;0" dur="0.4s" repeatCount="indefinite"/>
                </path>
            </g>
        </g>
    `,

    // 5. Akh (Transfigured Spirit) - TOPMOST OVERLAY - Enhanced with ibis and rays
    akh: `
        <defs>
            <filter id="akh-radiance" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="25" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="1" k3="2"/>
            </filter>
            <radialGradient id="akh-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="30%" stop-color="#FFD700"/>
                <stop offset="70%" stop-color="#FFA500"/>
                <stop offset="100%" stop-color="transparent"/>
            </radialGradient>
        </defs>
        <g id="egyptian-akh" class="egyptian-layer" style="filter: url(#akh-radiance); mix-blend-mode: screen;" data-name="Akh" data-medical-name="The Transfigured Spirit" data-desc="The 'shining' result of the Ka and Ba uniting after death. The luminous, immortal intelligence.">
            <!-- Outer radiance -->
            <circle cx="0" cy="80" r="150" fill="url(#akh-gradient)" fill-opacity="0.6">
                <animate attributeName="r" values="150;160;150" dur="3s" repeatCount="indefinite"/>
            </circle>
            <!-- Inner bright core -->
            <circle cx="0" cy="80" r="80" fill="#FFD700" fill-opacity="0.4"/>
            <circle cx="0" cy="80" r="40" fill="#ffffff" fill-opacity="0.6"/>
            
            <!-- Radiating rays -->
            <g stroke="#FFD700" stroke-width="3" fill="none" opacity="0.8">
                <line x1="0" y1="-80" x2="0" y2="-140"><animate attributeName="y2" values="-140;-160;-140" dur="2s" repeatCount="indefinite"/></line>
                <line x1="0" y1="200" x2="0" y2="260"><animate attributeName="y2" values="260;280;260" dur="2s" repeatCount="indefinite"/></line>
                <line x1="-120" y1="80" x2="-180" y2="80"><animate attributeName="x2" values="-180;-200;-180" dur="2s" repeatCount="indefinite"/></line>
                <line x1="120" y1="80" x2="180" y2="80"><animate attributeName="x2" values="180;200;180" dur="2s" repeatCount="indefinite"/></line>
                <!-- Diagonal rays -->
                <line x1="-85" y1="-5" x2="-120" y2="-40"/>
                <line x1="85" y1="-5" x2="120" y2="-40"/>
                <line x1="-85" y1="165" x2="-120" y2="200"/>
                <line x1="85" y1="165" x2="120" y2="200"/>
            </g>
            
            <!-- Crested Ibis silhouette (Akh symbol) -->
            <g transform="translate(0, 60)" fill="#FFD700" fill-opacity="0.7">
                <!-- Ibis head crest -->
                <path d="M0,-30 C-5,-45 5,-50 10,-55 C5,-45 0,-35 0,-30"/>
                <!-- Head -->
                <ellipse cx="0" cy="-20" rx="12" ry="15"/>
                <!-- Long curved beak -->
                <path d="M10,-25 Q25,-30 30,-15 Q25,-20 12,-18" fill="#FFD700"/>
            </g>
        </g>
    `,

    // 9. Sah (Spiritual Body) - Overlay - Uses actual body silhouette mask
    sah: `
        <defs>
            <pattern id="star-field-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <rect width="120" height="120" fill="#0a0a1a"/>
                <!-- Random stars -->
                <circle cx="10" cy="15" r="1" fill="white"/>
                <circle cx="45" cy="8" r="1.5" fill="#ffffcc"/>
                <circle cx="80" cy="25" r="1" fill="white"/>
                <circle cx="25" cy="50" r="0.8" fill="#aaccff"/>
                <circle cx="60" cy="45" r="1.2" fill="white"/>
                <circle cx="95" cy="55" r="1" fill="#ffffcc"/>
                <circle cx="15" cy="85" r="1.3" fill="white"/>
                <circle cx="55" cy="90" r="1" fill="#aaccff"/>
                <circle cx="90" cy="100" r="1.5" fill="white"/>
                <circle cx="110" cy="80" r="0.8" fill="white"/>
                <circle cx="35" cy="110" r="1" fill="#ffffcc"/>
                <circle cx="75" cy="115" r="1.2" fill="white"/>
            </pattern>
            <!-- Accurate body silhouette mask matching skeleton -->
            <mask id="sah-body-mask">
                <path d="
                    M 0, -55
                    C 50, -55 105, -25 105, 80
                    C 105, 150 85, 190 60, 210
                    C 70, 250 130, 310 200, 335
                    C 215, 350 220, 380 220, 420
                    C 220, 480 235, 600 255, 685
                    C 265, 750 290, 850 320, 915
                    C 340, 950 370, 980 370, 1050
                    C 375, 1080 350, 1110 310, 1120
                    C 280, 1130 200, 1100 200, 1060
                    C 200, 1020 220, 950 240, 900
                    L 180, 685
                    L 175, 480
                    C 175, 520 175, 489 175, 489
                    L 145, 630
                    C 150, 700 180, 750 180, 835
                    C 180, 900 115, 1400 120, 1485
                    C 125, 1550 135, 1650 140, 1690
                    L 150, 1870
                    L 145, 2050
                    C 145, 2080 120, 2100 80, 2100
                    C 40, 2100 20, 2080 20, 2000
                    L 40, 1800
                    L 50, 1485
                    L 30, 1000
                    L -30, 1000
                    L -50, 1485
                    L -40, 1800
                    L -20, 2000
                    C -20, 2080 -40, 2100 -80, 2100
                    C -120, 2100 -145, 2080 -145, 2050
                    L -150, 1870
                    L -140, 1690
                    C -135, 1650 -125, 1550 -120, 1485
                    C -115, 1400 -180, 900 -180, 835
                    C -180, 750 -150, 700 -145, 630
                    L -175, 489
                    C -175, 489 -175, 520 -175, 480
                    L -180, 685
                    L -240, 900
                    C -220, 950 -200, 1020 -200, 1060
                    C -200, 1100 -280, 1130 -310, 1120
                    C -350, 1110 -375, 1080 -370, 1050
                    C -370, 980 -340, 950 -320, 915
                    C -290, 850 -265, 750 -255, 685
                    C -235, 600 -220, 480 -220, 420
                    C -220, 380 -215, 350 -200, 335
                    C -130, 310 -70, 250 -60, 210
                    C -85, 190 -105, 150 -105, 80
                    C -105, -25 -50, -55 0, -55
                    Z
                " fill="white"/>
            </mask>
            <radialGradient id="nebula-gradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stop-color="#1a0a2e" stop-opacity="0.3"/>
                <stop offset="50%" stop-color="#0d0d2b" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#050510" stop-opacity="0.8"/>
            </radialGradient>
        </defs>
        <g id="egyptian-sah" class="egyptian-layer" style="opacity: 0.7; pointer-events: none;" data-name="Sah" data-medical-name="The Spiritual Body" data-desc="The 'Glorious Body' achieved after passing the trials of the Duat (Underworld). An ethereal, incorruptible celestial form.">
            <!-- Star field masked to accurate body shape -->
            <g mask="url(#sah-body-mask)">
                <rect x="-400" y="-300" width="800" height="2500" fill="url(#star-field-pattern)"/>
                <rect x="-400" y="-300" width="800" height="2500" fill="url(#nebula-gradient)"/>
            </g>
            
            <!-- Orion Constellation (Sah = Orion/Osiris) -->
            <g transform="translate(0, 400)" stroke="#ffffff" stroke-width="1" fill="#ffffff">
                <!-- Belt stars -->
                <circle cx="-20" cy="0" r="3"><animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite"/></circle>
                <circle cx="0" cy="5" r="3.5"><animate attributeName="opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite"/></circle>
                <circle cx="20" cy="0" r="3"><animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite"/></circle>
                <!-- Belt lines -->
                <line x1="-20" y1="0" x2="0" y2="5" stroke-opacity="0.5"/>
                <line x1="0" y1="5" x2="20" y2="0" stroke-opacity="0.5"/>
                
                <!-- Shoulders -->
                <circle cx="-50" cy="-80" r="4" fill="#ff6666"><animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite"/></circle>
                <circle cx="45" cy="-70" r="3.5"><animate attributeName="opacity" values="1;0.6;1" dur="2.2s" repeatCount="indefinite"/></circle>
                
                <!-- Feet -->
                <circle cx="-35" cy="100" r="3"><animate attributeName="opacity" values="1;0.5;1" dur="2.7s" repeatCount="indefinite"/></circle>
                <circle cx="40" cy="90" r="4" fill="#aaccff"><animate attributeName="opacity" values="1;0.6;1" dur="1.9s" repeatCount="indefinite"/></circle>
                
                <!-- Connection lines -->
                <path d="M-50,-80 L-20,0 L-35,100 M45,-70 L20,0 L40,90" stroke-opacity="0.3" fill="none"/>
            </g>
        </g>
    `
};
