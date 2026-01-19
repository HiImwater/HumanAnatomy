export const upperAbdominalOrgansSVG = `
<defs>
    <!-- Liver Texture -->
    <pattern id="liverTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="1" fill="#5a3a3a" opacity="0.1"/>
        <circle cx="15" cy="15" r="1.5" fill="#5a3a3a" opacity="0.1"/>
    </pattern>
</defs>

<g id="organs_upper_abdominal">

    <!-- PANCREAS (Posterior to Stomach)
         Placement: Retroperitoneal. Y=620-660.
    -->
    <path id="organ_pancreas" class="organ" data-name="Pancreas" data-medical-name="Pancreas"
        d="M 30 650        
           C 40 670, 10 670, 10 660
           L -10 650       
           L -50 640       
           L -80 635       
           C -90 630, -80 620, -60 625
           L 10 635
           C 25 635, 30 640, 30 650
           Z"
        fill="#e6cf8b" stroke="#ccb370" stroke-width="1">
        <title>Pancreas</title>
    </path>


    <!-- SPLEEN
         Placement: LUQ, Ribs 9-11. Y=580-615 (Corrected Anatomic Scale).
    -->
    <path id="organ_spleen" class="organ" data-name="Spleen" data-medical-name="Lien"
        d="M -90 580
           C -120 580, -130 600, -120 615
           C -110 615, -90 610, -80 600
           C -75 595, -80 585, -90 580
           Z"
        fill="#7b3f46" stroke="#5a2e33" stroke-width="1">
        <title>Spleen</title>
    </path>


    <!-- STOMACH
         Placement: LUQ. Y=550-680.
    -->
    <path id="organ_stomach" class="organ" data-name="Stomach" data-medical-name="Gaster"
        d="M -10 560       
           C -30 540, -60 550, -80 580 
           C -90 620, -80 660, -50 680 
           C -20 690, 10 680, 20 660   
           C 25 650, 20 640, 10 640
           C -10 640, -30 630, -30 600 
           C -30 580, -20 570, -10 560
           Z"
        fill="#de8f8f" stroke="#b37373" stroke-width="1.5">
        <title>Stomach</title>
    </path>


    <!-- LIVER
         Placement: RUQ, largest organ. Y=530-640 (Corrected Inferior Border).
         Right Lobe (large), Left Lobe (small, crosses midline).
    -->
    <path id="organ_liver" class="organ" data-name="Liver" data-medical-name="Hepar"
        d="M 125 580       
           L 120 540       
           C 100 480, 0 520, -50 540   
           L -60 570
           L -10 590       
           L 40 580        
           C 50 620, 90 640, 125 580   
           Z"
        fill="url(#liverTexture)" fill-color="#8b4513" stroke="#5e2f0d" stroke-width="1.5">
        <title>Liver</title>
    </path>


    <!-- GALLBLADDER
         Placement: Under right lobe of liver. Y=630.
    -->
    <path id="organ_gallbladder" class="organ" data-name="Gallbladder" data-medical-name="Vesica Biliaris"
        d="M 50 620
           C 40 620, 40 640, 50 650    
           C 60 660, 70 640, 65 620    
           L 50 620
           Z"
        fill="#556b2f" stroke="#3a4a20" stroke-width="1">
        <title>Gallbladder</title>
    </path>

</g>
`;
