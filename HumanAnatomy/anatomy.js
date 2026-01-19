import { craniumSVG, hyoidSVG } from './components/bones/cranium.js';
import { vertebralColumnSVG } from './components/bones/vertebral_column.js';
import { thoracicCageSVG } from './components/bones/thoracic_cage.js';
import { upperAppendicularSVG, scapulaeSVG, upperLimbsSVG } from './components/bones/upper_appendicular.js';
import { pelvisSVG } from './components/bones/pelvis.js';
import { lowerAppendicularSVG } from './components/bones/lower_appendicular.js';
import { handsSVG } from './components/bones/hands.js';
import { feetSVG } from './components/bones/feet.js';
import { chakrasSVG } from './components/esoteric/central_axis/chakras.js';
import { sephirotSVG } from './components/esoteric/archetypal/sephirot.js';
import { koshasSVG } from './components/esoteric/archetypal/koshas.js';
import { egyptianLayersSVG } from './components/esoteric/egyptian/egyptian_layers.js';
import { circuitsSVG } from './components/esoteric/consciousness/8circuits.js';
import { createDantians } from './components/esoteric/energy_centers/dantians.js';
import { sushumnaSVG } from './components/esoteric/central_axis/sushumna.js';
import { createNadis } from './components/esoteric/flow_network/nadis.js';
import { createMeridians } from './components/esoteric/flow_network/meridians.js';
import { latifasSVG } from './components/esoteric/islamic/latifas.js';
import { thoracicOrgansSVG } from './components/organs/thoracic.js';
import { upperAbdominalOrgansSVG } from './components/organs/upper_abdominal.js';
import { lowerAbdominalOrgansSVG, omentumSVG } from './components/organs/lower_abdominal.js';
import { urinaryEndocrineSVG } from './components/organs/urinary_endocrine.js';
import { nervousSystemSVG } from './components/organs/nervous.js';
import { reproductiveMaleSVG } from './components/organs/reproductive_male.js';
import { reproductiveFemaleSVG } from './components/organs/reproductive_female.js';
import { headNeckOrgansSVG } from './components/organs/head_neck.js';
import { digestiveAuxSVG } from './components/organs/digestive_aux.js';
import { heartSVG } from './components/circulatory/heart.js';
import { connectiveOrgansSVG } from './components/organs/connective.js';
import { integumentarySVG } from './components/organs/integumentary.js';
import { trunkMusclesSVG } from './components/muscles/trunk.js';
import { upperLimbsMusclesSVG } from './components/muscles/upper_limbs.js';
import { lowerLimbsMusclesSVG } from './components/muscles/lower_limbs.js';
import { headNeckMusclesSVG } from './components/muscles/head_neck.js';
import { handsMusclesSVG } from './components/muscles/hands.js';
import { feetMusclesSVG } from './components/muscles/feet.js';
import { upperLimbsTendonsSVG } from './components/tendons/upper_limbs.js';
import { lowerLimbsTendonsSVG } from './components/tendons/lower_limbs.js';

// ... (existing updateStats function) ...

// ... (existing updateStats function) ...


