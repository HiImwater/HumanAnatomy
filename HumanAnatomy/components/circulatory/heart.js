export const heartSVG = `
<defs>
    <!-- Heart Gradient (Enhanced) -->
    <radialGradient id="heartGradient" cx="40%" cy="40%" r="70%" fx="30%" fy="30%">
        <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8b0000;stop-opacity:1" />
    </radialGradient>
    
    <!-- Vessel Gradients -->
    <linearGradient id="aortaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#e06060;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#c04040;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="veinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#6080e0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4060c0;stop-opacity:1" />
    </linearGradient>

    <!-- Coronary Vessel Styles -->
    <style>
        .coronary-artery { fill: none; stroke: #ff4d4d; stroke-width: 1.5; stroke-linecap: round; opacity: 0.8; }
        .coronary-vein { fill: none; stroke: #4d4dff; stroke-width: 1.5; stroke-linecap: round; opacity: 0.8; }
    </style>
</defs>

<g id="organ_heart_complex" transform="translate(0, 0)"> 
    <!-- 
        HEART - DETAILED ANATOMICAL VIEW
        Placement: Mediastinum, 2/3 left of midline.
        Anterior View.
    -->

    <!-- GREAT VESSELS (Posterior Layer) -->
    
    <!-- Superior Vena Cava -->
    <path id="part_heart_svc" data-name="Superior Vena Cava" data-medical-name="Vena Cava Superior"
        d="M -25 380 L -25 410 L -10 410 L -10 380 Z"
        fill="url(#veinGradient)" stroke="#3050a0" stroke-width="1" />

    <!-- Inferior Vena Cava -->
    <path id="part_heart_ivc" data-name="Inferior Vena Cava" data-medical-name="Vena Cava Inferior"
        d="M -15 540 L -15 560 L -5 560 L -5 540 Z"
        fill="url(#veinGradient)" stroke="#3050a0" stroke-width="1" />

    <!-- Pulmonary Veins (Left/Right - visible edges) -->
    <path id="part_heart_pulmonary_veins" data-name="Pulmonary Veins"
        d="M 35 430 L 50 430 M -45 430 L -60 430"
        stroke="#cc4444" stroke-width="3" stroke-linecap="round" />

    <!-- Aorta (Ascending & Arch) -->
    <path id="part_heart_aorta" data-name="Aorta" data-medical-name="Aorta"
        d="M 5 410 
           Q 10 380, -10 370 
           Q -40 360, -40 390
           L -30 400"
        fill="none" stroke="url(#aortaGradient)" stroke-width="18" stroke-linecap="round">
        <title>Aorta</title>
    </path>
    <!-- Aortic Arch Branches (Brachiocephalic, Carotid, Subclavian) -->
    <g fill="none" stroke="url(#aortaGradient)" stroke-width="6">
        <path d="M -10 370 L -5 340" />
        <path d="M -20 365 L -25 340" />
        <path d="M -30 370 L -40 345" />
    </g>


    <!-- HEART CHAMBERS (Main Mass) -->
    <g id="heart_mass">
        <!-- Animation Wrapper -->
        <animateTransform attributeName="transform" type="scale"
            values="1 1; 1.02 1.02; 1 1"
            dur="0.8s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />

        <!-- Right Atrium & Auricle -->
        <path id="part_heart_ra" data-name="Right Atrium" data-medical-name="Atrium Dextrum"
            d="M -25 410
               C -40 420, -45 450, -35 470
               L -10 470
               L -10 410
               Z"
            fill="#d05050" stroke="#800000" stroke-width="1" />

        <!-- Left Atrium & Auricle (Auricle visible anteriorly) -->
        <path id="part_heart_la" data-name="Left Auricle" data-medical-name="Auricula Sinistra"
            d="M 25 425
               C 35 430, 35 440, 25 445
               L 15 440
               Z"
            fill="#d05050" stroke="#800000" stroke-width="1" />

        <!-- Right Ventricle (Anterior) -->
        <path id="part_heart_rv" data-name="Right Ventricle" data-medical-name="Ventriculus Dexter"
            d="M -35 470
               C -30 500, -20 530, -10 540
               L 10 535
               L 20 460
               L -10 450
               Z"
            fill="url(#heartGradient)" stroke="#800000" stroke-width="1" />

        <!-- Left Ventricle (Apex & Left border) -->
        <path id="part_heart_lv" data-name="Left Ventricle" data-medical-name="Ventriculus Sinister"
            d="M 20 460
               C 35 460, 40 480, 35 500
               C 30 520, 10 530, -10 540
               L 10 535
               Z"
            fill="url(#heartGradient)" stroke="#800000" stroke-width="1" />

        <!-- Pulmonary Trunk (Vessel exiting RV) -->
        <path id="part_heart_pulmonary_trunk" data-name="Pulmonary Trunk" data-medical-name="Truncus Pulmonalis"
            d="M -10 450
               L -15 420
               L 15 420
               L 10 450
               Z"
            fill="#d06060" stroke="#800000" stroke-width="1" />

        <!-- Coronary Circulation (Surface Vessels) -->
        <!-- LAD (Left Anterior Descending) -->
        <path class="coronary-artery" d="M 5 450 Q 15 480, 5 520" />
        <path class="coronary-vein" d="M 8 450 Q 18 480, 8 520" />
        
        <!-- Right Coronary Artery -->
        <path class="coronary-artery" d="M -10 450 Q -20 470, -25 490" />
    <!-- PERICARDIUM (Heart Sac)
         Placement: Surrounds the entire heart mass.
    -->
    <path id="organ_pericardium" class="organ" data-name="Pericardium" data-medical-name="Pericardium"
        d="M -70 430
           C -80 500, -30 560, 0 570
           C 30 570, 80 500, 70 430
           C 60 380, -60 380, -70 430
           Z"
        fill="rgba(255, 255, 255, 0.05)" stroke="#add8e6" stroke-width="0.5" opacity="0.6">
        <title>Pericardium</title>
    </path>


</g>
`;
