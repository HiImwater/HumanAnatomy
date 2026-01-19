export const lowerAbdominalOrgansSVG = `
<defs>
    <!-- Large Intestine gradient -->
    <linearGradient id="colonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#e8d0d0;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#d8b8b8;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#c8a0a0;stop-opacity:1" />
    </linearGradient>
    
    <!-- Small Intestine gradient -->
    <linearGradient id="smallIntestineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#c88080;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#b06868;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#985858;stop-opacity:1" />
    </linearGradient>
    
    <!-- Cecum gradient -->
    <radialGradient id="cecumGradient" cx="40%" cy="40%" r="60%">
        <stop offset="0%" style="stop-color:#e8d0d0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#c8a0a0;stop-opacity:1" />
    </radialGradient>
</defs>

<g id="organs_lower_abdominal" class="organ-system">

    <!-- ═══════════════════════════════════════════════════
         LARGE INTESTINE (Colon) - CORRECTED ORIENTATION
         
         Subject Right (Viewer Left): Cecum, Ascending Colon (Negative X)
         Subject Left (Viewer Right): Descending Colon, Sigmoid (Positive X)
         
         Transverse colon: Y 580-620
         Ascending/Descending: Y 620-840
    ═══════════════════════════════════════════════════ -->

    <!-- CECUM (RAISED, CENTERED, SMALLER) -->
    <!-- Centered on Ascending Colon axis (X = -100) -->
    <path id="organ_cecum" class="organ" data-name="Cecum" data-medical-name="Caecum"
        d="M -100 750
           C -115 755, -125 770, -125 790
           C -125 805, -115 820, -100 820
           C -85 820, -75 805, -75 790
           C -75 770, -85 755, -100 750
           Z"
        fill="url(#cecumGradient)" stroke="#907070" stroke-width="1.5">
        <title>Cecum</title>
    </path>
    
    <!-- Ileocecal Valve -->
    <ellipse id="organ_ileocecal_valve" class="organ" cx="-75" cy="765" rx="6" ry="4"
        fill="#c0a0a0" stroke="#907070" stroke-width="1"
        data-name="Ileocecal Valve" data-medical-name="Valva Ileocaecalis">
        <title>Ileocecal Valve</title>
    </ellipse>

    <!-- APPENDIX (Attached to centralized Cecum base) -->
    <path id="organ_appendix" class="organ" data-name="Appendix" data-medical-name="Appendix Vermiformis"
        d="M -100 820
           Q -95 835, -90 845
           Q -85 855, -70 850
           Q -60 845, -65 835
           Q -70 825, -80 830"
        fill="#c8a0a0" stroke="#907070" stroke-width="1" stroke-linecap="round">
        <title>Appendix</title>
    </path>

    <!-- ASCENDING COLON (Shortened, connecting to high Cecum) -->
    <path id="organ_ascending_colon" class="organ" data-name="Ascending Colon" data-medical-name="Colon Ascendens"
        d="M -100 750
           Q -120 730, -125 700
           Q -115 670, -128 650
           Q -140 630, -125 610
           Q -110 595, -125 585
           Q -130 580, -115 575
           L -85 575
           Q -95 585, -90 600
           Q -80 620, -95 645
           Q -108 670, -95 695
           Q -80 720, -95 740
           Q -90 748, -100 750
           Z"
        fill="url(#colonGradient)" stroke="#907070" stroke-width="1.5">
        <title>Ascending Colon</title>
    </path>
    
    <!-- Ascending Colon Haustra (Subject Right) -->
    <g stroke="#a08080" stroke-width="1.2" fill="none" opacity="0.4">
        <path d="M -88 600 Q -105 597, -120 600" />
        <path d="M -90 640 Q -110 637, -128 640" />
        <path d="M -90 680 Q -110 677, -128 680" />
        <path d="M -88 720 Q -105 717, -122 720" />
    </g>

    <!-- HEPATIC FLEXURE (Subject Right / Viewer Left -> Negative X) -->
    <!-- Formerly Splenic position coords, now flipped -->
    <path id="organ_hepatic_flexure" class="organ" data-name="Hepatic Flexure" data-medical-name="Flexura Coli Dextra"
        d="M -115 575
           C -130 562, -140 548, -132 535
           C -122 522, -100 518, -75 520
           L -75 558
           C -95 555, -112 560, -115 575
           Z"
        fill="url(#colonGradient)" stroke="#907070" stroke-width="1.5">
        <title>Hepatic Flexure</title>
    </path>

    <!-- TRANSVERSE COLON (Flows Right to Left: Neg X to Pos X) -->
    <path id="organ_transverse_colon" class="organ" data-name="Transverse Colon" data-medical-name="Colon Transversum"
        d="M -75 520
           Q -50 515, -25 525
           Q 0 540, 5 560
           Q 0 540, 25 525
           Q 50 515, 75 520
           L 75 558
           Q 50 552, 25 565
           Q 0 582, -5 605
           Q 0 582, -25 565
           Q -50 552, -75 558
           L -75 520
           Z"
        fill="url(#colonGradient)" stroke="#907070" stroke-width="1.5">
        <title>Transverse Colon</title>
    </path>
    
    <!-- Transverse Colon Haustra -->
    <g stroke="#a08080" stroke-width="1.2" fill="none" opacity="0.4">
        <path d="M -50 522 L -50 555" />
        <path d="M -25 530 L -25 568" />
        <path d="M 0 540 L 0 595" />
        <path d="M 25 530 L 25 568" />
        <path d="M 50 522 L 50 555" />
    </g>

    <!-- SPLENIC FLEXURE (Subject Left / Viewer Right -> Positive X) -->
    <path id="organ_splenic_flexure" class="organ" data-name="Splenic Flexure" data-medical-name="Flexura Coli Sinistra"
        d="M 75 520
           C 100 518, 122 522, 132 535
           C 140 548, 130 562, 115 575
           L 85 575
           C 98 565, 105 555, 98 542
           C 90 530, 80 522, 75 520
           Z"
        fill="url(#colonGradient)" stroke="#907070" stroke-width="1.5">
        <title>Splenic Flexure</title>
    </path>

    <!-- DESCENDING COLON (Subject Left -> Positive X) -->
    <path id="organ_descending_colon" class="organ" data-name="Descending Colon" data-medical-name="Colon Descendens"
        d="M 115 575
           Q 130 585, 125 600
           Q 110 625, 125 655
           Q 140 690, 128 725
           Q 115 760, 125 790
           Q 120 820, 100 840
           L 100 840
           Q 90 835, 95 810
           Q 80 780, 95 745
           Q 108 710, 95 675
           Q 80 640, 90 610
           Q 95 590, 85 575
           L 115 575
           Z"
        fill="url(#colonGradient)" stroke="#907070" stroke-width="1.5">
        <title>Descending Colon</title>
    </path>
    
    <!-- Descending Colon Haustra (Subject Left) -->
    <g stroke="#a08080" stroke-width="1.2" fill="none" opacity="0.4">
        <path d="M 120 620 Q 105 617, 88 620" />
        <path d="M 128 670 Q 110 667, 90 670" />
        <path d="M 128 720 Q 110 717, 90 720" />
        <path d="M 122 770 Q 105 767, 88 770" />
        <path d="M 115 815 Q 102 812, 88 815" />
    </g>

    <!-- SIGMOID COLON (Tube - Higher Connection) -->
    <path id="organ_sigmoid_colon" class="organ" data-name="Sigmoid Colon" data-medical-name="Colon Sigmoideum"
        d="M 85 840
           C 70 850, 50 855, 35 865
           C 20 875, 5 880, -5 885
           C -10 888, -12 888, -12 890
           L 15 890
           C 20 885, 35 880, 50 870
           C 65 860, 90 855, 105 850
           C 115 845, 115 842, 115 840
           L 85 840
           Z"
        fill="url(#colonGradient)" stroke="#907070" stroke-width="1.5">
        <title>Sigmoid Colon</title>
    </path>
    
    <!-- Sigmoid Colon Haustra -->
    <g stroke="#a08080" stroke-width="1.2" fill="none" opacity="0.4">
        <path d="M 95 845 Q 85 850, 105 850" />
        <path d="M 50 865 Q 40 870, 65 870" />
        <path d="M 15 880 Q 5 885, 25 885" />
    </g>

    <!-- RECTUM (Raised, Straightened Vertical) -->
    <path id="organ_rectum" class="organ" data-name="Rectum" data-medical-name="Rectum"
        d="M -12 890
           L 15 890
           C 15 930, 15 970, 10 1000
           C 8 1010, 0 1015, -8 1020
           C -15 1015, -20 1000, -20 970
           C -20 940, -18 910, -12 890
           Z"
        fill="#b08080" stroke="#907070" stroke-width="1.2">
        <title>Rectum</title>
    </path>

    <!-- ANUS (Raised) -->
    <path id="organ_anus" class="organ" data-name="Anus" data-medical-name="Anus"
        d="M -8 1020 L -15 1040 Q -8 1046, 0 1040 L -8 1020 Z"
        fill="#906868" stroke="#705050" stroke-width="1">
        <title>Anus</title>
    </path>


    <!-- ═══════════════════════════════════════════════════
         SMALL INTESTINE - SAME HAUSTRATED TUBULAR STYLE AS COLON
         
         Style: Thin tubes (~12-15 unit width) with Q-curve haustra
         Position: Within colon frame, Y 620-850, X ±70
    ═══════════════════════════════════════════════════ -->

    <!-- SMALL INTESTINE (Temporarily Removed) -->
    <!--
    <path id="organ_duodenum" class="organ" data-name="Duodenum" data-medical-name="Duodenum"
        d="M 55 570
           Q 72 568, 80 590
           Q 75 620, 82 650
           Q 88 680, 78 710
           Q 68 740, 50 755
           Q 30 768, 8 765
           Q -12 762, -25 748
           L -15 738
           Q 0 752, 18 752
           Q 38 750, 52 735
           Q 65 718, 70 690
           Q 75 660, 68 630
           Q 62 600, 55 585
           Q 50 575, 42 580
           L 55 570
           Z"
        fill="url(#smallIntestineGradient)" stroke="#805050" stroke-width="1">
        <title>Duodenum</title>
    </path>

    <path class="organ" data-name="Jejunum" data-medical-name="Jejunum"
        d="M 55 570
           Q 60 580, 40 590 T 0 600
           T -40 620
           T 0 640
           T 40 630
           T 20 660
           T -20 670
           T -60 650
           T -80 680
           T -40 700
           T 0 690
           T 40 710
           T 0 730
           T -50 720
           T -70 750
           T -30 770
           T 10 760"
        fill="url(#smallIntestineGradient)" stroke="#805050" stroke-width="1.2" />

    <path class="organ" data-name="Ileum" data-medical-name="Ileum"
        d="M 10 760
           Q 30 770, 50 790 T 20 810
           T -20 800
           T -60 820
           T -30 840
           T 10 830
           T 40 850
           T 10 870
           T -30 860
           T -60 880
           T -20 900
           T 20 890
           T 50 870
           Q 60 860, 68 852"
        fill="url(#smallIntestineGradient)" stroke="#805050" stroke-width="1.1" />

    <path id="organ_terminal_ileum" class="organ" data-name="Terminal Ileum" data-medical-name="Ileum Terminale"
        d="M 68 852
           Q 72 855, 75 855
           L 75 855
           L 68 852
           Z"
        fill="url(#smallIntestineGradient)" stroke="#805050" stroke-width="0.9" opacity="0">
        <title>Terminal Ileum</title>
    </path>

    <path class="organ" data-name="Terminal Ileum"
        d="M 50 870
           Q 60 860, 68 852
           L 75 855
           L 75 845
           Q 65 850, 50 870
           Z"
        fill="url(#smallIntestineGradient)" stroke="#805050" stroke-width="1">
    </path>
    -->

</g>
`;

export const omentumSVG = `
    <!-- GREATER OMENTUM -->
    <path id="organ_peritoneum" class="organ" data-name="Greater Omentum" data-medical-name="Omentum Majus"
        d="M -140 510 Q -150 740, -110 950 Q 0 1000, 110 950 Q 150 740, 140 510 Z"
        fill="#fff8dc" stroke="#e0d0b0" stroke-width="0.5" opacity="0.12">
        <title>Greater Omentum</title>
    </path>
`;
