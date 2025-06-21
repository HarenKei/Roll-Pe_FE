import type { Metadata } from "next";
import { HeaderDefault } from "../_components/Commons/UI/Layouts/Header/Header";
import Footer from "../_components/Commons/UI/Layouts/Footer/Footer";

export const metadata: Metadata = {
  title: "롤페 | Roll-Pe",
  description: "모두의 마음을 모아 사랑하는 사람에게 전달해보세요.",
};

export default function BackHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderDefault />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "100%",
          minHeight: "100%",
          position: "relative",
        }}
      >
        {children}
        <Footer />
      </div>
    </>
  );
}
