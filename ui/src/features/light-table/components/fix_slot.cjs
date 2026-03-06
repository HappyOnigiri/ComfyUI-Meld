const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'Slot.tsx');
let content = fs.readFileSync(file, 'utf8');

// Add handleImageKeyDown useCallback before the return statement
const oldReturn = '\treturn (\n\t\t<div\n\t\t\tclassName="meld-lt-slot-panel"';

const newReturn = '\tconst handleImageKeyDown = useCallback(\n\t\t(e: React.KeyboardEvent, img: MeldImage) => {\n\t\t\tif (e.key === "Enter" || e.key === " ") {\n\t\t\t\te.preventDefault();\n\t\t\t\tif (e.ctrlKey || e.metaKey) {\n\t\t\t\t\tsetSelectedIds((prev) =>\n\t\t\t\t\t\tprev.includes(img.id) ? prev.filter((id) => id !== img.id) : [...prev, img.id],\n\t\t\t\t\t);\n\t\t\t\t\tsetLastSelectedId(img.id);\n\t\t\t\t} else if (e.shiftKey && lastSelectedId !== null) {\n\t\t\t\t\tconst currentIndex = bucketImages.findIndex((i) => i.id === img.id);\n\t\t\t\t\tconst lastIndex = bucketImages.findIndex((i) => i.id === lastSelectedId);\n\t\t\t\t\tif (currentIndex !== -1 && lastIndex !== -1) {\n\t\t\t\t\t\tconst start = Math.min(currentIndex, lastIndex);\n\t\t\t\t\t\tconst end = Math.max(currentIndex, lastIndex);\n\t\t\t\t\t\tconst rangeIds = bucketImages.slice(start, end + 1).map((i) => i.id);\n\t\t\t\t\t\tsetSelectedIds((prev) => Array.from(new Set([...prev, ...rangeIds])));\n\t\t\t\t\t}\n\t\t\t\t\tsetLastSelectedId(img.id);\n\t\t\t\t} else {\n\t\t\t\t\tsetSelectedIds([]);\n\t\t\t\t\tsetLastSelectedId(null);\n\t\t\t\t\tgalleryDispatch({\n\t\t\t\t\t\ttype: "OPEN_VIEWER",\n\t\t\t\t\t\tpayload: {\n\t\t\t\t\t\t\tid: img.id,\n\t\t\t\t\t\t\tmode: "lighttable",\n\t\t\t\t\t\t\tslotId: config.id,\n\t\t\t\t\t\t},\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t[bucketImages, lastSelectedId, setSelectedIds, setLastSelectedId, galleryDispatch, config.id],\n\t);\n\n\treturn (\n\t\t<div\n\t\t\tclassName="meld-lt-slot-panel"';

if (content.includes(oldReturn)) {
  content = content.replace(oldReturn, newReturn);
  console.log('Step 1 SUCCESS - added handleImageKeyDown useCallback');
} else {
  console.log('Step 1 NOT FOUND');
  process.exit(1);
}

// Remove the inline handleImageKeyDown from within the map, and update onKeyDown
const oldInline = '\t\t\t\t\tconst imgSrc = getThumbnailViewUrl(img);\n\t\t\t\t\tconst handleImageKeyDown = (e: React.KeyboardEvent) => {\n\t\t\t\t\t\tif (e.key === "Enter" || e.key === " ") {\n\t\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\t\tif (e.ctrlKey || e.metaKey) {\n\t\t\t\t\t\t\t\tsetSelectedIds((prev) =>\n\t\t\t\t\t\t\t\t\tprev.includes(img.id) ? prev.filter((id) => id !== img.id) : [...prev, img.id],\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\tsetLastSelectedId(img.id);\n\t\t\t\t\t\t\t} else if (e.shiftKey && lastSelectedId !== null) {\n\t\t\t\t\t\t\t\tconst currentIndex = bucketImages.findIndex((i) => i.id === img.id);\n\t\t\t\t\t\t\t\tconst lastIndex = bucketImages.findIndex((i) => i.id === lastSelectedId);\n\t\t\t\t\t\t\t\tif (currentIndex !== -1 && lastIndex !== -1) {\n\t\t\t\t\t\t\t\t\tconst start = Math.min(currentIndex, lastIndex);\n\t\t\t\t\t\t\t\t\tconst end = Math.max(currentIndex, lastIndex);\n\t\t\t\t\t\t\t\t\tconst rangeIds = bucketImages.slice(start, end + 1).map((i) => i.id);\n\t\t\t\t\t\t\t\t\tsetSelectedIds((prev) => Array.from(new Set([...prev, ...rangeIds])));\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tsetLastSelectedId(img.id);\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetSelectedIds([]);\n\t\t\t\t\t\t\t\tsetLastSelectedId(null);\n\t\t\t\t\t\t\t\tgalleryDispatch({\n\t\t\t\t\t\t\t\t\ttype: "OPEN_VIEWER",\n\t\t\t\t\t\t\t\t\tpayload: {\n\t\t\t\t\t\t\t\t\t\tid: img.id,\n\t\t\t\t\t\t\t\t\t\tmode: "lighttable",\n\t\t\t\t\t\t\t\t\t\tslotId: config.id,\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\treturn (';

const newInline = '\t\t\t\t\tconst imgSrc = getThumbnailViewUrl(img);\n\t\t\t\t\treturn (';

if (content.includes(oldInline)) {
  content = content.replace(oldInline, newInline);
  console.log('Step 2 SUCCESS - removed inline handler');
} else {
  console.log('Step 2 NOT FOUND - debugging:');
  const lines = content.split('\n');
  lines.slice(206, 245).forEach((l, i) => console.log(i+207, JSON.stringify(l)));
  process.exit(1);
}

// Update onKeyDown to call the extracted handler with img parameter
const oldKeyDown = '\t\t\t\t\t\tonKeyDown={handleImageKeyDown}';
const newKeyDown = '\t\t\t\t\t\tonKeyDown={(e) => handleImageKeyDown(e, img)}';

if (content.includes(oldKeyDown)) {
  content = content.replace(oldKeyDown, newKeyDown);
  console.log('Step 3 SUCCESS - updated onKeyDown');
} else {
  console.log('Step 3 NOT FOUND');
  process.exit(1);
}

fs.writeFileSync(file, content);
console.log('All done!');
