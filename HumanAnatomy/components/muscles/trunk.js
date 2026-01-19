export const trunkMusclesSVG = `
    <g id="muscles_trunk_all">
        <!-- 
            THORACOLUMBAR FASCIA
            Large diamond-shaped connective tissue sheet in the lower back.
        -->
        <path id="f_thoracolumbar" class="fascia" data-name="Thoracolumbar Fascia"
            d="M 0 650
               L -130 830
               L 0 950
               L 130 830
               Z" opacity="0.4" />
    <g id="muscles_neck" class="muscle-group">
        <!-- Scalenes (Deep) -->
        <path id="m_scalene_l" class="muscle-deep muscle" data-name="Scalenes"
            d="M -35 330
               Q -40 290, -45 250
               L -50 220
               L -55 225
               Q -50 280, -45 330
               Z" />
        <path id="m_scalene_r" class="muscle-deep muscle" data-name="Scalenes"
            d="M 35 330
               Q 40 290, 45 250
               L 50 220
               L 55 225
               Q 50 280, 45 330
               Z" />
    </g>

    <!-- Deep Back (Multifidus) -->
    <g id="muscles_trunk_deep" class="muscle-group">
        <!-- 
           MULTIFIDUS (Thoracic) - Updated with slight curvature
        -->
        <!-- LEFT SIDE -->
        <path id="m_multifidus_l" class="muscle-deep muscle" data-name="Multifidus" 
            d="M -54 603 Q -40 590, 0 560 L 0 570 Q -20 590, -50 608 Z
               M -52 576 Q -40 565, 0 534 L 0 544 Q -20 565, -48 581 Z
               M -50 550 Q -38 540, 0 508 L 0 518 Q -20 540, -46 555 Z
               M -48 524 Q -38 515, 0 482 L 0 492 Q -20 515, -44 529 Z
               M -48 498 Q -38 490, 0 456 L 0 466 Q -20 490, -44 503 Z
               M -48 472 Q -38 465, 0 431 L 0 441 Q -20 465, -44 477 Z
               M -48 446 Q -38 435, 0 406 L 0 416 Q -20 440, -44 451 Z
               M -48 421 Q -38 410, 0 382 L 0 392 Q -20 415, -44 426 Z" />

        <!-- RIGHT SIDE -->
        <path id="m_multifidus_r" class="muscle-deep muscle" data-name="Multifidus"
            d="M 54 603 Q 40 590, 0 560 L 0 570 Q 20 590, 50 608 Z
               M 52 576 Q 40 565, 0 534 L 0 544 Q 20 565, 48 581 Z
               M 50 550 Q 38 540, 0 508 L 0 518 Q 20 540, 46 555 Z
               M 48 524 Q 38 515, 0 482 L 0 492 Q 20 515, 44 529 Z
               M 48 498 Q 38 490, 0 456 L 0 466 Q 20 490, 44 503 Z
               M 48 472 Q 38 465, 0 431 L 0 441 Q 20 465, 44 477 Z
               M 48 446 Q 38 435, 0 406 L 0 416 Q 20 440, 44 451 Z
               M 48 421 Q 38 410, 0 382 L 0 392 Q 20 415, 44 426 Z" />

        <!-- 
            ERECTOR SPINAE (3 Columns)
            From Sacrum (y~850) to Cervical (y~300)
        -->
        <!-- LEFT SIDE -->
        <!-- Iliocostalis (Lateral column) -->
        <path id="m_iliocostalis_l" class="muscle-deep muscle" data-name="Iliocostalis"
            d="M -70 850
               Q -80 750, -85 650
               Q -90 550, -85 450
               L -75 450
               Q -70 550, -65 650
               Q -60 750, -60 850
               Z" />
        <!-- Longissimus (Middle column) -->
        <path id="m_longissimus_l" class="muscle-deep muscle" data-name="Longissimus"
            d="M -55 850
               Q -60 700, -65 550
               Q -70 400, -60 300
               L -50 300
               Q -45 400, -50 550
               Q -45 700, -45 850
               Z" />
        <!-- Spinalis (Medial column, adjacent to Multifidus) -->
        <path id="m_spinalis_l" class="muscle-deep muscle" data-name="Spinalis"
            d="M -40 750
               Q -45 600, -45 450
               Q -45 350, -35 300
               L -25 300
               Q -30 350, -30 450
               Q -30 600, -30 750
               Z" />

        <!-- RIGHT SIDE -->
        <!-- Iliocostalis -->
        <path id="m_iliocostalis_r" class="muscle-deep muscle" data-name="Iliocostalis"
            d="M 70 850
               Q 80 750, 85 650
               Q 90 550, 85 450
               L 75 450
               Q 70 550, 65 650
               Q 60 750, 60 850
               Z" />
        <!-- Longissimus -->
        <path id="m_longissimus_r" class="muscle-deep muscle" data-name="Longissimus"
            d="M 55 850
               Q 60 700, 65 550
               Q 70 400, 60 300
               L 50 300
               Q 45 400, 50 550
               Q 45 700, 45 850
               Z" />
        <!-- Spinalis -->
        <path id="m_spinalis_r" class="muscle-deep muscle" data-name="Spinalis"
            d="M 40 750
               Q 45 600, 45 450
               Q 45 350, 35 300
               L 25 300
               Q 30 350, 30 450
               Q 30 600, 30 750
               Z" />
    </g>

    <g id="muscles_abdominal_deep" class="muscle-group">
        <!-- TRANSVERSE ABDOMINIS - Smoothed connection points -->
        <!-- LEFT SIDE -->
        <path id="m_ta_ribs_l" class="muscle-sheet-l muscle" data-name="Transverse Abd. (Costal)"
            d="M -130 490 L -5 485 L -5 650 L -115 655 
               Q -125 640, -130 610
               Q -140 570, -135 520
               Z" />
        <path id="m_ta_lumb_l" class="muscle-sheet-l muscle" data-name="Transverse Abd. (Lumbar)"
            d="M -115 660 L -5 660 L -5 750 L -130 750
               Q -125 720, -120 705
               Q -115 690, -115 660 Z" />
        <path id="m_ta_iliac_l" class="muscle-sheet-l muscle" data-name="Transverse Abd. (Iliac)"
            d="M -135 760 L -150 840 Q -145 860, -140 890
               L -5 950 L -5 760 Z" />

        <!-- RIGHT SIDE -->
        <path id="m_ta_ribs_r" class="muscle-sheet-r muscle" data-name="Transverse Abd. (Costal)"
            d="M 130 490 L 5 485 L 5 650 L 115 655
               Q 125 640, 130 610
               Q 140 570, 135 520
               Z" />
        <path id="m_ta_lumb_r" class="muscle-sheet-r muscle" data-name="Transverse Abd. (Lumbar)"
            d="M 115 660 L 5 660 L 5 750 L 130 750
               Q 125 720, 120 705
               Q 115 690, 115 660 Z" />
        <path id="m_ta_iliac_r" class="muscle-sheet-r muscle" data-name="Transverse Abd. (Iliac)"
            d="M 135 760 L 150 840 Q 145 860, 140 890
               L 5 950 L 5 760 Z" />
    </g>

    <g id="muscles_back_superficial" class="muscle-group">
        <!-- LATISSIMUS DORSI - Anatomically Refined (Origin: T7-L5 Spine, Iliac Crest; Insertion: Humerus) -->
        <!-- Narrowed lateral sweep to match natural torso width -->
        <path id="m_latissimus_l" class="muscle-superficial muscle" data-name="Latissimus Dorsi"
            d="M 0 480 
               L 0 830
               Q -70 825, -135 832
               Q -165 750, -170 600
               Q -175 500, -195 408
               L -180 415
               Q -160 540, -135 565
               L -130 575 L -115 585
               L -125 600 L -110 610
               L -120 625 L -105 635
               L -115 650 L -105 660
               Q -50 630, 0 480 Z" />
        <path id="m_latissimus_r" class="muscle-superficial muscle" data-name="Latissimus Dorsi"
            d="M 0 480 
               L 0 830
               Q 70 825, 135 832
               Q 165 750, 170 600
               Q 175 500, 195 408
               L 180 415
               Q 160 540, 135 565
               L 130 575 L 115 585
               L 125 600 L 110 610
               L 120 625 L 105 635
               L 115 650 L 105 660
               Q 50 630, 0 480 Z" />

        <!-- TRAPEZIUS (Upper) - Refined curve -->
        <path id="m_trap_upper_l" class="muscle-deep muscle" data-name="Trapezius (Upper)"
            d="M -15 230
               C -40 250, -80 280, -175 326
               L -110 330
               Q -70 290, -15 310
               Z" />
        <path id="m_trap_upper_r" class="muscle-deep muscle" data-name="Trapezius (Upper)"
            d="M 15 230
               C 40 250, 80 280, 175 326
               L 110 330
               Q 70 290, 15 310
               Z" />
    </g>

    <g id="muscles_abs_superficial" class="muscle-group">
        <!-- 
            DIAPHRAGM
            Primary muscle of respiration. Dividing thoracic and abdominal cavities.
        -->
        <path id="m_diaphragm" class="muscle-deep muscle" data-name="Diaphragm"
            d="M -135 520
               C -135 450, 135 450, 135 520
               L 125 535
               C 100 480, -100 480, -125 535
               Z" opacity="0.6" />

        <!-- LEFT SIDE -->
        <!-- Seg 1: Widest, Ribs 5-7 contact -->
        <path id="m_rectus_l_1" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 1)"
            d="M -5 580 
               L -45 575 
               Q -52 640, -48 695 
               Q -25 700, -5 695 
               Z" />
        <!-- Seg 2 -->
        <path id="m_rectus_l_2" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 2)"
            d="M -5 705 
               Q -25 710, -48 705 
               Q -50 750, -45 795 
               Q -25 800, -5 795 
               Z" />
        <!-- Seg 3 -->
        <path id="m_rectus_l_3" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 3)"
            d="M -5 805 
               Q -25 810, -45 805 
               Q -45 850, -40 895 
               Q -25 900, -5 895 
               Z" />
        <!-- Seg 4 -->
        <path id="m_rectus_l_4" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 4)"
            d="M -5 905 
               Q -25 910, -40 905 
               Q -35 950, -25 1010 
               L -5 1010 
               Z" />

        <!-- RIGHT SIDE -->
        <path id="m_rectus_r_1" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 1)"
            d="M 5 580 
               L 45 575 
               Q 52 640, 48 695 
               Q 25 700, 5 695 
               Z" />
        <path id="m_rectus_r_2" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 2)"
            d="M 5 705 
               Q 25 710, 48 705 
               Q 50 750, 45 795 
               Q 25 800, 5 795 
               Z" />
        <path id="m_rectus_r_3" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 3)"
            d="M 5 805 
               Q 25 810, 45 805 
               Q 45 850, 40 895 
               Q 25 900, 5 895 
               Z" />
        <path id="m_rectus_r_4" class="muscle-deep muscle" data-name="Rectus Abdominis (Seg 4)"
             d="M 5 905 
               Q 25 910, 40 905 
               Q 35 950, 25 1010 
               L 5 1010 
               Z" />

        <!-- TENDINOUS INTERSECTIONS & LINEA ALBA -->
        <g id="rectus_fascia" opacity="0.8">
            <!-- Linea Alba (Vertical midline) -->
            <rect id="rectus_linea_alba" x="-2" y="580" width="4" height="430" fill="#f0f0f0" />
            
            <!-- Horizontal Intersections -->
            <path id="rectus_intersection_1" d="M -50 700 Q 0 705, 50 700 L 50 705 Q 0 710, -50 705 Z" fill="#e0e0e0" />
            <path id="rectus_intersection_2" d="M -48 800 Q 0 805, 48 800 L 48 805 Q 0 810, -48 805 Z" fill="#e0e0e0" />
            <path id="rectus_intersection_3" d="M -45 900 Q 0 905, 45 900 L 45 905 Q 0 910, -45 905 Z" fill="#e0e0e0" />
        </g>
    <g id="muscles_stomach_lateral" class="muscle-group">
        <!-- 
            SERRATUS ANTERIOR ("Boxer's Muscle")
            Prominent interdigitating slips.
        -->
        <!-- 
            SERRATUS ANTERIOR (Precise Rib Origins)
            Originates from ribs 1-8. Slips 1-4 hidden behind Pecs.
            Visible slips: 5 (Rib 5), 6 (Rib 6), 7 (Rib 7), 8 (Rib 8), 9 (Rib 9)
        -->
        <!-- Left Serratus -->
        <path id="m_serratus_l" class="muscle-deep muscle" data-name="Serratus Anterior"
            d="M -135 480 L -165 490 L -140 500 Z
               M -140 510 L -170 525 L -145 535 Z
               M -145 540 L -175 555 L -150 565 Z
               M -150 570 L -180 585 L -155 595 Z
               M -155 600 L -185 615 L -160 625 Z
               " opacity="0.95" />

        <!-- Right Serratus -->
        <path id="m_serratus_r" class="muscle-deep muscle" data-name="Serratus Anterior"
            d="M 135 480 L 165 490 L 140 500 Z
               M 140 510 L 170 525 L 145 535 Z
               M 145 540 L 175 555 L 150 565 Z
               M 150 570 L 180 585 L 155 595 Z
               M 155 600 L 185 615 L 160 625 Z
               " opacity="0.95" />

        <!-- EXTERNAL OBLIQUE - Detailed Rib Serrations -->
        <path id="m_ext_oblique_l" class="muscle-deep muscle" data-name="External Oblique"
            d="M -160 480 L -130 490 L -160 505
               M -165 515 L -135 525 L -165 540
               M -170 550 L -140 560 L -170 575
               M -175 585 L -145 600 L -175 615
               M -180 625 L -150 640 L -180 655
               M -175 665 L -145 680 L -175 695
               M -170 705
               Q -160 760, -150 820
               L -135 830
               Q -90 880, -40 1010
               L -55 900
               L -55 700
               Q -52 600, -50 480
               L -90 490
               L -130 510
               Z" opacity="0.85" />
        <path id="m_ext_oblique_r" class="muscle-deep muscle" data-name="External Oblique"
            d="M 160 480 L 130 490 L 160 505 
               M 165 515 L 135 525 L 165 540 
               M 170 550 L 140 560 L 170 575 
               M 175 585 L 145 600 L 175 615
               M 180 625 L 150 640 L 180 655
               M 175 665 L 145 680 L 175 695
               M 170 705 
               Q 160 760, 150 820
               L 135 830 
               Q 90 880, 40 1010
               L 55 900
               L 55 700
               Q 52 600, 50 480
               L 90 490
               L 130 510
               Z" opacity="0.85" />
    </g>

    <g id="muscles_trunk_deep" class="muscle-group">
        <!-- INTERCOSTALS (Expanded to lower ribs) -->
        <!-- External: Down-and-forward -->
        <g id="m_intercostals_ext_l" class="muscle-deep" opacity="0.8">
             <path d="M -125 400 L -155 410 L -150 425 L -120 415 Z" data-name="Ext. Intercostal (T2-T3)" />
             <path d="M -130 435 L -160 445 L -155 460 L -125 450 Z" data-name="Ext. Intercostal (T3-T4)" />
             <path d="M -135 470 L -165 480 L -160 495 L -130 485 Z" data-name="Ext. Intercostal (T4-T5)" />
             <path d="M -138 505 L -168 515 L -162 530 L -132 520 Z" data-name="Ext. Intercostal (T5-T6)" />
             <path d="M -140 540 L -170 550 L -165 565 L -135 555 Z" data-name="Ext. Intercostal (T6-T7)" />
             <path d="M -145 575 L -175 585 L -170 600 L -140 590 Z" data-name="Ext. Intercostal (T7-T8)" />
        </g>
        <g id="m_intercostals_ext_r" class="muscle-deep" opacity="0.8">
             <path d="M 125 400 L 155 410 L 150 425 L 120 415 Z" data-name="Ext. Intercostal (T2-T3)" />
             <path d="M 130 435 L 160 445 L 155 460 L 125 450 Z" data-name="Ext. Intercostal (T3-T4)" />
             <path d="M 135 470 L 165 480 L 160 495 L 130 485 Z" data-name="Ext. Intercostal (T4-T5)" />
             <path d="M 138 505 L 168 515 L 162 530 L 132 520 Z" data-name="Ext. Intercostal (T5-T6)" />
             <path d="M 140 540 L 170 550 L 165 565 L 135 555 Z" data-name="Ext. Intercostal (T6-T7)" />
             <path d="M 145 575 L 175 585 L 170 600 L 140 590 Z" data-name="Ext. Intercostal (T7-T8)" />
        </g>

        <!-- Internal: Down-and-backward -->
        <g id="m_intercostals_int_l" class="muscle-deep" opacity="0.6">
             <path d="M -30 350 L -50 355 L -55 345 L -35 340 Z" data-name="Int. Intercostal (T1-T2)" />
             <path d="M -30 385 L -60 395 L -65 380 L -35 370 Z" data-name="Int. Intercostal (T2-T3)" />
             <path d="M -30 420 L -65 430 L -70 415 L -35 405 Z" data-name="Int. Intercostal (T3-T4)" />
             <path d="M -35 450 L -70 465 L -75 450 L -40 435 Z" data-name="Int. Intercostal (T4-T5)" />
             <path d="M -35 485 L -75 500 L -80 485 L -40 470 Z" data-name="Int. Intercostal (T5-T6)" />
             <path d="M -40 520 L -80 535 L -85 520 L -45 505 Z" data-name="Int. Intercostal (T6-T7)" />
             <path d="M -45 555 L -85 570 L -90 555 L -50 540 Z" data-name="Int. Intercostal (T7-T8)" />
             <path d="M -50 590 L -90 605 L -95 590 L -55 575 Z" data-name="Int. Intercostal (T8-T9)" />
             <path d="M -55 625 L -95 640 L -100 625 L -60 610 Z" data-name="Int. Intercostal (T9-T10)" />
        </g>
        <g id="m_intercostals_int_r" class="muscle-deep" opacity="0.6">
             <path d="M 30 350 L 50 355 L 55 345 L 35 340 Z" data-name="Int. Intercostal (T1-T2)" />
             <path d="M 30 385 L 60 395 L 65 380 L 35 370 Z" data-name="Int. Intercostal (T2-T3)" />
             <path d="M 30 420 L 65 430 L 70 415 L 35 405 Z" data-name="Int. Intercostal (T3-T4)" />
             <path d="M 35 450 L 70 465 L 75 450 L 40 435 Z" data-name="Int. Intercostal (T4-T5)" />
             <path d="M 35 485 L 75 500 L 80 485 L 40 470 Z" data-name="Int. Intercostal (T5-T6)" />
             <path d="M 40 520 L 80 535 L 85 520 L 45 505 Z" data-name="Int. Intercostal (T6-T7)" />
             <path d="M 45 555 L 85 570 L 90 555 L 50 540 Z" data-name="Int. Intercostal (T7-T8)" />
             <path d="M 50 590 L 90 605 L 95 590 L 55 575 Z" data-name="Int. Intercostal (T8-T9)" />
             <path d="M 55 625 L 95 640 L 100 625 L 60 610 Z" data-name="Int. Intercostal (T9-T10)" />
        </g>

        <!-- INTERNAL OBLIQUE - Deep to external, perpendicular fibers -->
        <path id="m_int_oblique_l" class="muscle-deep muscle" data-name="Internal Oblique"
            d="M -120 850 
               Q -130 800, -110 700
               L -60 650
               L -55 850
               Z" opacity="0.6" />
        <path id="m_int_oblique_r" class="muscle-deep muscle" data-name="Internal Oblique"
            d="M 120 850 
               Q 130 800, 110 700
               L 60 650
               L 55 850
               Z" opacity="0.6" />

        <!-- 
            PSOAS MAJOR 
            Origin: T12-L5 Vertebrae. Descends through pelvis.
        -->
        <path id="m_psoas_major_l" class="muscle-deep muscle" data-name="Psoas Major"
            d="M -10 640
               C -15 650, -35 750, -40 850
               Q -45 950, -55 1010
               L -40 1010
               L -25 850
               C -20 750, -15 650, -10 640
               Z" opacity="0.8" />
        <path id="m_psoas_major_r" class="muscle-deep muscle" data-name="Psoas Major"
            d="M 10 640
               C 15 650, 35 750, 40 850
               Q 45 950, 55 1010
               L 40 1010
               L 25 850
               C 20 750, 15 650, 10 640
               Z" opacity="0.8" />
    </g>

    <g id="muscles_chest" class="muscle-group">
        <!-- 
            SUBCLAVIUS
            Origin: Rib 1/Cartilage (-20, 340)
            Insertion: Inferior Clavicle Mid (-80, 330)
        -->
        <path id="m_subclavius_l" class="muscle-deep muscle" data-name="Subclavius"
            d="M -25 345 L -90 330 L -100 335 L -35 355 Z" opacity="0.9" />
        <path id="m_subclavius_r" class="muscle-deep muscle" data-name="Subclavius"
            d="M 25 345 L 90 330 L 100 335 L 35 355 Z" opacity="0.9" />

        <!-- 
            PECTORALIS MINOR (Refined Triangle)
            Origin: Ribs 3, 4, 5. Insertion: Coracoid Process (-135, 348).
        -->
        <path id="m_pec_minor_l" class="muscle-deep muscle" data-name="Pectoralis Minor"
            d="M -135 350
               L -55 425
               L -50 460
               L -55 500
               L -140 355
               Z" opacity="0.9" />
        <path id="m_pec_minor_r" class="muscle-deep muscle" data-name="Pectoralis Minor"
            d="M 135 350
               L 55 425
               L 50 460
               L 55 500
               L 140 355
               Z" opacity="0.9" />

        <!-- 
            PECTORALIS MAJOR (3 Heads) 
            Anatomically precise layering: Clavicular head overlaps Sternal head at insertion.
        -->
        <!-- LEFT SIDE -->
        <!-- Abdominal Head (Deepest of Pecs, rises from Rectus Sheath) -->
        <path id="m_pec_major_abd_l" class="muscle-deep muscle" data-name="Pectoralis Major (Abdominal)"
            d="M -40 500
               Q -80 500, -120 480
               L -202 427
               L -192 417
               L -172 447
               Q -100 460, -40 450
               Z" opacity="0.95" />

        <!-- Sternal Head (Main Mass) -->
        <path id="m_pec_major_stern_l" class="muscle-deep muscle" data-name="Pectoralis Major (Sternal)"
            d="M -30 360
               L -30 490
               Q -100 480, -140 460
               L -199 417
               L -199 397
               Q -120 380, -30 360
               Z" />

        <!-- Clavicular Head (Superficial, shelf) -->
        <path id="m_pec_major_clav_l" class="muscle-superficial muscle" data-name="Pectoralis Major (Clavicular)"
            d="M -40 330
               L -110 328
               Q -150 335, -170 360
               L -197 408
               L -187 413
               Q -140 380, -40 355
               Z" />

        <!-- RIGHT SIDE -->
        <!-- Abdominal Head -->
        <path id="m_pec_major_abd_r" class="muscle-deep muscle" data-name="Pectoralis Major (Abdominal)"
            d="M 40 500
               Q 80 500, 120 480
               L 202 427
               L 192 417
               L 172 447
               Q 100 460, 40 450
               Z" opacity="0.95" />

        <!-- Sternal Head -->
        <path id="m_pec_major_stern_r" class="muscle-deep muscle" data-name="Pectoralis Major (Sternal)"
            d="M 30 360
               L 30 490
               Q 100 480, 140 460
               L 199 417
               L 199 397
               Q 120 380, 30 360
               Z" />

        <!-- Clavicular Head -->
        <path id="m_pec_major_clav_r" class="muscle-superficial muscle" data-name="Pectoralis Major (Clavicular)"
            d="M 40 330
               L 110 328
               Q 150 335, 170 360
               L 197 408
               L 187 413
               Q 140 380, 40 355
               Z" />
    </g>
    </g>
`;
