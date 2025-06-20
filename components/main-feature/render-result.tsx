"use client";
import { dataAtom } from "@/app/page";
import { selectAtom } from "jotai/utils";
import { JsonViewer } from "../json-viewer";
import { useAtomValue, type Atom } from "jotai";

type DataAtom = typeof dataAtom extends Atom<infer T> ? T : never;
type ResultSelectFn = (data: DataAtom) => DataAtom["result"] | null;

const resultSelector: ResultSelectFn = (data) => data.result;
export const RenderResult = () => {
	const resultAtom = selectAtom(dataAtom, resultSelector);
	const result = useAtomValue(resultAtom);

	if (!result) {
		return null;
	}

	return <JsonViewer data={result.payload} title="Payload" />;
};
