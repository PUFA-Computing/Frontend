import Navbar from "@/components/Navbar";

export default async function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      //navbar
      <>
         <Navbar />
         <div className="bg-white">{children}</div>
      </>
   );
}
