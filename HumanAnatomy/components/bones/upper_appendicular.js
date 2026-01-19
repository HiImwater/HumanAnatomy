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
    
    <!-- Left Humerus -->
    <path id="bone_humerus_left" class="bone" data-name="Left Humerus" data-medical-name="Humerus Sinister"
        d="M -180 345
           C -200 335, -215 350, -210 380
           Q -210 500, -305 760
           C -320 770, -335 765, -330 741
           Q -300 755, -286 741
           L -225 365
           C -220 350, -200 345, -195 345
           L -180 345
           Z" />

    <!-- Right Humerus -->
    <path id="bone_humerus_right" class="bone" data-name="Right Humerus" data-medical-name="Humerus Dexter"
        d="M 180 345
           C 200 335, 215 350, 210 380
           Q 210 500, 305 760
           C 320 770, 335 765, 330 741
           Q 300 755, 286 741
           L 225 365
           C 220 350, 200 345, 195 345
           L 180 345
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
`;

export const upperAppendicularSVG = scapulaeSVG + upperLimbsSVG;
