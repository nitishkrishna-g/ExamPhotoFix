
export type ToolType = "PHOTO_WIZARD" | "SIGNATURE_JOINER" | "POSTCARD_MAKER";

export interface ToolConfig {
  type: ToolType;
  title: string;
  config?: {
    width?: number;
    height?: number; // if 0 or undefined, implies auto-aspect or specific logic
    minKB?: number;
    maxKB?: number;
    aspect?: number;
    label?: string;
    features?: {
      dateOnPhoto?: boolean; // SSC requirement
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
        <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Photo:</strong> 350x350 px (Square), 20-300 KB. Name & Date recommended.</li>
          <li><strong>Signature:</strong> New 2026 Rule requires <strong>Three Signatures</strong> stacked vertically. Use the "Triple Signature Joiner" tool below.</li>
        </ul>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Step 1: Photo Resizer",
        config: { width: 350, height: 350, aspect: 1, minKB: 20, maxKB: 300, features: { forceSquare: true } }
      },
      {
        type: "SIGNATURE_JOINER",
        title: "Step 2: Triple Signature Joiner (New Rule)",
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
        <p class="text-red-600 font-bold mb-2">Warning: Photos without a printed date will be rejected.</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Photo:</strong> 3.5 x 4.5 cm. The date must be clearly printed at the bottom.</li>
          <li><strong>Signature:</strong> 4.0 x 2.0 cm. 10-20 KB.</li>
        </ul>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Step 1: Photo with Date",
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 20, maxKB: 50, features: { dateOnPhoto: true } }
      },
      {
        type: "PHOTO_WIZARD",
        title: "Step 2: Signature Resizer",
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
        <p class="mb-2">Banking exams require strict adherence to file sizes.</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Declaration:</strong> Must be written in English on white paper with Black Ink.</li>
          <li><strong>Thumb Impression:</strong> 20-50 KB (3x3 cm).</li>
        </ul>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "1. Photo",
        config: { width: 413, height: 531, aspect: 4.5 / 3.5, minKB: 20, maxKB: 50 }
      },
      {
        type: "PHOTO_WIZARD",
        title: "2. Signature (Black Ink)",
        config: { width: 140, height: 60, aspect: 140 / 60, minKB: 10, maxKB: 20, features: { isSignature: true, blackInkOnly: true } }
      },
      {
        type: "PHOTO_WIZARD",
        title: "3. Left Thumb Impression",
        config: { width: 240, height: 240, aspect: 1, minKB: 20, maxKB: 50, label: "Thumb Impression" }
      },
      {
        type: "PHOTO_WIZARD",
        title: "4. Handwritten Declaration",
        config: { width: 800, height: 400, aspect: 2, minKB: 50, maxKB: 100, features: { isDeclaration: true } }
      }
    ]
  },
  "rrb": {
    id: "rrb",
    title: "Railway Recruitment Board (RRB NTPC)",
    metaTitle: "RRB Photo Resizer - 3.5x3.5cm Square Photo Tool",
    metaDescription: "Create strictly square photos (3.5cm x 3.5cm) for RRB NTPC and Group D exams.",
    content: {
      heading: "RRB Square Photo Rule",
      descriptionHtml: `<p>RRB rejects rectangular photos. Use this tool to crop your photo to a perfect <strong>3.5cm x 3.5cm square</strong>.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Square Photo Tool",
        config: { width: 413, height: 413, aspect: 1, minKB: 20, maxKB: 50, features: { forceSquare: true } }
      }
    ]
  },
  "neet": {
    id: "neet",
    title: "NEET UG (Medical)",
    metaTitle: "NEET Postcard Photo Generator (4x6 inch) & Resizer",
    metaDescription: "Generate the required 4x6 inch Postcard Photo for NEET UG and resize standard passport photos.",
    content: {
      heading: "NEET UG Postcard Requirement",
      descriptionHtml: `<p>NEET requires two photos: A standard passport size and a larger <strong>4x6 inch Postcard Size</strong> photo.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Passport Size Photo",
        config: { width: 413, height: 531, aspect: 3.5 / 4.5, minKB: 10, maxKB: 200 }
      },
      {
        type: "POSTCARD_MAKER",
        title: "Postcard Size Generator (4x6 inch)",
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
      descriptionHtml: `<p>GATE requires a very wide signature aspect ratio (2cm height x 7cm width). Use the tool below to crop correctly.</p>`
    },
    tools: [
      {
        type: "PHOTO_WIZARD",
        title: "Signature Resizer",
        config: { width: 560, height: 160, aspect: 7 / 2, minKB: 5, maxKB: 200, features: { isSignature: true } }
      }
    ]
  }
};
