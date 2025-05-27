
import JSZip from "jszip";

// List of shared utility/base files to include in the zip (use raw-loader for Vite if needed)
// For demonstração, vamos buscar os arquivos a partir do código fonte atual (IMPORTANTE: na vida real, preferencialmente faça via back-end para arquivos grandes).

// Aqui você pode incluir outros arquivos src conforme adicionar novos tipos/componentes!
const SHARED_FILES = [
  { path: "src/components/BaseSection.tsx", zipPath: "components/BaseSection.tsx" },
  { path: "src/utils/colorUtils.ts", zipPath: "utils/colorUtils.ts" },
  { path: "src/lib/utils.ts", zipPath: "lib/utils.ts" },
];

async function fetchFileContent(filePath: string): Promise<string> {
  // Fetch file from public path (dev-only hack, para Vite e Lovable funciona na demo)
  // Em ambientes reais use APIS ou arquivos embutidos
  try {
    const response = await fetch("/" + filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching file ${filePath}:`, error);
    return `/* Error fetching ${filePath} */`;
  }
}

// Função para extrair o JSX de um componente
async function extractComponentJSX(componentType: string): Promise<string> {
  // Map para associar tipo -> caminho do componente real
  const typeToPath: Record<string, string> = {
    // Exemplo, adicionar conforme adicionar novos componentes...
    "NavbarSection04": "src/components/sections/NavbarSection04.tsx",
    "NavbarSection05": "src/components/sections/NavbarSection05.tsx",
    "CallToActionSection01": "src/components/sections/CallToActionSection01.tsx",
    "CallToActionSection02": "src/components/sections/CallToActionSection02.tsx",
    "PartnerSection01": "src/components/sections/PartnerSection01.tsx",
    "PartnerSection02": "src/components/sections/PartnerSection02.tsx",
    "PortfolioSection01": "src/components/sections/PortfolioSection01.tsx",
    "PortfolioSection02": "src/components/sections/PortfolioSection02.tsx",
    "AboutUsSection01": "src/components/sections/AboutUsSection01.tsx",
    "AboutUsSection02": "src/components/sections/AboutUsSection02.tsx",
    "OurServicesSection01": "src/components/sections/OurServicesSection01.tsx",
    "OurServicesSection02": "src/components/sections/OurServicesSection02.tsx",
    "TestimonialSection01": "src/components/sections/TestimonialSection01.tsx",
    "TestimonialSection02": "src/components/sections/TestimonialSection02.tsx",
    "ContactSection01": "src/components/sections/ContactSection01.tsx",
    "ContactSection02": "src/components/sections/ContactSection02.tsx",
    "FooterSection01": "src/components/sections/FooterSection01.tsx",
    "FooterSection02": "src/components/sections/FooterSection02.tsx",
    "HeroSection01": "src/components/sections/HeroSection01.tsx",
    "HeroSection02": "src/components/sections/HeroSection02.tsx",
  };

  const filePath = typeToPath[componentType];
  if (!filePath) {
    return `{/* Component ${componentType} not found */}`;
  }

  try {
    const code = await fetchFileContent(filePath);
    
    // Extract just the JSX content from the component
    // Regex to find the return statement with JSX
    const returnMatch = code.match(/return\s*\(\s*(<[\s\S]*?>[\s\S]*?<\/[\s\S]*?>)\s*\)/m);
    
    if (returnMatch && returnMatch[1]) {
      return returnMatch[1].trim();
    }
    
    // Fallback if the regex didn't match
    return `{/* Failed to extract JSX from ${componentType} */}`;
  } catch (error) {
    console.error(`Error extracting JSX from ${componentType}:`, error);
    return `{/* Error extracting JSX from ${componentType} */}`;
  }
}

// Função para gerar o index.tsx inline com conteúdo JSX direto dos componentes
export const generateIndexFile = async (
  components: { type: string; id: string }[],
  color: string
): Promise<string> => {
  // Extract JSX content from each component
  let jsxContent = "";
  
  for (const comp of components) {
    const componentJSX = await extractComponentJSX(comp.type);
    jsxContent += `  ${componentJSX}\n`;
  }

  // Gera conteúdo do arquivo index.tsx com imports apenas para utilitários
  const indexContent = `
import React from "react";
import { BaseSection } from './components/BaseSection';
import { getColorStyle, getTextColorStyle, getBorderColorStyle, getGradientStyle } from './utils/colorUtils';
import { cn } from './lib/utils';

// O valor de color é definido com base no selecionado no builder
const color = "${color}";

const GeneratedPage = () => (
  <div className="generated-page">
${jsxContent}
  </div>
);

export default GeneratedPage;
`.trim();

  return indexContent;
};

export const generateComponentFiles = async (
  components: { type: string; id: string }[],
  color: string
) => {
  // Gerar pasta por data
  const currentDate = new Date();
  const folderName = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}_${String(
    currentDate.getHours()
  ).padStart(2, "0")}-${String(currentDate.getMinutes()).padStart(2, "0")}`;
  const basePath = `generated/${folderName}/`;

  const zip = new JSZip();

  // Gera index.tsx inline
  const indexCode = await generateIndexFile(components, color);
  zip.file(basePath + "index.tsx", indexCode);

  // Estrutura de arquivos para download
  const files = [
    { name: "index.tsx", content: indexCode }
  ];

  // Copia os utilitários necessários (BaseSection, colorUtils etc)
  for (const shared of SHARED_FILES) {
    try {
      const content = await fetchFileContent(shared.path);
      // Ajusta os caminhos de importação nos arquivos utilitários
      const adjustedContent = content.replace(/@\/([^'"]*)(['"])/g, './$1$2');
      zip.file(basePath + shared.zipPath, adjustedContent);
      files.push({ name: shared.zipPath, content: adjustedContent });
    } catch (e) {
      // Marca erro caso não ache arquivo
      const errorMsg = "/* Falha ao copiar arquivo utilitário: " + shared.path + " */";
      zip.file(basePath + shared.zipPath, errorMsg);
      files.push({ name: shared.zipPath, content: errorMsg });
    }
  }

  // Informativo: estrutura gerada
  const structureJson = JSON.stringify({
    folderName,
    components,
    color
  }, null, 2);
  
  zip.file(basePath + "structure.json", structureJson);
  files.push({ name: "structure.json", content: structureJson });

  // Gera o zip e retorna
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);

  return {
    folderName,
    zipBlob: blob,
    zipUrl: url,
    files
  };
};

// Helper para baixar o zip
export const downloadZip = (url: string, filename: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 100);
};

// Rename downloadZip to downloadFile for consistency with PagePreview.tsx
export const downloadFile = downloadZip;
