import { useParams } from "react-router-dom";

function ContentCategory() {
  const { category } = useParams();
  return <div>ContentCategory</div>;
}

export default ContentCategory;
