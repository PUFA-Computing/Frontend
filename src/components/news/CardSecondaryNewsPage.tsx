import News from "@/models/news";
import Image from "next/image";
import PUFACOMPUTING from "@/assets/PUComputing.png";
import Link from "next/link";

export default function CardSecondaryNewsPage({ news }: { news: News[] }) {
    const sortedNews = news.sort((a, b) => {
        return (
            new Date(b.publish_date).getTime() -
            new Date(a.publish_date).getTime()
        );
    });

    // 3 news
    const limitedNews = sortedNews.slice(1, 3);

    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.substring(0, maxLength) + "...";
    };

    const createMarkup = (htmlString: string) => {
        return { __html: htmlString.replace(/<[^>]*>?/gm, "") };
    };

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {limitedNews.map((item, index) => (
                <Link href={`news/${item.slug}`} key={index}>
                    <div className="flex flex-col rounded-lg border-2">
                        <div>
                            <Image
                                className="h-48 w-full rounded bg-center object-cover"
                                src={item.thumbnail}
                                height={1080}
                                width={1920}
                                alt={`${item.title}'s image`}
                            />
                        </div>
                        <div className="flex h-[45%] flex-col justify-between space-y-4 px-2 py-2">
                            <div className="flex w-[10rem] justify-center rounded-3xl border border-[#FF6F22] px-2 text-[0.8rem] text-[#FF6F22]">
                                {item.organization}
                            </div>
                            <h1 className="text-[1.2rem] font-bold">
                                {item.title}
                            </h1>
                            <p
                                className="text-justify text-[0.9rem] font-light"
                                dangerouslySetInnerHTML={createMarkup(
                                    truncateDescription(item.content, 147)
                                )}
                            />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
