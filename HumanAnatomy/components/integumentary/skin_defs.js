export const skinDefs = `
    <defs>
        <style>
            .skin-segment { fill: url(#skin_base_fair); stroke: none; }
            .skin-shadow { fill: url(#muscle_shadow); opacity: 0.35; }
            .skin-highlight { fill: white; opacity: 0.1; filter: url(#skin_specular); }
        </style>
        <!-- BASE SKIN GRADIENTS -->
        <linearGradient id="skin_base_fair" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#f0c0a0;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#e0ac69;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#d09c59;stop-opacity:1" />
        </linearGradient>

        <radialGradient id="skin_highlight_radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.4" />
            <stop offset="100%" style="stop-color:#e0ac69;stop-opacity:0" />
        </radialGradient>

        <!-- SHADOW DEFINITIONS (For Muscle Grooves) -->
        <linearGradient id="muscle_shadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#4a3b2a;stop-opacity:0" />
            <stop offset="50%" style="stop-color:#4a3b2a;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#4a3b2a;stop-opacity:0" />
        </linearGradient>
        
        <!-- DEEP SHADOW (Creases) -->
        <linearGradient id="crease_shadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#3a2b1a;stop-opacity:0" />
            <stop offset="50%" style="stop-color:#3a2b1a;stop-opacity:0.5" />
            <stop offset="100%" style="stop-color:#3a2b1a;stop-opacity:0" />
        </linearGradient>

        <!-- TEXTURE FILTERS -->
        <!-- Subtle noise for skin pores/irregularity -->
        <filter id="skin_pore_filter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" in="noise" result="softNoise" />
            <feComposite operator="in" in="softNoise" in2="SourceGraphic" result="composite" />
            <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
        </filter>

        <!-- GOOEY FILTER (Standard - Torso/Limbs) -->
        <filter id="skin_gooey_filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            
            <!-- Skin Color -->
            <feFlood flood-color="#e0ac69" result="skinFlood" />
            <feComposite in="skinFlood" in2="goo" operator="in" result="coloredGoo" />
            
            <!-- Specular Highlight -->
             <feGaussianBlur in="goo" stdDeviation="4" result="softGoo"/>
             <feSpecularLighting in="softGoo" surfaceScale="2" specularConstant="0.4" specularExponent="15" lighting-color="#ffffff" result="spec">
                <fePointLight x="-500" y="-1000" z="800"/>
             </feSpecularLighting>
             <feComposite in="spec" in2="coloredGoo" operator="in" result="highlight"/>
             <feComposite in="highlight" in2="coloredGoo" operator="over" result="litSkin"/>
             
             <!-- OUTLINE (Edge Detection) -->
             <feMorphology in="goo" operator="dilate" radius="2" result="dilated" />
             <feComposite in="dilated" in2="goo" operator="out" result="outlineMask" />
             <feFlood flood-color="#5a4030" flood-opacity="0.6" result="outlineFlood" />
             <feComposite in="outlineFlood" in2="outlineMask" operator="in" result="outline" />
             
             <!-- Final Composite -->
             <feComposite in="outline" in2="litSkin" operator="over" />
        </filter>

        <!-- GOOEY FILTER (Detailed - Hands/Feet/Face) -->
        <!-- Lower blur radius (2.5px) to preserve finger/toe separation -->
        <filter id="skin_gooey_filter_detailed">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -9" result="goo" />
            
            <!-- Skin Color -->
            <feFlood flood-color="#e0ac69" result="skinFlood" />
            <feComposite in="skinFlood" in2="goo" operator="in" result="coloredGoo" />
            
            <!-- Specular Highlight -->
             <feGaussianBlur in="goo" stdDeviation="1" result="softGoo"/>
             <feSpecularLighting in="softGoo" surfaceScale="2" specularConstant="0.4" specularExponent="15" lighting-color="#ffffff" result="spec">
                <fePointLight x="-500" y="-1000" z="800"/>
             </feSpecularLighting>
             <feComposite in="spec" in2="coloredGoo" operator="in" result="highlight"/>
             <feComposite in="highlight" in2="coloredGoo" operator="over" result="litSkin"/>
             
             <!-- OUTLINE (Edge Detection) -->
             <feMorphology in="goo" operator="dilate" radius="1" result="dilated" />
             <feComposite in="dilated" in2="goo" operator="out" result="outlineMask" />
             <feFlood flood-color="#5a4030" flood-opacity="0.8" result="outlineFlood" />
             <feComposite in="outlineFlood" in2="outlineMask" operator="in" result="outline" />
             
             <!-- Final Composite -->
             <feComposite in="outline" in2="litSkin" operator="over" />
        </filter>

        <!-- SPECULAR HIGHLIGHT (To simulate skin oil/sweat) -->
         <filter id="skin_specular">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#bbbbbb" result="specOut">
                <fePointLight x="-5000" y="-10000" z="20000"/>
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint"/>
        </filter>
    </defs>
`;
