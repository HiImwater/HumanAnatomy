export const torsoSkinDerivativeSVG = `
    <g id="skin_torso_derivative" filter="url(#skin_gooey_filter)">
        <style>
            .skin-base-deriv {
                fill: url(#skin_base_fair) !important;
                stroke: url(#skin_base_fair) !important;
                stroke-width: 35px; /* Expands the shape to form skin & sub-q fat */
                stroke-linecap: round;
                stroke-linejoin: round;
            }
        </style>
        
        <!-- BONES (Landmarks) -->
        <!-- Midline Filler (Sternum/Linea Alba) -->
        <path d="M 0 340 L 0 1000" stroke="white" stroke-width="140" fill="none" class="skin-base-deriv" />
        
        <use href="#bone_clavicle_left" class="skin-base-deriv" />
        <use href="#bone_clavicle_right" class="skin-base-deriv" />
        <use href="#bone_sternum_manubrium" class="skin-base-deriv" />
        <use href="#bone_sternum_body" class="skin-base-deriv" />
        <use href="#bone_sternum_xiphoid" class="skin-base-deriv" />
        
        <!-- Rib Cage (Superficial Anterior) -->
        <use href="#bone_rib_left_01" class="skin-base-deriv" />
        <use href="#bone_rib_right_01" class="skin-base-deriv" />
        <use href="#bone_rib_left_05" class="skin-base-deriv" />
        <use href="#bone_rib_right_05" class="skin-base-deriv" />
        <use href="#bone_rib_left_07" class="skin-base-deriv" />
        <use href="#bone_rib_right_07" class="skin-base-deriv" />
        <use href="#bone_rib_left_10" class="skin-base-deriv" />
        <use href="#bone_rib_right_10" class="skin-base-deriv" />
        
        <!-- Pelvis (Iliac Crest) -->
        <use href="#bone_hip_left" class="skin-base-deriv" />
        <use href="#bone_hip_right" class="skin-base-deriv" />

        <!-- DERIVATIVE SKINNING (Muscles) -->
        <use href="#m_pec_major_clav_l" class="skin-base-deriv" />
        <use href="#m_pec_major_stern_l" class="skin-base-deriv" />
        <use href="#m_pec_major_abd_l" class="skin-base-deriv" />
        <use href="#m_pec_major_clav_r" class="skin-base-deriv" />
        <use href="#m_pec_major_stern_r" class="skin-base-deriv" />
        <use href="#m_pec_major_abd_r" class="skin-base-deriv" />
        
        <use href="#m_rectus_abd_l" class="skin-base-deriv" />
        <use href="#m_rectus_abd_r" class="skin-base-deriv" />
        
        <use href="#m_ext_oblique_l" class="skin-base-deriv" />
        <use href="#m_ext_oblique_r" class="skin-base-deriv" />
        
        <use href="#m_serratus_ant_l" class="skin-base-deriv" />
        <use href="#m_serratus_ant_r" class="skin-base-deriv" />
        
        <use href="#m_lat_dorsi_l" class="skin-base-deriv" />
        <use href="#m_lat_dorsi_r" class="skin-base-deriv" />
        
        <use href="#m_trapezius_sup_l" class="skin-base-deriv" />
        <use href="#m_trapezius_sup_r" class="skin-base-deriv" />
    </g>
`;
