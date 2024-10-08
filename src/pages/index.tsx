import { Inter } from "next/font/google";
import categoriesMock from "@/mock/categories.json"
import itemsMock from "@/mock/items.json"
import { Category, Item } from "@/types/types";
import CategoryComponent from "@/components/CategoryComponent";
import CategoryNavComponent from "@/components/CategoryNavComponent";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  let menuCategories: Category[] = [];
  categoriesMock.map((category) => {
    let categoryItem: Category = JSON.parse(JSON.stringify(category))
    let itemsTemp: Item[] = itemsMock.filter(item => item.categoria_id == category.id)
    categoryItem.items = itemsTemp
    menuCategories.push(categoryItem)
  })

  return (
    <>
    <CategoryNavComponent></CategoryNavComponent>
    <main className="
      2xl:max-w-[1536px] 2xl:mx-auto
      mx-2
      ">
      {menuCategories.map((category, ic) => {
        return (
          <CategoryComponent key={'category'+ic}>{category}</CategoryComponent>
        )
      })}
    </main>
  </>
  );
}
