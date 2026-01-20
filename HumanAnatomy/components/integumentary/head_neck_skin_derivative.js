export const headNeckSkinDerivativeSVG = `
    <g id="skin_head_neck_derivative" filter="url(#skin_gooey_filter_detailed)">
        <style>
            .skin-base-deriv {
                fill: url(#skin_base_fair) !important;
                stroke: url(#skin_base_fair) !important;
                stroke-width: 35px;
                stroke-linecap: round;
                stroke-linejoin: round;
            }
            .skin-base-deriv-thin {
                fill: url(#skin_base_fair) !important;
                stroke: url(#skin_base_fair) !important;
                stroke-width: 20px; /* Thinner stroke for detailed face */
                stroke-linecap: round;
                stroke-linejoin: round;
            }
        </style>

        <!-- BONES (Underlying Structure) -->
        <!-- Neck Midline Filler -->
        <path d="M 0 150 L 0 360" stroke="#e0ac69" stroke-width="120" fill="none" class="skin-base-deriv" />
        
        <use href="#bone_frontal" class="skin-base-deriv-thin" />
        <use href="#bone_parietal_left" class="skin-base-deriv-thin" />
        <use href="#bone_parietal_right" class="skin-base-deriv-thin" />
        <use href="#bone_occipital" class="skin-base-deriv-thin" />
        <use href="#bone_temporal_left" class="skin-base-deriv-thin" />
        <use href="#bone_temporal_right" class="skin-base-deriv-thin" />
        
        <use href="#bone_zygomatic_left" class="skin-base-deriv-thin" />
        <use href="#bone_zygomatic_right" class="skin-base-deriv-thin" />
        <use href="#bone_nasal_left" class="skin-base-deriv-thin" />
        <use href="#bone_nasal_right" class="skin-base-deriv-thin" />
        <use href="#bone_mandible" class="skin-base-deriv-thin" />
        <use href="#bone_hyoid" class="skin-base-deriv-thin" />

        <!-- NECK MUSCLES -->
        <use href="#m_scm_sternal_l" class="skin-base-deriv" />
        <use href="#m_scm_clav_l" class="skin-base-deriv" />
        <use href="#m_scm_sternal_r" class="skin-base-deriv" />
        <use href="#m_scm_clav_r" class="skin-base-deriv" />
        
        <use href="#m_platysma_l" class="skin-base-deriv" />
        <use href="#m_platysma_r" class="skin-base-deriv" />

        <!-- FACE / SCALP MUSCLES -->
        
        <!-- Scalp/Forehead -->
        <use href="#m_frontalis_l" class="skin-base-deriv-thin" />
        <use href="#m_frontalis_r" class="skin-base-deriv-thin" />
        <use href="#m_occipitalis_l" class="skin-base-deriv-thin" />
        <use href="#m_occipitalis_r" class="skin-base-deriv-thin" />
        <use href="#m_temporalis_l" class="skin-base-deriv-thin" />
        <use href="#m_temporalis_r" class="skin-base-deriv-thin" />

        <!-- Eyes -->
        <use href="#m_orb_oculi_orb_l" class="skin-base-deriv-thin" />
        <use href="#m_orb_oculi_palp_l" class="skin-base-deriv-thin" />
        <use href="#m_orb_oculi_orb_r" class="skin-base-deriv-thin" />
        <use href="#m_orb_oculi_palp_r" class="skin-base-deriv-thin" />

        <!-- Cheeks / Midface -->
        <use href="#m_zyg_major_l" class="skin-base-deriv-thin" />
        <use href="#m_zyg_minor_l" class="skin-base-deriv-thin" />
        <use href="#m_zyg_major_r" class="skin-base-deriv-thin" />
        <use href="#m_zyg_minor_r" class="skin-base-deriv-thin" />
        <use href="#m_masseter_l" class="skin-base-deriv-thin" />
        <use href="#m_masseter_r" class="skin-base-deriv-thin" />
        <use href="#m_risorius_l" class="skin-base-deriv-thin" />
        <use href="#m_risorius_r" class="skin-base-deriv-thin" />

        <!-- Nose -->
        <use href="#m_procerus" class="skin-base-deriv-thin" />
        <use href="#m_nasalis_transverse" class="skin-base-deriv-thin" />
        <use href="#m_nasalis_alar_l" class="skin-base-deriv-thin" />
        <use href="#m_nasalis_alar_r" class="skin-base-deriv-thin" />

        <!-- Mouth / Chin -->
        <use href="#m_orb_oris" class="skin-base-deriv-thin" />
        <use href="#m_dao_l" class="skin-base-deriv-thin" />
        <use href="#m_dao_r" class="skin-base-deriv-thin" />
        <use href="#m_dli_l" class="skin-base-deriv-thin" />
        <use href="#m_dli_r" class="skin-base-deriv-thin" />
        <use href="#m_mentalis_l" class="skin-base-deriv-thin" />
        <use href="#m_mentalis_r" class="skin-base-deriv-thin" />
        
    </g>
`;
