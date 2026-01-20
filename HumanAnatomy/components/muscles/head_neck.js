
export const headNeckMusclesSVG = `
    <g id="muscles_head_neck" class="muscle-group">
        <!-- 
            EPICRANIAL APONEUROSIS (Galea Aponeurotica)
            Tough fibrous sheet covering the upper cranium.
            Expanded: Dome-like coverage over entire parietal/frontal vault.
        -->
        <path id="f_galea" class="aponeurosis" data-name="Epicranial Aponeurosis"
            d="M -75 20 
               Q -85 -20, -40 -45 
               Q 0 -50, 40 -45 
               Q 85 -20, 75 20 
               L 80 50 
               Q 70 75, 45 78 
               L -45 78 
               Q -70 75, -80 50 
               Z" opacity="0.5" />

        <!-- 
            FRONTALIS (Occipitofrontalis frontal belly)
            Refined: Broad sheets meeting centrally.
            Origin Raised to Y=15 (Hairline) to cover upper forehead.
        -->
        <g id="m_frontalis_group">
            <path id="m_frontalis_l" class="muscle-superficial muscle" data-name="Frontalis"
                d="M -3 15 
                   L -15 15 
                   C -35 15, -60 25, -60 70 
                   L -50 78 
                   C -40 82, -20 78, -10 75 
                   L -3 72 
                   Z" />
            
            <path id="m_frontalis_r" class="muscle-superficial muscle" data-name="Frontalis"
                d="M 3 15 
                   L 15 15 
                   C 35 15, 60 25, 60 70 
                   L 50 78 
                   C 40 82, 20 78, 10 75 
                   L 3 72 
                   Z" />
                   
             <!-- Central Fascia Connection (Procerus Extension) -->
             <path id="f_frontalis_center" class="fascia" d="M -3 15 L 3 15 L 3 72 L -3 72 Z" opacity="0.3" />
        </g>

        <!-- 
            OCCIPITALIS (Occipitofrontalis occipital belly)
            Widened anchor points.
        -->
        <path id="m_occipitalis_l" class="muscle-superficial muscle" data-name="Occipitalis"
            d="M -65 15 L -35 15 L -40 -5 L -60 -5 Z" />
        <path id="m_occipitalis_r" class="muscle-superficial muscle" data-name="Occipitalis"
            d="M 65 15 L 35 15 L 40 -5 L 60 -5 Z" />

        <!-- 
            AURICULAR MUSCLES (Ear movement)
        -->
        <g id="muscles_auricular" opacity="0.8">
            <path id="m_auricularis_sup_l" class="muscle-superficial muscle" data-name="Auricularis Superior" 
                d="M -85 70 Q -88 50, -80 40 L -70 42 Q -78 50, -75 70 Z" />
            <path id="m_auricularis_sup_r" class="muscle-superficial muscle" data-name="Auricularis Superior" 
                d="M 85 70 Q 88 50, 80 40 L 70 42 Q 78 50, 75 70 Z" />
                
            <path id="m_auricularis_ant_l" class="muscle-superficial muscle" data-name="Auricularis Anterior"
                d="M -88 85 Q -92 90, -95 90 L -85 92 Z" />
            <path id="m_auricularis_ant_r" class="muscle-superficial muscle" data-name="Auricularis Anterior"
                d="M 88 85 Q 92 90, 95 90 L 85 92 Z" />
                
            <path id="m_auricularis_post_l" class="muscle-superficial muscle" data-name="Auricularis Posterior"
                d="M -95 105 L -100 100 L -95 95 Z" />
            <path id="m_auricularis_post_r" class="muscle-superficial muscle" data-name="Auricularis Posterior"
                d="M 95 105 L 100 100 L 95 95 Z" />
        </g>

        <!-- SUBOCCIPITAL TRIANGLE (New Deep Density) -->
        <g id="muscles_suboccipital" opacity="0.7">
            <!-- Rectus Capitis Posterior Major -->
            <path id="m_rcp_major_l" class="muscle-deep muscle" data-name="Rectus Capitis Post. Major" d="M -10 135 L -25 125 L -15 120 Z" />
            <path id="m_rcp_major_r" class="muscle-deep muscle" data-name="Rectus Capitis Post. Major" d="M 10 135 L 25 125 L 15 120 Z" />
            <!-- Rectus Capitis Posterior Minor -->
            <path id="m_rcp_minor_l" class="muscle-deep muscle" data-name="Rectus Capitis Post. Minor" d="M -5 135 L -12 128 L -8 125 Z" />
            <path id="m_rcp_minor_r" class="muscle-deep muscle" data-name="Rectus Capitis Post. Minor" d="M 5 135 L 12 128 L 8 125 Z" />
            <!-- Obliquus Capitis Inferior -->
            <path id="m_oc_inf_l" class="muscle-deep muscle" data-name="Obliquus Capitis Inferior" d="M -10 135 L -35 140 L -30 145 Z" />
            <path id="m_oc_inf_r" class="muscle-deep muscle" data-name="Obliquus Capitis Inferior" d="M 10 135 L 35 140 L 30 145 Z" />
            <!-- Obliquus Capitis Superior -->
            <path id="m_oc_sup_l" class="muscle-deep muscle" data-name="Obliquus Capitis Superior" d="M -35 140 L -25 125 L -40 128 Z" />
            <path id="m_oc_sup_r" class="muscle-deep muscle" data-name="Obliquus Capitis Superior" d="M 35 140 L 25 125 L 40 128 Z" />
        </g>

        <!-- PREVERTEBRAL GROUP (New Deep Density) -->
        <g id="muscles_prevertebral" opacity="0.6">
            <path id="m_longus_colli_l" class="muscle-deep muscle" data-name="Longus Colli" d="M -8 150 Q -10 220, -12 300 L -5 300 Q -3 220, -5 150 Z" />
            <path id="m_longus_colli_r" class="muscle-deep muscle" data-name="Longus Colli" d="M 8 150 Q 10 220, 12 300 L 5 300 Q 3 220, 5 150 Z" />
            <path id="m_longus_capitis_l" class="muscle-deep muscle" data-name="Longus Capitis" d="M -15 140 L -25 220 L -18 220 L -12 140 Z" />
            <path id="m_longus_capitis_r" class="muscle-deep muscle" data-name="Longus Capitis" d="M 15 140 L 25 220 L 18 220 L 12 140 Z" />
        </g>

        <path id="m_procerus" class="muscle-superficial muscle" data-name="Procerus"
            d="M -8 85 L 8 85 L 6 110 L -6 110 Z" />
            
        <path id="m_dep_supercilii_l" class="muscle-deep muscle" data-name="Depressor Supercilii" 
              d="M -10 82 L -15 75 L -8 75 Z" opacity="0.8" />
        <path id="m_dep_supercilii_r" class="muscle-deep muscle" data-name="Depressor Supercilii" 
              d="M 10 82 L 15 75 L 8 75 Z" opacity="0.8" />

        <!-- 
            DEEP MASTICATION & BUCCAL GROUP
            Placed early to render BEHIND superficial facial muscles.
            Temporalis Raised to Y=-25 to cover Temporal Fossa/Lines.
        -->
        <path id="m_temporalis_l" class="muscle-deep muscle" data-name="Temporalis" 
              d="M -55 -25 Q -95 -15, -92 115 L -80 120 L -50 -25 Z" opacity="0.8" />
        <path id="m_temporalis_r" class="muscle-deep muscle" data-name="Temporalis" 
              d="M 55 -25 Q 95 -15, 92 115 L 80 120 L 50 -25 Z" opacity="0.8" />

        <g id="muscles_pterygoids" opacity="0.7">
            <!-- Lateral Pterygoid -->
            <path id="m_lat_pterygoid_l" class="muscle-deep muscle" data-name="Lateral Pterygoid" 
                  d="M -45 105 L -85 115 L -80 125 L -45 120 Z" />
            <path id="m_lat_pterygoid_r" class="muscle-deep muscle" data-name="Lateral Pterygoid" 
                  d="M 45 105 L 85 115 L 80 125 L 45 120 Z" />
            <!-- Medial Pterygoid -->
            <path id="m_med_pterygoid_l" class="muscle-deep muscle" data-name="Medial Pterygoid" 
                  d="M -45 130 L -75 170 L -65 175 L -40 140 Z" />
            <path id="m_med_pterygoid_r" class="muscle-deep muscle" data-name="Medial Pterygoid" 
                  d="M 45 130 L 75 170 L 65 175 L 40 140 Z" />
        </g>

        <path id="m_buccinator_l" class="muscle-deep muscle" data-name="Buccinator" 
              d="M -60 145 C -75 145, -80 155, -80 170 C -65 170, -58 165, -55 165 Z" opacity="0.6" />
        <path id="m_buccinator_r" class="muscle-deep muscle" data-name="Buccinator" 
              d="M 60 145 C 75 145, 80 155, 80 170 C 65 170, 58 165, 55 165 Z" opacity="0.6" />

        <!-- Bone Overlays Masking Deep Muscles -->
        <g id="bone_overlays_zygoma" pointer-events="none">
            <path id="bone_zygomatic_overlay_l" class="bone-overlay" fill="#e0e0e0" stroke="none" opacity="1"
                d="M -42 115 Q -46 95, -48 80 Q -75 105, -88 115 Q -92 118, -95 120 C -95 135, -80 140, -50 135 Z" />
            <path id="bone_zygomatic_overlay_r" class="bone-overlay" fill="#e0e0e0" stroke="none" opacity="1"
                d="M 42 115 Q 46 95, 48 80 Q 75 105, 88 115 Q 92 118, 95 120 C 95 135, 80 140, 50 135 Z" />
        </g>

        <path id="m_corrugator_l" class="muscle-deep muscle" data-name="Corrugator Supercilii"
            d="M -12 88 Q -25 82, -35 88 L -25 94 Z" opacity="0.7" />
        <path id="m_corrugator_r" class="muscle-deep muscle" data-name="Corrugator Supercilii"
            d="M 12 88 Q 25 82, 35 88 L 25 94 Z" opacity="0.7" />

        <!-- EXTRAOCULAR MUSCLES (Deep to Orbicularis Oculi) -->
        <g id="muscles_extraocular" opacity="0.8">
            <!-- Superior Rectus -->
            <path id="m_rectus_sup_l" class="muscle-deep muscle" data-name="Superior Rectus" d="M -35 75 L -55 75 L -45 65 Z" />
            <path id="m_rectus_sup_r" class="muscle-deep muscle" data-name="Superior Rectus" d="M 35 75 L 55 75 L 45 65 Z" />
            <!-- Inferior Rectus -->
            <path id="m_rectus_inf_l" class="muscle-deep muscle" data-name="Inferior Rectus" d="M -35 105 L -55 105 L -45 115 Z" />
            <path id="m_rectus_inf_r" class="muscle-deep muscle" data-name="Inferior Rectus" d="M 35 105 L 55 105 L 45 115 Z" />
            <!-- Medial Rectus -->
            <path id="m_rectus_med_l" class="muscle-deep muscle" data-name="Medial Rectus" d="M -25 90 L -30 80 L -30 100 Z" />
            <path id="m_rectus_med_r" class="muscle-deep muscle" data-name="Medial Rectus" d="M 25 90 L 30 80 L 30 100 Z" />
            <!-- Lateral Rectus -->
            <path id="m_rectus_lat_l" class="muscle-deep muscle" data-name="Lateral Rectus" d="M -65 90 L -60 80 L -60 100 Z" />
            <path id="m_rectus_lat_r" class="muscle-deep muscle" data-name="Lateral Rectus" d="M 65 90 L 60 80 L 60 100 Z" />
            <!-- Superior Oblique (Trochlear pulley representation) -->
            <path id="m_oblique_sup_l" class="muscle-deep muscle" data-name="Superior Oblique" d="M -30 70 L -20 65 L -15 70 Z" />
            <path id="m_oblique_sup_r" class="muscle-deep muscle" data-name="Superior Oblique" d="M 30 70 L 20 65 L 15 70 Z" />
            <!-- Inferior Oblique -->
            <path id="m_oblique_inf_l" class="muscle-deep muscle" data-name="Inferior Oblique" d="M -60 105 L -50 110 L -40 105 Z" />
            <path id="m_oblique_inf_r" class="muscle-deep muscle" data-name="Inferior Oblique" d="M 60 105 L 50 110 L 40 105 Z" />
        </g>

        <!-- 
             ORBICULARIS OCULI - ORGANIC & DETAILED
             Refined: Separated into Pars Palpebralis (lids) and Pars Orbitalis (surrounding).
        -->
        <g id="m_orb_oculi_group">
             <!-- Left Eye -->
             <!-- Pars Palpebralis (Upper/Lower Lids) -->
             <path id="m_orb_oculi_palp_l" class="muscle-superficial muscle" data-name="Orbicularis Oculi (Palpebral)"
                   d="M -30 90 C -30 85, -55 85, -60 90 C -55 95, -30 95, -30 90 Z" fill-opacity="0.9" />
             <!-- Pars Orbitalis (Surround) - C-shaped fibers -->
             <path id="m_orb_oculi_orb_l" class="muscle-superficial muscle" data-name="Orbicularis Oculi (Orbital)"
                   d="M -25 90 
                      C -25 70, -35 60, -45 58 
                      C -65 58, -78 70, -78 90 
                      C -78 110, -65 122, -45 122 
                      C -35 122, -25 110, -25 90 
                      Z
                      M -32 90
                      C -32 100, -38 112, -45 112 
                      C -55 112, -68 100, -68 90
                      C -68 80, -55 68, -45 68
                      C -38 68, -32 80, -32 90
                      Z" fill-rule="evenodd" opacity="0.9" />

             <!-- Right Eye -->
             <path id="m_orb_oculi_palp_r" class="muscle-superficial muscle" data-name="Orbicularis Oculi (Palpebral)"
                   d="M 30 90 C 30 85, 55 85, 60 90 C 55 95, 30 95, 30 90 Z" fill-opacity="0.9" />
             <path id="m_orb_oculi_orb_r" class="muscle-superficial muscle" data-name="Orbicularis Oculi (Orbital)"
                   d="M 25 90 
                      C 25 70, 35 60, 45 58 
                      C 65 58, 78 70, 78 90 
                      C 78 110, 65 122, 45 122 
                      C 35 122, 25 110, 25 90 
                      Z
                      M 32 90
                      C 32 100, 38 112, 45 112 
                      C 55 112, 68 100, 68 90
                      C 68 80, 55 68, 45 68
                      C 38 68, 32 80, 32 90
                      Z" fill-rule="evenodd" opacity="0.9" />
        </g>

        <!-- NASALIS - REFINED SNOUT SHAPE -->
        <path id="m_nasalis_transverse" class="muscle-superficial muscle" data-name="Nasalis (Transverse)" 
              d="M -5 120 Q 0 115, 5 120 L 18 135 C 10 125, -10 125, -18 135 Z" />
        <path id="m_nasalis_alar_l" class="muscle-superficial muscle" data-name="Nasalis (Alar)" 
              d="M -20 138 C -15 135, -5 138, -5 145 C -10 148, -18 148, -25 142 Z" />
        <path id="m_nasalis_alar_r" class="muscle-superficial muscle" data-name="Nasalis (Alar)" 
              d="M 20 138 C 15 135, 5 138, 5 145 C 10 148, 18 148, 25 142 Z" />

        <!-- TEMPORALIS FASCIA (Covering the muscle) -->
        <path id="f_temporalis_l" class="fascia" data-name="Temporalis Fascia"
              d="M -55 -25 Q -95 -15, -92 115 L -80 120 L -50 -25 Z" opacity="0.4" />
        <path id="f_temporalis_r" class="fascia" data-name="Temporalis Fascia"
              d="M 55 -25 Q 95 -15, 92 115 L 80 120 L 50 -25 Z" opacity="0.4" />

        <!-- LEVATORS (Sheet-like Expansion) -->
        <path id="m_llsan_l" class="muscle-superficial muscle" data-name="Levator Labii Superioris Alaeque Nasi" 
              d="M -12 95 L -25 145 L -20 145 L -8 98 Z" />
        <path id="m_llsan_r" class="muscle-superficial muscle" data-name="Levator Labii Superioris Alaeque Nasi" 
              d="M 12 95 L 25 145 L 20 145 L 8 98 Z" />
        
        <path id="m_lls_l" class="muscle-superficial muscle" data-name="Levator Labii Superioris" 
              d="M -22 100 L -40 150 L -28 150 L -18 100 Z" />
        <path id="m_lls_r" class="muscle-superficial muscle" data-name="Levator Labii Superioris" 
              d="M 22 100 L 40 150 L 28 150 L 18 100 Z" />

        <!-- ZYGOMATICUS (Confluent Sheets) -->
        <path id="m_zyg_minor_l" class="muscle-superficial muscle" data-name="Zygomaticus Minor" 
              d="M -40 108 L -50 152 L -38 152 L -35 108 Z" />
        <path id="m_zyg_minor_r" class="muscle-superficial muscle" data-name="Zygomaticus Minor" 
              d="M 40 108 L 50 152 L 38 152 L 35 108 Z" />

        <path id="m_zyg_major_l" class="muscle-superficial muscle" data-name="Zygomaticus Major" 
              d="M -60 110 C -60 110, -55 130, -52 160 L -45 158 C -48 130, -52 110, -52 110 Z" />
        <path id="m_zyg_major_r" class="muscle-superficial muscle" data-name="Zygomaticus Major" 
              d="M 60 110 C 60 110, 55 130, 52 160 L 45 158 C 48 130, 52 110, 52 110 Z" />

        <path id="m_lao_l" class="muscle-deep muscle" data-name="Levator Anguli Oris" 
              d="M -35 115 L -45 160 L -40 160 L -32 115 Z" opacity="0.6" />
        <path id="m_lao_r" class="muscle-deep muscle" data-name="Levator Anguli Oris" 
              d="M 35 115 L 45 160 L 40 160 L 32 115 Z" opacity="0.6" />

        <path id="m_risorius_l" class="muscle-superficial muscle" data-name="Risorius" 
              d="M -75 168 L -55 166 L -55 170 Z" />
        <path id="m_risorius_r" class="muscle-superficial muscle" data-name="Risorius" 
              d="M 75 168 L 55 166 L 55 170 Z" />

        <path id="m_depressor_septi" class="muscle-deep muscle" data-name="Depressor Septi Nasi" 
            d="M -5 145 L -8 155 Q 0 160, 8 155 L 5 145 Z" opacity="0.7" />

        <!-- 
             ORBICULARIS ORIS - COMPLEX
             Refined: Showing the interlacing nature at the modulus. 
             Simplified here to four distinct quadrants/arcs.
        -->
        <g id="m_orb_oris_group">
            <path id="m_orb_oris" class="muscle-superficial muscle" data-name="Orbicularis Oris" 
                  d="M -30 168 
                     C -30 158, 30 158, 30 168
                     C 30 178, -30 178, -30 168
                     Z
                     M -20 168
                     C -20 172, 20 172, 20 168
                     C 20 164, -20 164, -20 168
                     Z" fill-rule="evenodd" />
        </g>

        <!-- DEPRESSORS (Wide Mandibular Coverage) -->
        <path id="m_dao_l" class="muscle-superficial muscle" data-name="Depressor Anguli Oris" 
              d="M -45 165 L -62 205 L -35 205 Z" />
        <path id="m_dao_r" class="muscle-superficial muscle" data-name="Depressor Anguli Oris" 
              d="M 45 165 L 62 205 L 35 205 Z" />
        
        <path id="m_dli_l" class="muscle-superficial muscle" data-name="Depressor Labii Inferioris" 
              d="M -30 172 L -38 205 L -10 205 L -10 178 Z" />
        <path id="m_dli_r" class="muscle-superficial muscle" data-name="Depressor Labii Inferioris" 
              d="M 30 172 L 38 205 L 10 205 L 10 178 Z" />

        <path id="m_mentalis_l" class="muscle-superficial muscle" data-name="Mentalis" 
              d="M -2 185 C -15 195, -25 215, -12 225 L 0 225 L 0 185 Z" />
        <path id="m_mentalis_r" class="muscle-superficial muscle" data-name="Mentalis" 
              d="M 2 185 C 15 195, 25 215, 12 225 L 0 225 L 0 185 Z" />
              
        <!-- Transverse Mentis (Chin Sling) -->
        <path id="m_transverse_mentis" class="muscle-superficial muscle" data-name="Transverse Mentis" 
              d="M -15 215 Q 0 220, 15 215 L 15 220 Q 0 225, -15 220 Z" opacity="0.6" />


        <!-- 
             MASSETER - POWERFUL & FIBROUS
             Refined: Strong rectangular shape with vertical fiber indication.
        -->
        <g id="m_masseter_group">
            <path id="m_masseter_l" class="muscle-superficial muscle" data-name="Masseter" 
                  d="M -58 125 
                     L -80 130 
                     Q -84 160, -75 190 
                     L -52 185 
                     Q -48 155, -58 125 Z" />
            <!-- Fiber Lines -->
            <path d="M -60 130 L -55 180 M -68 132 L -65 185 M -75 135 L -72 188" 
                  stroke="black" stroke-width="0.5" opacity="0.2" fill="none" />
                  
            <path id="m_masseter_r" class="muscle-superficial muscle" data-name="Masseter" 
                  d="M 58 125 
                     L 80 130 
                     Q 84 160, 75 190 
                     L 52 185 
                     Q 48 155, 58 125 Z" />
            <!-- Fiber Lines -->
            <path d="M 60 130 L 55 180 M 68 132 L 65 185 M 75 135 L 72 188" 
                  stroke="black" stroke-width="0.5" opacity="0.2" fill="none" />
        </g>


        <!-- 
            PTERYGOIDS (Deep Mastication)
            Lateral: Horizontal, TMJ stabilizer.
            Medial: Vertical, mirrors Masseter deeply.
        -->

        <!-- 
            BONE OVERLAYS (Layering Correction)
            These duplicates of the Zygomatic bone sit ON TOP of Temporalis/Pterygoids
            to create the illusion of depth (muscles passing behind/under).
        -->

        <!-- 
            SUPRAHYOID MUSCLES (Floor of Mouth)
            Digastric, Stylohyoid, Mylohyoid, Geniohyoid.
        -->
        <g id="muscles_suprahyoid" class="muscle-deep" opacity="0.9">
             <path id="m_digastric_ant_l" class="muscle-deep muscle" data-name="Digastric (Anterior)" d="M -10 220 L -20 190 L -15 190 Z" />
             <path id="m_digastric_ant_r" class="muscle-deep muscle" data-name="Digastric (Anterior)" d="M 10 220 L 20 190 L 15 190 Z" />
             
             <path id="m_digastric_post_l" class="muscle-deep muscle" data-name="Digastric (Posterior)" d="M -10 220 L -60 145 L -55 150 Z" />
             <path id="m_digastric_post_r" class="muscle-deep muscle" data-name="Digastric (Posterior)" d="M 10 220 L 60 145 L 55 150 Z" />
             
             <path id="m_stylohyoid_l" class="muscle-deep muscle" data-name="Stylohyoid" d="M -12 218 L -55 145 L -50 148 L -10 215 Z" opacity="0.8" />
             <path id="m_stylohyoid_r" class="muscle-deep muscle" data-name="Stylohyoid" d="M 12 218 L 55 145 L 50 148 L 10 215 Z" opacity="0.8" />
             
             <path id="m_mylohyoid_l" class="muscle-deep muscle" data-name="Mylohyoid" d="M -5 215 L -35 200 L -40 190 L -5 210 Z" opacity="0.7" />
             <path id="m_mylohyoid_r" class="muscle-deep muscle" data-name="Mylohyoid" d="M 5 215 L 35 200 L 40 190 L 5 210 Z" opacity="0.7" />
             
             <path id="m_geniohyoid_l" class="muscle-deep muscle" data-name="Geniohyoid" d="M -2 215 L -2 200 L -5 200 L -5 215 Z" />
             <path id="m_geniohyoid_r" class="muscle-deep muscle" data-name="Geniohyoid" d="M 2 215 L 2 200 L 5 200 L 5 215 Z" />
        </g>
        
        <!-- LARYNGEAL & PHARYNGEAL INTRINSICS -->
        <g id="muscles_pharynx_larynx" opacity="0.6">
            <path id="m_cricothyroid_l" class="muscle-deep muscle" data-name="Cricothyroid" d="M -5 250 L -10 260 L -5 260 Z" />
            <path id="m_cricothyroid_r" class="muscle-deep muscle" data-name="Cricothyroid" d="M 5 250 L 10 260 L 5 260 Z" />
            
            <path id="m_pharynx_const_inf_l" class="muscle-deep muscle" data-name="Inf. Pharyngeal Constrictor" d="M -15 250 Q -25 250, -30 240 L -15 230 Z" />
            <path id="m_pharynx_const_inf_r" class="muscle-deep muscle" data-name="Inf. Pharyngeal Constrictor" d="M 15 250 Q 25 250, 30 240 L 15 230 Z" />
        </g>

        <!-- 
            INFRAHYOID (STRAP) MUSCLES
            Between Hyoid/Thyroid and Sternum/Scapula.
        -->
        <g id="muscles_infrahyoid" class="muscle-deep">
            <!-- Sternohyoid: Medial, vertical -->
            <path id="m_sternohyoid_l" d="M -5 220 L -5 320 L -12 320 L -12 220 Z" data-name="Sternohyoid" />
            <path id="m_sternohyoid_r" d="M 5 220 L 5 320 L 12 320 L 12 220 Z" data-name="Sternohyoid" />
            
            <!-- Omohyoid: Lateral, two bellies (Simplified to superior projection here) -->
            <path id="m_omohyoid_l" d="M -15 225 L -35 280 L -30 282 L -12 225 Z" data-name="Omohyoid" />
            <path id="m_omohyoid_r" d="M 15 225 L 35 280 L 30 282 L 12 225 Z" data-name="Omohyoid" />
            
            <!-- Sternothyroid: Deeper, shorter -->
            <path id="m_sternothyroid_l" d="M -15 260 L -15 320 L -20 320 L -22 260 Z" opacity="0.6" data-name="Sternothyroid" />
            <path id="m_sternothyroid_r" d="M 15 260 L 15 320 L 20 320 L 22 260 Z" opacity="0.6" data-name="Sternothyroid" />
            
            <!-- Thyrohyoid: Superior continuation -->
            <path id="m_thyrohyoid_l" d="M -15 225 L -20 250 L -15 250 L -12 225 Z" opacity="0.6" data-name="Thyrohyoid" />
            <path id="m_thyrohyoid_r" d="M 15 225 L 20 250 L 15 250 L 12 225 Z" opacity="0.6" data-name="Thyrohyoid" />
        </g>

        <!-- STERNOCLEIDOMASTOID (SCM) -->
        <path id="m_scm_sternal_l" class="muscle-superficial muscle" data-name="SCM (Sternal Head)" d="M -85 145 Q -75 220, -15 335 L -5 330 Q -60 220, -85 145 Z" />
        <path id="m_scm_clav_l" class="muscle-superficial muscle" data-name="SCM (Clavicular Head)" d="M -80 145 Q -85 220, -70 330 L -40 330 Q -65 220, -80 145 Z" />
        <path id="m_scm_sternal_r" class="muscle-superficial muscle" data-name="SCM (Sternal Head)" d="M 85 145 Q 75 220, 15 335 L 5 330 Q 60 220, 85 145 Z" />
        <path id="m_scm_clav_r" class="muscle-superficial muscle" data-name="SCM (Clavicular Head)" d="M 80 145 Q 85 220, 70 330 L 40 330 Q 65 220, 80 145 Z" />

        <!-- 
            DEEP LATERAL NECK (Scalenes & Levator)
            Visible in posterior triangle.
        -->
        <g id="muscles_lateral_neck" class="muscle-deep" opacity="0.8">
            <!-- Scalene Anterior -->
            <path id="m_scalene_ant_l" d="M -25 220 L -45 310 L -35 310 L -18 220 Z" data-name="Scalene Anterior" />
            <path id="m_scalene_ant_r" d="M 25 220 L 45 310 L 35 310 L 18 220 Z" data-name="Scalene Anterior" />
            <!-- Scalene Middle -->
            <path id="m_scalene_mid_l" d="M -30 210 L -60 310 L -50 310 L -25 210 Z" data-name="Scalene Middle" />
            <path id="m_scalene_mid_r" d="M 30 210 L 60 310 L 50 310 L 25 210 Z" data-name="Scalene Middle" />
            <!-- Scalene Posterior (Deeper/Posterior) -->
            <path id="m_scalene_post_l" d="M -35 210 L -55 250 L -40 210 Z" data-name="Scalene Posterior" />
            <path id="m_scalene_post_r" d="M 35 210 L 55 250 L 40 210 Z" data-name="Scalene Posterior" />
            
            <!-- Levator Scapulae -->
            <path id="m_lev_scap_l" d="M -40 180 L -70 250 L -60 250 L -35 180 Z" data-name="Levator Scapulae" />
            <path id="m_lev_scap_r" d="M 40 180 L 70 250 L 60 250 L 35 180 Z" data-name="Levator Scapulae" />
            
            <!-- Splenius Capitis (Bandage muscle) -->
            <path id="m_splenius_cap_l" d="M -20 150 L -75 220 L -65 230 L -10 160 Z" data-name="Splenius Capitis" />
            <path id="m_splenius_cap_r" d="M 20 150 L 75 220 L 65 230 L 10 160 Z" data-name="Splenius Capitis" />
        </g>

        <path id="m_platysma_l" class="muscle-superficial muscle" data-name="Platysma" d="M -45 180 C -60 220, -110 320, -120 370 L -30 370 C -25 320, -25 220, -35 180 Z" opacity="0.4" />
        <path id="m_platysma_r" class="muscle-superficial muscle" data-name="Platysma" d="M 45 180 C 60 220, 110 320, 120 370 L 30 370 C 25 320, 25 220, 35 180 Z" opacity="0.4" />

    </g>
`;
