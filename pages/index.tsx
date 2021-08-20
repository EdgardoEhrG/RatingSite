import Rating from "../components/Rating/Rating";

export default function Home(): JSX.Element {
  return (
    <div>
      <Rating rating={3} isEditable={true} />
    </div>
  );
}
