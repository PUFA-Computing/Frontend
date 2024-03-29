export default function Pagination() {
    return (
        <section className="flex items-center justify-center gap-2 px-[5rem] py-[2rem] md:px-[10rem]">
            <button className="rounded-full bg-[#F5F5F5] px-3 py-2">◄</button>
            <div className="flex items-center gap-2">
                <button className="rounded-full bg-[#E50D0D6E] px-4 py-2 text-white">
                    1
                </button>
                <button className="rounded-full bg-[#F5F5F5] px-4 py-2">
                    1
                </button>
                <button className="rounded-full bg-[#F5F5F5] px-4 py-2">
                    1
                </button>
                <button className="rounded-full bg-[#F5F5F5] px-4 py-2">
                    1
                </button>
                <button className="rounded-full bg-[#F5F5F5] px-4 py-2">
                    1
                </button>
                <button className="rounded-full bg-[#F5F5F5] px-4 py-2">
                    1
                </button>
            </div>
            <button className="rounded-full bg-[#F5F5F5] px-3 py-2">►</button>
        </section>
    );
}
