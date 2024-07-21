import { ImageResponse } from "@vercel/og";
import * as React from "react";

export async function GET(request: Request) {
  const requestUrl = request.url;

  const url = new URL(requestUrl);

  const title = url.searchParams.get("title");
  const description = url.searchParams.get("description");

  return new ImageResponse(
    (
      <div
        tw="text-[#363681] w-full h-full flex flex-col bg-[#F3F2F8] p-4"
        style={{
          background: "linear-gradient(to bottom right, #FFF8E3, #E6A4B4)",
        }}
      >
        <div tw="flex w-full items-center mb-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${url.origin}/logo.png`}
            alt=""
            aria-hidden={true}
            tw="w-16 h-16"
          />
          <div tw="text-2xl font-bold border-b-2 border-[#2646BA]">
            Sudhanshu&#39;s Blogs
          </div>
        </div>
        <section tw="flex flex-col flex-1 justify-center items-center">
          <div tw="text-4xl font-bold text-black">{title}</div>
          <p tw="text-lg text-[#363681]">{description}</p>
        </section>
      </div>
    )
  );
}
