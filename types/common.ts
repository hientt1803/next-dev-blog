import { Id } from "@/convex/_generated/dataModel";
import React from "react";
import { POST_STATUS_TYPE } from "@/convex/schema";

// export enum POST_STATUS {
//   DRAFT = "draft",
//   PUBLISHED = "published",
//   ARCHIVED = "arcguved"
// }

export interface IPosts {
  _id: Id<"posts"> | undefined;
  slug: string;
  title: string;
  excerpt: string;
  desc: string;
  image?: string;
  views: number;
  status: POST_STATUS_TYPE;
  user_id?: Id<"users">;
  tag_id?: Id<"tags">;
  _creationTime: number;
}

export interface ITags {
  _id: Id<"tags">;
  slug: string;
  name: string;
  desc: string;
  _creationTime: number;
}

export type LayoutProps = {
  children: React.ReactNode;
};
