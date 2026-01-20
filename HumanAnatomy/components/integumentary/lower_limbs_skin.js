export const lowerLimbsSkinSVG = `
    <g id="skin_lower_limbs" filter="url(#skin_pore_filter)">
        <g id="skin_leg_left">
            <!-- BASE SEGMENTS -->
            <path id="skin_leg_upper_left" class="skin-segment"
                d="M -180 940
                   Q -200 1100, -185 1250
                   Q -180 1350, -155 1480
                   L -60 1480
                   Q -35 1350, -30 1200
                   Q -25 1050, -50 940
                   Z" />

            <path id="skin_leg_lower_left" class="skin-segment"
                d="M -145 1450
                   Q -170 1550, -155 1700
                   L -130 1860
                   L -125 2020
                   L -45 1900
                   L -70 1860
                   Q -45 1700, -40 1550
                   L -80 1450
                   Q -110 1445, -145 1450
                   Z" />

            <!-- DETAIL: HIP CAP (Femoral Head Seal) -->
            <path id="skin_hip_cap_l" class="skin-segment"
                d="M -185 960
                   C -200 950, -120 940, -100 960
                   L -80 1020
                   L -185 960 Z" />

            <!-- DETAIL: KNEE JOINT WRAP (Patellar/Popliteal Enclosure) -->
            <path id="skin_knee_wrap_l" class="skin-segment"
                d="M -180 1420
                   L -190 1550
                   L -30 1550
                   L -50 1420
                   Z" />
             <circle cx="-110" cy="1465" r="22" fill="url(#skin_highlight_radial)" opacity="0.6" />

            <!-- DETAIL: ANKLE SHIELD (Malleolar Wrap) -->
            <path id="skin_ankle_shield_l" class="skin-segment"
                d="M -160 1840
                   L -175 2040
                   L -30 2040
                   L -50 1840
                   Z" />
        </g>

        <g id="skin_leg_right">
            <!-- BASE SEGMENTS -->
            <path id="skin_leg_upper_right" class="skin-segment"
                d="M 180 940
                   Q 200 1100, 185 1250
                   Q 180 1350, 155 1480
                   L 60 1480
                   Q 35 1350, 30 1200
                   Q 25 1050, 50 940
                   Z" />

            <path id="skin_leg_lower_right" class="skin-segment"
                d="M 145 1450
                   Q 170 1550, 155 1700
                   L 130 1860
                   L 125 2020
                   L 45 1900
                   L 70 1860
                   Q 45 1700, 40 1550
                   L 80 1450
                   Q 110 1445, 145 1450
                   Z" />

            <!-- DETAIL: HIP CAP -->
            <path id="skin_hip_cap_r" class="skin-segment"
                d="M 165 980
                   C 175 960, 130 950, 100 960
                   L 80 1020
                   L 165 980 Z" opacity="0.9" />

            <!-- DETAIL: KNEE JOINT WRAP -->
            <path id="skin_knee_wrap_r" class="skin-segment"
                d="M 180 1420
                   L 190 1550
                   L 30 1550
                   L 50 1420
                   Z" />
             <circle cx="110" cy="1465" r="18" fill="url(#skin_highlight_radial)" opacity="0.4" />

            <!-- DETAIL: ANKLE SHIELD -->
            <path id="skin_ankle_shield_r" class="skin-segment"
                d="M 160 1840
                   L 175 2040
                   L 30 2040
                   L 50 1840
                   Z" />
        </g>
    </g>
`;
