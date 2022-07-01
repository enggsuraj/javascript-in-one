// USING SET

const vendor_1 = [1, 2];
const vendor_2 = [1, 3];
const vendor_3 = [4];
const vendor_4 = [3];

const finalVendor = [...vendor_1, ...vendor_2, ...vendor_3, ...vendor_4];
console.log(new Set(finalVendor));
// Set(4) {1, 2, 3, 4}
