export const handsSkinSVG = `
    <g id="skin_hands" filter="url(#skin_pore_filter)">
        <defs>
            <linearGradient id="nail-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffe6e6" />
                <stop offset="100%" stop-color="#ffcccc" />
            </linearGradient>
            <style>
                .skin-crease { stroke: #cc9999; stroke-width: 1.5; fill: none; opacity: 0.5; }
                .skin-highlight { fill: url(#skin_highlight_radial); opacity: 0.4; }
                .skin-segment { fill: url(#skin_base_fair); stroke: none; }
            </style>
        </defs>

        <!-- ==================== LEFT HAND (Precise Segmentation) ==================== -->
        <g id="skin_hand_left">
            
            <!-- PALM (Base) -->
            <!-- Wraps around Carpal/Metacarpal block -->
            <path id="skin_palm_left" class="skin-segment"
                d="M -275 1020
                   L -355 1020
                   C -365 1030, -390 1050, -405 1070
                   Q -415 1090, -410 1105
                   L -392 1110
                   L -380 1117
                   L -365 1118
                   L -346 1110
                   L -330 1100
                   Q -300 1060, -275 1020 Z" />

            <!-- THUMB (I) -->
            <!-- Bone PP1: -408,1092 -> -425,1112 -->
            <path id="skin_thumb_prox_left" class="skin-segment"
                d="M -395 1085
                   Q -405 1095, -415 1105
                   L -420 1120
                   L -435 1115
                   L -425 1085
                   Q -410 1075, -395 1085 Z" />
            
            <!-- Bone DP1: -427,1120 -> -442,1135 -->
            <path id="skin_thumb_dist_left" class="skin-segment"
                d="M -420 1120
                   L -425 1135
                   Q -430 1145, -440 1148
                   Q -450 1145, -452 1135
                   Q -450 1125, -440 1115
                   L -435 1115
                   Z" />

            <!-- INDEX (II) -->
            <!-- Bone PP2: -392,1110 -> -403,1139 -->
            <path id="skin_index_prox_left" class="skin-segment"
                d="M -382 1105
                   L -392 1142
                   L -413 1138
                   L -402 1100
                   Z" />
            <!-- Bone MP2: -405,1144 -> -412,1163 -->
            <path id="skin_index_mid_left" class="skin-segment"
                d="M -392 1140
                   L -400 1165
                   L -420 1160
                   L -413 1136
                   Z" />
            <!-- Bone DP2: -415,1170 -> -418,1180 -->
            <path id="skin_index_dist_left" class="skin-segment"
                d="M -400 1164
                   L -405 1180
                   Q -408 1188, -418 1188
                   Q -425 1185, -425 1175
                   L -420 1160
                   Z" />

            <!-- MIDDLE (III) -->
            <!-- Bone PP3: -380,1117 -> -390,1152 -->
            <path id="skin_middle_prox_left" class="skin-segment"
                d="M -370 1115
                   L -378 1155
                   L -400 1150
                   L -390 1110
                   Z" />
            <!-- Bone MP3: -391,1158 -> -397,1181 -->
            <path id="skin_middle_mid_left" class="skin-segment"
                d="M -378 1153
                   L -385 1185
                   L -407 1180
                   L -400 1148
                   Z" />
            <!-- Bone DP3: -399,1187 -> -402,1200 -->
            <path id="skin_middle_dist_left" class="skin-segment"
                d="M -385 1183
                   L -388 1205
                   Q -390 1215, -402 1215
                   Q -412 1210, -410 1200
                   L -407 1178
                   Z" />

            <!-- RING (IV) -->
            <!-- Bone PP4: -365,1118 -> -370,1147 -->
            <path id="skin_ring_prox_left" class="skin-segment"
                d="M -355 1115
                   L -358 1150
                   L -380 1148
                   L -375 1112
                   Z" />
            <!-- Bone MP4: -370,1154 -> -373,1173 -->
            <path id="skin_ring_mid_left" class="skin-segment"
                d="M -358 1148
                   L -360 1178
                   L -382 1175
                   L -380 1146
                   Z" />
            <!-- Bone DP4: -374,1180 -> -375,1191 -->
            <path id="skin_ring_dist_left" class="skin-segment"
                d="M -360 1176
                   L -362 1195
                   Q -364 1205, -375 1205
                   Q -385 1200, -384 1190
                   L -382 1173
                   Z" />

            <!-- PINKY (V) -->
            <!-- Bone PP5: -346,1110 -> -342,1134 -->
            <path id="skin_pinky_prox_left" class="skin-segment"
                d="M -335 1105
                   L -330 1138
                   L -352 1140
                   L -355 1108
                   Z" />
            <!-- Bone MP5: -342,1142 -> -339,1162 -->
            <path id="skin_pinky_mid_left" class="skin-segment"
                d="M -330 1136
                   L -328 1165
                   L -350 1168
                   L -352 1138
                   Z" />
            <!-- Bone DP5: -339,1169 -> -337,1180 -->
            <path id="skin_pinky_dist_left" class="skin-segment"
                d="M -328 1163
                   L -326 1180
                   Q -326 1190, -337 1190
                   Q -348 1185, -350 1175
                   L -350 1166
                   Z" />

             <!-- PALMAR DETAILS -->
             <path class="skin-highlight" d="M -340 1050 Q -380 1070, -400 1100 L -380 1110 Q -350 1080, -335 1060 Z" />
             <path class="skin-highlight" d="M -330 1060 Q -335 1090, -330 1110 L -340 1110 Q -350 1080, -345 1060 Z" />
             <path class="skin-crease" d="M -325 1080 Q -350 1090, -380 1085" />
             <path class="skin-crease" d="M -340 1075 Q -360 1085, -390 1080" />
             <path class="skin-crease" d="M -345 1065 Q -370 1080, -385 1100" />
        </g>

        <!-- ==================== RIGHT HAND (Precise Segmentation - Mirrored) ==================== -->
        <g id="skin_hand_right">
            
            <!-- PALM -->
            <path id="skin_palm_right" class="skin-segment"
                d="M 275 1020
                   L 355 1020
                   C 365 1030, 390 1050, 405 1070
                   Q 415 1090, 410 1105
                   L 392 1110
                   L 380 1117
                   L 365 1118
                   L 346 1110
                   L 330 1100
                   Q 300 1060, 275 1020 Z" />

            <!-- THUMB -->
            <path id="skin_thumb_prox_right" class="skin-segment"
                d="M 395 1085 Q 405 1095, 415 1105 L 420 1120 L 435 1115 L 425 1085 Q 410 1075, 395 1085 Z" />
            <path id="skin_thumb_dist_right" class="skin-segment"
                d="M 420 1120 L 425 1135 Q 430 1145, 440 1148 Q 450 1145, 452 1135 Q 450 1125, 440 1115 L 435 1115 Z" />

            <!-- INDEX -->
            <path id="skin_index_prox_right" class="skin-segment"
                d="M 382 1105 L 392 1142 L 413 1138 L 402 1100 Z" />
            <path id="skin_index_mid_right" class="skin-segment"
                d="M 392 1140 L 400 1165 L 420 1160 L 413 1136 Z" />
            <path id="skin_index_dist_right" class="skin-segment"
                d="M 400 1164 L 405 1180 Q 408 1188, 418 1188 Q 425 1185, 425 1175 L 420 1160 Z" />

            <!-- MIDDLE -->
            <path id="skin_middle_prox_right" class="skin-segment"
                d="M 370 1115 L 378 1155 L 400 1150 L 390 1110 Z" />
            <path id="skin_middle_mid_right" class="skin-segment"
                d="M 378 1153 L 385 1185 L 407 1180 L 400 1148 Z" />
            <path id="skin_middle_dist_right" class="skin-segment"
                d="M 385 1183 L 388 1205 Q 390 1215, 402 1215 Q 412 1210, 410 1200 L 407 1178 Z" />

            <!-- RING -->
            <path id="skin_ring_prox_right" class="skin-segment"
                d="M 355 1115 L 358 1150 L 380 1148 L 375 1112 Z" />
            <path id="skin_ring_mid_right" class="skin-segment"
                d="M 358 1148 L 360 1178 L 382 1175 L 380 1146 Z" />
            <path id="skin_ring_dist_right" class="skin-segment"
                d="M 360 1176 L 362 1195 Q 364 1205, 375 1205 Q 385 1200, 384 1190 L 382 1173 Z" />

            <!-- PINKY -->
            <path id="skin_pinky_prox_right" class="skin-segment"
                d="M 335 1105 L 330 1138 L 352 1140 L 355 1108 Z" />
            <path id="skin_pinky_mid_right" class="skin-segment"
                d="M 330 1136 L 328 1165 L 350 1168 L 352 1138 Z" />
            <path id="skin_pinky_dist_right" class="skin-segment"
                d="M 328 1163 L 326 1180 Q 326 1190, 337 1190 Q 348 1185, 350 1175 L 350 1166 Z" />

             <!-- PALMAR DETAILS -->
             <path class="skin-highlight" d="M 340 1050 Q 380 1070, 400 1100 L 380 1110 Q 350 1080, 335 1060 Z" />
             <path class="skin-highlight" d="M 330 1060 Q 335 1090, 330 1110 L 340 1110 Q 350 1080, 345 1060 Z" />
             <path class="skin-crease" d="M 325 1080 Q 350 1090, 380 1085" />
             <path class="skin-crease" d="M 340 1075 Q 360 1085, 390 1080" />
             <path class="skin-crease" d="M 345 1065 Q 370 1080, 385 1100" />
        </g>
    </g>
`;
