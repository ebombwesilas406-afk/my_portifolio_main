import Navbar from "@/components/Navbar";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="page-shell">{children}</div>
    </>
  );
}
