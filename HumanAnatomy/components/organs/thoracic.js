export const thoracicOrgansSVG = `
<defs>
    <!-- Lung Texture Pattern -->
    <pattern id="lungTexture" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#ff9999" opacity="0.3"/>
        <circle cx="7" cy="7" r="1.5" fill="#ff7777" opacity="0.2"/>
    </pattern>
    
    <!-- Heart Gradient -->
    <radialGradient id="heartGradient" cx="40%" cy="40%" r="70%" fx="30%" fy="30%">
        <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8b0000;stop-opacity:1" />
    </radialGradient>
</defs>

<g id="organs_thoracic" class="organ-system">

    <!-- TRACHEA & BRONCHI
         Placement: Starts C3/C4 (Y=240), aligns centrally. Splits at Carina (T4/T5, Y=~400)
    -->
    <path id="organ_trachea" class="organ" data-name="Trachea" data-medical-name="Trachea"
        d="M -12 240 
           L -12 400 
           Q -12 410, -25 430  
           L -15 435
           Q -5 420, 0 410
           Q 5 420, 15 435     
           L 25 430
           Q 12 410, 12 400
           L 12 240
           Z"
        fill="#e6e6e6" stroke="#cccccc" stroke-width="1">
        <title>Trachea (Windpipe)</title>
    </path>
    <!-- Cartilage Rings -->
    <g stroke="#bfbfbf" stroke-width="2" fill="none" opacity="0.6">
        <path d="M -10 250 H 10" />
        <path d="M -10 265 H 10" />
        <path d="M -10 280 H 10" />
        <path d="M -10 295 H 10" />
        <path d="M -10 310 H 10" />
        <path d="M -10 325 H 10" />
        <path d="M -10 340 H 10" />
        <path d="M -10 355 H 10" />
        <path d="M -10 370 H 10" />
        <path d="M -10 385 H 10" />
    </g>

    <!-- LUNGS 
         Placement: Flanking heart. Adjusted to fit within Rib Cage (T1-T10/11).
         Apex: Just above Clavicle/Rib 1 (Y ~325).
         Base: Diaphragm (Y ~550).
         Width: Max X ~125 (within Rib 8's 140).
    -->
    
    <!-- Right Lung (Superior Lobe) -->
    <path id="organ_lung_right_superior" class="organ" data-name="Right Lung (Superior Lobe)" data-medical-name="Pulmo Dexter - Lobus Superior"
        d="M 30 330                  
           C 30 315, 50 315, 80 330  
           C 115 350, 135 390, 135 420 
           C 135 440, 125 450, 100 455 
           L 30 435                  
           L 30 330
           Z"
        fill="url(#lungTexture)" fill-color="#ffb3b3" stroke="#cc6666" stroke-width="1.5" />

    <!-- Right Lung (Middle Lobe) -->
    <path id="organ_lung_right_middle" class="organ" data-name="Right Lung (Middle Lobe)" data-medical-name="Pulmo Dexter - Lobus Medius"
        d="M 30 435
           L 100 455                 
           C 105 470, 110 490, 105 510 
           L 30 490                  
           L 30 435
           Z"
        fill="url(#lungTexture)" fill-color="#ffb3b3" stroke="#cc6666" stroke-width="1.5" />

    <!-- Right Lung (Inferior Lobe) -->
    <path id="organ_lung_right_inferior" class="organ" data-name="Right Lung (Inferior Lobe)" data-medical-name="Pulmo Dexter - Lobus Inferior"
        d="M 30 490
           L 105 510                 
           C 100 540, 90 560, 30 570 
           C 25 560, 30 550, 30 490  
           Z"
        fill="url(#lungTexture)" fill-color="#ffb3b3" stroke="#cc6666" stroke-width="1.5" />


    <!-- Left Lung (Superior Lobe) -->
    <!-- Includes Cardiac Notch -->
    <path id="organ_lung_left_superior" class="organ" data-name="Left Lung (Superior Lobe)" data-medical-name="Pulmo Sinister - Lobus Superior"
        d="M -30 330                 
           C -30 315, -50 315, -80 330
           C -115 350, -135 390, -135 420
           C -135 450, -125 470, -100 490
           L -50 470                 
           L -30 440                 
           C -45 420, -45 400, -30 380 
           L -30 330
           Z"
        fill="url(#lungTexture)" fill-color="#ffb3b3" stroke="#cc6666" stroke-width="1.5" />

    <!-- Left Lung (Inferior Lobe) -->
    <path id="organ_lung_left_inferior" class="organ" data-name="Left Lung (Inferior Lobe)" data-medical-name="Pulmo Sinister - Lobus Inferior"
        d="M -50 470
           L -100 490                
           C -95 530, -85 560, -30 570 
           C -25 560, -30 540, -30 500 
           L -50 470
           Z"
        fill="url(#lungTexture)" fill-color="#ffb3b3" stroke="#cc6666" stroke-width="1.5" />

    <!-- THYMUS
         Placement: Mediastinum, anterior to great vessels.
    -->
    <path id="organ_thymus" class="organ" data-name="Thymus" data-medical-name="Thymus"
        d="M -15 350
           Q 0 340, 15 350
           L 10 390
           Q 0 400, -10 390
           Z"
        fill="#ffccdd" stroke="#cc8899" stroke-width="1" opacity="0.9">
        <title>Thymus</title>
    </path>


    <!-- PLEURA (Serous Membrane / Lung Lining) -->
    <g id="organ_pleura" opacity="0.3">
        <path id="organ_pleura_right" class="organ" data-name="Right Pleura" data-medical-name="Pleura Dextra"
            d="M 22 340 C 22 315, 130 315, 130 415 C 130 515, 80 585, 20 575 Z"
            fill="none" stroke="#add8e6" stroke-width="1" />
        <path id="organ_pleura_left" class="organ" data-name="Left Pleura" data-medical-name="Pleura Sinistra"
            d="M -22 340 C -22 315, -130 315, -130 415 C -130 515, -80 585, -20 575 Z"
            fill="none" stroke="#add8e6" stroke-width="1" />
    </g>


    <!-- MAMMARY GLANDS (Bilateral)
         Placement: Anterior to ribs 2-6.
    -->
    <g id="organ_mammary_glands" opacity="0.5">
        <path id="organ_mammary_left" class="organ" data-name="Left Mammary Gland" data-medical-name="Glandula Mammaria"
            d="M -40 380
               C -80 380, -90 440, -40 460
               C -20 460, -20 380, -40 380
               Z"
            fill="#ffccd5" stroke="#cc99aa" stroke-width="1" />
        <path id="organ_mammary_right" class="organ" data-name="Right Mammary Gland" data-medical-name="Glandula Mammaria"
            d="M 40 380
               C 80 380, 90 440, 40 460
               C 20 460, 20 380, 40 380
               Z"
            fill="#ffccd5" stroke="#cc99aa" stroke-width="1" />
    </g>


    <!-- HEART MOVED TO CIRCULATORY SYSTEM -->


    <!-- DIAPHRAGM -->
    <path id="organ_diaphragm" class="organ" data-name="Diaphragm" data-medical-name="Diaphragma"
        d="M -120 540
           C -100 500, -50 480, -10 510  
           Q 0 520, 10 510
           C 50 460, 100 480, 120 540    
           L 125 580                     
           C 80 560, -80 560, -125 580   
           Z"
        fill="#cfa6a6" stroke="#a07070" stroke-width="1" opacity="0.9" />

</g>
`;
