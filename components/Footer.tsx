export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} A Terceira Onda. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Este é um projeto de pré-marketing. Mantenha-se atento às atualizações.
        </p>
      </div>
    </footer>
  );
} 