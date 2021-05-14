import "./PageTitle.css";

export default function PageHeading({ children }) {
  return (
    <div>
      <h1 className="PageTitle">{children}</h1>
    </div>
  );
}
