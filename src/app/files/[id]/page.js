import FileItemPageContent from "@/components/FileItemPage/FileItemPageContent";

export const metadata = {
  title: "Aniw",
  description: "",
  keywords: [],
};

export default function FileItemPage({ params }) {
  const { id } = params;

  return <FileItemPageContent id={id} />;
}
