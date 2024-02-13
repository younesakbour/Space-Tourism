import { Barlow_Condensed } from "next/font/google";
import { Bellefair } from "next/font/google";
import { Barlow } from "next/font/google";

export const barlow_condensed = Barlow_Condensed({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export const barlow= Barlow({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export const bellefair = Bellefair({ subsets: ['latin'], weight: ['400'] })