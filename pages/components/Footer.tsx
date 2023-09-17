export const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          © 2023&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.NEXT_PUBLIC_FOOTER_LINK}
          >
            {process.env.NEXT_PUBLIC_FOOTER}
          </a>
        </p>
      </div>
    </footer>
  );
};
