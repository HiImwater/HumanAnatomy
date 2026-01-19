
export const handsMusclesSVG = `
    <g id="muscles_hands" class="muscle-group">
        <!-- 
            PALMAR APONEUROSIS
            Tough fibrous triangle in the center of the palm.
        -->
        <path id="f_palmar_aponeurosis_l" class="fascia" data-name="Palmar Aponeurosis"
            d="M -350 1025 L -400 1100 L -330 1100 Z" opacity="0.4" />
        <path id="f_palmar_aponeurosis_r" class="fascia" data-name="Palmar Aponeurosis"
            d="M 350 1025 L 400 1100 L 330 1100 Z" opacity="0.4" />

        <!-- 
            LEFT HAND MUSCLES (Anatomically Anchored)
        -->
        <!-- THENAR EMINENCE -->
        <path id="m_abductor_pb_l" class="muscle-superficial muscle" data-name="Abductor Pollicis Brevis"
            d="M -380 1035
               Q -415 1060, -415 1095
               L -405 1098
               Q -395 1065, -375 1045
               Z" />
        <path id="m_flexor_pb_l" class="muscle-superficial muscle" data-name="Flexor Pollicis Brevis"
            d="M -370 1050
               Q -395 1075, -410 1098
               L -400 1102
               Q -385 1080, -365 1055
               Z" />
        <path id="m_opponens_pol_l" class="muscle-deep muscle" data-name="Opponens Pollicis"
            d="M -385 1050
               Q -410 1065, -400 1085
               L -390 1080
               Q -380 1065, -385 1050
               Z" />

        <!-- HYPOTHENAR EMINENCE -->
        <path id="m_abductor_dm_l" class="muscle-superficial muscle" data-name="Abductor Digiti Minimi"
            d="M -341 1040
               Q -325 1075, -335 1115
               L -342 1118
               Q -335 1085, -345 1045
               Z" />
        <path id="m_flexor_dmb_l" class="muscle-superficial muscle" data-name="Flexor Digiti Minimi Brevis"
            d="M -350 1060
               Q -345 1085, -340 1115
               L -348 1118
               Q -355 1085, -350 1060
               Z" />
        <path id="m_opponens_dm_l" class="muscle-deep muscle" data-name="Opponens Digiti Minimi"
            d="M -350 1060
               Q -355 1075, -345 1098
               L -338 1095
               Q -345 1075, -350 1060
               Z" />

        <!-- MID-PALMAR MUSCLES (LEFT) -->
        <path id="m_adductor_pol_l" class="muscle-deep muscle" data-name="Adductor Pollicis"
            d="M -365 1070
               L -365 1095
               L -405 1100
               Q -385 1085, -365 1070
               Z" />

        <!-- Lumbricals (Anchored between MCs to PP base) -->
        <path id="m_lumbrical_1_l" class="muscle-superficial muscle" data-name="Lumbrical 1" d="M -380 1080 Q -390 1095, -392 1111 L -388 1114 Q -385 1100, -378 1082 Z" />
        <path id="m_lumbrical_2_l" class="muscle-superficial muscle" data-name="Lumbrical 2" d="M -370 1085 Q -377 1100, -380 1117 L -376 1120 Q -373 1105, -368 1087 Z" />
        <path id="m_lumbrical_3_l" class="muscle-superficial muscle" data-name="Lumbrical 3" d="M -360 1090 Q -365 1105, -365 1118 L -361 1121 Q -358 1106, -358 1092 Z" />
        <path id="m_lumbrical_4_l" class="muscle-superficial muscle" data-name="Lumbrical 4" d="M -350 1095 Q -347 1105, -347 1111 L -343 1114 Q -344 1100, -348 1097 Z" />

        <!-- Dorsal Interossei (Anchored between MCs to PP base) -->
        <path id="m_dorsal_int_1_l" class="muscle-deep muscle" data-name="1st Dorsal Interosseous" d="M -385 1075 Q -395 1095, -390 1110 L -386 1105 Q -375 1090, -375 1075 Z" />
        <path id="m_dorsal_int_2_l" class="muscle-deep muscle" data-name="2nd Dorsal Interosseous" d="M -372 1080 Q -375 1100, -378 1115 L -374 1110 Q -368 1095, -368 1080 Z" />
        <path id="m_dorsal_int_3_l" class="muscle-deep muscle" data-name="3rd Dorsal Interosseous" d="M -362 1085 Q -370 1100, -375 1115 L -371 1110 Q -358 1095, -358 1085 Z" />
        <path id="m_dorsal_int_4_l" class="muscle-deep muscle" data-name="4th Dorsal Interosseous" d="M -352 1090 Q -360 1105, -363 1115 L -359 1110 Q -348 1100, -348 1090 Z" />

        <!-- Palmar Interossei (Anchored MC to PP base) -->
        <path id="m_palmar_int_1_l" class="muscle-deep muscle" data-name="1st Palmar Interosseous" d="M -375 1080 L -388 1110 L -384 1112 Z" />
        <path id="m_palmar_int_2_l" class="muscle-deep muscle" data-name="2nd Palmar Interosseous" d="M -355 1090 L -362 1115 L -358 1117 Z" />
        <path id="m_palmar_int_3_l" class="muscle-deep muscle" data-name="3rd Palmar Interosseous" d="M -345 1100 L -345 1110 L -341 1112 Z" />

        <!-- 
            RIGHT HAND MUSCLES (Mirrored)
        -->
        <!-- THENAR EMINENCE -->
        <path id="m_abductor_pb_r" class="muscle-superficial muscle" data-name="Abductor Pollicis Brevis"
            d="M 380 1035
               Q 415 1060, 415 1095
               L 405 1098
               Q 395 1065, 375 1045
               Z" />
        <path id="m_flexor_pb_r" class="muscle-superficial muscle" data-name="Flexor Pollicis Brevis"
            d="M 370 1050
               Q 395 1075, 410 1098
               L 400 1102
               Q 385 1080, 365 1055
               Z" />
        <path id="m_opponens_pol_r" class="muscle-deep muscle" data-name="Opponens Pollicis"
            d="M 385 1050
               Q 410 1065, 400 1085
               L 390 1080
               Q 380 1065, 385 1050
               Z" />

        <!-- HYPOTHENAR EMINENCE -->
        <path id="m_abductor_dm_r" class="muscle-superficial muscle" data-name="Abductor Digiti Minimi"
            d="M 341 1040
               Q 325 1075, 335 1115
               L 342 1118
               Q 335 1085, 345 1045
               Z" />
        <path id="m_flexor_dmb_r" class="muscle-superficial muscle" data-name="Flexor Digiti Minimi Brevis"
            d="M 350 1060
               Q 345 1085, 340 1115
               L 348 1118
               Q 355 1085, 350 1060
               Z" />
        <path id="m_opponens_dm_r" class="muscle-deep muscle" data-name="Opponens Digiti Minimi"
            d="M 350 1060
               Q 355 1075, 345 1098
               L 338 1095
               Q 345 1075, 350 1060
               Z" />

        <!-- MID-PALMAR MUSCLES (RIGHT) -->
        <path id="m_adductor_pol_r" class="muscle-deep muscle" data-name="Adductor Pollicis"
            d="M 365 1070
               L 365 1095
               L 405 1100
               Q 385 1085, 365 1070
               Z" />

        <path id="m_lumbrical_1_r" class="muscle-superficial muscle" data-name="Lumbrical 1" d="M 380 1080 Q 390 1095, 392 1111 L 388 1114 Q 385 1100, 378 1082 Z" />
        <path id="m_lumbrical_2_r" class="muscle-superficial muscle" data-name="Lumbrical 2" d="M 370 1085 Q 377 1100, 380 1117 L 376 1120 Q 373 1105, 368 1087 Z" />
        <path id="m_lumbrical_3_r" class="muscle-superficial muscle" data-name="Lumbrical 3" d="M 360 1090 Q 365 1105, 365 1118 L 361 1121 Q 358 1106, 358 1092 Z" />
        <path id="m_lumbrical_4_r" class="muscle-superficial muscle" data-name="Lumbrical 4" d="M 350 1095 Q 347 1105, 347 1111 L 343 1114 Q 344 1100, 348 1097 Z" />

        <path id="m_dorsal_int_1_r" class="muscle-deep muscle" data-name="1st Dorsal Interosseous" d="M 385 1075 Q 395 1095, 390 1110 L 386 1105 Q 375 1090, 375 1075 Z" />
        <path id="m_dorsal_int_2_r" class="muscle-deep muscle" data-name="2nd Dorsal Interosseous" d="M 372 1080 Q 375 1100, 378 1115 L 374 1110 Q 368 1095, 368 1080 Z" />
        <path id="m_dorsal_int_3_r" class="muscle-deep muscle" data-name="3rd Dorsal Interosseous" d="M 362 1085 Q 370 1100, 375 1115 L 371 1110 Q 358 1095, 358 1085 Z" />
        <path id="m_dorsal_int_4_r" class="muscle-deep muscle" data-name="4th Dorsal Interosseous" d="M 352 1090 Q 360 1105, 363 1115 L 359 1110 Q 348 1100, 348 1090 Z" />

        <path id="m_palmar_int_1_r" class="muscle-deep muscle" data-name="1st Palmar Interosseous" d="M 375 1080 L 388 1110 L 384 1112 Z" />
        <path id="m_palmar_int_2_r" class="muscle-deep muscle" data-name="2nd Palmar Interosseous" d="M 355 1090 L 362 1115 L 358 1117 Z" />
        <path id="m_palmar_int_3_r" class="muscle-deep muscle" data-name="3rd Palmar Interosseous" d="M 345 1100 L 345 1110 L 341 1112 Z" />
    </g>
`;
