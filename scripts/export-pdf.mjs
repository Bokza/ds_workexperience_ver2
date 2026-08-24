import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.resolve(__dirname, "../이재복_경력기술서.pdf");
const URL = "http://localhost:3000";

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.emulateMediaType("print");
await page.goto(URL, { waitUntil: "networkidle0" });

await page.pdf({
  path: OUTPUT,
  format: "A4",
  printBackground: true,
  margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
});

await browser.close();
console.log(`PDF 저장 완료: ${OUTPUT}`);
