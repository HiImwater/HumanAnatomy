# Human Anatomy SVG Structure Guide

This document serves as the master blueprint for reconstructing the human body in SVG. We will follow a hierarchical approach, building from the bones outward, integrating both physiological and esoteric anatomical systems.

## Global Settings
- **Subject**: Adult Male, 6ft (approx. 183cm), 95th Percentile Stature (US Male reference).
- **Accuracy Standard**: Medical-grade anatomical correctness coupled with high-fidelity organic vector tracing.
    - **Morphology Source**: *Gray's Anatomy* (41st Ed or equivalent) for bone shape and features.
    - **Dimensional Source**: *ANSUR II (2012 Anthropometric Survey of U.S. Army Personnel)* and *NASA-STD-3000 Vol 1*.
    - **Vector Style**: **Organic Bezier Curves**. Avoid sharp linear edges (`L`) unless anatomically distinct (like a spine tip). Use cubic (`C`) or quadratic (`Q`) curves to approximate living bone and tissue.
- **Coordinate System**: Layered SVG with groups (`<g>`) per system.
- **Z-Index Layering (Bottom to Top)**:
    1.  **Esoteric Layers (Base)**: Koshas, Aura (Visual Foundation).
    2.  **Skeletal System**: Bones.
    3.  **Organ Systems**: Viscera (Thoracic, Abdominal, Pelvic).
    4.  **Flow Networks**: Nerves, Arteries, Veins, Lymphatics, Meridians.
    5.  **Muscular System**: Deep and Superficial muscles.
    6.  **Integumentary System**: Skin (Top).
    7.  **Esoteric Overlays**: Chakras, Sephirot (Projected over body).

## Component Architecture
The project is modularized into `components/` directories to maintain manageability:
- `components/bones/`: Individual bone files (e.g., `cranium.js`, `pelvis.js`, `vertebral_column.js`).
- `components/organs/`: Organ system files (e.g., `thoracic.js`, `lower_abdominal.js`).
- `components/esoteric/`: Energy system files (e.g., `chakras.js`, `sephirot.js`).

## Validation Protocol
Before finalizing any component, check against:
1.  **Shape Validation**: *Gray's Anatomy* / *Netter’s Atlas of Human Anatomy*.
2.  **Dimensional Validation**: *ANSUR II* 95th Percentile Male data column.
3.  **Relative Positioning**: Verify articulation points (e.g., Femur head in Acetabulum, Humerus head in Glenoid Fossa).
4.  **Code Integrity**: Ensure no inline comments exist within SVG `d` (path data) attributes, as this breaks rendering.

---

## 1. The Skeletal System (206 Bones)
**Group ID**: `skeletal-system`
**Location**: `components/bones/`

### The Axial Skeleton
*   **Skull** (`cranium.js`): Frontal, Parietal, Temporal, Occipital, Sphenoid, Ethmoid, Facial bones (Mandible, Maxilla, etc.).
*   **Vertebral Column** (`vertebral_column.js`):
    *   Cervical (C1-C7)
    *   Thoracic (T1-T12)
    *   Lumbar (L1-L5)
    *   Sacrum & Coccyx
*   **Thoracic Cage** (`thoracic_cage.js`): Sternum and Ribs (1-12).

### The Appendicular Skeleton
*   **Pectoral Girdle & Upper Limbs** (`upper_appendicular.js`, `hands.js`):
    *   Clavicle & Scapula.
    *   Humerus, Radius, Ulna.
    *   Carpals, Metacarpals, Phalanges.
*   **Pelvic Girdle** (`pelvis.js`):
    *   **Os Coxae (Hip Bones)**: Detailed, organic reconstruction of Ilium, Ischium, and Pubis. Mirrored Left/Right.
*   **Lower Limbs** (`lower_appendicular.js`, `feet.js`):
    *   Femur, Patella, Tibia, Fibula.
    *   Tarsals, Metatarsals, Phalanges.

---

## 2. The Organ Systems (Viscera)
**Group ID**: `organ-systems`
**Location**: `components/organs/`

*   **Nervous (Central)**: Brain (Cerebrum, Cerebellum, Brainstem), Spinal Cord (`nervous.js`).
*   **Head & Neck**: Tongue, Salivary Glands, Thyroid (`head_neck.js`).
*   **Thoracic**: Heart (`heart.js`), Lungs, Trachea, Diaphragm (`thoracic.js`).
*   **Abdominal**: 
    *   Upper: Liver, Stomach, Pancreas, Spleen (`upper_abdominal.js`).
    *   Lower: Small & Large Intestines (`lower_abdominal.js`).
*   **Pelvic/Retroperitoneal**: Kidneys, Bladder (`urinary_endocrine.js`), Reproductive Organs (`reproductive_male.js`, `reproductive_female.js`).

---

## 3. The Esoteric / Energy Systems
**Group IDs**: `layer-central-axis`, `layer-flow-network`, `layer-archetypal`, `layer-koshas`
**Location**: `components/esoteric/`

These systems represents the subtle body anatomy, integrating Eastern and Western metaphysical traditions.

*   **Chakras** (`chakras.js`): The 7 major energy centers along the central axis (Muladhara to Sahasrara).
*   **Koshas** (`koshas.js`): The 5 sheaths of existence (Annamaya to Anandamaya), visualized as nested aura layers.
*   **Sephirot** (`sephirot.js`): The Tree of Life nodes from Kabbalistic tradition.
*   **Nadis & Meridians**: Energy channels (Ida, Pingala, Sushumna) and TCM meridians.
*   **Marmas**: Vital energy points from Ayurveda.
*   **Dantians**: Energy reservoirs from Taoist alchemy.

---

## 4. The "Wiring" (Flow Networks)
*   **Nervous (Peripheral)**: Brachial plexus, Sciatic nerve.
*   **Circulatory**: Major Arteries and Veins.
*   **Lymphatic**: Nodes and Vessels.

---

## 5. The Muscular System
**Group ID**: `muscular-system`
*   Current focus is on major superficial muscle groups (Pectoralis, Deltoid, Rectus Abdominis, Quadriceps, etc.).

---

## Technical Implementation Notes
*   **Naming**: `id="bone_[name]_[side]"` (e.g., `bone_femur_left`).
*   **Data Attributes**:
    *   `data-name`: Common name (e.g., "Left Femur").
    *   `data-medical-name`: Latin/Scientific name (e.g., "Femur Sinister").
    *   `data-desc`: Short description or lore for tooltips.
    *   `data-bone-id`: Grouping ID for statistics (e.g., parts of the same bone).
*   **Styling**:
    *   Base class: `.bone`, `.organ`, `.chakra`, etc.
    *   Hover effects handled via CSS/JS.
*   **Interactivity**:
    *   `mouseover`: Displays info in the `part-name` panel.
    *   Toggles: Control visibility of entire systems independently.
