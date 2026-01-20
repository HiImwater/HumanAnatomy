export const fatLayersSVG = `
    <g id="group-fat" class="layer-group">
        <!-- 
            SUBCUTANEOUS FAT (General Layer)
            Represented as smoothed overlays on key areas.
        -->
        <!-- Abdominal Fat Pad -->
        <path id="fat_abdominal" class="fat-pad" data-name="Abdominal Subcutaneous Fat" 
            d="M -50 500 Q 0 490, 50 500 Q 60 650, 45 750 Q 0 760, -45 750 Q -60 650, -50 500 Z" 
            fill="#ffeebb" opacity="0.3" stroke="none" filter="blur(2px)" />

        <!-- Buccal Fat Pad (Cheek) -->
        <ellipse id="fat_buccal_l" cx="-55" cy="150" rx="10" ry="15" fill="#ffeebb" opacity="0.4" filter="blur(1px)">
            <title>Buccal Fat Pad</title>
        </ellipse>
        <ellipse id="fat_buccal_r" cx="55" cy="150" rx="10" ry="15" fill="#ffeebb" opacity="0.4" filter="blur(1px)">
            <title>Buccal Fat Pad</title>
        </ellipse>

        <!-- Infrapatellar Fat Pad (Knee) -->
        <path id="fat_infrapatellar_l" d="M -55 1130 Q -50 1140, -45 1130 L -50 1125 Z" fill="#ffffcc" opacity="0.6" />
        <path id="fat_infrapatellar_r" d="M 55 1130 Q 50 1140, 45 1130 L 50 1125 Z" fill="#ffffcc" opacity="0.6" />
    </g>
`;
