import { Sidebar } from "../../components";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="bg-slate-100 text-slate-900 min-h-screen">
            <div className="grid grid-cols-[300px_1fr] h-screen overflow-hidden">
                {/* Sidebar sticky, con su propio scroll */}
                <aside className="sticky top-0 self-start h-screen overflow-y-auto bg-gray-900 text-slate-300 z-10">
                    <Sidebar />
                </aside>

                {/* Main con scroll independiente */}
                <main className="h-screen overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}