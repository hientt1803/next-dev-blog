import { Id } from "@/convex/_generated/dataModel";
import React from "react";
import { POST_STATUS_TYPE } from "@/convex/schema";

// export enum POST_STATUS {
//   DRAFT = "draft",
//   PUBLISHED = "published",
//   ARCHIVED = "arcguved"
// }

export interface IPosts {
  _creationTime: number;
  _id: Id<"posts">;
  desc: string;
  excerpt: string;
  image?: string;
  slug: string;
  status: POST_STATUS_TYPE;
  tag: ITags;
  tag_id: string;
  title: string;
  user: IUsers;
  user_id: string;
  views: number;
}

export interface ITags {
  _id: Id<"tags">;
  slug: string;
  name: string;
  desc: string;
  _creationTime: number;
}

export interface IUsers {
  _id: Id<"users">;
  username: string;
  full_name: string;
  email: string;
  password: string;
  bio: string;
  avartar: string;
  tokenIdentifier: string;
  _creationTime: number;
}

export type LayoutProps = {
  children: React.ReactNode;
};
