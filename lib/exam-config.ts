
export type ToolType = "PHOTO_WIZARD" | "SIGNATURE_JOINER" | "POSTCARD_MAKER" | "DECLARATION_GENERATOR" | "IMAGE_TO_PDF";

export interface FAQItem {
  q: string;
  a: string;
}

export interface ToolConfig {
  type: ToolType;
  title: string;
  instructions?: string; // HTML supported for specific tool warnings/requirements
  config?: {
    width?: number;
    height?: number; // if 0 or undefined, implies auto-aspect or specific logic
    minKB?: number;
    maxKB?: number;
    aspect?: number;
    label?: string;
    features?: {
      dateOnPhoto?: boolean; // SSC requirement
      nameAndDateOnPhoto?: boolean; // UPSC/NEET requirement
      forceSquare?: boolean; // RRB/UPSC requirement
      isSignature?: boolean; // Changes UI hints
      isDeclaration?: boolean; // IBPS requirement
      blackInkOnly?: boolean; // UI hint for banking, triggers filter
      enhanceLegibility?: boolean; // Triggers "enhanceLegibility" filter
    };
  };
}

export interface ExamPageConfig {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: {
    heading: string;
    descriptionHtml: string;
  };
  tools: ToolConfig[];
  faqs?: FAQItem[];
}

