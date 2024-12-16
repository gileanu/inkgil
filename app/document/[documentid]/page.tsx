import Editor from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentid: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentid } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
