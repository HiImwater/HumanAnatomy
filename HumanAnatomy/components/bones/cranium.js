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
    <path id="bone_temporal_left" class="bone" data-name="Left Temporal Bone"
        data-medical-name="Os Temporale Sinister" d="M -70 128
           L -85 125
           C -90 120, -95 110, -95 90
           C -95 80, -90 70, -85 60
           L -80 70
           C -75 90, -75 110, -70 128
           Z
           M -85 110
           C -90 115, -95 115, -92 100 
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
        data-medical-name="Os Temporale Dexter" d="M 70 128
           L 85 125
           C 90 120, 95 110, 95 90
           C 95 80, 90 70, 85 60
           L 80 70
           C 75 90, 75 110, 70 128
           Z
           M 85 110
           C 90 115, 95 115, 92 100
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
    <!-- Right Orbit Part -->
    <path id="bone_sphenoid_orbital_right" class="bone" data-bone-id="bone_sphenoid" data-name="Sphenoid (Right Orbital)"
        data-medical-name="Os Sphenoidale (Ala major dexter)" d="M 25 80
           L 35 75
           L 45 80
           L 40 95
           L 25 90
           Z" />
    <!-- Left Orbit Part -->
    <path id="bone_sphenoid_orbital_left" class="bone" data-bone-id="bone_sphenoid" data-name="Sphenoid (Left Orbital)"
        data-medical-name="Os Sphenoidale (Ala major sinister)" d="M -25 80
           L -35 75
           L -45 80
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
    -->
    <path id="bone_maxilla_left" class="bone" data-name="Left Maxilla"
        data-medical-name="Os Maxilla Sinister" d="M -5 128
           L -25 105
           C -25 100, -30 95, -45 95
           C -55 105, -55 120, -50 140
           C -40 150, -20 155, -5 155
           Z" />

    <path id="bone_maxilla_right" class="bone" data-name="Right Maxilla"
        data-medical-name="Os Maxilla Dexter" d="M 5 128
           L 25 105
           C 25 100, 30 95, 45 95
           C 55 105, 55 120, 50 140
           C 40 150, 20 155, 5 155
           Z" />

    <!--
        Teeth (Maxillary) - Upper
        Positioned in alveolar process of maxilla (Y=145-158)
    -->
    <!-- Central Incisors -->
    <path id="tooth_max_incisor1_left" class="tooth" data-name="Left Upper Central Incisor" d="M -1 158 L -4 158 L -3 147 L -1 147 Z" fill="#fff" />
    <path id="tooth_max_incisor1_right" class="tooth" data-name="Right Upper Central Incisor" d="M 1 158 L 4 158 L 3 147 L 1 147 Z" fill="#fff" />
    <!-- Lateral Incisors -->
    <path id="tooth_max_incisor2_left" class="tooth" data-name="Left Upper Lateral Incisor" d="M -4 158 L -7 157 L -6.5 148 L -4 148 Z" fill="#fff" />
    <path id="tooth_max_incisor2_right" class="tooth" data-name="Right Upper Lateral Incisor" d="M 4 158 L 7 157 L 6.5 148 L 4 148 Z" fill="#fff" />
    <!-- Canines -->
    <path id="tooth_max_canine_left" class="tooth" data-name="Left Upper Canine" d="M -7 157 L -10 156 L -9.5 146 L -7 148 Z" fill="#fff" />
    <path id="tooth_max_canine_right" class="tooth" data-name="Right Upper Canine" d="M 7 157 L 10 156 L 9.5 146 L 7 148 Z" fill="#fff" />
    <!-- Premolars -->
    <path id="tooth_max_pm1_left" class="tooth" data-name="Left Upper Premolar 1" d="M -10 156 L -14 155 L -13.5 147 L -10 148 Z" fill="#fff" />
    <path id="tooth_max_pm1_right" class="tooth" data-name="Right Upper Premolar 1" d="M 10 156 L 14 155 L 13.5 147 L 10 148 Z" fill="#fff" />
    <path id="tooth_max_pm2_left" class="tooth" data-name="Left Upper Premolar 2" d="M -14 155 L -18 154 L -17.5 148 L -14 149 Z" fill="#fff" />
    <path id="tooth_max_pm2_right" class="tooth" data-name="Right Upper Premolar 2" d="M 14 155 L 18 154 L 17.5 148 L 14 149 Z" fill="#fff" />
    <!-- Molars -->
    <path id="tooth_max_m1_left" class="tooth" data-name="Left Upper Molar 1" d="M -18 154 L -23 153 L -22.5 148 L -18 149 Z" fill="#fff" />
    <path id="tooth_max_m1_right" class="tooth" data-name="Right Upper Molar 1" d="M 18 154 L 23 153 L 22.5 148 L 18 149 Z" fill="#fff" />
    <path id="tooth_max_m2_left" class="tooth" data-name="Left Upper Molar 2" d="M -23 153 L -28 152 L -27.5 148 L -23 149 Z" fill="#fff" />
    <path id="tooth_max_m2_right" class="tooth" data-name="Right Upper Molar 2" d="M 23 153 L 28 152 L 27.5 148 L 23 149 Z" fill="#fff" />
    <path id="tooth_max_m3_left" class="tooth" data-name="Left Upper Molar 3 (Wisdom)" d="M -28 152 L -33 151 L -32.5 148 L -28 149 Z" fill="#fff" />
    <path id="tooth_max_m3_right" class="tooth" data-name="Right Upper Molar 3 (Wisdom)" d="M 28 152 L 33 151 L 32.5 148 L 28 149 Z" fill="#fff" />

    <!-- 
        Zygomatic Bones (Os Zygomaticum) - Cheekbones
    -->
    <path id="bone_zygomatic_left" class="bone" data-name="Left Zygomatic Bone"
        data-medical-name="Os Zygomaticum Sinister" d="M -45 95
           L -55 85
           L -75 90
           C -80 100, -80 115, -70 120
           L -50 115
           Z" />

    <path id="bone_zygomatic_right" class="bone" data-name="Right Zygomatic Bone"
        data-medical-name="Os Zygomaticum Dexter" d="M 45 95
           L 55 85
           L 75 90
           C 80 100, 80 115, 70 120
           L 50 115
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
        Refined with Condylar and Coronoid processes.
    -->
    <path id="bone_mandible" class="bone" data-name="Mandible" data-medical-name="Mandibula" 
        d="M -55 130
           C -58 135, -58 138, -55 142
           L -50 150
           L -50 170
           C -50 185, -45 195, -30 200
           C -10 208, 10 208, 30 200
           C 45 195, 50 185, 50 170
           L 50 150
           L 55 142
           C 58 138, 58 135, 55 130
           L 48 135
           C 45 138, 42 138, 40 135
           L 40 140
           L 38 155
           C 35 170, 20 178, 0 178
           C -20 178, -35 170, -38 155
           L -40 140
           L -40 135
           C -42 138, -45 138, -48 135
           L -55 130
           Z" />

    <!--
        Teeth (Mandibular) - Lower
        Positioned in alveolar process of mandible (Y=158-175)
    -->
    <g id="teeth_lower">
        <!-- Central Incisors -->
        <path id="tooth_mand_incisor1_left" class="tooth" data-name="Left Lower Central Incisor" d="M -1 160 L -4 160 L -3.5 170 L -1 170 Z" />
        <path id="tooth_mand_incisor1_right" class="tooth" data-name="Right Lower Central Incisor" d="M 1 160 L 4 160 L 3.5 170 L 1 170 Z" />
        <!-- Lateral Incisors -->
        <path id="tooth_mand_incisor2_left" class="tooth" data-name="Left Lower Lateral Incisor" d="M -4 161 L -7 162 L -6 170 L -4 170 Z" />
        <path id="tooth_mand_incisor2_right" class="tooth" data-name="Right Lower Lateral Incisor" d="M 4 161 L 7 162 L 6 170 L 4 170 Z" />
        <!-- Canines -->
        <path id="tooth_mand_canine_left" class="tooth" data-name="Left Lower Canine" d="M -7 162 L -10 164 L -9 172 L -7 170 Z" />
        <path id="tooth_mand_canine_right" class="tooth" data-name="Right Lower Canine" d="M 7 162 L 10 164 L 9 172 L 7 170 Z" />
        <!-- Premolars -->
        <path id="tooth_mand_pm1_left" class="tooth" data-name="Left Lower Premolar 1" d="M -10 164 L -14 167 L -13 172 L -10 171 Z" />
        <path id="tooth_mand_pm1_right" class="tooth" data-name="Right Lower Premolar 1" d="M 10 164 L 14 167 L 13 172 L 10 171 Z" />
        <path id="tooth_mand_pm2_left" class="tooth" data-name="Left Lower Premolar 2" d="M -14 167 L -18 170 L -17 172 L -14 171 Z" />
        <path id="tooth_mand_pm2_right" class="tooth" data-name="Right Lower Premolar 2" d="M 14 167 L 18 170 L 17 172 L 14 171 Z" />
        <!-- Molars -->
        <path id="tooth_mand_m1_left" class="tooth" data-name="Left Lower Molar 1" d="M -18 170 L -23 173 L -21 175 L -18 173 Z" />
        <path id="tooth_mand_m1_right" class="tooth" data-name="Right Lower Molar 1" d="M 18 170 L 23 173 L 21 175 L 18 173 Z" />
        <path id="tooth_mand_m2_left" class="tooth" data-name="Left Lower Molar 2" d="M -23 173 L -28 176 L -26 178 L -23 176 Z" />
        <path id="tooth_mand_m2_right" class="tooth" data-name="Right Lower Molar 2" d="M 23 173 L 28 176 L 26 178 L 23 176 Z" />
        <path id="tooth_mand_m3_left" class="tooth" data-name="Left Lower Molar 3" d="M -28 176 L -32 179 L -31 180 L -28 178 Z" />
        <path id="tooth_mand_m3_right" class="tooth" data-name="Right Lower Molar 3" d="M 28 176 L 32 179 L 31 180 L 28 178 Z" />
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