export const EXAMS: Record<string, ExamPageConfig> = {
  "upsc": {
    id: "upsc",
    title: "UPSC Civil Services / NDA / CDS",
    metaTitle: "Resize Photo & Signature for UPSC 2026 - Triple Signature Joiner",
    metaDescription: "Free UPSC photo resizer (350x350px) and Triple Signature Joiner. Compliant with 2026 notifications for Civil Services, NDA, and CDS.",
    content: {
      heading: "UPSC 2026 Photo & Signature Rules",
      descriptionHtml: `
        <p class="text-slate-700 dark:text-slate-300">
          UPSC has updated its requirements for 2026 exams. Candidates must strictly follow the new Triple Signature Rule and Photo guidelines to avoid rejection.
        </p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Step 1: Photo Resizer",
        instructions: `
          <ul class="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Dimensions:</strong> 350x350 px (Square).</li>
            <li><strong>Size:</strong> 20-300 KB.</li>
            <li><strong>Feature:</strong> Name & Date on photo is highly recommended.</li>
          </ul>`,
        config: { width: 350, height: 350, aspect: 1, minKB: 20, maxKB: 200, features: { forceSquare: true, nameAndDateOnPhoto: true } }
      },
      {
        type: "SIGNATURE_JOINER",
        title: "Step 2: Triple Signature Joiner (New Rule)",
        instructions: `
          <p class="text-sm">The 2026 Rule requires <strong>Three Signatures</strong> stacked vertically to ensure better verification.</p>`,
        config: { width: 350, height: 1000, aspect: 0.35, minKB: 20, maxKB: 100 }
      },
      {
        type: "IMAGE_TO_PDF",
        title: "Step 3: ID Proof (PDF Maker)",
        instructions: `<p class="text-sm">Convert your ID Proof (Aadhar/Voter ID) to PDF. Max size: 300KB.</p>`,
        config: { maxKB: 300 }
      }
    ],
    faqs: [
      { q: "Is a 'Name and Date' required on the UPSC photo?", a: "For the 2025-26 cycle, it is strongly recommended. While some years omit this strict rule, adding your Name and Date of Photo (DOP) at the bottom is the safest option to avoid rejection." },
      { q: "Can I wear glasses in the UPSC photo?", a: "Yes, you can wear spectacles if you wear them regularly, but there must be NO glare/reflection on the lenses. Dark glasses or sunglasses are strictly prohibited." },
      { q: "What is the new 'Live Photo' requirement?", a: "UPSC now requires a webcam-captured 'Live Photo' during the application. However, you must still upload a scanned passport photo as a backup/reference. Our tool helps you prepare that scanned file." },
      { q: "Why does my signature get rejected?", a: "UPSC rejects signatures that are too small, blurry, or not on plain white paper. Ensure the aspect ratio is correct and the ink is dark enough." },
      { q: "Is a beard allowed in the UPSC photo?", a: "Yes, but your appearance in the photo must match your appearance on the exam day. If you shave off your beard before the exam, it might cause identity verification issues." },
      { q: "What is the strict file size limit?", a: "The photo and signature must be between 20 KB and 300 KB. Anything outside this range will trigger an upload error." },
      { q: "Can I use a selfie?", a: "No. Selfies distort facial features. You must use a formal portrait taken by a rear camera or webcam at eye level." },
      { q: "What background color is required?", a: "The background must be plain white. Photos with shadows, designs, or dark colors are often rejected." },
      { q: "How old can the photograph be?", a: "The photo should not be older than 10 days from the start of the application process." },
      { q: "Do I need to sign in Black Ink?", a: "Yes, UPSC prefers Black Ink on white paper for the clearest scanning visibility." }
    ]
  },
  "ssc": {
    id: "ssc",
    title: "SSC CGL / CHSL / MTS / GD",
    metaTitle: "SSC Photo Resizer with Date - Add Date on Photo Online",
    metaDescription: "Resize photo for SSC exams (20-50KB) and automatically add the Date of Photo at the bottom. Avoid rejection.",
    content: {
      heading: "SSC Rejection Criteria (Critical)",
      descriptionHtml: `
        <p class="text-slate-700 dark:text-slate-300">
          SSC is very strict about the "Date of Photo" being printed on the image. Thousands of forms are rejected annually due to missing dates.
        </p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Step 1: Photo with Date",
        instructions: `
          <div class="bg-red-50 dark:bg-red-950/20 p-2 rounded border border-red-200 dark:border-red-900/50">
            <p class="text-red-700 dark:text-red-400 font-bold text-sm">CRITICAL: Date of Photo is REQUIRED.</p>
            <ul class="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mt-1">
              <li>Dimensions: 3.5cm x 4.5cm</li>
              <li>Size: 20-50 KB</li>
            </ul>
          </div>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 20, maxKB: 50, features: { dateOnPhoto: true } }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Step 2: Signature Resizer",
        instructions: `<p class="text-sm">Signature must be 4.0cm x 2.0cm, between 10-20 KB.</p>`,
        config: { width: 280, height: 94, aspect: 280 / 94, minKB: 10, maxKB: 20, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "Does SSC accept photos with dates?", a: "Yes. For uploaded photos, having the Date of Photo (DOP) printed is crucial. Photos without a date are a top reason for rejection in SSC exams." },
      { q: "What is the 'Live Photo' rule?", a: "SSC now mandates capturing a live photo via the app/website. However, if the live capture fails, you may be asked to upload a standard photo, which must meet strict dimensions." },
      { q: "Can I wear a cap or hat?", a: "No. Caps, hats, and religious headgear that cover the face are strictly prohibited. Both ears must be visible." },
      { q: "My signature is in Blue ink. Is it okay?", a: "SSC notifications typically specify 'Black Ink', but Blue is often accepted if it is dark enough. To be safe, use our 'Black Ink Filter' to convert it." },
      { q: "What are the dimensions for the SSC Signature?", a: "The signature should be approximately 4.0 cm (width) x 2.0 cm (height). Files must be between 10KB and 20KB." },
      { q: "Why is my photo rejected for 'Blur'?", a: "SSC systems check for sharpness. If your face is pixelated or out of focus, it will be rejected. Use a high-quality source image." },
      { q: "Can I wear glasses?", a: "No. Recent SSC notifications have been very strict: NO spectacles allowed in the photo, even if you wear them daily." },
      { q: "What is the file size for SSC photos?", a: "The uploaded photo must be between 20 KB and 50 KB. Our tool compresses it to exactly this range." },
      { q: "Is the 'Side Profile' allowed?", a: "No. You must look straight at the camera. Both ears must be visible." },
      { q: "Can I correct my photo after submission?", a: "SSC usually opens a 'Correction Window' for a fee (approx ₹200-500). It is better to get it right the first time using this tool." }
    ]
  },
  "ibps": {
    id: "ibps",
    title: "IBPS PO / Clerk & SBI Exams",
    metaTitle: "IBPS Photo, Signature, Thumb & Declaration Resizer",
    metaDescription: "Resize all 4 IBPS documents: Photo, Signature, Thumb, and Declaration. Supports Black Ink Filter.",
    content: {
      heading: "Banking Exam Documents (4 Items)",
      descriptionHtml: `
        <p class="mb-2 text-slate-700 dark:text-slate-300">Banking exams require strict adherence to file sizes for all 4 documents. Use the tools below for each item.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "1. Photo",
        instructions: `<p class="text-sm">Passport size: <strong>3.5cm (W) x 4.5cm (H)</strong>. Size: 20-50 KB.</p>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 20, maxKB: 50 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "2. Signature (Black Ink)",
        instructions: `<p class="text-sm"><strong>Black Ink</strong> on white paper is preferred. Size: 10-20 KB.</p>`,
        config: { width: 140, height: 60, aspect: 140 / 60, minKB: 10, maxKB: 20, features: { isSignature: true, blackInkOnly: true } }
      },
      {
        type: "PHOTO_WIZARD",
        title: "3. Left Thumb Impression",
        instructions: `<p class="text-sm">3cm x 3cm. Size: 20-50 KB. Use blue or black ink pad.</p>`,
        config: { width: 240, height: 240, aspect: 1, minKB: 20, maxKB: 50, label: "Thumb Impression" }
      },
      {
        type: "PHOTO_WIZARD",
        title: "4. Handwritten Declaration (Resize)",
        instructions: `<p class="text-sm">Resize your scanned declaration. Must be on white paper with black ink. Size: 50-100 KB.</p>`,
        config: { width: 800, height: 400, aspect: 2, minKB: 50, maxKB: 100, features: { isDeclaration: true, enhanceLegibility: true } }
      }
    ],
    faqs: [
      { q: "Why must the signature be in Black Ink?", a: "IBPS software is programmed to detect high-contrast black strokes. Blue or gel pen signatures often fail the automated quality check." },
      { q: "Can I type the Handwritten Declaration?", a: "ABSOLUTELY NOT. It must be written in your own handwriting. Typing it (even with a handwriting font) is considered 'Unfair Means' and leads to disqualification." },
      { q: "What is the size of the Thumb Impression?", a: "The Left Thumb Impression (LTI) should be 240x240 pixels (approx) and between 20KB - 50KB." },
      { q: "My Declaration file is too big. What to do?", a: "The declaration must be 50KB - 100KB. Use our tool to compress it without losing legibility." },
      { q: "What if I don't have a Left Thumb?", a: "You may use your Right Thumb impression, but you must adhere to the same size and clarity guidelines." },
      { q: "Can I sign in CAPITAL LETTERS?", a: "No. IBPS explicitly rejects signatures in ALL CAPS. Use running handwriting." },
      { q: "What background is required for the photo?", a: "A light-colored, preferably white, background is required." },
      { q: "Is the declaration text fixed?", a: "Yes. You must write the specific text mentioned in the official notification, filling in your name where required." },
      { q: "Can I use a Blue Ink pad for the thumb impression?", a: "Yes, Blue or Black ink pads are accepted for the thumb impression." },
      { q: "Does the photo need a date?", a: "IBPS usually does not mandate a printed date on the photo, but the photo must be recent." }
    ]
  },
  "rrb": {
    id: "rrb",
    title: "Railway Recruitment Board (RRB NTPC)",
    metaTitle: "RRB Photo Resizer - 35x45mm Photo Tool",
    metaDescription: "Create compliant 35mm x 45mm photos for RRB NTPC and Group D exams.",
    content: {
      heading: "RRB Photo Requirements",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">RRB requires standard rectangular photos. Do not use square photos.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "RRB Photo (35x45mm)",
        instructions: `<p class="text-sm">Standard rectangular photo: <strong>35mm x 45mm</strong>. File size: 20-70 KB.</p>`,
        config: { width: 413, height: 531, aspect: 35 / 45, minKB: 30, maxKB: 70 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature Resizer",
        instructions: `<p class="text-sm">Size: 30-70 KB. 500x200 px.</p>`,
        config: { width: 500, height: 200, aspect: 2.5, minKB: 30, maxKB: 70, features: { isSignature: true } }
      },
      {
        type: "IMAGE_TO_PDF",
        title: "SC/ST Certificate (PDF)",
        instructions: `<p class="text-sm">Upload your SC/ST Certificate. Max 100KB.</p>`,
        config: { maxKB: 100 }
      }
    ],
    faqs: [
      { q: "Is the RRB photo Square or Rectangular?", a: "Standard RRB notifications (NTPC/Group D) require a 35mm x 45mm (Rectangular) photo. Beware of tools generating square photos unless your specific zone asks for it." },
      { q: "Do I need a Date on the photo?", a: "Yes, many RRB notifications require the Date of Photo (DOP) to be printed. Check your specific CEN notification to be sure." },
      { q: "Can I wear glasses?", a: "No. For safety-critical posts (ALP), glasses in photos are strictly risky. It is best to remove them." },
      { q: "What is the SC/ST Certificate format?", a: "It must be uploaded as a PDF (50KB - 100KB) for the free travel pass authority." },
      { q: "My signature is in capital letters. Is it valid?", a: "No. Railways reject signatures in Block/Capital letters. Use running handwriting." },
      { q: "What is the background color?", a: "White or very light color. Dark backgrounds are summarily rejected." },
      { q: "Can I smile in the photo?", a: "A neutral expression is required. No teeth should be visible." },
      { q: "What file size is allowed?", a: "RRB is strict about the 20KB - 50KB range (sometimes up to 70KB depending on the year)." },
      { q: "How many copies should I keep?", a: "Keep at least 12 copies of the same photograph for the admission process and document verification." },
      { q: "Can I change my photo later?", a: "Modification is very difficult and costly (₹100-250) in RRB. Upload the correct one first." }
    ]
  },
  "neet": {
    id: "neet",
    title: "NEET UG (Medical)",
    metaTitle: "NEET Postcard Photo Generator (4x6 inch) & Resizer",
    metaDescription: "Generate the required 4x6 inch Postcard Photo for NEET UG and resize standard passport photos.",
    content: {
      heading: "NEET UG Photo Requirements",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">NEET requires both a standard passport photo and a larger postcard photo.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "1. Passport Size Photo",
        instructions: `<p class="text-sm">Standard photo with Name & Date. Size: 10-200 KB.</p>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 10, maxKB: 200, features: { nameAndDateOnPhoto: true } }
      },
      {
        type: "POSTCARD_MAKER",
        title: "2. Postcard Size Generator (4x6 inch)",
        instructions: `<p class="text-sm">Generates a 4x6 inch (Postcard) photo with white background. Required for exam center.</p>`,
        config: { minKB: 10, maxKB: 200 }
      },
      {
        type: "IMAGE_TO_PDF",
        title: "3. Documents (PDF)",
        instructions: `<p class="text-sm">Upload Class 10 Certificate / Category Certificate. Size: 50-300 KB.</p>`,
        config: { minKB: 50, maxKB: 300 }
      }
    ],
    faqs: [
      { q: "What is the Postcard Size photo?", a: "It is a larger 4 inch x 6 inch photo required for the exam center. It must match your passport photo." },
      { q: "Is the Name and Date mandatory?", a: "Yes. NTA guidelines clearly state the candidate's name and the date of taking the photo should be printed at the bottom." },
      { q: "What is the background requirement?", a: "Plain white background is mandatory." },
      { q: "Can I wear spectacles?", a: "Yes, if you use them regularly, but there should be no reflections." },
      { q: "Are ears visible?", a: "Yes, 80% face coverage is required, and ears must be clearly visible." },
      { q: "Can I use a black and white photo?", a: "NTA prefers color photos, but B&W is sometimes technically accepted if clear. Stick to color to be safe." },
      { q: "What format should documents be in?", a: "Category certificates and PwD certificates must be in PDF format." },
      { q: "What is the file size for the Postcard photo?", a: "10 KB to 200 KB. Despite the large dimension (4x6 inch), the file size must remain small." },
      { q: "Do I need fingers or just thumb impression?", a: "NEET requires impressions of all fingers and thumbs of both hands." },
      { q: "Can I retouch facial blemishes?", a: "No. Any digital retouching to hide scars or birthmarks can lead to rejection at the exam center." }
    ]
  },
  "gate": {
    id: "gate",
    title: "GATE (Engineering)",
    metaTitle: "GATE Signature Resizer - Wide Aspect Ratio",
    metaDescription: "Resize signature for GATE exam. Supports the wide rectangular format (2cm x 7cm).",
    content: {
      heading: "GATE Signature Dimensions",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">GATE signatures are unique due to their wide aspect ratio.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo Resizer",
        instructions: `<p class="text-sm">Size: 5-600 KB. 3.5x4.5cm.</p>`,
        config: { width: 413, height: 531, aspect: 413 / 531, minKB: 5, maxKB: 600 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature Resizer",
        instructions: `<p class="text-sm">Strict aspect ratio required: <strong>2cm height x 7cm width</strong> (1:3.5). Size: 3-300 KB.</p>`,
        config: { width: 500, height: 200, aspect: 2.5, minKB: 3, maxKB: 300, features: { isSignature: true, blackInkOnly: true } }
      }
    ],
    faqs: [
      { q: "What is strict about the GATE signature?", a: "GATE requires a very specific aspect ratio (approx 1:3.5). If your signature is too square or too wide, the system rejects it immediately." },
      { q: "Can the background be colored?", a: "No. Background must be White. Colored backgrounds are a frequent cause of rejection." },
      { q: "How much face coverage is needed?", a: "The face should cover 60-70% of the photograph area." },
      { q: "What ink should I use for the signature?", a: "Black or Dark Blue ink. We recommend converting it to pure Black using our tool." },
      { q: "What is the minimum resolution?", a: "The photo must be at least 240x320 pixels." },
      { q: "Are darker photos accepted?", a: "No. Poor lighting or shadows on the face are not accepted. Ensure even lighting." },
      { q: "Can I wear a cap?", a: "No caps or hats. Religious headwear is allowed only if the face is fully visible." },
      { q: "Is a border required for the signature?", a: "No, do not draw a box around your signature. Just sign on plain paper." },
      { q: "Can I use my mobile phone selfie?", a: "No. Selfies are rejected. Use the rear camera with a friend's help or a webcam." },
      { q: "What file format is accepted?", a: "Only JPEG / JPG. PNG and PDF are not accepted for photos/signatures." }
    ]
  },
  "tnpsc": {
    id: "tnpsc",
    title: "TNPSC (Tamil Nadu)",
    metaTitle: "TNPSC Photo & Signature Resizer - Date on Photo Tool",
    metaDescription: "Resize photo and signature for TNPSC Group 1, 2, 4. Add Name and Date on photo automatically.",
    content: {
      heading: "TNPSC Group 1/2/4 Requirements",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">TNPSC strictly requires the candidate's Name and Date of Photo to be printed on the bottom of the image.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo with Name & Date",
        instructions: `<p class="text-sm">Dimensions: 3.5cm x 4.5cm. Size: 20-50 KB. <strong>Name & Date Required.</strong></p>`,
        config: { width: 165, height: 125, aspect: 1.32, minKB: 30, maxKB: 40, features: { nameAndDateOnPhoto: true } }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">Dimensions: 6.0cm x 2.0cm. Size: 10-20 KB.</p>`,
        config: { width: 80, height: 125, aspect: 0.64, minKB: 20, maxKB: 30, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "Is Name and Date mandatory for TNPSC photo?", a: "Yes. The candidate's name and date of photo (DOP) must be printed at the bottom. Photos without this are liable to be rejected." },
      { q: "What is the photo size limit?", a: "The file size must be between 20 KB and 50 KB." },
      { q: "What is the signature file size?", a: "The signature must be between 10 KB and 20 KB. This is a very targeted range." },
      { q: "What background color should I use?", a: "A white or light-colored background is required for better clarity." },
      { q: "Can I wear glasses?", a: "Yes, provided there is no glare on the lenses. Dark glasses are strictly prohibited." },
      { q: "Is a selfie allowed?", a: "No. Selfies are not accepted. Use a formal passport-size photograph." },
      { q: "How recent should the photo be?", a: "The photo should have been taken within the last 6 months." },
      { q: "Can I edit the photo after submission?", a: "TNPSC provides a correction window, but it is risky to rely on it. Upload the correct photo first." },
      { q: "Do I need to sign in Blue or Black ink?", a: "Black ink is preferred for better scanning, but Blue is accepted if dark enough." },
      { q: "Are the rules same for Group 4?", a: "Yes, the photo and signature requirements are standard across Group 1, 2, and 4." }
    ]
  },
  "uppsc": {
    id: "uppsc",
    title: "UPPSC (Uttar Pradesh)",
    metaTitle: "UPPSC / RO / ARO Photo Resizer",
    metaDescription: "Resize photo and signature for UPPSC exams. 3.5cm x 4.5cm format support.",
    content: {
      heading: "UPPSC PCS / RO / ARO Requirements",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">UPPSC generally follows standard dimensions but ensure the signature is clear.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo",
        instructions: `<p class="text-sm">Dimensions: 3.5cm x 4.5cm. Size: max 50 KB.</p>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, maxKB: 50 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">Signature should be 3.5cm x 1.5cm. Size: max 30 KB.</p>`,
        config: { width: 350, height: 150, aspect: 3.5 / 1.5, maxKB: 30, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "What are the dimensions for UPPSC photo?", a: "The standard dimension is 3.5cm (width) x 4.5cm (height)." },
      { q: "What is the maximum file size?", a: "The enhanced file size limit is usually 50 KB, but check specific notifications as it varies." },
      { q: "Can I use a dark background?", a: "No. A plain white or off-white background is mandatory." },
      { q: "Is the signature size different?", a: "Yes, the signature box is usually 3.5cm x 1.5cm. Keep it small and clear." },
      { q: "Can I wear religious headgear?", a: "Yes, but it should not cover the face from chin to forehead." },
      { q: "Is a border required?", a: "No, a border is not required and should be avoided." },
      { q: "Can I use a scanned copy of an old photo?", a: "It is recommended to use a recent photo (not older than 3 months)." },
      { q: "What format is accepted?", a: "Only JPEG/JPG format is accepted." },
      { q: "Why was my photo rejected?", a: "Common reasons include blurry faces, too small dimensions, or wearing sunglasses." },
      { q: "Does UPPSC require a live photo?", a: "Some recent exams may integrate live capture, but you still need a valid uploaded file." }
    ]
  },
  "mpsc": {
    id: "mpsc",
    title: "MPSC (Maharashtra)",
    metaTitle: "MPSC Photo & Signature Resizer",
    metaDescription: "MPSC online application photo resizer. Crop to 3.5x4.5cm and compress below 50KB.",
    content: {
      heading: "MPSC Rajya Seva / Subordinate",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">Upload recent passort size photo.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo",
        instructions: `<p class="text-sm">Dimensions: 3.5cm x 4.5cm. Size: 50KB max.</p>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, maxKB: 50 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">Size: 50KB max. Black ink preferred.</p>`,
        config: { width: 413, height: 200, aspect: 2, maxKB: 50, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "What is the aspect ratio for MPSC photo?", a: "The aspect ratio should be 3.5 (width) : 4.5 (height)." },
      { q: "Is a white background mandatory?", a: "Yes, a light or white background ensures the face is clearly visible." },
      { q: "What ink should I use for signature?", a: "Black ink on white paper is the standard requirement." },
      { q: "What is the file size limit?", a: "Keep the file size below 50 KB to avoid upload errors." },
      { q: "Can I wear heavy jewelry?", a: "Avoid heavy jewelry as it can cause reflection or cover facial features." },
      { q: "Should I look straight at the camera?", a: "Yes, look straight into the camera with a neutral expression." },
      { q: "What dpi should I scan at?", a: "200 dpi is the recommended scanning resolution." },
      { q: "Is a side profile photo allowed?", a: "No, both ears must be visible." },
      { q: "Can I use a mask?", a: "No, the face must be fully uncovered." },
      { q: "Can I wear thick frames?", a: "If they cover your eyes, remove them. Eyes must be clearly visible." }
    ]
  },
  "kpsc": {
    id: "kpsc",
    title: "KPSC (Karnataka)",
    metaTitle: "KPSC Thulasi Photo Resizer",
    metaDescription: "Resize photo for KPSC Thulasi login. White background required.",
    content: {
      heading: "KPSC Photo Rules",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">KPSC often requires a white background and strict file size adherence.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo",
        instructions: `<p class="text-sm">Passport photo. Size: 4-30 KB. 150x200px.</p>`,
        config: { width: 150, height: 200, aspect: 0.75, minKB: 4, maxKB: 30, features: { nameAndDateOnPhoto: true } }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">Size: 4-30 KB. 150x100px.</p>`,
        config: { width: 150, height: 100, aspect: 1.5, minKB: 4, maxKB: 30, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "Is registration on Thulasi mandatory?", a: "Yes, KPSC Thulasi is the one-time registration portal where you upload these docs." },
      { q: "What is the KPSC photo size?", a: "The file size should not exceed 50 KB." },
      { q: "Background color requirement?", a: "Plain white background is strictly recommended." },
      { q: "What format for signature?", a: "JPG format with Black ink on white paper." },
      { q: "Do I need a thumb impression?", a: "Some KPSC posts require a Left Thumb Impression (LTI). Check the notification." },
      { q: "Should there be a border?", a: "No. Do not add borders to the photo." },
      { q: "Does the date need to be on the photo?", a: "KPSC usually demands a recent photo but printing the date is a safe practice." },
      { q: "Is a selfie valid?", a: "No. Selfies are rejected." },
      { q: "How clear should the photo be?", a: "The photo must be studio-quality clear. Pixelated photos are rejected." },
      { q: "Can I change the photo later?", a: "It is difficult to change verification details after final submission." }
    ]
  },
  "afcat": {
    id: "afcat",
    title: "AFCAT (Air Force)",
    metaTitle: "AFCAT Photo & Thumb Impression Resizer",
    metaDescription: "Resize photo and thumb impression for AFCAT exam. Blue background suggested for Air Force sometimes.",
    content: {
      heading: "AFCAT Document Requirements",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">AFCAT requires Photo, Signature, and Thumb Impression.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo",
        instructions: `<p class="text-sm">Passport size. Size: 10-50 KB.</p>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 10, maxKB: 50 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">Size: 10-50 KB.</p>`,
        config: { width: 300, height: 100, aspect: 3, minKB: 10, maxKB: 50, features: { isSignature: true } }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Thumb Impression",
        instructions: `<p class="text-sm">Male: Left Thumb / Female: Right Thumb. Size: 10-50 KB.</p>`,
        config: { width: 200, height: 200, aspect: 1, minKB: 10, maxKB: 50 }
      }
    ],
    faqs: [
      { q: "Which thumb impression is required?", a: "Male candidates: Left Thumb. Female candidates: Right Thumb." },
      { q: "What background is needed for AFCAT?", a: "A blue background is often suggested for Defence exams, but white is also standard. Check the specific cycle notification." },
      { q: "What is the size limit?", a: "Photos and signatures must be between 10 KB and 50 KB." },
      { q: "Is a slate required?", a: "Some entries require holding a slate. Our tool supports standard crop; ensure your original has the slate if needed." },
      { q: "Can I wear glasses?", a: "It is best to remove glasses to avoid any chance of rejection due to glare." },
      { q: "Is a cap allowed?", a: "No caps or headgear unless for religious reasons." },
      { q: "Do I need to be in uniform?", a: "No, civilians should wear formal/casual clothes, not uniform." },
      { q: "How recent should the photo be?", a: "Taken within the last 3 months." },
      { q: "What is the signature file size?", a: "10 KB to 50 KB. Use black ink." },
      { q: "Can I align the thumb impression vertically?", a: "Yes, but ensure the whorls and ridges are clearly visible." }
    ]
  },
  "icg": {
    id: "icg",
    title: "Indian Coast Guard",
    metaTitle: "Indian Coast Guard Photo Utility",
    metaDescription: "Resize photo for Coast Guard Navik/Yantrik. Slate with Name & Date often required.",
    content: {
      heading: "ICG Photo with Slate",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">Coast Guard requires the candidate to hold a black slate with Name and Date of Photo written on it.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo with Slate Effect",
        instructions: `<p class="text-sm">Upload a normal photo, and we will try to format it or simply ensure you have the slate in the original. Size: 10-100 KB.</p>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 10, maxKB: 100 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">Size: 10-30 KB.</p>`,
        config: { width: 300, height: 100, aspect: 3, minKB: 10, maxKB: 30, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "Is a slate mandatory for Coast Guard?", a: "YES. You must hold a black slate in front of your chest with your Name and Date of Photo written in chalk." },
      { q: "Where should the slate be?", a: "Held against the chest, clearly visible." },
      { q: "What background is required?", a: "Light background, preferably white." },
      { q: "Can I have a beard?", a: "Only candidates belonging to the Sikh community are allowed beards." },
      { q: "What is the signature size?", a: "10 KB to 30 KB. Note strict lower limit." },
      { q: "Which thumb impression?", a: "Left Hand Thumb Impression (LTI) is mandatory." },
      { q: "How old can the photo be?", a: "Not older than 3 months from the date of advertisement." },
      { q: "Can I sign in capital letters?", a: "No. Signatures in ALL CAPS are rejected." },
      { q: "Can I wear glasses?", a: "No. Glasses are not allowed." },
      { q: "Should ears be visible?", a: "Yes, both ears must be clearly visible." }
    ]
  },
  "ctet": {
    id: "ctet",
    title: "CTET / TET",
    metaTitle: "CTET Photo & Signature Resizer",
    metaDescription: "Resize for Central Teacher Eligibility Test (CTET).",
    content: {
      heading: "CTET Documents",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">Standard teacher eligibility test requirements.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo",
        instructions: `<p class="text-sm">3.5cm x 4.5cm. Size: 10-100 KB.</p>`,
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 10, maxKB: 100 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">3.5cm x 1.5cm. Size: 3-30 KB.</p>`,
        config: { width: 350, height: 150, aspect: 3.5 / 1.5, minKB: 3, maxKB: 30, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "What are the dimensions for CTET photo?", a: "3.5 cm (width) x 4.5 cm (height)." },
      { q: "What is the file size limit?", a: "10 KB to 100 KB for photos." },
      { q: "What is the signature size?", a: "3 KB to 30 KB. Note the small minimum size." },
      { q: "Do I need a date on the photo?", a: "It is not strictly mandated, but using a recent photo is required." },
      { q: "What background is accepted?", a: "White or very light background." },
      { q: "Can I wear glasses?", a: "Yes, if they are clear and have no flash reflection." },
      { q: "Is Black and White photo allowed?", a: "No, colored photographs are required." },
      { q: "Can I correct images later?", a: "CTET usually opens an image correction window." },
      { q: "How recent should it be?", a: "Taken within the last 6 months." },
      { q: "Why is my signature rejected?", a: "Usually because it is too small (under 3 KB) or blurry." }
    ]
  },
  "ugcnet": {
    id: "ugcnet",
    title: "UGC NET",
    metaTitle: "UGC NET Photo Resizer - NTA Specifications",
    metaDescription: "Resize photo for UGC NET (National Testing Agency).",
    content: {
      heading: "UGC NET (NTA) Rules",
      descriptionHtml: `<p class="text-slate-700 dark:text-slate-300">Approximates standard NTA guidelines.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Photo",
        instructions: `<p class="text-sm">10KB to 200KB.</p>`,
        config: { width: 350, height: 450, aspect: 0.77, minKB: 10, maxKB: 200 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Signature",
        instructions: `<p class="text-sm">4KB to 30KB.</p>`,
        config: { width: 280, height: 120, aspect: 2.33, minKB: 10, maxKB: 50, features: { isSignature: true } }
      }
    ],
    faqs: [
      { q: "What file size does NTA require?", a: "10 KB to 200 KB for photos." },
      { q: "What is the signature size?", a: "4 KB to 30 KB." },
      { q: "Is Black and White photo accepted?", a: "Yes, NTA accepts both Color and B&W photos, provided there is clear contrast." },
      { q: "How much face coverage?", a: "80% of the photo should be the face (without mask)." },
      { q: "Are ears visible?", a: "Yes, both ears must be visible." },
      { q: "Can I wear glasses?", a: "Yes, if used regularly, but no reflections allowed." },
      { q: "Can I wear a cap?", a: "No caps or hats are allowed." },
      { q: "Is a polaroid photo allowed?", a: "No. Computer-generated or polaroid photos are rejected." },
      { q: "Can I retouch the photo?", a: "No, avoid digital makeup or filters." },
      { q: "Is Name and Date required?", a: "NTA has varied this rule. Check the latest bulletin. Adding it is usually safe." }
    ]
  }
};
