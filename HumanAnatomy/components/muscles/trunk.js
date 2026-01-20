
export const trunkMusclesSVG = `
    <g id="muscles_trunk_all">
        <!-- 
            THORACOLUMBAR FASCIA
            Large diamond-shaped connective tissue sheet in the lower back.
        -->
        <path id="f_thoracolumbar" class="fascia" data-name="Thoracolumbar Fascia"
            d="M 0 650 L -130 830 L 0 950 L 130 830 Z" opacity="0.4" />

    <g id="muscles_neck" class="muscle-group">
        <!-- Scalenes (Deep) -->
        <path id="m_scalene_l" class="muscle-deep muscle" data-name="Scalenes" d="M -35 330 Q -40 290, -45 250 L -50 220 L -55 225 Q -50 280, -45 330 Z" />
        <path id="m_scalene_r" class="muscle-deep muscle" data-name="Scalenes" d="M 35 330 Q 40 290, 45 250 L 50 220 L 55 225 Q 50 280, 45 330 Z" />
    </g>

    <!-- DEEP SEGMENTAL SPINE (Clinical Density) -->
    <g id="muscles_trunk_deep_spine" class="muscle-group">
        
        <!-- ROTATORES BREVIS (C3-L5) -->
        <g id="muscles_rotatores_brevis" opacity="0.7">
            <!-- Cervical Slips -->
            <path id="m_rot_b_c3_l" class="muscle-deep muscle" data-name="Rotatores Brevis (C3)" d="M -5 160 L -12 165 L -5 170 Z" />
            <path id="m_rot_b_c4_l" class="muscle-deep muscle" data-name="Rotatores Brevis (C4)" d="M -5 180 L -12 185 L -5 190 Z" />
            <path id="m_rot_b_c5_l" class="muscle-deep muscle" data-name="Rotatores Brevis (C5)" d="M -5 200 L -12 205 L -5 210 Z" />
            <path id="m_rot_b_c6_l" class="muscle-deep muscle" data-name="Rotatores Brevis (C6)" d="M -5 220 L -12 225 L -5 230 Z" />
            
            <!-- Thoracic Slips (Existing + Completion) -->
            <path id="m_rot_b_t1_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T1)" d="M -5 320 L -15 325 L -5 330 Z" />
            <path id="m_rot_b_t2_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T2)" d="M -5 345 L -15 350 L -5 355 Z" />
            <path id="m_rot_b_t3_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T3)" d="M -5 370 L -15 375 L -5 380 Z" />
            <path id="m_rot_b_t4_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T4)" d="M -5 395 L -15 400 L -5 405 Z" />
            <path id="m_rot_b_t5_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T5)" d="M -5 420 L -15 425 L -5 430 Z" />
            <path id="m_rot_b_t6_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T6)" d="M -5 445 L -15 450 L -5 455 Z" />
            <path id="m_rot_b_t7_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T7)" d="M -5 470 L -15 475 L -5 480 Z" />
            <path id="m_rot_b_t8_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T8)" d="M -5 495 L -15 500 L -5 505 Z" />
            <path id="m_rot_b_t9_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T9)" d="M -5 520 L -15 525 L -5 530 Z" />
            <path id="m_rot_b_t10_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T10)" d="M -5 545 L -15 550 L -5 555 Z" />
            <path id="m_rot_b_t11_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T11)" d="M -5 570 L -15 575 L -5 580 Z" />
            <path id="m_rot_b_t12_l" class="muscle-deep muscle" data-name="Rotatores Brevis (T12)" d="M -5 595 L -15 600 L -5 605 Z" />

            <!-- Lumbar Slips -->
            <path id="m_rot_b_l1_l" class="muscle-deep muscle" data-name="Rotatores Brevis (L1)" d="M -5 660 L -20 665 L -5 670 Z" />
            <path id="m_rot_b_l2_l" class="muscle-deep muscle" data-name="Rotatores Brevis (L2)" d="M -5 700 L -20 705 L -5 710 Z" />
            <path id="m_rot_b_l3_l" class="muscle-deep muscle" data-name="Rotatores Brevis (L3)" d="M -5 740 L -20 745 L -5 750 Z" />
            <path id="m_rot_b_l4_l" class="muscle-deep muscle" data-name="Rotatores Brevis (L4)" d="M -5 780 L -20 785 L -5 790 Z" />

            <!-- Mirrored Right Side -->
            <path id="m_rot_b_c3_r" class="muscle-deep muscle" data-name="Rotatores Brevis (C3)" d="M 5 160 L 12 165 L 5 170 Z" />
            <path id="m_rot_b_c4_r" class="muscle-deep muscle" data-name="Rotatores Brevis (C4)" d="M 5 180 L 12 185 L 5 190 Z" />
            <path id="m_rot_b_c5_r" class="muscle-deep muscle" data-name="Rotatores Brevis (C5)" d="M 5 200 L 12 205 L 5 210 Z" />
            <path id="m_rot_b_c6_r" class="muscle-deep muscle" data-name="Rotatores Brevis (C6)" d="M 5 220 L 12 225 L 5 230 Z" />

            <path id="m_rot_b_t1_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T1)" d="M 5 320 L 15 325 L 5 330 Z" />
            <path id="m_rot_b_t2_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T2)" d="M 5 345 L 15 350 L 5 355 Z" />
            <path id="m_rot_b_t3_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T3)" d="M 5 370 L 15 375 L 5 380 Z" />
            <path id="m_rot_b_t4_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T4)" d="M 5 395 L 15 400 L 5 405 Z" />
            <path id="m_rot_b_t5_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T5)" d="M 5 420 L 15 425 L 5 430 Z" />
            <path id="m_rot_b_t6_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T6)" d="M 5 445 L 15 450 L 5 455 Z" />
            <path id="m_rot_b_t7_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T7)" d="M 5 470 L 15 475 L 5 480 Z" />
            <path id="m_rot_b_t8_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T8)" d="M 5 495 L 15 500 L 5 505 Z" />
            <path id="m_rot_b_t9_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T9)" d="M 5 520 L 15 525 L 5 530 Z" />
            <path id="m_rot_b_t10_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T10)" d="M 5 545 L 15 550 L 5 555 Z" />
            <path id="m_rot_b_t11_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T11)" d="M 5 570 L 15 575 L 5 580 Z" />
            <path id="m_rot_b_t12_r" class="muscle-deep muscle" data-name="Rotatores Brevis (T12)" d="M 5 595 L 15 600 L 5 605 Z" />

            <path id="m_rot_b_l1_r" class="muscle-deep muscle" data-name="Rotatores Brevis (L1)" d="M 5 660 L 20 665 L 5 670 Z" />
            <path id="m_rot_b_l2_r" class="muscle-deep muscle" data-name="Rotatores Brevis (L2)" d="M 5 700 L 20 705 L 5 710 Z" />
            <path id="m_rot_b_l3_r" class="muscle-deep muscle" data-name="Rotatores Brevis (L3)" d="M 5 740 L 20 745 L 5 750 Z" />
            <path id="m_rot_b_l4_r" class="muscle-deep muscle" data-name="Rotatores Brevis (L4)" d="M 5 780 L 20 785 L 5 790 Z" />
        </g>

        <!-- ROTATORES LONGI (T1-T11 - Spans 2 Vertebrae) -->
        <g id="muscles_rotatores_longi" opacity="0.6">
            <path id="m_rot_l_t1_l" class="muscle-deep muscle" data-name="Rotatores Longi (T1)" d="M -5 320 L -25 350 L -5 355 Z" />
            <path id="m_rot_l_t2_l" class="muscle-deep muscle" data-name="Rotatores Longi (T2)" d="M -5 345 L -25 375 L -5 380 Z" />
            <path id="m_rot_l_t3_l" class="muscle-deep muscle" data-name="Rotatores Longi (T3)" d="M -5 370 L -25 400 L -5 405 Z" />
            <path id="m_rot_l_t4_l" class="muscle-deep muscle" data-name="Rotatores Longi (T4)" d="M -5 395 L -25 425 L -5 430 Z" />
            <path id="m_rot_l_t5_l" class="muscle-deep muscle" data-name="Rotatores Longi (T5)" d="M -5 420 L -25 450 L -5 455 Z" />
            <path id="m_rot_l_t6_l" class="muscle-deep muscle" data-name="Rotatores Longi (T6)" d="M -5 445 L -25 475 L -5 480 Z" />
            <path id="m_rot_l_t7_l" class="muscle-deep muscle" data-name="Rotatores Longi (T7)" d="M -5 470 L -25 500 L -5 505 Z" />
            <path id="m_rot_l_t8_l" class="muscle-deep muscle" data-name="Rotatores Longi (T8)" d="M -5 495 L -25 525 L -5 530 Z" />
            <!-- Mirrored Right Side -->
            <path id="m_rot_l_t1_r" class="muscle-deep muscle" data-name="Rotatores Longi (T1)" d="M 5 320 L 25 350 L 5 355 Z" />
            <path id="m_rot_l_t2_r" class="muscle-deep muscle" data-name="Rotatores Longi (T2)" d="M 5 345 L 25 375 L 5 380 Z" />
            <path id="m_rot_l_t3_r" class="muscle-deep muscle" data-name="Rotatores Longi (T3)" d="M 5 370 L 25 400 L 5 405 Z" />
            <path id="m_rot_l_t4_r" class="muscle-deep muscle" data-name="Rotatores Longi (T4)" d="M 5 395 L 25 425 L 5 430 Z" />
            <path id="m_rot_l_t5_r" class="muscle-deep muscle" data-name="Rotatores Longi (T5)" d="M 5 420 L 25 450 L 5 455 Z" />
            <path id="m_rot_l_t6_r" class="muscle-deep muscle" data-name="Rotatores Longi (T6)" d="M 5 445 L 25 475 L 5 480 Z" />
            <path id="m_rot_l_t7_r" class="muscle-deep muscle" data-name="Rotatores Longi (T7)" d="M 5 470 L 25 500 L 5 505 Z" />
            <path id="m_rot_l_t8_r" class="muscle-deep muscle" data-name="Rotatores Longi (T8)" d="M 5 495 L 25 525 L 5 530 Z" />
        </g>

        <!-- INTERSPINALES (Between Spinous Processes) -->
        <g id="muscles_interspinales" opacity="0.8">
            <path id="m_isp_t1" class="muscle-deep muscle" data-name="Interspinales" d="M -2 335 L 2 335 L 2 345 L -2 345 Z" />
            <path id="m_isp_t2" class="muscle-deep muscle" data-name="Interspinales" d="M -2 360 L 2 360 L 2 370 L -2 370 Z" />
            <path id="m_isp_t3" class="muscle-deep muscle" data-name="Interspinales" d="M -2 385 L 2 385 L 2 395 L -2 395 Z" />
            <path id="m_isp_t4" class="muscle-deep muscle" data-name="Interspinales" d="M -2 410 L 2 410 L 2 420 L -2 420 Z" />
            <path id="m_isp_t5" class="muscle-deep muscle" data-name="Interspinales" d="M -2 435 L 2 435 L 2 445 L -2 445 Z" />
            <path id="m_isp_t6" class="muscle-deep muscle" data-name="Interspinales" d="M -2 460 L 2 460 L 2 470 L -2 470 Z" />
            <path id="m_isp_l1" class="muscle-deep muscle" data-name="Interspinales" d="M -3 665 L 3 665 L 3 685 L -3 685 Z" />
            <path id="m_isp_l2" class="muscle-deep muscle" data-name="Interspinales" d="M -3 705 L 3 705 L 3 725 L -3 725 Z" />
            <path id="m_isp_l3" class="muscle-deep muscle" data-name="Interspinales" d="M -3 745 L 3 745 L 3 765 L -3 765 Z" />
        </g>

        <!-- MULTIFIDUS SLIPS -->
        <g id="muscles_multifidus_segmented" opacity="0.8">
            <path id="m_multi_l1_l" class="muscle-deep muscle" data-name="Multifidus (L1)" d="M -5 650 L -25 670 L -10 680 Z" />
            <path id="m_multi_l1_r" class="muscle-deep muscle" data-name="Multifidus (L1)" d="M 5 650 L 25 670 L 10 680 Z" />
            <path id="m_multi_l2_l" class="muscle-deep muscle" data-name="Multifidus (L2)" d="M -5 690 L -25 710 L -10 720 Z" />
            <path id="m_multi_l2_r" class="muscle-deep muscle" data-name="Multifidus (L2)" d="M 5 690 L 25 710 L 10 720 Z" />
            <path id="m_multi_l3_l" class="muscle-deep muscle" data-name="Multifidus (L3)" d="M -5 730 L -25 750 L -10 760 Z" />
            <path id="m_multi_l3_r" class="muscle-deep muscle" data-name="Multifidus (L3)" d="M 5 730 L 25 750 L 10 760 Z" />
            <path id="m_multi_l4_l" class="muscle-deep muscle" data-name="Multifidus (L4)" d="M -5 770 L -25 790 L -10 800 Z" />
            <path id="m_multi_l4_r" class="muscle-deep muscle" data-name="Multifidus (L4)" d="M 5 770 L 25 790 L 10 800 Z" />
        </g>

        <!-- INTERTRANSVERSARII (Between Transverse Processes) -->
        <g id="muscles_intertransversarii" opacity="0.6">
            <path id="m_itr_l1_l" class="muscle-deep muscle" data-name="Intertransversarii (L1-L2)" d="M -25 675 L -35 685 L -30 690 Z" />
            <path id="m_itr_l2_l" class="muscle-deep muscle" data-name="Intertransversarii (L2-L3)" d="M -25 715 L -35 725 L -30 730 Z" />
            <path id="m_itr_l3_l" class="muscle-deep muscle" data-name="Intertransversarii (L3-L4)" d="M -25 755 L -35 765 L -30 770 Z" />
            <path id="m_itr_l4_l" class="muscle-deep muscle" data-name="Intertransversarii (L4-L5)" d="M -25 795 L -35 805 L -30 810 Z" />
            <!-- Mirrored -->
            <path id="m_itr_l1_r" class="muscle-deep muscle" data-name="Intertransversarii (L1-L2)" d="M 25 675 L 35 685 L 30 690 Z" />
            <path id="m_itr_l2_r" class="muscle-deep muscle" data-name="Intertransversarii (L2-L3)" d="M 25 715 L 35 725 L 30 730 Z" />
            <path id="m_itr_l3_r" class="muscle-deep muscle" data-name="Intertransversarii (L3-L4)" d="M 25 755 L 35 765 L 30 770 Z" />
            <path id="m_itr_l4_r" class="muscle-deep muscle" data-name="Intertransversarii (L4-L5)" d="M 25 795 L 35 805 L 30 810 Z" />
        </g>

        <!-- LEVATORES COSTARUM (T1-T12) -->
        <g id="muscles_levatores_costarum" opacity="0.6">
            <path id="m_lev_c_t1_l" class="muscle-deep muscle" data-name="Levatores Costarum" d="M -25 325 L -45 340 L -40 345 Z" />
            <path id="m_lev_c_t2_l" class="muscle-deep muscle" data-name="Levatores Costarum" d="M -25 350 L -50 365 L -45 370 Z" />
            <path id="m_lev_c_t3_l" class="muscle-deep muscle" data-name="Levatores Costarum" d="M -25 375 L -55 390 L -50 395 Z" />
            <path id="m_lev_c_t4_l" class="muscle-deep muscle" data-name="Levatores Costarum" d="M -25 400 L -60 415 L -55 420 Z" />
            <path id="m_lev_c_t5_l" class="muscle-deep muscle" data-name="Levatores Costarum" d="M -25 425 L -65 440 L -60 445 Z" />
            <!-- Mirrored -->
            <path id="m_lev_c_t1_r" class="muscle-deep muscle" data-name="Levatores Costarum" d="M 25 325 L 45 340 L 40 345 Z" />
            <path id="m_lev_c_t2_r" class="muscle-deep muscle" data-name="Levatores Costarum" d="M 25 350 L 50 365 L 45 370 Z" />
            <path id="m_lev_c_t3_r" class="muscle-deep muscle" data-name="Levatores Costarum" d="M 25 375 L 55 390 L 50 395 Z" />
            <path id="m_lev_c_t4_r" class="muscle-deep muscle" data-name="Levatores Costarum" d="M 25 400 L 60 415 L 55 420 Z" />
            <path id="m_lev_c_t5_r" class="muscle-deep muscle" data-name="Levatores Costarum" d="M 25 425 L 65 440 L 60 445 Z" />
        </g>

        <!-- ERECTOR SPINAE (3 Columns) -->
        <path id="m_iliocostalis_l" class="muscle-deep muscle" data-name="Iliocostalis" d="M -70 850 Q -80 750, -85 650 Q -90 550, -85 450 L -75 450 Q -70 550, -65 650 Q -60 750, -60 850 Z" />
        <path id="m_longissimus_l" class="muscle-deep muscle" data-name="Longissimus" d="M -55 850 Q -60 700, -65 550 Q -70 400, -60 300 L -50 300 Q -45 400, -50 550 Q -45 700, -45 850 Z" />
        <path id="m_spinalis_l" class="muscle-deep muscle" data-name="Spinalis" d="M -40 750 Q -45 600, -45 450 Q -45 350, -35 300 L -25 300 Q -30 350, -30 450 Q -30 600, -30 750 Z" />
        <path id="m_iliocostalis_r" class="muscle-deep muscle" data-name="Iliocostalis" d="M 70 850 Q 80 750, 85 650 Q 90 550, 85 450 L 75 450 Q 70 550, 65 650 Q 60 750, 60 850 Z" />
        <path id="m_longissimus_r" class="muscle-deep muscle" data-name="Longissimus" d="M 55 850 Q 60 700, 65 550 Q 70 400, 60 300 L 50 300 Q 45 400, 50 550 Q 45 700, 45 850 Z" />
        <path id="m_spinalis_r" class="muscle-deep muscle" data-name="Spinalis" d="M 40 750 Q 45 600, 45 450 Q 45 350, 35 300 L 25 300 Q 30 350, 30 450 Q 30 600, 30 750 Z" />
    </g>

    <g id="muscles_abdominal_deep" class="muscle-group">
        <path id="m_transverse_abd_l" class="muscle-deep muscle" data-name="Transverse Abdominis" d="M -135 520 L -5 515 L -5 950 L -140 890 Q -145 860, -150 840 L -135 760 L -115 660 Q -135 600, -135 520 Z" opacity="0.6" />
        <path id="m_transverse_abd_r" class="muscle-deep muscle" data-name="Transverse Abdominis" d="M 135 520 L 5 515 L 5 950 L 140 890 Q 145 860, 150 840 L 135 760 L 115 660 Q 135 600, 135 520 Z" opacity="0.6" />

        <!-- PELVIC FLOOR -->
        <path id="m_levator_ani_l" class="muscle-deep muscle" data-name="Levator Ani" d="M -5 1010 L -40 1010 Q -35 980, -5 970 Z" opacity="0.7" />
        <path id="m_levator_ani_r" class="muscle-deep muscle" data-name="Levator Ani" d="M 5 1010 L 40 1010 Q 35 980, 5 970 Z" opacity="0.7" />

        <!-- PERINEAL GROUP -->
        <g id="muscles_perineum" opacity="0.8">
            <path id="m_bulbospongiosus" class="muscle-deep muscle" data-name="Bulbospongiosus" d="M -10 1050 Q 0 1060, 10 1050 L 8 1080 Q 0 1090, -8 1080 Z" />
            <path id="m_ischiocavernosus_l" class="muscle-deep muscle" data-name="Ischiocavernosus" d="M -15 1055 L -45 1075 L -40 1085 L -12 1065 Z" />
            <path id="m_ischiocavernosus_r" class="muscle-deep muscle" data-name="Ischiocavernosus" d="M 15 1055 L 45 1075 L 40 1085 L 12 1065 Z" />
            <path id="m_ext_sphincter_ani" class="muscle-deep muscle" data-name="Ext. Sphincter Ani" d="M -15 1100 Q 0 1115, 15 1100 Q 0 1085, -15 1100 Z" />
        </g>
    </g>

    <g id="muscles_back_superficial" class="muscle-group">
        <path id="m_latissimus_l" class="muscle-superficial muscle" data-name="Latissimus Dorsi" d="M 0 480 L 0 830 Q -70 825, -135 832 Q -165 750, -170 600 Q -175 500, -175 410 L -180 415 Q -160 540, -135 565 L -130 575 L -115 585 L -125 600 L -110 610 L -120 625 L -105 635 L -115 650 L -105 660 Q -50 630, 0 480 Z" />
        <path id="m_latissimus_r" class="muscle-superficial muscle" data-name="Latissimus Dorsi" d="M 0 480 L 0 830 Q 70 825, 135 832 Q 165 750, 170 600 Q 175 500, 175 410 L 180 415 Q 160 540, 135 565 L 130 575 L 115 585 L 125 600 L 110 610 L 120 625 L 105 635 L 115 650 L 105 660 Q 50 630, 0 480 Z" />
        <path id="m_trap_upper_l" class="muscle-deep muscle" data-name="Trapezius (Upper)" d="M -15 230 C -40 250, -80 280, -175 326 L -110 330 Q -70 290, -15 310 Z" />
        <path id="m_trap_upper_r" class="muscle-deep muscle" data-name="Trapezius (Upper)" d="M 15 230 C 40 250, 80 280, 175 326 L 110 330 Q 70 290, 15 310 Z" />
    </g>

    <g id="muscles_abs_superficial" class="muscle-group">
        <path id="m_diaphragm" class="muscle-deep muscle" data-name="Diaphragm" d="M -135 520 C -135 450, 135 450, 135 520 L 125 535 C 100 480, -100 480, -125 535 Z" opacity="0.6" />
        <path id="m_rectus_l_1" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 1)" d="M -5 580 L -45 575 Q -52 640, -48 695 Q -25 700, -5 695 Z" />
        <path id="m_rectus_l_2" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 2)" d="M -5 705 Q -25 710, -48 705 Q -50 750, -45 795 Q -25 800, -5 795 Z" />
        <path id="m_rectus_l_3" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 3)" d="M -5 805 Q -25 810, -45 805 Q -45 850, -40 895 Q -25 900, -5 895 Z" />
        <path id="m_rectus_l_4" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 4)" d="M -5 905 Q -25 910, -40 905 Q -35 950, -25 1010 L -5 1010 Z" />
        <path id="m_rectus_r_1" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 1)" d="M 5 580 L 45 575 Q 52 640, 48 695 Q 25 700, 5 695 Z" />
        <path id="m_rectus_r_2" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 2)" d="M 5 705 Q 25 710, 48 705 Q 50 750, 45 795 Q 25 800, 5 795 Z" />
        <path id="m_rectus_r_3" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 3)" d="M 5 805 Q 25 810, 45 805 Q 45 850, 40 895 Q 25 900, 5 895 Z" />
        <path id="m_rectus_r_4" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 4)" d="M 5 905 Q 25 910, 40 905 Q 35 950, 25 1010 L 5 1010 Z" />

        <g id="rectus_fascia" opacity="0.8">
            <rect id="rectus_linea_alba" x="-2" y="580" width="4" height="430" fill="#f0f0f0" />
            <path id="rectus_intersection_1" d="M -50 700 Q 0 705, 50 700 L 50 705 Q 0 710, -50 705 Z" fill="#e0e0e0" />
            <path id="rectus_intersection_2" d="M -48 800 Q 0 805, 48 800 L 48 805 Q 0 810, -48 805 Z" fill="#e0e0e0" />
            <path id="rectus_intersection_3" d="M -45 900 Q 0 905, 45 900 L 45 905 Q 0 910, -45 905 Z" fill="#e0e0e0" />
        </g>
    </g>

    <g id="muscles_stomach_lateral" class="muscle-group">
        <path id="m_serratus_l" class="muscle-deep muscle" data-name="Serratus Anterior" d="M -135 480 L -165 490 L -140 500 Z M -140 510 L -170 525 L -145 535 Z M -145 540 L -175 555 L -150 565 Z M -150 570 L -180 585 L -155 595 Z M -155 600 L -185 615 L -160 625 Z" opacity="0.95" />
        <path id="m_serratus_r" class="muscle-deep muscle" data-name="Serratus Anterior" d="M 135 480 L 165 490 L 140 500 Z M 140 510 L 170 525 L 145 535 Z M 145 540 L 175 555 L 150 565 Z M 150 570 L 180 585 L 155 595 Z M 155 600 L 185 615 L 160 625 Z" opacity="0.95" />
        <path id="m_ext_oblique_l" class="muscle-deep muscle" data-name="External Oblique" d="M -160 480 L -130 490 L -160 505 M -165 515 L -135 525 L -165 540 M -170 550 L -140 560 L -170 575 M -175 585 L -145 600 L -175 615 M -180 625 L -150 640 L -180 655 M -175 665 L -145 680 L -175 695 M -170 705 Q -160 760, -150 820 L -135 830 Q -90 880, -40 1010 L -55 900 L -55 700 Q -52 600, -50 480 L -90 490 L -130 510 Z" opacity="0.85" />
        <path id="m_ext_oblique_r" class="muscle-deep muscle" data-name="External Oblique" d="M 160 480 L 130 490 L 160 505 M 165 515 L 135 525 L 165 540 M 170 550 L 140 560 L 170 575 M 175 585 L 145 600 L 175 615 M 180 625 L 150 640 L 180 655 M 175 665 L 145 680 L 175 695 M 170 705 Q 160 760, 150 820 L 135 830 Q 90 880, 40 1010 L 55 900 L 55 700 Q 52 600, 50 480 L 90 490 L 130 510 Z" opacity="0.85" />
    </g>

    <g id="muscles_trunk_deep" class="muscle-group">
        <!-- FULL INTERCOSTAL SERIES (T1-T11) -->
        <!-- External Intercostals: Detection class added -->
        <!-- CLIPPED to fit inside Torso Skin -->
        <g id="m_intercostals_ext_series" opacity="0.8">
             <path class="muscle" d="M -120 370 L -140 380 L -135 395 L -115 385 Z" data-name="Ext. Intercostal (T1-T2)" />
             <path class="muscle" d="M -125 400 L -145 410 L -140 425 L -120 415 Z" data-name="Ext. Intercostal (T2-T3)" />
             <path class="muscle" d="M -130 435 L -150 445 L -145 460 L -125 450 Z" data-name="Ext. Intercostal (T3-T4)" />
             <path class="muscle" d="M -135 470 L -155 480 L -150 495 L -130 485 Z" data-name="Ext. Intercostal (T4-T5)" />
             <path class="muscle" d="M -138 505 L -158 515 L -152 530 L -132 520 Z" data-name="Ext. Intercostal (T5-T6)" />
             <path class="muscle" d="M -140 540 L -160 550 L -155 565 L -135 555 Z" data-name="Ext. Intercostal (T6-T7)" />
             <path class="muscle" d="M -145 575 L -165 585 L -160 600 L -140 590 Z" data-name="Ext. Intercostal (T7-T8)" />
             <path class="muscle" d="M -148 610 L -168 620 L -162 635 L -142 625 Z" data-name="Ext. Intercostal (T8-T9)" />
             <path class="muscle" d="M -150 645 L -170 655 L -165 670 L -145 660 Z" data-name="Ext. Intercostal (T9-T10)" />
             <path class="muscle" d="M -152 680 L -172 690 L -167 705 L -147 695 Z" data-name="Ext. Intercostal (T10-T11)" />
             <path class="muscle" d="M -155 715 L -175 725 L -170 740 L -150 730 Z" data-name="Ext. Intercostal (T11-T12)" />
             
             <!-- Right Side -->
             <path class="muscle" d="M 120 370 L 140 380 L 135 395 L 115 385 Z" data-name="Ext. Intercostal (T1-T2)" />
             <path class="muscle" d="M 125 400 L 145 410 L 140 425 L 120 415 Z" data-name="Ext. Intercostal (T2-T3)" />
             <path class="muscle" d="M 130 435 L 150 445 L 145 460 L 125 450 Z" data-name="Ext. Intercostal (T3-T4)" />
             <path class="muscle" d="M 135 470 L 155 480 L 150 495 L 130 485 Z" data-name="Ext. Intercostal (T4-T5)" />
             <path class="muscle" d="M 138 505 L 158 515 L 152 530 L 132 520 Z" data-name="Ext. Intercostal (T5-T6)" />
             <path class="muscle" d="M 140 540 L 160 550 L 155 565 L 135 555 Z" data-name="Ext. Intercostal (T6-T7)" />
             <path class="muscle" d="M 145 575 L 165 585 L 160 600 L 140 590 Z" data-name="Ext. Intercostal (T7-T8)" />
             <path class="muscle" d="M 148 610 L 168 620 L 162 635 L 142 625 Z" data-name="Ext. Intercostal (T8-T9)" />
             <path class="muscle" d="M 150 645 L 170 655 L 165 670 L 145 660 Z" data-name="Ext. Intercostal (T9-T10)" />
             <path class="muscle" d="M 152 680 L 172 690 L 167 705 L 147 695 Z" data-name="Ext. Intercostal (T10-T11)" />
             <path class="muscle" d="M 155 715 L 175 725 L 170 740 L 150 730 Z" data-name="Ext. Intercostal (T11-T12)" />
        </g>


        <!-- Internal Intercostals -->
        <g id="m_intercostals_int_series" opacity="0.6">
             <path class="muscle" d="M -30 350 L -50 355 L -55 345 L -35 340 Z" data-name="Int. Intercostal (T1-T2)" />
             <path class="muscle" d="M -30 385 L -60 395 L -65 380 L -35 370 Z" data-name="Int. Intercostal (T2-T3)" />
             <path class="muscle" d="M -30 420 L -65 430 L -70 415 L -35 405 Z" data-name="Int. Intercostal (T3-T4)" />
             <path class="muscle" d="M -35 450 L -70 465 L -75 450 L -40 435 Z" data-name="Int. Intercostal (T4-T5)" />
             <path class="muscle" d="M -35 485 L -75 500 L -80 485 L -40 470 Z" data-name="Int. Intercostal (T5-T6)" />
             <path class="muscle" d="M -40 520 L -80 535 L -85 520 L -45 505 Z" data-name="Int. Intercostal (T6-T7)" />
             <path class="muscle" d="M -45 555 L -85 570 L -90 555 L -50 540 Z" data-name="Int. Intercostal (T7-T8)" />
             <path class="muscle" d="M -50 590 L -90 605 L -95 590 L -55 575 Z" data-name="Int. Intercostal (T8-T9)" />
             <!-- Right Side -->
             <path class="muscle" d="M 30 350 L 50 355 L 55 345 L 35 340 Z" data-name="Int. Intercostal (T1-T2)" />
             <path class="muscle" d="M 30 385 L 60 395 L 65 380 L 35 370 Z" data-name="Int. Intercostal (T2-T3)" />
             <path class="muscle" d="M 30 420 L 65 430 L 70 415 L 35 405 Z" data-name="Int. Intercostal (T3-T4)" />
             <path class="muscle" d="M 35 450 L 70 465 L 75 450 L 40 435 Z" data-name="Int. Intercostal (T4-T5)" />
             <path class="muscle" d="M 35 485 L 75 500 L 80 485 L 40 470 Z" data-name="Int. Intercostal (T5-T6)" />
             <path class="muscle" d="M 40 520 L 80 535 L 85 520 L 45 505 Z" data-name="Int. Intercostal (T6-T7)" />
             <path class="muscle" d="M 45 555 L 85 570 L 90 555 L 50 540 Z" data-name="Int. Intercostal (T7-T8)" />
             <path class="muscle" d="M 50 590 L 90 605 L 95 590 L 55 575 Z" data-name="Int. Intercostal (T8-T9)" />
        </g>

        <path id="m_int_oblique_l" class="muscle-deep muscle" data-name="Internal Oblique" d="M -120 850 Q -130 800, -110 700 L -60 650 L -55 850 Z" opacity="0.6" />
        <path id="m_int_oblique_r" class="muscle-deep muscle" data-name="Internal Oblique" d="M 120 850 Q 130 800, 110 700 L 60 650 L 55 850 Z" opacity="0.6" />
        <path id="m_psoas_major_l" class="muscle-deep muscle" data-name="Psoas Major" d="M -10 640 C -15 650, -35 750, -40 850 Q -45 950, -55 1010 L -40 1010 L -25 850 C -20 750, -15 650, -10 640 Z" opacity="0.8" />
        <path id="m_psoas_major_r" class="muscle-deep muscle" data-name="Psoas Major" d="M 10 640 C 15 650, 35 750, 40 850 Q 45 950, 55 1010 L 40 1010 L 25 850 C 20 750, 15 650, 10 640 Z" opacity="0.8" />
    </g>

    <g id="muscles_chest" class="muscle-group">
        <path id="m_subclavius_l" class="muscle-deep muscle" data-name="Subclavius" d="M -25 345 L -90 330 L -100 335 L -35 355 Z" opacity="0.9" />
        <path id="m_subclavius_r" class="muscle-deep muscle" data-name="Subclavius" d="M 25 345 L 90 330 L 100 335 L 35 355 Z" opacity="0.9" />
        <path id="m_pec_minor_l" class="muscle-deep muscle" data-name="Pectoralis Minor" d="M -135 350 L -55 425 L -50 460 L -55 500 L -140 355 Z" opacity="0.9" />
        <path id="m_pec_minor_r" class="muscle-deep muscle" data-name="Pectoralis Minor" d="M 135 350 L 55 425 L 50 460 L 55 500 L 140 355 Z" opacity="0.9" />
        <path id="m_pec_major_abd_l" class="muscle-deep muscle" data-name="Pectoralis Major (Abdominal)" d="M -40 500 Q -80 500, -120 480 L -202 427 L -192 417 L -172 447 Q -100 460, -40 450 Z" opacity="0.95" />
        <path id="m_pec_major_stern_l" class="muscle-deep muscle" data-name="Pectoralis Major (Sternal)" d="M -30 360 L -30 490 Q -100 480, -140 460 L -199 417 L -199 397 Q -120 380, -30 360 Z" />
        <path id="m_pec_major_clav_l" class="muscle-superficial muscle" data-name="Pectoralis Major (Clavicular)" d="M -40 330 L -110 328 Q -150 335, -170 360 L -197 408 L -187 413 Q -140 380, -40 355 Z" />
        <path id="m_pec_major_abd_r" class="muscle-deep muscle" data-name="Pectoralis Major (Abdominal)" d="M 40 500 Q 80 500, 120 480 L 202 427 L 192 417 L 172 447 Q 100 460, 40 450 Z" opacity="0.95" />
        <path id="m_pec_major_stern_r" class="muscle-deep muscle" data-name="Pectoralis Major (Sternal)" d="M 30 360 L 30 490 Q 100 480, 140 460 L 199 417 L 199 397 Q 120 380, 30 360 Z" />
        <path id="m_pec_major_clav_r" class="muscle-superficial muscle" data-name="Pectoralis Major (Clavicular)" d="M 40 330 L 110 328 Q 150 335, 170 360 L 197 408 L 187 413 Q 140 380, 40 355 Z" />
    </g>
    </g>
`;
