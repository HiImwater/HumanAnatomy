export const hairSVG = `
    <defs>
        <!-- Hair Gradient (Dark Brown/Black) -->
        <linearGradient id="hair_grad_dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#2a2a2a;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
        
        <!-- Hair Texture Filter -->
        <filter id="hair_texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" in="noise" result="alphaNoise" />
            <feComposite operator="in" in="alphaNoise" in2="SourceGraphic" result="composite" />
            <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
        </filter>
    </defs>

    <g id="group_hair">
        <!-- SCALP HAIR (Male Short Cut) -->
        <path id="hair_scalp" class="hair" data-name="Scalp Hair" 
            fill="url(#hair_grad_dark)" filter="url(#hair_texture)"
            d="
               M 0 -60
               C 55 -60, 100 0, 105 50
               L 105 105
               L 95 105
               L 95 60
               C 90 20, 50 -30, 0 -30
               C -50 -30, -90 20, -95 60
               L -95 105
               L -105 105
               L -105 50
               C -100 0, -55 -60, 0 -60
               Z
            " />

        <!-- EYEBROWS -->
        <path id="hair_eyebrow_l" class="hair" data-name="Left Eyebrow" 
            fill="#2a2a2a" filter="url(#hair_texture)"
            d="
               M -15 80 
               C -25 75, -45 75, -60 85 
               C -55 88, -30 85, -15 85
               Q -12 82, -15 80 
               Z
            " />
            
        <path id="hair_eyebrow_r" class="hair" data-name="Right Eyebrow" 
            fill="#2a2a2a" filter="url(#hair_texture)"
            d="
               M 15 80 
               C 25 75, 45 75, 60 85 
               C 55 88, 30 85, 15 85
               Q 12 82, 15 80 
               Z
            " />
    </g>
`;
