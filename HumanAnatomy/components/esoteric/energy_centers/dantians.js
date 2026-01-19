export const createDantians = () => {
    return `
    <defs>
        <!-- Lower Dantian Gradients (Jing - Essence - Golden/Amber) -->
        <radialGradient id="grad-dantian-lower" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#FFD700" stop-opacity="1"> <!-- Gold -->
                <animate attributeName="stop-color" values="#FFD700;#FFA500;#FFD700" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="70%" stop-color="#DAA520" stop-opacity="0.8" /> <!-- GoldenRod -->
            <stop offset="100%" stop-color="#B8860B" stop-opacity="0" /> <!-- DarkGoldenRod -->
        </radialGradient>
        
        <!-- Middle Dantian Gradients (Qi - Vitality - Green/Pink/White) -->
        <radialGradient id="grad-dantian-middle" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#F0FFF0" stop-opacity="1"> <!-- Honeydew/White -->
                <animate attributeName="stop-color" values="#F0FFF0;#FFB6C1;#F0FFF0" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="60%" stop-color="#98FB98" stop-opacity="0.6" /> <!-- PaleGreen -->
            <stop offset="100%" stop-color="#3CB371" stop-opacity="0" /> <!-- MediumSeaGreen -->
        </radialGradient>
        
        <!-- Upper Dantian Gradients (Shen - Spirit - Violet/Indigo/Light) -->
        <radialGradient id="grad-dantian-upper" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#E6E6FA" stop-opacity="1"> <!-- Lavender -->
                <animate attributeName="stop-color" values="#E6E6FA;#9370DB;#E6E6FA" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stop-color="#8A2BE2" stop-opacity="0.7" /> <!-- BlueViolet -->
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0" /> <!-- Indigo -->
        </radialGradient>

        <!-- Filters for Glow/Energy Texture -->
        <filter id="filter-dantian-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <filter id="filter-dantian-turbulence">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        </filter>
    </defs>

    <g id="dantians-container" filter="url(#filter-dantian-glow)">
        
        <!-- Upper Dantian (Shang Dantian) - The Muddy Pellet -->
        <!-- Location: Forehead/Third Eye (Y: ~85) -->
        <g id="dantian-upper" transform="translate(0, 85)">
            <circle r="15" fill="url(#grad-dantian-upper)" class="dantian-node" data-name="Upper Dantian" data-medical-name="Shang Dantian" data-desc="House of Spirit (Shen)">
                <!-- High frequency pulsation -->
                <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            <!-- Rays/Halo -->
            <circle r="25" fill="none" stroke="#9370DB" stroke-width="0.5" opacity="0.5">
                 <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
                 <animate attributeName="r" values="25;30;25" dur="4s" repeatCount="indefinite" />
            </circle>
        </g>

        <!-- Middle Dantian (Zhong Dantian) - The Crimson Palace -->
        <!-- Location: Heart Center (Y: ~450) -->
        <g id="dantian-middle" transform="translate(0, 450)">
            <circle r="25" fill="url(#grad-dantian-middle)" class="dantian-node" data-name="Middle Dantian" data-medical-name="Zhong Dantian" data-desc="House of Qi (Energy)">
                <!-- Breathing rhythm pulsation -->
                <animate attributeName="r" values="25;32;25" dur="6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="6s" repeatCount="indefinite" />
            </circle>
            <!-- Expanding Aura -->
            <circle r="40" fill="none" stroke="#98FB98" stroke-width="1" opacity="0.3">
                <animate attributeName="r" values="40;55;40" dur="6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="6s" repeatCount="indefinite" />
            </circle>
        </g>

        <!-- Lower Dantian (Xia Dantian) - The Golden Stove -->
        <!-- Location: Deep Lower Abdomen (Y: ~750) -->
        <g id="dantian-lower" transform="translate(0, 750)">
            <circle r="30" fill="url(#grad-dantian-lower)" class="dantian-node" data-name="Lower Dantian" data-medical-name="Xia Dantian" data-desc="House of Essence (Jing)">
                <!-- Slow, dense pulsation -->
                <animate attributeName="r" values="30;34;30" dur="8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;1;0.9" dur="8s" repeatCount="indefinite" />
            </circle>
            <!-- Dense core rotation -->
            <path d="M -10 0 L 10 0 M 0 -10 L 0 10" stroke="#DAA520" stroke-width="2" opacity="0.5">
                 <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
            </path>
        </g>

    </g>
    `;
};
