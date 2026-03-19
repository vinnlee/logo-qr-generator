const Footer = () => {
  return (
    <footer className="inner fixed right-0 bottom-0 left-0 flex h-(--footer-h) items-center justify-center gap-2 pt-1 pb-px text-xs lg:pt-2 lg:pb-2">
      <span className="font-mono">© {new Date().getFullYear()} Vincent Lee</span>
      <span className="font-mono">v1.0</span>
    </footer>
  );
};

export default Footer;
