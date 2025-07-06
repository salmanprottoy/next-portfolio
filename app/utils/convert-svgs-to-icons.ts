const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../../public/icons");
const outFile = path.join(__dirname, "../../components/atoms/Icon.tsx");

const iconFiles = fs
  .readdirSync(iconsDir)
  .filter((file: string) => file.endsWith(".svg"));

let iconNames: string[] = [];
let iconComponents: string[] = [];
let iconMapEntries: string[] = [];

iconFiles.forEach((file: string) => {
  const svgName = path.basename(file, ".svg");
  iconNames.push(`"${svgName}"`);
  let svg = fs.readFileSync(path.join(iconsDir, file), "utf8");

  // Ensure fill='currentColor' on <svg> and <path>
  svg = svg
    .replace(/<svg([^>]*)>/, '<svg$1 fill="currentColor">')
    .replace(/<path([^>]*)\/>/g, (m: string, attrs: string) => {
      if (/fill=/.test(attrs)) {
        return m;
      } else {
        return `<path${attrs} fill="currentColor" />`;
      }
    })
    .replace(/<path([^>]*)>/g, (m: string, attrs: string) => {
      if (/fill=/.test(attrs)) {
        return m;
      } else {
        return `<path${attrs} fill="currentColor">`;
      }
    });

  const compName = svgName.replace(
    /(^|-)(\w)/g,
    (_m: string, _d: string, c: string) => c.toUpperCase()
  );
  iconComponents.push(
    `const ${compName} = (props: React.SVGProps<SVGSVGElement>) => (${svg.replace(
      "<svg",
      '<svg {...props} className={(props.className || "") + " w-6 h-6"}'
    )});`
  );
  iconMapEntries.push(`  ${JSON.stringify(svgName)}: ${compName},`);
});

const out = `import React from "react";

export type IconName =
  | ${iconNames.join("\n  | ")};

${iconComponents.join("\n\n")}

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
${iconMapEntries.join("\n")}
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const Svg = icons[name];
  if (!Svg) return null;
  return <Svg {...props} />;
};

export default Icon;
`;

fs.writeFileSync(outFile, out, "utf8");
console.log(`Created: Icon.tsx with all icons.`);
