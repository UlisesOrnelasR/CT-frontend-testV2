interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return <p className="text-2xl font-extrabold text-left">{title}</p>;
};
