
export type ToolType = "PHOTO_WIZARD" | "SIGNATURE_JOINER" | "POSTCARD_MAKER" | "DECLARATION_GENERATOR";

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
      blackInkOnly?: boolean; // UI hint for banking
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
        config: { width: 350, height: 350, aspect: 1, minKB: 20, maxKB: 300, features: { forceSquare: true, nameAndDateOnPhoto: true } }
      },
      {
        type: "SIGNATURE_JOINER",
        title: "Step 2: Triple Signature Joiner (New Rule)",
        instructions: `
          <p class="text-sm">The 2026 Rule requires <strong>Three Signatures</strong> stacked vertically to ensure better verification.</p>`,
        config: { minKB: 20, maxKB: 100 }
      }
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
        config: { width: 472, height: 236, aspect: 4 / 2, minKB: 10, maxKB: 20, features: { isSignature: true } }
      }
    ]
  },
  "ibps": {
    id: "ibps",
    title: "IBPS PO / Clerk & SBI Exams",
    metaTitle: "IBPS Photo, Signature, Thumb & Declaration Resizer",
    metaDescription: "Resize all 4 IBPS documents: Photo, Signature, Left Thumb Impression, and Handwritten Declaration.",
    content: {
      heading: "Banking Exam Documents (4 Items)",
      descriptionHtml: `
        <p class="mb-2 text-slate-700 dark:text-slate-300">Banking exams require strict adherence to file sizes for all 4 documents. Use the tools below for each item.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "1. Photo",
        instructions: `<p class="text-sm">Passport size: 4.5cm x 3.5cm. Size: 20-50 KB.</p>`,
        config: { width: 413, height: 531, aspect: 4.5 / 3.5, minKB: 20, maxKB: 50 }
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
        config: { width: 800, height: 400, aspect: 2, minKB: 50, maxKB: 100, features: { isDeclaration: true } }
      },
      {
        type: "DECLARATION_GENERATOR",
        title: "5. Declaration Generator (Text to Handwriting)",
        instructions: `<p class="text-sm">Don't want to write? Generate a handwritten declaration instantly.</p>`,
        config: { minKB: 50, maxKB: 100 }
      }
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
        instructions: `<p class="text-sm">Standard rectangular photo: <strong>35mm x 45mm</strong>. File size: 20-50 KB.</p>`,
        config: { width: 413, height: 531, aspect: 35 / 45, minKB: 20, maxKB: 50 }
      }
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
      }
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
        title: "Signature Resizer",
        instructions: `<p class="text-sm">Strict aspect ratio required: <strong>2cm height x 7cm width</strong> (1:3.5). Size: 5-200 KB.</p>`,
        config: { width: 560, height: 160, aspect: 3.5, minKB: 5, maxKB: 200, features: { isSignature: true } }
      }
    ]
  }
};
