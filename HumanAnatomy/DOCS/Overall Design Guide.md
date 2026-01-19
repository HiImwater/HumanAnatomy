# Human Anatomy SVG Structure Guide

This document serves as the master blueprint for reconstructing the human body in SVG. We will follow a hierarchical approach, building from the bones outward.

## Global Settings
- **Subject**: Adult Male, 6ft (approx. 183cm), 95th Percentile Stature (US Male reference).
- **Accuracy Standard**: Medical-grade anatomical correctness.
    - **Morphology Source**: *Gray's Anatomy* (41st Ed or equivalent) for bone shape and features.
    - **Dimensional Source**: *ANSUR II (2012 Anthropometric Survey of U.S. Army Personnel)* and *NASA-STD-3000 Vol 1*.
    - All bones must be represented individually.
    - Proportions must align with specific data points (e.g., Tibiale height, Acromial height) from ANSUR II.
- **Coordinate System**: Layered SVG with groups (`<g>`) per system.
- **Z-Index Layering (Bottom to Top)**:
    1.  Skeletal System (Bones)
    2.  Organ Systems (Viscera)
    3.  Nervous & Circulatory Systems (Wiring/Plumbing)
    4.  Muscular System
    5.  Integumentary System (Skin)

## Validation Protocol
Before finalizing any component, check against:
1.  **Shape Validation**: *Gray's Anatomy* / *Netter’s Atlas of Human Anatomy*.
2.  **Dimensional Validation**: *ANSUR II* 95th Percentile Male data column.
    - Example Check: *Acromial Height (Standing)* should be approx. 154cm for a 183cm subject.
3.  **Relative Positioning**: Verify articulation points (e.g., humerus head in glenoid cavity).

## 1. The Skeletal System (206 Bones)
**Group ID**: `skeletal-system`
**Layer**: 1 (Bottom)

### The Axial Skeleton (80 bones)
*   **Skull** (22)
    *   *Cranial (8)*: Frontal, Parietal (x2), Temporal (x2), Occipital, Sphenoid, Ethmoid.
    *   *Facial (14)*: Maxilla (x2), Zygomatic (x2), Mandible, Nasal (x2), Palatine (x2), Inferior nasal concha (x2), Lacrimal (x2), Vomer.
*   **Auditory Ossicles** (6): Malleus (x2), Incus (x2), Stapes (x2).
*   **Hyoid Bone** (1)
*   **Vertebral Column** (26 - verify distinct curvature):
    *   *Cervical (7)*: Atlas (C1), Axis (C2), C3-C7.
    *   *Thoracic (12)*: T1-T12 (Generic shape differences between upper/lower).
    *   *Lumbar (5)*: L1-L5 (Larger bodies).
    *   *Sacrum (1)*: 5 fused vertebrae.
    *   *Coccyx (1)*: 4 fused vertebrae.
*   **Thoracic Cage** (25):
    *   *Sternum*: Manubrium, Body, Xiphoid Process.
    *   *Ribs (24)*: True Ribs (1-7), False Ribs (8-10), Floating Ribs (11-12).

### The Appendicular Skeleton (126 bones)
*   **Pectoral Girdles** (4):
    *   *Clavicle (2)*: S-shaped curve.
    *   *Scapula (2)*: Precise features (spine, acromion, coracoid process).
*   **Upper Limbs** (60):
    *   *Humerus (2)*.
    *   *Radius (2)* & *Ulna (2)* (Note: Ulna longer, Radius pivots).
    *   *Carpals (16)*: Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate (x2 sides).
    *   *Metacarpals (10)*: I-V (x2 sides).
    *   *Phalanges (28)*: Proximal, Middle, Distal (Thumb lacks Middle) (x2 sides).
*   **Pelvic Girdle** (2):
    *   *Hip Bones (2)*: Each fused from Ilium, Ischium, Pubis.
*   **Lower Limbs** (60):
    *   *Femur (2)*: Longest bone, angled slightly inward.
    *   *Patella (2)*: Sesamoid bone.
    *   *Tibia (2)*: Weight bearing.
    *   *Fibula (2)*: Non-weight bearing, lateral.
    *   *Tarsals (14)*: Calcaneus, Talus, Navicular, Cuboid, Cuneiforms (Medial, Intermediate, Lateral) (x2 sides).
    *   *Metatarsals (10)*: I-V (x2 sides).
    *   *Phalanges (28)*: Proximal, Middle, Distal (Big toe lacks Middle) (x2 sides).

## 2. The Organ Systems (Viscera)
**Group ID**: `organ-systems`
**Layer**: 2
*   **Nervous (Central)**: Brain (Cerebrum, Cerebellum, Brainstem), Spinal Cord.
*   **Cardiovascular**: Heart, Major Arteries (Aorta, Carotid), Major Veins (Vena Cava, Jugular).
*   **Respiratory**: Larynx, Trachea, Bronchi, Lungs (Right 3 lobes, Left 2 lobes), Diaphragm.
*   **Digestive**: Esophagus, Stomach, Liver, Gallbladder, Pancreas, Small Intestine (Duodenum, Jejunum, Ileum), Large Intestine (Cecum, Colon, Rectum), Anus.
*   **Urinary**: Kidneys, Ureters, Bladder, Urethra.
*   **Endocrine**: Pituitary, Thyroid, Adrenal glands, Spleen.
*   **Reproductive**: Male reproductive organs.

## 3. The Muscular System
**Group ID**: `muscular-system`
**Layer**: 4 (Note: Above Wiring/Plumbing usually, but context dependent for deep vs superficial)
*   **Head/Neck**: Sternocleidomastoid, Masseter, Trapezius.
*   **Torso**: Pectoralis Major, Latissimus Dorsi, Rectus Abdominis, Obliques, Erector Spinae.
*   **Arms**: Deltoid, Biceps Brachii, Triceps Brachii, Brachioradialis, Forearm flexors/extensors.
*   **Legs**: Gluteus Maximus, Quadriceps (4), Hamstrings (3), Gastrocnemius, Soleus, Tibialis Anterior.

## 4. The "Wiring" and "Plumbing"
**Group ID**: `wiring-plumbing`
**Layer**: 3
*   **Nervous (Peripheral)**: Brachial plexus, Sciatic nerve, Vagus nerve, Femoral nerve.
*   **Circulatory**: Capillaries and smaller vessels.
*   **Lymphatic**: Lymph nodes (neck, armpits, groin) and Lymphatic vessels.

## 5. The Integumentary System (The Shell)
**Group ID**: `integumentary-system`
**Layer**: 5 (Top)
*   **Skin**: Epidermis and Dermis layers.
*   **Fascia**: Connective tissue.
*   **Appendages**: Hair and Nails.

## Technical Implementation Notes
*   **Naming**: `id="bone_[name]_[side]_[index]"` (e.g., `bone_rib_left_07`, `bone_phalanx_distal_thumb_right`).
*   **Styling**: Use classes for bone types (`.bone-long`, `.bone-flat`) and system regions.
*   **Interactivity**: Each part must be pixel-perfectly clickable.
*   **Data Attributes**: Add `data-medical-name` for full anatomical accuracy in tooltips.
