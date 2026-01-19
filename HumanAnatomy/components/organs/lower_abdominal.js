export const lowerAbdominalOrgansSVG = `
<defs>
    <!-- Intestine Pattern -->
    <pattern id="intestinePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 0 10 Q 5 0, 10 10 T 20 10" fill="none" stroke="#d8bfd8" stroke-width="0.5" opacity="0.4"/>
    </pattern>
</defs>

<g id="organs_lower_abdominal">

    <!-- RECTUM & ANUS -->
    <g id="organ_rectum_complex">
        <path id="organ_rectum" class="organ" data-name="Rectum" data-medical-name="Rectum"
            d="M -15 880
               L -15 950
               C -15 970, 0 980, 15 950
               L 15 880
               Z"
            fill="#cfa6a6" stroke="#a07070" stroke-width="1">
            <title>Rectum</title>
        </path>
        
        <!-- Anus / Anal Canal
             Placement: Terminal exit.
        -->
        <path id="organ_anus" class="organ" data-name="Anus" data-medical-name="Anus"
            d="M -8 950 L -10 970 Q 0 975, 10 970 L 8 950 Z"
            fill="#a07070" stroke="#805050" stroke-width="1">
            <title>Anus</title>
        </path>
    </g>


    <!-- LARGE INTESTINE (Colon) -->
    <!-- ... (Colon code) ... -->
    <path id="organ_colon" class="organ" data-name="Large Intestine" data-medical-name="Intestinum Crassum"
        d="M 60 850 C 80 850, 90 840, 90 820 L 90 700 C 90 680, 80 660, 60 670 C 30 680, 0 690, -30 670 C -60 650, -80 640, -90 660 L -90 820 C -90 850, -60 880, -30 870 C -10 860, 0 870, -15 880 L -50 850 L -60 700 C -30 720, 0 730, 30 710 L 60 700 L 60 820 Z"
        fill="#e0c0c0" stroke="#a07070" stroke-width="1.5" />


    <!-- APPENDIX -->
    <path id="organ_appendix" class="organ" data-name="Appendix" data-medical-name="Appendix Vermiformis"
        d="M 65 850 Q 60 870, 70 880 Q 75 885, 78 875 L 75 860 Z"
        fill="#d0a0a0" stroke="#a07070" stroke-width="1" />


    <!-- SMALL INTESTINE -->
    <!-- ... (Small Intestine code) ... -->
    <path id="organ_small_intestine" class="organ" data-name="Small Intestine" data-medical-name="Intestinum Tenue"
        d="M 10 660 C 20 660, 30 670, 30 680 C 50 700, 60 750, 40 780 C 50 810, 20 840, 0 820 C -20 840, -50 810, -40 780 C -60 750, -50 700, -20 690 C 0 680, 10 690, 30 700 Z"
        fill="url(#intestinePattern)" fill-color="#f0d0d0" stroke="#c09090" stroke-width="1" />
    <path d="M 0 700 Q 20 720, 0 740 T 0 780" fill="none" stroke="#c09090" stroke-width="1" opacity="0.5" />
    <path d="M 20 720 Q 40 740, 20 760 T 20 800" fill="none" stroke="#c09090" stroke-width="1" opacity="0.5" />
    <path d="M -20 720 Q -40 740, -20 760 T -20 800" fill="none" stroke="#c09090" stroke-width="1" opacity="0.5" />


    <!-- PERITONEUM / OMENTUM
         Placement: Large translucent sheet covering most abdominal organs.
    -->
    <path id="organ_peritoneum" class="organ" data-name="Greater Omentum" data-medical-name="Omentum Majus"
        d="M -100 550
           Q -110 700, -80 850
           Q 0 880, 80 850
           Q 110 700, 100 550
           Z"
        fill="#fff8dc" stroke="#e0d0b0" stroke-width="0.5" opacity="0.15">
        <title>Greater Omentum (Peritoneum)</title>
    </path>

</g>

</g>
`;
