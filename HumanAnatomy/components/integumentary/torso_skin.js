export const torsoSkinSVG = `
    <g id="skin_torso" filter="url(#skin_pore_filter)">
        <!-- 
             CHEST SEGMENT (Thorax)
             Clavicles to Costal Margin.
        -->
        <!-- BASE SEGMENTS -->
        <path id="skin_torso_upper" class="skin-segment"
            d="M -220 330
               L -50 350
               L 50 350
               L 220 330
               L 230 380
               Q 200 450, 185 500
               C 175 600, 160 700, 155 750
               Q 100 780, 0 770
               Q -100 780, -155 750
               C -160 700, -175 600, -185 500
               Q -200 450, -230 380
               Z" />

        <path id="skin_torso_lower" class="skin-segment"
            d="M -150 680
               Q -100 700, 0 690
               Q 100 700, 150 680
               Q 155 750, 175 800
               Q 200 900, 195 980
               L 165 1060
               L 0 1080
               L -165 1060
               L -195 980
               Q -200 900, -175 800
               Q -155 750, -150 680
               Z" />

        <!-- DETAIL: SUPRA-STERNAL BRIDGE (Clavicle/Neck Junction) -->
        <path id="skin_sternal_bridge" class="skin-segment"
            d="M -220 280
               C -150 270, 150 270, 220 280
               L 230 450
               L -230 450
               Z" />

        <!-- DETAIL: LATERAL RIB WRAPS (Side Enclosure) -->
        <path id="skin_rib_wrap_l" class="skin-segment"
            d="M -160 400
               C -210 550, -200 650, -170 720
               L -140 720
               L -140 400 Z" />
        <path id="skin_rib_wrap_r" class="skin-segment"
            d="M 160 400
               C 210 550, 200 650, 170 720
               L 140 720
               L 140 400 Z" />

        <!-- DETAIL: INGUINAL/PELVIC SHIELDS (Hip Connection) -->
        <path id="skin_pelvic_shield_l" class="skin-segment"
            d="M -195 950
               L -210 1100
               L -40 1100
               L -80 950
               Z" />
        <path id="skin_pelvic_shield_r" class="skin-segment"
            d="M 195 950
               L 210 1100
               L 40 1100
               L 80 950
               Z" />
        
        <path id="skin_pubic_patch" class="skin-segment"
            d="M -120 1010 Q 0 1080, 120 1010 L 100 1100 L -100 1100 Z" />

        <!-- DEFINITION & SHADING (Restored as overlays) -->
        <g id="torso_details">
            <path fill="url(#muscle_shadow)" opacity="0.3" d="M -3 500 L -2 950 L 2 950 L 3 500 Z" />
            <circle cx="0" cy="850" r="8" fill="url(#crease_shadow)" opacity="0.6" />
            <path d="M -5 845 Q 0 855, 5 845" stroke="#3a2b1a" stroke-width="1" opacity="0.3" fill="none" />
            
            <!-- Pectoral/Serratus Details -->
            <path fill="url(#muscle_shadow)" opacity="0.4" d="M -2 380 L -5 490 L 5 490 L 2 380 Z" />
            <g opacity="0.2">
                <path fill="url(#muscle_shadow)" d="M -140 500 L -160 510 L -140 520 Z" />
                <path fill="url(#muscle_shadow)" d="M -145 540 L -165 550 L -145 560 Z" />
                <path fill="url(#muscle_shadow)" d="M 140 500 L 160 510 L 140 520 Z" />
                <path fill="url(#muscle_shadow)" d="M 145 540 L 165 550 L 145 560 Z" />
            </g>
        </g>
    </g>
`;
