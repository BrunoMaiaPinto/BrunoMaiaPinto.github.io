export default function Button({ url, children }) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-orange-600 rounded py-2 px-2 text-white hover:text-gray-700"
    >
      {children}
    </a>
  );
}
