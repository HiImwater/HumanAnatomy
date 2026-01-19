export const koshasSVG = `
<defs>
    <!-- Annamaya (Physical) - Red (Earth) -->
    <filter id="kosha-annamaya">
        <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#FF0000" flood-opacity="0.8"/>
    </filter>

    <!-- Pranamaya (Energy) - Yellow (Water) -->
    <filter id="kosha-pranamaya">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="turbulence">
            <animate attributeName="baseFrequency" values="0.01;0.012;0.01" dur="12s" repeatCount="indefinite"/>
        </feTurbulence>
        <feDisplacementMap in="blur" in2="turbulence" scale="10" xChannelSelector="R" yChannelSelector="G"/>
        <!-- Preserve Yellow Color -->
    </filter>

    <!-- Manomaya (Mental) - Green (Fire) -->
    <filter id="kosha-manomaya">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur"/>
        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" result="turb">
             <animate attributeName="seed" values="1;100;1" dur="30s" repeatCount="indefinite"/>
        </feTurbulence>
        <feDisplacementMap in="blur" in2="turb" scale="20"/>
    </filter>

    <!-- Vijnanamaya (Wisdom) - Blue (Air) -->
    <filter id="kosha-vijnanamaya">
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur"/>
    </filter>

    <!-- Anandamaya (Bliss) - White/Gold -->
    <filter id="kosha-anandamaya">
        <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" seed="0">
            <animate attributeName="seed" values="0;100" dur="60s" repeatCount="indefinite"/>
        </feTurbulence>
        <feComposite operator="in" in2="blur"/>
        <feDropShadow dx="0" dy="0" stdDeviation="20" flood-color="#FFD700" flood-opacity="0.5"/>
    </filter>
    
    <path id="body-silhouette" d="
        M 0, -55
        C 50, -55 105, -25 105, 80
        C 105, 150 85, 190 60, 210
        
        C 70, 250 130, 310 200, 335
        C 215, 350 220, 380 220, 420
        C 220, 480 235, 600 255, 685
        C 265, 750 290, 850 320, 915
        
        C 340, 950 370, 980 370, 1050
        C 375, 1080 350, 1110 310, 1120
        C 280, 1130 200, 1100 200, 1060
        C 200, 1020 220, 950 240, 900
        
        L 180, 685
        L 175, 480
        C 175, 520 175, 489 175, 489
        L 145, 630
        
        C 150, 700 180, 750 180, 835
        C 180, 900 115, 1400 120, 1485
        C 125, 1550 135, 1650 140, 1690
        L 150, 1870
        
        L 145, 2050
        C 145, 2080 120, 2100 80, 2100
        C 40, 2100 20, 2080 20, 2000
        
        L 40, 1800
        L 50, 1485
        L 30, 1000
        
        L -30, 1000
        L -50, 1485
        L -40, 1800
        
        L -20, 2000
        C -20, 2080 -40, 2100 -80, 2100
        C -120, 2100 -145, 2080 -145, 2050
        L -150, 1870
        
        L -140, 1690
        C -135, 1650 -125, 1550 -120, 1485
        C -115, 1400 -180, 900 -180, 835
        C -180, 750 -150, 700 -145, 630
        L -175, 489
        C -175, 489 -175, 520 -175, 480
        L -180, 685
        L -240, 900
        C -220, 950 -200, 1020 -200, 1060
        C -200, 1100 -280, 1130 -310, 1120
        C -350, 1110 -375, 1080 -370, 1050
        C -370, 980 -340, 950 -320, 915
        C -290, 850 -265, 750 -255, 685
        C -235, 600 -220, 480 -220, 420
        C -220, 380 -215, 350 -200, 335
        C -130, 310 -70, 250 -60, 210
        C -85, 190 -105, 150 -105, 80
        C -105, -25 -50, -55 0, -55
        Z
    " />
</defs>

<g class="koshas-layer">
    <use href="#body-silhouette" class="kosha" data-name="Anandamaya Kosha" data-medical-name="Bliss Sheath" data-desc="The causal body. Pure bliss and spiritual connection." fill="#FFFFFF" stroke="none" transform="scale(2.0) translate(0, -250)" filter="url(#kosha-anandamaya)" opacity="0.6" />

    <!-- 4. Vijnanamaya (Wisdom) - Blue (Air) -->
    <use href="#body-silhouette" class="kosha" data-name="Vijnanamaya Kosha" data-medical-name="Intellect Sheath" data-desc="The convex of wisdom. Intuition and higher intellect." fill="#1E90FF" stroke="none" transform="scale(1.7) translate(0, -180)" filter="url(#kosha-vijnanamaya)" opacity="0.4" />

    <!-- 3. Manomaya (Mental) - Green (Fire) -->
    <use href="#body-silhouette" class="kosha" data-name="Manomaya Kosha" data-medical-name="Mental Sheath" data-desc="The mental body. Thoughts, emotions, and sensory perception." fill="#32CD32" stroke="none" transform="scale(1.4) translate(0, -100)" filter="url(#kosha-manomaya)" opacity="0.4" />

    <!-- 2. Pranamaya (Energy) - Yellow (Water) -->
    <use href="#body-silhouette" class="kosha" data-name="Pranamaya Kosha" data-medical-name="Vital Energy Sheath" data-desc="The energy body. Prana (life force) and breath." fill="#FFD700" stroke="none" transform="scale(1.15) translate(0, -40)" filter="url(#kosha-pranamaya)" opacity="0.5" />

    <!-- 1. Annamaya (Physical) - Red (Earth) -->
    <use href="#body-silhouette" class="kosha" data-name="Annamaya Kosha" data-medical-name="Physical Sheath" data-desc="The gross physical body. Made of food (Anna)." fill="none" stroke="#FF0000" stroke-width="3" filter="url(#kosha-annamaya)" opacity="0.8" />
</g>
`;
