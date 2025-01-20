"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTransition } from "react";
import { useRouter } from "next/compat/router";
import { useState } from "react";

import createNewPost from "@/actions/new-post";

const NewPost = () => {
  const [content, setContent] = useState<string>("");
  const [course, setCourse] = useState<string>("");

  const [major, setMajor] = useState<string>("水文工程");

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    console.log("分享内容:", content);
    console.log("学科:", course);

    startTransition(() => {
      createNewPost(content, course, major);
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="super" className="font-bold">
          发布你的 UNi-share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>发布一个 Uni-share</DialogTitle>
          <DialogDescription>
            发布你的学习资源或者分享你的学科经验使得知识得以积累！
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              分享内容
            </Label>
            <Input
              id="name"
              value={content}
              defaultValue={"一个资源链接或者你的一句忠告"}
              onChange={(e) => setContent(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              学科
            </Label>
            <Input
              id="username"
              value={course}
              defaultValue={"ex: 计算机科学与技术"}
              onChange={(e) => setCourse(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onClick}>
            发布
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;
