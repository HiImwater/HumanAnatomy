export const lowerAppendicularSVG = `
    <!-- 
        LOWER APPENDICULAR: PELVIC GIRDLE & LEGS (Refined v9 - Tucked Fibula)
        
        CORRECTIONS:
        - TIBIOFIBULAR JOINT: Closed the gap. Fibula tucks under Tibia.
        - Tibia: Medial (Shin).
        - Fibula: Lateral (Calf), tightly articulated.
    -->
    
    <!-- ═══════════════════════════════════════════════════
         LEFT PELVIS (Os Coxae Sinister) - Organic Refinement
         Features: Robust Ilium Body, Organic Curves
    ═══════════════════════════════════════════════════ -->

    <path id="bone_hip_left" class="bone" data-name="Left Hip Bone" data-medical-name="Os Coxae Sinister" data-bone-id="hip-left"
        d="M -50 835
           C -90 825, -140 820, -165 845
           C -175 855, -175 865, -165 875
           Q -185 910, -175 935
           C -160 950, -90 950, -30 965
           C -15 970, -10 985, -15 995
           L -20 1010
           C -30 1030, -70 1045, -95 1025
           C -110 1010, -125 985, -135 965
           C -95 920, -65 880, -50 860
           L -50 835
           Z
           M -55 975
           C -45 985, -45 1000, -55 1010
           C -75 1015, -90 1005, -92 990
           C -90 970, -65 965, -55 975 Z" 
        fill-rule="evenodd" />

    <!-- Left Acetabulum - Lunate Surface (C-shaped) -->
    <path id="bone_acetabulum_left" class="bone" data-name="Left Acetabulum" data-bone-id="hip-left"
        d="M -150 955 
           Q -155 940, -135 935
           Q -115 935, -110 955
           Q -108 975, -120 985
           Q -130 990, -140 980
           Q -125 970, -120 960
           Q -120 950, -135 950
           Q -145 955, -143 970
           Q -140 980, -150 975
           Q -160 965, -150 955 Z" 
        fill="#b0b0b0" stroke="none" />


    <!-- ═══════════════════════════════════════════════════
         RIGHT PELVIS (Os Coxae Dexter) - Mirrored
    ═══════════════════════════════════════════════════ -->

    <path id="bone_hip_right" class="bone" data-name="Right Hip Bone" data-medical-name="Os Coxae Dexter" data-bone-id="hip-right"
        d="M 50 835
           C 90 825, 140 820, 165 845
           C 175 855, 175 865, 165 875
           Q 185 910, 175 935
           C 160 950, 90 950, 30 965
           C 15 970, 10 985, 15 995
           L 20 1010
           C 30 1030, 70 1045, 95 1025
           C 110 1010, 125 985, 135 965
           C 95 920, 65 880, 50 860
           L 50 835
           Z
           M 55 975
           C 45 985, 45 1000, 55 1010
           C 75 1015, 90 1005, 92 990
           C 90 970, 65 965, 55 975 Z" 
        fill-rule="evenodd" />

    <path id="bone_acetabulum_right" class="bone" data-name="Right Acetabulum" data-bone-id="hip-right"
        d="M 150 955 
           Q 155 940, 135 935
           Q 115 935, 110 955
           Q 108 975, 120 985
           Q 130 990, 140 980
           Q 125 970, 120 960
           Q 120 950, 135 950
           Q 145 955, 143 970
           Q 140 980, 150 975
           Q 160 965, 150 955 Z" 
        fill="#b0b0b0" stroke="none" />


    <!-- ═══════════════════════════════════════════════════
         LEGS 
    ═══════════════════════════════════════════════════ -->
    
    <!-- Left Femur -->
    <!-- Head raised to ~960 to fit into Acetabulum -->
    <path id="bone_femur_left" class="bone" data-name="Left Femur" data-medical-name="Femur Sinister"
        d="M -130 960                  
           C -120 950, -110 955, -103 965
           L -105 975
           C -100 995, -85 1075, -77 1155
           C -73 1255, -65 1385, -60 1435
           C -57 1455, -50 1465, -55 1475 
           C -60 1485, -85 1485, -100 1475 
           C -110 1465, -103 1455, -100 1435 
           C -105 1385, -110 1285, -115 1185 
           C -120 1105, -127 1075, -145 1065
           C -160 1055, -170 1050, -170 1000
           C -170 985, -150 980, -130 980
           Z" />

    <!-- Right Femur -->
    <path id="bone_femur_right" class="bone" data-name="Right Femur" data-medical-name="Femur Dexter"
        d="M 130 960
           C 120 950, 110 955, 103 965
           L 105 975
           C 100 995, 85 1075, 77 1155
           C 73 1255, 65 1385, 60 1435
           C 57 1455, 50 1465, 55 1475
           C 60 1485, 85 1485, 100 1475
           C 110 1465, 103 1455, 100 1435
           C 105 1385, 110 1285, 115 1185
           C 120 1105, 127 1075, 145 1065
           C 160 1055, 170 1050, 170 1000
           C 170 985, 150 980, 130 980
           Z" />

    <!-- Patella -->
    <path id="bone_patella_left" class="bone" data-name="Left Patella" data-medical-name="Patella Sinister"
        d="M -90 1450 C -80 1445, -70 1450, -73 1460 C -75 1475, -85 1480, -90 1480 C -95 1480, -105 1475, -107 1460 C -110 1450, -100 1445, -90 1450 Z" />
    <path id="bone_patella_right" class="bone" data-name="Right Patella" data-medical-name="Patella Dexter"
        d="M 90 1450 C 80 1445, 70 1450, 73 1460 C 75 1475, 85 1480, 90 1480 C 95 1480, 105 1475, 107 1460 C 110 1450, 100 1445, 90 1450 Z" />

    <!-- 
        LOWER LEG (Tibia & Fibula Articulated)
        Left Leg (Screen Left): Tibia X ~ -85, Fibula X ~ -110 (Touching)
    -->

    <!-- Left Tibia (Medial) -->
    <!-- Widened Head to -105 to accept Fibula -->
    <path id="bone_tibia_left" class="bone" data-name="Left Tibia" data-medical-name="Tibia Sinister"
        d="M -105 1485 
           C -95 1480, -75 1480, -70 1485 
           C -65 1490, -60 1500, -65 1510 
           C -70 1540, -73 1590, -77 1690 
           C -79 1790, -75 1840, -73 1850 
           C -70 1865, -80 1875, -90 1870 
           L -95 1860 
           C -105 1855, -110 1860, -115 1860 
           C -120 1840, -118 1760, -118 1660
           C -120 1560, -120 1510, -115 1500 
           C -118 1490, -110 1485, -105 1485 Z" />

    <!-- Left Fibula (Lateral) -->
    <!-- Head at -110, tucking into Tibia at -105 -->
    <path id="bone_fibula_left" class="bone" data-name="Left Fibula" data-medical-name="Fibula Sinister"
        d="M -110 1490 
           C -105 1490, -100 1495, -103 1505 
           L -107 1520 
           C -110 1590, -115 1690, -120 1790 
           L -123 1850 
           C -125 1865, -135 1875, -140 1870 
           C -145 1865, -143 1850, -143 1840 
           C -145 1760, -140 1660, -135 1560 
           L -120 1520 
           C -123 1500, -120 1490, -110 1490 Z" />

    <!-- Right Tibia (Medial) -->
    <path id="bone_tibia_right" class="bone" data-name="Right Tibia" data-medical-name="Tibia Dexter"
        d="M 105 1485 
           C 95 1480, 75 1480, 70 1485 
           C 65 1490, 60 1500, 65 1510 
           C 70 1540, 73 1590, 77 1690 
           C 79 1790, 75 1840, 73 1850 
           C 70 1865, 80 1875, 90 1870 
           L 95 1860 
           C 105 1855, 110 1860, 115 1860 
           C 120 1840, 118 1760, 118 1660 
           C 120 1560, 120 1510, 115 1500 
           C 118 1490, 110 1485, 105 1485 Z" />

    <!-- Right Fibula (Lateral) -->
    <path id="bone_fibula_right" class="bone" data-name="Right Fibula" data-medical-name="Fibula Dexter"
        d="M 110 1490 
           C 105 1490, 100 1495, 103 1505 
           L 107 1520 
           C 110 1590, 115 1690, 120 1790 
           L 123 1850 
           C 125 1865, 135 1875, 140 1870 
           C 145 1865, 143 1850, 143 1840 
           C 145 1760, 140 1660, 135 1560 
           L 120 1520 
           C 123 1500, 120 1490, 110 1490 Z" />
`;
