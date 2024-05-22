import React from "react";

export type BlogType = {
  id: string;
  slug: string;
  views: number;
  content: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};