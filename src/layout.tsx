export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto grid min-h-screen max-w-xl grid-rows-[60px,1fr,60px] gap-2 p-4 text-gray-50">
      <header>
        <h1 className="text-2xl font-bold">Improve forms 📜</h1>
      </header>
      <main>{children}</main>
      <footer>
        <em>im trying 😭</em>
      </footer>
    </div>
  )
}
