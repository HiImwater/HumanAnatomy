export const lowerLimbsSkinDerivativeSVG = `
    <g id="skin_lower_limbs_derivative" filter="url(#skin_gooey_filter)">
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
        <!-- Skin Fillers (Thigh Gap Fix) -->
        <path d="M -120 1100 L -120 1500" stroke="#e0ac69" stroke-width="120" fill="none" class="skin-base-deriv" />
        <path d="M -70 1250 L -70 1500" stroke="#e0ac69" stroke-width="100" fill="none" class="skin-base-deriv" />
        
        <path d="M 120 1100 L 120 1500" stroke="#e0ac69" stroke-width="120" fill="none" class="skin-base-deriv" />
        <path d="M 70 1250 L 70 1500" stroke="#e0ac69" stroke-width="100" fill="none" class="skin-base-deriv" />

        <!-- Femur (Greater Trochanter) -->
        <use href="#bone_femur_left" class="skin-base-deriv" />
        <use href="#bone_femur_right" class="skin-base-deriv" />
        
        <!-- Knees -->
        <use href="#bone_patella_left" class="skin-base-deriv" />
        <use href="#bone_patella_right" class="skin-base-deriv" />
        
        <!-- Lower Leg Bones (Shin/Calf) -->
        <use href="#bone_tibia_left" class="skin-base-deriv" />
        <use href="#bone_tibia_right" class="skin-base-deriv" />
        <use href="#bone_fibula_left" class="skin-base-deriv" />
        <use href="#bone_fibula_right" class="skin-base-deriv" />

        <!-- LEFT LEG MUSCLES -->
        <!-- Hip/Glute -->
        <use href="#m_glute_max_l" class="skin-base-deriv" />
        <use href="#m_glute_med_l" class="skin-base-deriv" />
        <use href="#m_tfl_l" class="skin-base-deriv" />

        <!-- Thigh -->
        <use href="#m_sartorius_l" class="skin-base-deriv" />
        <use href="#m_rectus_fem_l" class="skin-base-deriv" />
        <use href="#m_vast_lat_l" class="skin-base-deriv" />
        <use href="#m_vast_med_l" class="skin-base-deriv" />
        <use href="#m_add_long_l" class="skin-base-deriv" />
        <use href="#m_gracilis_l" class="skin-base-deriv" />
        
        <use href="#m_biceps_fem_long_l" class="skin-base-deriv" />
        <use href="#m_semitendinosus_l" class="skin-base-deriv" />

        <!-- Lower Leg -->
        <use href="#m_tibialis_ant_l" class="skin-base-deriv" />
        <use href="#m_peroneus_long_l" class="skin-base-deriv" />
        <use href="#m_gastrocnemius_med_l" class="skin-base-deriv" />
        <use href="#m_gastrocnemius_lat_l" class="skin-base-deriv" />
        <use href="#m_soleus_l" class="skin-base-deriv" />

        <!-- RIGHT LEG MUSCLES -->
        <!-- Hip/Glute -->
        <use href="#m_glute_max_r" class="skin-base-deriv" />
        <use href="#m_glute_med_r" class="skin-base-deriv" />
        <use href="#m_tfl_r" class="skin-base-deriv" />

        <!-- Thigh -->
        <use href="#m_sartorius_r" class="skin-base-deriv" />
        <use href="#m_rectus_fem_r" class="skin-base-deriv" />
        <use href="#m_vast_lat_r" class="skin-base-deriv" />
        <use href="#m_vast_med_r" class="skin-base-deriv" />
        <use href="#m_add_long_r" class="skin-base-deriv" />
        <use href="#m_gracilis_r" class="skin-base-deriv" />
        
        <use href="#m_biceps_fem_long_r" class="skin-base-deriv" />
        <use href="#m_semitendinosus_r" class="skin-base-deriv" />

        <!-- Lower Leg -->
        <use href="#m_tibialis_ant_r" class="skin-base-deriv" />
        <use href="#m_peroneus_long_r" class="skin-base-deriv" />
        <use href="#m_gastrocnemius_med_r" class="skin-base-deriv" />
        <use href="#m_gastrocnemius_lat_r" class="skin-base-deriv" />
        <use href="#m_soleus_r" class="skin-base-deriv" />
    </g>
`;
