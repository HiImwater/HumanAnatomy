export const urinaryEndocrineSVG = `
<defs>
    <!-- Kidney Gradient -->
    <radialGradient id="kidneyGradient" cx="30%" cy="30%" r="70%">
        <stop offset="0%" style="stop-color:#8b4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#5a2e0e;stop-opacity:1" />
    </radialGradient>
</defs>

<g id="organs_urinary_endocrine">

    <!-- PITUITARY & PINEAL GLANDS -->
    <g id="organ_brain_glands">
        <path id="organ_pituitary" class="organ" data-name="Pituitary Gland" data-medical-name="Hypophysis"
            d="M -3 130
               C -3 128, -2 127, 0 127
               C 2 127, 3 128, 3 130
               C 3 133, 1 135, 0 135
               C -1 135, -3 133, -3 130
               Z"
            fill="#ffccaa" stroke="#cc9988" stroke-width="0.5">
            <title>Pituitary Gland</title>
        </path>
        
        <!-- Pineal Gland
             Placement: Posterior to Thalamus.
        -->
        <circle id="organ_pineal" class="organ" data-name="Pineal Gland" data-medical-name="Glandula Pinealis"
            cx="0" cy="115" r="2" fill="#ffcccc" stroke="#cc8888" stroke-width="0.5">
            <title>Pineal Gland</title>
        </circle>
    </g>


    <!-- THYROID & PARATHYROIDS
         Placement: Neck (C5-T1).
    -->
    <g id="organ_thyroid_complex">
        <path id="organ_thyroid" class="organ" data-name="Thyroid Gland" data-medical-name="Glandula Thyroidea"
            d="M -15 285       
               C -25 290, -25 310, -15 315
               C -5 320, 0 310, 0 300      
               C 0 310, 5 320, 15 315      
               C 25 310, 25 290, 15 285    
               C 10 280, -10 280, -15 285
               Z"
            fill="#dbaabb" stroke="#b08090" stroke-width="1">
            <title>Thyroid Gland</title>
        </path>
        
        <!-- Parathyroid Glands (4) -->
        <circle class="organ" data-name="Superior Left Parathyroid" data-medical-name="Glandula Parathyroidea" cx="-12" cy="290" r="1.5" fill="#f0e68c" />
        <circle class="organ" data-name="Inferior Left Parathyroid" data-medical-name="Glandula Parathyroidea" cx="-12" cy="310" r="1.5" fill="#f0e68c" />
        <circle class="organ" data-name="Superior Right Parathyroid" data-medical-name="Glandula Parathyroidea" cx="12" cy="290" r="1.5" fill="#f0e68c" />
        <circle class="organ" data-name="Inferior Right Parathyroid" data-medical-name="Glandula Parathyroidea" cx="12" cy="310" r="1.5" fill="#f0e68c" />
    </g>


    <!-- ADRENAL GLANDS -->
    <!-- ... (Adrenals keep existing code) ... -->
    <!-- Left Adrenal (Crescent) -->
    <path id="organ_adrenal_left" class="organ" data-name="Left Adrenal Gland" data-medical-name="Glandula Suprarenalis Sinistra"
        d="M -40 595 L -55 605 L -30 605 Z" fill="#eddca0" stroke="#dcb060" stroke-width="1" />
    <path id="organ_adrenal_right" class="organ" data-name="Right Adrenal Gland" data-medical-name="Glandula Suprarenalis Dextra"
        d="M 40 615 L 55 625 L 30 625 Z" fill="#eddca0" stroke="#dcb060" stroke-width="1" />


    <!-- KIDNEYS -->
    <!-- ... (Kidneys keep existing code) ... -->
    <path id="organ_kidney_left" class="organ" data-name="Left Kidney" data-medical-name="Ren Sinister"
        d="M -30 635 C -20 620, -20 610, -40 600 C -60 590, -75 620, -70 640 C -65 660, -60 670, -40 670 C -20 660, -20 650, -30 635 Z"
        fill="url(#kidneyGradient)" stroke="#5a2e0e" stroke-width="1" />
    <path id="organ_kidney_right" class="organ" data-name="Right Kidney" data-medical-name="Ren Dexter"
        d="M 30 655 C 20 640, 20 630, 40 620 C 60 610, 75 640, 70 660 C 65 680, 60 690, 40 690 C 20 680, 20 670, 30 655 Z"
        fill="url(#kidneyGradient)" stroke="#5a2e0e" stroke-width="1" />


    <!-- URETERS -->
    <path id="organ_ureters" class="organ" data-name="Ureters" data-medical-name="Ureters"
        d="M -30 640 Q -20 750, -10 930 M 30 660 Q 20 770, 10 930"
        fill="none" stroke="#e0c0a0" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.8" />


    <!-- BLADDER & URETHRA -->
    <g id="organ_bladder_complex">
        <path id="organ_bladder" class="organ" data-name="Urinary Bladder" data-medical-name="Vesica Urinaria"
            d="M -25 930
               C -25 920, 25 920, 25 930   
               C 30 950, 20 970, 0 975     
               C -20 970, -30 950, -25 930
               Z"
            fill="#e6ccb3" stroke="#ccaa88" stroke-width="1">
            <title>Bladder</title>
        </path>
        
        <!-- Urethra
             Placement: Bladder outlet to exterior.
        -->
        <path id="organ_urethra" class="organ" data-name="Urethra" data-medical-name="Urethra"
            d="M 0 975 L 0 1000" fill="none" stroke="#d2b48c" stroke-width="3" stroke-linecap="round">
            <title>Urethra</title>
        </path>
    </g>

</g>
`;
