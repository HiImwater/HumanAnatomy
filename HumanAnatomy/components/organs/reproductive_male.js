export const reproductiveMaleSVG = `
<g id="organs_reproductive_male" style="display: none;"> <!-- Hidden by default -->

    <!-- SEMINAL VESICLES
         Placement: Posterior to bladder, superior to prostate.
    -->
    <g id="organ_seminal_vesicles">
        <path id="organ_seminal_vesicle_left" class="organ" data-name="Left Seminal Vesicle" data-medical-name="Vesicula Seminalis"
            d="M -15 970 Q -25 960, -20 950" fill="none" stroke="#deb887" stroke-width="2" />
        <path id="organ_seminal_vesicle_right" class="organ" data-name="Right Seminal Vesicle" data-medical-name="Vesicula Seminalis"
            d="M 15 970 Q 25 960, 20 950" fill="none" stroke="#deb887" stroke-width="2" />
    </g>

    <!-- PROSTATE -->
    <path id="organ_prostate" class="organ" data-name="Prostate" data-medical-name="Prostata"
        d="M -15 975 C -15 990, -5 1000, 0 1000 C 5 1000, 15 990, 15 975 C 10 970, -10 970, -15 975 Z"
        fill="#deb887" stroke="#8b4513" stroke-width="1">
        <title>Prostate</title>
    </path>

    <!-- BULBOURETHRAL GLANDS (Cowper's)
         Placement: Inferior to prostate.
    -->
    <g id="organ_bulbourethral">
        <circle id="organ_bulbourethral_left" class="organ" data-name="Left Bulbourethral Gland" data-medical-name="Glandula Bulbourethralis"
            cx="-5" cy="1005" r="1.5" fill="#f4a460" stroke="#8b4513" stroke-width="0.5" />
        <circle id="organ_bulbourethral_right" class="organ" data-name="Right Bulbourethral Gland" data-medical-name="Glandula Bulbourethralis"
            cx="5" cy="1005" r="1.5" fill="#f4a460" stroke="#8b4513" stroke-width="0.5" />
    </g>


    <!-- TESTES & SCROTUM -->
    <!-- ... (Scrotum/Testes code) ... -->
    <g id="organ_scrotum_group">
        <path id="organ_scrotum" class="organ" data-name="Scrotum" data-medical-name="Scrotum"
            d="M -25 1020 C -35 1060, -15 1090, 0 1090 C 15 1090, 35 1060, 25 1020 Z"
            fill="#e0c0a0" stroke="#d0a080" stroke-width="1" />
        <ellipse id="organ_testis_left" class="organ" data-name="Left Testis" data-medical-name="Testis Sinister"
            cx="-10" cy="1060" rx="8" ry="12" fill="#e6ccb3" stroke="#a07070" stroke-width="1" opacity="0.8" />
        <ellipse id="organ_testis_right" class="organ" data-name="Right Testis" data-medical-name="Testis Dexter"
            cx="10" cy="1060" rx="8" ry="12" fill="#e6ccb3" stroke="#a07070" stroke-width="1" opacity="0.8" />
    </g>


    <!-- PENIS -->
    <path id="organ_penis" class="organ" data-name="Penis" data-medical-name="Penis"
        d="M -12 1000 L -12 1060 C -12 1080, 12 1080, 12 1060 L 12 1000"
        fill="#e0c0a0" stroke="#d0a080" stroke-width="1">
        <title>Penis</title>
    </path>


    <!-- VAS DEFERENS -->
    <path id="organ_vas_deferens" class="organ" data-name="Vas Deferens" data-medical-name="Ductus Deferens"
        d="M -10 1050 C -20 1000, -40 980, -35 950 C -30 920, -10 960, -5 980 M 10 1050 C 20 1000, 40 980, 35 950 C 30 920, 10 960, 5 980"
        fill="none" stroke="#e0c0a0" stroke-width="1.5" />

</g>
`;
