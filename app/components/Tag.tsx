export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
      {`#${tag}`}
    </span>
  );
}
