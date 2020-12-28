var canvas;
var gl;

var indices = []; // To keep the indices of triangle vertices

var modelViewMatrix, projectionMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;



var ambientColor, diffuseColor, specularColor;
var lightPosition = vec4(0.3, 0.3, 0.3, 0.0);
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0);
var lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0);
var lightSpecular = vec4(1.0, 1.0, 1.0, 1.0);

var materialAmbient = vec4(1.0, 0.0, 1.0, 1.0);
var materialDiffuse = vec4(1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4(1.0, 0.8, 0.0, 1.0);
var materialShininess = 100.0;

// CAT DATA
var vertices = [
	// Vertex Coordinates
	-0.0000, 27.0885, 30.8219,
	-2.0450, 27.2319, 28.2282,
	-2.0582, 24.7576, 24.0410,
	-0.0000, 24.3974, 28.4238,
	-0.0000, 29.0873, 29.0218,
	-0.0000, 32.3212, 27.1927,
	-2.0884, 32.3700, 25.7655,
	-2.1744, 29.1984, 26.9185,
	-0.0000, 33.2404, 22.0848,
	-1.7445, 33.2672, 23.9350,
	-0.0000, 32.1804, 19.7318,
	-2.3223, 32.1193, 20.6979,
	0.0000, 28.8925, 16.3092,
	0.0000, 27.0812, 12.7010,
	-3.3525, 26.2354, 13.6121,
	-2.9079, 28.5819, 17.5189,
	0.0000, 25.6042, 8.6970,
	-3.3757, 24.5401, 9.0536,
	0.0000, 26.4970, 2.1741,
	-3.2804, 24.8791, 2.6157,
	0.0000, 26.6803, -7.6982,
	-3.6544, 24.8363, -6.3575,
	0.0000, 25.3245, -14.6359,
	-1.9194, 24.2925, -14.6353,
	-0.0000, 24.1466, 24.3242,
	-2.9812, 18.6803, 20.5449,
	0.0000, 18.2848, 21.1980,
	-3.2777, 15.0750, 17.7647,
	0.0000, 13.7558, 17.5363,
	0.0000, 11.5128, 3.7129,
	-2.5451, 12.1183, 3.4468,
	-1.3624, 12.1497, -4.2886,
	0.0000, 11.7975, -4.6510,
	-4.5978, 27.2997, 24.4985,
	-4.8934, 29.9157, 22.7877,
	-3.9697, 27.5210, 21.7309,
	-5.0498, 35.2758, 24.5531,
	-3.7928, 31.9991, 21.4799,
	-4.7676, 18.5883, 8.4302,
	-5.4636, 18.3832, -3.9479,
	-1.7552, 12.5796, 10.3958,
	-5.6163, 19.1871, 12.9674,
	-0.7778, 13.8666, -12.8599,
	-1.6262, 20.3023, -15.6475,
	0.0000, 19.5771, -15.3964,
	0.0000, 14.0978, -12.5227,
	-4.7294, 20.8495, -14.0553,
	-1.3961, 21.4802, -18.1478,
	-4.5795, 23.4952, 16.7811,
	-3.0756, 9.9511, 14.6932,
	-1.6111, 10.0868, 10.4149,
	-5.1898, 10.2089, 13.3708,
	-4.1528, 10.5694, 10.1094,
	-3.0494, 4.9008, 14.6747,
	-1.9419, 4.9008, 11.6696,
	-4.1782, 4.9008, 11.2900,
	-4.5150, 4.9008, 13.6343,
	-2.6678, 2.4846, 15.3008,
	-3.9743, -0.0000, 16.7669,
	-2.8469, -0.0000, 15.0776,
	-1.8712, 1.2131, 13.0738,
	-4.3955, 2.4921, 14.5673,
	-4.3553, -0.0000, 16.7246,
	-4.3625, 1.2778, 12.5446,
	-5.1395, -0.0000, 14.6874,
	-5.0175, 16.0956, -14.2545,
	-6.3441, 13.4243, -6.5320,
	-2.6711, 2.4591, -12.3327,
	-3.1553, 0.0000, -11.8437,
	-2.9030, 0.9701, -14.3784,
	-2.6041, 4.2492, -15.4709,
	-2.3053, 7.9452, -16.6694,
	-4.7845, 4.3395, -15.7809,
	-4.5683, 8.1642, -17.2301,
	-4.8552, 6.8862, -12.3984,
	-4.7014, 2.3306, -11.3218,
	-2.4505, 6.9397, -12.0649,
	-5.0007, 1.0268, -14.4955,
	-5.0389, 0.0000, -12.1277,
	-5.1188, 1.3723, -9.2169,
	-3.0684, 1.3463, -9.5733,
	-4.3641, 0.0000, -9.4436,
	0.0000, 22.1978, -18.5159,
	0.0000, 10.7745, -22.3446,
	-1.2560, 10.4135, -21.7051,
	-1.1112, 9.1280, -19.7807,
	0.0000, 8.7308, -19.1530,
	0.0000, 6.8749, -26.6507,
	-1.1616, 6.0054, -26.4655,
	-0.8764, 4.3857, -26.0106,
	0.0000, 3.9613, -26.0037,
	0.0000, 4.7305, -31.0669,
	-0.7252, 4.7608, -30.9058,
	-0.7133, 4.7009, -30.9019,
	0.0000, 4.6845, -31.0607,
	-4.0446, 0.0000, -9.4097,
	0.0000, 11.7368, 11.2638,
	2.0582, 24.7576, 24.0410,
	2.0450, 27.2319, 28.2282,
	2.1743, 29.1984, 26.9185,
	2.0884, 32.3700, 25.7655,
	1.7445, 33.2672, 23.9350,
	2.3223, 32.1193, 20.6979,
	2.9079, 28.5819, 17.5189,
	3.3525, 26.2354, 13.6121,
	3.3757, 24.5401, 9.0536,
	3.2804, 24.8791, 2.6157,
	3.6544, 24.8363, -6.3575,
	1.9194, 24.2925, -14.6353,
	2.9813, 18.6803, 20.5449,
	3.2777, 15.0750, 17.7647,
	1.3624, 12.1497, -4.2886,
	2.5451, 12.1183, 3.4468,
	4.5978, 27.2997, 24.4985,
	4.8934, 29.9157, 22.7877,
	3.9697, 27.5210, 21.7309,
	3.7928, 31.9991, 21.4799,
	5.0498, 35.2758, 24.5531,
	4.7676, 18.5883, 8.4302,
	1.7552, 12.5796, 10.3958,
	5.4636, 18.3832, -3.9479,
	5.6163, 19.1871, 12.9674,
	0.7778, 13.8666, -12.8599,
	1.6263, 20.3023, -15.6475,
	1.3961, 21.4802, -18.1478,
	4.7294, 20.8495, -14.0553,
	4.5795, 23.4952, 16.7811,
	1.6111, 10.0868, 10.4149,
	3.0756, 9.9511, 14.6932,
	5.1898, 10.2089, 13.3708,
	4.1528, 10.5694, 10.1094,
	1.9419, 4.9008, 11.6696,
	3.0494, 4.9008, 14.6747,
	4.5150, 4.9008, 13.6343,
	4.1782, 4.9008, 11.2900,
	2.6678, 2.4846, 15.3008,
	1.8712, 1.2131, 13.0738,
	2.8469, -0.0000, 15.0776,
	3.9743, -0.0000, 16.7669,
	4.3553, 0.0000, 16.7246,
	4.3955, 2.4922, 14.5673,
	5.1395, -0.0000, 14.6874,
	4.3625, 1.2778, 12.5446,
	6.3441, 13.4243, -6.5320,
	5.0175, 16.0956, -14.2545,
	2.6711, 2.4591, -12.3327,
	2.6042, 4.2492, -15.4709,
	2.9030, 0.9701, -14.3784,
	3.1553, 0.0000, -11.8437,
	2.3053, 7.9452, -16.6694,
	4.5683, 8.1642, -17.2301,
	4.7845, 4.3395, -15.7809,
	4.8552, 6.8862, -12.3984,
	2.4505, 6.9397, -12.0649,
	4.7014, 2.3306, -11.3218,
	5.0389, 0.0000, -12.1277,
	5.0007, 1.0268, -14.4955,
	3.0684, 1.3463, -9.5733,
	5.1188, 1.3723, -9.2169,
	4.3641, 0.0000, -9.4436,
	1.2560, 10.4135, -21.7051,
	1.1112, 9.1280, -19.7807,
	1.1616, 6.0054, -26.4656,
	0.8764, 4.3857, -26.0106,
	0.7252, 4.7608, -30.9058,
	0.7133, 4.7009, -30.9019,
	4.0446, 0.0000, -9.4097
];

var normals = [
	// Normal Coordinates
	0.4063, 0.7541, 0.5160,
	0.7286, 0.5905, -0.3471,
	0.2552, -0.0472, -0.9657,
	-0.3351, 0.2397, -0.9112,
	-0.4468, 0.3066, -0.8404,
	-0.3290, 0.3147, -0.8903,
	0.0855, 0.3635, -0.9276,
	0.0155, 0.4434, -0.8962,
	-0.1625, 0.4830, -0.8604,
	0.8548, 0.2497, 0.4549,
	0.7691, 0.2169, 0.6012,
	-0.0366, 0.2387, 0.9704,
	0.5227, 0.7733, 0.3589,
	0.5623, 0.7884, -0.2497,
	-0.2289, 0.8285, 0.5110,
	-0.5563, 0.8264, -0.0873,
	0.9322, 0.3615, -0.0205,
	0.0839, 0.9208, 0.3809,
	-0.0888, 0.9678, -0.2356,
	-0.8987, -0.1341, 0.4175,
	-0.6191, 0.7790, -0.0998,
	0.3201, 0.9412, 0.1081,
	0.2594, -0.9639, 0.0602,
	0.5178, 0.8447, 0.1356,
	-0.2316, 0.9689, 0.0877,
	-0.9629, -0.2314, 0.1389,
	0.3332, -0.9428, -0.0122,
	-0.2425, 0.9661, 0.0891,
	-0.9683, -0.1165, 0.2211,
	0.4658, -0.8786, 0.1052,
	0.7439, 0.2715, -0.6107,
	0.0900, 0.9531, -0.2889,
	-0.4875, -0.0819, 0.8692,
	0.0000, 0.0000, 1.0000,
	-0.0738, 0.9874, -0.1400,
	-0.9668, 0.1127, 0.2293,
	-0.0116, -0.9903, 0.1383,
	-0.9279, -0.1583, 0.3375,
	0.9853, -0.1469, -0.0871,
	0.0518, 0.9934, -0.1019,
	0.3004, -0.9386, -0.1695,
	-0.0794, 0.9967, 0.0181,
	-0.9247, -0.1731, 0.3390,
	0.4052, -0.1130, -0.9072,
	0.0293, 0.9923, 0.1200,
	-0.3759, -0.0247, 0.9263,
	0.0055, -0.9722, 0.2341,
	-0.8370, -0.3945, -0.3793,
	0.6100, 0.3318, 0.7196,
	-0.1415, 0.9889, 0.0460,
	-0.1048, 0.9440, -0.3128,
	-0.5841, 0.4287, -0.6893,
	-0.8549, 0.4379, -0.2780,
	0.8576, 0.4052, 0.3168,
	-0.0299, 0.9994, 0.0191,
	-0.5809, 0.5178, -0.6281,
	0.5159, 0.4627, 0.7209,
	0.0551, 0.9933, 0.1019,
	-0.3406, 0.4336, -0.8343,
	-0.1043, 0.2750, 0.9558,
	-0.0446, 0.9816, 0.1858,
	-0.0806, 0.9123, -0.4015,
	0.0449, 0.9598, -0.2772,
	0.8339, 0.5517, 0.0176,
	0.8517, 0.4726, -0.2262,
	-0.5551, -0.1600, -0.8163,
	-0.1229, 0.9374, -0.3259,
	0.3475, 0.9256, 0.1501,
	0.2357, 0.8059, 0.5431,
	0.9903, -0.1344, 0.0339,
	0.1599, -0.9305, 0.3296,
	-0.9670, 0.2183, 0.1314,
	0.6083, 0.6497, -0.4559,
	-0.3965, 0.8889, -0.2294,
	-0.6658, 0.3247, -0.6718,
	-0.9355, -0.0816, 0.3438,
	0.0046, -0.9980, 0.0629,
	-0.0216, 0.9998, -0.0009,
	0.2453, 0.4088, 0.8790,
	0.0626, 0.3333, 0.9407,
	-0.2389, 0.0576, 0.9693,
	0.4063, -0.7541, 0.5160,
	0.7286, -0.5905, -0.3471,
	0.2552, 0.0472, -0.9657,
	-0.3351, -0.2397, -0.9112,
	-0.4468, -0.3066, -0.8404,
	-0.3290, -0.3147, -0.8903,
	0.0855, -0.3635, -0.9276,
	0.0155, -0.4434, -0.8962,
	-0.1625, -0.4830, -0.8604,
	0.8548, -0.2497, 0.4549,
	0.7691, -0.2169, 0.6012,
	-0.0366, -0.2387, 0.9704,
	0.5227, -0.7733, 0.3589,
	0.5623, -0.7884, -0.2497,
	-0.2289, -0.8285, 0.5110,
	-0.5563, -0.8264, -0.0873,
	0.9322, -0.3615, -0.0205,
	0.0839, -0.9208, 0.3809,
	-0.0888, -0.9678, -0.2356,
	-0.8987, 0.1341, 0.4175,
	-0.6191, -0.7790, -0.0998,
	0.3201, -0.9412, 0.1081,
	0.2594, 0.9639, 0.0602,
	0.5178, -0.8447, 0.1356,
	-0.2316, -0.9689, 0.0877,
	-0.9629, 0.2314, 0.1389,
	0.3332, 0.9428, -0.0122,
	-0.2425, -0.9661, 0.0891,
	-0.9683, 0.1165, 0.2211,
	0.4658, 0.8786, 0.1052,
	0.7439, -0.2715, -0.6107,
	0.0900, -0.9531, -0.2889,
	-0.4875, 0.0819, 0.8692,
	0.0000, -0.0000, 1.0000,
	-0.0738, -0.9874, -0.1400,
	-0.9668, -0.1127, 0.2293,
	-0.0116, 0.9903, 0.1383,
	-0.9279, 0.1583, 0.3375,
	0.9853, 0.1469, -0.0871,
	0.0518, -0.9934, -0.1019,
	0.3004, 0.9386, -0.1695,
	-0.0794, -0.9967, 0.0181,
	-0.9247, 0.1731, 0.3390,
	0.4052, 0.1130, -0.9072,
	0.0293, -0.9923, 0.1200,
	-0.3759, 0.0247, 0.9263,
	0.0055, 0.9722, 0.2341,
	-0.8370, 0.3945, -0.3793,
	0.6100, -0.3318, 0.7196,
	-0.1415, -0.9889, 0.0460,
	-0.1048, -0.9440, -0.3128,
	-0.5841, -0.4287, -0.6893,
	-0.8549, -0.4379, -0.2780,
	0.8576, -0.4052, 0.3168,
	-0.0299, -0.9994, 0.0191,
	-0.5809, -0.5178, -0.6281,
	0.5159, -0.4627, 0.7209,
	0.0551, -0.9933, 0.1019,
	-0.3406, -0.4336, -0.8343,
	-0.1043, -0.2750, 0.9558,
	-0.0446, -0.9816, 0.1858,
	-0.0806, -0.9123, -0.4015,
	0.0449, -0.9598, -0.2772,
	0.8339, -0.5517, 0.0176,
	0.8517, -0.4726, -0.2262,
	-0.5551, 0.1600, -0.8163,
	-0.1229, -0.9374, -0.3259,
	0.3475, -0.9256, 0.1501,
	0.2357, -0.8059, 0.5431,
	0.9903, 0.1344, 0.0339,
	0.1599, 0.9305, 0.3296,
	-0.9696, -0.2199, 0.1073,
	0.6083, -0.6497, -0.4559,
	-0.3965, -0.8889, -0.2294,
	-0.6658, -0.3247, -0.6718,
	-0.9355, 0.0816, 0.3438,
	0.0046, 0.9980, 0.0629,
	-0.0216, -0.9998, -0.0009,
	0.2453, -0.4088, 0.8790,
	0.0626, -0.3333, 0.9407,
	-0.2389, -0.0576, 0.9693,
	0.0611, 0.0000, 0.9981,
	-0.9696, 0.2199, 0.1073,
	-0.9670, -0.2183, 0.1314
];

var textureCoords = [
	// Texture coordinates
	0.2290, 0.9000, 0.0000,
	0.2083, 0.8942, 0.0000,
	0.1943, 0.8473, 0.0000,
	0.2288, 0.8765, 0.0000,
	0.2291, 0.9162, 0.0000,
	0.2293, 0.9585, 0.0000,
	0.1997, 0.9532, 0.0000,
	0.1974, 0.9130, 0.0000,
	0.2295, 0.9971, 0.0000,
	0.1992, 0.9675, 0.0000,
	0.6575, 0.9663, 0.0000,
	0.6430, 0.9438, 0.0000,
	0.6430, 0.9119, 0.0000,
	0.6611, 0.9207, 0.0000,
	0.6433, 0.8666, 0.0000,
	0.6437, 0.8081, 0.0000,
	0.6857, 0.8092, 0.0000,
	0.6793, 0.8771, 0.0000,
	0.6440, 0.7528, 0.0000,
	0.6872, 0.7534, 0.0000,
	0.6444, 0.6794, 0.0000,
	0.6793, 0.6804, 0.0000,
	0.6452, 0.6069, 0.0000,
	0.6857, 0.6039, 0.0000,
	0.6456, 0.5064, 0.0000,
	0.6668, 0.5026, 0.0000,
	0.2288, 0.8443, 0.0000,
	0.1858, 0.7854, 0.0000,
	0.2282, 0.7898, 0.0000,
	0.1979, 0.7024, 0.0000,
	0.2267, 0.6885, 0.0000,
	0.2208, 0.5231, 0.0000,
	0.1911, 0.5205, 0.0000,
	0.1949, 0.4225, 0.0000,
	0.2177, 0.4188, 0.0000,
	0.1792, 0.8868, 0.0000,
	0.1542, 0.9086, 0.0000,
	0.1486, 0.8749, 0.0000,
	0.7079, 0.9072, 0.0000,
	0.7106, 0.9310, 0.0000,
	0.6868, 0.9906, 0.0000,
	0.6784, 0.9348, 0.0000,
	0.1585, 0.9799, 0.0000,
	0.1189, 0.5177, 0.0000,
	0.1179, 0.4467, 0.0000,
	0.1760, 0.6057, 0.0000,
	0.7633, 0.7757, 0.0000,
	0.7561, 0.7006, 0.0000,
	0.1944, 0.3170, 0.0000,
	0.1962, 0.2458, 0.0000,
	0.2133, 0.2473, 0.0000,
	0.2130, 0.3169, 0.0000,
	0.6932, 0.4531, 0.0000,
	0.7092, 0.4891, 0.0000,
	0.6662, 0.4417, 0.0000,
	0.8250, 0.8344, 0.0000,
	0.7643, 0.8816, 0.0000,
	0.7304, 0.8421, 0.0000,
	0.1483, 0.6852, 0.0000,
	0.1367, 0.6463, 0.0000,
	0.8718, 0.7766, 0.0000,
	0.8798, 0.7994, 0.0000,
	0.8708, 0.7467, 0.0000,
	0.1260, 0.6312, 0.0000,
	0.0924, 0.7054, 0.0000,
	0.0836, 0.6690, 0.0000,
	0.9282, 0.7432, 0.0000,
	0.9333, 0.7699, 0.0000,
	0.0718, 0.6453, 0.0000,
	0.0601, 0.7183, 0.0000,
	0.0232, 0.7357, 0.0000,
	0.0266, 0.7105, 0.0000,
	0.0466, 0.6917, 0.0000,
	0.9635, 0.7953, 0.0000,
	0.9641, 0.7737, 0.0000,
	0.9995, 0.7882, 0.0000,
	0.9987, 0.7920, 0.0000,
	0.9708, 0.7477, 0.0000,
	0.9937, 0.7650, 0.0000,
	0.0045, 0.6917, 0.0000,
	0.0294, 0.6692, 0.0000,
	0.0041, 0.7205, 0.0000,
	0.0005, 0.7177, 0.0000,
	0.7608, 0.6072, 0.0000,
	0.7651, 0.4711, 0.0000,
	0.8115, 0.5433, 0.0000,
	0.7692, 0.4140, 0.0000,
	0.0803, 0.2846, 0.0000,
	0.0489, 0.2730, 0.0000,
	0.0759, 0.2619, 0.0000,
	0.1100, 0.2722, 0.0000,
	0.8544, 0.4063, 0.0000,
	0.8922, 0.4045, 0.0000,
	0.8933, 0.4301, 0.0000,
	0.8588, 0.4311, 0.0000,
	0.1182, 0.3217, 0.0000,
	0.0738, 0.3106, 0.0000,
	0.1344, 0.3053, 0.0000,
	0.9295, 0.4291, 0.0000,
	0.9517, 0.4458, 0.0000,
	0.9279, 0.4584, 0.0000,
	0.0551, 0.3254, 0.0000,
	0.0510, 0.3016, 0.0000,
	0.9615, 0.4703, 0.0000,
	0.9385, 0.4789, 0.0000,
	0.9281, 0.4049, 0.0000,
	0.9572, 0.4043, 0.0000,
	0.9571, 0.4262, 0.0000,
	0.1446, 0.2714, 0.0000,
	0.1344, 0.4017, 0.0000,
	0.8769, 0.4708, 0.0000,
	0.6461, 0.4433, 0.0000,
	0.6470, 0.3090, 0.0000,
	0.6658, 0.3110, 0.0000,
	0.1997, 0.1266, 0.0000,
	0.2126, 0.1272, 0.0000,
	0.6929, 0.3123, 0.0000,
	0.6476, 0.2276, 0.0000,
	0.6641, 0.2227, 0.0000,
	0.2017, 0.0343, 0.0000,
	0.2109, 0.0335, 0.0000,
	0.6818, 0.2138, 0.0000,
	0.6478, 0.1940, 0.0000,
	0.6559, 0.1934, 0.0000,
	0.2022, 0.0030, 0.0000,
	0.2093, 0.0005, 0.0000,
	0.6558, 0.1926, 0.0000,
	0.9815, 0.4112, 0.0000,
	0.9816, 0.4148, 0.0000,
	0.9366, 0.7903, 0.0000,
	0.7414, 0.9349, 0.0000,
	0.0293, 0.3209, 0.0000,
	0.0286, 0.3172, 0.0000,
	0.0293, 0.2878, 0.0000,
	0.6565, 0.1927, 0.0000,
	0.6479, 0.1929, 0.0000,
	0.2241, 0.6147, 0.0000,
	0.2632, 0.8470, 0.0000,
	0.2496, 0.8939, 0.0000,
	0.2607, 0.9127, 0.0000,
	0.2588, 0.9529, 0.0000,
	0.2595, 0.9672, 0.0000,
	0.6285, 0.9661, 0.0000,
	0.6249, 0.9206, 0.0000,
	0.6072, 0.8767, 0.0000,
	0.6017, 0.8087, 0.0000,
	0.6009, 0.7529, 0.0000,
	0.6097, 0.6800, 0.0000,
	0.6046, 0.6033, 0.0000,
	0.6246, 0.5023, 0.0000,
	0.2706, 0.7844, 0.0000,
	0.2562, 0.7011, 0.0000,
	0.2405, 0.4213, 0.0000,
	0.2505, 0.5185, 0.0000,
	0.2787, 0.8863, 0.0000,
	0.3039, 0.9079, 0.0000,
	0.3092, 0.8741, 0.0000,
	0.5782, 0.9066, 0.0000,
	0.6076, 0.9345, 0.0000,
	0.5990, 0.9903, 0.0000,
	0.5754, 0.9305, 0.0000,
	0.3003, 0.9792, 0.0000,
	0.3224, 0.5107, 0.0000,
	0.2714, 0.6025, 0.0000,
	0.3186, 0.4394, 0.0000,
	0.5245, 0.7742, 0.0000,
	0.5326, 0.6991, 0.0000,
	0.2322, 0.3171, 0.0000,
	0.2304, 0.2458, 0.0000,
	0.5988, 0.4525, 0.0000,
	0.6260, 0.4414, 0.0000,
	0.5824, 0.4882, 0.0000,
	0.4621, 0.8321, 0.0000,
	0.5565, 0.8411, 0.0000,
	0.5221, 0.8801, 0.0000,
	0.3133, 0.6404, 0.0000,
	0.3046, 0.6800, 0.0000,
	0.4078, 0.7965, 0.0000,
	0.4160, 0.7738, 0.0000,
	0.4172, 0.7438, 0.0000,
	0.3230, 0.6246, 0.0000,
	0.3680, 0.6592, 0.0000,
	0.3618, 0.6962, 0.0000,
	0.3545, 0.7668, 0.0000,
	0.3596, 0.7402, 0.0000,
	0.3780, 0.6347, 0.0000,
	0.3949, 0.7066, 0.0000,
	0.4065, 0.6792, 0.0000,
	0.4278, 0.6965, 0.0000,
	0.4330, 0.7214, 0.0000,
	0.3246, 0.7927, 0.0000,
	0.2894, 0.7896, 0.0000,
	0.2885, 0.7858, 0.0000,
	0.3238, 0.7710, 0.0000,
	0.2941, 0.7625, 0.0000,
	0.3169, 0.7451, 0.0000,
	0.4220, 0.6555, 0.0000,
	0.4484, 0.6761, 0.0000,
	0.4509, 0.7049, 0.0000,
	0.4543, 0.7019, 0.0000,
	0.5294, 0.6057, 0.0000,
	0.4794, 0.5411, 0.0000,
	0.5267, 0.4695, 0.0000,
	0.5233, 0.4124, 0.0000,
	0.3368, 0.2699, 0.0000,
	0.3057, 0.2616, 0.0000,
	0.3380, 0.2468, 0.0000,
	0.3662, 0.2540, 0.0000,
	0.4382, 0.4036, 0.0000,
	0.4335, 0.4284, 0.0000,
	0.3990, 0.4270, 0.0000,
	0.4005, 0.4014, 0.0000,
	0.3045, 0.3121, 0.0000,
	0.2861, 0.2979, 0.0000,
	0.3470, 0.2947, 0.0000,
	0.3641, 0.4549, 0.0000,
	0.3404, 0.4419, 0.0000,
	0.3628, 0.4255, 0.0000,
	0.3681, 0.2825, 0.0000,
	0.3678, 0.3067, 0.0000,
	0.3532, 0.4752, 0.0000,
	0.3304, 0.4663, 0.0000,
	0.3353, 0.4223, 0.0000,
	0.3355, 0.4004, 0.0000,
	0.3645, 0.4013, 0.0000,
	0.2714, 0.2656, 0.0000,
	0.2989, 0.3943, 0.0000,
	0.4149, 0.4678, 0.0000,
	0.6282, 0.3108, 0.0000,
	0.2255, 0.1263, 0.0000,
	0.6011, 0.3116, 0.0000,
	0.6312, 0.2224, 0.0000,
	0.2202, 0.0337, 0.0000,
	0.6136, 0.2133, 0.0000,
	0.6398, 0.1933, 0.0000,
	0.2166, 0.0024, 0.0000,
	0.6400, 0.1925, 0.0000,
	0.3109, 0.4106, 0.0000,
	0.3111, 0.4069, 0.0000,
	0.3513, 0.7872, 0.0000,
	0.5442, 0.9338, 0.0000,
	0.3926, 0.2941, 0.0000,
	0.3926, 0.2978, 0.0000,
	0.3877, 0.2660, 0.0000,
	0.6392, 0.1926, 0.0000
];

var quads = [
	// indices for vertex1, textureCoord of vertex1, normal of vertex1, vertex2, ...
	// each index starts from 1, we will probably need to subtract 1 from each
	1, 1, 1, 2, 2, 1, 3, 3, 1, 4, 4, 1,
	5, 5, 2, 6, 6, 2, 7, 7, 2, 8, 8, 2,
	7, 7, 3, 6, 6, 3, 9, 9, 3, 10, 10, 3,
	10, 11, 4, 9, 12, 4, 11, 13, 4, 12, 14, 4,
	13, 15, 5, 14, 16, 5, 15, 17, 5, 16, 18, 5,
	14, 16, 6, 17, 19, 6, 18, 20, 6, 15, 17, 6,
	18, 20, 7, 17, 19, 7, 19, 21, 7, 20, 22, 7,
	19, 21, 8, 21, 23, 8, 22, 24, 8, 20, 22, 8,
	22, 24, 9, 21, 23, 9, 23, 25, 9, 24, 26, 9,
	25, 27, 10, 3, 3, 10, 26, 28, 10, 27, 29, 10,
	27, 29, 11, 26, 28, 11, 28, 30, 11, 29, 31, 11,
	30, 32, 12, 31, 33, 12, 32, 34, 12, 33, 35, 12,
	34, 36, 13, 3, 3, 13, 2, 2, 13, 8, 8, 13,
	8, 8, 14, 7, 7, 14, 35, 37, 14, 34, 36, 14,
	3, 3, 15, 34, 36, 15, 35, 37, 15, 36, 38, 15,
	36, 39, 16, 35, 40, 16, 37, 41, 16, 38, 42, 16,
	7, 7, 17, 10, 10, 17, 37, 43, 17, 35, 37, 17,
	39, 44, 18, 40, 45, 18, 31, 33, 18, 41, 46, 18,
	42, 47, 19, 18, 20, 19, 20, 22, 19, 39, 48, 19,
	43, 49, 20, 44, 50, 20, 45, 51, 20, 46, 52, 20,
	44, 53, 21, 47, 54, 21, 24, 26, 21, 48, 55, 21,
	28, 56, 22, 26, 57, 22, 49, 58, 22, 42, 47, 22,
	41, 46, 23, 28, 30, 23, 50, 59, 23, 51, 60, 23,
	28, 56, 24, 42, 47, 24, 52, 61, 24, 50, 62, 24,
	39, 48, 25, 53, 63, 25, 52, 61, 25, 42, 47, 25,
	39, 44, 26, 41, 46, 26, 51, 60, 26, 53, 64, 26,
	50, 59, 27, 54, 65, 27, 55, 66, 27, 51, 60, 27,
	53, 63, 28, 56, 67, 28, 57, 68, 28, 52, 61, 28,
	51, 60, 29, 55, 66, 29, 56, 69, 29, 53, 64, 29,
	58, 70, 30, 59, 71, 30, 60, 72, 30, 61, 73, 30,
	58, 74, 31, 62, 75, 31, 63, 76, 31, 59, 77, 31,
	62, 75, 32, 64, 78, 32, 65, 79, 32, 63, 76, 32,
	61, 73, 33, 60, 72, 33, 65, 80, 33, 64, 81, 33,
	59, 82, 34, 63, 83, 34, 65, 80, 34, 60, 72, 34,
	40, 84, 35, 47, 54, 35, 66, 85, 35, 67, 86, 35,
	47, 54, 36, 44, 53, 36, 43, 87, 36, 66, 85, 36,
	68, 88, 37, 69, 89, 37, 70, 90, 37, 71, 91, 37,
	72, 92, 38, 71, 93, 38, 73, 94, 38, 74, 95, 38,
	75, 96, 39, 76, 97, 39, 68, 88, 39, 77, 98, 39,
	73, 94, 40, 78, 99, 40, 79, 100, 40, 76, 101, 40,
	54, 65, 41, 58, 70, 41, 61, 73, 41, 55, 66, 41,
	64, 78, 42, 62, 75, 42, 57, 68, 42, 56, 67, 42,
	55, 66, 43, 61, 73, 43, 64, 81, 43, 56, 69, 43,
	76, 97, 44, 80, 102, 44, 81, 103, 44, 68, 88, 44,
	76, 101, 45, 79, 100, 45, 82, 104, 45, 80, 105, 45,
	78, 99, 46, 70, 106, 46, 69, 107, 46, 79, 108, 46,
	32, 34, 47, 77, 98, 47, 72, 109, 47, 43, 49, 47,
	43, 87, 48, 72, 92, 48, 74, 95, 48, 66, 85, 48,
	67, 110, 49, 75, 96, 49, 77, 98, 49, 32, 34, 49,
	67, 86, 50, 66, 85, 50, 74, 95, 50, 75, 111, 50,
	49, 58, 51, 15, 17, 51, 18, 20, 51, 42, 47, 51,
	24, 26, 52, 23, 25, 52, 83, 112, 52, 48, 55, 52,
	48, 55, 53, 83, 112, 53, 84, 113, 53, 85, 114, 53,
	45, 51, 54, 44, 50, 54, 86, 115, 54, 87, 116, 54,
	44, 53, 55, 48, 55, 55, 85, 114, 55, 86, 117, 55,
	85, 114, 56, 84, 113, 56, 88, 118, 56, 89, 119, 56,
	87, 116, 57, 86, 115, 57, 90, 120, 57, 91, 121, 57,
	86, 117, 58, 85, 114, 58, 89, 119, 58, 90, 122, 58,
	88, 118, 59, 92, 123, 59, 93, 124, 59, 89, 119, 59,
	90, 120, 60, 94, 125, 60, 95, 126, 60, 91, 121, 60,
	89, 119, 61, 93, 124, 61, 94, 127, 61, 90, 122, 61,
	47, 54, 62, 40, 84, 62, 22, 24, 62, 24, 26, 62,
	22, 24, 63, 40, 84, 63, 39, 48, 63, 20, 22, 63,
	69, 107, 34, 96, 128, 34, 82, 129, 34, 79, 108, 34,
	57, 68, 64, 54, 130, 64, 50, 62, 64, 52, 61, 64,
	58, 74, 65, 54, 130, 65, 57, 68, 65, 62, 75, 65,
	38, 42, 66, 37, 41, 66, 10, 11, 66, 12, 14, 66,
	16, 18, 67, 15, 17, 67, 49, 58, 67, 36, 39, 67,
	36, 39, 68, 49, 58, 68, 26, 57, 68, 3, 131, 68,
	40, 45, 69, 67, 110, 69, 32, 34, 69, 31, 33, 69,
	81, 103, 70, 80, 102, 70, 82, 132, 70, 96, 133, 70,
	68, 88, 71, 81, 103, 71, 96, 134, 71, 69, 89, 71,
	1, 1, 73, 5, 5, 73, 8, 8, 73, 2, 2, 73,
	36, 39, 74, 38, 42, 74, 12, 14, 74, 16, 18, 74,
	16, 18, 75, 12, 14, 75, 11, 13, 75, 13, 15, 75,
	71, 93, 76, 70, 106, 76, 78, 99, 76, 73, 94, 76,
	71, 91, 77, 72, 109, 77, 77, 98, 77, 68, 88, 77,
	76, 101, 78, 75, 111, 78, 74, 95, 78, 73, 94, 78,
	29, 31, 79, 28, 30, 79, 41, 46, 79, 97, 137, 79,
	97, 137, 80, 41, 46, 80, 31, 33, 80, 30, 32, 80,
	33, 35, 81, 32, 34, 81, 43, 49, 81, 46, 52, 81,
	1, 1, 82, 4, 4, 82, 98, 138, 82, 99, 139, 82,
	5, 5, 83, 100, 140, 83, 101, 141, 83, 6, 6, 83,
	101, 141, 84, 102, 142, 84, 9, 9, 84, 6, 6, 84,
	102, 143, 85, 103, 144, 85, 11, 13, 85, 9, 12, 85,
	13, 15, 86, 104, 145, 86, 105, 146, 86, 14, 16, 86,
	14, 16, 87, 105, 146, 87, 106, 147, 87, 17, 19, 87,
	106, 147, 88, 107, 148, 88, 19, 21, 88, 17, 19, 88,
	19, 21, 89, 107, 148, 89, 108, 149, 89, 21, 23, 89,
	108, 149, 90, 109, 150, 90, 23, 25, 90, 21, 23, 90,
	25, 27, 91, 27, 29, 91, 110, 151, 91, 98, 138, 91,
	27, 29, 92, 29, 31, 92, 111, 152, 92, 110, 151, 92,
	30, 32, 93, 33, 35, 93, 112, 153, 93, 113, 154, 93,
	114, 155, 94, 100, 140, 94, 99, 139, 94, 98, 138, 94,
	100, 140, 95, 114, 155, 95, 115, 156, 95, 101, 141, 95,
	98, 138, 96, 116, 157, 96, 115, 156, 96, 114, 155, 96,
	116, 158, 97, 117, 159, 97, 118, 160, 97, 115, 161, 97,
	101, 141, 98, 115, 156, 98, 118, 162, 98, 102, 142, 98,
	119, 163, 99, 120, 164, 99, 113, 154, 99, 121, 165, 99,
	122, 166, 100, 119, 167, 100, 107, 148, 100, 106, 147, 100,
	123, 168, 101, 46, 52, 101, 45, 51, 101, 124, 169, 101,
	124, 170, 102, 125, 171, 102, 109, 150, 102, 126, 172, 102,
	111, 173, 103, 122, 166, 103, 127, 174, 103, 110, 175, 103,
	120, 164, 104, 128, 176, 104, 129, 177, 104, 111, 152, 104,
	111, 173, 105, 129, 178, 105, 130, 179, 105, 122, 166, 105,
	119, 167, 106, 122, 166, 106, 130, 179, 106, 131, 180, 106,
	119, 163, 107, 131, 181, 107, 128, 176, 107, 120, 164, 107,
	129, 177, 108, 128, 176, 108, 132, 182, 108, 133, 183, 108,
	131, 180, 109, 130, 179, 109, 134, 184, 109, 135, 185, 109,
	128, 176, 110, 131, 181, 110, 135, 186, 110, 132, 182, 110,
	136, 187, 111, 137, 188, 111, 138, 189, 111, 139, 190, 111,
	136, 191, 112, 139, 192, 112, 140, 193, 112, 141, 194, 112,
	141, 194, 113, 140, 193, 113, 142, 195, 113, 143, 196, 113,
	137, 188, 114, 143, 197, 114, 142, 198, 114, 138, 189, 114,
	139, 199, 115, 138, 189, 115, 142, 198, 115, 140, 200, 115,
	121, 201, 116, 144, 202, 116, 145, 203, 116, 126, 172, 116,
	126, 172, 117, 145, 203, 117, 123, 204, 117, 124, 170, 117,
	146, 205, 118, 147, 206, 118, 148, 207, 118, 149, 208, 118,
	150, 209, 119, 151, 210, 119, 152, 211, 119, 147, 212, 119,
	153, 213, 120, 154, 214, 120, 146, 205, 120, 155, 215, 120,
	152, 211, 121, 155, 216, 121, 156, 217, 121, 157, 218, 121,
	133, 183, 122, 132, 182, 122, 137, 188, 122, 136, 187, 122,
	143, 196, 123, 135, 185, 123, 134, 184, 123, 141, 194, 123,
	132, 182, 124, 135, 186, 124, 143, 197, 124, 137, 188, 124,
	155, 215, 125, 146, 205, 125, 158, 219, 125, 159, 220, 125,
	155, 216, 126, 159, 221, 126, 160, 222, 126, 156, 217, 126,
	157, 218, 127, 156, 223, 127, 149, 224, 127, 148, 225, 127,
	112, 153, 128, 123, 168, 128, 150, 226, 128, 154, 214, 128,
	123, 204, 129, 145, 203, 129, 151, 210, 129, 150, 209, 129,
	144, 227, 130, 112, 153, 130, 154, 214, 130, 153, 213, 130,
	144, 202, 131, 153, 228, 131, 151, 210, 131, 145, 203, 131,
	127, 174, 132, 122, 166, 132, 106, 147, 132, 105, 146, 132,
	109, 150, 133, 125, 171, 133, 83, 112, 133, 23, 25, 133,
	125, 171, 134, 161, 229, 134, 84, 113, 134, 83, 112, 134,
	45, 51, 135, 87, 116, 135, 162, 230, 135, 124, 169, 135,
	124, 170, 136, 162, 231, 136, 161, 229, 136, 125, 171, 136,
	161, 229, 137, 163, 232, 137, 88, 118, 137, 84, 113, 137,
	87, 116, 138, 91, 121, 138, 164, 233, 138, 162, 230, 138,
	162, 231, 139, 164, 234, 139, 163, 232, 139, 161, 229, 139,
	88, 118, 140, 163, 232, 140, 165, 235, 140, 92, 123, 140,
	164, 233, 141, 91, 121, 141, 95, 126, 141, 166, 236, 141,
	163, 232, 142, 164, 234, 142, 166, 237, 142, 165, 235, 142,
	126, 172, 143, 109, 150, 143, 108, 149, 143, 121, 201, 143,
	108, 149, 144, 107, 148, 144, 119, 167, 144, 121, 201, 144,
	149, 224, 34, 156, 223, 34, 160, 238, 34, 167, 239, 34,
	134, 184, 145, 130, 179, 145, 129, 178, 145, 133, 240, 145,
	136, 191, 146, 141, 194, 146, 134, 184, 146, 133, 240, 146,
	117, 159, 147, 103, 144, 147, 102, 143, 147, 118, 160, 147,
	104, 145, 148, 116, 158, 148, 127, 174, 148, 105, 146, 148,
	116, 158, 149, 98, 241, 149, 110, 175, 149, 127, 174, 149,
	121, 165, 150, 113, 154, 150, 112, 153, 150, 144, 227, 150,
	158, 219, 151, 167, 242, 151, 160, 243, 151, 159, 220, 151,
	146, 205, 152, 149, 208, 152, 167, 244, 152, 158, 219, 152,
	1, 1, 154, 99, 139, 154, 100, 140, 154, 5, 5, 154,
	116, 158, 155, 104, 145, 155, 103, 144, 155, 117, 159, 155,
	104, 145, 156, 13, 15, 156, 11, 13, 156, 103, 144, 156,
	147, 212, 157, 152, 211, 157, 157, 218, 157, 148, 225, 157,
	147, 206, 158, 146, 205, 158, 154, 214, 158, 150, 226, 158,
	155, 216, 159, 152, 211, 159, 151, 210, 159, 153, 228, 159,
	29, 31, 160, 97, 137, 160, 120, 164, 160, 111, 152, 160,
	97, 137, 161, 30, 32, 161, 113, 154, 161, 120, 164, 161,
	33, 35, 162, 46, 52, 162, 123, 168, 162, 112, 153, 162,
	4, 4, 163, 3, 3, 163, 25, 27, 163, 98, 138, 163
];

var triangles = [
	// indices for vertex1, textureCoord of vertex1, normal of vertex1, vertex2, ...
	// each index starts from 1, we will probably need to subtract 1 from each
	94, 135, 72, 92, 123, 72, 95, 136, 72,
	166, 245, 153, 92, 123, 153, 165, 235, 153,
	94, 135, 164, 93, 124, 164, 92, 123, 164,
	166, 245, 165, 95, 136, 165, 92, 123, 165
];

window.onload = function init() {
	canvas = document.getElementById("gl-canvas");

	gl = WebGLUtils.setupWebGL(canvas);
	if (!gl) { alert("WebGL isn't available"); }

	gl.clearColor(1.0, 1.0, 1.0, 1.0);

	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

	prepareTeapot();

	var nBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(normals), gl.STATIC_DRAW);

	var vNormal = gl.getAttribLocation(program, "vNormal");
	gl.vertexAttribPointer(vNormal, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vNormal);

	var vBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	var iBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);

	modelViewMatrix = rotateY(-90);
	projectionMatrix = ortho(-40.0, 40.0, -40.0, 40.0, -40.0, 40.0);

	var ambientProduct = mult(lightAmbient, materialAmbient);
	var diffuseProduct = mult(lightDiffuse, materialDiffuse);
	var specularProduct = mult(lightSpecular, materialSpecular);

	gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
		flatten(ambientProduct));
	gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
		flatten(diffuseProduct));
	gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"),
		flatten(specularProduct));
	gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"),
		flatten(lightPosition));

	gl.uniform1f(gl.getUniformLocation(program,
		"shininess"), materialShininess);

	// gl.uniformMatrix4fv(gl.getUniformLocation(program, "projectionMatrix"),
	// 	false, flatten(projectionMatrix));

	modelViewMatrixLoc = gl.getUniformLocation(program, "modelViewMatrix");
	projectionMatrixLoc = gl.getUniformLocation(program, "projectionMatrix");

	gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix));
	gl.uniformMatrix4fv(projectionMatrixLoc, false, flatten(projectionMatrix));

	document.getElementById("XButton").onclick = function () {
		modelViewMatrix = mult(rotateX(15), modelViewMatrix);
		gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix));
		render();
	};
	document.getElementById("YButton").onclick = function () {
		modelViewMatrix = mult(rotateY(15), modelViewMatrix);
		gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix));
		render();
	};
	document.getElementById("ZButton").onclick = function () {
		modelViewMatrix = mult(rotateZ(15), modelViewMatrix);
		gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix));
		render();
	};

	render();
};

// This function goes over the given teapot data and 
// does the necessary index organization tasks.
// The main task is to convert the given polygons (quads and triangles)
// into a single indices array correctly
function prepareTeapot() {
	for (var i = 0; i < quads.length; i += 12) {
		indices.push(quads[i] - 1, quads[i + 3] - 1, quads[i + 6] - 1);
		indices.push(quads[i] - 1, quads[i + 6] - 1, quads[i + 9] - 1);
	}
	for (var i = 0; i < triangles.length; i += 9) {
		indices.push(triangles[i] - 1, triangles[i + 3] - 1, triangles[i + 6] - 1);
	}
}

function render() {

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	for (var i = 0; i < indices.length; i += 3)
		gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_BYTE, 0);
}
