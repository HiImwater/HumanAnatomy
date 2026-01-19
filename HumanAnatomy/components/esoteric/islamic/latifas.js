export const latifasSVG = {
    // Shared Definitions (Filters, Gradients)
    defs: `
        <defs>
            <!-- Glow for Latifa Spheres -->
            <filter id="latifa-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            
            <!-- Earth (Khak) Texture - Static Noise -->
            <filter id="filter-earth" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise"/>
                <feColorMatrix type="matrix" values="0.3 0 0 0 0  0 0.2 0 0 0  0 0 0.1 0 0  0 0 0 0.3 0" in="noise" result="coloredNoise"/>
                <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite"/>
            </filter>
            
            <!-- Water (Ma') Flow - Simplified -->
            <filter id="filter-water" x="0%" y="0%" width="100%" height="100%">
                 <feTurbulence type="turbulence" baseFrequency="0.02 0.04" numOctaves="1" result="turbulence" seed="0">
                    <animate attributeName="baseFrequency" dur="20s" values="0.02 0.04;0.02 0.06;0.02 0.04" repeatCount="indefinite"/>
                </feTurbulence>
                <feComposite operator="in" in="turbulence" in2="SourceGraphic" result="composite"/>
            </filter>
            
            <!-- Fire (Nar) Flicker - Simplified -->
            <filter id="filter-fire" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1">
                    <animate attributeName="seed" values="1;5;1" dur="2s" repeatCount="indefinite"/>
                </feTurbulence>
                 <feColorMatrix type="matrix" values="1 0 0 0 0  0 0.4 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
                <feComposite operator="in" in2="SourceGraphic"/>
            </filter>

            <!-- Air (Bad) Shimmer - Simplified -->
            <filter id="filter-air" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" result="noise">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 10 0; 0 0" dur="10s" repeatCount="indefinite"/>
                </feTurbulence>
                <feColorMatrix type="matrix" values="0.8 0 0 0 0  0 0.5 0 0 0  0 0 0.8 0 0  0 0 0 0.3 0" />
                <feComposite operator="in" in2="SourceGraphic"/>
            </filter>

            <!-- Body Silhouette Path -->
            <path id="latifa-raw-silhouette" d="
                M 0, -55
                C 50, -55 105, -25 105, 80
                C 105, 150 85, 190 60, 210
                C 70, 250 130, 310 200, 335
                C 215, 350 220, 380 220, 420
                C 220, 480 235, 600 255, 685
                C 260, 700 280, 750 280, 835
                C 280, 900 210, 1400 215, 1485
                C 220, 1550 230, 1650 235, 1690
                L 250, 1870
                C 250, 1870 200, 1870 170, 1870
                L 150, 1690
                C 145, 1650 135, 1550 130, 1485
                C 125, 1400 190, 900 190, 835
                C 190, 750 160, 700 155, 630
                L 125, 489
                C 125, 489 125, 520 125, 480
                L 130, 685
                L 190, 900
                C 210, 950 230, 1020 230, 1060
                C 230, 1100 310, 1130 340, 1120
                C 380, 1110 405, 1080 400, 1050
                C 395, 1020 370, 1000 340, 1010
                C 310, 1020 290, 1040 270, 1030
                C 250, 1020 230, 950 210, 900
                L 155, 685
                L 150, 420
                C 150, 320 0, 320 0, 320
                C 0, 320 -150, 320 -150, 420
                L -155, 685
                L -210, 900
                C -230, 950 -250, 1020 -270, 1030
                C -290, 1040 -310, 1020 -340, 1010
                C -370, 1000 -395, 1020 -400, 1050
                C -405, 1080 -380, 1110 -340, 1120
                C -310, 1130 -230, 1100 -230, 1060
                C -230, 1020 -210, 950 -190, 900
                L -130, 685
                C -125, 480 -125, 489 -125, 489
                L -155, 630
                C -160, 700 -190, 750 -190, 835
                C -190, 900 -125, 1400 -130, 1485
                C -135, 1550 -145, 1650 -150, 1690
                L -170, 1870
                C -200, 1870 -250, 1870 -250, 1870
                L -235, 1690
                C -230, 1650 -220, 1550 -215, 1485
                C -210, 1400 -280, 900 -280, 835
                C -280, 750 -260, 700 -255, 685
                C -235, 600 -220, 480 -220, 420
                C -220, 380 -215, 350 -200, 335
                C -130, 310 -70, 250 -60, 210
                C -85, 190 -105, 150 -105, 80
                C -105, -25 -50, -55 0, -55
                Z
            " />

            <!-- Clean ClipPath using the silhouette -->
            <clipPath id="latifa-clip-body">
                <use href="#latifa-raw-silhouette" />
            </clipPath>
        </defs>
    `,

    // Alam-i Amr: The Five Subtle Centers (Chest)
    alamAmr: `
        <g id="latifas-alam-amr" filter="url(#latifa-glow)" style="pointer-events: bounding-box;">
            <!-- Qalb (Heart) - Yellow - Left Breast -->
            <g class="latifa-node" data-name="Qalb" data-desc="The Heart: Gateway to Divine Love.">
                <circle cx="60" cy="420" r="15" fill="#FFD700" fill-opacity="0.8">
                    <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
                </circle>
            </g>

            <!-- Ruh (Spirit) - Red - Right Breast -->
            <g class="latifa-node" data-name="Ruh" data-desc="The Spirit: Seat of spiritual vision.">
                <circle cx="-60" cy="420" r="15" fill="#FF0000" fill-opacity="0.8">
                     <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="3.5s" repeatCount="indefinite"/>
                </circle>
            </g>

            <!-- Sirr (Secret) - White - Above Left Breast -->
            <g class="latifa-node" data-name="Sirr" data-desc="The Secret: Station of unveiling (kashf).">
                <circle cx="60" cy="340" r="12" fill="#FFFFFF" fill-opacity="0.9">
                     <animate attributeName="fill-opacity" values="0.9;1;0.9" dur="5s" repeatCount="indefinite"/>
                </circle>
            </g>

            <!-- Khafi (Hidden) - Black/Dark Blue - Above Right Breast -->
            <g class="latifa-node" data-name="Khafi" data-desc="The Hidden: Perception of God’s Presence.">
                <circle cx="-60" cy="340" r="12" fill="#000033" stroke="#4444FF" stroke-width="1" fill-opacity="0.9">
                </circle>
            </g>

            <!-- Akhfa (Most Hidden) - Green - Center Chest -->
            <g class="latifa-node" data-name="Akhfa" data-desc="The Most Hidden: Point of ultimate union.">
                <circle cx="0" cy="380" r="18" fill="#00FF00" fill-opacity="0.8">
                     <animate attributeName="fill-opacity" values="0.8;1;0.8" dur="6s" repeatCount="indefinite"/>
                </circle>
            </g>
        </g>
    `,

    // Nafs (Ego/Self) point on Forehead - The Seven Stages
    nafs: `
        <g id="latifa-nafs" filter="url(#latifa-glow)" style="pointer-events: bounding-box;">
             <!-- Center point to orient at brow -->
             <g transform="translate(0, 65)">
                
                <!-- 1. Nafs al-Ammara (The Commanding Self) - Base/Outer - Dark/Heavy -->
                <circle cx="0" cy="0" r="35" fill="#222" fill-opacity="0.8" stroke="#444" stroke-width="1" class="latifa-node" data-name="Nafs al-Ammara" data-desc="The Commanding Self: Ruled by desires and pride.">
                    <animate attributeName="r" values="35;36;35" dur="8s" repeatCount="indefinite"/>
                </circle>

                <!-- 2. Nafs al-Lawwama (The Self-Accusing Self) - Regret - Dark Red -->
                <circle cx="0" cy="0" r="30" fill="#800000" fill-opacity="0.7" stroke="#cc0000" stroke-width="1" class="latifa-node" data-name="Nafs al-Lawwama" data-desc="The Self-Accusing Self: Begins to feel regret and conscience.">
                    <animate attributeName="r" values="30;31;30" dur="7s" repeatCount="indefinite"/>
                </circle>

                <!-- 3. Nafs al-Mulhima (The Inspired Self) - Inspiration - Yellow/Ocher -->
                <circle cx="0" cy="0" r="25" fill="#DAA520" fill-opacity="0.7" stroke="#FFD700" stroke-width="1" class="latifa-node" data-name="Nafs al-Mulhima" data-desc="The Inspired Self: Receives spiritual intuition.">
                     <animate attributeName="r" values="25;26;25" dur="6s" repeatCount="indefinite"/>
                </circle>

                <!-- 4. Nafs al-Mutma'inna (The Peaceful Self) - Tranquility - White/Silver -->
                <circle cx="0" cy="0" r="20" fill="#E0E0E0" fill-opacity="0.8" stroke="#FFF" stroke-width="1" class="latifa-node" data-name="Nafs al-Mutma'inna" data-desc="The Peaceful Self: Finds total tranquility in God.">
                     <animate attributeName="r" values="20;21;20" dur="5s" repeatCount="indefinite"/>
                </circle>

                <!-- 5. Nafs ar-Radiyya (The Contented Self) - Contentment - Greenish Gold -->
                <circle cx="0" cy="0" r="15" fill="#9ACD32" fill-opacity="0.9" stroke="#ADFF2F" stroke-width="1" class="latifa-node" data-name="Nafs ar-Radiyya" data-desc="The Contented Self: Pleased with whatever God decrees.">
                     <animate attributeName="r" values="15;16;15" dur="4s" repeatCount="indefinite"/>
                </circle>

                <!-- 6. Nafs al-Mardiyya (The Pleasing Self) - God is Pleased - Bright Blue/Diamond -->
                <circle cx="0" cy="0" r="10" fill="#00BFFF" fill-opacity="0.9" stroke="#E0FFFF" stroke-width="1" class="latifa-node" data-name="Nafs al-Mardiyya" data-desc="The Pleasing Self: God is pleased with the soul.">
                     <animate attributeName="r" values="10;11;10" dur="3s" repeatCount="indefinite"/>
                </circle>

                <!-- 7. Nafs al-Kamila (The Perfected Self) - Union - Pure White Core -->
                <circle cx="0" cy="0" r="5" fill="#FFFFFF" fill-opacity="1" stroke="#FFF" stroke-width="2" class="latifa-node" data-name="Nafs al-Kamila" data-desc="The Perfected Self: The state of absolute purity and union.">
                     <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
                     <animate attributeName="stroke-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                </circle>

             </g>
        </g>
    `,

    // The Four Elements (World of Creation) - Individual Overlays
    // pointer-events="none" ensures we can hover through these overlays to the buttons/organs below
    elements: {
        // Khak (Earth) - Optimized: Static
        earth: `
            <g id="latifa-element-earth" style="pointer-events: none;" clip-path="url(#latifa-clip-body)">
                <use href="#latifa-raw-silhouette" fill="#8B4513" fill-opacity="0.2" filter="url(#filter-earth)" />
            </g>
        `,

        // Ma' (Water) - Optimized: Simple opacity/color
        water: `
            <g id="latifa-element-water" style="pointer-events: none;" clip-path="url(#latifa-clip-body)">
                 <use href="#latifa-raw-silhouette" fill="#4682B4" fill-opacity="0.3" filter="url(#filter-water)" />
            </g>
        `,

        // Nar (Fire) - Optimized: Simple turbulence
        fire: `
            <g id="latifa-element-fire" style="pointer-events: none;" clip-path="url(#latifa-clip-body)">
                 <use href="#latifa-raw-silhouette" fill="#FF4500" fill-opacity="0.2" filter="url(#filter-fire)" />
            </g>
        `,

        // Bad (Air) - Optimized: Simple color matrix noise
        air: `
            <g id="latifa-element-air" style="pointer-events: none;" clip-path="url(#latifa-clip-body)">
                 <use href="#latifa-raw-silhouette" fill="#E6E6FA" fill-opacity="0.2" filter="url(#filter-air)" />
            </g>
        `
    }
};
