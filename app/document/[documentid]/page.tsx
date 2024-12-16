interface DocumentIdPageProps {
  params: Promise<{ documentid: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentid } = await params;
  return <div>Hello: {documentid}</div>;
};

export default DocumentIdPage;
