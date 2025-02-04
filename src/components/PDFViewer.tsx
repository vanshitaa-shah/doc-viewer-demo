import { Viewer, Worker } from "@react-pdf-viewer/core";
import { searchPlugin } from "@react-pdf-viewer/search";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

const BasicPDFViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const searchPluginInstance = searchPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const zoomPluginInstance = zoomPlugin();
  const thumbnailPluginInstance = thumbnailPlugin();

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex gap-4 p-3 bg-white rounded-lg shadow-sm">
        <div>{searchPluginInstance.ShowSearchPopoverButton()}</div>
        <div className="flex gap-2">
          {pageNavigationPluginInstance.CurrentPageInput()}
          {pageNavigationPluginInstance.GoToPreviousPage({
            children: (props) => (
              <button
                onClick={props.onClick}
                disabled={props.isDisabled}
                className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Prev
              </button>
            ),
          })}
          {pageNavigationPluginInstance.GoToNextPage({
            children: (props) => (
              <button
                onClick={props.onClick}
                disabled={props.isDisabled}
                className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            ),
          })}
        </div>
        <div className="flex gap-2">
          {zoomPluginInstance.ZoomIn({
            children: (props) => (
              <button onClick={props.onClick} className="px-3 py-1 bg-gray-200 rounded-md">
                Zoom in
              </button>
            ),
          })}
          {zoomPluginInstance.ZoomOut({
            children: (props) => (
              <button onClick={props.onClick} className="px-3 py-1 bg-gray-200 rounded-md">
                Zoom out
              </button>
            ),
          })}
        </div>
      </div>
      
      <div className="flex h-full mt-3 border rounded-lg overflow-hidden bg-white shadow">
        <div className="w-48 border-r p-2 overflow-auto bg-gray-50">
          {thumbnailPluginInstance.Thumbnails()}
        </div>
        <div className="flex-1 p-2">
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfUrl}
              plugins={[
                searchPluginInstance,
                pageNavigationPluginInstance,
                zoomPluginInstance,
                thumbnailPluginInstance,
              ]}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
};

const PDFViewerDemo = ({ pdfUrl }: { pdfUrl: string }) => {
  return (
    <div className="p-6 flex justify-center items-center bg-gray-50 min-h-screen w-screen">
      <BasicPDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default PDFViewerDemo;
