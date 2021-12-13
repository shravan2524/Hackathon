import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Carous from './Shravan/Carous';
import Categorycard from './Shravan/Categorycard';
import { useHistory } from 'react-router';
export default function Maindashboard() {
    const history = useHistory();
    const ok = localStorage.getItem('isLogin');
    // alert(ok);
    if(ok==0){
        history.push("/login");
    }
    const products_mobile = [
        [
            {
                category: "Mobile",
                image: './images/mobile.png'
            },
            [
                {
                    product_id: 'M1',
                    product_title: 'Apple iPhone 11',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 54000,
                    product_currency: '₹',
                    product_image: './images/Mobile_21.png'
                },
                {
                    product_id: 'M2',
                    product_title: 'OnePlus 9R 5G',
                    product_description: 'Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences.Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera.6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate. Powerful 4500 mAh with 65 Watt Warp charging capability.Oxygen OS based on Andriod 11',
                    product_price: 39999,
                    product_currency: '₹',
                    product_image: './images/4.png'
                },
                {
                    product_id: 'M3',
                    product_title: 'Mi 11X 5G Cosmic Black',
                    product_description: 'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool technology .Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera .Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology.Battery: 4520 mAH large battery with 33W fast charger in-box and Type-C connectivity',
                    product_price: 27999,
                    product_currency: '₹',
                    product_image: './images/5.png'
                },
            ],
        ],
        [
            {
                category: "Electronics",
                image: './images/electronics.png'
            },
            [
                {
                    product_id: 'M1',
                    product_title: 'Apple iPhone 11',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 54000,
                    product_currency: '₹',
                    product_image: './images/Mobile_21.png'
                },
                {
                    product_id: 'M2',
                    product_title: 'OnePlus 9R 5G',
                    product_description: 'Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences.Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera.6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate. Powerful 4500 mAh with 65 Watt Warp charging capability.Oxygen OS based on Andriod 11',
                    product_price: 39999,
                    product_currency: '₹',
                    product_image: './images/4.png'
                },
                {
                    product_id: 'M3',
                    product_title: 'Mi 11X 5G Cosmic Black',
                    product_description: 'Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool technology .Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera .Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology.Battery: 4520 mAH large battery with 33W fast charger in-box and Type-C connectivity',
                    product_price: 27999,
                    product_currency: '₹',
                    product_image: './images/5.png'
                },
            ],
        ],

        [
            {
                category: "fashion",
                image: './images/fashion.png'
            },
            [
                {
                    product_id: 'M6',
                    product_title: 'OPPO F19 Pro + 5G ',
                    product_description: '6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
                    product_price: 25990,
                    product_currency: '₹',
                    product_image: './images/7.png'
                },
                {
                    product_id: 'M7',
                    product_title: 'Vivo X60 Pro',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 49000,
                    product_currency: '₹',
                    product_image: './images/8.png'
                },
                {
                    product_id: 'M8',
                    product_title: 'Apple iPhone 12 Pro Max',
                    product_description: '6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
                    product_price: 129900,
                    product_currency: '₹',
                    product_image: './images/9.png'
                },
            ]
        ],
        [
            {
                category: "Grocery",
                image: './images/grocery.png'
            },
            [
                {
                    product_id: 'M6',
                    product_title: 'OPPO F19 Pro + 5G ',
                    product_description: '6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
                    product_price: 25990,
                    product_currency: '₹',
                    product_image: './images/7.png'
                },
                {
                    product_id: 'M7',
                    product_title: 'Vivo X60 Pro',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 49000,
                    product_currency: '₹',
                    product_image: './images/8.png'
                },
                {
                    product_id: 'M8',
                    product_title: 'Apple iPhone 12 Pro Max',
                    product_description: '6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
                    product_price: 129900,
                    product_currency: '₹',
                    product_image: './images/9.png'
                },
            ]
        ],
        [
            {
                category: "Home",
                image: './images/home.png'
            },
            [
                {
                    product_id: 'M6',
                    product_title: 'OPPO F19 Pro + 5G ',
                    product_description: '6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
                    product_price: 25990,
                    product_currency: '₹',
                    product_image: './images/7.png'
                },
                {
                    product_id: 'M7',
                    product_title: 'Vivo X60 Pro',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 49000,
                    product_currency: '₹',
                    product_image: './images/8.png'
                },
                {
                    product_id: 'M8',
                    product_title: 'Apple iPhone 12 Pro Max',
                    product_description: '6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
                    product_price: 129900,
                    product_currency: '₹',
                    product_image: './images/9.png'
                },
            ]
        ],
        [
            {
                category: "Appliances",
                image: './images/appliances.png'
            },
            [
                {
                    product_id: 'M6',
                    product_title: 'OPPO F19 Pro + 5G ',
                    product_description: '6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
                    product_price: 25990,
                    product_currency: '₹',
                    product_image: './images/7.png'
                },
                {
                    product_id: 'M7',
                    product_title: 'Vivo X60 Pro',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 49000,
                    product_currency: '₹',
                    product_image: './images/8.png'
                },
                {
                    product_id: 'M8',
                    product_title: 'Apple iPhone 12 Pro Max',
                    product_description: '6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
                    product_price: 129900,
                    product_currency: '₹',
                    product_image: './images/9.png'
                },
            ]
        ],
        [
            {
                category: "Travel",
                image: './images/travel.png'
            },
            [
                {
                    product_id: 'M6',
                    product_title: 'OPPO F19 Pro + 5G ',
                    product_description: '6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
                    product_price: 25990,
                    product_currency: '₹',
                    product_image: './images/7.png'
                },
                {
                    product_id: 'M7',
                    product_title: 'Vivo X60 Pro',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 49000,
                    product_currency: '₹',
                    product_image: './images/8.png'
                },
                {
                    product_id: 'M8',
                    product_title: 'Apple iPhone 12 Pro Max',
                    product_description: '6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
                    product_price: 129900,
                    product_currency: '₹',
                    product_image: './images/9.png'
                },
            ]
        ],
        [
            {
                category: "Beauty",
                image: './images/beauty.png'
            },
            [
                {
                    product_id: 'M6',
                    product_title: 'OPPO F19 Pro + 5G ',
                    product_description: '6.43" inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels. Larger Screen to Body ratio of 90.8%, In-display Fingerprint 3.0.Mediatek Dimensity 800U 5G Supports Dual 5G or 4G Sim. Powerful 2.4 ghz Octa-core Processor, Support LPDDR4x memory and latest UFS 2.1 storage.4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens) - 16MP Front Camera.',
                    product_price: 25990,
                    product_currency: '₹',
                    product_image: './images/7.png'
                },
                {
                    product_id: 'M7',
                    product_title: 'Vivo X60 Pro',
                    product_description: '6.1-inch (15.4 cm diagonal) Liquid Retina HD LCD display .Water and dust resistant (2 meters for up to 30 minutes, IP68).Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps.12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo.Face ID for secure authentication.A13 Bionic chip with third-generation Neural Engine.Fast-charge capable',
                    product_price: 49000,
                    product_currency: '₹',
                    product_image: './images/8.png'
                },
                {
                    product_id: 'M8',
                    product_title: 'Apple iPhone 12 Pro Max',
                    product_description: '6.7-inch (17 cm diagonal) Super Retina XDR display .Ceramic Shield, tougher than any smartphone glass.A14 Bionic chip, the fastest chip ever in a smartphone.Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording .LiDAR Scanner for improved AR experiences, Night mode portraits.12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
                    product_price: 129900,
                    product_currency: '₹',
                    product_image: './images/9.png'
                },
            ]
        ],

    ]

    console.log(products_mobile);

    return (
        <>
            <div style={{ width: "90%", marginTop:'4rem' }}>
                <div style={{height:"20rem"}}  >
                    <Carous />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                        Categories
                    </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {
                        products_mobile.map((e) => {
                            return <Categorycard data={e} key={e[0]} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
