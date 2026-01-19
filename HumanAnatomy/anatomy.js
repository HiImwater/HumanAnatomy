import { craniumSVG, hyoidSVG } from './components/bones/cranium.js';
import { vertebralColumnSVG } from './components/bones/vertebral_column.js';
import { thoracicCageSVG } from './components/bones/thoracic_cage.js';
import { upperAppendicularSVG, scapulaeSVG, upperLimbsSVG } from './components/bones/upper_appendicular.js';
import { lowerAppendicularSVG } from './components/bones/lower_appendicular.js';
import { handsSVG } from './components/bones/hands.js';
import { feetSVG } from './components/bones/feet.js';
import { chakrasSVG } from './components/esoteric/central_axis/chakras.js';
import { sephirotSVG } from './components/esoteric/archetypal/sephirot.js';
import { koshasSVG } from './components/esoteric/archetypal/koshas.js';
import { thoracicOrgansSVG } from './components/organs/thoracic.js';
import { upperAbdominalOrgansSVG } from './components/organs/upper_abdominal.js';
import { lowerAbdominalOrgansSVG } from './components/organs/lower_abdominal.js';
import { urinaryEndocrineSVG } from './components/organs/urinary_endocrine.js';
import { nervousSystemSVG } from './components/organs/nervous.js';
import { reproductiveMaleSVG } from './components/organs/reproductive_male.js';
import { reproductiveFemaleSVG } from './components/organs/reproductive_female.js';
import { headNeckOrgansSVG } from './components/organs/head_neck.js';
import { digestiveAuxSVG } from './components/organs/digestive_aux.js';
import { heartSVG } from './components/circulatory/heart.js';
import { connectiveOrgansSVG } from './components/organs/connective.js';
import { integumentarySVG } from './components/organs/integumentary.js';

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
    const muscleCount = svg.querySelectorAll('.muscle').length;
    const nerveCount = svg.querySelectorAll('.nerve').length;

    // Count new layers only if visible
    const isLigamentsVisible = document.getElementById('ligament-system').style.display !== 'none';
    const isOrgansVisible = document.getElementById('organ-systems').style.display !== 'none';
    const isCirculatoryVisible = document.getElementById('circulatory-system').style.display !== 'none';
    const isLymphaticVisible = document.getElementById('lymphatic-system').style.display !== 'none';

    // Energy Body Visibility (Check if groups are visible)
    // Note: We check the specific groups because the parent layers might be containers
    const isChakrasVisible = document.getElementById('group-chakras').style.display !== 'none';
    const isMarmasVisible = document.getElementById('group-marma').style.display !== 'none';
    const isSephirotVisible = document.getElementById('group-sephirot').style.display !== 'none';

    let ligamentCount = 0;
    let visibleOrganCount = 0;
    let vesselCount = 0;
    let nodeCount = 0;
    let chakraCount = 0;
    let marmaCount = 0;
    let sephirotCount = 0;

    if (isLigamentsVisible) {
        ligamentCount = svg.querySelectorAll('.ligament').length;
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

    // Update stat displays
    document.getElementById('stat-bones').textContent = boneCount;
    document.getElementById('stat-teeth').textContent = toothCount;
    document.getElementById('stat-organs').textContent = visibleOrganCount;
    document.getElementById('stat-muscles').textContent = muscleCount;
    document.getElementById('stat-nerves').textContent = nerveCount;
    document.getElementById('stat-ligaments').textContent = ligamentCount;
    document.getElementById('stat-vessels').textContent = vesselCount;
    document.getElementById('stat-nodes').textContent = nodeCount;

    // Energy Stats
    const statChakras = document.getElementById('stat-chakras');
    const statMarmas = document.getElementById('stat-marmas');
    const statSephirot = document.getElementById('stat-sephirot');

    if (statChakras) statChakras.textContent = chakraCount;
    if (statMarmas) statMarmas.textContent = marmaCount;
    if (statSephirot) statSephirot.textContent = sephirotCount;
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
        ${craniumSVG}
        ${hyoidSVG}
        ${vertebralColumnSVG}
        ${scapulaeSVG}
        ${thoracicCageSVG}
        ${upperLimbsSVG}
        ${handsSVG}
        ${lowerAppendicularSVG}
        ${feetSVG}
    `;

    // Inject Organ Systems
    const organGroup = document.getElementById('organ-systems');
    if (organGroup) {
        organGroup.innerHTML = `
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
        { toggle: 'toggle-koshas', group: 'group-koshas', parent: 'layer-koshas' }
    ];

    // Ensure parent layers are visible (fix for display:none in HTML for parents)
    ['layer-central-axis', 'layer-flow-network', 'layer-archetypal', 'layer-koshas'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
    });

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

    // Inject Koshas
    const koshasGroup = document.getElementById('group-koshas');
    if (koshasGroup) {
        koshasGroup.innerHTML = koshasSVG;
    }

    energyToggles.forEach(item => {
        const toggleBtn = document.getElementById(item.toggle);
        const groupEl = document.getElementById(item.group);

        if (toggleBtn && groupEl) {
            // Set initial state
            groupEl.style.display = toggleBtn.checked ? 'block' : 'none';

            toggleBtn.addEventListener('change', (e) => {
                groupEl.style.display = e.target.checked ? 'block' : 'none';
                updateStats();
            });
        }
    });

    svg.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.bone, .tooth, .chakra, .sephirot, .kosha, .organ');
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
