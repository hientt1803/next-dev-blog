import { CategoryItem } from "./category-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const listCategories = [
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
];

export const CategoriesList = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sticky top-16 right-0 transition-all">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Filter for what you need!
      </h4>
      <div className="flex justify-end w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Search everything you want"
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <CategoryItem data={listCategories} title="Categories" />
        <CategoryItem data={listCategories} title="items" />
      </div>
    </div>
  );
};
