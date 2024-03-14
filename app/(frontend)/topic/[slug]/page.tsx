export default function TopicDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1>This is Topic for : {params.slug}</h1>
    </main>
  );
}
