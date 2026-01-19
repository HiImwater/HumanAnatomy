
export const lowerLimbsMusclesSVG = `
    <g id="muscles_lower_limbs" class="muscle-group">
        <!-- 
            GLUTEAL GROUP (Organic Wrap-around)
        -->
        <path id="m_glute_med_l" class="muscle-superficial muscle" data-name="Gluteus Medius"
            d="M -135 830
               C -185 840, -210 930, -200 970
               L -180 985
               Q -160 900, -135 830
               Z" />
        <path id="m_glute_med_r" class="muscle-superficial muscle" data-name="Gluteus Medius"
            d="M 135 830
               C 185 840, 210 930, 200 970
               L 180 985
               Q 160 900, 135 830
               Z" />

        <path id="m_glute_max_l" class="muscle-superficial muscle" data-name="Gluteus Maximus"
            d="M -130 870
               C -190 900, -235 1000, -210 1100
               C -180 1130, -150 1100, -135 1050
               Q -120 950, -130 870
               Z" />
        <path id="m_glute_max_r" class="muscle-superficial muscle" data-name="Gluteus Maximus"
            d="M 130 870
               C 190 900, 235 1000, 210 1100
               C 180 1130, 150 1100, 135 1050
               Q 120 950, 130 870
               Z" />

        <path id="m_tfl_l" class="muscle-superficial muscle" data-name="Tensor Fasciae Latae"
            d="M -145 835
               Q -175 870, -180 980
               L -165 985
               Q -155 880, -145 835
               Z" />
        <path id="m_tfl_r" class="muscle-superficial muscle" data-name="Tensor Fasciae Latae"
            d="M 145 835
               Q 175 870, 180 980
               L 165 985
               Q 155 880, 145 835
               Z" />

        <path id="m_sartorius_l" class="muscle-superficial muscle" data-name="Sartorius"
            d="M -145 840
               C -130 1000, -90 1350, -85 1485
               L -75 1485
               C -80 1350, -120 1000, -145 845 Z" />
        <path id="m_sartorius_r" class="muscle-superficial muscle" data-name="Sartorius"
            d="M 145 840
               C 130 1000, 90 1350, 85 1485
               L 75 1485
               C 80 1350, 120 1000, 145 845 Z" />

        <!--
            ILIOPSOAS (Iliacus + Psoas Major merger)
            Insertion: Lesser Trochanter (X +/- 60, Y 970)
        -->
        <path id="m_iliopsoas_l" class="muscle-deep muscle" data-name="Iliopsoas"
            d="M -125 835
               Q -100 900, -60 970
               L -50 970
               C -45 920, -50 850, -55 830
               Z" />
        <path id="m_iliopsoas_r" class="muscle-deep muscle" data-name="Iliopsoas"
            d="M 125 835
               Q 100 900, 60 970
               L 50 970
               C 45 920, 50 850, 55 830
               Z" />

        <!-- 
            ADDUCTOR & MEDIAL COMPARTMENT
        -->
        <path id="m_pectineus_l" class="muscle-deep muscle" data-name="Pectineus"
            d="M -40 1010
               Q -55 1020, -70 1060
               L -80 1055
               L -55 1010
               Z" />
        <path id="m_pectineus_r" class="muscle-deep muscle" data-name="Pectineus"
            d="M 40 1010
               Q 55 1020, 70 1060
               L 80 1055
               L 55 1010
               Z" />

        <path id="m_add_long_l" class="muscle-superficial muscle" data-name="Adductor Longus"
            d="M -25 1020
               L -85 1250
               L -105 1230
               L -35 1020
               Z" />
        <path id="m_add_long_r" class="muscle-superficial muscle" data-name="Adductor Longus"
            d="M 25 1020
               L 85 1250
               L 105 1230
               L 35 1020
               Z" />

        <path id="m_add_mag_l" class="muscle-deep muscle" data-name="Adductor Magnus"
            d="M -25 1035
               Q -55 1150, -85 1420
               L -100 1420
               Q -75 1200, -55 1040
               Z" />
        <path id="m_add_mag_r" class="muscle-deep muscle" data-name="Adductor Magnus"
            d="M 25 1035
               Q 55 1150, 85 1420
               L 100 1420
               Q 75 1200, 55 1040
               Z" />

        <path id="m_gracilis_l" class="muscle-superficial muscle" data-name="Gracilis"
            d="M -20 1040
               L -65 1485
               L -75 1485
               L -25 1040
               Z" />
        <path id="m_gracilis_r" class="muscle-superficial muscle" data-name="Gracilis"
            d="M 20 1040
               L 65 1485
               L 75 1485
               L 25 1040
               Z" />

        <!-- 
            QUADRICEPS FEMORIS (Anterior)
        -->
        <path id="m_rectus_fem_l" class="muscle-superficial muscle" data-name="Rectus Femoris"
            d="M -135 860
               C -120 1050, -115 1250, -110 1420
               L -90 1445
               L -70 1420
               C -75 1250, -85 1050, -135 860 Z" />
        <path id="m_rectus_fem_r" class="muscle-superficial muscle" data-name="Rectus Femoris"
            d="M 135 860
               C 120 1050, 115 1250, 110 1420
               L 90 1445
               L 70 1420
               C 75 1250, 85 1050, 135 860 Z" />

        <path id="m_vast_lat_l" class="muscle-superficial muscle" data-name="Vastus Lateralis"
            d="M -170 920
               C -230 1100, -225 1300, -120 1445
               L -140 1430
               C -190 1300, -195 1100, -170 920 Z" />
        <path id="m_vast_lat_r" class="muscle-superficial muscle" data-name="Vastus Lateralis"
            d="M 170 920
               C 230 1100, 225 1300, 120 1445
               L 140 1430
               C 190 1300, 195 1100, 170 920 Z" />

        <path id="m_vast_med_l" class="muscle-superficial muscle" data-name="Vastus Medialis"
            d="M -110 1200
               Q -60 1350, -75 1450
               L -110 1435
               Q -95 1350, -110 1200 Z" />
        <path id="m_vast_med_r" class="muscle-superficial muscle" data-name="Vastus Medialis"
            d="M 110 1200
               Q 60 1350, 75 1450
               L 110 1435
               Q 95 1350, 110 1200 Z" />

        <!-- 
            HAMSTRINGS (Posterior - Originate at Ischial Tuberosity)
        -->
        <path id="m_biceps_fem_long_l" class="muscle-superficial muscle" data-name="Biceps Femoris (Long Head)"
            d="M -45 1040
               C -140 1100, -165 1350, -130 1495
               L -122 1495
               C -145 1350, -115 1100, -45 1040 Z" />
        <path id="m_biceps_fem_long_r" class="muscle-superficial muscle" data-name="Biceps Femoris (Long Head)"
            d="M 45 1040
               C 140 1100, 165 1350, 130 1495
               L 122 1495
               C 145 1350, 115 1100, 45 1040 Z" />

        <path id="m_semitendinosus_l" class="muscle-superficial muscle" data-name="Semitendinosus"
            d="M -50 1045
               C -80 1150, -90 1400, -100 1485
               L -90 1485
               C -85 1400, -75 1150, -50 1045 Z" />
        <path id="m_semitendinosus_r" class="muscle-superficial muscle" data-name="Semitendinosus"
            d="M 50 1045
               C 80 1150, 90 1400, 100 1485
               L 90 1485
               C 85 1400, 75 1150, 50 1045 Z" />

        <!-- 
            LOWER LEG (Shin & Calf)
        -->
        <path id="m_tibialis_ant_l" class="muscle-superficial muscle" data-name="Tibialis Anterior"
            d="M -95 1485
               Q -135 1650, -115 1860
               L -100 1860
               Q -105 1650, -95 1500 Z" />
        <path id="m_tibialis_ant_r" class="muscle-superficial muscle" data-name="Tibialis Anterior"
            d="M 95 1485
               Q 135 1650, 115 1860
               L 100 1860
               Q 105 1650, 95 1500 Z" />

        <path id="m_gastrocnemius_med_l" class="muscle-superficial muscle" data-name="Gastrocnemius (Medial)"
            d="M -73 1485
               C -40 1550, -45 1700, -95 1860
               L -100 1860
               C -70 1700, -70 1550, -73 1485 Z" />
        <path id="m_gastrocnemius_med_r" class="muscle-superficial muscle" data-name="Gastrocnemius (Medial)"
            d="M 73 1485
               C 40 1550, 45 1700, 95 1860
               L 100 1860
               C 70 1700, 70 1550, 73 1485 Z" />

        <path id="m_gastrocnemius_lat_l" class="muscle-superficial muscle" data-name="Gastrocnemius (Lateral)"
            d="M -118 1505
               C -155 1550, -155 1700, -100 1860
               L -105 1860
               C -135 1700, -135 1550, -118 1505 Z" />
        <path id="m_gastrocnemius_lat_r" class="muscle-superficial muscle" data-name="Gastrocnemius (Lateral)"
            d="M 118 1505
               C 155 1550, 155 1700, 100 1860
               L 105 1860
               C 135 1700, 135 1550, 118 1505 Z" />

        <path id="m_soleus_l" class="muscle-deep muscle" data-name="Soleus"
            d="M -115 1550
               Q -145 1680, -130 1860
               L -90 1860
               Q -85 1680, -115 1550 Z" />
        <path id="m_soleus_r" class="muscle-deep muscle" data-name="Soleus"
            d="M 115 1550
               Q 145 1680, 130 1860
               L 90 1860
               Q 85 1680, 115 1550 Z" />

        <!-- 
            CONNECTIVE TISSUES (Tendons)
        -->
        <!-- Achilles Tendon: Anchors calf to heel (Calcaneus) -->
        <path id="t_achilles_l" class="tendon" data-name="Achilles Tendon"
            d="M -115 1860
               L -105 1940
               L -85 1940
               L -90 1860 Z" />
        <path id="t_achilles_r" class="tendon" data-name="Achilles Tendon"
            d="M 115 1860
               L 105 1940
               L 85 1940
               L 90 1860 Z" />

        <!-- Patellar Tendon: Patella to Tibial Tuberosity -->
        <path id="t_patellar_l" class="tendon" data-name="Patellar Tendon"
            d="M -105 1445
               L -110 1485
               L -90 1485
               L -95 1445 Z" />
        <path id="t_patellar_r" class="tendon" data-name="Patellar Tendon"
            d="M 105 1445
               L 110 1485
               L 90 1485
               L 95 1445 Z" />
    </g>
`;
