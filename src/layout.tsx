export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-xl mx-auto min-h-screen text-gray-50 grid grid-rows-[60px,1fr,60px] gap-2 p-4">
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
