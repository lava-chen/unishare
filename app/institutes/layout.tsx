import "../globals.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="h-full">
        <div className=" h-full">{children}</div>
      </main>
    </>
  );
};
export default Layout;
