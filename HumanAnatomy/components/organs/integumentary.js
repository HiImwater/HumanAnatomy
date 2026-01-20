
import { skinDefs } from '../integumentary/skin_defs.js';
import { headNeckSkinSVG } from '../integumentary/head_neck_skin.js';
import { torsoSkinSVG } from '../integumentary/torso_skin.js';
import { upperLimbsSkinSVG } from '../integumentary/upper_limbs_skin.js';
import { lowerLimbsSkinSVG } from '../integumentary/lower_limbs_skin.js';
import { handsSkinSVG } from '../integumentary/hands_skin.js';
import { feetSkinSVG } from '../integumentary/feet_skin.js';
import { torsoSkinDerivativeSVG } from '../integumentary/torso_skin_derivative.js';
import { upperLimbsSkinDerivativeSVG } from '../integumentary/upper_limbs_skin_derivative.js';
import { lowerLimbsSkinDerivativeSVG } from '../integumentary/lower_limbs_skin_derivative.js';
import { headNeckSkinDerivativeSVG } from '../integumentary/head_neck_skin_derivative.js';
import { handsSkinDerivativeSVG } from '../integumentary/hands_skin_derivative.js';
import { feetSkinDerivativeSVG } from '../integumentary/feet_skin_derivative.js';

export const integumentarySVG = `
    ${skinDefs}
    <g id="organs_integumentary" opacity="0.8">
        <!-- 
             Z-INDEX ORDERING:
             1. Lower Limbs + Feet
             2. Upper Limbs + Hands
             3. Torso
             4. Head/Neck
        -->
        ${lowerLimbsSkinSVG}
        ${feetSkinSVG}
        
        ${upperLimbsSkinSVG}
        ${handsSkinSVG}
        
        ${torsoSkinSVG}
        
        ${headNeckSkinSVG}
    </g>
`;

export const derivativeSkinLayerSVG = `
    ${skinDefs}
    <g id="group-skin-derivative" opacity="0.8">
        ${lowerLimbsSkinDerivativeSVG}
        ${feetSkinDerivativeSVG}
        ${upperLimbsSkinDerivativeSVG}
        ${handsSkinDerivativeSVG}
        ${torsoSkinDerivativeSVG}
        ${headNeckSkinDerivativeSVG}
    </g>
`;
