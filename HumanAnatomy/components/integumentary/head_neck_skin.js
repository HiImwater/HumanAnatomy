export const headNeckSkinSVG = `
    <g id="skin_head_neck" filter="url(#skin_pore_filter)">
        <!-- BASE SEGMENTS -->
        <path id="skin_neck" class="skin-segment"
            d="M -85 220
               L -85 180
               Q 0 170, 85 180
               L 85 220
               Q 100 280, 150 310
               L 200 380
               L -200 380
               L -150 310
               Q -100 280, -85 220
               Z" />

        <path id="skin_head" class="skin-segment" fill-rule="evenodd"
            d="M 0 -55
               C 50 -55, 90 0, 95 60
               C 98 80, 102 95, 105 105
               L 105 125
               Q 95 140, 85 150
               L 85 220
               Q 0 240, -85 220
               L -85 150
               Q -95 140, -105 125
               L -105 105
               C -102 95, -98 80, -95 60
               C -90 0, -50 -55, 0 -55
               Z
               M -30 90 C -30 84, -60 84, -65 92 C -60 100, -30 100, -30 90 Z
               M 30 90 C 30 84, 60 84, 65 92 C 60 100, 30 100, 30 90 Z
               M -25 168 Q 0 165, 25 168 Q 0 175, -25 168 Z" />

        <!-- DETAIL: ORBITAL/ZYGOMATIC MASKS (Eye Socket Seal) -->
        <path id="skin_orbital_mask_l" class="skin-segment"
            d="M -15 70
               C -40 70, -75 80, -75 110
               L -75 130
               L -15 130
               Z" />
        <path id="skin_orbital_mask_r" class="skin-segment"
            d="M 15 70
               C 40 70, 75 80, 75 110
               L 75 130
               L 15 130
               Z" />

        <!-- DETAIL: MANDIBULAR WRAP (Lower Jaw Containment) -->
        <path id="skin_mandible_wrap" class="skin-segment"
            d="M -90 120
               L -95 180
               Q -80 230, 0 245
               Q 80 230, 95 180
               L 90 120
               Z" />

        <!-- DETAIL: CERVICAL SHIELD (Spine Coverage) -->
        <path id="skin_cervical_shield" class="skin-segment"
            d="M -60 180 L 60 180 L 70 380 L -70 380 Z" />

        <!-- DETAIL: TRAPEZIUS WRAPS -->
        <path id="skin_trap_wrap_l" class="skin-segment"
            d="M -85 220 Q -100 280, -210 380 L -140 380 Q -90 280, -85 220 Z" />
        <path id="skin_trap_wrap_r" class="skin-segment"
            d="M 85 220 Q 100 280, 210 380 L 140 380 Q 90 280, 85 220 Z" />

        <!-- DETAIL: EAR JUNCTION -->
        <path id="skin_ear_junction_l" class="skin-segment"
            d="M -95 80 Q -105 80, -112 110 L -95 110 Z" opacity="0.9" />
        <path id="skin_ear_junction_r" class="skin-segment"
            d="M 95 80 Q 105 80, 112 110 L 95 110 Z" opacity="0.9" />

        <!-- EARS -->
        <path id="skin_ear_l" class="skin-segment"
            d="M -95 80 C -110 75, -115 90, -112 110 C -110 120, -100 130, -90 125 Z" />
        <path id="skin_ear_r" class="skin-segment"
            d="M 95 80 C 110 75, 115 90, 112 110 C 110 120, 100 130, 90 125 Z" />
    </g>
`;
