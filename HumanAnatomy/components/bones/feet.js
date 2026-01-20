export const feetSVG = `
    <!--
        FEET - Anatomically Accurate Reconstruction (Thinned & Natural Splay)
        - Metatarsals narrowed to ~6-8 units shaft width.
        - Natural lateral splay implemented for Rays 3-5.
        - Phalanges thinned to match organic bone proportions.
    -->

    <!-- ==================== LEFT FOOT ==================== -->
    <g id="foot_left_group" transform="translate(-25, 15)">

    <!-- LEFT TARSALS (Unchanged base) -->
    <path id="bone_talus_left" class="bone" data-name="Left Talus" d="M -75 1845 C -65 1845, -55 1850, -50 1860 L -48 1870 C -50 1880, -60 1885, -75 1885 C -90 1885, -100 1880, -102 1870 L -100 1860 C -95 1850, -85 1845, -75 1845 Z" />
    <path id="bone_calcaneus_left" class="bone" data-name="Left Calcaneus" d="M -45 1890 L -50 1875 C -55 1870, -60 1872, -63 1878 L -67 1892 L -85 1895 L -90 1905 L -95 1920 L -50 1925 C -47 1920, -43 1908, -45 1890 Z M -60 1900 Q -65 1898, -67 1902 L -67 1912 Q -63 1915, -57 1912 Z" fill-rule="evenodd" />
    <path id="bone_navicular_left" class="bone" data-name="Left Navicular" d="M -67 1892 Q -63 1890, -60 1895 L -57 1898 C -55 1900, -53 1903, -54 1907 L -57 1912 L -73 1915 L -83 1912 C -85 1908, -84 1902, -82 1898 L -77 1895 Q -73 1892, -67 1892 Z" fill-rule="evenodd" />
    <path id="bone_cuboid_left" class="bone" data-name="Left Cuboid" d="M -85 1898 L -95 1902 L -97 1920 L -100 1925 L -87 1927 L -83 1920 L -82 1905 Q -83 1900, -85 1898 Z" />
    <path id="bone_cuneiform_medial_left" class="bone" data-name="Left Medial Cuneiform" d="M -57 1915 L -60 1912 L -65 1915 L -63 1930 L -57 1935 C -55 1933, -54 1928, -55 1922 Z" />
    <path id="bone_cuneiform_inter_left" class="bone" data-name="Left Intermediate Cuneiform" d="M -65 1915 L -70 1917 L -71 1925 L -68 1932 L -63 1930 Z" />
    <path id="bone_cuneiform_lateral_left" class="bone" data-name="Left Lateral Cuneiform" d="M -73 1917 L -83 1918 L -85 1922 L -83 1930 L -75 1932 L -71 1928 Z" />

    <!-- LEFT METATARSALS (Thinner & Splayed) -->
    <!-- MT1: Thickest, slightly medial -->
    <path id="bone_mt1_left" class="bone" data-name="Left MT I" 
        d="M -56 1935 
           Q -60 1935, -61 1940
           L -62 1990
           Q -61 1995, -59 2000
           L -63 2010 
           Q -64 2015, -60 2018 
           Q -55 2015, -53 2010
           L -52 2000
           Q -54 1995, -53 1990
           L -52 1940
           Q -53 1935, -56 1935 Z" />

    <!-- MT2: Intermediate, straightish -->
    <path id="bone_mt2_left" class="bone" data-name="Left MT II" 
        d="M -66 1932 
           L -68 1940
           L -69 2000
           Q -68 2005, -70 2010
           L -70 2020 
           Q -68 2025, -64 2020 
           L -63 2010
           Q -62 2005, -63 2000
           L -64 1940
           L -66 1932 Z" />

    <!-- MT3: Thinner shaft, Lateral splay -->
    <path id="bone_mt3_left" class="bone" data-name="Left MT III" 
        d="M -76 1932 
           L -78 1940
           L -80 2000
           Q -78 2005, -80 2010
           L -80 2015
           Q -82 2020, -78 2020
           L -74 2015
           Q -74 2010, -74 2000
           L -74 1940
           L -76 1932 Z" />

    <!-- MT4: Thinner, Increased Splay -->
    <path id="bone_mt4_left" class="bone" data-name="Left MT IV" 
        d="M -85 1928 
           L -88 1935
           L -92 1990
           Q -90 1995, -92 2000
           L -94 2005
           Q -96 2010, -92 2010
           L -88 2005
           Q -88 2000, -86 1990
           L -84 1935
           L -85 1928 Z" />

    <!-- MT5: Thinnest, Max Splay -->
    <path id="bone_mt5_left" class="bone" data-name="Left MT V" 
        d="M -95 1925 
           L -100 1930
           L -106 1985
           Q -104 1990, -107 1995
           L -109 1995
           Q -112 2000, -108 2000
           L -102 1995
           Q -102 1990, -100 1985
           L -94 1930
           L -95 1925 Z" />

    <!-- LEFT PHALANGES (Thinner & Splayed for Skin Separation) -->
    <!-- Toe 1 (Big Toe) - Minimal Shift -->
    <path id="bone_pp1_foot_left" class="bone" data-name="Left PP I" 
        d="M -58 2022 Q -62 2022, -63 2025 L -64 2050 Q -65 2055, -60 2055 Q -56 2055, -55 2050 L -53 2025 Q -54 2022, -58 2022 Z" />
    <path id="bone_dp1_foot_left" class="bone" data-name="Left DP I" 
        d="M -58 2060 L -63 2060 L -63 2080 Q -63 2090, -59 2090 Q -56 2090, -56 2080 L -56 2060 Z" />
        
    <!-- Toe 2 (Shifted Left -4) -->
    <path id="bone_pp2_foot_left" class="bone" data-name="Left PP II" 
        d="M -70 2025 L -72 2050 Q -73 2053, -70 2053 Q -67 2053, -67 2050 L -68 2025 Z" />
    <path id="bone_ip2_foot_left" class="bone" data-name="Left MP II" 
        d="M -69 2056 L -71 2075 Q -72 2078, -69 2078 Q -67 2078, -67 2075 L -69 2056 Z" />
    <path id="bone_dp2_foot_left" class="bone" data-name="Left DP II" 
        d="M -69 2080 L -70 2090 Q -70 2095, -69 2095 Q -67 2095, -68 2090 L -69 2080 Z" />

    <!-- Toe 3 (Shifted Left -8) -->
    <path id="bone_pp3_foot_left" class="bone" data-name="Left PP III" 
        d="M -85 2020 L -87 2045 Q -88 2048, -85 2048 Q -82 2048, -82 2045 L -83 2020 Z" />
    <path id="bone_ip3_foot_left" class="bone" data-name="Left MP III" 
        d="M -84 2051 L -86 2070 Q -87 2073, -84 2073 Q -82 2073, -82 2070 L -84 2051 Z" />
    <path id="bone_dp3_foot_left" class="bone" data-name="Left DP III" 
        d="M -84 2076 L -85 2086 Q -85 2090, -84 2090 Q -82 2090, -83 2086 L -84 2076 Z" />

    <!-- Toe 4 (Shifted Left -12) -->
    <path id="bone_pp4_foot_left" class="bone" data-name="Left PP IV" 
        d="M -102 2012 L -104 2035 Q -106 2038, -102 2038 Q -99 2038, -99 2035 L -100 2012 Z" />
    <path id="bone_ip4_foot_left" class="bone" data-name="Left MP IV" 
        d="M -101 2041 L -104 2060 Q -105 2063, -102 2063 Q -99 2063, -99 2060 L -101 2041 Z" />
    <path id="bone_dp4_foot_left" class="bone" data-name="Left DP IV" 
        d="M -101 2066 L -102 2076 Q -103 2080, -102 2080 Q -100 2080, -101 2076 L -101 2066 Z" />

    <!-- Toe 5 (Shifted Left -16) -->
    <path id="bone_pp5_foot_left" class="bone" data-name="Left PP V" 
        d="M -120 2002 L -124 2025 Q -125 2028, -122 2028 Q -118 2028, -117 2025 L -118 2002 Z" />
    <path id="bone_ip5_foot_left" class="bone" data-name="Left MP V" 
        d="M -120 2031 L -123 2050 Q -124 2053, -121 2053 Q -118 2053, -118 2050 L -120 2031 Z" />
    <path id="bone_dp5_foot_left" class="bone" data-name="Left DP V" 
        d="M -120 2056 L -122 2065 Q -123 2068, -121 2068 Q -119 2068, -120 2065 L -120 2056 Z" />

    </g>

    <!-- ==================== RIGHT FOOT (Mirrored) ==================== -->
    <g id="foot_right_group" transform="translate(25, 15)">

    <!-- TARSALS (Mirrored) -->
    <path id="bone_talus_right" class="bone" data-name="Right Talus" d="M 75 1845 C 65 1845, 55 1850, 50 1860 L 48 1870 C 50 1880, 60 1885, 75 1885 C 90 1885, 100 1880, 102 1870 L 100 1860 C 95 1850, 85 1845, 75 1845 Z" />
    <path id="bone_calcaneus_right" class="bone" data-name="Right Calcaneus" d="M 45 1890 L 50 1875 C 55 1870, 60 1872, 63 1878 L 67 1892 L 85 1895 L 90 1905 L 95 1920 L 50 1925 C 47 1920, 43 1908, 45 1890 Z M 60 1900 Q 65 1898, 67 1902 L 67 1912 Q 63 1915, 57 1912 Z" fill-rule="evenodd" />
    <path id="bone_navicular_right" class="bone" data-name="Right Navicular" d="M 67 1892 Q 63 1890, 60 1895 L 57 1898 C 55 1900, 53 1903, 54 1907 L 57 1912 L 73 1915 L 83 1912 C 85 1908, 84 1902, 82 1898 L 77 1895 Q 73 1892, 67 1892 Z" fill-rule="evenodd" />
    <path id="bone_cuboid_right" class="bone" data-name="Right Cuboid" d="M 85 1898 L 95 1902 L 97 1920 L 100 1925 L 87 1927 L 83 1920 L 82 1905 Q 83 1900, 85 1898 Z" />
    <path id="bone_cuneiform_medial_right" class="bone" data-name="Right Medial Cuneiform" d="M 57 1915 L 60 1912 L 65 1915 L 63 1930 L 57 1935 C 55 1933, 54 1928, 55 1922 Z" />
    <path id="bone_cuneiform_inter_right" class="bone" data-name="Right Intermediate Cuneiform" d="M 65 1915 L 70 1917 L 71 1925 L 68 1932 L 63 1930 Z" />
    <path id="bone_cuneiform_lateral_right" class="bone" data-name="Right Lateral Cuneiform" d="M 73 1917 L 83 1918 L 85 1922 L 83 1930 L 75 1932 L 71 1928 Z" />

    <!-- RIGHT METATARSALS (Thinner & Splayed) -->
    <!-- MT1 -->
    <path id="bone_mt1_right" class="bone" data-name="Right MT I" 
        d="M 56 1935 
           Q 60 1935, 61 1940
           L 62 1990
           Q 61 1995, 59 2000
           L 63 2010 
           Q 64 2015, 60 2018 
           Q 55 2015, 53 2010
           L 52 2000
           Q 54 1995, 53 1990
           L 52 1940
           Q 53 1935, 56 1935 Z" />

    <!-- MT2 -->
    <path id="bone_mt2_right" class="bone" data-name="Right MT II" 
        d="M 66 1932 
           L 68 1940
           L 69 2000
           Q 68 2005, 70 2010
           L 70 2020 
           Q 68 2025, 64 2020 
           L 63 2010
           Q 62 2005, 63 2000
           L 64 1940
           L 66 1932 Z" />

    <!-- MT3 -->
    <path id="bone_mt3_right" class="bone" data-name="Right MT III" 
        d="M 76 1932 
           L 78 1940
           L 80 2000
           Q 78 2005, 80 2010
           L 80 2015
           Q 82 2020, 78 2020
           L 74 2015
           Q 74 2010, 74 2000
           L 74 1940
           L 76 1932 Z" />

    <!-- MT4 -->
    <path id="bone_mt4_right" class="bone" data-name="Right MT IV" 
        d="M 85 1928 
           L 88 1935
           L 92 1990
           Q 90 1995, 92 2000
           L 94 2005
           Q 96 2010, 92 2010
           L 88 2005
           Q 88 2000, 86 1990
           L 84 1935
           L 85 1928 Z" />

    <!-- MT5 -->
    <path id="bone_mt5_right" class="bone" data-name="Right MT V" 
        d="M 95 1925 
           L 100 1930
           L 106 1985
           Q 104 1990, 107 1995
           L 109 1995
           Q 112 2000, 108 2000
           L 102 1995
           Q 102 1990, 100 1985
           L 94 1930
           L 95 1925 Z" />

    <!-- RIGHT PHALANGES (Mirrored Splay) -->
    <!-- Toe 1 -->
    <path id="bone_pp1_foot_right" class="bone" data-name="Right PP I" 
        d="M 58 2022 Q 62 2022, 63 2025 L 64 2050 Q 65 2055, 60 2055 Q 56 2055, 55 2050 L 53 2025 Q 54 2022, 58 2022 Z" />
    <path id="bone_dp1_foot_right" class="bone" data-name="Right DP I" 
        d="M 58 2060 L 63 2060 L 63 2080 Q 63 2090, 59 2090 Q 56 2090, 56 2080 L 56 2060 Z" />

    <!-- Toe 2 (Shifted Right +4) -->
    <path id="bone_pp2_foot_right" class="bone" data-name="Right PP II" 
        d="M 70 2025 L 72 2050 Q 73 2053, 70 2053 Q 67 2053, 67 2050 L 68 2025 Z" />
    <path id="bone_ip2_foot_right" class="bone" data-name="Right MP II" 
        d="M 69 2056 L 71 2075 Q 72 2078, 69 2078 Q 67 2078, 67 2075 L 69 2056 Z" />
    <path id="bone_dp2_foot_right" class="bone" data-name="Right DP II" 
        d="M 69 2080 L 70 2090 Q 70 2095, 69 2095 Q 67 2095, 68 2090 L 69 2080 Z" />

    <!-- Toe 3 (Shifted Right +8) -->
    <path id="bone_pp3_foot_right" class="bone" data-name="Right PP III" 
        d="M 85 2020 L 87 2045 Q 88 2048, 85 2048 Q 82 2048, 82 2045 L 83 2020 Z" />
    <path id="bone_ip3_foot_right" class="bone" data-name="Right MP III" 
        d="M 84 2051 L 86 2070 Q 87 2073, 84 2073 Q 82 2073, 82 2070 L 84 2051 Z" />
    <path id="bone_dp3_foot_right" class="bone" data-name="Right DP III" 
        d="M 84 2076 L 85 2086 Q 85 2090, 84 2090 Q 82 2090, 83 2086 L 84 2076 Z" />

    <!-- Toe 4 (Shifted Right +12) -->
    <path id="bone_pp4_foot_right" class="bone" data-name="Right PP IV" 
        d="M 102 2012 L 104 2035 Q 106 2038, 102 2038 Q 99 2038, 99 2035 L 100 2012 Z" />
    <path id="bone_ip4_foot_right" class="bone" data-name="Right MP IV" 
        d="M 101 2041 L 104 2060 Q 105 2063, 102 2063 Q 99 2063, 99 2060 L 101 2041 Z" />
    <path id="bone_dp4_foot_right" class="bone" data-name="Right DP IV" 
        d="M 101 2066 L 102 2076 Q 103 2080, 102 2080 Q 100 2080, 101 2076 L 101 2066 Z" />

    <!-- Toe 5 (Shifted Right +16) -->
    <path id="bone_pp5_foot_right" class="bone" data-name="Right PP V" 
        d="M 120 2002 L 124 2025 Q 125 2028, 122 2028 Q 118 2028, 117 2025 L 118 2002 Z" />
    <path id="bone_ip5_foot_right" class="bone" data-name="Right MP V" 
        d="M 120 2031 L 123 2050 Q 124 2053, 121 2053 Q 118 2053, 118 2050 L 120 2031 Z" />
    <path id="bone_dp5_foot_right" class="bone" data-name="Right DP V" 
        d="M 120 2056 L 122 2065 Q 123 2068, 121 2068 Q 119 2068, 120 2065 L 120 2056 Z" />

    </g>

    <g id="foot_shadows">
        <!-- Arch Shadows (Same) -->
        <path class="bone-shadow" d="M -80 1930 Q -60 1930 -60 2000 L -80 2000 Z" opacity="0.15" />
        <path class="bone-shadow" d="M 80 1930 Q 60 1930 60 2000 L 80 2000 Z" opacity="0.15" />
    </g>
`;
