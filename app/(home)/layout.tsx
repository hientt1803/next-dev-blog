import { MainHeader } from "@/plugins/main/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="container">{children}</main>
    </>
  );
}
