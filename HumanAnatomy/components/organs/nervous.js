export const nervousSystemSVG = `
    <!-- Brain Gradient (Enhanced) -->
    <radialGradient id="brainGradient" cx="50%" cy="40%" r="60%">
        <stop offset="0%" style="stop-color:#f4e1f4;stop-opacity:1" /> <!-- Lighter, pinkish-grey matter -->
        <stop offset="40%" style="stop-color:#e6cce6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#dcb0dc;stop-opacity:1" /> <!-- Darker depth -->
    </radialGradient>
    <filter id="foliaTexture" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
    </filter>
</defs>

<g id="organs_nervous">

    <!-- BRAIN OVERVIEW
         View: Anterior (Coronal/Frontal perspective).
         Layering: Cerebrum (Top/Back) -> Cerebellum (Inferior/Posterior) -> Brainstem (Anterior/Center).
    -->

    <!-- INTERNAL STRUCTURES (Deep/Diencephalon) -->
    <!-- Thalamus & Hypothalamus 
         Placement: Central, superior to brainstem.
    -->
    <g id="organ_diencephalon">
        <!-- Thalami: Two egg-shaped bodies deep in the brain core -->
        <ellipse id="part_thalamus_left" cx="-10" cy="78" rx="8" ry="12" 
            fill="#d9c0d9" stroke="#b080b0" stroke-width="0.6" opacity="0.9">
            <title>Left Thalamus</title>
        </ellipse>
        <ellipse id="part_thalamus_right" cx="10" cy="78" rx="8" ry="12" 
            fill="#d9c0d9" stroke="#b080b0" stroke-width="0.6" opacity="0.9">
            <title>Right Thalamus</title>
        </ellipse>
        
        <!-- Hypothalamus: Small region below thalami -->
        <path id="part_hypothalamus" d="M -5 88 L 5 88 L 0 98 Z" 
            fill="#ccaacc" opacity="0.8">
            <title>Hypothalamus</title>
        </path>
        
        <!-- Pituitary Gland (Hypophysis): Dangles from hypothalamus -->
        <line x1="0" y1="98" x2="0" y2="103" stroke="#ffb6c1" stroke-width="0.8" />
        <circle id="part_pituitary" cx="0" cy="103" r="3" fill="#ffb6c1" stroke="#ff69b4" stroke-width="0.5">
            <title>Pituitary Gland</title>
        </circle>
    </g>

    <!-- OPTIC PATHWAY -->
    <g id="organ_optic_pathway" stroke="#fff5e6" stroke-width="1.5" fill="none" opacity="0.9">
        <!-- Optic Nerves -->
        <path id="part_optic_nerve_left" d="M -45 90 C -35 92, -15 90, -5 95" />
        <path id="part_optic_nerve_right" d="M 45 90 C 35 92, 15 90, 5 95" />
        <!-- Optic Chiasm -->
        <circle id="part_optic_chiasm" cx="0" cy="95" r="3" fill="#fff5e6" stroke="none" />
        <title>Optic Pathway (CN II)</title>
    </g>

    <!-- VENTRICULAR SYSTEM (CSF fluid filled cavities)
         View: Anterior horns of lateral ventricles and narrow 3rd ventricle.
    -->
    <g id="organ_ventricles" opacity="0.5">
        <path id="part_ventricle_lateral_left" d="M -6 55 Q -10 40, -18 48 Q -22 60, -8 70" 
            fill="none" stroke="#add8e6" stroke-width="2" stroke-linecap="round">
            <title>Left Lateral Ventricle (Anterior Horn)</title>
        </path>
        <path id="part_ventricle_lateral_right" d="M 6 55 Q 10 40, 18 48 Q 22 60, 8 70" 
            fill="none" stroke="#add8e6" stroke-width="2" stroke-linecap="round">
            <title>Right Lateral Ventricle (Anterior Horn)</title>
        </path>
        <!-- Third Ventricle: Vertical midline space -->
        <line id="part_ventricle_third" x1="0" y1="65" x2="0" y2="85" stroke="#add8e6" stroke-width="1.2" />
    </g>


    <!-- CEREBRUM (Telencephalon)
         Placement: Superior/Cranial.
         Structure: Two Hemispheres, Lobes (Frontal, Parietal, Temporal, Occipital).
    -->
    <g id="organ_brain_cerebrum" class="organ" data-name="Cerebrum" data-medical-name="Cerebrum">
        
        <!-- Left Hemisphere: Bulbous, frontal and temporal lobes clearly visible -->
        <path id="part_cerebrum_left"
            d="M -3 110
               C -15 112, -35 115, -55 105
               C -75 95, -78 75, -70 55
               C -65 30, -50 15, -30 18
               C -15 15, -8 15, -3 18
               L -3 110
               Z"
            fill="url(#brainGradient)" stroke="#b080b0" stroke-width="1.2" opacity="0.85">
            <title>Left Cerebral Hemisphere</title>
        </path>

        <!-- Right Hemisphere: Symmetric but bulbous -->
        <path id="part_cerebrum_right"
            d="M 3 110
               C 15 112, 35 115, 55 105
               C 75 95, 78 75, 70 55
               C 65 30, 50 15, 30 18
               C 15 15, 8 15, 3 18
               L 3 110
               Z"
            fill="url(#brainGradient)" stroke="#b080b0" stroke-width="1.2" opacity="0.85">
            <title>Right Cerebral Hemisphere</title>
        </path>

        <!-- GYRI & SULCI (Surface Convolutions) - More organic, nested patterns -->
        <g fill="none" stroke="#906090" stroke-width="0.7" opacity="0.5">
            <!-- Frontal Lobe region (Superior) -->
            <path d="M -10 25 C -15 22, -25 25, -35 30 S -45 35, -50 45" />
            <path d="M -15 40 C -25 38, -35 42, -45 48" />
            <path d="M 10 25 C 15 22, 25 25, 35 30 S 45 35, 50 45" />
            <path d="M 15 40 C 25 38, 35 42, 45 48" />

            <!-- Temporal Lobe region (Inferior/Lateral) -->
            <path d="M -68 65 C -60 75, -50 85, -30 90" />
            <path d="M -65 75 C -55 85, -45 92, -25 95" stroke-width="0.9" opacity="0.7" />
            <path d="M 68 65 C 60 75, 50 85, 30 90" />
            <path d="M 65 75 C 55 85, 45 92, 25 95" stroke-width="0.9" opacity="0.7" />

            <!-- Midline Fissure Texture - Deepening effect -->
            <path d="M -3 18 L -3 110" stroke-width="1.2" opacity="0.3" />
            <path d="M 3 18 L 3 110" stroke-width="1.2" opacity="0.3" />
            <path d="M 0 18 L 0 110" stroke="#704070" stroke-width="1.5" opacity="0.2" />

            <!-- Scattered small sulci for texture -->
            <path d="M -20 60 Q -25 55, -35 60" />
            <path d="M -40 70 Q -45 65, -55 75" />
            <path d="M 20 60 Q 25 55, 35 60" />
            <path d="M 40 70 Q 45 65, 55 75" />
        </g>
    </g>


    <!-- CEREBELLUM
         Placement: Posterior cranial fossa, inferior to occipital lobes.
         Appearance: Fine horizontal grooves (folia).
         Structure: Two hemispheres joined by vermis.
    -->
    <g id="organ_brain_cerebellum" class="organ" data-name="Cerebellum" data-medical-name="Cerebellum">
        <!-- Reworked hemispheres: more bulbous and distinct -->
        <path id="part_cerebellum_left"
              d="M -8 102
                 C -25 98, -52 105, -58 125
                 C -58 145, -35 155, -15 145
                 C -10 142, -6 135, -6 125
                 Z"
              fill="#d9bcd9" stroke="#bf9bbf" stroke-width="1" />
        <path id="part_cerebellum_right"
              d="M 8 102
                 C 25 98, 52 105, 58 125
                 C 58 145, 35 155, 15 145
                 C 10 142, 6 135, 6 125
                 Z"
              fill="#d9bcd9" stroke="#bf9bbf" stroke-width="1" />
        
        <!-- Vermis (Central connection) -->
        <path id="part_cerebellum_vermis" d="M -8 115 Q 0 110, 8 115 L 6 135 Q 0 140, -6 135 Z" 
            fill="#cdacd9" stroke="#a080a0" stroke-width="0.8" />
        
        <!-- Detailed Folia: Fine horizontal lines -->
        <g stroke="#a080a0" stroke-width="0.3" fill="none" opacity="0.6">
            <path d="M -10 110 Q -25 106, -50 115" />
            <path d="M -10 118 Q -25 114, -54 125" />
            <path d="M -10 126 Q -25 122, -55 135" />
            <path d="M -10 134 Q -20 134, -45 148" />
            
            <path d="M 10 110 Q 25 106, 50 115" />
            <path d="M 10 118 Q 25 114, 54 125" />
            <path d="M 10 126 Q 25 122, 55 135" />
            <path d="M 10 134 Q 20 134, 45 148" />
        </g>
        <title>Cerebellum</title>
    </g>

    <!-- CRANIAL NERVES (Anterior components) -->
    <g id="organ_cranial_nerves" stroke-width="0.8" fill="none">
        <!-- Olfactory Bulbs (CN I): On ventral surface of frontal lobes -->
        <g id="nerve_olfactory" stroke="#e6e6a3" fill="#fafad2" opacity="0.8">
            <path id="part_olfactory_bulb_left" d="M -15 35 Q -15 55, -12 65" stroke-width="2" />
            <path id="part_olfactory_bulb_right" d="M 15 35 Q 15 55, 12 65" stroke-width="2" />
            <title>Olfactory Bulbs (CN I)</title>
        </g>
        
        <!-- Optic Pathway (CN II): Refined -->
        <g id="nerve_optic" stroke="#fff5e6" opacity="0.9">
            <path id="part_optic_nerve_left" d="M -45 90 C -35 92, -15 90, -5 95" stroke-width="1.8" />
            <path id="part_optic_nerve_right" d="M 45 90 C 35 92, 15 90, 5 95" stroke-width="1.8" />
            <circle id="part_optic_chiasm" cx="0" cy="95" r="3.5" fill="#fff5e6" stroke="none" />
            <title>Optic Pathway (CN II)</title>
        </g>
    </g>


    <!-- BRAINSTEM
         Placement: Connects Cerebrum to Spinal Cord. Anterior to Cerebellum.
         Parts: Midbrain, Pons, Medulla Oblongata.
    -->
    <g id="organ_brainstem" class="organ" data-name="Brainstem" data-medical-name="Truncus Encephali">
        
        <!-- Midbrain: Superior junction -->
        <path id="part_midbrain"
            d="M -7 98 L -9 90 Q 0 91.5, 9 90 L 7 98 Z"
            fill="#e6cce6" stroke="#b080b0" stroke-width="1" />

        <!-- Pons: Bulbous anterior bridge, more organic -->
        <path id="part_pons"
            d="M -8 98
               C -16 102, -18 122, -8 128
               Q 0 130, 8 128
               C 18 122, 16 102, 8 98
               Q 0 96, -8 98
               Z"
            fill="#ecccec" stroke="#b080b0" stroke-width="1.2">
            <title>Pons</title>
        </path>
        <!-- Horizontal fiber patterns of pons -->
        <path d="M -11 108 Q 0 110, 11 108" fill="none" stroke="#cc99cc" stroke-width="0.5" opacity="0.4" />
        <path d="M -13 116 Q 0 118, 13 116" fill="none" stroke="#cc99cc" stroke-width="0.5" opacity="0.4" />
        <path d="M -10 124 Q 0 125.5, 10 124" fill="none" stroke="#cc99cc" stroke-width="0.5" opacity="0.4" />

        <!-- Medulla Oblongata: Tapers smoothly to spinal cord -->
        <path id="part_medulla"
            d="M -8 128
               C -10 138, -9 170, -5 180
               L 5 180
               C 9 170, 10 138, 8 128
               Q 0 130, -8 128
               Z"
            fill="#e6cce6" stroke="#b080b0" stroke-width="1">
            <title>Medulla Oblongata</title>
        </path>
        <!-- Pyramidal decussation detail -->
        <path d="M -2 130 L -2 178" fill="none" stroke="#cc99cc" stroke-width="0.4" opacity="0.6" />
        <path d="M 2 130 L 2 178" fill="none" stroke="#cc99cc" stroke-width="0.4" opacity="0.6" />
        <path d="M -3 155 L 3 162 M -3 162 L 3 155" fill="none" stroke="#cc99cc" stroke-width="0.3" opacity="0.4" />
    </g>


    <!-- SPINAL CORD
         Placement: Vertebral Canal. Ends L1/L2.
    -->
    <path id="organ_spinal_cord" class="organ" data-name="Spinal Cord" data-medical-name="Medulla Spinalis"
        d="M -5 180
           L -5 700
           L 0 720     
           L 5 700
           L 5 180
           Z"
        fill="#f0e0f0" stroke="#d0c0d0" stroke-width="1">
        <title>Spinal Cord</title>
    </path>
    <!-- Cauda Equina (Nerves) -->
    <g stroke="#d0c0d0" stroke-width="0.5" fill="none">
        <path d="M 0 720 Q -10 750, -5 800" />
        <path d="M 0 720 Q 10 750, 5 800" />
        <path d="M 0 720 L 0 800" />
    </g>


    <!-- EYES
         Placement: Orbits. Aligned with Orbicularis Oculi centers (+/- 45, 90).
    -->
    <circle id="organ_eye_left" class="organ" data-name="Left Eye" data-medical-name="Oculus Sinister"
        cx="-45" cy="90" r="10"
        fill="#ffffff" stroke="#cccccc" stroke-width="1" />
    <circle cx="-45" cy="90" r="3.5" fill="#66bbff" /> <!-- Iris -->
    <circle cx="-45" cy="90" r="1.3" fill="#000000" /> <!-- Pupil -->

    <circle id="organ_eye_right" class="organ" data-name="Right Eye" data-medical-name="Oculus Dexter"
        cx="45" cy="90" r="10"
        fill="#ffffff" stroke="#cccccc" stroke-width="1" />
    <circle cx="45" cy="90" r="3.5" fill="#66bbff" /> <!-- Iris -->
    <circle cx="45" cy="90" r="1.3" fill="#000000" /> <!-- Pupil -->

</g>
`;
