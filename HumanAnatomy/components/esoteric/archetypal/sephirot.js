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
    <line x1="0" y1="50" x2="0" y2="450" stroke="rgba(255,255,255,0.4)" stroke-width="2" /> <!-- Kether to Tiphareth -->
    <line x1="0" y1="450" x2="0" y2="950" stroke="rgba(255,255,255,0.4)" stroke-width="2" /> <!-- Tiphareth to Yesod -->
    <line x1="0" y1="950" x2="0" y2="1700" stroke="rgba(255,255,255,0.4)" stroke-width="2" /> <!-- Yesod to Malkuth -->

    <!-- Side Pillars -->
    <line x1="-60" y1="100" x2="-120" y2="300" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Chokmah to Chesed -->
    <line x1="-120" y1="300" x2="-100" y2="850" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Chesed to Netzach -->
    <line x1="60" y1="100" x2="120" y2="300" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Binah to Geburah -->
    <line x1="120" y1="300" x2="100" y2="850" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Geburah to Hod -->

    <!-- Cross Paths (Horizontal) -->
    <line x1="-60" y1="100" x2="60" y2="100" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Chokmah to Binah -->
    <line x1="-120" y1="300" x2="120" y2="300" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Chesed to Geburah -->
    <line x1="-100" y1="850" x2="100" y2="850" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Netzach to Hod -->

    <!-- Diagnosis/Triangular Paths -->
    <line x1="0" y1="50" x2="-60" y2="100" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Kether to Chokmah -->
    <line x1="0" y1="50" x2="60" y2="100" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Kether to Binah -->
    <line x1="-60" y1="100" x2="0" y2="450" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Chokmah to Tiphareth -->
    <line x1="60" y1="100" x2="0" y2="450" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Binah to Tiphareth -->
    
    <line x1="-120" y1="300" x2="0" y2="450" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Chesed to Tiphareth -->
    <line x1="120" y1="300" x2="0" y2="450" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Geburah to Tiphareth -->
    
    <line x1="0" y1="450" x2="-100" y2="850" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Tiphareth to Netzach -->
    <line x1="0" y1="450" x2="100" y2="850" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Tiphareth to Hod -->
    
    <line x1="-100" y1="850" x2="0" y2="950" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Netzach to Yesod -->
    <line x1="100" y1="850" x2="0" y2="950" stroke="rgba(255,255,255,0.3)" stroke-width="2" /> <!-- Hod to Yesod -->

    <!-- Spheres (Sefirot) -->
    <!-- Kether (Crown) - White/Violet -->
    <circle cx="0" cy="50" r="25" fill="#FFFFFF" stroke="#E6E6FA" stroke-width="2" class="sephirot" data-name="Kether" data-medical-name="Crown" data-desc="The Crown. Pure consciousness." filter="url(#glow-kether)" opacity="0.9" />

    <!-- Chokmah (R Brain) - Indigo -->
    <circle cx="-60" cy="100" r="20" fill="#4B0082" stroke="#8A2BE2" stroke-width="2" class="sephirot" data-name="Chokmah" data-medical-name="Right Hemisphere" data-desc="Wisdom. Intuition." opacity="0.9" />

    <!-- Binah (L Brain) - Indigo -->
    <circle cx="60" cy="100" r="20" fill="#4B0082" stroke="#8A2BE2" stroke-width="2" class="sephirot" data-name="Binah" data-medical-name="Left Hemisphere" data-desc="Understanding. Logic." opacity="0.9" />

    <!-- Chesed (R Arm) - Sky Blue -->
    <circle cx="-120" cy="300" r="22" fill="#87CEEB" stroke="#ADD8E6" stroke-width="2" class="sephirot" data-name="Chesed" data-medical-name="Right Shoulder" data-desc="Mercy. Expansion." opacity="0.9" />

    <!-- Geburah (L Arm) - Sky Blue -->
    <circle cx="120" cy="300" r="22" fill="#87CEEB" stroke="#ADD8E6" stroke-width="2" class="sephirot" data-name="Geburah" data-medical-name="Left Shoulder" data-desc="Severity. Restriction." opacity="0.9" />

    <!-- Tiphareth (Heart) - Emerald Green -->
    <circle cx="0" cy="450" r="30" fill="#50C878" stroke="#00FF7F" stroke-width="2" class="sephirot" data-name="Tiphareth" data-medical-name="Heart Center" data-desc="Beauty. Balance. The Self." opacity="1.0" filter="url(#glow-kether)" />

    <!-- Netzach (R Hip) - Yellow -->
    <circle cx="-100" cy="850" r="22" fill="#FFD700" stroke="#FFFF00" stroke-width="2" class="sephirot" data-name="Netzach" data-medical-name="Right Hip" data-desc="Victory. Endurance." opacity="0.9" />

    <!-- Hod (L Hip) - Yellow -->
    <circle cx="100" cy="850" r="22" fill="#FFD700" stroke="#FFFF00" stroke-width="2" class="sephirot" data-name="Hod" data-medical-name="Left Hip" data-desc="Splendor. Intellect." opacity="0.9" />

    <!-- Yesod (Genitals) - Vibrnat Orange -->
    <circle cx="0" cy="950" r="25" fill="#FF4500" stroke="#FFA500" stroke-width="2" class="sephirot" data-name="Yesod" data-medical-name="Sacral Center" data-desc="Foundation. Sexual/Vital Energy." opacity="0.9" />

    <!-- Malkuth (Feet) - Deep Red -->
    <circle cx="0" cy="1700" r="30" fill="#8B0000" stroke="#FF0000" stroke-width="2" class="sephirot" data-name="Malkuth" data-medical-name="Feet/Earth" data-desc="Kingdom. Physical Reality." opacity="0.9" />
</g>
`;
