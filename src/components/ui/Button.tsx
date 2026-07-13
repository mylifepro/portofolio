type ButtonProps = {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
};

export default function Button({
  children,
  href,
  primary = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`
        px-7
        py-3
        rounded-full
        font-medium
        transition-all
        duration-300

        ${
          primary
            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
            : "border border-zinc-700 hover:border-emerald-400"
        }
      `}
    >
      {children}
    </a>
  );
}