
export const feetMusclesSVG = `
    <g id="muscles_feet" class="muscle-group">
        <!-- 
            PLANTAR FASCIA (Plantar Aponeurosis)
            Dense connective tissue supporting the arch.
        -->
        <path id="f_plantar_fascia_l" class="fascia" data-name="Plantar Fascia"
            d="M -115 1860 L -130 1960 L -70 1960 Z" opacity="0.4" />
        <path id="f_plantar_fascia_r" class="fascia" data-name="Plantar Fascia"
            d="M 115 1860 L 130 1960 L 70 1960 Z" opacity="0.4" />

        <!-- FOOT INTRINSICS (LEFT) -->
        <!-- DORSAL COMPARTMENT -->
        <g id="foot_dorsal_l">
            <path id="m_ext_retinaculum_l" class="fascia muscle" data-name="Extensor Retinaculum"
                d="M -130 1720 L -80 1700 L -75 1740 L -120 1760 Z" opacity="0.6" fill="#ddd" />
                
            <!-- Segmented Extensor Digitorum Brevis (Slips) -->
            <g id="foot_edb_slips_l" opacity="0.8">
                <path id="m_ext_dig_brevis_l_2" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 2)" d="M -115 1760 L -120 1860 L -130 1860 Z" />
                <path id="m_ext_dig_brevis_l_3" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 3)" d="M -115 1760 L -110 1860 L -120 1860 Z" />
                <path id="m_ext_dig_brevis_l_4" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 4)" d="M -115 1760 L -100 1860 L -110 1860 Z" />
                <path id="m_ext_dig_brevis_l_5" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 5)" d="M -115 1760 L -90 1860 L -100 1860 Z" />
            </g>

            <path id="m_ext_hal_brevis_l" class="muscle-deep muscle" data-name="Extensor Hallucis Brevis"
                d="M -110 1770 Q -90 1800, -85 1860 L -100 1870 Z" />
            
            <!-- Dorsal Interossei (Individual Slips) -->
            <path id="m_dorsal_int_foot_1_l" class="muscle-deep muscle" data-name="1st Dorsal Interosseous (Foot)" d="M -95 1880 L -88 1930 L -98 1930 Z" />
            <path id="m_dorsal_int_foot_2_l" class="muscle-deep muscle" data-name="2nd Dorsal Interosseous (Foot)" d="M -105 1885 L -98 1935 L -108 1935 Z" />
            <path id="m_dorsal_int_foot_3_l" class="muscle-deep muscle" data-name="3rd Dorsal Interosseous (Foot)" d="M -115 1890 L -108 1940 L -118 1940 Z" />
            <path id="m_dorsal_int_foot_4_l" class="muscle-deep muscle" data-name="4th Dorsal Interosseous (Foot)" d="M -125 1895 L -118 1945 L -128 1945 Z" />
        </g>
        
        <!-- PLANTAR LAYERS -->
        
        <!-- Layer 3: Plantar Interossei -->
        <g id="foot_plantar_l3" opacity="0.7">
            <path id="m_plantar_int_1_l" class="muscle-deep muscle" data-name="1st Plantar Interosseous" d="M -102 1910 L -98 1940 L -105 1942 Z" />
            <path id="m_plantar_int_2_l" class="muscle-deep muscle" data-name="2nd Plantar Interosseous" d="M -112 1915 L -108 1945 L -115 1947 Z" />
            <path id="m_plantar_int_3_l" class="muscle-deep muscle" data-name="3rd Plantar Interosseous" d="M -122 1920 L -118 1950 L -125 1952 Z" />
        </g>

        <!-- Lumbricals -->
        <g id="foot_lumbricals_l" opacity="0.8">
            <path id="m_lumbrical_foot_1_l" class="muscle-superficial muscle" data-name="1st Lumbrical (Foot)" d="M -90 1900 Q -85 1930, -82 1960 L -88 1965 Z" />
            <path id="m_lumbrical_foot_2_l" class="muscle-superficial muscle" data-name="2nd Lumbrical (Foot)" d="M -100 1910 Q -95 1940, -92 1970 L -98 1975 Z" />
            <path id="m_lumbrical_foot_3_l" class="muscle-superficial muscle" data-name="3rd Lumbrical (Foot)" d="M -110 1920 Q -105 1950, -102 1980 L -108 1985 Z" />
            <path id="m_lumbrical_foot_4_l" class="muscle-superficial muscle" data-name="4th Lumbrical (Foot)" d="M -120 1930 Q -115 1960, -112 1990 L -118 1995 Z" />
        </g>

        <g id="foot_plantar_deep_l">
            <path id="m_flexor_hal_brevis_l" class="muscle-deep muscle" data-name="Flexor Hallucis Brevis" d="M -85 1900 Q -75 1940, -80 1980 L -95 1980 Z" />
            <path id="m_adductor_hal_l" class="muscle-deep muscle" data-name="Adductor Hallucis" d="M -90 1920 L -110 1940 L -100 1960 L -80 1940 Z" />
            <path id="m_flex_dm_brevis_foot_l" class="muscle-deep muscle" data-name="Flexor Digiti Minimi Brevis (Foot)" d="M -128 1920 L -135 1950 L -142 1945 Z" />
            <path id="m_quadratus_plantae_l" class="muscle-deep muscle" data-name="Quadratus Plantae" d="M -110 1850 Q -100 1880, -95 1920 L -120 1920 Z" />
        </g>

        <g id="foot_plantar_sup_l">
            <path id="m_abd_hallucis_l" class="muscle-superficial muscle" data-name="Abductor Hallucis" d="M -90 1780 Q -65 1850, -70 1960 L -85 1960 Z" />
            
            <!-- Segmented Flexor Digitorum Brevis (Slips) -->
            <g id="foot_fdb_slips_l" opacity="0.9">
                <path id="m_flex_dig_brevis_l_2" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 2)" d="M -105 1880 L -115 1980 L -125 1980 Z" />
                <path id="m_flex_dig_brevis_l_3" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 3)" d="M -105 1880 L -105 1980 L -115 1980 Z" />
                <path id="m_flex_dig_brevis_l_4" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 4)" d="M -105 1880 L -95 1980 L -105 1980 Z" />
                <path id="m_flex_dig_brevis_l_5" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 5)" d="M -105 1880 L -85 1980 L -95 1980 Z" />
            </g>
            <path id="m_abd_dig_min_l" class="muscle-superficial muscle" data-name="Abductor Digiti Minimi (Foot)" d="M -125 1860 Q -130 1900, -130 1950 L -140 1950 Z" />
        </g>

        <!-- FOOT INTRINSICS (RIGHT - MIRRORED) -->
        <g id="foot_dorsal_r">
            <path id="m_ext_retinaculum_r" class="fascia muscle" data-name="Extensor Retinaculum" d="M 130 1720 L 80 1700 L 75 1740 L 120 1760 Z" opacity="0.6" fill="#ddd" />
            
            <!-- Segmented Extensor Digitorum Brevis (Slips Right) -->
            <g id="foot_edb_slips_r" opacity="0.8">
                <path id="m_ext_dig_brevis_r_2" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 2)" d="M 115 1760 L 120 1860 L 130 1860 Z" />
                <path id="m_ext_dig_brevis_r_3" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 3)" d="M 115 1760 L 110 1860 L 120 1860 Z" />
                <path id="m_ext_dig_brevis_r_4" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 4)" d="M 115 1760 L 100 1860 L 110 1860 Z" />
                <path id="m_ext_dig_brevis_r_5" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis (Digit 5)" d="M 115 1760 L 90 1860 L 100 1860 Z" />
            </g>
            <path id="m_ext_hal_brevis_r" class="muscle-deep muscle" data-name="Extensor Hallucis Brevis" d="M 110 1770 Q 90 1800, 85 1860 L 100 1870 Z" />
            
            <path id="m_dorsal_int_foot_1_r" class="muscle-deep muscle" data-name="1st Dorsal Interosseous (Foot)" d="M 95 1880 L 88 1930 L 98 1930 Z" />
            <path id="m_dorsal_int_foot_2_r" class="muscle-deep muscle" data-name="2nd Dorsal Interosseous (Foot)" d="M 105 1885 L 98 1935 L 108 1935 Z" />
            <path id="m_dorsal_int_foot_3_r" class="muscle-deep muscle" data-name="3rd Dorsal Interosseous (Foot)" d="M 115 1890 L 108 1940 L 118 1940 Z" />
            <path id="m_dorsal_int_foot_4_r" class="muscle-deep muscle" data-name="4th Dorsal Interosseous (Foot)" d="M 125 1895 L 118 1945 L 128 1945 Z" />
        </g>

        <g id="foot_plantar_r3" opacity="0.7">
            <path id="m_plantar_int_1_r" class="muscle-deep muscle" data-name="1st Plantar Interosseous" d="M 102 1910 L 98 1940 L 105 1942 Z" />
            <path id="m_plantar_int_2_r" class="muscle-deep muscle" data-name="2nd Plantar Interosseous" d="M 112 1915 L 108 1945 L 115 1947 Z" />
            <path id="m_plantar_int_3_r" class="muscle-deep muscle" data-name="3rd Plantar Interosseous" d="M 122 1920 L 118 1950 L 125 1952 Z" />
        </g>

        <g id="foot_lumbricals_r" opacity="0.8">
            <path id="m_lumbrical_foot_1_r" class="muscle-superficial muscle" data-name="1st Lumbrical (Foot)" d="M 90 1900 Q 85 1930, 82 1960 L 88 1965 Z" />
            <path id="m_lumbrical_foot_2_r" class="muscle-superficial muscle" data-name="2nd Lumbrical (Foot)" d="M 100 1910 Q 95 1940, 92 1970 L 98 1975 Z" />
            <path id="m_lumbrical_foot_3_r" class="muscle-superficial muscle" data-name="3rd Lumbrical (Foot)" d="M 110 1920 Q 105 1950, 102 1980 L 108 1985 Z" />
            <path id="m_lumbrical_foot_4_r" class="muscle-superficial muscle" data-name="4th Lumbrical (Foot)" d="M 120 1930 Q 115 1960, 112 1990 L 118 1995 Z" />
        </g>

        <g id="foot_plantar_deep_r">
            <path id="m_flexor_hal_brevis_r" class="muscle-deep muscle" data-name="Flexor Hallucis Brevis" d="M 85 1900 Q 75 1940, 80 1980 L 95 1980 Z" />
            <path id="m_adductor_hal_r" class="muscle-deep muscle" data-name="Adductor Hallucis" d="M 90 1920 L 110 1940 L 100 1960 L 80 1940 Z" />
            <path id="m_flex_dm_brevis_foot_r" class="muscle-deep muscle" data-name="Flexor Digiti Minimi Brevis (Foot)" d="M 128 1920 L 135 1950 L 142 1945 Z" />
            <path id="m_quadratus_plantae_r" class="muscle-deep muscle" data-name="Quadratus Plantae" d="M 110 1850 Q 100 1880, 95 1920 L 120 1920 Z" />
        </g>

        <g id="foot_plantar_sup_r">
            <path id="m_abd_hallucis_r" class="muscle-superficial muscle" data-name="Abductor Hallucis" d="M 90 1780 Q 65 1850, 70 1960 L 85 1960 Z" />
            
            <!-- Segmented Flexor Digitorum Brevis (Slips Right) -->
            <g id="foot_fdb_slips_r" opacity="0.9">
                <path id="m_flex_dig_brevis_r_2" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 2)" d="M 105 1880 L 115 1980 L 125 1980 Z" />
                <path id="m_flex_dig_brevis_r_3" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 3)" d="M 105 1880 L 105 1980 L 115 1980 Z" />
                <path id="m_flex_dig_brevis_r_4" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 4)" d="M 105 1880 L 95 1980 L 105 1980 Z" />
                <path id="m_flex_dig_brevis_r_5" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis (Digit 5)" d="M 105 1880 L 85 1980 L 95 1980 Z" />
            </g>
            <path id="m_abd_dig_min_r" class="muscle-superficial muscle" data-name="Abductor Digiti Minimi (Foot)" d="M 125 1860 Q 130 1900, 130 1950 L 140 1950 Z" />
        </g>
    </g>
`;
