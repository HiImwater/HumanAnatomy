export const thoracicCageSVG = `
    <!--
        RIBS (Costae) - Anatomically Enhanced (v2)
        Adjusted to match new Taller/Narrower Spine.
        Rib Necks thickened (~10mm).
        Y-Positions synced with T1-T12 (330 - 628).
    -->

    <!-- Rib 1 (T1) -->
    <!-- Start Y: 330. Neck thick. -->
    <path id="bone_rib_left_01" class="bone" data-name="Left Rib 1" data-medical-name="Costa I Sinister"
        d="M -20 335 L -20 325 
           L -30 323
           C -40 323, -50 327, -60 333
           C -70 340, -72 347, -70 355
           C -65 363, -50 367, -35 365
           L -26 359
           C -35 365, -45 369, -60 369
           C -75 369, -85 363, -88 353
           C -90 343, -80 333, -70 325
           C -60 317, -40 315, -20 315
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_01" class="bone" data-name="Right Rib 1" data-medical-name="Costa I Dexter"
        d="M 20 335 L 20 325
           L 30 323
           C 40 323, 50 327, 60 333
           C 70 340, 72 347, 70 355
           C 65 363, 50 367, 35 365
           L 26 359
           C 35 365, 45 369, 60 369
           C 75 369, 85 363, 88 353
           C 90 343, 80 333, 70 325
           C 60 317, 40 315, 20 315
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 2 (T2) - Y: 355 -->
    <path id="bone_rib_left_02" class="bone" data-name="Left Rib 2" data-medical-name="Costa II Sinister"
        d="M -20 360 L -20 350
           L -32 348
           C -45 350, -65 360, -80 375
           C -90 385, -95 395, -90 405
           C -85 412, -70 415, -50 415
           L -24 408
           C -35 412, -55 416, -75 416
           C -95 418, -105 410, -108 395
           C -110 385, -100 370, -80 360
           C -65 350, -40 348, -20 345
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_02" class="bone" data-name="Right Rib 2" data-medical-name="Costa II Dexter"
        d="M 20 360 L 20 350
           L 32 348
           C 45 350, 65 360, 80 375
           C 90 385, 95 395, 90 405
           C 85 412, 70 415, 50 415
           L 24 408
           C 35 412, 55 416, 75 416
           C 95 418, 105 410, 108 395
           C 110 385, 100 370, 80 360
           C 65 350, 40 348, 20 345
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 3 (T3) - Y: 380 -->
    <path id="bone_rib_left_03" class="bone" data-name="Left Rib 3" data-medical-name="Costa III Sinister"
        d="M -20 385 L -20 375
           C -38 377, -55 387, -75 400
           C -90 413, -105 430, -100 445
           C -98 453, -85 457, -60 457
           L -24 450
           C -40 457, -65 460, -90 460
           C -110 460, -115 445, -112 435
           C -110 420, -95 403, -75 390
           C -60 380, -35 373, -20 370
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_03" class="bone" data-name="Right Rib 3" data-medical-name="Costa III Dexter"
        d="M 20 385 L 20 375
           C 38 377, 55 387, 75 400
           C 90 413, 105 430, 100 445
           C 98 453, 85 457, 60 457
           L 24 450
           C 40 457, 65 460, 90 460
           C 110 460, 115 445, 112 435
           C 110 420, 95 403, 75 390
           C 60 380, 35 373, 20 370
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 4 (T4) - Y: 405 -->
    <path id="bone_rib_left_04" class="bone" data-name="Left Rib 4" data-medical-name="Costa IV Sinister"
        d="M -20 410 L -20 400
           C -38 402, -60 415, -85 430
           C -105 445, -115 465, -110 480
           C -105 488, -85 492, -60 492
           L -22 486
           C -45 494, -75 496, -100 496
           C -120 496, -125 480, -120 470
           C -120 450, -105 432, -85 418
           C -65 408, -40 398, -20 395
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_04" class="bone" data-name="Right Rib 4" data-medical-name="Costa IV Dexter"
        d="M 20 410 L 20 400
           C 38 402, 60 415, 85 430
           C 105 445, 115 465, 110 480
           C 105 488, 85 492, 60 492
           L 22 486
           C 45 494, 75 496, 100 496
           C 120 496, 125 480, 120 470
           C 120 450, 105 432, 85 418
           C 65 408, 40 398, 20 395
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 5 (T5) - Y: 431 -->
    <path id="bone_rib_left_05" class="bone" data-name="Left Rib 5" data-medical-name="Costa V Sinister"
        d="M -20 436 L -20 426
           C -42 428, -70 441, -95 458
           C -115 476, -130 496, -125 514
           C -122 524, -100 528, -70 528
           L -22 518
           C -50 528, -80 532, -110 532
           C -135 532, -145 516, -140 506
           C -138 486, -120 466, -100 451
           C -75 436, -45 424, -20 421
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_05" class="bone" data-name="Right Rib 5" data-medical-name="Costa V Dexter"
        d="M 20 436 L 20 426
           C 42 428, 70 441, 95 458
           C 115 476, 130 496, 125 514
           C 122 524, 100 528, 70 528
           L 22 518
           C 50 528, 80 532, 110 532
           C 135 532, 145 516, 140 506
           C 138 486, 120 466, 100 451
           C 75 436, 45 424, 20 421
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 6 (T6) - Y: 457 -->
    <path id="bone_rib_left_06" class="bone" data-name="Left Rib 6" data-medical-name="Costa VI Sinister"
        d="M -20 462 L -20 452
           C -45 454, -80 470, -105 490
           C -125 507, -138 527, -132 547
           C -130 557, -105 560, -75 560
           L -18 548
           C -50 562, -85 566, -110 566
           C -140 566, -150 552, -148 540
           C -145 517, -130 494, -105 477
           C -75 462, -45 450, -20 447
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_06" class="bone" data-name="Right Rib 6" data-medical-name="Costa VI Dexter"
        d="M 20 462 L 20 452
           C 45 454, 80 470, 105 490
           C 125 507, 138 527, 132 547
           C 130 557, 105 560, 75 560
           L 18 548
           C 50 562, 85 566, 110 566
           C 140 566, 150 552, 148 540
           C 145 517, 130 494, 105 477
           C 75 462, 45 450, 20 447
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 7 (T7) - Y: 484 -->
    <path id="bone_rib_left_07" class="bone" data-name="Left Rib 7" data-medical-name="Costa VII Sinister"
        d="M -20 489 L -20 479
           C -50 481, -85 499, -115 521
           C -135 539, -145 564, -140 584
           C -135 599, -105 604, -70 604
           L -14 589
           C -45 604, -85 609, -110 609
           C -145 609, -155 599, -158 579
           C -155 557, -140 534, -115 514
           C -85 494, -50 477, -20 474
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_07" class="bone" data-name="Right Rib 7" data-medical-name="Costa VII Dexter"
        d="M 20 489 L 20 479
           C 50 481, 85 499, 115 521
           C 135 539, 145 564, 140 584
           C 135 599, 105 604, 70 604
           L 14 589
           C 45 604, 85 609, 110 609
           C 145 609, 155 599, 158 579
           C 155 557, 140 534, 115 514
           C 85 494, 50 477, 20 474
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 8 (False) (T8) - Y: 512 -->
    <path id="bone_rib_left_08" class="bone" data-name="Left Rib 8" data-medical-name="Costa VIII Sinister"
        d="M -20 517 L -20 507
           C -50 509, -85 525, -110 545
           C -130 562, -145 582, -140 602
           C -135 617, -100 622, -65 622
           C -50 622, -35 617, -22 612
           L -20 617
           C -35 625, -60 629, -75 629
           C -110 629, -140 622, -148 602
           C -152 577, -135 552, -110 535
           C -85 519, -50 505, -20 502
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_08" class="bone" data-name="Right Rib 8" data-medical-name="Costa VIII Dexter"
        d="M 20 517 L 20 507
           C 50 509, 85 525, 110 545
           C 130 562, 145 582, 140 602
           C 135 617, 100 622, 65 622
           C 50 622, 35 617, 22 612
           L 20 617
           C 35 625, 60 629, 75 629
           C 110 629, 140 622, 148 602
           C 152 577, 135 552, 110 535
           C 85 519, 50 505, 20 502
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 9 (False) (T9) - Y: 540 -->
    <path id="bone_rib_left_09" class="bone" data-name="Left Rib 9" data-medical-name="Costa IX Sinister"
        d="M -20 545 L -20 535
           C -45 537, -75 550, -95 570
           C -115 587, -128 605, -125 623
           C -120 635, -95 640, -70 640
           C -55 640, -45 635, -32 627
           L -30 631
           C -45 640, -65 645, -80 645
           C -110 645, -132 633, -135 617
           C -138 595, -120 573, -95 557
           C -75 543, -45 533, -20 530
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_09" class="bone" data-name="Right Rib 9" data-medical-name="Costa IX Dexter"
        d="M 20 545 L 20 535
           C 45 537, 75 550, 95 570
           C 115 587, 128 605, 125 623
           C 120 635, 95 640, 70 640
           C 55 640, 45 635, 32 627
           L 30 631
           C 45 640, 65 645, 80 645
           C 110 645, 132 633, 135 617
           C 138 595, 120 573, 95 557
           C 75 543, 45 533, 20 530
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 10 (False) (T10) - Y: 569 -->
    <path id="bone_rib_left_10" class="bone" data-name="Left Rib 10" data-medical-name="Costa X Sinister"
        d="M -20 574 L -20 564
           C -40 566, -65 579, -85 596
           C -100 609, -115 626, -112 642
           C -110 649, -95 652, -75 652
           C -60 652, -50 646, -40 639
           L -38 642
           C -50 649, -70 654, -82 654
           C -105 654, -120 642, -125 629
           C -125 614, -105 594, -85 579
           C -65 566, -45 564, -20 559
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_10" class="bone" data-name="Right Rib 10" data-medical-name="Costa X Dexter"
        d="M 20 574 L 20 564
           C 40 566, 65 579, 85 596
           C 100 609, 115 626, 112 642
           C 110 649, 95 652, 75 652
           C 60 652, 50 646, 40 639
           L 38 642
           C 50 649, 70 654, 82 654
           C 105 654, 120 642, 125 629
           C 125 614, 105 594, 85 579
           C 65 566, 45 564, 20 559
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 11 (Floating) (T11) - Y: 598 -->
    <path id="bone_rib_left_11" class="bone" data-name="Left Rib 11" data-medical-name="Costa XI Sinister"
        d="M -20 603 L -20 593
           C -35 595, -50 603, -65 613
           C -75 623, -82 633, -78 643
           C -75 648, -68 648, -60 648
           L -58 651
           C -70 653, -85 651, -90 638
           C -95 623, -80 608, -65 598
           C -50 591, -35 591, -20 591
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_11" class="bone" data-name="Right Rib 11" data-medical-name="Costa XI Dexter"
        d="M 20 603 L 20 593
           C 35 595, 50 603, 65 613
           C 75 623, 82 633, 78 643
           C 75 648, 68 648, 60 648
           L 58 651
           C 70 653, 85 651, 90 638
           C 95 623, 80 608, 65 598
           C 50 591, 35 591, 20 591
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!-- Rib 12 (Floating) (T12) - Y: 628 -->
    <path id="bone_rib_left_12" class="bone" data-name="Left Rib 12" data-medical-name="Costa XII Sinister"
        d="M -20 633 L -20 623
           C -30 623, -42 628, -55 638
           C -62 645, -65 653, -60 658
           L -58 659
           C -65 653, -65 643, -58 633
           C -48 623, -32 621, -20 621
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
    <path id="bone_rib_right_12" class="bone" data-name="Right Rib 12" data-medical-name="Costa XII Dexter"
        d="M 20 633 L 20 623
           C 30 623, 42 628, 55 638
           C 62 645, 65 653, 60 658
           L 58 659
           C 65 653, 65 643, 58 633
           C 48 623, 32 621, 20 621
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <!--
        STERNUM (Elongated)
        Manubrium: 340 (Between T1-T2)
        Body: 387 -> 530
        Xiphoid: 535 -> 560
    -->
    <path id="bone_sternum_manubrium" class="bone" data-bone-id="bone_sternum" data-name="Manubrium of Sternum"
        data-medical-name="Manubrium Sterni" d="M -38 340
           C -22 345, 22 345, 38 340
           L 48 352
           L 42 372
           L 32 385
           L -32 385
           L -42 372
           L -48 352
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <path id="bone_sternum_body" class="bone" data-bone-id="bone_sternum" data-name="Body of Sternum" data-medical-name="Corpus Sterni"
        d="M -28 387
           L 28 387
           C 32 420, 35 450, 30 480
           C 26 510, 24 530, 18 550
           L -18 550
           C -24 530, -26 510, -30 480
           C -35 450, -32 420, -28 387
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />

    <path id="bone_sternum_xiphoid" class="bone" data-bone-id="bone_sternum" data-name="Xiphoid Process"
        data-medical-name="Processus Xiphoideus" d="M -18 552
           L 18 552
           L 12 570
           L 0 580
           L -12 570
           Z"
        fill="#e8dcc0" stroke="#8b7b6b" stroke-width="1" />
`;
