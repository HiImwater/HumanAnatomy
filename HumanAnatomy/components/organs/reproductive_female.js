export const reproductiveFemaleSVG = `
<g id="organs_reproductive_female" style="display: none;"> <!-- Hidden by default -->

    <!-- UTERUS & CERVIX
         Placement: Pelvic cavity.
    -->
    <g id="organ_uterus_complex">
        <path id="organ_uterus" class="organ" data-name="Uterus" data-medical-name="Uterus"
            d="M -15 940 C -20 920, -25 910, 0 910 C 25 910, 20 920, 15 940 Z"
            fill="#e6b3b3" stroke="#cc8888" stroke-width="1">
            <title>Uterus (Womb)</title>
        </path>
        
        <!-- Cervix
             Placement: Lower part of Uterus.
        -->
        <path id="organ_cervix" class="organ" data-name="Cervix" data-medical-name="Cervix Uteri"
            d="M -8 940 L -8 950 Q 0 955, 8 950 L 8 940 Z"
            fill="#d98c8c" stroke="#cc8888" stroke-width="1">
            <title>Cervix</title>
        </path>
    </g>


    <!-- VAGINA -->
    <path id="organ_vagina" class="organ" data-name="Vagina" data-medical-name="Vagina"
        d="M -10 940 L -8 980 L 8 980 L 10 940 Z"
        fill="#e0c0c0" stroke="#cc8888" stroke-width="1" />


    <!-- VULVA & CLITORIS (External) -->
    <g id="organ_vulva_complex">
        <path id="organ_vulva" class="organ" data-name="Vulva" data-medical-name="Pudendum Femininum"
            d="M -12 985 Q 0 1010, 12 985 L 8 980 L -8 980 Z"
            fill="#e0c0c0" stroke="#cc8888" stroke-width="1" />
        <circle id="organ_clitoris" class="organ" data-name="Clitoris" data-medical-name="Clitoris"
            cx="0" cy="983" r="2" fill="#ff9999" stroke="#cc6666" stroke-width="0.5" />
    </g>


    <!-- FALLOPIAN TUBES -->
    <!-- ... (Fallopian Tubes code) ... -->
    <path id="organ_fallopian_tubes" class="organ" data-name="Fallopian Tubes" data-medical-name="Tubae Uterinae"
        d="M -20 915 C -40 900, -50 900, -60 920 M 20 915 C 40 900, 50 900, 60 920"
        fill="none" stroke="#e6b3b3" stroke-width="2" />


    <!-- OVARIES -->
    <ellipse id="organ_ovary_left" class="organ" data-name="Left Ovary" data-medical-name="Ovarium Sinistrum"
        cx="-60" cy="925" rx="8" ry="12" fill="#eeddcc" stroke="#ccaa88" stroke-width="1" />
    <ellipse id="organ_ovary_right" class="organ" data-name="Right Ovary" data-medical-name="Ovarium Dextrum"
        cx="60" cy="925" rx="8" ry="12" fill="#eeddcc" stroke="#ccaa88" stroke-width="1" />

</g>
`;
