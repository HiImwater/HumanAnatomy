export const upperLimbsSkinDerivativeSVG = `
    <g id="skin_upper_limbs_derivative" filter="url(#skin_gooey_filter)">
        <style>
            .skin-base-deriv {
                fill: url(#skin_base_fair) !important;
                stroke: url(#skin_base_fair) !important;
                stroke-width: 35px;
                stroke-linecap: round;
                stroke-linejoin: round;
            }
        </style>

        <!-- BONES -->
        <!-- Scapula (Acromion/Spine) -->
        <use href="#bone_scapula_left" class="skin-base-deriv" />
        <use href="#bone_scapula_right" class="skin-base-deriv" />
        
        <!-- Elbow (Olecranon) -->
        <use href="#bone_ulna_left" class="skin-base-deriv" />
        <use href="#bone_ulna_right" class="skin-base-deriv" />
        
        <!-- Wrist (Radius Styloid) -->
        <use href="#bone_radius_left" class="skin-base-deriv" />
        <use href="#bone_radius_right" class="skin-base-deriv" />

        <!-- LEFT ARM MUSCLES -->
        <!-- Deltoid -->
        <use href="#m_deltoid_ant_l" class="skin-base-deriv" />
        <use href="#m_deltoid_lat_l" class="skin-base-deriv" />
        <use href="#m_deltoid_post_l" class="skin-base-deriv" />

        <!-- Upper Arm -->
        <use href="#m_biceps_l" class="skin-base-deriv" />
        <use href="#m_triceps_long_l" class="skin-base-deriv" />
        <use href="#m_triceps_lat_l" class="skin-base-deriv" />
        <use href="#m_triceps_med_l" class="skin-base-deriv" />

        <!-- Forearm -->
        <use href="#m_brachioradialis_l" class="skin-base-deriv" />
        <use href="#m_ext_digitorum_l" class="skin-base-deriv" />
        <use href="#m_fcr_l" class="skin-base-deriv" />
        <use href="#m_palmaris_l" class="skin-base-deriv" />
        <use href="#m_fcu_l" class="skin-base-deriv" />

        <!-- RIGHT ARM MUSCLES -->
        <!-- Deltoid -->
        <use href="#m_deltoid_ant_r" class="skin-base-deriv" />
        <use href="#m_deltoid_lat_r" class="skin-base-deriv" />
        <use href="#m_deltoid_post_r" class="skin-base-deriv" />

        <!-- Upper Arm -->
        <use href="#m_biceps_r" class="skin-base-deriv" />
        <use href="#m_triceps_long_r" class="skin-base-deriv" />
        <use href="#m_triceps_lat_r" class="skin-base-deriv" />
        <use href="#m_triceps_med_r" class="skin-base-deriv" />

        <!-- Forearm -->
        <use href="#m_brachioradialis_r" class="skin-base-deriv" />
        <use href="#m_ext_digitorum_r" class="skin-base-deriv" />
        <use href="#m_fcr_r" class="skin-base-deriv" />
        <use href="#m_palmaris_r" class="skin-base-deriv" />
        <use href="#m_fcu_r" class="skin-base-deriv" />
    </g>
`;
