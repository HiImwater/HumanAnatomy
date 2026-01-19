export const createNadis = () => {
    // Chakra Y-Coordinates for crossing points
    const nodes = [
        { y: 980, w: 50 },  // Root (Muladhara) - Start
        { y: 880, w: 90 },  // Sacral (Svadhishthana) - Crossing
        { y: 660, w: 80 },  // Solar (Manipura) - Crossing
        { y: 480, w: 70 },  // Heart (Anahata) - Crossing
        { y: 260, w: 60 },  // Throat (Vishuddha) - Crossing
        { y: 80, w: 30 }    // Brow (Ajna) - End / Convergence
    ];

    // Helper to generate smooth curve path interlacing the nodes
    // Ida starts Left (-x), Pingala starts Right (+x) at Base?
    // Tradition: Ida (Left Nostril) ends Left, Pingala (Right Nostril) ends Right.
    // They criss-cross.
    // Let's model a sine-like wave that hits x=0 at the node Ys, and amplitudes between them.

    // Better approach: Quadratic Beziers between nodes.
    // Node N: (0, y1), Node N+1: (0, y2). Control point at (Amplitude, MidY).

    const generateWave = (isIda) => {
        let d = `M 0 1000`; // Start effectively below Root
        const ampDirection = isIda ? -1 : 1;

        // Segment 1: Perineum to Root (Straightish or small curve)
        d += ` L 0 980`;

        // Loop through nodes to build segments
        for (let i = 0; i < nodes.length - 1; i++) {
            const startY = nodes[i].y;
            const endY = nodes[i + 1].y;
            const midY = (startY + endY) / 2;

            // Amplitude varies based on distance? Or fixed width?
            // "Integrate with chakras beautifully" -> Go around them? or Cross at them?
            // "Meet at the chakras" usually means they cross at the center node x=0.
            // So the control point should be max amplitude at midY.

            // Width factor: wider at bottom, narrowing at top
            const width = nodes[i].w * 1.5;

            // For segment i, if i is even, Ida goes Left (-), Pingala Right (+).
            // If i is odd, they swap.
            // Or does one always stay on one side? No, they coil.

            // Alternating direction
            // i=0 (Root->Sacral): Ida goes LEFT (ampDirection * -1)?
            // Tradition: Ida is "Left Channel", ends at Left Nostril.
            // It spirals.
            // Let's assume alternating crossing.

            const side = (i % 2 === 0) ? 1 : -1;
            const currentAmp = width * side * ampDirection;

            // Q ControlPointX ControlPointY EndX EndY
            d += ` Q ${currentAmp} ${midY}, 0 ${endY}`;
        }
        return d;
    };

    const idaPath = generateWave(true); // Starts Leftish magnitude
    const pingalaPath = generateWave(false); // Starts Rightish magnitude

    return `
    <defs>
        <!-- Ida Gradient (Moon/Cool) -->
        <linearGradient id="grad-ida" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#E0FFFF" stop-opacity="0.8" /> <!-- Light Cyan -->
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="1" /> <!-- White -->
        </linearGradient>

        <!-- Pingala Gradient (Sun/Warm) -->
        <linearGradient id="grad-pingala" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF4500" stop-opacity="0.8" /> <!-- Orange Red -->
            <stop offset="100%" stop-color="#FF8C00" stop-opacity="1" /> <!-- Dark Orange -->
        </linearGradient>
        
        <!-- Flow Animation Texture -->
        <mask id="mask-nadi-flow">
            <rect x="-100" y="-100" width="200" height="1200" fill="white" />
            <circle r="20" fill="black">
                 <animate attributeName="cy" values="1000;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <!-- Maybe just dashes? -->
        </mask>
    </defs>

    <g id="nadi-system">
        <!-- IDA (Left/Lunar) -->
        <path id="nadi-ida" class="nadi" data-name="Ida Nadi" data-desc="The Moon Channel (Left)"
            d="${idaPath}" 
            fill="none" stroke="url(#grad-ida)" stroke-width="4" stroke-linecap="round">
            <animate attributeName="stroke-width" values="4;5;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </path>

        <!-- PINGALA (Right/Solar) -->
        <path id="nadi-pingala" class="nadi" data-name="Pingala Nadi" data-desc="The Sun Channel (Right)"
            d="${pingalaPath}" 
            fill="none" stroke="url(#grad-pingala)" stroke-width="4" stroke-linecap="round">
             <animate attributeName="stroke-width" values="4;5;4" dur="3s" begin="1.5s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </path>
    </g>
    `;
};
