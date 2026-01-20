export const palmistrySVG = {
    // Definitions for gradients and reusable elements
    defs: `
        <radialGradient id="mount_glow">
            <stop offset="0%" style="stop-color:gold;stop-opacity:0.5" />
            <stop offset="100%" style="stop-color:orange;stop-opacity:0" />
        </radialGradient>
        <filter id="glow-text" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        <style>
            .palm-line {
                fill: none;
                stroke: #d94e4e; 
                stroke-width: 2.5;
                stroke-linecap: round;
                opacity: 0.85;
                pointer-events: stroke;
            }
            .palm-line:hover {
                stroke: #ff0000;
                stroke-width: 4;
                filter: drop-shadow(0 0 2px red);
            }
            .palm-mount {
                fill: url(#mount_glow);
                stroke: none;
                pointer-events: all;
            }
            .palm-mount:hover {
                 fill: gold;
                 fill-opacity: 0.3;
            }
            .palm-symbol {
                font-family: Arial, sans-serif;
                font-size: 16px; 
                font-weight: bold;
                fill: #ffd700; 
                text-anchor: middle;
                dominant-baseline: middle;
                pointer-events: none;
                filter: url(#glow-text);
            }
        </style>
    `,

    // Left Hand Coordinates refined for Skeletal Alignment
    // Thumb (MC1) is lateral (~ -400), Pinky (MC5) is medial (~ -340)
    // Wrist (~ 1030) -> Fingers (~ 1120+)

    left: `
        <g class="palm-map-left">
            <!-- Major Lines -->
            
            <!-- Life Line: Wraps MC1 (Thumb). Starts near MC2 Base (-373, 1063), Curves out and down to Wrist (-376, 1027) -->
            <!-- Start: -375, 1065. Curve Control: -415, 1075 (Wide around thumb). End: -370, 1035 (Wrist) -->
            <path class="palm-line" data-name="Life Line" data-desc="Vitality, physical health, and major life changes." 
                  d="M -375 1065 Q -405 1075 -375 1035" />
            
            <!-- Head Line: Starts with Life line, crosses palm to Hypothenar -->
            <!-- Start: -375, 1065. End: Mid-Hypothenar (-335, 1070) -->
            <path class="palm-line" data-name="Head Line" data-desc="Intelligence, psychological health, and mental focus." 
                  d="M -375 1065 Q -355 1072 -335 1070" />
            
            <!-- Heart Line: Distal Palm. Starts Ulnar edge (-335, 1100). Ends near Jupiter/Saturn gap (-380, 1100) -->
            <!-- Slight curve downwards -->
            <path class="palm-line" data-name="Heart Line" data-desc="Emotional life, sensitivity, and heart health." 
                  d="M -335 1095 Q -355 1105 -385 1095" />
                  
            <!-- Fate Line: Vertical ID. From Wrist (-360, 1035) to Saturn (-378, 1112) -->
             <path class="palm-line" data-name="Fate Line" data-desc="Career path and external influences." 
                  d="M -360 1035 L -370 1100" />

            <!-- Mounts (Centered on MCP Joints / Metacarpal Heads) -->
            
            <!-- Jupiter: Base of Index (MC2 Head: -389, 1104) -->
            <g class="palm-mount-group" data-name="Mount of Jupiter" data-desc="Ambition and leadership.">
                <circle class="palm-mount" cx="-390" cy="1105" r="11" />
                <text class="palm-symbol" x="-390" y="1105">♃</text>
            </g>

            <!-- Saturn: Base of Middle (MC3 Head: -378, 1112) -->
             <g class="palm-mount-group" data-name="Mount of Saturn" data-desc="Discipline and structure.">
                <circle class="palm-mount" cx="-378" cy="1112" r="11" />
                <text class="palm-symbol" x="-378" y="1112">♄</text>
            </g>
            
            <!-- Apollo: Base of Ring (MC4 Head: -362, 1111) -->
            <g class="palm-mount-group" data-name="Mount of Apollo (Sun)" data-desc="Creativity and success.">
                <circle class="palm-mount" cx="-363" cy="1108" r="11" />
                <text class="palm-symbol" x="-363" y="1108">☉</text>
            </g>

            <!-- Mercury: Base of Pinky (MC5 Head: -345, 1107) -->
            <g class="palm-mount-group" data-name="Mount of Mercury" data-desc="Communication and commerce.">
                <circle class="palm-mount" cx="-345" cy="1100" r="10" />
                <text class="palm-symbol" x="-345" y="1100">☿</text>
            </g>

            <!-- Venus: Thenar Eminence (MC1 Shaft - Thumb pad) -->
            <!-- MC1 Shaft is ~ -395, 1070 -->
            <g class="palm-mount-group" data-name="Mount of Venus" data-desc="Love, passion, and vitality.">
                <circle class="palm-mount" cx="-395" cy="1070" r="20" />
                <text class="palm-symbol" x="-395" y="1070">♀</text>
            </g>

            <!-- Luna: Hypothenar Eminence (Opposite Venus) -->
            <!-- MC5 Base / Hamate area. ~ -345, 1050 -->
            <g class="palm-mount-group" data-name="Mount of Luna (Moon)" data-desc="Imagination and intuition.">
                <circle class="palm-mount" cx="-345" cy="1055" r="16" />
                <text class="palm-symbol" x="-345" y="1055">☽</text>
            </g>
        </g>
    `,

    // Right Hand (Mirrored X)
    right: `
        <g class="palm-map-right">
             <!-- Major Lines -->
            
            <!-- Life Line -->
            <path class="palm-line" data-name="Life Line" data-desc="Vitality, physical health, and major life changes." 
                  d="M 375 1065 Q 405 1075 375 1035" />
            
            <!-- Head Line -->
            <path class="palm-line" data-name="Head Line" data-desc="Intelligence, psychological health, and mental focus." 
                  d="M 375 1065 Q 355 1072 335 1070" />
            
            <!-- Heart Line -->
            <path class="palm-line" data-name="Heart Line" data-desc="Emotional life, sensitivity, and heart health." 
                  d="M 335 1095 Q 355 1105 385 1095" />
                  
            <!-- Fate Line -->
             <path class="palm-line" data-name="Fate Line" data-desc="Career path and external influences." 
                  d="M 360 1035 L 370 1100" />

            <!-- Mounts -->
            <!-- Jupiter -->
            <g class="palm-mount-group" data-name="Mount of Jupiter" data-desc="Ambition and leadership.">
                <circle class="palm-mount" cx="390" cy="1105" r="11" />
                <text class="palm-symbol" x="390" y="1105">♃</text>
            </g>

            <!-- Saturn -->
             <g class="palm-mount-group" data-name="Mount of Saturn" data-desc="Discipline and structure.">
                <circle class="palm-mount" cx="378" cy="1112" r="11" />
                <text class="palm-symbol" x="378" y="1112">♄</text>
            </g>
            
            <!-- Apollo -->
            <g class="palm-mount-group" data-name="Mount of Apollo (Sun)" data-desc="Creativity and success.">
                <circle class="palm-mount" cx="363" cy="1108" r="11" />
                <text class="palm-symbol" x="363" y="1108">☉</text>
            </g>

            <!-- Mercury -->
            <g class="palm-mount-group" data-name="Mount of Mercury" data-desc="Communication and commerce.">
                <circle class="palm-mount" cx="345" cy="1100" r="10" />
                <text class="palm-symbol" x="345" y="1100">☿</text>
            </g>

            <!-- Venus -->
            <g class="palm-mount-group" data-name="Mount of Venus" data-desc="Love, passion, and vitality.">
                <circle class="palm-mount" cx="395" cy="1070" r="20" />
                <text class="palm-symbol" x="395" y="1070">♀</text>
            </g>

            <!-- Luna -->
            <g class="palm-mount-group" data-name="Mount of Luna (Moon)" data-desc="Imagination and intuition.">
                <circle class="palm-mount" cx="345" cy="1055" r="16" />
                <text class="palm-symbol" x="345" y="1055">☽</text>
            </g>
        </g>
    `
};
