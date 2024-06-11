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
  tag: {
    _creationTime: number;
    _id: Id<"tags">;
    description: string;
    name: string;
    slug: string;
  };
  tag_id: string;
  title: string;
  user: {
    _creationTime: number;
    _id: Id<"users">;
    avartar: string;
    bio: string;
    email: string;
    full_name: string;
    password: string;
    tokenIdentifier: string;
    username: string;
  };
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

export type LayoutProps = {
  children: React.ReactNode;
};
