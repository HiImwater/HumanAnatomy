
export const lowerLimbsMusclesSVG = `
    <g id="muscles_lower_limbs" class="muscle-group">
        <!-- 
            GLUTEAL GROUP (Organic Wrap-around)
        -->
        <path id="m_glute_med_l" class="muscle-superficial muscle" data-name="Gluteus Medius"
            d="M -135 830 C -185 840, -210 930, -200 970 L -180 985 Q -160 900, -135 830 Z" />
        <path id="m_glute_med_r" class="muscle-superficial muscle" data-name="Gluteus Medius"
            d="M 135 830 C 185 840, 210 930, 200 970 L 180 985 Q 160 900, 135 830 Z" />

        <path id="m_glute_max_l" class="muscle-superficial muscle" data-name="Gluteus Maximus"
            d="M -130 870 C -190 900, -235 1000, -210 1100 C -180 1130, -150 1100, -135 1050 Q -120 950, -130 870 Z" />
        <path id="m_glute_max_r" class="muscle-superficial muscle" data-name="Gluteus Maximus"
            d="M 130 870 C 190 900, 235 1000, 210 1100 C 180 1130, 150 1100, 135 1050 Q 120 950, 130 870 Z" />

        <!-- 
            DEEP GLUTEAL ROTATORS (The "Deep 6" - Completed)
        -->
        <g id="muscles_deep_rotators" opacity="0.8">
            <!-- Piriformis -->
            <path id="m_piriformis_l" class="muscle-deep muscle" data-name="Piriformis" d="M -70 940 L -200 970 L -190 985 L -70 960 Z" />
            <path id="m_piriformis_r" class="muscle-deep muscle" data-name="Piriformis" d="M 70 940 L 200 970 L 190 985 L 70 960 Z" />
            
            <!-- Gemellus Superior -->
            <path id="m_gem_sup_l" class="muscle-deep muscle" data-name="Gemellus Superior" d="M -65 965 L -195 985 L -185 995 L -65 975 Z" />
            <path id="m_gem_sup_r" class="muscle-deep muscle" data-name="Gemellus Superior" d="M 65 965 L 195 985 L 185 995 L 65 975 Z" />

            <!-- Obturator Internus -->
            <path id="m_obt_int_l" class="muscle-deep muscle" data-name="Obturator Internus" d="M -60 975 L -190 995 L -180 1005 L -60 985 Z" />
            <path id="m_obt_int_r" class="muscle-deep muscle" data-name="Obturator Internus" d="M 60 975 L 190 995 L 180 1005 L 60 985 Z" />

            <!-- Gemellus Inferior -->
            <path id="m_gem_inf_l" class="muscle-deep muscle" data-name="Gemellus Inferior" d="M -55 985 L -185 1010 L -175 1020 L -55 995 Z" />
            <path id="m_gem_inf_r" class="muscle-deep muscle" data-name="Gemellus Inferior" d="M 55 985 L 185 1010 L 175 1020 L 55 995 Z" />

            <!-- Obturator Externus (Deepest) -->
            <path id="m_obt_ext_l" class="muscle-deep muscle" data-name="Obturator Externus" d="M -50 1000 L -80 1040 L -120 1040 L -90 1000 Z" opacity="0.6" />
            <path id="m_obt_ext_r" class="muscle-deep muscle" data-name="Obturator Externus" d="M 50 1000 L 80 1040 L 120 1040 L 90 1000 Z" opacity="0.6" />

            <!-- Quadratus Femoris -->
            <path id="m_quad_fem_l" class="muscle-deep muscle" data-name="Quadratus Femoris" d="M -50 1020 L -180 1025 L -175 1045 L -55 1045 Z" />
            <path id="m_quad_fem_r" class="muscle-deep muscle" data-name="Quadratus Femoris" d="M 50 1020 L 180 1025 L 175 1045 L 55 1045 Z" />
        </g>

        <path id="m_tfl_l" class="muscle-superficial muscle" data-name="Tensor Fasciae Latae" d="M -145 835 Q -175 870, -180 980 L -165 985 Q -155 880, -145 835 Z" />
        <path id="m_tfl_r" class="muscle-superficial muscle" data-name="Tensor Fasciae Latae" d="M 145 835 Q 175 870, 180 980 L 165 985 Q 155 880, 145 835 Z" />

        <path id="m_sartorius_l" class="muscle-superficial muscle" data-name="Sartorius" d="M -145 840 C -130 1000, -90 1350, -85 1485 L -75 1485 C -80 1350, -120 1000, -145 845 Z" />
        <path id="m_sartorius_r" class="muscle-superficial muscle" data-name="Sartorius" d="M 145 840 C 130 1000, 90 1350, 85 1485 L 75 1485 C 80 1350, 120 1000, 145 845 Z" />

        <path id="m_iliopsoas_l" class="muscle-deep muscle" data-name="Iliopsoas" d="M -125 835 Q -100 900, -60 970 L -50 970 C -45 920, -50 850, -55 830 Z" />
        <path id="m_iliopsoas_r" class="muscle-deep muscle" data-name="Iliopsoas" d="M 125 835 Q 100 900, 60 970 L 50 970 C 45 920, 50 850, 55 830 Z" />

        <!-- ADDUCTOR GROUP (Deep Expansion) -->
        <path id="m_add_brevis_l" class="muscle-deep muscle" data-name="Adductor Brevis" d="M -25 1025 L -55 1150 L -70 1140 Z" opacity="0.6" />
        <path id="m_add_brevis_r" class="muscle-deep muscle" data-name="Adductor Brevis" d="M 25 1025 L 55 1150 L 70 1140 Z" opacity="0.6" />
        <path id="m_add_minimus_l" class="muscle-deep muscle" data-name="Adductor Minimus" d="M -25 1030 L -90 1200 L -100 1180 Z" opacity="0.5" />
        <path id="m_add_minimus_r" class="muscle-deep muscle" data-name="Adductor Minimus" d="M 25 1030 L 90 1200 L 100 1180 Z" opacity="0.5" />

        <path id="m_pectineus_l" class="muscle-deep muscle" data-name="Pectineus" d="M -40 1010 Q -55 1020, -70 1060 L -80 1055 L -55 1010 Z" />
        <path id="m_pectineus_r" class="muscle-deep muscle" data-name="Pectineus" d="M 40 1010 Q 55 1020, 70 1060 L 80 1055 L 55 1010 Z" />
        <path id="m_add_long_l" class="muscle-superficial muscle" data-name="Adductor Longus" d="M -25 1020 L -85 1250 L -105 1230 L -35 1020 Z" />
        <path id="m_add_long_r" class="muscle-superficial muscle" data-name="Adductor Longus" d="M 25 1020 L 85 1250 L 105 1230 L 35 1020 Z" />
        <path id="m_add_mag_l" class="muscle-deep muscle" data-name="Adductor Magnus" d="M -25 1035 Q -55 1150, -85 1420 L -100 1420 Q -75 1200, -55 1040 Z" />
        <path id="m_add_mag_r" class="muscle-deep muscle" data-name="Adductor Magnus" d="M 25 1035 Q 55 1150, 85 1420 L 100 1420 Q 75 1200, 55 1040 Z" />
        <path id="m_gracilis_l" class="muscle-superficial muscle" data-name="Gracilis" d="M -20 1040 L -65 1485 L -75 1485 L -25 1040 Z" />
        <path id="m_gracilis_r" class="muscle-superficial muscle" data-name="Gracilis" d="M 20 1040 L 65 1485 L 75 1485 L 25 1040 Z" />

        <!-- QUADRICEPS -->
        <path id="m_rectus_fem_l" class="muscle-superficial muscle" data-name="Rectus Femoris" d="M -135 860 C -120 1050, -115 1250, -110 1420 L -90 1445 L -70 1420 C -75 1250, -85 1050, -135 860 Z" />
        <path id="m_rectus_fem_r" class="muscle-superficial muscle" data-name="Rectus Femoris" d="M 135 860 C 120 1050, 115 1250, 110 1420 L 90 1445 L 70 1420 C 75 1250, 85 1050, 135 860 Z" />
        <path id="m_vast_int_l" class="muscle-deep muscle" data-name="Vastus Intermedius" d="M -105 1000 Q -100 1200, -95 1420 L -115 1420 Q -120 1200, -105 1000 Z" opacity="0.5" />
        <path id="m_vast_int_r" class="muscle-deep muscle" data-name="Vastus Intermedius" d="M 105 1000 Q 100 1200, 95 1420 L 115 1420 Q 120 1200, 105 1000 Z" opacity="0.5" />
        <path id="m_vast_lat_l" class="muscle-superficial muscle" data-name="Vastus Lateralis" d="M -170 920 C -230 1100, -225 1300, -120 1445 L -140 1430 C -190 1300, -195 1100, -170 920 Z" />
        <path id="m_vast_lat_r" class="muscle-superficial muscle" data-name="Vastus Lateralis" d="M 170 920 C 230 1100, 225 1300, 120 1445 L 140 1430 C 190 1300, 195 1100, 170 920 Z" />
        <path id="m_vast_med_l" class="muscle-superficial muscle" data-name="Vastus Medialis" d="M -110 1200 Q -60 1350, -75 1450 L -110 1435 Q -95 1350, -110 1200 Z" />
        <path id="m_vast_med_r" class="muscle-superficial muscle" data-name="Vastus Medialis" d="M 110 1200 Q 60 1350, 75 1450 L 110 1435 Q 95 1350, 110 1200 Z" />

        <!-- HAMSTRINGS -->
        <path id="m_semimembranosus_l" class="muscle-deep muscle" data-name="Semimembranosus" d="M -45 1050 Q -70 1250, -100 1490 L -120 1490 Q -80 1250, -45 1050 Z" opacity="0.7" />
        <path id="m_semimembranosus_r" class="muscle-deep muscle" data-name="Semimembranosus" d="M 45 1050 Q 70 1250, 100 1490 L 120 1490 Q 80 1250, 45 1050 Z" opacity="0.7" />
        <path id="m_biceps_fem_long_l" class="muscle-superficial muscle" data-name="Biceps Femoris (Long Head)" d="M -45 1040 C -140 1100, -165 1350, -130 1495 L -122 1495 C -145 1350, -115 1100, -45 1040 Z" />
        <path id="m_biceps_fem_long_r" class="muscle-superficial muscle" data-name="Biceps Femoris (Long Head)" d="M 45 1040 C 140 1100, 165 1350, 130 1495 L 122 1495 C 145 1350, 115 1100, 45 1040 Z" />
        <path id="m_biceps_fem_short_l" class="muscle-deep muscle" data-name="Biceps Femoris (Short Head)" d="M -180 1150 Q -200 1300, -125 1490 L -105 1485 Q -170 1300, -180 1150 Z" opacity="0.8" />
        <path id="m_biceps_fem_short_r" class="muscle-deep muscle" data-name="Biceps Femoris (Short Head)" d="M 180 1150 Q 200 1300, 125 1490 L 105 1485 Q 170 1300, 180 1150 Z" opacity="0.8" />
        <path id="m_semitendinosus_l" class="muscle-superficial muscle" data-name="Semitendinosus" d="M -50 1045 C -80 1150, -90 1400, -100 1485 L -90 1485 C -85 1400, -75 1150, -50 1045 Z" />
        <path id="m_semitendinosus_r" class="muscle-superficial muscle" data-name="Semitendinosus" d="M 50 1045 C 80 1150, 90 1400, 100 1485 L 90 1485 C 85 1400, 75 1150, 50 1045 Z" />

        <!-- LOWER LEG -->
        <path id="m_plantaris_l" class="muscle-deep muscle" data-name="Plantaris" d="M -125 1480 L -130 1520 L -135 1515 Z" opacity="0.6" />
        <path id="m_plantaris_r" class="muscle-deep muscle" data-name="Plantaris" d="M 125 1480 L 130 1520 L 135 1515 Z" opacity="0.6" />
        <path id="m_popliteus_l" class="muscle-deep muscle" data-name="Popliteus" d="M -122 1490 L -90 1510 L -95 1525 Z" opacity="0.7" />
        <path id="m_popliteus_r" class="muscle-deep muscle" data-name="Popliteus" d="M 122 1490 L 90 1510 L 95 1525 Z" opacity="0.7" />
        
        <path id="m_tibialis_ant_l" class="muscle-superficial muscle" data-name="Tibialis Anterior" d="M -95 1485 Q -135 1650, -115 1860 L -100 1860 Q -105 1650, -95 1500 Z" />
        <path id="m_tibialis_ant_r" class="muscle-superficial muscle" data-name="Tibialis Anterior" d="M 95 1485 Q 135 1650, 115 1860 L 100 1860 Q 105 1650, 95 1500 Z" />
        
        <!-- LATERAL COMPARTMENT -->
        <path id="m_peroneus_long_l" class="muscle-superficial muscle" data-name="Peroneus Longus" d="M -145 1520 Q -165 1650, -140 1860 L -150 1860 Q -175 1650, -145 1520 Z" />
        <path id="m_peroneus_long_r" class="muscle-superficial muscle" data-name="Peroneus Longus" d="M 145 1520 Q 165 1650, 140 1860 L 150 1860 Q 175 1650, 145 1520 Z" />
        <path id="m_peroneus_brevis_l" class="muscle-deep muscle" data-name="Peroneus Brevis" d="M -155 1650 Q -160 1750, -150 1860 L -160 1860 Q -170 1750, -155 1650 Z" opacity="0.7" />
        <path id="m_peroneus_brevis_r" class="muscle-deep muscle" data-name="Peroneus Brevis" d="M 155 1650 Q 160 1750, 150 1860 L 160 1860 Q 170 1750, 155 1650 Z" opacity="0.7" />

        <path id="m_gastrocnemius_med_l" class="muscle-superficial muscle" data-name="Gastrocnemius (Medial)" d="M -73 1485 C -40 1550, -45 1700, -95 1860 L -100 1860 C -70 1700, -70 1550, -73 1485 Z" />
        <path id="m_gastrocnemius_med_r" class="muscle-superficial muscle" data-name="Gastrocnemius (Medial)" d="M 73 1485 C 40 1550, 45 1700, 95 1860 L 100 1860 C 70 1700, 70 1550, 73 1485 Z" />
        <path id="m_gastrocnemius_lat_l" class="muscle-superficial muscle" data-name="Gastrocnemius (Lateral)" d="M -118 1505 C -155 1550, -155 1700, -100 1860 L -105 1860 C -135 1700, -135 1550, -118 1505 Z" />
        <path id="m_gastrocnemius_lat_r" class="muscle-superficial muscle" data-name="Gastrocnemius (Lateral)" d="M 118 1505 C 155 1550, 155 1700, 100 1860 L 105 1860 C 135 1700, 135 1550, 118 1505 Z" />
        <path id="m_soleus_l" class="muscle-deep muscle" data-name="Soleus" d="M -115 1550 Q -145 1680, -130 1860 L -90 1860 Q -85 1680, -115 1550 Z" />
        <path id="m_soleus_r" class="muscle-deep muscle" data-name="Soleus" d="M 115 1550 Q 145 1680, 130 1860 L 90 1860 Q 85 1680, 115 1550 Z" />

        <!-- TENDONS -->
        <path id="t_achilles_l" class="tendon" data-name="Achilles Tendon" d="M -115 1860 L -105 1940 L -85 1940 L -90 1860 Z" />
        <path id="t_achilles_r" class="tendon" data-name="Achilles Tendon" d="M 115 1860 L 105 1940 L 85 1940 L 90 1860 Z" />
        <path id="t_patellar_l" class="tendon" data-name="Patellar Tendon" d="M -105 1445 L -110 1485 L -90 1485 L -95 1445 Z" />
        <path id="t_patellar_r" class="tendon" data-name="Patellar Tendon" d="M 105 1445 L 110 1485 L 90 1485 L 95 1445 Z" />
    </g>
`;
