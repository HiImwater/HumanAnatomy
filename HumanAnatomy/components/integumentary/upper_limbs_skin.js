export const upperLimbsSkinSVG = `
    <g id="skin_upper_limbs" filter="url(#skin_pore_filter)">
        <!-- LEFT ARM DETAILS -->
        <g id="skin_arm_left">
            <!-- BASE SEGMENTS -->
            <path id="skin_arm_upper_left" class="skin-segment"
                d="M -140 330
                   C -180 330, -240 380, -270 480
                   C -290 580, -330 700, -315 750
                   L -286 750
                   C -260 650, -210 450, -185 345
                   Q -175 345, -140 330
                   Z" />

            <!-- DETAIL: MUSCLE DEFINITION (Biceps/Triceps Grooves) -->
            <path id="skin_arm_detail_bicep_l" class="skin-shadow"
                d="M -210 450 Q -240 600, -280 750 L -270 750 Q -230 600, -200 450 Z" />
            <path id="skin_arm_detail_tricep_l" class="skin-shadow"
                d="M -220 420 Q -240 550, -286 740 L -276 740 Q -230 550, -210 420 Z" opacity="0.2" />

            <path id="skin_arm_lower_left" class="skin-segment"
                d="M -315 750
                   Q -375 830, -390 920
                   L -375 1040
                   L -285 1040
                   L -280 950
                   Q -270 850, -260 780
                   L -286 750
                   Z" />

            <!-- DETAIL: AXILLARY BRIDGE (Armpit Seal) -->
            <path id="skin_axilla_l" class="skin-segment"
                d="M -180 345
                   Q -190 400, -205 450
                   L -230 450
                   Q -210 400, -180 345 Z" opacity="0.8" />
            
            <!-- DETAIL: SHOULDER WRAP (Acromion/Clavicle Junction) -->
            <path id="skin_shoulder_wrap_l" class="skin-segment"
                d="M -130 310
                   Q -170 300, -220 325
                   L -240 400
                   L -180 400
                   L -140 330
                   Z" />

            <!-- DETAIL: ELBOW CAP (Joint Wrap) -->
            <path id="skin_elbow_wrap_l" class="skin-segment"
                d="M -270 730
                   L -360 740
                   L -360 800
                   L -260 790
                   Z" />

            <!-- DETAIL: WRIST BAND (Carpal Seal) -->
            <path id="skin_wrist_wrap_l" class="skin-segment"
                d="M -300 1020
                   L -395 1050
                   L -395 1070
                   L -260 1070
                   L -260 1050
                   Z" />
        </g>

        <!-- RIGHT ARM DETAILS -->
        <g id="skin_arm_right">
            <!-- BASE SEGMENTS -->
            <path id="skin_arm_upper_right" class="skin-segment"
                d="M 140 330
                   C 180 330, 240 380, 270 480
                   C 290 580, 330 700, 315 750
                   L 286 750
                   C 260 650, 210 450, 185 345
                   Q 175 345, 140 330
                   Z" />

            <!-- DETAIL: MUSCLE DEFINITION -->
            <path id="skin_arm_detail_bicep_r" class="skin-shadow"
                d="M 210 450 Q 240 600, 280 750 L 270 750 Q 230 600, 200 450 Z" />
            <path id="skin_arm_detail_tricep_r" class="skin-shadow"
                d="M 220 420 Q 240 550, 286 740 L 276 740 Q 230 550, 210 420 Z" opacity="0.2" />

            <path id="skin_arm_lower_right" class="skin-segment"
                d="M 315 750
                   Q 375 830, 390 920
                   L 375 1040
                   L 285 1040
                   L 280 950
                   Q 270 850, 260 780
                   L 286 750
                   Z" />

            <!-- DETAIL: AXILLARY BRIDGE -->
            <path id="skin_axilla_r" class="skin-segment"
                d="M 180 345
                   Q 190 400, 205 450
                   L 230 450
                   Q 210 400, 180 345 Z" opacity="0.8" />

            <!-- DETAIL: SHOULDER WRAP -->
            <path id="skin_shoulder_wrap_r" class="skin-segment"
                d="M 130 310
                   Q 170 300, 220 325
                   L 240 400
                   L 180 400
                   L 140 330
                   Z" />

            <!-- DETAIL: ELBOW CAP -->
            <path id="skin_elbow_wrap_r" class="skin-segment"
                d="M 270 730
                   L 360 740
                   L 360 800
                   L 260 790
                   Z" />

            <!-- DETAIL: WRIST BAND -->
            <path id="skin_wrist_wrap_r" class="skin-segment"
                d="M 300 1020
                   L 395 1050
                   L 395 1070
                   L 260 1070
                   L 260 1050
                   Z" />
        </g>
    </g>
`;
