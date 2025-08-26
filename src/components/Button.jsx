import "./Button.css";

export default function Button({ children, variant = "primary", as = "button", to, ...rest }) {
    const className = `btn ${variant === "outline" ? "btn--outline" : "btn--primary"}`;
    if (as === "a") {
      return (
        <a href={to || "#"} className={className} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }