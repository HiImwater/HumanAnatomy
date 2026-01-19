export const upperLimbsMusclesSVG = `
    <g id="muscles_upper_limbs_all">
        <!-- 
            CONNECTIVE TISSUES (Aponeurosis & Tendons)
        -->
        <!-- Bicipital Aponeurosis (Lacertus Fibrosus) -->
        <path id="f_bicipital_aponeurosis_l" class="fascia" data-name="Bicipital Aponeurosis"
            d="M -286 741 L -310 760 L -295 800 L -270 780 Z" opacity="0.5" />
        <path id="f_bicipital_aponeurosis_r" class="fascia" data-name="Bicipital Aponeurosis"
            d="M 286 741 L 310 760 L 295 800 L 270 780 Z" opacity="0.5" />

        <!-- Triceps Tendon -->
        <path id="t_triceps_l" class="tendon" data-name="Triceps Tendon"
            d="M -286 740 L -270 760 L -300 760 L -310 740 Z" />
        <path id="t_triceps_r" class="tendon" data-name="Triceps Tendon"
            d="M 286 740 L 270 760 L 300 760 L 310 740 Z" />
        <!-- 
            DELTOID
            Redesigned for A-Pose (15 degree rotation)
        -->
        
        <!-- 
            DELTOID - 3 Heads (Anterior, Lateral, Posterior)
        -->
        
        <!-- Left Deltoid -->
        <!-- Posterior Deltoid (Scapular Spine) -->
        <path id="m_deltoid_post_l" class="muscle-arm-superficial muscle" data-name="Deltoid (Posterior)"
            d="M -160 335
               L -180 340
               C -220 360, -250 450, -245 525
               L -225 535
               Q -200 400, -160 335
               Z" />
        <path id="m_deltoid_ant_l" class="muscle-superficial muscle" data-name="Deltoid (Anterior)"
            d="M -130 320
               C -160 320, -185 330, -200 345
               C -230 380, -255 450, -245 530
               L -215 540
               C -225 460, -200 380, -130 320
               Z" />
        <path id="m_deltoid_lat_l" class="muscle-superficial muscle" data-name="Deltoid (Lateral)"
            d="M -185 335
               C -220 340, -260 400, -275 480
               C -280 540, -260 560, -245 550
               L -230 530
               C -240 450, -210 360, -185 335
               Z" />

        <!-- Right Deltoid -->
        <path id="m_deltoid_post_r" class="muscle-superficial muscle" data-name="Deltoid (Posterior)"
            d="M 160 335
               L 180 340
               C 220 360, 250 450, 245 525
               L 225 535
               Q 200 400, 160 335
               Z" />
        <path id="m_deltoid_ant_r" class="muscle-superficial muscle" data-name="Deltoid (Anterior)"
            d="M 130 320
               C 160 320, 185 330, 200 345
               C 230 380, 255 450, 245 530
               L 215 540
               C 225 460, 200 380, 130 320
               Z" />
        <path id="m_deltoid_lat_r" class="muscle-superficial muscle" data-name="Deltoid (Lateral)"
            d="M 185 335
               C 220 340, 260 400, 275 480
               C 280 540, 260 560, 245 550
               L 230 530
               C 240 450, 210 360, 185 335
               Z" />

        <!-- 
            ROTATOR CUFF & STABILIZERS
        -->
        <!-- Supraspinatus -->
        <path id="m_supraspinatus_l" class="muscle-deep muscle" data-name="Supraspinatus" data-medical-name="Musculus supraspinatus"
            d="M -140 330 L -175 335 L -185 345 L -160 345 Z" />
        <path id="m_supraspinatus_r" class="muscle-deep muscle" data-name="Supraspinatus" data-medical-name="Musculus supraspinatus"
            d="M 140 330 L 175 335 L 185 345 L 160 345 Z" />

        <!-- Teres Major - Scapula to Humerus -->
        <path id="m_teres_major_l" class="muscle-deep muscle" data-name="Teres Major" data-medical-name="Musculus teres major"
            d="M -125 480
               Q -160 470, -195 430
               L -185 415
               Q -140 460, -125 485
               Z" />
        <path id="m_teres_major_r" class="muscle-deep muscle" data-name="Teres Major" data-medical-name="Musculus teres major"
            d="M 125 480
               Q 160 470, 195 430
               L 185 415
               Q 140 460, 125 485
               Z" />

        <!-- 
            CORACOBRACHIALIS - Coracoid to Medial Humerus
        -->
        <path id="m_coraco_l" class="muscle-deep muscle" data-name="Coracobrachialis"
            d="M -140 355
               Q -155 420, -195 530
               L -175 540
               Q -135 430, -140 355
               Z" />
         <path id="m_coraco_r" class="muscle-deep muscle" data-name="Coracobrachialis"
            d="M 140 355
               Q 155 420, 195 530
               L 175 540
               Q 135 430, 140 355
               Z" />

        <!-- 
            BICEPS BRACHII - Two heads inserting at Radius
        -->
        <!-- Left Biceps -->
        <path id="m_biceps_l" class="muscle-superficial muscle" data-name="Biceps Brachii"
            d="M -185 345
               C -200 450, -245 650, -280 770
               C -290 790, -320 795, -315 780
               Q -280 650, -220 450
               C -205 380, -185 345, -185 345
               Z" />
        
        <!-- Right Biceps -->
        <path id="m_biceps_r" class="muscle-superficial muscle" data-name="Biceps Brachii"
            d="M 185 345
               C 200 450, 245 650, 280 770
               C 290 790, 320 795, 315 780
               Q 280 650, 220 450
               C 205 380, 185 345, 185 345
               Z" />

        <!-- BRACHIALIS - Deep to Biceps, Humerus to Ulna -->
        <path id="m_brachialis_l" class="muscle-deep muscle" data-name="Brachialis"
            d="M -210 500
               Q -240 650, -295 760
               L -275 770
               Q -230 650, -210 500
               Z" />
        <path id="m_brachialis_r" class="muscle-deep muscle" data-name="Brachialis"
             d="M 210 500
                Q 240 650, 295 760
                L 275 770
                Q 230 650, 210 500
                Z" />

        <!-- TRICEPS BRACHII - Three heads inserting at Ulna (Olecranon) -->
        <!-- Left Triceps -->
        <path id="m_triceps_long_l" class="muscle-deep muscle" data-name="Triceps (Long Head)"
            d="M -175 365
               Q -195 550, -286 740
               L -260 745
               Q -185 550, -175 365 Z" />
        <path id="m_triceps_lat_l" class="muscle-deep muscle" data-name="Triceps (Lateral Head)"
            d="M -215 420
               Q -250 550, -310 740
               L -286 741
               Q -245 550, -215 420 Z" />

        <!-- Right Triceps -->
        <path id="m_triceps_long_r" class="muscle-deep muscle" data-name="Triceps (Long Head)"
            d="M 175 365
               Q 195 550, 286 740
               L 260 745
               Q 185 550, 175 365 Z" />
        <path id="m_triceps_lat_r" class="muscle-deep muscle" data-name="Triceps (Lateral Head)"
            d="M 215 420
               Q 250 550, 310 740
               L 286 741
               Q 245 550, 215 420 Z" />


        <!-- FOREARM MUSCLES - Extended to Y=1050 -->
        
        <!-- LEFT FOREARM -->
        <path id="m_pronator_l" class="muscle-deep muscle" data-name="Pronator Teres"
            d="M -286 741
               Q -310 820, -345 920
               L -330 930
               Q -295 830, -275 755
               Z" />
        <path id="m_brachioradialis_l" class="muscle-superficial muscle" data-name="Brachioradialis"
            d="M -315 745
               Q -365 850, -370 1040
               L -350 1045
               Q -345 850, -295 765
               Z" />
        <path id="m_fcr_l" class="muscle-superficial muscle" data-name="Flexor Carpi Radialis"
            d="M -286 741
               Q -330 850, -373 1063
               L -355 1068
               Q -310 850, -280 765
               Z" />
        <path id="m_palmaris_l" class="muscle-superficial muscle" data-name="Palmaris Longus"
            d="M -286 741
               Q -315 850, -358 1045
               L -340 1050
               Q -300 850, -280 770
               Z" />
        <path id="m_fcu_l" class="muscle-superficial muscle" data-name="Flexor Carpi Ulnaris"
            d="M -286 741
               Q -300 850, -344 1038
               L -325 1045
               Q -280 850, -270 775
               Z" />
        <path id="m_forearm_extensors_l" class="muscle-deep muscle" data-name="Forearm Extensors"
            d="M -305 760
               Q -360 850, -365 1060
               L -345 1065
               Q -340 850, -310 755
               Z" />

        <!-- RIGHT FOREARM -->
        <path id="m_pronator_r" class="muscle-deep muscle" data-name="Pronator Teres"
            d="M 286 741
               Q 310 820, 345 920
               L 330 930
               Q 295 830, 275 755
               Z" />
        <path id="m_brachioradialis_r" class="muscle-superficial muscle" data-name="Brachioradialis"
            d="M 315 745
               Q 365 850, 370 1040
               L 350 1045
               Q 345 850, 295 765
               Z" />
        <path id="m_fcr_r" class="muscle-superficial muscle" data-name="Flexor Carpi Radialis"
            d="M 286 741
               Q 330 850, 373 1063
               L 355 1068
               Q 310 850, 280 765
               Z" />
        <path id="m_palmaris_r" class="muscle-superficial muscle" data-name="Palmaris Longus"
            d="M 286 741
               Q 315 850, 358 1045
               L 340 1050
               Q 300 850, 280 770
               Z" />
        <path id="m_fcu_r" class="muscle-superficial muscle" data-name="Flexor Carpi Ulnaris"
            d="M 286 741
               Q 300 850, 344 1038
               L 325 1045
               Q 280 850, 270 775
               Z" />
        <path id="m_forearm_extensors_r" class="muscle-deep muscle" data-name="Forearm Extensors"
            d="M 305 760
               Q 360 850, 365 1060
               L 345 1065
               Q 340 850, 310 755
               Z" />
    </g>
    </g>
`;
