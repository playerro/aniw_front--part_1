import PostItemCommentsPageContent from "@/components/PostItemCommentsPage/PostItemCommentsPageContent";

export const metadata = {
  title: "Aniw",
  description: "",
  keywords: [],
};

export default function PostItemCommentsPage({ params }) {
  const { id } = params;

  return <PostItemCommentsPageContent id={id} />;
}
