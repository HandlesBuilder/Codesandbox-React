import * as all from "./export";
import exports, { a, b } from "./export";

export default function ExportAndImport() {
  return (
    <div className="export-and-import">
      <pre>{JSON.stringify(all, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(exports, null, 2)}</pre>
      <hr />
      <pre>{`a:${a}, b:${b}`}</pre>
    </div>
  );
}
