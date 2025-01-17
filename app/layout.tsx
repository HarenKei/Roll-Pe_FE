import type { Metadata } from "next";
import "./globals.css";
import { COLORS } from "@/public/styles/colors";
import StyledComponentsRegistry from "@/public/lib/registry";
import { pretendard, hakgyoansim } from "@/public/fonts/fonts";

export const MobileMinWidth: number = 320;
export const MobileMaxWidth: number = 600;

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
    <html lang="ko" className={hakgyoansim.className}>
      <body className={pretendard.variable}>
        <StyledComponentsRegistry>
          <main
            style={{
              // minWidth: "320px",
              position: "fixed",
              width: "390px",
              height: "100svh",
              border: `2px solid ${COLORS.ROLLPE_GRAY}`,
            }}
          >
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
