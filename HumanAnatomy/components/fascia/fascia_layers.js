export const fasciaLayersSVG = `
    <g id="group-fascia" class="layer-group">
        <defs>
            <marker id="arrow-fascia" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f0f0f0" />
            </marker>
        </defs>
        <!-- 
            FASCIA LATA (Thigh)
            Thick lateral band.
        -->
        <path id="fascia_lata_l" class="fascia" data-name="Fascia Lata (Ililotibial Tract)" 
            d="M -65 850 L -60 1100 L -80 1100 L -90 850 Z" opacity="0.3" fill="url(#fascia_grad)" />
        <path id="fascia_lata_r" class="fascia" data-name="Fascia Lata (Ililotibial Tract)" 
            d="M 65 850 L 60 1100 L 80 1100 L 90 850 Z" opacity="0.3" fill="url(#fascia_grad)" />

        <!-- 
            THORACOLUMBAR FASCIA (Back)
            Diamond shape in lower back.
        -->
        <path id="fascia_thoracolumbar" class="fascia" data-name="Thoracolumbar Fascia" 
            d="M 0 600 L 40 750 L 0 850 L -40 750 Z" opacity="0.4" fill="url(#fascia_grad)" />
            
        <!--
            RECTUS SHEATH (Abdomen)
        -->
         <path id="fascia_rectus_sheath" class="fascia" data-name="Rectus Sheath" 
            d="M -30 450 L 30 450 L 25 750 L -25 750 Z" opacity="0.2" fill="url(#fascia_grad)" />
    </g>
`;
