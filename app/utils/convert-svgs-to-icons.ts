const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../../public/icons");
const outDir = path.join(__dirname, "../../components/icons");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

fs.readdirSync(iconsDir).forEach((file: string) => {
  if (file.endsWith(".svg")) {
    const svgName = path.basename(file, ".svg");
    const componentName =
      svgName.replace(/(^|-)(\w)/g, (_: string, __: string, c: string) =>
        c.toUpperCase()
      ) + "Icon";
    let svg = fs.readFileSync(path.join(iconsDir, file), "utf8");

    // Ensure fill='currentColor' on <svg> and <path>
    svg = svg
      .replace(/<svg([^>]*)>/, '<svg$1 fill="currentColor">')
      .replace(/<path([^>]*)>/g, (m: string, attrs: string) =>
        /fill=/.test(attrs) ? m : `<path${attrs} fill=\"currentColor\">`
      );

    const component = `import React from "react";
import { SVGProps } from "react";
const ${componentName} = (props: SVGProps<SVGSVGElement>) => (
  ${svg.replace(
    "<svg",
    "<svg {...props} className={(props.className || \"\") + ' w-6 h-6'}"
  )}
);
export default ${componentName};
`;

    fs.writeFileSync(
      path.join(outDir, `${componentName}.tsx`),
      component,
      "utf8"
    );
    console.log(`Created: ${componentName}.tsx`);
  }
});
