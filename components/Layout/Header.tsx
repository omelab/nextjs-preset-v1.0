export default function Header({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
