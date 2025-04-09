export function Artist(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
