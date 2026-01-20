export const scapulaeSVG = `
    <!-- 
        SCAPULA (Shoulder Blade) - Anatomically Enhanced
        - Anterior View
        - Includes: Acromion, Coracoid Process, Glenoid Fossa, Subscapular Fossa.
        - Articulation: Acromion meets Clavicle; Glenoid meets Humerus.
    -->

    <!-- Left Scapula -->
    <path id="bone_scapula_left" class="bone" data-name="Left Scapula" data-medical-name="Scapula Sinister"
        d="M -110 345
           L -115 480
           Q -115 485, -125 490
           L -135 480
           L -170 390
           L -180 375
           L -180 355
           L -172 350
           
           C -175 355, -165 365, -158 360
           Q -155 355, -150 350

           L -135 348
           L -110 345
           
           M -140 350
           L -170 335
           L -185 335
           L -190 345
           Q -185 350, -180 355
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Right Scapula (Mirrored) -->
    <path id="bone_scapula_right" class="bone" data-name="Right Scapula" data-medical-name="Scapula Dexter"
        d="M 110 345
           L 115 480
           Q 115 485, 125 490
           L 135 480
           L 170 390
           L 180 375
           L 180 355
           L 172 350
           
           C 175 355, 165 365, 158 360
           Q 155 355, 150 350
           
           L 135 348
           L 110 345
           
           M 140 350
           L 170 335
           L 185 335
           L 190 345
           Q 185 350, 180 355
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Shadows for Scapula Depth -->
    <g id="scapula_shadows">
        <!-- Subscapular Fossa Shadow (Left) -->
        <path class="bone-shadow" d="M -130 360 Q -150 400 -120 460 L -115 480 Q -110 400 -115 350 Z" opacity="0.1" />
        <!-- Subscapular Fossa Shadow (Right) -->
        <path class="bone-shadow" d="M 130 360 Q 150 400 120 460 L 115 480 Q 110 400 115 350 Z" opacity="0.1" />
    </g>
`;

export const upperLimbsSVG = `
    <!-- Clavicle (Collarbone) -->
    <path id="bone_clavicle_left" class="bone" data-name="Left Clavicle"
        data-medical-name="Clavicula Sinister" 
        d="M -40 320
           C -70 325, -100 320, -130 315
           C -155 310, -170 315, -185 325
           L -188 335
           L -180 340
           C -165 330, -140 325, -115 330
           C -85 335, -55 335, -40 330
           L -40 320
           Z" />

    <path id="bone_clavicle_right" class="bone" data-name="Right Clavicle"
        data-medical-name="Clavicula Dexter" 
        d="M 40 320
           C 70 325, 100 320, 130 315
           C 155 310, 170 315, 185 325
           L 188 335
           L 180 340
           C 165 330, 140 325, 115 330
           C 85 335, 55 335, 40 330
           L 40 320
           Z" />

    <!-- 
        HUMERUS (Arm Bone) - Refined v2
    -->
    
    <!-- Left Humerus (Thickened) -->
    <path id="bone_humerus_left" class="bone" data-name="Left Humerus" data-medical-name="Humerus Sinister"
        d="M -175 345
           C -195 335, -235 350, -230 390
           Q -230 550, -320 750
           C -335 770, -290 785, -280 770
           Q -270 765, -260 745
           L -205 385
           C -200 360, -185 350, -175 345
           Z" />

    <!-- Right Humerus (Thickened) -->
    <path id="bone_humerus_right" class="bone" data-name="Right Humerus" data-medical-name="Humerus Dexter"
        d="M 175 345
           C 195 335, 235 350, 230 390
           Q 230 550, 320 750
           C 335 770, 290 785, 280 770
           Q 270 765, 260 745
           L 205 385
           C 200 360, 185 350, 175 345
           Z" />

    <!-- 
        FOREARM (Radius & Ulna) - Refined v3 (Reference Accurate)
        - Radius: Lateral, Bowed, Radial Head "Puck".
        - Ulna: Medial, Tapered, Olecranon Hook.
        - Interosseous Space: Visible gap.
    -->

    <!-- Left Radius (Lateral) -->
    <path id="bone_radius_left" class="bone" data-name="Left Radius" data-medical-name="Radius Sinister" 
        d="M -300 760
           C -320 760, -320 775, -305 775
           L -302 790
           C -315 800, -345 900, -369 1050
           L -340 1060
           L -286 765
           Z" />

    <!-- Left Ulna (Medial) -->
    <path id="bone_ulna_left" class="bone" data-name="Left Ulna" data-medical-name="Ulna Sinister" 
        d="M -286 741
           C -305 730, -315 750, -305 760
           L -350 1040
           L -330 1045
           L -270 750
           Q -275 735, -286 741
           Z" />

    <!-- Right Radius -->
    <path id="bone_radius_right" class="bone" data-name="Right Radius" data-medical-name="Radius Dexter" 
        d="M 300 760
           C 320 760, 320 775, 305 775
           L 302 790
           C 315 800, 345 900, 369 1050
           L 340 1060
           L 286 765
           Z" />

    <!-- Right Ulna -->
    <path id="bone_ulna_right" class="bone" data-name="Right Ulna" data-medical-name="Ulna Dexter" 
        d="M 286 741
           C 305 730, 315 750, 305 760
           L 350 1040
           L 330 1045
           L 270 750
           Q 275 735, 286 741
           Z" />

    <!-- Shadows for Upper Limb Depth -->
    <g id="upper_limb_shadows">
        <!-- Humerus Surgical Neck/Axilla Shadow -->
        <path class="bone-shadow" d="M -200 350 L -210 380 L -180 360 Z" opacity="0.2" />
        <path class="bone-shadow" d="M 200 350 L 210 380 L 180 360 Z" opacity="0.2" />
        
        <!-- Elbow Cubital Fossa Shadow -->
        <path class="bone-shadow" d="M -290 750 L -310 770 L -280 770 Z" opacity="0.15" />
        <path class="bone-shadow" d="M 290 750 L 310 770 L 280 770 Z" opacity="0.15" />
        
        <!-- Interosseous Space Shadow (Forearm) -->
        <path class="bone-shadow" d="M -300 780 L -330 1000 L -340 1000 L -310 780 Z" opacity="0.1" />
        <path class="bone-shadow" d="M 300 780 L 330 1000 L 340 1000 L 310 780 Z" opacity="0.1" />
    </g>
`;

export const upperAppendicularSVG = scapulaeSVG + upperLimbsSVG;
