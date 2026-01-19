
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
        <!-- DORSAL -->
        <path id="m_ext_retinaculum_l" class="fascia muscle" data-name="Extensor Retinaculum"
             d="M -130 1720 L -80 1700 L -75 1740 L -120 1760 Z" opacity="0.6" fill="#ddd" />
             
        <path id="m_ext_dig_brevis_l" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis"
             d="M -115 1760 
                Q -100 1800, -90 1860 
                L -125 1860 
                Q -130 1800, -115 1760 Z" />
        
        <!-- PLANTAR - Layer 1 -->
        <path id="m_abd_hallucis_l" class="muscle-superficial muscle" data-name="Abductor Hallucis"
             d="M -90 1780 
                Q -65 1850, -70 1960 
                L -85 1960 
                Q -100 1880, -90 1780 Z" />
                
        <path id="m_flex_dig_brevis_l" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis"
             d="M -105 1880
                Q -100 1920, -95 1980
                L -115 1980
                Q -120 1920, -105 1880 Z" />
                
        <path id="m_abd_dig_min_l" class="muscle-superficial muscle" data-name="Abductor Digiti Minimi (Foot)"
             d="M -125 1860
                Q -130 1900, -130 1950
                L -140 1950
                L -135 1860 Z" />

        <!-- PLANTAR - Deep (Interossei/Lumbricals) -->
        <path id="m_dorsal_int_foot_1_l" class="muscle-deep muscle" data-name="Dorsal Interossei (Foot)"
             d="M -95 1880 L -90 1920 L -100 1920 Z" />
        <path id="m_dorsal_int_foot_2_l" class="muscle-deep muscle" data-name="Dorsal Interossei (Foot)"
             d="M -105 1880 L -100 1920 L -110 1920 Z" />

        <!-- PLANTAR - Layer 2 (Deep) -->
        <path id="m_quadratus_plantae_l" class="muscle-deep muscle" data-name="Quadratus Plantae"
             d="M -110 1850 Q -100 1880, -95 1920 L -120 1920 Q -125 1880, -115 1850 Z" />
        <path id="m_flexor_hal_brevis_l" class="muscle-deep muscle" data-name="Flexor Hallucis Brevis"
             d="M -85 1900 Q -75 1940, -80 1980 L -95 1980 Q -100 1940, -90 1900 Z" />
        <path id="m_adductor_hal_l" class="muscle-deep muscle" data-name="Adductor Hallucis"
             d="M -90 1920 L -110 1940 L -100 1960 L -80 1940 Z" />

        <!-- Plantar Interossei (Adductors) -->
        <path id="m_plantar_int_1_l" class="muscle-deep muscle" data-name="1st Plantar Interosseous"
             d="M -98 1900 L -95 1930 L -102 1930 Z" />
        <path id="m_plantar_int_2_l" class="muscle-deep muscle" data-name="2nd Plantar Interosseous"
             d="M -108 1900 L -105 1930 L -112 1930 Z" />
        <path id="m_plantar_int_3_l" class="muscle-deep muscle" data-name="3rd Plantar Interosseous"
             d="M -118 1900 L -115 1930 L -122 1930 Z" />
        <!-- FOOT INTRINSICS (RIGHT) -->
        <!-- DORSAL -->
        <path id="m_ext_retinaculum_r" class="fascia muscle" data-name="Extensor Retinaculum"
             d="M 130 1720 L 80 1700 L 75 1740 L 120 1760 Z" opacity="0.6" fill="#ddd" />
             
        <path id="m_ext_dig_brevis_r" class="muscle-deep muscle" data-name="Extensor Digitorum Brevis"
             d="M 115 1760 
                Q 100 1800, 90 1860 
                L 125 1860 
                Q 130 1800, 115 1760 Z" />
        
        <!-- PLANTAR - Layer 1 -->
        <path id="m_abd_hallucis_r" class="muscle-superficial muscle" data-name="Abductor Hallucis"
             d="M 90 1780 
                Q 65 1850, 70 1960 
                L 85 1960 
                Q 100 1880, 90 1780 Z" />
                
        <path id="m_flex_dig_brevis_r" class="muscle-superficial muscle" data-name="Flexor Digitorum Brevis"
             d="M 105 1880
                Q 100 1920, 95 1980
                L 115 1980
                Q 120 1920, 105 1880 Z" />
                
        <path id="m_abd_dig_min_r" class="muscle-superficial muscle" data-name="Abductor Digiti Minimi (Foot)"
             d="M 125 1860
                Q 130 1900, 130 1950
                L 140 1950
                L 135 1860 Z" />

        <!-- PLANTAR - Deep (Interossei/Lumbricals) -->
        <path id="m_dorsal_int_foot_1_r" class="muscle-deep muscle" data-name="Dorsal Interossei (Foot)"
             d="M 95 1880 L 90 1920 L 100 1920 Z" />
        <path id="m_dorsal_int_foot_2_r" class="muscle-deep muscle" data-name="Dorsal Interossei (Foot)"
             d="M 105 1880 L 100 1920 L 110 1920 Z" />

        <!-- PLANTAR - Layer 2 (Deep) -->
        <path id="m_quadratus_plantae_r" class="muscle-deep muscle" data-name="Quadratus Plantae"
             d="M 110 1850 Q 100 1880, 95 1920 L 120 1920 Q 125 1880, 115 1850 Z" />
        <path id="m_flexor_hal_brevis_r" class="muscle-deep muscle" data-name="Flexor Hallucis Brevis"
             d="M 85 1900 Q 75 1940, 80 1980 L 95 1980 Q 100 1940, 90 1900 Z" />
        <path id="m_adductor_hal_r" class="muscle-deep muscle" data-name="Adductor Hallucis"
             d="M 90 1920 L 110 1940 L 100 1960 L 80 1940 Z" />

        <!-- Plantar Interossei (Adductors) -->
        <path id="m_plantar_int_1_r" class="muscle-deep muscle" data-name="1st Plantar Interosseous"
             d="M 98 1900 L 95 1930 L 102 1930 Z" />
        <path id="m_plantar_int_2_r" class="muscle-deep muscle" data-name="2nd Plantar Interosseous"
             d="M 108 1900 L 105 1930 L 112 1930 Z" />
        <path id="m_plantar_int_3_r" class="muscle-deep muscle" data-name="3rd Plantar Interosseous"
             d="M 118 1900 L 115 1930 L 122 1930 Z" />
    </g>
`;
