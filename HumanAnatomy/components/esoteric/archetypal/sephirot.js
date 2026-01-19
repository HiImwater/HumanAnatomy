export const sephirotSVG = `
<defs>
    <!-- Glow Filters for Sephirot -->
    <filter id="glow-kether" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
</defs>
<g class="sephirot-layer">
    <!-- Paths (22 Connectors) -->
    <!-- Central Pillar -->
    <line x1="0" y1="-30" x2="0" y2="470" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Kether to Tiphareth -->
    <line x1="0" y1="470" x2="0" y2="1000" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Tiphareth to Yesod -->
    <line x1="0" y1="1000" x2="0" y2="1920" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Yesod to Malkuth -->

    <!-- Side Pillars -->
    <line x1="-60" y1="110" x2="-160" y2="350" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Chokmah to Chesed -->
    <line x1="-160" y1="350" x2="-130" y2="900" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Chesed to Netzach -->
    <line x1="60" y1="110" x2="160" y2="350" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Binah to Geburah -->
    <line x1="160" y1="350" x2="130" y2="900" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Geburah to Hod -->

    <!-- Cross Paths (Horizontal) -->
    <line x1="-60" y1="110" x2="60" y2="110" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Chokmah to Binah -->
    <line x1="-160" y1="350" x2="160" y2="350" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Chesed to Geburah -->
    <line x1="-130" y1="900" x2="130" y2="900" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Netzach to Hod -->

    <!-- Diagnosis/Triangular Paths -->
    <line x1="0" y1="-30" x2="-60" y2="110" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Kether to Chokmah -->
    <line x1="0" y1="-30" x2="60" y2="110" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Kether to Binah -->
    <line x1="-60" y1="110" x2="0" y2="470" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Chokmah to Tiphareth -->
    <line x1="60" y1="110" x2="0" y2="470" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Binah to Tiphareth -->
    
    <line x1="-160" y1="350" x2="0" y2="470" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Chesed to Tiphareth -->
    <line x1="160" y1="350" x2="0" y2="470" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Geburah to Tiphareth -->
    
    <line x1="0" y1="470" x2="-130" y2="900" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Tiphareth to Netzach -->
    <line x1="0" y1="470" x2="130" y2="900" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Tiphareth to Hod -->
    
    <line x1="-130" y1="900" x2="0" y2="1000" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Netzach to Yesod -->
    <line x1="130" y1="900" x2="0" y2="1000" stroke="rgba(255,255,255,0.8)" stroke-width="3" /> <!-- Hod to Yesod -->

    <!-- Spheres (Sefirot) -->
    <!-- Kether (Crown) - White/Violet -->
    <circle cx="0" cy="-30" r="25" fill="#FFFFFF" stroke="#E6E6FA" stroke-width="3" class="sephirot" data-name="Kether" data-medical-name="Crown" data-desc="The Crown. Pure consciousness." filter="url(#glow-kether)" opacity="1.0" />

    <!-- Chokmah (R Brain) - Indigo -->
    <circle cx="-60" cy="110" r="20" fill="#4B0082" stroke="#8A2BE2" stroke-width="3" class="sephirot" data-name="Chokmah" data-medical-name="Right Hemisphere" data-desc="Wisdom. Intuition." opacity="1.0" />

    <!-- Binah (L Brain) - Indigo -->
    <circle cx="60" cy="110" r="20" fill="#4B0082" stroke="#8A2BE2" stroke-width="3" class="sephirot" data-name="Binah" data-medical-name="Left Hemisphere" data-desc="Understanding. Logic." opacity="1.0" />

    <!-- Chesed (R Arm) - Sky Blue -->
    <circle cx="-160" cy="350" r="22" fill="#87CEEB" stroke="#ADD8E6" stroke-width="3" class="sephirot" data-name="Chesed" data-medical-name="Right Shoulder" data-desc="Mercy. Expansion." opacity="1.0" />

    <!-- Geburah (L Arm) - Sky Blue -->
    <circle cx="160" cy="350" r="22" fill="#87CEEB" stroke="#ADD8E6" stroke-width="3" class="sephirot" data-name="Geburah" data-medical-name="Left Shoulder" data-desc="Severity. Restriction." opacity="1.0" />

    <!-- Tiphareth (Heart) - Emerald Green -->
    <circle cx="0" cy="470" r="30" fill="#50C878" stroke="#00FF7F" stroke-width="3" class="sephirot" data-name="Tiphareth" data-medical-name="Heart Center" data-desc="Beauty. Balance. The Self." opacity="1.0" filter="url(#glow-kether)" />

    <!-- Netzach (R Hip) - Yellow -->
    <circle cx="-130" cy="900" r="22" fill="#FFD700" stroke="#FFFF00" stroke-width="3" class="sephirot" data-name="Netzach" data-medical-name="Right Hip" data-desc="Victory. Endurance." opacity="1.0" />

    <!-- Hod (L Hip) - Yellow -->
    <circle cx="130" cy="900" r="22" fill="#FFD700" stroke="#FFFF00" stroke-width="3" class="sephirot" data-name="Hod" data-medical-name="Left Hip" data-desc="Splendor. Intellect." opacity="1.0" />

    <!-- Yesod (Genitals) - Vibrnat Orange -->
    <circle cx="0" cy="1000" r="25" fill="#FF4500" stroke="#FFA500" stroke-width="3" class="sephirot" data-name="Yesod" data-medical-name="Sacral Center" data-desc="Foundation. Sexual/Vital Energy." opacity="1.0" />

    <!-- Malkuth (Feet) - Deep Red -->
    <circle cx="0" cy="1920" r="30" fill="#8B0000" stroke="#FF0000" stroke-width="3" class="sephirot" data-name="Malkuth" data-medical-name="Feet/Earth" data-desc="Kingdom. Physical Reality." opacity="1.0" />
</g>
`;
