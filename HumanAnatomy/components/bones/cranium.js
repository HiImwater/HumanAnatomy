export const craniumSVG = `
    <!-- 
        Frontal Bone (Os Frontale)
    -->
    <path id="bone_frontal" class="bone" data-name="Frontal Bone" data-medical-name="Os Frontale" d="M 0 15 
           C 25 15, 60 30, 75 70 
           C 78 85, 76 95, 78 105 
           C 82 115, 85 120, 85 125 
           L 70 128 
           C 60 110, 40 115, 30 118 
           C 20 122, 10 128, 5 128 
           L 0 135 
           L -5 128 
           C -10 128, -20 122, -30 118
           C -40 115, -60 110, -70 128
           L -85 125
           C -85 120, -82 115, -78 105
           C -76 95, -78 85, -75 70
           C -60 30, -25 15, 0 15 
           Z" />

    <!-- 
        Parietal Bones (Os parietale)
    -->
    <path id="bone_parietal_left" class="bone" data-name="Left Parietal Bone"
        data-medical-name="Os Parietale Sinister" d="M 0 15
           C -20 15, -50 25, -60 35
           C -75 50, -82 80, -85 100
           C -85 60, -80 30, -70 10
           C -50 -20, -10 -20, 0 -20
           Z" />

    <path id="bone_parietal_right" class="bone" data-name="Right Parietal Bone"
        data-medical-name="Os Parietale Dexter" d="M 0 15
           C 20 15, 50 25, 60 35
           C 75 50, 82 80, 85 100
           C 85 60, 80 30, 70 10
           C 50 -20, 10 -20, 0 -20
           Z" />

    <!-- 
        Occipital Bone (Os Occipitale)
    -->
    <path id="bone_occipital" class="bone" data-name="Occipital Bone" data-medical-name="Os Occipitale" d="M -50 130
           C -60 140, -50 160, 0 160
           C 50 160, 60 140, 50 130
           C 40 145, -40 145, -50 130
           Z" />

    <!-- 
        Temporal Bones (Os Temporale)
    -->
    <!-- 
        Temporal Bones (Os Temporale)
        Refined: Includes Mastoid Process (Y~140) and Zygomatic Process.
    -->
    <path id="bone_temporal_left" class="bone" data-name="Left Temporal Bone"
        data-medical-name="Os Temporale Sinister" 
        d="M -70 120
           C -75 125, -80 130, -82 135  
           Q -85 145, -88 145           
           Q -92 145, -94 135           
           L -92 130                    
           C -96 110, -94 90, -82 70    
           Q -85 85, -78 90             
           L -70 95
           C -75 105, -75 112, -70 120  
           Z
           M -82 110
           C -85 115, -89 115, -85 105 
           Z" />

    <!-- 
        Auditory Ossicles (Left)
        Located within the petrous part of the temporal bone.
    -->
    <g id="group_ossicles_left">
        <path id="bone_malleus_left" class="bone" data-name="Left Malleus" data-medical-name="Malleus Sinister" 
              d="M -92 105 L -90 102 L -94 102 Z" />
        <path id="bone_incus_left" class="bone" data-name="Left Incus" data-medical-name="Incus Sinister" 
              d="M -90 102 L -88 104 L -89 101 Z" />
        <path id="bone_stapes_left" class="bone" data-name="Left Stapes" data-medical-name="Stapes Sinister" 
              d="M -89 101 L -87 101 L -88 100 Z" />
    </g>

    <path id="bone_temporal_right" class="bone" data-name="Right Temporal Bone"
        data-medical-name="Os Temporale Dexter" 
        d="M 70 120
           C 75 125, 80 130, 82 135   
           Q 85 145, 88 145           
           Q 92 145, 94 135           
           L 92 130                   
           C 96 110, 94 90, 82 70     
           Q 85 85, 78 90             
           L 70 95
           C 75 105, 75 112, 70 120   
           Z
           M 82 110
           C 85 115, 89 115, 85 105
           Z" />

    <!-- 
        Auditory Ossicles (Right)
    -->
    <g id="group_ossicles_right">
        <path id="bone_malleus_right" class="bone" data-name="Right Malleus" data-medical-name="Malleus Dexter" 
              d="M 92 105 L 90 102 L 94 102 Z" />
        <path id="bone_incus_right" class="bone" data-name="Right Incus" data-medical-name="Incus Dexter" 
              d="M 90 102 L 88 104 L 89 101 Z" />
        <path id="bone_stapes_right" class="bone" data-name="Right Stapes" data-medical-name="Stapes Dexter" 
              d="M 89 101 L 87 101 L 88 100 Z" />
    </g>

    <!-- 
        Sphenoid Bone (Os Sphenoidale)
    -->
    <!-- Right Orbit Part (Greater Wing) - Refined Pterion -->
    <path id="bone_sphenoid_orbital_right" class="bone" data-bone-id="bone_sphenoid" data-name="Sphenoid (Right Greater Wing)"
        data-medical-name="Os Sphenoidale (Ala major dexter)" d="M 45 80
           L 60 75
           L 65 90
           L 40 95
           L 25 90
           Z" />
    <!-- Left Orbit Part (Greater Wing) -->
    <path id="bone_sphenoid_orbital_left" class="bone" data-bone-id="bone_sphenoid" data-name="Sphenoid (Left Greater Wing)"
        data-medical-name="Os Sphenoidale (Ala major sinister)" d="M -45 80
           L -60 75
           L -65 90
           L -40 95
           L -25 90
           Z" />
    <!-- Center Body -->
    <path id="bone_sphenoid_body" class="bone" data-bone-id="bone_sphenoid" data-name="Sphenoid Body"
        data-medical-name="Os Sphenoidale (Corpus)" d="M -10 90
           L 10 90
           L 5 105
           L -5 105
           Z" />


    <!-- 
        Ethmoid Bone (Os Ethmoidale)
    -->
    <path id="bone_ethmoid_perpendicular" class="bone" data-bone-id="bone_ethmoid" data-name="Ethmoid (Perpendicular Plate)"
        data-medical-name="Os Ethmoidale (Lamina perpendicularis)" d="M 0 85 L 0 110" stroke-width="2" />

    <path id="bone_ethmoid_orbital_left" class="bone" data-bone-id="bone_ethmoid" data-name="Ethmoid (Left Orbital Lamina)"
        data-medical-name="Os Ethmoidale (Lamina orbitalis sinister)" d="M -20 85 L -22 95 L -18 95 Z" />

    <path id="bone_ethmoid_orbital_right" class="bone" data-bone-id="bone_ethmoid" data-name="Ethmoid (Right Orbital Lamina)"
        data-medical-name="Os Ethmoidale (Lamina orbitalis dexter)" d="M 20 85 L 22 95 L 18 95 Z" />

    <!--
        Lacrimal Bones (Os Lacrimale)
    -->
    <path id="bone_lacrimal_left" class="bone" data-name="Left Lacrimal Bone"
        data-medical-name="Os Lacrimale Sinister" d="M -22 95 L -25 95 L -25 105 L -22 105 Z" />
    <path id="bone_lacrimal_right" class="bone" data-name="Right Lacrimal Bone"
        data-medical-name="Os Lacrimale Dexter" d="M 22 95 L 25 95 L 25 105 L 22 105 Z" />


    <!-- 
        Maxillae (Os Maxilla) - Upper Jaw
        Refined: Lowered alveolar process to Y=166.
    -->
    <path id="bone_maxilla_left" class="bone" data-name="Left Maxilla"
        data-medical-name="Os Maxilla Sinister" 
        d="M 0 166 
           L -35 164 
           C -55 162, -65 150, -65 125 
           L -50 115 
           C -45 110, -35 105, -30 110 
           L -5 128 
           L 0 135 
           Z" />

    <path id="bone_maxilla_right" class="bone" data-name="Right Maxilla"
        data-medical-name="Os Maxilla Dexter" 
        d="M 0 166 
           L 35 164 
           C 55 162, 65 150, 65 125 
           L 50 115 
           C 45 110, 35 105, 30 110 
           L 5 128 
           L 0 135 
           Z" />

    <!--
        Teeth (Maxillary) - Upper
        Refined: Organic morphology, parabolic arch.
    -->
    <g id="teeth_upper">
        <!-- Central Incisors: Straight, vertical, with roots -->
        <path id="tooth_max_incisor1_left" class="tooth" data-name="Left Upper Central Incisor" d="M -0.5 166 L -4.5 166 L -4.5 156 Q -4.5 145, -2.5 145 L -0.5 145 Z" />
        <path id="tooth_max_incisor1_right" class="tooth" data-name="Right Upper Central Incisor" d="M 0.5 166 L 4.5 166 L 4.5 156 Q 4.5 145, 2.5 145 L 0.5 145 Z" />
        <!-- Lateral Incisors -->
        <path id="tooth_max_incisor2_left" class="tooth" data-name="Left Upper Lateral Incisor" d="M -5 166 L -8.5 166 L -8.5 156 Q -8.5 146, -6.5 146 L -5 146 Z" />
        <path id="tooth_max_incisor2_right" class="tooth" data-name="Right Upper Lateral Incisor" d="M 5 166 L 8.5 166 L 8.5 156 Q 8.5 146, 6.5 146 L 5 146 Z" />
        <!-- Canines -->
        <path id="tooth_max_canine_left" class="tooth" data-name="Left Upper Canine" d="M -9 166 L -12.5 166 L -12.5 155 L -10.5 144 L -9 155 Z" />
        <path id="tooth_max_canine_right" class="tooth" data-name="Right Upper Canine" d="M 9 166 L 12.5 166 L 12.5 155 L 10.5 144 L 9 155 Z" />
        <!-- Premolars -->
        <path id="tooth_max_pm1_left" class="tooth" data-name="Left Upper Premolar 1" d="M -13 165 L -17 165 L -17 155 L -15 146 L -13 155 Z" />
        <path id="tooth_max_pm1_right" class="tooth" data-name="Right Upper Premolar 1" d="M 13 165 L 17 165 L 17 155 L 15 146 L 13 155 Z" />
        <path id="tooth_max_pm2_left" class="tooth" data-name="Left Upper Premolar 2" d="M -17.5 165 L -21.5 165 L -21.5 155 L -19.5 146 L -17.5 155 Z" />
        <path id="tooth_max_pm2_right" class="tooth" data-name="Right Upper Premolar 2" d="M 17.5 165 L 21.5 165 L 21.5 155 L 19.5 146 L 17.5 155 Z" />
        <!-- Molars -->
        <path id="tooth_max_m1_left" class="tooth" data-name="Left Upper Molar 1" d="M -22 165 L -27 165 L -27 155 L -24.5 146 L -22 155 Z" />
        <path id="tooth_max_m1_right" class="tooth" data-name="Right Upper Molar 1" d="M 22 165 L 27 165 L 27 155 L 24.5 146 L 22 155 Z" />
        <path id="tooth_max_m2_left" class="tooth" data-name="Left Upper Molar 2" d="M -27.5 165 L -32.5 165 L -32.5 155 L -30 146 L -27.5 155 Z" />
        <path id="tooth_max_m2_right" class="tooth" data-name="Right Upper Molar 2" d="M 27.5 165 L 32.5 165 L 32.5 155 L 30 146 L 27.5 155 Z" />
        <path id="tooth_max_m3_left" class="tooth" data-name="Left Upper Molar 3 (Wisdom)" d="M -33 165 L -37.5 165 L -37.5 155 L -35 146 L -33 155 Z" />
        <path id="tooth_max_m3_right" class="tooth" data-name="Right Upper Molar 3 (Wisdom)" d="M 33 165 L 37.5 165 L 37.5 155 L 35 146 L 33 155 Z" />
    </g>

    <!-- 
        Zygomatic Bones (Os Zygomaticum) - Cheekbones
        Refined: Temporal Process meets Temporal Bone (Zygomatic Arch).
    -->
    <path id="bone_zygomatic_left" class="bone" data-name="Left Zygomatic Bone"
        data-medical-name="Os Zygomaticum Sinister" 
        d="M -42 115
           Q -46 95, -48 80
           Q -75 105, -88 115
           Q -92 118, -95 120
           C -95 135, -80 140, -50 135
           Z" />

    <path id="bone_zygomatic_right" class="bone" data-name="Right Zygomatic Bone"
        data-medical-name="Os Zygomaticum Dexter" 
        d="M 42 115
           Q 46 95, 48 80
           Q 75 105, 88 115
           Q 92 118, 95 120
           C 95 135, 80 140, 50 135
           Z" />

    <!-- ... (Internal Nasal Bones) ... -->
    <!-- 
        Nasal Bones (Os Nasale)
        Bridge of the nose.
    -->
    <path id="bone_nasal_left" class="bone" data-name="Left Nasal Bone" data-medical-name="Os Nasale Sinister" 
          d="M -2 128 L -10 128 L -8 115 L -1 115 Z" />
    <path id="bone_nasal_right" class="bone" data-name="Right Nasal Bone" data-medical-name="Os Nasale Dexter" 
          d="M 2 128 L 10 128 L 8 115 L 1 115 Z" />

    <!-- 
        Vomer
        Inferior part of nasal septum.
    -->
    <path id="bone_vomer" class="bone" data-name="Vomer" data-medical-name="Vomer" 
          d="M 0 135 L -2 150 L 2 150 L 0 135 Z" />

    <!-- 
        Inferior Nasal Conchae (Concha Nasalis Inferior)
        Curved bones on lateral nasal wall.
    -->
    <path id="bone_concha_inferior_left" class="bone" data-name="Left Inferior Nasal Concha" data-medical-name="Concha Nasalis Inferior Sinister" 
          d="M -15 140 C -12 140, -10 145, -15 150 C -18 145, -18 142, -15 140 Z" />
    <path id="bone_concha_inferior_right" class="bone" data-name="Right Inferior Nasal Concha" data-medical-name="Concha Nasalis Inferior Dexter" 
          d="M 15 140 C 12 140, 10 145, 15 150 C 18 145, 18 142, 15 140 Z" />

    <!-- 
        Palatine Bones (Os Palatinum)
        Posterior hard palate, often visible through nasal aperture or behind maxilla.
    -->
    <path id="bone_palatine_left" class="bone" data-name="Left Palatine Bone" data-medical-name="Os Palatinum Sinister" 
          d="M -10 152 L -15 152 L -15 155 L -10 155 Z" />
    <path id="bone_palatine_right" class="bone" data-name="Right Palatine Bone" data-medical-name="Os Palatinum Dexter" 
          d="M 10 152 L 15 152 L 15 155 L 10 155 Z" />

    <!-- 
        Mandible (Mandibula) - Lower Jaw
    -->
    <!-- 
        Mandible (Mandibula) - Lower Jaw
        Refined: Flattened occlusal shelf at Y=168.
    -->
    <path id="bone_mandible" class="bone" data-name="Mandible" data-medical-name="Mandibula" 
        d="M -60 120 
           C -65 140, -68 170, -60 185
           C -50 205, -20 220, 0 220
           S 50 205, 60 185
           C 68 170, 65 140, 60 120 
           Q 55 130, 48 135
           L 40 145 
           C 40 168, 30 168, 0 168 
           C -30 168, -40 168, -40 145 
           L -48 135 
           Q -55 130, -60 120
           Z" />

    <!--
        Teeth (Mandibular) - Lower
        Refined: Organic morphology, parabolic arch.
    -->
    <g id="teeth_lower">
        <!-- Central Incisors: Straight occlusal edge at Y=168 -->
        <path id="tooth_mand_incisor1_left" class="tooth" data-name="Left Lower Central Incisor" d="M -0.5 168 L -4.5 168 L -4.5 178 Q -4.5 188, -2.5 188 L -0.5 188 Z" />
        <path id="tooth_mand_incisor1_right" class="tooth" data-name="Right Lower Central Incisor" d="M 0.5 168 L 4.5 168 L 4.5 178 Q 4.5 188, 2.5 188 L 0.5 188 Z" />
        <!-- Lateral Incisors -->
        <path id="tooth_mand_incisor2_left" class="tooth" data-name="Left Lower Lateral Incisor" d="M -5 168 L -8.5 168 L -8.5 178 Q -8.5 188, -6.5 188 L -5 188 Z" />
        <path id="tooth_mand_incisor2_right" class="tooth" data-name="Right Lower Lateral Incisor" d="M 5 168 L 8.5 168 L 8.5 178 Q 8.5 188, 6.5 188 L 5 188 Z" />
        <!-- Canines -->
        <path id="tooth_mand_canine_left" class="tooth" data-name="Left Lower Canine" d="M -9 168 L -12.5 168 L -12.5 178 L -10.5 190 L -9 178 Z" />
        <path id="tooth_mand_canine_right" class="tooth" data-name="Right Lower Canine" d="M 9 168 L 12.5 168 L 12.5 178 L 10.5 190 L 9 178 Z" />
        <!-- Premolars -->
        <path id="tooth_mand_pm1_left" class="tooth" data-name="Left Lower Premolar 1" d="M -13 168 L -17 168 L -17 178 L -15 190 L -13 178 Z" />
        <path id="tooth_mand_pm1_right" class="tooth" data-name="Right Lower Premolar 1" d="M 13 168 L 17 168 L 17 178 L 15 190 L 13 178 Z" />
        <path id="tooth_mand_pm2_left" class="tooth" data-name="Left Lower Premolar 2" d="M -17.5 168 L -21.5 168 L -21.5 178 L -19.5 190 L -17.5 178 Z" />
        <path id="tooth_mand_pm2_right" class="tooth" data-name="Right Lower Premolar 2" d="M 17.5 168 L 21.5 168 L 21.5 178 L 19.5 190 L 17.5 178 Z" />
        <!-- Molars -->
        <path id="tooth_mand_m1_left" class="tooth" data-name="Left Lower Molar 1" d="M -22 168 L -27 168 L -27 178 L -24.5 190 L -22 178 Z" />
        <path id="tooth_mand_m1_right" class="tooth" data-name="Right Lower Molar 1" d="M 22 168 L 27 168 L 27 178 L 24.5 190 L 22 178 Z" />
        <path id="tooth_mand_m2_left" class="tooth" data-name="Left Lower Molar 2" d="M -27.5 168 L -32.5 168 L -32.5 178 L -30 190 L -27.5 178 Z" />
        <path id="tooth_mand_m2_right" class="tooth" data-name="Right Lower Molar 2" d="M 27.5 168 L 32.5 168 L 32.5 178 L 30 190 L 27.5 178 Z" />
        <path id="tooth_mand_m3_left" class="tooth" data-name="Left Lower Molar 3" d="M -29.5 180 L -34.5 183 L -34.5 187 C -34.5 189, -33.5 190, -32 190 L -30.5 190 C -29.5 189, -29.5 188, -29.5 187 Z" />
        <path id="tooth_mand_m3_right" class="tooth" data-name="Right Lower Molar 3" d="M 29.5 180 L 34.5 183 L 34.5 187 C 34.5 189, 33.5 190, 32 190 L 30.5 190 C 29.5 189, 29.5 188, 29.5 187 Z" />
    </g>
    </g>`;

export const hyoidSVG = `
    <!--
    Hyoid Bone (Os Hyoideum)
U - shaped, in neck, supports tongue.
    -->
    <path id="bone_hyoid" class="bone" data-name="Hyoid Bone" data-medical-name="Os Hyoideum"
        d="M -25 220 
             C -35 215, -35 225, -25 230 
             C -10 235, 10 235, 25 230
             C 35 225, 35 215, 25 220 
             C 15 225, -15 225, -25 220 Z" />
`;
