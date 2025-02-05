import type { Metadata } from "next";
import { HeaderDefault } from "../_components/ui/layouts/Header";
import SlideMenu from "../_components/ui/layouts/SlideMenu";

export const metadata: Metadata = {
  title: "롤페 | Roll-Pe",
  description: "모두의 마음을 모아 사랑하는 사람에게 전달해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderDefault />
      {children}
    </>
  );
}
