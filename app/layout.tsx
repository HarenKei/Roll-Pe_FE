import type { Metadata } from "next";
import "./globals.css";
import { COLORS } from "@/public/styles/colors";
import StyledComponentsRegistry from "@/public/lib/registry";
import { pretendard, hakgyoansim, dunggeunmo } from "@/public/fonts/fonts";
import Footer from "./_components/ui/layouts/Footer";
import ReduxProvider from "./_components/redux-provider/ReduxProvider";

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
        <ReduxProvider>
          <StyledComponentsRegistry>
            <div
              style={{
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                width: "100%",
                maxWidth: "768px",
                height: "100svh",
                border: `1px solid ${COLORS.ROLLPE_GRAY}`,
                overflowX: "hidden",
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <main style={{ flex: "1", width: "100%" }}>{children}</main>
              <Footer />
            </div>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
