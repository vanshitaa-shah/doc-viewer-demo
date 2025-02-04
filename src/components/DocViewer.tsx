import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const DocumentViewer = ({ docUrl }: { docUrl: string }) => {
  const docs = [
    {
      uri: docUrl,
      fileType: "docx",
    },
  ];

  return (
    <div className="h-[calc(100vh-50px)]">
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: "100%" }}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
            overrideComponent: () => <h4>Here we can override component</h4>,
          }
        }}
      />
    </div>
  );
};

export default DocumentViewer;
