
export const headNeckMusclesSVG = `
    <g id="muscles_head_neck" class="muscle-group">
        <!-- 
            EPICRANIAL APONEUROSIS (Galea Aponeurotica)
            Tough fibrous sheet covering the upper cranium.
        -->
        <path id="f_galea" class="aponeurosis" data-name="Epicranial Aponeurosis"
            d="M -70 10 Q 0 -20, 70 10 Q 80 40, 70 70 L -70 70 Q -80 45, -70 10 Z" opacity="0.4" />

        <!-- 
            FRONTALIS (Occipitofrontalis frontal belly)
            Elevates eyebrows, wrinkles forehead.
        -->
        <path id="m_frontalis_l" class="muscle-superficial muscle" data-name="Frontalis"
            d="M -10 30 Q -25 32, -45 35 L -50 70 Q -30 75, -15 70 Z" />
        <path id="m_frontalis_r" class="muscle-superficial muscle" data-name="Frontalis"
            d="M 10 30 Q 25 32, 45 35 L 50 70 Q 30 75, 15 70 Z" />

        <!-- 
            OCCIPITALIS (Occipitofrontalis occipital belly)
            Tenses scalp, draws back.
        -->
        <path id="m_occipitalis_l" class="muscle-superficial muscle" data-name="Occipitalis"
            d="M -60 10 L -40 10 L -45 5 L -55 5 Z" />
        <path id="m_occipitalis_r" class="muscle-superficial muscle" data-name="Occipitalis"
            d="M 60 10 L 40 10 L 45 5 L 55 5 Z" />

        <!-- 
            PROCERUS
            Wrinkles bridge of nose.
        -->
        <path id="m_procerus" class="muscle-superficial muscle" data-name="Procerus"
            d="M -8 85 L 8 85 L 5 110 L -5 110 Z" />

        <!-- 
            CORRUGATOR SUPERCILII (Deep to Frontalis/Procerus)
            Draws eyebrows medially. (Shown slightly peeking through)
        -->
        <path id="m_corrugator_l" class="muscle-deep muscle" data-name="Corrugator Supercilii"
            d="M -15 88 Q -25 85, -35 88 L -25 92 Z" opacity="0.7" />
        <path id="m_corrugator_r" class="muscle-deep muscle" data-name="Corrugator Supercilii"
            d="M 15 88 Q 25 85, 35 88 L 25 92 Z" opacity="0.7" />

        <!-- 
            ORBICULARIS OCULI
            Closes eyelids. Orbital and Palpebral parts.
        -->
        <!-- Left Eye Loop -->
        <path id="m_orb_oculi_l" class="muscle-superficial muscle" data-name="Orbicularis Oculi"
            d="M -20 95
               C -20 80, -25 70, -45 70
               C -65 70, -75 80, -75 95
               C -75 110, -65 120, -45 120
               C -25 120, -20 110, -20 95
               Z
               M -28 95
               C -28 85, -35 78, -48 78
               C -60 78, -67 85, -67 95
               C -67 105, -60 112, -48 112
               C -35 112, -28 105, -28 95
               Z" fill-rule="evenodd" />
        
        <!-- Right Eye Loop -->
        <path id="m_orb_oculi_r" class="muscle-superficial muscle" data-name="Orbicularis Oculi"
            d="M 20 95
               C 20 80, 25 70, 45 70
               C 65 70, 75 80, 75 95
               C 75 110, 65 120, 45 120
               C 25 120, 20 110, 20 95
               Z
               M 28 95
               C 28 85, 35 78, 48 78
               C 60 78, 67 85, 67 95
               C 67 105, 60 112, 48 112
               C 35 112, 28 105, 28 95
               Z" fill-rule="evenodd" />

        <!-- 
            NASALIS
            Transverse part compresses nostril; Alar part dilates.
        -->
        <path id="m_nasalis_transverse" class="muscle-superficial muscle" data-name="Nasalis (Transverse)"
            d="M -10 120 Q 0 115, 10 120 L 15 135 Q 0 130, -15 135 Z" />
        <path id="m_nasalis_alar_l" class="muscle-superficial muscle" data-name="Nasalis (Alar)"
            d="M -20 138 Q -15 135, -5 138 L -8 145 L -22 145 Z" />
        <path id="m_nasalis_alar_r" class="muscle-superficial muscle" data-name="Nasalis (Alar)"
            d="M 20 138 Q 15 135, 5 138 L 8 145 L 22 145 Z" />

        <!-- 
            LEVATOR LABII SUPERIORIS ALAEQUE NASI (LLSAN)
            "Elvis muscle" - sneering.
        -->
        <path id="m_llsan_l" class="muscle-superficial muscle" data-name="Levator Labii Superioris Alaeque Nasi"
            d="M -15 100 L -20 145 L -15 145 L -10 100 Z" />
        <path id="m_llsan_r" class="muscle-superficial muscle" data-name="Levator Labii Superioris Alaeque Nasi"
            d="M 15 100 L 20 145 L 15 145 L 10 100 Z" />

        <!-- 
            LEVATOR LABII SUPERIORIS
            Elevates upper lip.
        -->
        <path id="m_lls_l" class="muscle-superficial muscle" data-name="Levator Labii Superioris"
            d="M -30 105 L -35 150 L -25 150 L -22 105 Z" />
        <path id="m_lls_r" class="muscle-superficial muscle" data-name="Levator Labii Superioris"
            d="M 30 105 L 35 150 L 25 150 L 22 105 Z" />

        <!-- 
            ZYGOMATICUS MINOR
            Elevates upper lip laterally.
        -->
        <path id="m_zyg_minor_l" class="muscle-superficial muscle" data-name="Zygomaticus Minor"
            d="M -45 115 L -45 150 L -40 152 L -38 115 Z" />
        <path id="m_zyg_minor_r" class="muscle-superficial muscle" data-name="Zygomaticus Minor"
            d="M 45 115 L 45 150 L 40 152 L 38 115 Z" />

        <!-- 
            ZYGOMATICUS MAJOR
            Smile muscle. From Zygomatic bone to mouth corner.
        -->
        <path id="m_zyg_major_l" class="muscle-superficial muscle" data-name="Zygomaticus Major"
            d="M -65 115 L -50 160 L -42 158 L -55 112 Z" />
        <path id="m_zyg_major_r" class="muscle-superficial muscle" data-name="Zygomaticus Major"
            d="M 65 115 L 50 160 L 42 158 L 55 112 Z" />

        <!-- 
            LEVATOR ANGULI ORIS (Deep)
            Origin: Maxilla. Insertion: Modiolus.
            Elevates corner of mouth.
        -->
        <path id="m_lao_l" class="muscle-deep muscle" data-name="Levator Anguli Oris"
            d="M -35 110 L -45 160 L -38 162 L -30 110 Z" opacity="0.6" />
        <path id="m_lao_r" class="muscle-deep muscle" data-name="Levator Anguli Oris"
            d="M 35 110 L 45 160 L 38 162 L 30 110 Z" opacity="0.6" />

        <!-- 
            RISORIUS
            Retracts angle of mouth (smiling/grimacing).
        -->
        <path id="m_risorius_l" class="muscle-superficial muscle" data-name="Risorius"
            d="M -70 170 L -50 165 L -52 168 L -70 175 Z" />
        <path id="m_risorius_r" class="muscle-superficial muscle" data-name="Risorius"
            d="M 70 170 L 50 165 L 52 168 L 70 175 Z" />

        <!-- 
            ORBICULARIS ORIS
            Kissing muscle.
        -->
        <path id="m_orb_oris" class="muscle-superficial muscle" data-name="Orbicularis Oris"
            d="M -35 168
               C -35 155, 35 155, 35 168
               C 35 180, -35 180, -35 168
               Z
               M -25 168
               C -25 174, 25 174, 25 168
               C 25 162, -25 162, -25 168
               Z" fill-rule="evenodd" />

        <!-- 
            DEPRESSOR ANGULI ORIS (DAO)
            Frown muscle. Triangle at corners.
        -->
        <path id="m_dao_l" class="muscle-superficial muscle" data-name="Depressor Anguli Oris"
            d="M -45 165 L -55 200 L -35 200 Z" />
        <path id="m_dao_r" class="muscle-superficial muscle" data-name="Depressor Anguli Oris"
            d="M 45 165 L 55 200 L 35 200 Z" />

        <!-- 
            DEPRESSOR LABII INFERIORIS
            Depresses lower lip.
        -->
        <path id="m_dli_l" class="muscle-superficial muscle" data-name="Depressor Labii Inferioris"
            d="M -32 175 L -35 200 L -15 200 L -15 178 Z" />
        <path id="m_dli_r" class="muscle-superficial muscle" data-name="Depressor Labii Inferioris"
            d="M 32 175 L 35 200 L 15 200 L 15 178 Z" />

        <!-- 
            MENTALIS
            Chin muscle. Pouting/wrinkling chin.
        -->
        <path id="m_mentalis_l" class="muscle-superficial muscle" data-name="Mentalis"
            d="M -5 190 C -15 200, -20 215, -10 220 L 0 220 L 0 190 Z" />
        <path id="m_mentalis_r" class="muscle-superficial muscle" data-name="Mentalis"
            d="M 5 190 C 15 200, 20 215, 10 220 L 0 220 L 0 190 Z" />

        <!-- 
            BUCCINATOR
            Deep cheek muscle (blowing).
        -->
        <path id="m_buccinator_l" class="muscle-deep muscle" data-name="Buccinator"
            d="M -60 145 L -80 150 L -80 170 L -55 165 Z" opacity="0.6" />
        <path id="m_buccinator_r" class="muscle-deep muscle" data-name="Buccinator"
            d="M 60 145 L 80 150 L 80 170 L 55 165 Z" opacity="0.6" />

        <!-- 
            MASSETER
            Chewing. Superficial part.
        -->
        <path id="m_masseter_l" class="muscle-superficial muscle" data-name="Masseter"
            d="M -55 125 L -75 128 Q -78 160, -70 190 L -50 185 Q -45 155, -55 125 Z" />
        <path id="m_masseter_r" class="muscle-superficial muscle" data-name="Masseter"
            d="M 55 125 L 75 128 Q 78 160, 70 190 L 50 185 Q 45 155, 55 125 Z" />

        <!-- 
            TEMPORALIS
            Chewing. Fan shaped.
        -->
        <path id="m_temporalis_l" class="muscle-deep muscle" data-name="Temporalis"
            d="M -55 40 Q -95 50, -90 115 L -80 120 L -50 40 Z" opacity="0.8" />
        <path id="m_temporalis_r" class="muscle-deep muscle" data-name="Temporalis"
            d="M 55 40 Q 95 50, 90 115 L 80 120 L 50 40 Z" opacity="0.8" />

        <!-- 
            STERNOCLEIDOMASTOID (SCM) - Two-Headed Refinement
            Muscle of neck rotation. 
            Origin: Manubrium (Sternal head) and Medial Clavicle (Clavicular head).
            Insertion: Mastoid Process.
        -->
        <!-- Left SCM -->
        <!-- Sternal Head (Medial) -->
        <path id="m_scm_sternal_l" class="muscle-superficial muscle" data-name="SCM (Sternal Head)"
            d="M -85 145
               Q -75 220, -15 335
               L -5 330
               Q -60 220, -85 145 Z" />
        <!-- Clavicular Head (Lateral) -->
        <path id="m_scm_clav_l" class="muscle-superficial muscle" data-name="SCM (Clavicular Head)"
            d="M -80 145
               Q -85 220, -70 330
               L -40 330
               Q -65 220, -80 145 Z" />

        <!-- Right SCM -->
        <!-- Sternal Head -->
        <path id="m_scm_sternal_r" class="muscle-superficial muscle" data-name="SCM (Sternal Head)"
            d="M 85 145
               Q 75 220, 15 335
               L 5 330
               Q 60 220, 85 145 Z" />
        <!-- Clavicular Head -->
        <path id="m_scm_clav_r" class="muscle-superficial muscle" data-name="SCM (Clavicular Head)"
            d="M 80 145
               Q 85 220, 70 330
               L 40 330
               Q 65 220, 80 145 Z" />

        <!-- 
            PLATYSMA
            Paper-thin sheet covering the neck.
            Origin: Fascia of upper chest. Insertion: Lower mandible/mouth corners.
        -->
        <path id="m_platysma_l" class="muscle-superficial muscle" data-name="Platysma"
            d="M -45 180 
               C -55 220, -100 300, -110 350
               L -40 350
               C -35 300, -35 220, -45 180 Z" opacity="0.3" />
        <path id="m_platysma_r" class="muscle-superficial muscle" data-name="Platysma"
            d="M 45 180 
               C 55 220, 100 300, 110 350
               L 40 350
               C 35 300, 35 220, 45 180 Z" opacity="0.3" />

    </g>
`;
