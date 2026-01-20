export const cartilageLayersSVG = `
    <g id="group-cartilage" class="layer-group">
        <defs>
            <linearGradient id="cartilage_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#f0f8ff;stop-opacity:0.9" /> <!-- AliceBlue -->
                <stop offset="100%" style="stop-color:#e0ffff;stop-opacity:0.8" /> <!-- LightCyan -->
            </linearGradient>
        </defs>

        <!-- 
            COSTAL CARTILAGE
            Connects ribs to sternum (Ribs 1-7 direct, 8-10 indirect)
            Approximation for visual distinction.
        -->
        <g id="cartilage_costal" class="cartilage" fill="url(#cartilage_grad)">
            <!-- Left Side -->
            <path id="cart_costal_1_l" d="M -20 230 L -45 235 L -45 245 L -20 240 Z" />
            <path id="cart_costal_2_l" d="M -20 255 L -55 265 L -55 275 L -20 265 Z" />
            <path id="cart_costal_3_l" d="M -20 280 L -60 300 L -60 310 L -20 290 Z" />
            <path id="cart_costal_4_l" d="M -20 305 L -65 335 L -65 345 L -20 315 Z" />
            <path id="cart_costal_5_l" d="M -15 330 L -60 370 L -60 380 L -15 340 Z" />
            <path id="cart_costal_arch_l" d="M -15 355 L -50 400 L -40 400 L -10 365 Z" />

            <!-- Right Side -->
            <path id="cart_costal_1_r" d="M 20 230 L 45 235 L 45 245 L 20 240 Z" />
            <path id="cart_costal_2_r" d="M 20 255 L 55 265 L 55 275 L 20 265 Z" />
            <path id="cart_costal_3_r" d="M 20 280 L 60 300 L 60 310 L 20 290 Z" />
            <path id="cart_costal_4_r" d="M 20 305 L 65 335 L 65 345 L 20 315 Z" />
            <path id="cart_costal_5_r" d="M 15 330 L 60 370 L 60 380 L 15 340 Z" />
            <path id="cart_costal_arch_r" d="M 15 355 L 50 400 L 40 400 L 10 365 Z" />
        </g>

        <!-- 
            NASAL CARTILAGE
            Septal and Alar cartilages.
        -->
        <g id="cartilage_nasal" class="cartilage" fill="url(#cartilage_grad)">
            <path id="cart_nasal_septum" d="M -2 130 L 2 130 L 5 150 L -5 150 Z" />
            <path id="cart_nasal_alar_l" d="M -5 145 Q -15 145, -18 140 L -12 130 L -5 135 Z" />
            <path id="cart_nasal_alar_r" d="M 5 145 Q 15 145, 18 140 L 12 130 L 5 135 Z" />
        </g>

        <!-- 
            EAR CARTILAGE (Auricular)
        -->
        <g id="cartilage_ear" class="cartilage" fill="url(#cartilage_grad)" opacity="0.8">
            <path id="cart_ear_l" d="M -85 70 C -95 65, -100 80, -95 100 C -92 110, -90 105, -85 100 Z" />
            <path id="cart_ear_r" d="M 85 70 C 95 65, 100 80, 95 100 C 92 110, 90 105, 85 100 Z" />
        </g>

        <!-- 
            MENISCI (Knee)
        -->
        <g id="cartilage_knee" class="cartilage" fill="url(#cartilage_grad)">
            <!-- Left Knee (Right of viewer) -->
            <path id="cart_meniscus_med_l" d="M -15 1120 L -30 1120 L -30 1125 L -15 1125 Z" />
            <path id="cart_meniscus_lat_l" d="M -40 1120 L -55 1120 L -55 1125 L -40 1125 Z" />
            
            <!-- Right Knee (Left of viewer) -->
            <path id="cart_meniscus_med_r" d="M 15 1120 L 30 1120 L 30 1125 L 15 1125 Z" />
            <path id="cart_meniscus_lat_r" d="M 40 1120 L 55 1120 L 55 1125 L 40 1125 Z" />
        </g>

        <!-- 
            INTERVERTEBRAL DISCS (Simplified)
            Representative discs in lumbar region.
        -->
        <g id="cartilage_discs" class="cartilage" fill="url(#cartilage_grad)" opacity="0.7">
            <rect x="-15" y="620" width="30" height="5" rx="2" />
            <rect x="-15" y="650" width="30" height="5" rx="2" />
            <rect x="-15" y="680" width="30" height="5" rx="2" />
        </g>
    </g>
`;
