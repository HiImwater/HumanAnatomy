export const feetSVG = `
    <!--
        FEET - Anatomically Accurate Reconstruction (v5 Width Fix)
        Shifted Laterally +20/-20 to align with new Ankle Joint (X +/- 75).
        
        Medial/Lateral correct (Big Toe Medial).
        Left Foot: Center ~ -75.
        Right Foot: Center ~ 75.
    -->

    <!-- ==================== LEFT FOOT ==================== -->
    <!-- Shift -20 (e.g. Talus X -55 -> -75) -->

    <!-- LEFT TARSALS -->

    <!-- Left Talus -->
    <path id="bone_talus_left" class="bone"
        data-name="Left Talus"
        data-medical-name="Talus Sinister"
        d="M -75 1860
           C -70 1858, -65 1860, -63 1865
           L -60 1875
           Q -62 1885, -67 1888
           L -85 1890
           Q -90 1888, -92 1880
           L -95 1865
           C -93 1860, -87 1858, -80 1860
           Z" />

    <!-- Left Calcaneus -->
    <path id="bone_calcaneus_left" class="bone"
        data-name="Left Calcaneus"
        data-medical-name="Calcaneus Sinister"
        d="M -45 1890
           L -50 1875
           C -55 1870, -60 1872, -63 1878
           L -67 1892
           L -85 1895
           L -90 1905
           L -95 1920
           L -50 1925
           C -47 1920, -43 1908, -45 1890
           Z
           M -60 1900
           Q -65 1898, -67 1902
           L -67 1912
           Q -63 1915, -57 1912
           Z"
           fill-rule="evenodd" />

    <!-- Left Navicular -->
    <path id="bone_navicular_left" class="bone"
        data-name="Left Navicular"
        data-medical-name="Os Naviculare Sinister"
        d="M -67 1892
           Q -63 1890, -60 1895
           L -57 1898
           C -55 1900, -53 1903, -54 1907
           L -57 1912
           L -73 1915
           L -83 1912
           C -85 1908, -84 1902, -82 1898
           L -77 1895
           Q -73 1892, -67 1892
           Z"
           fill-rule="evenodd" />

    <!-- Left Cuboid -->
    <path id="bone_cuboid_left" class="bone"
        data-name="Left Cuboid"
        data-medical-name="Os Cuboideum Sinister"
        d="M -85 1898
           L -95 1902
           L -97 1920
           L -100 1925
           L -87 1927
           L -83 1920
           L -82 1905
           Q -83 1900, -85 1898
           Z" />

    <!-- Left Medial Cuneiform -->
    <path id="bone_cuneiform_medial_left" class="bone"
        data-name="Left Medial Cuneiform"
        data-medical-name="Os Cuneiforme Mediale Sinister"
        d="M -57 1915
           L -60 1912
           L -65 1915
           L -63 1930
           L -57 1935
           C -55 1933, -54 1928, -55 1922
           Z" />

    <!-- Left Intermediate Cuneiform -->
    <path id="bone_cuneiform_inter_left" class="bone"
        data-name="Left Intermediate Cuneiform"
        data-medical-name="Os Cuneiforme Intermedium Sinister"
        d="M -65 1915
           L -70 1917
           L -71 1925
           L -68 1932
           L -63 1930
           Z" />

    <!-- Left Lateral Cuneiform -->
    <path id="bone_cuneiform_lateral_left" class="bone"
        data-name="Left Lateral Cuneiform"
        data-medical-name="Os Cuneiforme Laterale Sinister"
        d="M -73 1917
           L -83 1918
           L -85 1922
           L -83 1930
           L -75 1932
           L -71 1928
           Z" />

    <!-- LEFT METATARSALS -->

    <!-- Left Metatarsal I -->
    <path id="bone_mt1_left" class="bone"
        data-name="Left Metatarsal I"
        data-medical-name="Os Metatarsi I Sinister"
        d="M -55 1935
           L -63 1935
           Q -65 1938, -65 1942
           L -66 2000
           Q -67 2005, -65 2008
           C -63 2010, -59 2010, -57 2008
           Q -55 2005, -56 2000
           L -55 1942
           Q -54 1938, -55 1935
           Z" />

    <!-- Left Metatarsal II -->
    <path id="bone_mt2_left" class="bone"
        data-name="Left Metatarsal II"
        data-medical-name="Os Metatarsi II Sinister"
        d="M -65 1932
           L -71 1932
           Q -73 1935, -73 1938
           L -74 2010
           Q -75 2014, -73 2017
           C -71 2019, -67 2019, -65 2017
           Q -63 2014, -64 2010
           L -65 1938
           Q -64 1935, -65 1932
           Z" />

    <!-- Left Metatarsal III -->
    <path id="bone_mt3_left" class="bone"
        data-name="Left Metatarsal III"
        data-medical-name="Os Metatarsi III Sinister"
        d="M -75 1932
           L -81 1932
           Q -83 1935, -83 1938
           L -84 2005
           Q -85 2009, -83 2012
           C -81 2014, -77 2014, -75 2012
           Q -73 2009, -74 2005
           L -75 1938
           Q -74 1935, -75 1932
           Z" />

    <!-- Left Metatarsal IV -->
    <path id="bone_mt4_left" class="bone"
        data-name="Left Metatarsal IV"
        data-medical-name="Os Metatarsi IV Sinister"
        d="M -85 1925
           L -91 1925
           Q -93 1928, -93 1931
           L -94 1995
           Q -95 1999, -93 2002
           C -91 2004, -87 2004, -85 2002
           Q -83 1999, -84 1995
           L -85 1931
           Q -84 1928, -85 1925
           Z" />

    <!-- Left Metatarsal V -->
    <path id="bone_mt5_left" class="bone"
        data-name="Left Metatarsal V"
        data-medical-name="Os Metatarsi V Sinister"
        d="M -95 1925
           L -100 1927
           L -103 1925
           Q -105 1928, -105 1931
           L -106 1985
           Q -107 1989, -105 1992
           C -103 1994, -99 1994, -97 1992
           Q -95 1989, -96 1985
           L -95 1931
           Q -94 1928, -95 1925
           Z" />

    <!-- LEFT PHALANGES -->

    <!-- Big Toe (Hallux) -->
    <path id="bone_pp1_foot_left" class="bone"
        data-name="Left Foot Proximal Phalanx I"
        data-medical-name="Phalanx Proximalis Hallucis Sinister"
        d="M -56 2010
           C -65 2010, -67 2012, -68 2016
           L -69 2038
           C -70 2044, -67 2046, -65 2046
           L -57 2046
           C -53 2046, -52 2044, -53 2038
           L -54 2016
           C -53 2012, -54 2010, -56 2010
           Z" />

    <path id="bone_dp1_foot_left" class="bone"
        data-name="Left Foot Distal Phalanx I"
        data-medical-name="Phalanx Distalis Hallucis Sinister"
        d="M -54 2048
           L -68 2048
           C -70 2052, -70 2058, -71 2068
           C -71 2074, -67 2078, -61 2078
           C -55 2078, -51 2074, -51 2068
           C -52 2058, -52 2052, -54 2048
           Z" />

    <!-- Toe II -->
    <path id="bone_pp2_foot_left" class="bone" data-name="Left PP II" d="M -64 2019 C -73 2019, -75 2022, -76 2025 L -77 2042 C -78 2046, -75 2048, -73 2048 L -65 2048 C -61 2048, -60 2046, -61 2042 L -62 2025 C -62 2022, -64 2019, -64 2019 Z" />
    <path id="bone_ip2_foot_left" class="bone" data-name="Left MP II" d="M -62 2050 L -76 2050 C -77 2054, -78 2060, -79 2065 C -79 2069, -75 2070, -75 2070 L -63 2070 C -63 2070, -59 2069, -59 2065 C -58 2060, -60 2054, -62 2050 Z" />
    <path id="bone_dp2_foot_left" class="bone" data-name="Left DP II" d="M -60 2072 L -78 2072 C -79 2076, -80 2080, -81 2083 C -80 2087, -73 2088, -69 2088 C -65 2088, -58 2087, -57 2083 C -58 2080, -58 2076, -60 2072 Z" />

    <!-- Toe III -->
    <path id="bone_pp3_foot_left" class="bone" data-name="Left PP III" d="M -74 2014 C -83 2014, -85 2017, -86 2020 L -87 2035 C -88 2039, -85 2041, -83 2041 L -75 2041 C -71 2041, -70 2039, -71 2035 L -72 2020 C -72 2017, -74 2014, -74 2014 Z" />
    <path id="bone_ip3_foot_left" class="bone" data-name="Left MP III" d="M -72 2043 L -86 2043 C -87 2047, -88 2053, -89 2058 C -89 2062, -85 2063, -85 2063 L -73 2063 C -73 2063, -69 2062, -69 2058 C -68 2053, -70 2047, -72 2043 Z" />
    <path id="bone_dp3_foot_left" class="bone" data-name="Left DP III" d="M -70 2065 L -88 2065 C -89 2069, -90 2073, -91 2076 C -90 2080, -83 2081, -79 2081 C -75 2081, -68 2080, -67 2076 C -68 2073, -68 2069, -70 2065 Z" />

    <!-- Toe IV -->
    <path id="bone_pp4_foot_left" class="bone" data-name="Left PP IV" d="M -84 2004 C -93 2004, -95 2007, -96 2010 L -97 2023 C -98 2027, -95 2029, -93 2029 L -85 2029 C -81 2029, -80 2027, -81 2023 L -82 2010 C -82 2007, -84 2004, -84 2004 Z" />
    <path id="bone_ip4_foot_left" class="bone" data-name="Left MP IV" d="M -82 2031 L -96 2031 C -97 2035, -98 2041, -99 2046 C -99 2050, -95 2051, -95 2051 L -83 2051 C -83 2051, -79 2050, -79 2046 C -78 2041, -80 2035, -82 2031 Z" />
    <path id="bone_dp4_foot_left" class="bone" data-name="Left DP IV" d="M -80 2053 L -98 2053 C -99 2057, -100 2061, -101 2064 C -100 2068, -93 2069, -89 2069 C -85 2069, -78 2068, -77 2064 C -78 2061, -78 2057, -80 2053 Z" />

    <!-- Toe V -->
    <path id="bone_pp5_foot_left" class="bone" data-name="Left PP V" d="M -96 1994 C -105 1994, -107 1997, -108 2000 L -109 2010 C -110 2014, -107 2016, -105 2016 L -97 2016 C -93 2016, -92 2014, -93 2010 L -94 2000 C -93 1997, -96 1994, -96 1994 Z" />
    <path id="bone_ip5_foot_left" class="bone" data-name="Left MP V" d="M -94 2018 L -108 2018 C -109 2022, -110 2028, -111 2031 C -111 2035, -107 2036, -107 2036 L -95 2036 C -95 2036, -91 2035, -92 2031 C -91 2028, -92 2022, -94 2018 Z" />
    <path id="bone_dp5_foot_left" class="bone" data-name="Left DP V" d="M -92 2038 L -110 2038 C -111 2042, -112 2046, -113 2048 C -112 2052, -105 2053, -101 2053 C -97 2053, -90 2052, -89 2048 C -90 2046, -90 2042, -92 2038 Z" />


    <!-- ==================== RIGHT FOOT ==================== -->
    <!-- Mirrored from Left (X -> -X) -->
    <!-- Talus at 75 -->

    <path id="bone_talus_right" class="bone"
        data-name="Right Talus"
        data-medical-name="Talus Dexter"
        d="M 75 1860 C 70 1858, 65 1860, 63 1865 L 60 1875 Q 62 1885, 67 1888 L 85 1890 Q 90 1888, 92 1880 L 95 1865 C 93 1860, 87 1858, 80 1860 Z" />

    <path id="bone_calcaneus_right" class="bone"
        data-name="Right Calcaneus"
        data-medical-name="Calcaneus Dexter"
        d="M 45 1890 L 50 1875 C 55 1870, 60 1872, 63 1878 L 67 1892 L 85 1895 L 90 1905 L 95 1920 L 50 1925 C 47 1920, 43 1908, 45 1890 Z M 60 1900 Q 65 1898, 67 1902 L 67 1912 Q 63 1915, 57 1912 Z"
        fill-rule="evenodd" />

    <path id="bone_navicular_right" class="bone"
        data-name="Right Navicular"
        data-medical-name="Os Naviculare Dexter"
        d="M 67 1892 Q 63 1890, 60 1895 L 57 1898 C 55 1900, 53 1903, 54 1907 L 57 1912 L 73 1915 L 83 1912 C 85 1908, 84 1902, 82 1898 L 77 1895 Q 73 1892, 67 1892 Z"
        fill-rule="evenodd" />

    <path id="bone_cuboid_right" class="bone"
        data-name="Right Cuboid"
        data-medical-name="Os Cuboideum Dexter"
        d="M 85 1898 L 95 1902 L 97 1920 L 100 1925 L 87 1927 L 83 1920 L 82 1905 Q 83 1900, 85 1898 Z" />

    <path id="bone_cuneiform_medial_right" class="bone"
        data-name="Right Medial Cuneiform"
        data-medical-name="Os Cuneiforme Mediale Dexter"
        d="M 57 1915 L 60 1912 L 65 1915 L 63 1930 L 57 1935 C 55 1933, 54 1928, 55 1922 Z" />

    <path id="bone_cuneiform_inter_right" class="bone"
        data-name="Right Intermediate Cuneiform"
        data-medical-name="Os Cuneiforme Intermedium Dexter"
        d="M 65 1915 L 70 1917 L 71 1925 L 68 1932 L 63 1930 Z" />

    <path id="bone_cuneiform_lateral_right" class="bone"
        data-name="Right Lateral Cuneiform"
        data-medical-name="Os Cuneiforme Laterale Dexter"
        d="M 73 1917 L 83 1918 L 85 1922 L 83 1930 L 75 1932 L 71 1928 Z" />

    <path id="bone_mt1_right" class="bone"
        data-name="Right Metatarsal I"
        data-medical-name="Os Metatarsi I Dexter"
        d="M 55 1935 L 63 1935 Q 65 1938, 65 1942 L 66 2000 Q 67 2005, 65 2008 C 63 2010, 59 2010, 57 2008 Q 55 2005, 56 2000 L 55 1942 Q 54 1938, 55 1935 Z" />

    <path id="bone_mt2_right" class="bone"
        data-name="Right Metatarsal II"
        data-medical-name="Os Metatarsi II Dexter"
        d="M 65 1932 L 71 1932 Q 73 1935, 73 1938 L 74 2010 Q 75 2014, 73 2017 C 71 2019, 67 2019, 65 2017 Q 63 2014, 64 2010 L 65 1938 Q 64 1935, 65 1932 Z" />

    <path id="bone_mt3_right" class="bone"
        data-name="Right Metatarsal III"
        data-medical-name="Os Metatarsi III Dexter"
        d="M 75 1932 L 81 1932 Q 83 1935, 83 1938 L 84 2005 Q 85 2009, 83 2012 C 81 2014, 77 2014, 75 2012 Q 73 2009, 74 2005 L 75 1938 Q 74 1935, 75 1932 Z" />

    <path id="bone_mt4_right" class="bone"
        data-name="Right Metatarsal IV"
        data-medical-name="Os Metatarsi IV Dexter"
        d="M 85 1925 L 91 1925 Q 93 1928, 93 1931 L 94 1995 Q 95 1999, 93 2002 C 91 2004, 87 2004, 85 2002 Q 83 1999, 84 1995 L 85 1931 Q 84 1928, 85 1925 Z" />

    <path id="bone_mt5_right" class="bone"
        data-name="Right Metatarsal V"
        data-medical-name="Os Metatarsi V Dexter"
        d="M 95 1925 L 100 1927 L 103 1925 Q 105 1928, 105 1931 L 106 1985 Q 107 1989, 105 1992 C 103 1994, 99 1994, 97 1992 Q 95 1989, 96 1985 L 95 1931 Q 94 1928, 95 1925 Z" />

    <path id="bone_pp1_foot_right" class="bone" data-name="Right Foot Proximal Phalanx I" d="M 56 2010 C 65 2010, 67 2012, 68 2016 L 69 2038 C 70 2044, 67 2046, 65 2046 L 57 2046 C 53 2046, 52 2044, 53 2038 L 54 2016 C 53 2012, 54 2010, 56 2010 Z" />
    <path id="bone_dp1_foot_right" class="bone" data-name="Right Foot Distal Phalanx I" d="M 54 2048 L 68 2048 C 70 2052, 70 2058, 71 2068 C 71 2074, 67 2078, 61 2078 C 55 2078, 51 2074, 51 2068 C 52 2058, 52 2052, 54 2048 Z" />

    <path id="bone_pp2_foot_right" class="bone" data-name="Right PP II" d="M 64 2019 C 73 2019, 75 2022, 76 2025 L 77 2042 C 78 2046, 75 2048, 73 2048 L 65 2048 C 61 2048, 60 2046, 61 2042 L 62 2025 C 62 2022, 64 2019, 64 2019 Z" />
    <path id="bone_ip2_foot_right" class="bone" data-name="Right MP II" d="M 62 2050 L 76 2050 C 77 2054, 78 2060, 79 2065 C 79 2069, 75 2070, 75 2070 L 63 2070 C 63 2070, 59 2069, 59 2065 C 58 2060, 60 2054, 62 2050 Z" />
    <path id="bone_dp2_foot_right" class="bone" data-name="Right DP II" d="M 60 2072 L 78 2072 C 79 2076, 80 2080, 81 2083 C 80 2087, 73 2088, 69 2088 C 65 2088, 58 2087, 57 2083 C 58 2080, 58 2076, 60 2072 Z" />

    <path id="bone_pp3_foot_right" class="bone" data-name="Right PP III" d="M 74 2014 C 83 2014, 85 2017, 86 2020 L 87 2035 C 88 2039, 85 2041, 83 2041 L 75 2041 C 71 2041, 70 2039, 71 2035 L 72 2020 C 72 2017, 74 2014, 74 2014 Z" />
    <path id="bone_ip3_foot_right" class="bone" data-name="Right MP III" d="M 72 2043 L 86 2043 C 87 2047, 88 2053, 89 2058 C 89 2062, 85 2063, 85 2063 L 73 2063 C 73 2063, 69 2062, 69 2058 C 68 2053, 70 2047, 72 2043 Z" />
    <path id="bone_dp3_foot_right" class="bone" data-name="Right DP III" d="M 70 2065 L 88 2065 C 89 2069, 90 2073, 91 2076 C 90 2080, 83 2081, 79 2081 C 75 2081, 68 2080, 67 2076 C 68 2073, 68 2069, 70 2065 Z" />

    <path id="bone_pp4_foot_right" class="bone" data-name="Right PP IV" d="M 84 2004 C 93 2004, 95 2007, 96 2010 L 97 2023 C 98 2027, 95 2029, 93 2029 L 85 2029 C 81 2029, 80 2027, 81 2023 L 82 2010 C 82 2007, 84 2004, 84 2004 Z" />
    <path id="bone_ip4_foot_right" class="bone" data-name="Right MP IV" d="M 82 2031 L 96 2031 C 97 2035, 98 2041, 99 2046 C 99 2050, 95 2051, 95 2051 L 83 2051 C 83 2051, 79 2050, 79 2046 C 78 2041, 80 2035, 82 2031 Z" />
    <path id="bone_dp4_foot_right" class="bone" data-name="Right DP IV" d="M 80 2053 L 98 2053 C 99 2057, 100 2061, 101 2064 C 100 2068, 93 2069, 89 2069 C 85 2069, 78 2068, 77 2064 C 78 2061, 78 2057, 80 2053 Z" />

    <path id="bone_pp5_foot_right" class="bone" data-name="Right PP V" d="M 96 1994 C 105 1994, 107 1997, 108 2000 L 109 2010 C 110 2014, 107 2016, 105 2016 L 97 2016 C 93 2016, 92 2014, 93 2010 L 94 2000 C 93 1997, 96 1994, 96 1994 Z" />
    <path id="bone_ip5_foot_right" class="bone" data-name="Right MP V" d="M 94 2018 L 108 2018 C 109 2022, 110 2028, 111 2031 C 111 2035, 107 2036, 107 2036 L 95 2036 C 95 2036, 91 2035, 92 2031 C 91 2028, 92 2022, 94 2018 Z" />
    <path id="bone_dp5_foot_right" class="bone" data-name="Right DP V" d="M 92 2038 L 110 2038 C 111 2042, 112 2046, 113 2048 C 112 2052, 105 2053, 101 2053 C 97 2053, 90 2052, 89 2048 C 90 2046, 90 2042, 92 2038 Z" />
`;
