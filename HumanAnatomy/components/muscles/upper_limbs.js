
export const upperLimbsMusclesSVG = `
    <g id="muscles_upper_limbs_all">
        <!-- 
            CONNECTIVE TISSUES (Aponeurosis & Tendons)
        -->
        <path id="f_bicipital_aponeurosis_l" class="fascia" data-name="Bicipital Aponeurosis" d="M -286 741 L -310 760 L -295 800 L -270 780 Z" opacity="0.5" />
        <path id="f_bicipital_aponeurosis_r" class="fascia" data-name="Bicipital Aponeurosis" d="M 286 741 L 310 760 L 295 800 L 270 780 Z" opacity="0.5" />
        <path id="t_triceps_l" class="tendon" data-name="Triceps Tendon" d="M -286 740 L -270 760 L -300 760 L -310 740 Z" />
        <path id="t_triceps_r" class="tendon" data-name="Triceps Tendon" d="M 286 740 L 270 760 L 300 760 L 310 740 Z" />

        <!-- ANCONEUS (Elbow Stabilizer - New Depth) -->
        <path id="m_anconeus_l" class="muscle-deep muscle" data-name="Anconeus" d="M -286 740 L -295 760 L -305 750 Z" />
        <path id="m_anconeus_r" class="muscle-deep muscle" data-name="Anconeus" d="M 286 740 L 295 760 L 305 750 Z" />

        <!-- DELTOID -->
        <g id="muscles_deltoid">
            <path id="m_deltoid_post_l" class="muscle-arm-superficial muscle" data-name="Deltoid (Posterior)" d="M -160 335 L -180 340 C -220 360, -250 450, -245 525 L -225 535 Q -200 400, -160 335 Z" />
            <path id="m_deltoid_ant_l" class="muscle-superficial muscle" data-name="Deltoid (Anterior)" d="M -130 320 C -160 320, -185 330, -200 345 C -230 380, -255 450, -245 530 L -215 540 C -225 460, -200 380, -130 320 Z" />
            <path id="m_deltoid_lat_l" class="muscle-superficial muscle" data-name="Deltoid (Lateral)" d="M -185 335 C -220 340, -260 400, -275 480 C -280 540, -260 560, -245 550 L -230 530 C -240 450, -210 360, -185 335 Z" />
            <path id="m_deltoid_post_r" class="muscle-superficial muscle" data-name="Deltoid (Posterior)" d="M 160 335 L 180 340 C 220 360, 250 450, 245 525 L 225 535 Q 200 400, 160 335 Z" />
            <path id="m_deltoid_ant_r" class="muscle-superficial muscle" data-name="Deltoid (Anterior)" d="M 130 320 C 160 320, 185 330, 200 345 C 230 380, 255 450, 245 530 L 215 540 C 225 460, 200 380, 130 320 Z" />
            <path id="m_deltoid_lat_r" class="muscle-superficial muscle" data-name="Deltoid (Lateral)" d="M 185 335 C 220 340, 260 400, 275 480 C 280 540, 260 560, 245 550 L 230 530 C 240 450, 210 360, 185 335 Z" />
        </g>

        <!-- ROTATOR CUFF -->
        <path id="m_supraspinatus_l" class="muscle-deep muscle" data-name="Supraspinatus" d="M -140 330 L -175 335 L -185 345 L -160 345 Z" />
        <path id="m_supraspinatus_r" class="muscle-deep muscle" data-name="Supraspinatus" d="M 140 330 L 175 335 L 185 345 L 160 345 Z" />
        <path id="m_teres_major_l" class="muscle-deep muscle" data-name="Teres Major" d="M -125 480 Q -160 470, -195 430 L -185 415 Q -140 460, -125 485 Z" />
        <path id="m_teres_major_r" class="muscle-deep muscle" data-name="Teres Major" d="M 125 480 Q 160 470, 195 430 L 185 415 Q 140 460, 125 485 Z" />
        <path id="m_coraco_l" class="muscle-deep muscle" data-name="Coracobrachialis" d="M -140 355 Q -155 420, -195 530 L -175 540 Q -135 430, -140 355 Z" />
        <path id="m_coraco_r" class="muscle-deep muscle" data-name="Coracobrachialis" d="M 140 355 Q 155 420, 195 530 L 175 540 Q 135 430, 140 355 Z" />

        <!-- BICEPS & BRACHIALIS -->
        <path id="m_biceps_l" class="muscle-superficial muscle" data-name="Biceps Brachii" d="M -185 345 C -200 450, -245 650, -280 770 C -290 790, -320 795, -315 780 Q -280 650, -220 450 C -205 380, -185 345, -185 345 Z" />
        <path id="m_biceps_r" class="muscle-superficial muscle" data-name="Biceps Brachii" d="M 185 345 C 200 450, 245 650, 280 770 C 290 790, 320 795, 315 780 Q 280 650, 220 450 C 205 380, 185 345, 185 345 Z" />
        <path id="m_brachialis_l" class="muscle-deep muscle" data-name="Brachialis" d="M -210 500 Q -240 650, -295 760 L -275 770 Q -230 650, -210 500 Z" />
        <path id="m_brachialis_r" class="muscle-deep muscle" data-name="Brachialis" d="M 210 500 Q 240 650, 295 760 L 275 770 Q 230 650, 210 500 Z" />

        <!-- ARCHITECTURE OF TRICEPS (Completed 3 Heads) -->
        <path id="m_triceps_long_l" class="muscle-deep muscle" data-name="Triceps (Long Head)" d="M -175 365 Q -195 550, -286 740 L -260 745 Q -185 550, -175 365 Z" />
        <path id="m_triceps_lat_l" class="muscle-deep muscle" data-name="Triceps (Lateral Head)" d="M -215 420 Q -250 550, -310 740 L -286 741 Q -245 550, -215 420 Z" />
        <path id="m_triceps_med_l" class="muscle-deep muscle" data-name="Triceps (Medial Head)" d="M -200 600 Q -230 680, -286 750 L -270 760 Q -220 680, -200 600 Z" opacity="0.6" />
        <path id="m_triceps_long_r" class="muscle-deep muscle" data-name="Triceps (Long Head)" d="M 175 365 Q 195 550, 286 740 L 260 745 Q 185 550, 175 365 Z" />
        <path id="m_triceps_lat_r" class="muscle-deep muscle" data-name="Triceps (Lateral Head)" d="M 215 420 Q 250 550, 310 740 L 286 741 Q 245 550, 215 420 Z" />
        <path id="m_triceps_med_r" class="muscle-deep muscle" data-name="Triceps (Medial Head)" d="M 200 600 Q 230 680, 286 750 L 270 760 Q 220 680, 200 600 Z" opacity="0.6" />

        <!-- FOREARM DEEP & MID-LAYER -->
        <g id="muscles_forearm_deep" opacity="0.7">
            <!-- Supinator -->
            <path id="m_supinator_l" class="muscle-deep muscle" data-name="Supinator" d="M -286 741 Q -300 780, -320 820 L -305 830 Q -295 790, -286 741 Z" />
            <path id="m_supinator_r" class="muscle-deep muscle" data-name="Supinator" d="M 286 741 Q 300 780, 320 820 L 305 830 Q 295 790, 286 741 Z" />
            
            <path id="m_fds_l" class="muscle-deep muscle" data-name="Flexor Digitorum Superficialis" d="M -290 770 Q -330 850, -370 1040 L -350 1045 Q -310 850, -290 770 Z" />
            <path id="m_fds_r" class="muscle-deep muscle" data-name="Flexor Digitorum Superficialis" d="M 290 770 Q 330 850, 370 1040 L 350 1045 Q 310 850, 290 770 Z" />
            
            <path id="m_fdp_l" class="muscle-deep muscle" data-name="Flexor Digitorum Profundus" d="M -286 760 Q -320 850, -350 1020 L -335 1025 Q -300 850, -286 760 Z" />
            <path id="m_fdp_r" class="muscle-deep muscle" data-name="Flexor Digitorum Profundus" d="M 286 760 Q 320 850, 350 1020 L 335 1025 Q 300 850, 286 760 Z" />
            
            <!-- Outcropping Muscles of Thumb -->
            <path id="m_apl_l" class="muscle-deep muscle" data-name="Abductor Pollicis Longus" d="M -320 880 L -375 1030 L -365 1035 Z" />
            <path id="m_apl_r" class="muscle-deep muscle" data-name="Abductor Pollicis Longus" d="M 320 880 L 375 1030 L 365 1035 Z" />
            <path id="m_epb_l" class="muscle-deep muscle" data-name="Extensor Pollicis Brevis" d="M -330 900 L -380 1040 L -372 1042 Z" />
            <path id="m_epb_r" class="muscle-deep muscle" data-name="Extensor Pollicis Brevis" d="M 330 900 L 380 1040 L 372 1042 Z" />
            <path id="m_epl_l" class="muscle-deep muscle" data-name="Extensor Pollicis Longus" d="M -320 850 L -385 1050 L -378 1055 Z" />
            <path id="m_epl_r" class="muscle-deep muscle" data-name="Extensor Pollicis Longus" d="M 320 850 L 385 1050 L 378 1055 Z" />
            <path id="m_ei_l" class="muscle-deep muscle" data-name="Extensor Indicis" d="M -310 920 L -360 1050 L -355 1055 Z" />
            <path id="m_ei_r" class="muscle-deep muscle" data-name="Extensor Indicis" d="M 310 920 L 360 1050 L 355 1055 Z" />

            <path id="m_fpl_l" class="muscle-deep muscle" data-name="Flexor Pollicis Longus" d="M -310 800 Q -340 900, -365 1020 L -350 1025 Q -320 900, -310 800 Z" />
            <path id="m_fpl_r" class="muscle-deep muscle" data-name="Flexor Pollicis Longus" d="M 310 800 Q 340 900, 365 1020 L 350 1025 Q 320 900, 310 800 Z" />
            <path id="m_pron_quad_l" class="muscle-deep muscle" data-name="Pronator Quadratus" d="M -330 980 L -365 1010 L -360 1030 L -325 1000 Z" />
            <path id="m_pron_quad_r" class="muscle-deep muscle" data-name="Pronator Quadratus" d="M 330 980 L 365 1010 L 360 1030 L 325 1000 Z" />
        </g>

        <!-- FOREARM SUPERFICIAL -->
        <g id="muscles_forearm_superficial">
            <path id="m_brachioradialis_l" class="muscle-superficial muscle" data-name="Brachioradialis" d="M -315 745 Q -365 850, -370 1040 L -350 1045 Q -345 850, -295 765 Z" />
            <path id="m_brachioradialis_r" class="muscle-superficial muscle" data-name="Brachioradialis" d="M 315 745 Q 365 850, 370 1040 L 350 1045 Q 345 850, 295 765 Z" />
            <path id="m_ext_digitorum_l" class="muscle-superficial muscle" data-name="Extensor Digitorum" d="M -305 760 Q -350 850, -360 1030 L -340 1035 Q -330 850, -300 760 Z" />
            <path id="m_ext_digitorum_r" class="muscle-superficial muscle" data-name="Extensor Digitorum" d="M 305 760 Q 350 850, 360 1030 L 340 1035 Q 330 850, 300 760 Z" />
            <path id="m_pronator_l" class="muscle-deep muscle" data-name="Pronator Teres" d="M -286 741 Q -310 820, -345 920 L -330 930 Q -295 830, -275 755 Z" />
            <path id="m_pronator_r" class="muscle-deep muscle" data-name="Pronator Teres" d="M 286 741 Q 310 820, 345 920 L 330 930 Q 295 830, 275 755 Z" />
            <path id="m_fcr_l" class="muscle-superficial muscle" data-name="Flexor Carpi Radialis" d="M -286 741 Q -330 850, -373 1063 L -355 1068 Q -310 850, -280 765 Z" />
            <path id="m_fcr_r" class="muscle-superficial muscle" data-name="Flexor Carpi Radialis" d="M 286 741 Q 330 850, 373 1063 L 355 1068 Q 310 850, 280 765 Z" />
            <path id="m_palmaris_l" class="muscle-superficial muscle" data-name="Palmaris Longus" d="M -286 741 Q -315 850, -358 1045 L -340 1050 Q -300 850, -280 770 Z" />
            <path id="m_palmaris_r" class="muscle-superficial muscle" data-name="Palmaris Longus" d="M 286 741 Q 315 850, 358 1045 L 340 1050 Q 300 850, 280 770 Z" />
            <path id="m_fcu_l" class="muscle-superficial muscle" data-name="Flexor Carpi Ulnaris" d="M -286 741 Q -300 850, -344 1038 L -325 1045 Q -280 850, -270 775 Z" />
            <path id="m_fcu_r" class="muscle-superficial muscle" data-name="Flexor Carpi Ulnaris" d="M 286 741 Q 300 850, 344 1038 L 325 1045 Q 280 850, 270 775 Z" />
        </g>

        <!-- EXTENSOR TENDONS -->
        <g id="tendons_hand_extensors" opacity="0.6">
            <path id="t_ext_dig_l" class="tendon" d="M -360 1030 L -395 1100 M -360 1030 L -380 1110 M -360 1030 L -365 1110 M -360 1030 L -345 1100" stroke-width="1.5" fill="none" />
            <path id="t_ext_dig_r" class="tendon" d="M 360 1030 L 395 1100 M 360 1030 L 380 1110 M 360 1030 L 365 1110 M 360 1030 L 345 1100" stroke-width="1.5" fill="none" />
        </g>
    </g>
`;
