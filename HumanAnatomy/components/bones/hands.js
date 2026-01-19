export const handsSVG = `
    <!-- 
        HANDS (MANUS) - ENHANCED REALISM & ABDUCTED & RAISED (v6)
        Dorsal View (Palm down)
        Organic shapes with Bezier curves.
        RE-ALIGNED: Shifted X inward by 22 units to Match Forearm.
    -->

    <!-- 
        LEFT HAND
        Shifted +22 X from previous wide position.
    -->

    <!-- LEFT CARPALS (Wrist) - Proximal Row -->
    <!-- Scaphoid (-307 -> -285) -->
    <path id="bone_carpal_scaphoid_left" class="bone" data-name="Left Scaphoid" data-medical-name="Os Scaphoideum"
        d="M -285 917 
           C -291 915, -293 907, -281 909
           C -273 910, -271 915, -268 920
           C -265 925, -273 933, -281 933
           C -288 933, -291 925, -285 917 Z" />
           
    <!-- Lunate (-288 -> -266) -->
    <path id="bone_carpal_lunate_left" class="bone" data-name="Left Lunate" data-medical-name="Os Lunatum"
        d="M -266 920 
           C -266 913, -261 913, -258 917
           C -255 921, -255 927, -258 930
           C -261 933, -266 933, -268 927
           C -269 923, -268 921, -266 920 Z" />
           
    <!-- Triquetrum (-277 -> -255) -->
    <path id="bone_carpal_triquetrum_left" class="bone" data-name="Left Triquetrum" data-medical-name="Os Triquetrum"
        d="M -255 923 
           C -255 917, -251 915, -248 917
           C -245 919, -243 925, -245 929
           C -248 933, -253 931, -255 923 Z" />
           
    <!-- Pisiform (-273 -> -251) -->
    <path id="bone_carpal_pisiform_left" class="bone" data-name="Left Pisiform" data-medical-name="Os Pisiforme"
        d="M -251 919 C -253 917, -248 915, -246 917 C -244 919, -246 923, -248 923 C -250 923, -252 921, -251 919 Z" />

    <!-- LEFT CARPALS (Wrist) - Distal Row -->
    <!-- Trapezium (-315 -> -293) -->
    <path id="bone_carpal_trapezium_left" class="bone" data-name="Left Trapezium" data-medical-name="Os Trapezium"
        d="M -293 937 
           C -298 933, -288 930, -281 933
           C -277 935, -275 940, -277 945
           C -279 950, -288 950, -293 947
           C -298 943, -295 940, -293 937 Z" />
           
    <!-- Trapezoid (-297 -> -275) -->
    <path id="bone_carpal_trapezoid_left" class="bone" data-name="Left Trapezoid" data-medical-name="Os Trapezoideum"
        d="M -275 937 
           C -275 933, -271 933, -268 937
           C -265 941, -267 947, -271 947
           C -275 947, -277 943, -275 937 Z" />
           
    <!-- Capitate (-287 -> -265) -->
    <path id="bone_carpal_capitate_left" class="bone" data-name="Left Capitate" data-medical-name="Os Capitatum"
        d="M -265 935 
           C -265 927, -258 927, -258 935
           C -258 943, -255 947, -261 947
           C -267 947, -265 943, -265 935 Z" />
           
    <!-- Hamate (-275 -> -253) -->
    <path id="bone_carpal_hamate_left" class="bone" data-name="Left Hamate" data-medical-name="Os Hamatum"
        d="M -253 935 
           C -253 930, -246 930, -246 935
           C -246 943, -248 947, -253 947
           C -258 947, -253 940, -253 935 Z" />


    <!-- LEFT METACARPALS (Palm) -->
    
    <!-- MC I (Thumb) (-310 -> -288) -->
    <path id="bone_mc1_left" class="bone" data-name="Left Metacarpal I" data-medical-name="Metacarpale I"
        d="M -288 953 
           C -293 960, -295 970, -298 980
           C -301 987, -291 987, -288 980
           C -285 970, -283 960, -278 953
           C -281 950, -285 950, -288 953 Z" />
           
    <!-- MC II (Index) (-295 -> -273) -->
    <path id="bone_mc2_left" class="bone" data-name="Left Metacarpal II" data-medical-name="Metacarpale II"
        d="M -273 951
           C -275 965, -277 980, -278 995
           C -281 1003, -271 1003, -268 995
           C -267 980, -265 965, -265 951
           C -268 949, -271 949, -273 951 Z" />
           
    <!-- MC III (Middle) (-285 -> -263) -->
    <path id="bone_mc3_left" class="bone" data-name="Left Metacarpal III" data-medical-name="Metacarpale III"
        d="M -263 951
           C -263 965, -264 980, -265 1000
           C -268 1007, -258 1007, -255 1000
           C -256 980, -257 965, -257 951
           C -259 949, -261 949, -263 951 Z" />
           
    <!-- MC IV (Ring) (-275 -> -253) -->
    <path id="bone_mc4_left" class="bone" data-name="Left Metacarpal IV" data-medical-name="Metacarpale IV"
        d="M -253 951
           C -252 965, -251 980, -250 995
           C -253 1003, -243 1003, -240 995
           C -243 980, -245 965, -246 951
           C -248 949, -251 949, -253 951 Z" />
           
    <!-- MC V (Pinky) (-265 -> -243) -->
    <path id="bone_mc5_left" class="bone" data-name="Left Metacarpal V" data-medical-name="Metacarpale V"
        d="M -243 951
           C -241 963, -238 975, -235 987
           C -238 993, -228 993, -228 987
           C -231 975, -235 963, -237 951
           C -239 949, -241 949, -243 951 Z" />


    <!-- LEFT PHALANGES (Fingers) -->
    
    <!-- THUMB (I) (-321 -> -299) -->
    <path id="bone_pp1_left" class="bone" data-name="Left Prox Phalanx I"
        d="M -299 988 
           C -303 995, -308 1005, -311 1012
           C -315 1018, -305 1018, -301 1012
           C -298 1005, -295 995, -293 988 
           C -295 985, -297 985, -299 988 Z" />
    <!-- (-333 -> -311) -->
    <path id="bone_dp1_left" class="bone" data-name="Left Dist Phalanx I"
        d="M -311 1020 
           C -315 1025, -318 1032, -321 1038 
           C -323 1042, -313 1042, -311 1038 
           C -308 1032, -305 1025, -303 1020 
           C -305 1018, -309 1018, -311 1020 Z" />

    <!-- INDEX (II) (-301 -> -279) -->
    <path id="bone_pp2_left" class="bone" data-name="Left Prox Phalanx II"
        d="M -279 1002 
           C -280 1012, -281 1022, -282 1032
           C -286 1035, -276 1035, -274 1032
           C -273 1022, -272 1012, -271 1002 
           C -273 1000, -277 1000, -279 1002 Z" />
    <path id="bone_ip2_left" class="bone" data-name="Left Mid Phalanx II"
        d="M -283 1038 
           C -284 1045, -285 1052, -285 1058
           C -289 1060, -279 1060, -277 1058
           C -277 1052, -276 1045, -275 1038
           C -277 1036, -281 1036, -283 1038 Z" />
    <path id="bone_dp2_left" class="bone" data-name="Left Dist Phalanx II"
        d="M -286 1065 
           C -287 1068, -287 1072, -286 1075
           C -286 1078, -279 1078, -279 1075
           C -278 1072, -278 1068, -279 1065
           C -281 1062, -284 1062, -286 1065 Z" />

    <!-- MIDDLE (III) (-288 -> -266) -->
    <path id="bone_pp3_left" class="bone" data-name="Left Prox Phalanx III"
        d="M -266 1005 
           C -266 1018, -266 1030, -266 1042
           C -270 1045, -260 1045, -258 1042
           C -258 1030, -258 1018, -258 1005
           C -260 1002, -264 1002, -266 1005 Z" />
    <path id="bone_ip3_left" class="bone" data-name="Left Mid Phalanx III"
        d="M -266 1048 
           C -266 1055, -266 1065, -266 1072
           C -270 1075, -260 1075, -258 1072
           C -258 1065, -258 1055, -258 1048
           C -260 1045, -264 1045, -266 1048 Z" />
    <path id="bone_dp3_left" class="bone" data-name="Left Dist Phalanx III"
        d="M -266 1078 
           C -266 1082, -266 1086, -266 1090
           C -270 1092, -260 1092, -258 1090
           C -258 1086, -258 1082, -258 1078
           C -260 1076, -264 1076, -266 1078 Z" />

    <!-- RING (IV) (-273 -> -251) -->
    <path id="bone_pp4_left" class="bone" data-name="Left Prox Phalanx IV"
        d="M -251 1002 
           C -250 1012, -249 1022, -248 1032
           C -252 1035, -242 1035, -240 1032
           C -241 1022, -242 1012, -243 1002
           C -245 1000, -249 1000, -251 1002 Z" />
    <path id="bone_ip4_left" class="bone" data-name="Left Mid Phalanx IV"
        d="M -247 1038 
           C -246 1045, -245 1052, -245 1058
           C -249 1060, -239 1060, -237 1058
           C -237 1052, -238 1045, -239 1038
           C -241 1036, -245 1036, -247 1038 Z" />
    <path id="bone_dp4_left" class="bone" data-name="Left Dist Phalanx IV"
        d="M -244 1065 
           C -243 1068, -243 1072, -242 1075
           C -242 1078, -235 1078, -235 1075
           C -234 1072, -234 1068, -235 1065
           C -237 1062, -241 1062, -244 1065 Z" />

    <!-- PINKY (V) (-257 -> -235) -->
    <path id="bone_pp5_left" class="bone" data-name="Left Prox Phalanx V"
        d="M -235 990 
           C -233 998, -228 1005, -225 1012
           C -228 1018, -218 1018, -215 1012
           C -218 1005, -223 998, -227 990 
           C -229 988, -233 988, -235 990 Z" />
    <path id="bone_ip5_left" class="bone" data-name="Left Mid Phalanx V"
        d="M -223 1020 
           C -221 1025, -218 1032, -215 1038 
           C -218 1042, -208 1042, -205 1038 
           C -208 1032, -211 1025, -213 1020 
           C -215 1018, -221 1018, -223 1020 Z" />
    <path id="bone_dp5_left" class="bone" data-name="Left Dist Phalanx V"
        d="M -213 1045 
           C -211 1048, -209 1052, -208 1055 
           C -208 1058, -201 1058, -201 1055 
           C -202 1052, -204 1048, -205 1045 
           C -207 1042, -211 1042, -213 1045 Z" />


    <!-- 
        RIGHT HAND (Strictly Mirrored)
        X = -1 * Left_X
    -->

    <!-- RIGHT CARPALS (Wrist) - Proximal Row -->
    <path id="bone_carpal_scaphoid_right" class="bone" data-name="Right Scaphoid" data-medical-name="Os Scaphoideum"
        d="M 285 917 
           C 291 915, 293 907, 281 909
           C 273 910, 271 915, 268 920
           C 265 925, 273 933, 281 933
           C 288 933, 291 925, 285 917 Z" />
           
    <path id="bone_carpal_lunate_right" class="bone" data-name="Right Lunate" data-medical-name="Os Lunatum"
        d="M 266 920 
           C 266 913, 261 913, 258 917
           C 255 921, 255 927, 258 930
           C 261 933, 266 933, 268 927
           C 269 923, 268 921, 266 920 Z" />
           
    <path id="bone_carpal_triquetrum_right" class="bone" data-name="Right Triquetrum" data-medical-name="Os Triquetrum"
        d="M 255 923 
           C 255 917, 251 915, 248 917
           C 245 919, 243 925, 245 929
           C 248 933, 253 931, 255 923 Z" />
           
    <path id="bone_carpal_pisiform_right" class="bone" data-name="Right Pisiform" data-medical-name="Os Pisiforme"
        d="M 251 919 C 253 917, 248 915, 246 917 C 244 919, 246 923, 248 923 C 250 923, 252 921, 251 919 Z" />

    <!-- RIGHT CARPALS (Wrist) - Distal Row -->
    <path id="bone_carpal_trapezium_right" class="bone" data-name="Right Trapezium" data-medical-name="Os Trapezium"
        d="M 293 937 
           C 298 933, 288 930, 281 933
           C 277 935, 275 940, 277 945
           C 279 950, 288 950, 293 947
           C 298 943, 295 940, 293 937 Z" />
           
    <path id="bone_carpal_trapezoid_right" class="bone" data-name="Right Trapezoid" data-medical-name="Os Trapezoideum"
        d="M 275 937 
           C 275 933, 271 933, 268 937
           C 265 941, 267 947, 271 947
           C 275 947, 277 943, 275 937 Z" />
           
    <path id="bone_carpal_capitate_right" class="bone" data-name="Right Capitate" data-medical-name="Os Capitatum"
        d="M 265 935 
           C 265 927, 258 927, 258 935
           C 258 943, 255 947, 261 947
           C 267 947, 265 943, 265 935 Z" />
           
    <path id="bone_carpal_hamate_right" class="bone" data-name="Right Hamate" data-medical-name="Os Hamatum"
        d="M 253 935 
           C 253 930, 246 930, 246 935
           C 246 943, 248 947, 253 947
           C 258 947, 253 940, 253 935 Z" />


    <!-- RIGHT METACARPALS (Palm) -->
    <path id="bone_mc1_right" class="bone" data-name="Right Metacarpal I" data-medical-name="Metacarpale I"
        d="M 288 953 
           C 293 960, 295 970, 298 980
           C 301 987, 291 987, 288 980
           C 285 970, 283 960, 278 953
           C 281 950, 285 950, 288 953 Z" />
           
    <path id="bone_mc2_right" class="bone" data-name="Right Metacarpal II" data-medical-name="Metacarpale II"
        d="M 273 951
           C 275 965, 277 980, 278 995
           C 281 1003, 271 1003, 268 995
           C 267 980, 265 965, 265 951
           C 268 949, 271 949, 273 951 Z" />
           
    <path id="bone_mc3_right" class="bone" data-name="Right Metacarpal III" data-medical-name="Metacarpale III"
        d="M 263 951
           C 263 965, 264 980, 265 1000
           C 268 1007, 258 1007, 255 1000
           C 256 980, 257 965, 257 951
           C 259 949, 261 949, 263 951 Z" />
           
    <path id="bone_mc4_right" class="bone" data-name="Right Metacarpal IV" data-medical-name="Metacarpale IV"
        d="M 253 951
           C 252 965, 251 980, 250 995
           C 253 1003, 243 1003, 240 995
           C 243 980, 245 965, 246 951
           C 248 949, 251 949, 253 951 Z" />
           
    <path id="bone_mc5_right" class="bone" data-name="Right Metacarpal V" data-medical-name="Metacarpale V"
        d="M 243 951
           C 241 963, 238 975, 235 987
           C 238 993, 228 993, 228 987
           C 231 975, 235 963, 237 951
           C 239 949, 241 949, 243 951 Z" />


    <!-- RIGHT PHALANGES (Fingers) -->
    <path id="bone_pp1_right" class="bone" data-name="Right Prox Phalanx I"
        d="M 299 988 
           C 303 995, 308 1005, 311 1012
           C 315 1018, 305 1018, 301 1012
           C 298 1005, 295 995, 293 988 
           C 295 985, 297 985, 299 988 Z" />
    <path id="bone_dp1_right" class="bone" data-name="Right Dist Phalanx I"
        d="M 311 1020 
           C 315 1025, 318 1032, 321 1038 
           C 323 1042, 313 1042, 311 1038 
           C 308 1032, 305 1025, 303 1020 
           C 305 1018, 309 1018, 311 1020 Z" />

    <path id="bone_pp2_right" class="bone" data-name="Right Prox Phalanx II"
        d="M 279 1002 
           C 280 1012, 281 1022, 282 1032
           C 286 1035, 276 1035, 274 1032
           C 273 1022, 272 1012, 271 1002 
           C 273 1000, 277 1000, 279 1002 Z" />
    <path id="bone_ip2_right" class="bone" data-name="Right Mid Phalanx II"
        d="M 283 1038 
           C 284 1045, 285 1052, 285 1058
           C 289 1060, 279 1060, 277 1058
           C 277 1052, 276 1045, 275 1038
           C 277 1036, 281 1036, 283 1038 Z" />
    <path id="bone_dp2_right" class="bone" data-name="Right Dist Phalanx II"
        d="M 286 1065 
           C 287 1068, 287 1072, 286 1075
           C 286 1078, 279 1078, 279 1075
           C 278 1072, 278 1068, 279 1065
           C 281 1062, 284 1062, 286 1065 Z" />

    <path id="bone_pp3_right" class="bone" data-name="Right Prox Phalanx III"
        d="M 266 1005 
           C 266 1018, 266 1030, 266 1042
           C 270 1045, 260 1045, 258 1042
           C 258 1030, 258 1018, 258 1005
           C 260 1002, 264 1002, 266 1005 Z" />
    <path id="bone_ip3_right" class="bone" data-name="Right Mid Phalanx III"
        d="M 266 1048 
           C 266 1055, 266 1065, 266 1072
           C 270 1075, 260 1075, 258 1072
           C 258 1065, 258 1055, 258 1048
           C 260 1045, 264 1045, 266 1048 Z" />
    <path id="bone_dp3_right" class="bone" data-name="Right Dist Phalanx III"
        d="M 266 1078 
           C 266 1082, 266 1086, 266 1090
           C 270 1092, 260 1092, 258 1090
           C 258 1086, 258 1082, 258 1078
           C 260 1076, 264 1076, 266 1078 Z" />

    <path id="bone_pp4_right" class="bone" data-name="Right Prox Phalanx IV"
        d="M 251 1002 
           C 250 1012, 249 1022, 248 1032
           C 252 1035, 242 1035, 240 1032
           C 241 1022, 242 1012, 243 1002
           C 245 1000, 249 1000, 251 1002 Z" />
    <path id="bone_ip4_right" class="bone" data-name="Right Mid Phalanx IV"
        d="M 247 1038 
           C 246 1045, 245 1052, 245 1058
           C 249 1060, 239 1060, 237 1058
           C 237 1052, 238 1045, 239 1038
           C 241 1036, 245 1036, 247 1038 Z" />
    <path id="bone_dp4_right" class="bone" data-name="Right Dist Phalanx IV"
        d="M 244 1065 
           C 243 1068, 243 1072, 242 1075
           C 242 1078, 235 1078, 235 1075
           C 234 1072, 234 1068, 235 1065
           C 237 1062, 241 1062, 244 1065 Z" />

    <path id="bone_pp5_right" class="bone" data-name="Right Prox Phalanx V"
        d="M 235 990 
           C 233 998, 228 1005, 225 1012
           C 228 1018, 218 1018, 215 1012
           C 218 1005, 223 998, 227 990 
           C 229 988, 233 988, 235 990 Z" />
    <path id="bone_ip5_right" class="bone" data-name="Right Mid Phalanx V"
        d="M 223 1020 
           C 221 1025, 218 1032, 215 1038 
           C 218 1042, 208 1042, 205 1038 
           C 208 1032, 211 1025, 213 1020 
           C 215 1018, 221 1018, 223 1020 Z" />
    <path id="bone_dp5_right" class="bone" data-name="Right Dist Phalanx V"
        d="M 213 1045 
           C 211 1048, 209 1052, 208 1055 
           C 208 1058, 201 1058, 201 1055 
           C 202 1052, 204 1048, 205 1045 
           C 207 1042, 211 1042, 213 1045 Z" />
`;
