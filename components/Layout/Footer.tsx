export default function Footer({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
