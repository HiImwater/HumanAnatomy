export const headNeckOrgansSVG = `
<g id="organs_head_neck">

    <!-- PHARYNX (The Throat)
         Placement: Posterior to nasal/oral cavities, superior to larynx/esophagus.
    -->
    <g id="organ_pharynx">
        <path id="organ_nasopharynx" class="organ" data-name="Nasopharynx" data-medical-name="Nasopharynx"
            d="M -15 130 Q 0 120, 15 130 L 15 160 Q 0 155, -15 160 Z"
            fill="#e6a0a0" stroke="#cc7070" stroke-width="0.5" opacity="0.4" />
        <path id="organ_oropharynx" class="organ" data-name="Oropharynx" data-medical-name="Pars Oralis Pharyngis"
            d="M -15 160 Q 0 155, 15 160 L 18 200 Q 0 195, -18 200 Z"
            fill="#e6a0a0" stroke="#cc7070" stroke-width="0.5" opacity="0.4" />
        <path id="organ_laryngopharynx" class="organ" data-name="Laryngopharynx" data-medical-name="Pars Laryngea Pharyngis"
            d="M -18 200 Q 0 195, 18 200 L 10 240 Q 0 235, -10 240 Z"
            fill="#e6a0a0" stroke="#cc7070" stroke-width="0.5" opacity="0.4" />
    </g>

    <!-- TONSILS (Lymphoid clusters) -->
    <g id="organ_tonsils">
        <!-- Adenoids (Pharyngeal Tonsil) -->
        <circle id="organ_adenoids" class="organ" data-name="Adenoids" data-medical-name="Tonsilla Pharyngealis"
            cx="0" cy="140" r="4" fill="#d9b3ff" stroke="#a64dff" stroke-width="0.5" />
        <!-- Palatine Tonsils (Bilateral) -->
        <ellipse id="organ_tonsil_palatine_left" class="organ" data-name="Left Palatine Tonsil" data-medical-name="Tonsilla Palatina"
            cx="-12" cy="190" rx="3" ry="5" fill="#d9b3ff" stroke="#a64dff" stroke-width="0.5" />
        <ellipse id="organ_tonsil_palatine_right" class="organ" data-name="Right Palatine Tonsil" data-medical-name="Tonsilla Palatina"
            cx="12" cy="190" rx="3" ry="5" fill="#d9b3ff" stroke="#a64dff" stroke-width="0.5" />
        <!-- Lingual Tonsil (Root of tongue) -->
        <ellipse id="organ_tonsil_lingual" class="organ" data-name="Lingual Tonsil" data-medical-name="Tonsilla Lingualis"
            cx="0" cy="205" rx="8" ry="3" fill="#d9b3ff" stroke="#a64dff" stroke-width="0.5" />
    </g>

    <!-- TONGUE -->
    <path id="organ_tongue" class="organ" data-name="Tongue" data-medical-name="Lingua"
        d="M -15 200
           C -20 180, -20 170, 0 165
           C 20 170, 20 180, 15 200
           C 10 210, -10 210, -15 200
           Z"
        fill="#e68a8a" stroke="#cc6666" stroke-width="1">
        <title>Tongue</title>
    </path>


    <!-- SALIVARY GLANDS -->
    <ellipse id="organ_parotid_left" class="organ" data-name="Left Parotid Gland" data-medical-name="Glandula Parotidea"
        cx="-35" cy="180" rx="8" ry="12"
        fill="#e6cca0" stroke="#ccaa80" stroke-width="1" opacity="0.8" />
    <ellipse id="organ_parotid_right" class="organ" data-name="Right Parotid Gland" data-medical-name="Glandula Parotidea"
        cx="35" cy="180" rx="8" ry="12"
        fill="#e6cca0" stroke="#ccaa80" stroke-width="1" opacity="0.8" />

    <ellipse id="organ_submandibular_left" class="organ" data-name="Left Submandibular Gland" data-medical-name="Glandula Submandibularis"
        cx="-20" cy="210" rx="6" ry="4"
        fill="#eeddbb" stroke="#ccaa80" stroke-width="1" />
    <ellipse id="organ_submandibular_right" class="organ" data-name="Right Submandibular Gland" data-medical-name="Glandula Submandibularis"
        cx="20" cy="210" rx="6" ry="4"
        fill="#eeddbb" stroke="#ccaa80" stroke-width="1" />

    <!-- Sublingual Glands (Under tongue) -->
    <ellipse id="organ_sublingual_left" class="organ" data-name="Left Sublingual Gland" data-medical-name="Glandula Sublingualis"
        cx="-8" cy="205" rx="4" ry="2" fill="#f0e0c0" stroke="#ccaa80" stroke-width="0.5" />
    <ellipse id="organ_sublingual_right" class="organ" data-name="Right Sublingual Gland" data-medical-name="Glandula Sublingualis"
        cx="8" cy="205" rx="4" ry="2" fill="#f0e0c0" stroke="#ccaa80" stroke-width="0.5" />


    <!-- EPIGLOTTIS
         Placement: Superior to Larynx.
    -->
    <path id="organ_epiglottis" class="organ" data-name="Epiglottis" data-medical-name="Epiglottis"
        d="M -6 215 Q 0 205, 6 215 L 0 220 Z"
        fill="#e0d0b0" stroke="#a08060" stroke-width="0.5">
        <title>Epiglottis</title>
    </path>


    <!-- LARYNX (Voice Box) -->
    <path id="organ_larynx" class="organ" data-name="Larynx" data-medical-name="Larynx"
        d="M -10 220
           L -10 240
           Q 0 245, 10 240
           L 10 220
           Q 0 215, -10 220
           Z"
        fill="#d0e0ff" stroke="#a0b0dd" stroke-width="1" opacity="0.9">
        <title>Larynx (Voice Box)</title>
    </path>


    <!-- INNER EAR & EUSTACHIAN TUBES -->
    <g id="organ_ear_complex_left" transform="translate(-45, 120)">
        <g id="organ_inner_ear_left" class="organ" data-name="Left Inner Ear" data-medical-name="Auris Interna" scale(0.5)>
            <path d="M 0 0 C 10 -10, 20 0, 10 10 C 0 20, -10 10, -5 0" fill="none" stroke="#d0c0a0" stroke-width="2" />
            <path d="M 0 0 C -10 -20, -20 -10, 0 0" fill="none" stroke="#d0c0a0" stroke-width="2" />
            <path d="M 0 0 C 10 -20, 20 -10, 0 0" fill="none" stroke="#d0c0a0" stroke-width="2" />
        </g>
        <!-- Eustachian Tube Left -->
        <path id="organ_eustachian_left" class="organ" data-name="Left Eustachian Tube" data-medical-name="Tuba Auditiva"
            d="M 5 5 L 30 20" fill="none" stroke="#e0c0a0" stroke-width="1.5" opacity="0.6" />
    </g>

    <g id="organ_ear_complex_right" transform="translate(45, 120)">
        <g id="organ_inner_ear_right" class="organ" data-name="Right Inner Ear" data-medical-name="Auris Interna" scale(0.5)>
             <!-- Cochlea Spiral -->
            <path d="M 0 0 C -10 -10, -20 0, -10 10 C 0 20, 10 10, 5 0" fill="none" stroke="#d0c0a0" stroke-width="2" />
            <!-- Semicircular Canals -->
            <path d="M 0 0 C 10 -20, 20 -10, 0 0" fill="none" stroke="#d0c0a0" stroke-width="2" />
            <path d="M 0 0 C -10 -20, -20 -10, 0 0" fill="none" stroke="#d0c0a0" stroke-width="2" />
        </g>
        <!-- Eustachian Tube Right -->
        <path id="organ_eustachian_right" class="organ" data-name="Right Eustachian Tube" data-medical-name="Tuba Auditiva"
            d="M -5 5 L -30 20" fill="none" stroke="#e0c0a0" stroke-width="1.5" opacity="0.6" />
    </g>

</g>
`;
