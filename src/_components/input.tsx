export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  name: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="container flex flex-col items-start gap-2">
      <label htmlFor={props.id} className="text-card-foreground font-light">
        {label}
      </label>

      <input
        type="text"
        id={props.name}
        {...props}
        className="
          bg-input-background p-3 w-full transition-all outline-none
          border rounded-lg border-input-background focus:border-input-focus-border
          placeholder-card-foreground placeholder:font-light
        "
        placeholder={label}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
