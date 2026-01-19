export const circuitsSVG = `
<defs>
    <!-- Circuit 1: Bio-Survival (Teal/Aquamarine) - Liquid/Amniotic -->
    <filter id="c1-liquid">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" values="0.03;0.02;0.03" dur="5s" repeatCount="indefinite"/>
        </feTurbulence>
        <feDisplacementMap in="blur" in2="noise" scale="5" result="distorted"/>
        <feComposite operator="in" in="distorted" in2="SourceGraphic"/>
    </filter>
    <linearGradient id="c1-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#00CED1" stop-opacity="0.9"/>
        <stop offset="60%" stop-color="#48D1CC" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#AFEEEE" stop-opacity="0.2"/>
    </linearGradient>

    <!-- Circuit 2: Emotional-Territorial (Red/Orange) - Heat/Muscle Tension -->
    <radialGradient id="c2-heat" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FF4500" stop-opacity="0.8"/>
        <stop offset="70%" stop-color="#FF6347" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#8B0000" stop-opacity="0"/>
    </radialGradient>
    <filter id="c2-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8"/>
        <feComposite operator="in" in2="SourceGraphic"/>
    </filter>

    <!-- Circuit 3: Semantic (Yellow/Gold) - Fiber Optics/Data -->
    <filter id="c3-glow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
    <pattern id="c3-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M0,10 L10,0" stroke="#FFD700" stroke-width="0.5" opacity="0.3"/>
    </pattern>

    <!-- Circuit 4: Socio-Sexual (Rose/Pink) - Pheromone/Hormone Net -->
    <filter id="c4-smoke">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="turbulence"/>
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="15" result="displacement"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite operator="in" in="blur" in2="SourceGraphic"/>
    </filter>

    <!-- Circuit 5: Neurosomatic (Opalescent/Pearl) - Sensory Bliss -->
    <filter id="c5-opalescent" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="blur"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
        <feSpecularLighting in="noise" surfaceScale="2" specularConstant="1" specularExponent="10" lighting-color="#E0FFFF" result="specular">
             <fePointLight x="-5000" y="-10000" z="20000"/>
        </feSpecularLighting>
        <feComposite in="specular" in2="SourceAlpha" operator="in" result="shine"/>
        <feMerge>
             <feMergeNode in="blur"/>
             <feMergeNode in="shine"/>
             <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
    <linearGradient id="c5-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#E0FFFF" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="1"/>
        <stop offset="100%" stop-color="#E0FFFF" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="c5-beam-glow">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feFlood flood-color="#00FFFF" flood-opacity="0.8"/>
        <feComposite in2="blur" operator="in"/>
        <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>

    <!-- Circuit 6: Neuroelectric (Electric Purple) - High Voltage -->
    <filter id="c6-lightning">
         <feTurbulence type="turbulence" baseFrequency="0.15" numOctaves="2" seed="5" result="turb"/>
         <feDisplacementMap in="SourceGraphic" in2="turb" scale="8" result="dist"/>
         <feGaussianBlur stdDeviation="1" result="blur"/>
         <feMerge>
             <feMergeNode in="blur"/>
             <feMergeNode in="dist"/>
         </feMerge>
    </filter>
    <linearGradient id="c6-pulse" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#E6E6FA"/>
        <stop offset="50%" stop-color="#8A2BE2"/>
        <stop offset="100%" stop-color="#4B0082"/>
    </linearGradient>

    <!-- Circuit 7: Neurogenetic (Silver/Chrome) - Metallic DNA -->
    <filter id="c7-metallic">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lighting-color="#ffffff" result="specular">
            <fePointLight x="-5000" y="-10000" z="20000"/>
        </feSpecularLighting>
        <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular"/>
        <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
    </filter>

    <!-- Circuit 8: Neuroatomic (White/Gold) - Quantum Starburst -->
    <radialGradient id="c8-nebula" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
        <stop offset="10%" stop-color="#FFD700" stop-opacity="0.8"/>
        <stop offset="40%" stop-color="#9370DB" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <filter id="c8-starburst" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="1" k3="3"/>
    </filter>
</defs>

<g class="layer-consciousness">
    <!-- C1: Bio-Survival (Brainstem + Digestive) -->
    <g class="circuit" data-name="Circuit 1" data-medical-name="Bio-Survival Circuit" data-desc="Safety vs. Danger. Biological survival interface. 'Liquid' consciousness of the infant." style="filter: url(#c1-liquid);">
        <!-- Brainstem Bulb -->
        <path d="M-8,-40 Q-15,-20 -5,0 Q5,-20 8,-40 Q0,-60 -8,-40" fill="url(#c1-grad)"/>
        <!-- Flowing Digestive Connection -->
        <path d="M-5,0 C-5,100 -20,200 0,350 C15,450 -15,500 10,550" 
            stroke="url(#c1-grad)" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.8">
            <animate attributeName="stroke-width" values="12;16;12" dur="3s" repeatCount="indefinite"/>
        </path>
    </g>

    <!-- C2: Emotional-Territorial (Muscular Armor - Expanded) -->
    <g class="circuit" data-name="Circuit 2" data-medical-name="Emotional-Territorial Circuit" data-desc="Dominance vs. Submission. Muscular armoring: Jaw, Neck, Chest, and Thighs." style="filter: url(#c2-glow);">
        <!-- Jaw (Masseter Aggression) -->
        <path d="M-45,-40 L-45,-20 M45,-40 L45,-20" stroke="#FF4500" stroke-width="8" opacity="0.7"/>
        
        <!-- Trapezius/Shoulder Tension -->
        <path d="M-20,40 Q-60,70 -120,80 L-130,120 Q-60,100 -20,60 Z" fill="url(#c2-heat)" opacity="0.8">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M20,40 Q60,70 120,80 L130,120 Q60,100 20,60 Z" fill="url(#c2-heat)" opacity="0.8">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" begin="1s"/>
        </path>

        <!-- Forearms (Grasping/Fighting) -->
        <path d="M-150,150 L-180,450 M150,150 L180,450" stroke="url(#c2-heat)" stroke-width="15" stroke-linecap="round" opacity="0.5"/>
        
        <!-- Right Hand Power (Gauntlet of Dominance) - Subject Right / Viewer Left -->
        <path d="M-120,120 Q-200,400 -368,1074" stroke="url(#c2-heat)" stroke-width="12" fill="none" opacity="0.6" stroke-dasharray="10,5"/>
        <circle cx="-368" cy="1074" r="25" fill="url(#c2-heat)" opacity="0.4" filter="url(#c2-glow)">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite"/>
        </circle>

        <!-- Ribcage Shielding -->
        <path d="M-80,200 Q-100,300 -60,450 M80,200 Q100,300 60,450" stroke="#FF4500" stroke-width="20" stroke-opacity="0.2" fill="none"/>

        <!-- Spinal Column Anchor (Strength) -->
        <rect x="-10" y="100" width="20" height="600" rx="10" fill="url(#c2-heat)" opacity="0.4"/>
    </g>

    <!-- C3: Semantic (Fiber Optic Web) -->
    <g class="circuit" data-name="Circuit 3" data-medical-name="Semantic Time-Binding Circuit" data-desc="Logic, language, and classification. The tool-making mind. Fiber-optic clarity.">
        <!-- Left Hemisphere Logic Grid -->
        <circle cx="25" cy="-70" r="30" fill="url(#c3-grid)" stroke="#FFD700" stroke-width="1"/>
        
        <!-- Data Stream to Right Hand -->
        <defs>
            <marker id="data-packet" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                <circle cx="5" cy="5" r="3" fill="#FFD700"/>
            </marker>
        </defs>
        
        <path id="sem_path" d="M25,-40 C25,50 -20,100 -250,800 C-300,950 -368,1050 -368,1074" 
            stroke="#FFD700" stroke-width="1.5" fill="none" opacity="0.6"/>
            
        <!-- Moving Data Packets -->
        <circle r="4" fill="#FFD700" filter="url(#c3-glow)">
            <animateMotion dur="2s" repeatCount="indefinite">
                <mpath href="#sem_path"/>
            </animateMotion>
        </circle>
        <circle r="4" fill="#FFD700" filter="url(#c3-glow)">
            <animateMotion dur="2s" begin="1s" repeatCount="indefinite">
                <mpath href="#sem_path"/>
            </animateMotion>
        </circle>
        
        <!-- Hand Interface (Right Hand / Viewer Left) -->
        <!-- Adjusted to -368 x coordinate -->
        <circle cx="-368" cy="1074" r="15" fill="none" stroke="#FFD700" stroke-width="2">
            <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
        </circle>
    </g>

    <!-- C4: Socio-Sexual (Hormonal Mist) -->
    <g class="circuit" data-name="Circuit 4" data-medical-name="Socio-Sexual Circuit" data-desc="Social roles and reproduction. Pheromonal communication and tribal morality." filter="url(#c4-smoke)">
        <!-- Pelvic Generator -->
        <circle cx="0" cy="710" r="20" fill="#FF69B4" opacity="0.6"/>
        <!-- Ascending Cloud to Hypothalamus -->
        <path d="M0,710 Q-60,400 0,0 Q60,400 0,710" fill="url(#c5-grad)" opacity="0.3">
             <animate attributeName="d" values="M0,710 Q-50,400 0,0 Q50,400 0,710; M0,710 Q-70,400 0,0 Q70,400 0,710; M0,710 Q-50,400 0,0 Q50,400 0,710" dur="6s" repeatCount="indefinite"/>
        </path>
    </g>

    <!-- C5: Neurosomatic (The Beam of Bliss) -->
    <g class="circuit" data-name="Circuit 5" data-medical-name="Neurosomatic Circuit" data-desc="Sensory rapture. High-frequency 'Anti-Gravity' transmission. The Vitruvian Star." filter="url(#c5-opalescent)">
        <!-- Right Brain Source (Intuition) -->
        <circle cx="-25" cy="-70" r="15" fill="#E0FFFF" opacity="1" filter="url(#c5-beam-glow)">
             <animate attributeName="r" values="12;16;12" dur="0.5s" repeatCount="indefinite"/>
        </circle>
        
        <!-- BEAM to Left Hand (Receiving) - Anatomical Left (Subject's Left) is Viewer's Right (X > 0) -->
        <!-- Hand Palm Center approx: x: 368, y: 1074 -->
        <line x1="-25" y1="-70" x2="368" y2="1074" stroke="url(#c5-beam-grad)" stroke-width="4" stroke-dasharray="20,10" filter="url(#c5-beam-glow)">
              <animate attributeName="stroke-dashoffset" values="0;400" dur="0.5s" repeatCount="indefinite"/>
              <animate attributeName="stroke-width" values="4;6;4" dur="2s" repeatCount="indefinite"/>
        </line>
        <circle cx="368" cy="1074" r="15" fill="#E0FFFF" opacity="0.8" filter="url(#c5-beam-glow)"> <!-- Left Palm Receptor -->
             <animate attributeName="r" values="10;18;10" dur="1s" repeatCount="indefinite"/>
        </circle>

        <!-- BEAMS to Feet (Grounding/Levitation) -->
        <!-- Feet Centers approx: x: +/- 100, y: 2000 -->
        <line x1="-25" y1="-70" x2="100" y2="2000" stroke="url(#c5-beam-grad)" stroke-width="3" stroke-dasharray="20,10" filter="url(#c5-beam-glow)">
              <animate attributeName="stroke-dashoffset" values="0;600" dur="0.8s" repeatCount="indefinite"/>
        </line>
        <line x1="-25" y1="-70" x2="-100" y2="2000" stroke="url(#c5-beam-grad)" stroke-width="3" stroke-dasharray="20,10" filter="url(#c5-beam-glow)">
              <animate attributeName="stroke-dashoffset" values="0;600" dur="0.8s" repeatCount="indefinite"/>
        </line>
        
        <!-- FEEDBACK LOOPS (Biofeedback Return Signal) -->
        <!-- Faint pulses travelling FROM extremities TO Brain -->
        <line x1="-25" y1="-70" x2="368" y2="1074" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="5,15" opacity="0.6">
             <animate attributeName="stroke-dashoffset" values="20;0" dur="0.3s" repeatCount="indefinite"/> <!-- Reverse direction -->
        </line>
        <line x1="-25" y1="-70" x2="100" y2="2000" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="5,15" opacity="0.5">
             <animate attributeName="stroke-dashoffset" values="20;0" dur="0.4s" repeatCount="indefinite"/>
        </line>
        <line x1="-25" y1="-70" x2="-100" y2="2000" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="5,15" opacity="0.5">
             <animate attributeName="stroke-dashoffset" values="20;0" dur="0.4s" repeatCount="indefinite"/>
        </line>
              
        <!-- Anti-Gravity Rings at Feet -->
        <ellipse cx="100" cy="2000" rx="35" ry="12" fill="none" stroke="#FFFFFF" stroke-width="3" filter="url(#c5-beam-glow)">
             <animate attributeName="rx" values="35;15;35" dur="1.5s" repeatCount="indefinite"/>
        </ellipse>
        <ellipse cx="-100" cy="2000" rx="35" ry="12" fill="none" stroke="#FFFFFF" stroke-width="3" filter="url(#c5-beam-glow)">
             <animate attributeName="rx" values="35;15;35" dur="1.5s" repeatCount="indefinite" begin="0.2s"/>
        </ellipse>
    </g>

    <!-- C6: Neuroelectric (Lightning Grid) -->
    <g class="circuit" data-name="Circuit 6" data-medical-name="Neuroelectric Circuit" data-desc="Metaprogramming. The nervous system becoming aware of itself. Quantum indeterminacy." style="filter: url(#c6-lightning);">
        <!-- Major Nodes -->
        <circle cx="0" cy="200" r="5" fill="#8A2BE2"/>
        <circle cx="0" cy="450" r="5" fill="#8A2BE2"/>
        <circle cx="0" cy="680" r="5" fill="#8A2BE2"/>
        <!-- Arcs -->
        <path d="M0,200 L-10,300 L10,400 L0,450 L-15,550 L10,650 L0,680" stroke="#E6E6FA" stroke-width="2" fill="none">
             <animate attributeName="d" values="M0,200 L-10,300 L10,400 L0,450 L-15,550 L10,650 L0,680; M0,200 L5,310 L-5,420 L0,450 L10,560 L-5,640 L0,680; M0,200 L-10,300 L10,400 L0,450 L-15,550 L10,650 L0,680" dur="0.1s" repeatCount="indefinite"/>
        </path>
        
        <!-- Healing Arc to Right Hand (Viewer Left) -->
        <path d="M0,200 Q-100,250 -200,600 T-368,1074" stroke="#E6E6FA" stroke-width="1.5" fill="none" stroke-dasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;100" dur="1s" repeatCount="indefinite"/>
        </path>
        <circle cx="-368" cy="1074" r="8" fill="#8A2BE2" filter="url(#c6-lightning)">
             <animate attributeName="opacity" values="0.5;1;0.5" dur="0.2s" repeatCount="indefinite"/>
        </circle>
    </g>

    <!-- C7: Neurogenetic (Metallic DNA) -->
    <g class="circuit" data-name="Circuit 7" data-medical-name="Neurogenetic Circuit" data-desc="Ancestral memory and evolutionary code. Connection to the species mind. Metallic/Chrome permanence." filter="url(#c7-metallic)" opacity="0.8">
        <!-- Double Helix -->
        <path d="M-6,100 Q12,150 -6,200 Q-24,250 -6,300 Q12,350 -6,400 Q-24,450 -6,500" stroke="#C0C0C0" stroke-width="4" fill="none"/>
        <path d="M6,100 Q-12,150 6,200 Q24,250 6,300 Q-12,350 6,400 Q24,450 6,500" stroke="#A9A9A9" stroke-width="4" fill="none"/>
        <!-- Rungs -->
        <path d="M-6,150 L6,150 M-6,250 L6,250 M-6,350 L6,350 M-6,450 L6,450" stroke="#FFFFFF" stroke-width="2"/>
    </g>

    <!-- C8: Neuroatomic (Cosmic Starburst) -->
    <g class="circuit" data-name="Circuit 8" data-medical-name="Neuroatomic Circuit" data-desc="Quantum non-locality. Out-of-body experience. Fusion with the cosmic mind." filter="url(#c8-starburst)">
        <!-- Core Singularity -->
        <circle cx="0" cy="-60" r="100" fill="url(#c8-nebula)" opacity="0.8"/>
        <circle cx="0" cy="-60" r="5" fill="#FFFFFF">
             <animate attributeName="r" values="5;8;5" dur="0.2s" repeatCount="indefinite"/>
        </circle>
        <!-- Starburst Rays -->
        <g stroke="#FFFACD" stroke-width="2" stroke-linecap="round">
            <line x1="0" y1="-60" x2="0" y2="-1000"><animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite"/></line>
            <line x1="0" y1="-60" x2="0" y2="800"><animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite"/></line>
            <line x1="0" y1="-60" x2="-800" y2="-60"><animate attributeName="opacity" values="0.5;1;0.5" dur="1.1s" repeatCount="indefinite"/></line>
            <line x1="0" y1="-60" x2="800" y2="-60"><animate attributeName="opacity" values="0.5;1;0.5" dur="1.3s" repeatCount="indefinite"/></line>
            
            <line x1="0" y1="-60" x2="600" y2="-660"><animate attributeName="stroke-width" values="1;3;1" dur="2s" repeatCount="indefinite"/></line>
            <line x1="0" y1="-60" x2="-600" y2="-660"><animate attributeName="stroke-width" values="1;3;1" dur="2s" repeatCount="indefinite"/></line>
            <line x1="0" y1="-60" x2="600" y2="540"><animate attributeName="stroke-width" values="1;3;1" dur="2s" repeatCount="indefinite"/></line>
            <line x1="0" y1="-60" x2="-600" y2="540"><animate attributeName="stroke-width" values="1;3;1" dur="2s" repeatCount="indefinite"/></line>
        </g>
    </g>
</g>
`;
