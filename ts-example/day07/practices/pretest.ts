export{};
// import https from "https";
// import { reject } from "lodash";
// import { resolve } from "path";

import https from "https";

// 1. สร้าง Helper Function สำหรับโหลดของ 1 อย่าง (Reusable)
function load(url: string, errorName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = "";
            res.on("data", (c) => data += c);
            res.on("end", () => resolve(data));
        }).on("error", (err) => {
            // สร้าง Error ตามที่คุณต้องการ
            const customErr = new Error(err.message);
            customErr.name = errorName;
            reject(customErr);
        });
    });
}

// 2. ฟังก์ชันหลักที่จัดการ Logic 2 อย่าง
async function fetchProductAndCart(urlProduct: string, urlCart: string) {
    // สั่งโหลดพร้อมกัน 2 อัน แล้วรอจนกว่าจะ "รู้ผล" ทั้งคู่ (ไม่ว่าจะผ่านหรือพัง)
    const results = await Promise.allSettled([
        load(urlProduct, "loadProductfail"), // ตัวที่ 0
        load(urlCart, "loadcartfail")        // ตัวที่ 1
    ]);

    const productResult = results[0];
    const cartResult = results[1];

    // --- ตรวจสอบ Error Logic แบบที่คุณต้องการ ---
    
    // กรณี: พังทั้งคู่
    if (productResult.status === "rejected" && cartResult.status === "rejected") {
        const err = new Error("Failed both");
        err.name = "fail_all";
        throw err;
    }

    // กรณี: Product พังอย่างเดียว
    if (productResult.status === "rejected") {
        throw productResult.reason; // โยน error ที่เราสร้างไว้ใน load()
    }

    // กรณี: Cart พังอย่างเดียว
    if (cartResult.status === "rejected") {
        throw cartResult.reason;
    }

    // กรณี: ผ่านฉลุยทั้งคู่
    // ดึงค่า value ออกมา (ต้อง cast type นิดหน่อยเพราะ TS)
    const productData = (productResult as PromiseFulfilledResult<string>).value;
    const cartData = (cartResult as PromiseFulfilledResult<string>).value;

    return { product: productData, cart: cartData };
}

// 3. Output Function
async function output(url1: string, url2: string) {
    try {
        const data = await fetchProductAndCart(url1, url2);
        console.log("✅ Success!");
        console.log("Product Data Length:", data.product.length);
        console.log("Cart Data Length:", data.cart.length);

    } catch (err: any) {
        if (err.name === "fail_all") {
            console.log("❌ Fail to load BOTH product and cart");
        } else if (err.name === "loadProductfail") {
            console.log("❌ Fail to load PRODUCT");
        } else if (err.name === "loadcartfail") {
            console.log("❌ Fail to load CART");
        } else {
            console.log("❌ Unknown Error:", err);
        }
        // process.exit(); // ปิดโปรแกรม
    }
}

// Test Case (แก้ htts เป็น https ด้วยนะครับ)
output("https://fakestoreapi.com/products", "https://fakestoreapi.com/carts");