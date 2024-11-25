import Input from "@/_components/input";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  name: string;
}

const FormInput = ({ label, ...props }: InputProps) => {
  return (
    <div className="container flex flex-col items-start gap-2">
      <label htmlFor={props.id} className="text-card-foreground font-light">
        {label}
      </label>

      <Input placeholder={label} {...props} />
    </div>
  );
};

export default FormInput;
