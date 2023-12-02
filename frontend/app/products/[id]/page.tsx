"use client";


import Head from "next/head";
import { usePathname } from "next/navigation";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { use } from "react";
import useSWR from "swr";
import { Image } from "@chakra-ui/react";

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}


export default function Home() { 
    const id = usePathname().split("/")[2];
    const c = ["Bad microphone", "Comment1asdkajlkasjdkladjalsjdlasdjasldasda", "Good", "Okay"]

    const url = "data:image/jpeg;base64,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"


    return (
        <>
          <Head>
            <title> LauzHack 2023</title>
          </Head>
          <main className="flex justify-center min-h-screen flex-col w-full p-16">
            {/* <Image src={url} boxSize='250px'></Image>c */}
            <Table>
              <TableHeader>
                <TableRow>
                {/* |issue| Sev level | # reviews | */}
                    <TableHead>Issue</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead># Reviews</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {c.map((c, index) => (
                  index %2 == 0 ? <TableRow className="border-none" key={index}>
                    <TableCell>{c}</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>42</TableCell>
                  </TableRow > :
                    <TableRow key={index} className="bg-muted hover:bg-muted">
                        <TableCell colSpan={3}>{c}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </main>  
        </>
        );
}