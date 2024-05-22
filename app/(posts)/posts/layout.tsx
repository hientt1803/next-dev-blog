import { Footer } from "@/plugins/main/footer/footer";
import { MainHeader } from "@/plugins/main/header/header";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
