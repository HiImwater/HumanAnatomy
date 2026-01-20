export const vertebralColumnSVG = `
    <!-- 
        VERTEBRAL COLUMN - ANTERIOR VIEW (Refined v7 - Narrower Lumbar + Real Gaps)
        Scientifically accurate, detailed construction.
        
        Updates:
        - Lumbar Width: Significantly narrowed (X +/- ~25-30) for columnar look.
        - Lumbar Spacing: Increased to ~8 units for realistic disc height.
        - Sacrum: Adjusted to fit.
    -->

    <!-- ═══════════════════════════════════════════════════
         CERVICAL VERTEBRAE (C1-C7)
         Y Range: 200 - 325
    ═══════════════════════════════════════════════════ -->

    <!-- C1 ATLAS -->
    <path id="bone_c1_atlas" class="bone" data-name="Atlas (C1)" data-bone-id="spine-c1"
        data-medical-name="Vertebra Cervicalis I" 
        d="M -30 200 L -35 205 L -35 210 L -25 212 Q -20 215, -10 212 L -5 210 L 0 211 L 5 210 L 10 212 Q 20 215, 25 212 L 35 210 L 35 205 L 30 200 Q 20 198, 10 200 L 0 198 L -10 200 Q -20 198, -30 200 Z" />

    <!-- C2 AXIS -->
    <path id="bone_c2_dens" class="bone" data-name="Axis (C2)" data-medical-name="Vertebra Cervicalis II" data-bone-id="spine-c2"
        d="M -6 195 L -6 210 L 6 210 L 6 195 C 6 190, -6 190, -6 195 Z" />
    <path id="bone_c2_body" class="bone" data-name="Axis (C2)" data-medical-name="Vertebra Cervicalis II" data-bone-id="spine-c2"
        d="M -22 215 L -28 220 L -25 225 L -20 222 L -15 225 L -15 235 Q 0 240, 15 235 L 15 225 L 20 222 L 25 225 L 28 220 L 22 215 Q 0 212, -22 215 Z" />

    <!-- C3 -->
    <path id="bone_c3_post" class="bone" data-name="Cervical Vertebra C3" data-bone-id="spine-c3" d="M -18 242 L -30 243 Q -34 245, -30 248 L -18 250 Z M 18 242 L 30 243 Q 34 245, 30 248 L 18 250 Z" fill="#d0d0d0" />
    <path id="bone_c3_body" class="bone" data-name="Cervical Vertebra C3" data-bone-id="spine-c3"
        d="M -20 240 L -20 252 C -10 256, 10 256, 20 252 L 20 240 L 15 238 C 10 242, -10 242, -15 238 L -20 240 Z" />

    <!-- C4 -->
    <path id="bone_c4_post" class="bone" data-name="Cervical Vertebra C4" data-bone-id="spine-c4" d="M -19 257 L -32 258 Q -36 261, -32 263 L -19 265 Z M 19 257 L 32 258 Q 36 261, 32 263 L 19 265 Z" fill="#d0d0d0" />
    <path id="bone_c4_body" class="bone" data-name="Cervical Vertebra C4" data-bone-id="spine-c4"
        d="M -21 255 L -21 267 C -10 271, 10 271, 21 267 L 21 255 L 16 253 C 10 257, -10 257, -16 253 L -21 255 Z" />

    <!-- C5 -->
    <path id="bone_c5_post" class="bone" data-name="Cervical Vertebra C5" data-bone-id="spine-c5" d="M -20 272 L -33 273 Q -37 276, -33 278 L -20 280 Z M 20 272 L 33 273 Q 37 276, 33 278 L 20 280 Z" fill="#d0d0d0" />
    <path id="bone_c5_body" class="bone" data-name="Cervical Vertebra C5" data-bone-id="spine-c5"
        d="M -22 270 L -22 282 C -10 286, 10 286, 22 282 L 22 270 L 17 268 C 10 272, -10 272, -17 268 L -22 270 Z" />

    <!-- C6 -->
    <path id="bone_c6_post" class="bone" data-name="Cervical Vertebra C6" data-bone-id="spine-c6" d="M -21 287 L -35 288 Q -39 291, -35 293 L -21 295 Z M 21 287 L 35 288 Q 39 291, 35 293 L 21 295 Z" fill="#d0d0d0" />
    <path id="bone_c6_body" class="bone" data-name="Cervical Vertebra C6" data-bone-id="spine-c6"
        d="M -23 285 L -23 297 C -10 301, 10 301, 23 297 L 23 285 L 18 283 C 10 287, -10 287, -18 283 L -23 285 Z" />

    <!-- C7 -->
    <path id="bone_c7_post" class="bone" data-name="Vertebra Prominens (C7)" data-bone-id="spine-c7" d="M -22 302 L -38 303 Q -42 307, -38 310 L -22 312 Z M 22 302 L 38 303 Q 42 307, 38 310 L 22 312 Z" fill="#d0d0d0" />
    <path id="bone_c7_body" class="bone" data-name="Vertebra Prominens (C7)" data-bone-id="spine-c7"
        d="M -24 300 L -24 315 C -12 320, 12 320, 24 315 L 24 300 L 19 298 C 10 302, -10 302, -19 298 L -24 300 Z" />


    <!-- ═══════════════════════════════════════════════════
         THORACIC VERTEBRAE (T1-T12)
         Y Range: 330 - 652
    ═══════════════════════════════════════════════════ -->

    <!-- T1 -->
    <path id="bone_t1_post" class="bone" data-name="Thoracic Vertebra T1" data-bone-id="spine-t1" d="M -30 330 L -45 325 L -45 335 L -30 340 M 30 330 L 45 325 L 45 335 L 30 340" fill="#e0e0e0" />
    <path id="bone_t1_body" class="bone" data-name="Thoracic Vertebra T1" data-bone-id="spine-t1"
        d="M -26 330 L -28 350 C -15 355, 15 355, 28 350 L 26 330 C 15 335, -15 335, -26 330 Z" />

    <!-- T2 -->
    <path id="bone_t2_post" class="bone" data-name="Thoracic Vertebra T2" data-bone-id="spine-t2" d="M -30 353 L -46 348 L -46 358 L -30 363 M 30 353 L 46 348 L 46 358 L 30 363" fill="#e0e0e0" />
    <path id="bone_t2_body" class="bone" data-name="Thoracic Vertebra T2" data-bone-id="spine-t2"
        d="M -26 353 L -28 374 C -15 379, 15 379, 28 374 L 26 353 C 15 358, -15 358, -26 353 Z" />

    <!-- T3 -->
    <path id="bone_t3_post" class="bone" data-name="Thoracic Vertebra T3" data-bone-id="spine-t3" d="M -30 377 L -47 372 L -47 382 L -30 387 M 30 377 L 47 372 L 47 382 L 30 387" fill="#e0e0e0" />
    <path id="bone_t3_body" class="bone" data-name="Thoracic Vertebra T3" data-bone-id="spine-t3"
        d="M -27 377 L -29 398 C -15 403, 15 403, 29 398 L 27 377 C 15 382, -15 382, -27 377 Z" />

    <!-- T4 -->
    <path id="bone_t4_post" class="bone" data-name="Thoracic Vertebra T4" data-bone-id="spine-t4" d="M -30 401 L -48 396 L -48 406 L -30 411 M 30 401 L 48 396 L 48 406 L 30 411" fill="#e0e0e0" />
    <path id="bone_t4_body" class="bone" data-name="Thoracic Vertebra T4" data-bone-id="spine-t4"
        d="M -27 401 L -29 423 C -15 428, 15 428, 29 423 L 27 401 C 15 406, -15 406, -27 401 Z" />

    <!-- T5 -->
    <path id="bone_t5_post" class="bone" data-name="Thoracic Vertebra T5" data-bone-id="spine-t5" d="M -30 426 L -48 421 L -48 431 L -30 436 M 30 426 L 48 421 L 48 431 L 30 436" fill="#e0e0e0" />
    <path id="bone_t5_body" class="bone" data-name="Thoracic Vertebra T5" data-bone-id="spine-t5"
        d="M -28 426 L -30 448 C -15 453, 15 453, 30 448 L 28 426 C 15 431, -15 431, -28 426 Z" />

    <!-- T6 -->
    <path id="bone_t6_post" class="bone" data-name="Thoracic Vertebra T6" data-bone-id="spine-t6" d="M -30 451 L -48 446 L -48 456 L -30 461 M 30 451 L 48 446 L 48 456 L 30 461" fill="#e0e0e0" />
    <path id="bone_t6_body" class="bone" data-name="Thoracic Vertebra T6" data-bone-id="spine-t6"
        d="M -28 451 L -30 474 C -15 479, 15 479, 30 474 L 28 451 C 15 456, -15 456, -28 451 Z" />

    <!-- T7 -->
    <path id="bone_t7_post" class="bone" data-name="Thoracic Vertebra T7" data-bone-id="spine-t7" d="M -30 477 L -48 472 L -48 482 L -30 487 M 30 477 L 48 472 L 48 482 L 30 487" fill="#e0e0e0" />
    <path id="bone_t7_body" class="bone" data-name="Thoracic Vertebra T7" data-bone-id="spine-t7"
        d="M -29 477 L -31 500 C -15 505, 15 505, 31 500 L 29 477 C 15 482, -15 482, -29 477 Z" />

    <!-- T8 -->
    <path id="bone_t8_post" class="bone" data-name="Thoracic Vertebra T8" data-bone-id="spine-t8" d="M -30 503 L -48 498 L -48 508 L -30 513 M 30 503 L 48 498 L 48 508 L 30 513" fill="#e0e0e0" />
    <path id="bone_t8_body" class="bone" data-name="Thoracic Vertebra T8" data-bone-id="spine-t8"
        d="M -29 503 L -31 526 C -15 531, 15 531, 31 526 L 29 503 C 15 508, -15 508, -29 503 Z" />

    <!-- T9 -->
    <path id="bone_t9_post" class="bone" data-name="Thoracic Vertebra T9" data-bone-id="spine-t9" d="M -30 529 L -48 524 L -48 534 L -30 539 M 30 529 L 48 524 L 48 534 L 30 539" fill="#e0e0e0" />
    <path id="bone_t9_body" class="bone" data-name="Thoracic Vertebra T9" data-bone-id="spine-t9"
        d="M -30 529 L -32 552 C -15 557, 15 557, 32 552 L 30 529 C 15 534, -15 534, -30 529 Z" />

    <!-- T10 -->
    <path id="bone_t10_post" class="bone" data-name="Thoracic Vertebra T10" data-bone-id="spine-t10" d="M -32 555 L -50 550 L -50 560 L -32 565 M 32 555 L 50 550 L 50 560 L 32 565" fill="#e0e0e0" />
    <path id="bone_t10_body" class="bone" data-name="Thoracic Vertebra T10" data-bone-id="spine-t10"
        d="M -31 555 L -33 578 C -16 583, 16 583, 33 578 L 31 555 C 16 560, -16 560, -31 555 Z" />

    <!-- T11 -->
    <path id="bone_t11_post" class="bone" data-name="Thoracic Vertebra T11" data-bone-id="spine-t11" d="M -34 581 L -52 576 L -52 586 L -34 591 M 34 581 L 52 576 L 52 586 L 34 591" fill="#e0e0e0" />
    <path id="bone_t11_body" class="bone" data-name="Thoracic Vertebra T11" data-bone-id="spine-t11"
        d="M -32 581 L -34 605 C -16 610, 16 610, 34 605 L 32 581 C 16 586, -16 586, -32 581 Z" />

    <!-- T12 -->
    <path id="bone_t12_post" class="bone" data-name="Thoracic Vertebra T12" data-bone-id="spine-t12" d="M -36 608 L -54 603 L -54 613 L -36 618 M 36 608 L 54 603 L 54 613 L 36 618" fill="#e0e0e0" />
    <path id="bone_t12_body" class="bone" data-name="Thoracic Vertebra T12" data-bone-id="spine-t12"
        d="M -34 608 L -36 632 C -18 637, 18 637, 36 632 L 34 608 C 18 613, -18 613, -34 608 Z" />


    <!-- ═══════════════════════════════════════════════════
         LUMBAR VERTEBRAE (L1-L5)
         Y Range: 640 - 860
         NARROWER WIDTH (+/- 25 to 30)
         REALISTIC GAPS (~6-8 units)
    ═══════════════════════════════════════════════════ -->

    <!-- L1 (Y: 640) -->
    <!-- Width reduced from 36 to 25 -->
    <path id="bone_l1_post" class="bone" data-name="Lumbar Vertebra L1" data-bone-id="spine-l1" d="M -22 640 L -50 645 L -50 655 L -22 660 M 22 640 L 50 645 L 50 655 L 22 660" fill="#e0e0e0" />
    <path id="bone_l1_body" class="bone" data-name="Lumbar Vertebra L1" data-bone-id="spine-l1"
        d="M -25 640 L -26 675 C -15 682, 15 682, 26 675 L 25 640 C 15 645, -15 645, -25 640 Z" />

    <!-- L2 (Y: 683, Gap 8) -->
    <path id="bone_l2_post" class="bone" data-name="Lumbar Vertebra L2" data-bone-id="spine-l2" d="M -23 683 L -52 688 L -52 698 L -23 703 M 23 683 L 52 688 L 52 698 L 23 703" fill="#e0e0e0" />
    <path id="bone_l2_body" class="bone" data-name="Lumbar Vertebra L2" data-bone-id="spine-l2"
        d="M -26 683 L -27 718 C -15 725, 15 725, 27 718 L 26 683 C 15 688, -15 688, -26 683 Z" />

    <!-- L3 (Y: 726, Gap 8) -->
    <path id="bone_l3_post" class="bone" data-name="Lumbar Vertebra L3" data-bone-id="spine-l3" d="M -24 726 L -54 731 L -54 741 L -24 746 M 24 726 L 54 731 L 54 741 L 24 746" fill="#e0e0e0" />
    <path id="bone_l3_body" class="bone" data-name="Lumbar Vertebra L3" data-bone-id="spine-l3"
        d="M -27 726 L -28 761 C -16 768, 16 768, 28 761 L 27 726 C 16 731, -16 731, -27 726 Z" />

    <!-- L4 (Y: 769, Gap 8) -->
    <path id="bone_l4_post" class="bone" data-name="Lumbar Vertebra L4" data-bone-id="spine-l4" d="M -25 769 L -56 774 L -56 784 L -25 789 M 25 769 L 56 774 L 56 784 L 25 789" fill="#e0e0e0" />
    <path id="bone_l4_body" class="bone" data-name="Lumbar Vertebra L4" data-bone-id="spine-l4"
        d="M -28 769 L -30 804 C -18 811, 18 811, 30 804 L 28 769 C 18 774, -18 774, -28 769 Z" />

    <!-- L5 (Y: 812, Gap 8) -->
    <!-- Widens slightly to meet Sacrum -->
    <path id="bone_l5_post" class="bone" data-name="Lumbar Vertebra L5" data-bone-id="spine-l5" d="M -26 812 L -58 817 L -58 827 L -26 832 M 26 812 L 58 817 L 58 827 L 26 832" fill="#e0e0e0" />
    <path id="bone_l5_body" class="bone" data-name="Lumbar Vertebra L5" data-bone-id="spine-l5"
        d="M -30 812 L -32 855 C -18 862, 18 862, 32 855 L 30 812 C 18 817, -18 817, -30 812 Z" />


    <!-- ═══════════════════════════════════════════════════
         SACRUM & COCCYX (Refined v8 - Medical Accuracy)
         Y Range: 832 - 1000
    ═══════════════════════════════════════════════════ -->

    <!-- SACRUM 
         Shape anatomy: triangular, concave anteriorly.
         - Promontory: Central prominence at top (articulate with L5).
         - Alae: Wings extending laterally.
         - Foramina: 4 pairs of holes.
    -->
    <path id="bone_sacrum" class="bone" data-name="Sacrum" data-bone-id="spine-sacrum"
        d="M -25 835 
           L -25 825 L -15 828 L -15 835
           Q 0 840, 15 835 
           L 15 828 L 25 825 L 25 835
           Q 45 835, 60 845 
           Q 65 860, 50 900
           L 40 930
           L 20 950
           L 0 960 
           L -20 950
           L -40 930
           Q -50 900, -65 860
           Q -45 835, -25 835
           Z
           M -20 855 A 3 4 0 1 0 -20 863 A 3 4 0 1 0 -20 855 Z
           M 20 855 A 3 4 0 1 0 20 863 A 3 4 0 1 0 20 855 Z
           M -18 875 A 2.5 3.5 0 1 0 -18 882 A 2.5 3.5 0 1 0 -18 875 Z
           M 18 875 A 2.5 3.5 0 1 0 18 882 A 2.5 3.5 0 1 0 18 875 Z
           M -15 895 A 2 3 0 1 0 -15 901 A 2 3 0 1 0 -15 895 Z
           M 15 895 A 2 3 0 1 0 15 901 A 2 3 0 1 0 15 895 Z
           M -12 915 A 1.5 2 0 1 0 -12 919 A 1.5 2 0 1 0 -12 915 Z
           M 12 915 A 1.5 2 0 1 0 12 919 A 1.5 2 0 1 0 12 915 Z" 
           fill-rule="evenodd" fill="#d8d8d8" />

    <!-- COCCYX (Tailbone) 
         Segmented into 4 small vertebrae (Co1-Co4)
    -->
    <path id="bone_coccyx" class="bone" data-name="Coccyx" data-bone-id="spine-coccyx"
        d="M -10 962 Q 0 960, 10 962 L 8 972 Q 0 975, -8 972 Z
           M -6 974 Q 0 976, 6 974 L 5 982 Q 0 985, -5 982 Z
           M -4 984 Q 0 986, 4 984 L 3 990 Q 0 992, -3 990 Z
           M -2 992 Q 0 993, 2 992 L 0 998 L -2 992 Z" 
        fill="#d0d0d0" />

    <!-- Shadows for Depth (Kyphosis & Lordosis) -->
    <g id="spine_shadows">
        <!-- Thoracic Kyphosis Shadow (Pushing mid-spine back) -->
        <path class="bone-shadow" d="M -20 350 L -20 620 Q 0 630 20 620 L 20 350 Q 0 340 -20 350 Z" opacity="0.1" />
        
        <!-- Cervical Depth (Under chin) -->
        <path class="bone-shadow" d="M -15 200 L -15 240 Q 0 250 15 240 L 15 200 Z" />

        <!-- Intervertebral Disc Shadows (Sampled for depth) -->
        <path class="bone-shadow" d="M -25 675 Q 0 685 25 675 L 25 683 Q 0 693 -25 683 Z" /> <!-- L1-L2 -->
        <path class="bone-shadow" d="M -26 718 Q 0 728 26 718 L 26 726 Q 0 736 -26 726 Z" /> <!-- L2-L3 -->
        <path class="bone-shadow" d="M -27 761 Q 0 771 27 761 L 27 769 Q 0 779 -27 769 Z" /> <!-- L3-L4 -->
        <path class="bone-shadow" d="M -28 804 Q 0 814 28 804 L 28 812 Q 0 822 -28 812 Z" /> <!-- L4-L5 -->
    </g>
`;
