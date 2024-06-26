import News from "@/models/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsCardBig({ news }: { news: News[] }) {
    const sortedNews = news.sort((a, b) => {
        return (
            new Date(b.publish_date).getTime() -
            new Date(a.publish_date).getTime()
        );
    });

    const createMarkup = (htmlString: string) => {
        return { __html: htmlString.replace(/<[^>]*>?/gm, "") };
    };

    const limitedNews = sortedNews.slice(0, 1);
    return (
        <section>
            {limitedNews.map((item, index) => (
                <Link href={`news/${item.slug}`} key={index}>
                    <article className="relative h-full overflow-hidden rounded-lg shadow transition hover:shadow-lg ">
                        <Image
                            alt={`${item.title}'s Image`}
                            src={item.thumbnail}
                            width={1920}
                            height={1080}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                <time className="block text-xs text-white/90">
                                    {new Date(item.publish_date).toDateString()}
                                </time>
                                <h3 className="mt-0.5 text-lg text-white">
                                    {item.title}
                                </h3>
                                <p
                                    className="mt-2 line-clamp-3 text-sm/relaxed text-white/95"
                                    dangerouslySetInnerHTML={createMarkup(
                                        item.content
                                    )}
                                />
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    );
}
