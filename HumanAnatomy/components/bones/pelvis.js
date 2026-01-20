export const pelvisSVG = `
    <!-- ═══════════════════════════════════════════════════
         PELVIC GIRDLE (Os Coxae)
         Refined Anatomical Model - Android/Male Shape (V-Taper)
         
         Includes:
         - Ilium (Wing, Crest, ASIS, AIIS, PSIS)
         - Ischium (Body, Ramus, Tuberosity, Spine)
         - Pubis (Body, Ramus, Symphysis)
         - Acetabulum (Socket)
         
         Positioning:
         - Articulates with Sacrum (Posterior-Medial)
         - Articulates with Femur (Lateral-Inferior Socket)
         - Symphysis Pubis (Anterior-Medial Midline)
    ═══════════════════════════════════════════════════ -->

    <!-- LEFT HIP BONE (Os Coxae Sinister) -->
    <path id="bone_hip_left" class="bone" data-name="Left Hip Bone" data-medical-name="Os Coxae Sinister" data-bone-id="hip-left"
        d="M -40 840
           C -55 825, -95 815, -135 830
           C -155 837, -165 845, -170 855
           C -165 870, -160 880, -155 890
           C -150 905, -145 925, -140 935
           C -145 955, -140 975, -135 985
           C -130 1005, -125 1020, -105 1035
           C -85 1045, -65 1040, -50 1030
           C -35 1020, -25 1015, -5 1010
           L -2 1005
           C -10 985, -20 975, -40 965
           C -20 955, -30 935, -35 915
           C -35 895, -30 875, -45 840
           Z
           M -50 975
           C -70 970, -90 975, -95 990
           C -100 1005, -85 1015, -65 1015
           C -45 1010, -40 995, -50 975
           Z"
        fill-rule="evenodd" />

    <!-- Left Acetabulum (Socket Detail - Overlay) -->
    <path id="bone_acetabulum_left" class="bone" data-name="Left Acetabulum" data-bone-id="hip-left"
        d="M -130 940
           C -145 940, -150 955, -145 970
           C -140 985, -125 990, -115 980
           C -105 970, -110 950, -120 943
           Q -125 940, -130 940 Z"
        fill="#b0b0b0" stroke="none" opacity="0.6" />


    <!-- RIGHT HIP BONE (Os Coxae Dexter) - Mirrored -->
    <path id="bone_hip_right" class="bone" data-name="Right Hip Bone" data-medical-name="Os Coxae Dexter" data-bone-id="hip-right"
        d="M 40 840
           C 55 825, 95 815, 135 830
           C 155 837, 165 845, 170 855
           C 165 870, 160 880, 155 890
           C 150 905, 145 925, 140 935
           C 145 955, 140 975, 135 985
           C 130 1005, 125 1020, 105 1035
           C 85 1045, 65 1040, 50 1030
           C 35 1020, 25 1015, 5 1010
           L 2 1005
           C 10 985, 20 975, 40 965
           C 20 955, 30 935, 35 915
           C 35 895, 30 875, 45 840
           Z
           M 50 975
           C 70 970, 90 975, 95 990
           C 100 1005, 85 1015, 65 1015
           C 45 1010, 40 995, 50 975
           Z"
        fill-rule="evenodd" />

    <!-- Right Acetabulum -->
    <path id="bone_acetabulum_right" class="bone" data-name="Right Acetabulum" data-bone-id="hip-right"
        d="M 130 940
           C 145 940, 150 955, 145 970
           C 140 985, 125 990, 115 980
           C 105 970, 110 950, 120 943
           Q 125 940, 130 940 Z"
        fill="#b0b0b0" stroke="none" opacity="0.6" />

    <!-- Shadows for Pelvis Depth -->
    <g id="pelvis_shadows">
        <!-- Iliac Fossa Shadows (Deep bowl shape) -->
        <path class="bone-shadow" d="M -50 850 Q -100 850 -130 870 L -120 950 Q -80 950 -50 900 Z" />
        <path class="bone-shadow" d="M 50 850 Q 100 850 130 870 L 120 950 Q 80 950 50 900 Z" />

        <!-- Pubic Symphysis Shadow (Midline depth) -->
        <path class="bone-shadow" d="M -2 1005 L -2 1020 L 2 1020 L 2 1005 Z" opacity="0.3" />
        
        <!-- Sacroiliac Joint Shadows (Posterior depth) -->
        <path class="bone-shadow" d="M -40 840 L -30 900 L -50 900 Z" opacity="0.2" />
        <path class="bone-shadow" d="M 40 840 L 30 900 L 50 900 Z" opacity="0.2" />
    </g>
`;
