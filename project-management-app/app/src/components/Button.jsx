export default function Button({ children, ...props }) {
  const classes =
    "px-6 py-2 cursor-pointer rounded-md bg-stone-600 text-stone-50 hover:bg-stone-950 ";
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