// Function to update rendering stats
// Uses data-bone-id for intelligent counting - multiple SVG parts can share same bone ID
function updateStats() {
    const svg = document.getElementById('anatomy-svg');
    const skeletonGroup = document.getElementById('skeletal-system');

    // Count visible elements by class
    // Only count if the parent group is visible
    const isSkeletonVisible = skeletonGroup.style.display !== 'none';

    // Smart bone counting: count unique data-bone-id values
    // Falls back to element id if no data-bone-id is present
    let boneCount = 0;
    let toothCount = 0;

    if (isSkeletonVisible) {
        // Collect unique bone IDs
        const boneIds = new Set();
        svg.querySelectorAll('.bone').forEach(el => {
            const boneId = el.getAttribute('data-bone-id') || el.id;
            if (boneId) {
                boneIds.add(boneId);
            }
        });
        boneCount = boneIds.size;

        // Collect unique tooth IDs
        const toothIds = new Set();
        svg.querySelectorAll('.tooth').forEach(el => {
            const toothId = el.getAttribute('data-tooth-id') || el.id;
            if (toothId) {
                toothIds.add(toothId);
            }
        });
        toothCount = toothIds.size;
    }

    const organCount = svg.querySelectorAll('.organ').length;
    // const muscleCount = svg.querySelectorAll('.muscle').length; // Old unconditional count
    const nerveCount = svg.querySelectorAll('.nerve').length;

    // Count new layers only if visible
    const isLigamentsVisible = document.getElementById('ligament-system').style.display !== 'none';
    const isTendonsVisible = document.getElementById('tendon-system').style.display !== 'none';
    const isOrgansVisible = document.getElementById('organ-systems').style.display !== 'none';
    const isMusclesVisible = document.getElementById('muscular-system').style.display !== 'none';
    const isCirculatoryVisible = document.getElementById('circulatory-system').style.display !== 'none';
    const isLymphaticVisible = document.getElementById('lymphatic-system').style.display !== 'none';

    // ...

    let muscleCount = 0;
    if (isMusclesVisible) {
        muscleCount = svg.querySelectorAll('.muscle').length;
    }

    // Energy Body Visibility (Check if groups are visible)
    // Note: We check the specific groups because the parent layers might be containers
    const isChakrasVisible = document.getElementById('group-chakras').style.display !== 'none';
    const isMarmasVisible = document.getElementById('group-marma').style.display !== 'none';
    const isSephirotVisible = document.getElementById('group-sephirot').style.display !== 'none';

    let ligamentCount = 0;
    let tendonCount = 0;
    let visibleOrganCount = 0;
    let vesselCount = 0;
    let nodeCount = 0;
    let chakraCount = 0;
    let marmaCount = 0;
    let sephirotCount = 0;
    let meridianCount = 0;

    if (isLigamentsVisible) {
        ligamentCount = svg.querySelectorAll('.ligament').length;
    }
    if (isTendonsVisible) {
        tendonCount = svg.querySelectorAll('.tendon').length;
    }
    if (isOrgansVisible) {
        visibleOrganCount = organCount;
    }
    if (isCirculatoryVisible) {
        vesselCount = svg.querySelectorAll('.vessel').length;
    }
    if (isLymphaticVisible) {
        nodeCount = svg.querySelectorAll('.node').length;
    }

    // Energy Body Counts
    if (isChakrasVisible) chakraCount = svg.querySelectorAll('.chakra').length;
    if (isMarmasVisible) marmaCount = svg.querySelectorAll('.marma').length;
    if (isSephirotVisible) sephirotCount = svg.querySelectorAll('.sephirot').length;

    const isMeridiansVisible = document.getElementById('group-meridians').style.display !== 'none';
    if (isMeridiansVisible) meridianCount = svg.querySelectorAll('.meridian').length;

    // New Layer Counts
    let koshaCount = 0;
    const isKoshasVisible = document.getElementById('layer-koshas').style.display !== 'none';
    if (isKoshasVisible) koshaCount = svg.querySelectorAll('.kosha').length;

    let egyptianCount = 0;
    const isEgyptianVisible = document.getElementById('layer-egyptian-overlay').style.display !== 'none'; // Check overlay as proxy
    if (isEgyptianVisible) egyptianCount = svg.querySelectorAll('.egyptian-layer').length;

    let circuitCount = 0;
    const isCircuitsVisible = document.getElementById('layer-8circuits').style.display !== 'none';
    if (isCircuitsVisible) circuitCount = svg.querySelectorAll('.circuit').length;

    // Update stat displays
    document.getElementById('stat-bones').textContent = boneCount;
    document.getElementById('stat-teeth').textContent = toothCount;
    document.getElementById('stat-organs').textContent = visibleOrganCount;
    document.getElementById('stat-muscles').textContent = muscleCount;
    document.getElementById('stat-nerves').textContent = nerveCount;
    document.getElementById('stat-ligaments').textContent = ligamentCount;
    document.getElementById('stat-tendons').textContent = tendonCount;
    document.getElementById('stat-vessels').textContent = vesselCount;
    document.getElementById('stat-nodes').textContent = nodeCount;

    // Energy Stats
    const statChakras = document.getElementById('stat-chakras');
    const statMarmas = document.getElementById('stat-marmas');
    const statSephirot = document.getElementById('stat-sephirot');
    const statKoshas = document.getElementById('stat-koshas');
    const statEgyptian = document.getElementById('stat-egyptian');
    const statCircuits = document.getElementById('stat-circuits');

    if (statChakras) statChakras.textContent = chakraCount;
    if (statMarmas) statMarmas.textContent = marmaCount;
    if (statSephirot) statSephirot.textContent = sephirotCount;
    if (statKoshas) statKoshas.textContent = koshaCount;
    if (statEgyptian) statEgyptian.textContent = egyptianCount;
    if (statCircuits) statCircuits.textContent = circuitCount;

    const statMeridians = document.getElementById('stat-meridians');
    if (statMeridians) statMeridians.textContent = meridianCount;

    // Dantians Stat
    const isDantiansVisible = document.getElementById('group-dantians').style.display !== 'none';
    const statDantians = document.getElementById('stat-dantians');
    if (statDantians) {
        statDantians.textContent = isDantiansVisible ? 3 : 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const partNameDisplay = document.getElementById('part-name');
    const skeletonGroup = document.getElementById('skeletal-system');
    const skeletonToggle = document.getElementById('toggle-skeleton');
    const svg = document.getElementById('anatomy-svg');

    // Inject Skeletal System Components
    // ORDERING FOR CORRECT LAYERING (Painter's Algorithm: Back -> Front)
    // 1. Vertebrae (Deepest)
    // 2. Scapulae (Posterior to Ribs)
    // 3. Thoracic Cage (Ribs/Sternum - Anterior to Scapulae)
    // 4. Clavicles & Arms (Anterior/Lateral)
    skeletonGroup.innerHTML = `
        ${vertebralColumnSVG}
        ${pelvisSVG}
        ${scapulaeSVG}
        ${thoracicCageSVG}
        ${upperLimbsSVG}
        ${handsSVG}
        ${lowerAppendicularSVG}
        ${feetSVG}
        ${craniumSVG}
        ${hyoidSVG}
    `;

    // Inject Organ Systems
    const organGroup = document.getElementById('organ-systems');
    if (organGroup) {
        organGroup.innerHTML = `
            ${omentumSVG}             <!-- Bottommost Layer (Peritoneum) -->
            ${nervousSystemSVG}       <!-- Posterior (Brain/Spinal Cord) -->
            ${headNeckOrgansSVG}      <!-- Head & Neck -->
            ${digestiveAuxSVG}        <!-- Deep Neck/Thorax -->
            ${urinaryEndocrineSVG}    <!-- Retroperitoneal -->
            ${reproductiveMaleSVG}    <!-- Pelvic - Male -->
            ${reproductiveFemaleSVG}  <!-- Pelvic - Female -->
            ${thoracicOrgansSVG}
            ${upperAbdominalOrgansSVG}
            ${lowerAbdominalOrgansSVG}
            ${connectiveOrgansSVG}
        `;
    }

    // Inject Integumentary System
    const integumentaryGroup = document.getElementById('integumentary-system');
    if (integumentaryGroup) {
        integumentaryGroup.innerHTML = integumentarySVG;
    }

    // Inject Muscular System
    const muscleGroup = document.getElementById('muscular-system');
    if (muscleGroup) {
        muscleGroup.innerHTML = `
            ${trunkMusclesSVG}
            ${upperLimbsMusclesSVG}
            ${handsMusclesSVG}
            ${lowerLimbsMusclesSVG}
            ${feetMusclesSVG}
            ${headNeckMusclesSVG}
        `;
    }

    // Toggle Muscles
    const muscleToggle = document.getElementById('toggle-muscle');
    if (muscleToggle && muscleGroup) {
        muscleToggle.addEventListener('change', (e) => {
            muscleGroup.style.display = e.target.checked ? 'block' : 'none';
            updateStats();
        });
    }

    // Initial stats update
    updateStats();

    // Update stats when skeleton layer is toggled
    // Event Listeners for Toggles
    skeletonToggle.addEventListener('change', (e) => {
        skeletonGroup.style.display = e.target.checked ? 'block' : 'none';
        updateStats();
    });

    const ligamentToggle = document.getElementById('toggle-ligaments');
    const ligamentGroup = document.getElementById('ligament-system');
    ligamentToggle.addEventListener('change', (e) => {
        ligamentGroup.style.display = e.target.checked ? 'block' : 'none';
        updateStats();
    });

    // Inject Tendon System
    const tendonGroup = document.getElementById('group-tendons');
    if (tendonGroup) {
        tendonGroup.innerHTML = `
            ${upperLimbsTendonsSVG}
            ${lowerLimbsTendonsSVG}
        `;
    }

    const tendonToggle = document.getElementById('toggle-tendons');
    const tendonSystem = document.getElementById('tendon-system'); // Note: ID in HTML is tendon-system for the grouping
    if (tendonToggle && tendonSystem) {
        tendonToggle.addEventListener('change', (e) => {
            tendonSystem.style.display = e.target.checked ? 'block' : 'none';
            updateStats();
        });
    }

    // Organ System Toggle
    const organToggle = document.getElementById('toggle-organs');
    const reproductiveControls = document.getElementById('reproductive-controls');
    const reproductiveToggle = document.getElementById('toggle-reproductive');
    const genderSelector = document.getElementById('gender-selector');

    if (organToggle && organGroup) { // Ensure organGroup is defined here
        organToggle.addEventListener('change', (e) => {
            const isVisible = e.target.checked;
            organGroup.style.display = isVisible ? 'block' : 'none';
            if (reproductiveControls) { // Check if reproductiveControls exists
                reproductiveControls.style.display = isVisible ? 'block' : 'none';
            }
            updateStats();
        });
    }

    // Initial state check for controls
    if (organToggle && organToggle.checked) {
        if (reproductiveControls) reproductiveControls.style.display = 'block';
    }

    // Reproductive System Toggle
    if (reproductiveToggle) {
        reproductiveToggle.addEventListener('change', (e) => {
            const isVisible = e.target.checked;
            if (genderSelector) genderSelector.style.display = isVisible ? 'block' : 'none';
            updateReproductiveVisibility();
            updateStats();
        });
    }

    // Gender Radio Buttons
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener('change', () => {
            updateReproductiveVisibility();
            updateStats();
        });
    });

    function updateReproductiveVisibility() {
        const isReproVisible = reproductiveToggle ? reproductiveToggle.checked : false;
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const gender = genderInput ? genderInput.value : 'male';

        const maleGroup = document.getElementById('organs_reproductive_male');
        const femaleGroup = document.getElementById('organs_reproductive_female');

        if (maleGroup) maleGroup.style.display = 'none';
        if (femaleGroup) femaleGroup.style.display = 'none';

        if (isReproVisible && organToggle.checked) {
            if (gender === 'male' && maleGroup) maleGroup.style.display = 'inline';
            if (gender === 'female' && femaleGroup) femaleGroup.style.display = 'inline';
        }
    }

    const circulatoryToggle = document.getElementById('toggle-circulatory');
    const circulatoryGroup = document.getElementById('circulatory-system');

    // Inject Circulatory Components
    if (circulatoryGroup) {
        circulatoryGroup.innerHTML = `
            ${heartSVG}
        `;
    }

    circulatoryToggle.addEventListener('change', (e) => {
        circulatoryGroup.style.display = e.target.checked ? 'block' : 'none';
        updateStats();
    });

    const lymphaticToggle = document.getElementById('toggle-lymphatic');
    const lymphaticGroup = document.getElementById('lymphatic-system');
    lymphaticToggle.addEventListener('change', (e) => {
        lymphaticGroup.style.display = e.target.checked ? 'block' : 'none';
        updateStats();
    });

    const integumentaryToggle = document.getElementById('toggle-integumentary');
    const integumentaryGroupContainer = document.getElementById('integumentary-system');
    if (integumentaryToggle && integumentaryGroupContainer) {
        integumentaryToggle.addEventListener('change', (e) => {
            integumentaryGroupContainer.style.display = e.target.checked ? 'block' : 'none';
            updateStats();
        });
    }

    // --- Energy Body Toggles ---

    // Constants for ID mappings
    const energyToggles = [
        { toggle: 'toggle-chakras', group: 'group-chakras', parent: 'layer-central-axis' },
        { toggle: 'toggle-dantians', group: 'group-dantians', parent: 'layer-central-axis' },
        { toggle: 'toggle-sushumna', group: 'group-sushumna', parent: 'layer-central-axis' },
        { toggle: 'toggle-meridians', group: 'group-meridians', parent: 'layer-flow-network' },
        { toggle: 'toggle-nadis', group: 'group-nadis', parent: 'layer-flow-network' },
        { toggle: 'toggle-marma', group: 'group-marma', parent: 'layer-flow-network' },
        { toggle: 'toggle-sephirot', group: 'group-sephirot', parent: 'layer-archetypal' },
        { toggle: 'toggle-koshas', group: 'group-koshas', parent: 'layer-koshas' },
        { toggle: 'toggle-8circuits', group: 'group-8circuits', parent: 'layer-8circuits' },
        // Islamic Latifas Toggles - Consolidated (Elements removed by request)
        { toggle: 'toggle-islamic-latifas', groups: ['group-latifas-amr', 'group-latifas-khalq-nafs'], parent: 'layer-islamic-latifas' }
    ];

    // Ensure parent layers are visible (fix for display:none in HTML for parents)
    ['layer-central-axis', 'layer-flow-network', 'layer-archetypal', 'layer-koshas', 'layer-8circuits', 'layer-islamic-latifas'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
    });



    // Inject Sushumna (Background Layer of Central Axis)
    const sushumnaGroup = document.getElementById('group-sushumna');
    if (sushumnaGroup) {
        sushumnaGroup.innerHTML = sushumnaSVG;
    }

    // Inject Chakras
    const chakraGroup = document.getElementById('group-chakras');
    if (chakraGroup) {
        chakraGroup.innerHTML = chakrasSVG;
    }

    // Inject Sephirot
    const sephirotGroup = document.getElementById('group-sephirot');
    if (sephirotGroup) {
        sephirotGroup.innerHTML = sephirotSVG;
    }

    // Inject Dantians
    const dantiansGroup = document.getElementById('group-dantians');
    if (dantiansGroup) {
        dantiansGroup.innerHTML = createDantians(); // Execute function to get SVG string
    }

    // Inject Koshas
    // Inject Koshas
    const koshasGroup = document.getElementById('group-koshas');
    if (koshasGroup) {
        koshasGroup.innerHTML = koshasSVG;
    }

    // Inject Consciousness Circuits
    const circuitsGroup = document.getElementById('group-8circuits');
    if (circuitsGroup) {
        circuitsGroup.innerHTML = circuitsSVG;
    }

    // Inject Nadis (Flow Network)
    const nadisGroup = document.getElementById('group-nadis');
    if (nadisGroup) {
        nadisGroup.innerHTML = createNadis();
    }

    // Inject Meridians (Flow Network)
    const meridiansGroup = document.getElementById('group-meridians');
    if (meridiansGroup) {
        meridiansGroup.innerHTML = createMeridians();
    }

    // Inject Islamic Latifas Definitions and Groups
    const latifaDefsContainer = document.getElementById('latifa-defs-container');
    if (latifaDefsContainer) latifaDefsContainer.innerHTML = latifasSVG.defs;

    const grpLatifaAmr = document.getElementById('group-latifas-amr');
    if (grpLatifaAmr) grpLatifaAmr.innerHTML = latifasSVG.alamAmr;

    const grpLatifaNafs = document.getElementById('group-latifas-khalq-nafs');
    if (grpLatifaNafs) grpLatifaNafs.innerHTML = latifasSVG.nafs;

    // Elements disabled by user request
    /*
    const grpLatifaEarth = document.getElementById('group-latifas-khalq-earth');
    if (grpLatifaEarth) grpLatifaEarth.innerHTML = latifasSVG.elements.earth;

    const grpLatifaWater = document.getElementById('group-latifas-khalq-water');
    if (grpLatifaWater) grpLatifaWater.innerHTML = latifasSVG.elements.water;

    const grpLatifaFire = document.getElementById('group-latifas-khalq-fire');
    if (grpLatifaFire) grpLatifaFire.innerHTML = latifasSVG.elements.fire;

    const grpLatifaAir = document.getElementById('group-latifas-khalq-air');
    if (grpLatifaAir) grpLatifaAir.innerHTML = latifasSVG.elements.air;
    */

    energyToggles.forEach(item => {
        const toggleBtn = document.getElementById(item.toggle);

        if (item.groups) {
            // Handle multiple groups for one toggle
            const groupEls = item.groups.map(id => document.getElementById(id)).filter(el => el);

            if (toggleBtn && groupEls.length > 0) {
                // Set initial state
                const isChecked = toggleBtn.checked;
                groupEls.forEach(el => el.style.display = isChecked ? 'block' : 'none');

                toggleBtn.addEventListener('change', (e) => {
                    groupEls.forEach(el => el.style.display = e.target.checked ? 'block' : 'none');
                    updateStats();
                });
            }
        } else {
            // Standard single group toggle
            const groupEl = document.getElementById(item.group);

            if (toggleBtn && groupEl) {
                // Set initial state
                groupEl.style.display = toggleBtn.checked ? 'block' : 'none';

                toggleBtn.addEventListener('change', (e) => {
                    groupEl.style.display = e.target.checked ? 'block' : 'none';
                    updateStats();
                });
            }
        }
    });

    // --- Egyptian Soul Layers ---
    // Inject Egyptian Layers (Underlay)
    const grpShuyet = document.getElementById('group-egyptian-shuyet');
    const grpRen = document.getElementById('group-egyptian-ren');
    if (grpShuyet) grpShuyet.innerHTML = egyptianLayersSVG.shuyet;
    if (grpRen) grpRen.innerHTML = egyptianLayersSVG.ren;

    // Inject Egyptian Layers (Overlay)
    const grpKa = document.getElementById('group-egyptian-ka');
    const grpBa = document.getElementById('group-egyptian-ba');
    const grpAkh = document.getElementById('group-egyptian-akh');
    const grpIb = document.getElementById('group-egyptian-ib');
    const grpSekhem = document.getElementById('group-egyptian-sekhem');
    const grpSah = document.getElementById('group-egyptian-sah');

    if (grpKa) grpKa.innerHTML = egyptianLayersSVG.ka;
    if (grpBa) grpBa.innerHTML = egyptianLayersSVG.ba;
    if (grpAkh) grpAkh.innerHTML = egyptianLayersSVG.akh;
    if (grpIb) grpIb.innerHTML = egyptianLayersSVG.ib;
    if (grpSekhem) grpSekhem.innerHTML = egyptianLayersSVG.sekhem;
    if (grpSah) grpSah.innerHTML = egyptianLayersSVG.sah;

    // Egyptian Single Toggle Logic
    const egyptianToggle = document.getElementById('toggle-egyptian');
    const layerEgyUnderlay = document.getElementById('layer-egyptian-underlay');
    const layerEgyOverlay = document.getElementById('layer-egyptian-overlay');

    if (egyptianToggle) {
        egyptianToggle.addEventListener('change', (e) => {
            const isActive = e.target.checked;
            if (layerEgyUnderlay) layerEgyUnderlay.style.display = isActive ? 'block' : 'none';
            if (layerEgyOverlay) layerEgyOverlay.style.display = isActive ? 'block' : 'none';
            updateStats();
        });
    }

    // Hover effects for various layers
    svg.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.bone, .tooth, .chakra, .sephirot, .kosha, .organ, .muscle, .tendon, .egyptian-layer, .circuit, .dantian-node, .latifa-node');
        if (target) {
            const name = target.getAttribute('data-name') || 'Unknown Part';
            const medicalName = target.getAttribute('data-medical-name') || '';
            const description = target.getAttribute('data-desc') || '';

            let html = `<strong>${name}</strong><br><em>${medicalName}</em>`;
            if (description) {
                html += `<br><span style="font-size: 0.9em; color: #aaa;">${description}</span>`;
            }
            partNameDisplay.innerHTML = html;
        }
    });

    svg.addEventListener('mouseout', () => {
        partNameDisplay.textContent = 'Hover over a bone...';
    });

    // ==================== PAN & ZOOM CONTROLS ====================

    let viewBox = {
        x: -400,
        y: -100,
        width: 800,
        height: 2000
    };

    let isPanning = false;
    let startPoint = { x: 0, y: 0 };

    function updateViewBox() {
        svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    }

    // Mouse wheel zoom
    svg.addEventListener('wheel', (e) => {
        e.preventDefault();

        const delta = e.deltaY > 0 ? 1.1 : 0.9;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Get SVG coordinates of mouse position
        const pt = svg.createSVGPoint();
        pt.x = mouseX;
        pt.y = mouseY;
        const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());

        // Calculate new viewBox dimensions
        const newWidth = viewBox.width * delta;
        const newHeight = viewBox.height * delta;

        // Adjust position to zoom towards mouse
        const dx = (newWidth - viewBox.width) * ((svgP.x - viewBox.x) / viewBox.width);
        const dy = (newHeight - viewBox.height) * ((svgP.y - viewBox.y) / viewBox.height);

        viewBox.width = newWidth;
        viewBox.height = newHeight;
        viewBox.x -= dx;
        viewBox.y -= dy;

        // Constrain zoom limits
        const minZoom = 0.5;
        const maxZoom = 10;
        const currentZoom = 800 / viewBox.width;

        if (currentZoom < minZoom || currentZoom > maxZoom) {
            return;
        }

        updateViewBox();
    });

    // Pan on drag
    svg.addEventListener('mousedown', (e) => {
        // Only pan on left mouse button
        if (e.button === 0) {
            isPanning = true;
            startPoint = { x: e.clientX, y: e.clientY };
            svg.style.cursor = 'grabbing';
        }
    });

    svg.addEventListener('mousemove', (e) => {
        if (!isPanning) return;

        e.preventDefault();

        const dx = (e.clientX - startPoint.x) * (viewBox.width / svg.clientWidth);
        const dy = (e.clientY - startPoint.y) * (viewBox.height / svg.clientHeight);

        viewBox.x -= dx;
        viewBox.y -= dy;

        startPoint = { x: e.clientX, y: e.clientY };
        updateViewBox();
    });

    svg.addEventListener('mouseup', () => {
        isPanning = false;
        svg.style.cursor = 'default';
    });

    svg.addEventListener('mouseleave', () => {
        isPanning = false;
        svg.style.cursor = 'default';
    });

    // Double-click to reset view
    svg.addEventListener('dblclick', () => {
        viewBox = {
            x: -400,
            y: -100,
            width: 800,
            height: 2000
        };
        updateViewBox();
    });

});
