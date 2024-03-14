export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1>News Details for : {params.category}</h1>
    </main>
  );
}
