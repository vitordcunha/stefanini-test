const Input = (props: React.HTMLProps<HTMLInputElement>) => {
  return (
    <input
      type="text"
      id={props.name}
      {...props}
      className="
          bg-input-background p-3 w-full max-w-[400px] transition-all outline-none
          border rounded-lg border-input-background focus:border-input-focus-border
          placeholder-card-foreground placeholder:font-light
        "
      autoComplete="off"
    />
  );
};

export default Input;
