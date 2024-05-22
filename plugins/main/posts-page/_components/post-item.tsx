
import Image from "next/image";

interface IPost {
  id: number;
  title: string;
  desc: string;
  image: string;
  create_at: string;
}

export const PostPageItem = ({ post }: { post: IPost }) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between transition-all shadow-md p-7 hover:shadow-lg hover:scale-105">
      <div className="flex items-center gap-x-4 text-xs">
        <time className="text-gray-500">Mar 16, 2020</time>
        <a
          href="#"
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          Marketing
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-neutral-100">
          <a href="#">
            <span className="absolute inset-0"></span>
            Boost your conversion rate
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti
          dicta.
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <Image
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900 dark:text-neutral-200">
            <a href="#">
              <span className="absolute inset-0"></span>
              Michael Foster
            </a>
          </p>
          <p className="text-gray-600">Co-Founder / CTO</p>
        </div>
      </div>
    </article>
  );
};
