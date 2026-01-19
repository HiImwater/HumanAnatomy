export const scapulaeSVG = `
    <!-- Scapula (Shoulder Blade) -->
    <path id="bone_scapula_left" class="bone" data-name="Left Scapula" data-medical-name="Scapula Sinister"
        d="M -110 350
           L -165 340
           L -175 330
           L -180 335
           L -185 345
           L -175 360
           L -170 400
           L -155 480
           Q -130 470, -110 450
           L -110 350
           Z
           M -112 360 L -170 350 L -180 330 Z" />

    <path id="bone_scapula_right" class="bone" data-name="Right Scapula" data-medical-name="Scapula Dexter"
        d="M 110 350
           L 165 340
           L 175 330
           L 180 335
           L 185 345
           L 175 360
           L 170 400
           L 155 480
           Q 130 470, 110 450
           L 110 350
           Z
           M 112 360 L 170 350 L 180 330 Z" />
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
           C -165 335, -155 345, -155 370
           C -155 390, -165 400, -170 405
           L -185 450
           L -195 480
           C -200 490, -205 500, -198 510
           L -205 630
           C -190 640, -180 650, -180 665
           C -185 680, -200 685, -210 685
           C -220 685, -230 680, -235 670
           C -240 660, -238 650, -230 630
           L -220 450
           C -225 400, -230 380, -225 365
           C -220 350, -200 345, -195 345
           L -180 345
           Z" />

    <!-- Right Humerus -->
    <path id="bone_humerus_right" class="bone" data-name="Right Humerus" data-medical-name="Humerus Dexter"
        d="M 180 345
           C 165 335, 155 345, 155 370
           C 155 390, 165 400, 170 405
           L 185 450
           L 195 480
           C 200 490, 205 500, 198 510
           L 205 630
           C 190 640, 180 650, 180 665
           C 185 680, 200 685, 210 685
           C 220 685, 230 680, 235 670
           C 240 660, 238 650, 230 630
           L 220 450
           C 225 400, 230 380, 225 365
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
    <!-- Continuous Path: Head -> Neck -> Tuberosity -> Shaft -> Styloid -> Ulnar Notch -> Shaft -> Neck -> Head -->
    <path id="bone_radius_left" class="bone" data-name="Left Radius" data-medical-name="Radius Sinister" 
        d="M -235 670                  
           L -245 670                  
           C -248 680, -248 685, -242 690 
           L -245 705                  
           C -245 745, -260 775, -270 815 
           C -275 855, -275 885, -282 895 
           L -288 915                  
           L -260 910                  
           C -255 880, -240 840, -230 800 
           C -225 760, -225 740, -235 730 
           L -230 710                  
           L -228 690                  
           C -230 690, -232 690, -235 670 
           Z" />

    <!-- Left Ulna (Medial) -->
    <path id="bone_ulna_left" class="bone" data-name="Left Ulna" data-medical-name="Ulna Sinister" 
        d="M -205 660
           C -225 660, -230 670, -225 680 
           C -222 685, -220 690, -218 695 
           C -218 735, -230 775, -240 815 
           L -252 895                  
           L -254 912                  
           L -245 908
           L -240 890
           C -220 850, -200 780, -195 720 
           C -195 700, -192 680, -205 660 
           Z" />

    <!-- Right Radius -->
    <path id="bone_radius_right" class="bone" data-name="Right Radius" data-medical-name="Radius Dexter" 
        d="M 235 670
           L 245 670
           C 248 680, 248 685, 242 690
           L 245 705
           C 245 745, 260 775, 270 815
           C 275 855, 275 885, 282 895
           L 288 915
           L 260 910
           C 255 880, 240 840, 230 800
           C 225 760, 225 740, 235 730
           L 230 710
           L 228 690
           C 230 690, 232 690, 235 670
           Z" />

    <!-- Right Ulna -->
    <path id="bone_ulna_right" class="bone" data-name="Right Ulna" data-medical-name="Ulna Dexter" 
        d="M 205 660
           C 225 660, 230 670, 225 680
           C 222 685, 220 690, 218 695
           C 218 735, 230 775, 240 815
           L 252 895
           L 254 912
           L 245 908
           L 240 890
           C 220 850, 200 780, 195 720
           C 195 700, 192 680, 205 660
           Z" />
`;

export const upperAppendicularSVG = scapulaeSVG + upperLimbsSVG;
