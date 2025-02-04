import { useState } from "react";
import DocumentViewer from "./components/DocViewer";
import PDFViewerDemo from "./components/PDFViewer";
import pdfFile from './assets/proxy-pdf.pdf'

export default function App() {
  const [viewer, setViewer] = useState("pdf");

  return (
    <div className="max-h-screen">
      <div className="flex gap-2 justify-center mt-2 sticky">
        <button
          className="px-3 py-1 bg-gray-200 rounded-md"
          onClick={() => setViewer("pdf")}
        >
          PDF Viewer
        </button>
        <button
          className="px-3 py-1 bg-gray-200 rounded-md"
          onClick={() => setViewer("doc")}
        >
          DOC Viewer
        </button>
      </div>

      {viewer === "pdf" ? (
        <PDFViewerDemo pdfUrl={pdfFile} />
      ) : (
        <DocumentViewer docUrl="https://calibre-ebook.com/downloads/demos/demo.docx" />
      )}
    </div>
  );
}
