import "./styles.css";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onNextPage: Function;
}

export default function ButtonNextPage({onNextPage}: Props) {
  return (
    <div onClick={() => onNextPage()} className="dsc-btn-next-page">Carregar mais</div>
  );
}
