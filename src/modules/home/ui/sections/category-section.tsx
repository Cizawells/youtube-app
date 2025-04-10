"use client";

import { FilterCarousel } from "@/filter-carousel";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

export const CategoriesSectionSuspense = ({
  categoryId,
}: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const data = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return <FilterCarousel value={categoryId} data={data} />;
};
