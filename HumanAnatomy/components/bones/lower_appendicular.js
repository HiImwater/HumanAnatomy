export const lowerAppendicularSVG = `
    <!-- 
        LOWER APPENDICULAR: PELVIC GIRDLE & LEGS (Refined v9 - Tucked Fibula)
        
        CORRECTIONS:
        - TIBIOFIBULAR JOINT: Closed the gap. Fibula tucks under Tibia.
        - Tibia: Medial (Shin).
        - Fibula: Lateral (Calf), tightly articulated.
    -->
    
    <!-- 
        LOWER APPENDICULAR: LEGS (Femur, Tibia, Fibula, Patella)
        Note: Pelvis (Os Coxae) is now in pelvis.js
        
        CORRECTIONS:
        - TIBIOFIBULAR JOINT: Closed the gap. Fibula tucks under Tibia.
        - Tibia: Medial (Shin).
        - Fibula: Lateral (Calf), tightly articulated.
    -->


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

    <!-- 
        LOWER LEG (Tibia & Fibula Articulated)
        Reference: Medical Artist - Frontal View
        Left Leg (Screen Left): Medial Tibia / Lateral Fibula
    -->

    <!-- Left Tibia (Medial) -->
    <!-- Broad Condyles, Tibial Tuberosity, Triangular Shaft, Medial Malleolus -->
    <path id="bone_tibia_left" class="bone" data-name="Left Tibia" data-medical-name="Tibia Sinister"
        d="M -73 1485                  
           C -70 1480, -90 1475, -100 1480 
           C -110 1485, -115 1490, -115 1500 
           C -120 1515, -115 1525, -105 1535 
           C -102 1545, -95 1550, -95 1560   
           C -100 1600, -105 1700, -108 1800 
           C -110 1840, -110 1850, -108 1855  
           

           L -105 1860                        
           Q -95 1855, -88 1860               
           L -85 1875                         
           C -82 1878, -78 1875, -78 1870     
           
           C -75 1860, -75 1850, -75 1840    
           C -70 1800, -65 1700, -65 1600    
           C -65 1540, -60 1520, -55 1500    
           C -55 1490, -60 1485, -73 1485    
           Z" />

    <!-- Left Fibula (Lateral) -->
    <!-- Head tucked under Lateral Tibial Condyle. Lateral Malleolus extends lower. -->
    <path id="bone_fibula_left" class="bone" data-name="Left Fibula" data-medical-name="Fibula Sinister"
        d="M -118 1505                 
           C -125 1505, -130 1515, -130 1525
           C -130 1540, -128 1650, -125 1750 
           C -123 1800, -123 1840, -125 1850 
           

           L -125 1870
           Q -122 1880, -120 1890             
           C -115 1895, -110 1890, -112 1880  
           Q -115 1870, -112 1860             
           
           C -110 1800, -112 1700, -115 1600 
           C -118 1540, -118 1520, -118 1505 
           Z" />

    <!-- Right Tibia (Medial) -->
    <!-- Mirror of Left -->
    <path id="bone_tibia_right" class="bone" data-name="Right Tibia" data-medical-name="Tibia Dexter"
        d="M 73 1485                   
           C 70 1480, 90 1475, 100 1480
           C 110 1485, 115 1490, 115 1500
           C 120 1515, 115 1525, 105 1535 
           C 102 1545, 95 1550, 95 1560   
           C 100 1600, 105 1700, 108 1800 
           C 110 1840, 110 1850, 108 1855  
           
           L 105 1860                        
           Q 95 1855, 88 1860               
           L 85 1875                         
           C 82 1878, 78 1875, 78 1870     
           
           C 75 1860, 75 1850, 75 1840    
           C 70 1800, 65 1700, 65 1600    
           C 65 1540, 60 1520, 55 1500    
           C 55 1490, 60 1485, 73 1485    
           Z" />

    <!-- Right Fibula (Lateral) -->
    <path id="bone_fibula_right" class="bone" data-name="Right Fibula" data-medical-name="Fibula Dexter"
        d="M 118 1505                  
           C 125 1505, 130 1515, 130 1525
           C 130 1540, 128 1650, 125 1750 
           C 123 1800, 123 1840, 125 1850 
           
           L 125 1870
           Q 122 1880, 120 1890             
           C 115 1895, 110 1890, 112 1880  
           Q 115 1870, 112 1860             
           
           C 110 1800, 112 1700, 115 1600 
           C 118 1540, 118 1520, 118 1505 
           Z" />

    <!-- Shadows for Lower Limb Depth -->
    <g id="lower_limb_shadows">
        <!-- Femur Neck/Hip Joint Shadow -->
        <path class="bone-shadow" d="M -110 970 L -100 1000 L -120 1000 Z" opacity="0.2" />
        <path class="bone-shadow" d="M 110 970 L 100 1000 L 120 1000 Z" opacity="0.2" />

        <!-- Knee/Popliteal/Patella Shadow -->
        <path class="bone-shadow" d="M -90 1455 Q -90 1475 -90 1475" stroke="black" stroke-width="2" stroke-opacity="0.1" fill="none" />
        <path class="bone-shadow" d="M 90 1455 Q 90 1475 90 1475" stroke="black" stroke-width="2" stroke-opacity="0.1" fill="none" />

        <!-- Interosseous Space Shadow (Leg) -->
        <path class="bone-shadow" d="M -105 1500 L -115 1800 L -110 1800 L -100 1500 Z" opacity="0.1" />
        <path class="bone-shadow" d="M 105 1500 L 115 1800 L 110 1800 L 100 1500 Z" opacity="0.1" />
    </g>
`;
