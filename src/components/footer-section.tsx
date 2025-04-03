export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border border-opacity-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Estéfano Bugari. Derechos reservados.
        </p>
      </div>
    </footer>
  );
}