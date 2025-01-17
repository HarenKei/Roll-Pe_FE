import type { Metadata } from "next";
import "./globals.css";
import { COLORS } from "@/public/styles/colors";
import StyledComponentsRegistry from "@/public/lib/registry";
import { pretendard, hakgyoansim, dunggeunmo } from "@/public/fonts/fonts";

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
    <html
      lang="ko"
      className={`${hakgyoansim.variable} ${pretendard.variable} ${dunggeunmo.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <main
            style={{
              position: "fixed",
              minWidth: "390px",
              maxWidth: "600px",
              height: "100svh",
              border: `1px solid ${COLORS.ROLLPE_GRAY}`,
              overflowY: "auto",
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
            }}
          >
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
